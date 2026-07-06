"use client";

import { motion } from 'framer-motion';

const PrivacyClient = () => {
  return (
    <>
      <section className="bg-alternate pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 96 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gold mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Last updated: {new Date().toLocaleDateString()}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-gray-700">
          <div className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm rounded-xl">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">1. Information We Collect</h2>
            <p className="mb-8 leading-relaxed">
              We collect information you provide directly to us when you request a quote, book a service, or contact us for inquiries. This may include your name, email address, phone number, event details, and payment information.
            </p>

            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">2. How We Use Your Information</h2>
            <p className="mb-8 leading-relaxed">
              We use the information we collect to provide, maintain, and improve our catering services. This includes communicating with you about your event, processing payments, and sending you updates or promotional offers (which you can opt out of at any time).
            </p>

            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">3. Information Sharing</h2>
            <p className="mb-8 leading-relaxed">
              We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, such as payment processors, provided they agree to keep this information confidential.
            </p>

            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">4. Data Security</h2>
            <p className="mb-8 leading-relaxed">
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">5. Contact Us</h2>
            <p className="mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:roycaterer251@gmail.com" className="text-gold hover:underline">roycaterer251@gmail.com</a> or call us at <a href="tel:+919933762891" className="text-gold hover:underline">+91 9933762891</a> or <a href="tel:+917679654927" className="text-gold hover:underline">+91 7679654927</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyClient;
