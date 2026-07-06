"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServicesClient = () => {
  const servicesList = [
    {
      title: 'Wedding Catering',
      desc: 'From intimate ceremonies to grand receptions, we provide exquisite menus, stunning presentations, and flawless service for your special day.',
      features: ['Customized Menus', 'Live Food Counters', 'Elegant Table Setups', 'Dedicated Event Manager'],
      image: '/images/wedding.png'
    },
    {
      title: 'Corporate Events',
      desc: 'Impress your clients and colleagues with our professional corporate catering. From board meetings to grand galas.',
      features: ['Coffee Breaks', 'Executive Lunches', 'Gala Dinners', 'Dietary Accommodations'],
      image: '/images/corporate_event.png'
    },
    {
      title: 'Private Parties',
      desc: 'Celebrate milestones with bespoke dining experiences in the comfort of your chosen venue. Ideal for birthdays, anniversaries, and reunions.',
      features: ['Themed Menus', 'Interactive Chef Stations', 'Premium Bartending', 'Intimate Dining'],
      image: '/images/private_party.png'
    },
    {
      title: 'Festival Catering',
      desc: 'Embrace the spirit of celebration with our specialized festive menus featuring authentic regional and international cuisines.',
      features: ['Traditional Delicacies', 'Large Scale Cooking', 'Festive Decor Integration', 'Cultural Authenticity'],
      image: '/images/festival_catering.png'
    },
    {
      title: 'Promotional Parties',
      desc: 'Elevate your brand with our premium catering services designed for product launches, marketing events, and promotional gatherings.',
      features: ['Branded Food Stations', 'Signature Cocktails', 'Modern Appetizers', 'Interactive Experiences'],
      image: '/images/promotional_party.png'
    },
    {
      title: 'Government Job Parties',
      desc: 'Formal and dignified catering for government events, official gatherings, and public sector milestones.',
      features: ['Elegant Table Setups', 'Sophisticated Menus', 'Professional Service', 'VIP Accommodations'],
      image: '/images/government_event.png'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-alternate pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6"
          >
            Bespoke Catering Services
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 96 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gold mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Tailored culinary experiences designed to elevate your event, leaving a lasting impression on your guests.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {servicesList.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden group">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 border border-white/20 m-4 rounded-lg pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.desc}</p>
                  
                  <h4 className="font-serif text-xl font-semibold mb-4 text-charcoal">Key Features</h4>
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="btn-primary inline-flex gap-2">
                    Book {service.title} <ArrowRight size={18} />
                  </Link>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Menu CTA */}
      <section className="py-20 bg-charcoal text-center text-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Need a Custom Menu?</h2>
          <p className="text-gray-400 mb-8">Our executive chefs are ready to craft a personalized menu tailored specifically to your dietary requirements and event theme.</p>
          <Link href="/contact" className="btn-outline border-gold text-gold hover:bg-gold hover:text-charcoal inline-flex">
            Consult with our Chefs
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesClient;
