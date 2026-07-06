"use client";

import { motion } from 'framer-motion';

const TermsClient = () => {
  return (
    <>
      <section className="bg-alternate pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6"
          >
            Terms of Service
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
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">1. Acceptance of Terms</h2>
            <p className="mb-8 leading-relaxed">
              By accessing and using our website and services, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>

            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">2. Service Booking and Payments</h2>
            <p className="mb-8 leading-relaxed">
              A deposit is required to secure your booking date. Final guest counts and remaining balances are due prior to the event date as specified in your catering contract. All payments are non-refundable within the timeframe stated in your specific agreement.
            </p>

            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">3. Menu Changes and Substitutions</h2>
            <p className="mb-8 leading-relaxed">
              We strive to provide the exact menu agreed upon. However, due to seasonal availability and market fluctuations, we reserve the right to make reasonable substitutions of equal or greater value if necessary. We will always attempt to notify you of any significant changes.
            </p>

            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">4. Liability</h2>
            <p className="mb-8 leading-relaxed">
              Roy Services is not liable for any failure to perform our obligations where such failure is due to circumstances beyond our reasonable control, including but not limited to acts of God, severe weather, or supply chain disruptions.
            </p>

            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">5. Modifications</h2>
            <p className="mb-4 leading-relaxed">
              We reserve the right to modify these terms at any time. Your continued use of our services following any changes constitutes your acceptance of the new terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsClient;
