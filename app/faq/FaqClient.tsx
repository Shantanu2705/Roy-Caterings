"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqClient = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of events do you cater to?",
      answer: "We cater to a wide range of events including weddings, corporate gatherings, private parties, birthday celebrations, and government official events. Whether it's an intimate dinner or a grand gala, we have you covered."
    },
    {
      question: "Do you offer customizable menus?",
      answer: "Yes! We understand that every event is unique. Our executive chefs work closely with you to design a personalized menu that fits your event's theme, dietary preferences, and budget."
    },
    {
      question: "Do you provide home delivery for everyday meals?",
      answer: "Yes, we do. If you don't have cooking facilities or just want a hassle-free meal, we deliver fresh, home-style food right to your doorstep with no extra delivery or cooking charges."
    },
    {
      question: "How far in advance should I book your catering services?",
      answer: "For large events like weddings and corporate functions, we recommend booking at least 1-2 months in advance to secure your date. For smaller parties, 1-2 weeks is usually sufficient."
    },
    {
      question: "Do you provide waitstaff and cutlery?",
      answer: "Absolutely. We provide professional waitstaff, elegant table settings, and premium cutlery to ensure a seamless dining experience for your guests."
    },
    {
      question: "Can you accommodate dietary restrictions and allergies?",
      answer: "Yes, our culinary team is highly experienced in preparing vegetarian, vegan, gluten-free, and allergy-friendly meals. Please let us know your requirements in advance."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-alternate pt-32 pb-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 96 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gold mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Find answers to common questions about our catering services, bookings, menus, and more.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left focus:outline-none"
                >
                  <span className="font-serif font-bold text-xl text-charcoal pr-4">{faq.question}</span>
                  <ChevronDown className={`text-gold shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} size={24} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="p-6 pt-0 text-gray-600 text-lg leading-relaxed border-t border-gray-100 mt-2">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqClient;
