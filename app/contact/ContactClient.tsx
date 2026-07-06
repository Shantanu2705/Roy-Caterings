"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactClient = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', eventType: '', guests: '', eventDate: '', message: ''
  });
  const [status, setStatus] = useState({ loading: false, error: null as string | null, success: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => 
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      // Direct to WhatsApp logic
      const whatsappMessage = `Hello Roy Caterers,%0A%0AI would like to request a quote for an event.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Event Type:* ${formData.eventType}%0A*Guests:* ${formData.guests}%0A*Date:* ${formData.eventDate}%0A%0A*Message:*%0A${formData.message}`;
      const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919933762891';
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
      
      window.open(whatsappLink, '_blank');
      
      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', phone: '', email: '', eventType: '', guests: '', eventDate: '', message: '' });
    } catch (err: any) {
      setStatus({ loading: false, error: err.message, success: false });
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-charcoal text-white pt-32 pb-16 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Let's Discuss Your Event
          </motion.h1>
          <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 64 }} transition={{ delay: 0.2 }} className="h-1 bg-gold mx-auto mb-6"></motion.div>
          <p className="text-gray-300">Reach out to us to start planning an unforgettable culinary experience.</p>
        </div>
      </section>

      <section className="py-20 bg-alternate">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-alternate flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Our Office</h4>
                    <p>Bagdogra Bhujiyapani,<br />Darjeeling, West Bengal, Pin: 734014</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-alternate flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Phone</h4>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919933762891" className="hover:text-gold transition-colors">+91 9933762891</a>
                      <a href="tel:+917679654927" className="hover:text-gold transition-colors">+91 7679654927</a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-alternate flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Email</h4>
                    <p>roycaterer251@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-600">
                  <div className="w-10 h-10 rounded-full bg-alternate flex items-center justify-center shrink-0">
                    <Clock className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal mb-1">Business Hours</h4>
                    <p>Mon - Sun: 9:00 AM - 8:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-6">Request a Quote</h3>
              
              {status.success && (
                <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-md border border-green-200 flex items-start gap-3">
                  <CheckCircle2 className="shrink-0 mt-0.5" size={20} />
                  <p>Thank you! Your request has been successfully submitted. We will contact you shortly.</p>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-md border border-red-200 flex items-start gap-3">
                  <AlertCircle className="shrink-0 mt-0.5" size={20} />
                  <p>{status.error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="+91 9933762891" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
                    <select required name="eventType" value={formData.eventType} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all bg-white">
                      <option value="">Select Event Type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate">Corporate Event</option>
                      <option value="Birthday">Birthday Party</option>
                      <option value="Private">Private Party</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Guests *</label>
                    <input required type="number" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="e.g. 150" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Date *</label>
                    <input required type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message or Special Requirements *</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none" placeholder="Tell us more about your event..."></textarea>
                </div>

                <button type="submit" disabled={status.loading} className="btn-primary w-full disabled:opacity-70">
                  {status.loading ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactClient;
