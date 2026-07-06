import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { z } from 'zod';
import xss from 'xss';

// Define a strict schema for input validation
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  phone: z.string().min(1, 'Phone is required').max(20),
  email: z.string().email('Invalid email address').max(150),
  eventType: z.string().min(1, 'Event type is required').max(100),
  guests: z.string().min(1, 'Number of guests is required').max(50),
  eventDate: z.string().min(1, 'Event date is required').max(50),
  message: z.string().min(1, 'Message is required').max(2000),
});

export async function POST(request: Request) {
  try {
    // 1. Content-Type Validation
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { success: false, message: 'Invalid Content-Type. Expected application/json.' },
        { status: 415 }
      );
    }

    const body = await request.json();

    // 2. Input Validation (Zod)
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid input format.', errors: validationResult.error.issues },
        { status: 400 }
      );
    }

    // 3. Input Sanitization (XSS)
    const { name, phone, email, eventType, guests, eventDate, message } = validationResult.data;
    const sanitizedName = xss(name);
    const sanitizedPhone = xss(phone);
    const sanitizedEmail = xss(email);
    const sanitizedEventType = xss(eventType);
    const sanitizedGuests = xss(guests);
    const sanitizedEventDate = xss(eventDate);
    const sanitizedMessage = xss(message);

    // Format the email content securely
    const emailText = `
      New Catering Inquiry Received:
      
      Name: ${sanitizedName}
      Phone: ${sanitizedPhone}
      Email: ${sanitizedEmail}
      Event Type: ${sanitizedEventType}
      Number of Guests: ${sanitizedGuests}
      Event Date: ${sanitizedEventDate}
      
      Message/Requirements:
      ${sanitizedMessage}
    `;

    const emailHtml = `
      <h2>New Catering Inquiry</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedName}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedPhone}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedEmail}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Event Type:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedEventType}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Guests:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedGuests}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Event Date:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${sanitizedEventDate}</td></tr>
      </table>
      <h3>Message:</h3>
      <p style="padding: 12px; background-color: #f9f9f9; border-left: 4px solid #C69C6D;">${sanitizedMessage}</p>
    `;

    // Only attempt to send email if SMTP is configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const contactEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
      await sendEmail({
        email: contactEmail as string,
        subject: `New Inquiry from ${sanitizedName} - ${sanitizedEventType}`,
        message: emailText,
        html: emailHtml,
      });
    }

    return NextResponse.json(
      { success: true, message: 'Request submitted successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    // 4. Safe Error Handling: Never expose stack traces or detailed errors
    console.error('Contact Form Submission Error:', error);
    return NextResponse.json(
      { success: false, message: 'An internal server error occurred while processing your request.' },
      { status: 500 }
    );
  }
}

// 5. Method Validation: Block anything that isn't POST
export function GET() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
export function PUT() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
export function DELETE() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
