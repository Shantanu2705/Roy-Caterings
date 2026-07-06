"use client";

import { motion } from 'framer-motion';

const AboutClient = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Our Story
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={{...fadeUp, visible: {...fadeUp.visible, transition: { duration: 0.8, delay: 0.2 }}}} className="text-lg text-gray-300">
            A legacy of culinary excellence, blending traditional flavors with modern elegance.
          </motion.p>
        </div>
      </section>

      {/* Story Timeline & Intro */}
      <section className="section-padding bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">A Passion for Gastronomy</h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in Siliguri, Roy Services began with a simple vision: to elevate local events with exceptional food and world-class service. Over the years, we have grown from a small family operation into the region's most trusted premium catering brand.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that food is more than sustenance; it's an experience that brings people together, creates memories, and celebrates life's most precious moments.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-96 rounded-lg overflow-hidden shadow-xl">
            <img src="/images/hero.png" alt="Catering Preparation" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-alternate">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Our Mission', desc: 'To provide unparalleled catering services that exceed expectations through innovative menus, flawless execution, and genuine hospitality.' },
              { title: 'Our Vision', desc: 'To be the premier choice for luxury catering in West Bengal, setting the standard for culinary excellence and event design.' },
              { title: 'Core Values', desc: 'Quality without compromise. Integrity in every interaction. Creativity in our craft. Dedication to our clients.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-lg shadow-sm text-center border-t-4 border-gold"
              >
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Kitchen Standards */}
      <section className="section-padding bg-charcoal text-ivory">
         <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Kitchen Standards</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-gray-400 mb-12 leading-relaxed text-lg">
               We maintain the highest levels of hygiene, sourcing only the freshest local and imported ingredients. Our master chefs combine traditional techniques with modern culinary arts to craft exquisite dishes.
            </p>
         </div>
      </section>
    </>
  );
};

export default AboutClient;
