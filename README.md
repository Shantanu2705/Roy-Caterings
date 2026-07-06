# Roy Services - Premium Catering

This is the production-ready Next.js 15 application for **Roy Services**, a premium catering company based in Siliguri, West Bengal. 

The website has been optimized and migrated to the Next.js App Router for optimal performance, edge deployment, and SEO.

## Technology Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + PostCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email Delivery:** Nodemailer

## Getting Started

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Copy the `.env.example` file to `.env.local` and populate the values:
   ```bash
   cp .env.example .env.local
   ```
   **Required Environment Variables:**
   - `SMTP_HOST`: Your SMTP server (e.g., `smtp.gmail.com`)
   - `SMTP_USER`: Your email address
   - `SMTP_PASS`: Your email app password
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Your WhatsApp business number (e.g., `919933762891`)

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create an optimized production build, run:
```bash
npm run build
npm start
```

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new). The project is fully compatible out-of-the-box. Just remember to add your environment variables to the Vercel dashboard.
