"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Calendar, ChefHat, Star } from 'lucide-react';
import Link from 'next/link';

const HomeClient = () => {
  const stats = [
    { id: 1, name: 'Years Experience', value: '15+', icon: Calendar },
    { id: 2, name: 'Events Served', value: '2,500+', icon: Star },
    { id: 3, name: 'Happy Clients', value: '10k+', icon: Users },
    { id: 4, name: 'Professional Staff', value: '150+', icon: ChefHat },
  ];

  const services = [
    {
      title: 'Wedding Catering',
      desc: 'Flawless culinary experiences for your special day.',
      image: '/images/wedding.png',
    },
    {
      title: 'Corporate Events',
      desc: 'Professional and seamless catering for business gatherings.',
      image: '/images/corporate_event.png',
    },
    {
      title: 'Private Parties',
      desc: 'Intimate dining with bespoke menus and elegant setups.',
      image: '/images/private_party.png',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero.png" alt="Luxury Catering Buffet" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/50 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-6">
              Premium Catering Services for Every Celebration
            </h1>
            <p className="text-lg md:text-xl text-ivory mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Creating unforgettable dining experiences across Bagdogra, Siliguri with exceptional food, flawless service, and elegant presentation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary bg-gold text-charcoal hover:bg-white w-full sm:w-auto">
                Book Catering
              </Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal w-full sm:w-auto">
                Explore Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-alternate py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                    <Icon className="text-charcoal group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-charcoal mb-2">{stat.value}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4">Premium Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our tailored catering solutions designed to elevate your special occasions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="luxury-card group cursor-pointer"
              >
                <div className="h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center text-charcoal font-medium group-hover:text-gold transition-colors">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <Link href="/services" className="btn-outline inline-flex border-gray-300">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-charcoal text-ivory">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Why Choose Roy Services?</h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              With over a decade of excellence in the hospitality industry, we bring unparalleled expertise, creativity, and passion to every event we cater in Bagdogra, Siliguri and beyond.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {['Professional Team', 'Fresh Ingredients', 'Customized Menus', 'On-Time Delivery', 'Elegant Presentation', 'Premium Quality'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold w-6 h-6 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <Link href="/about" className="btn-primary bg-gold text-charcoal hover:bg-white inline-flex mt-12">
              Our Story
            </Link>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative h-[600px] rounded-lg overflow-hidden"
          >
            <img src="/images/hero.png" alt="Chef preparing food" className="w-full h-full object-cover" />
            <div className="absolute inset-0 border-2 border-gold/30 m-6 rounded-lg pointer-events-none"></div>
          </motion.div>
        </div>
      </section>
      
      {/* Home Delivery / No Kitchen Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gold text-charcoal p-10 md:p-14 rounded-2xl shadow-xl max-w-5xl mx-auto relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                No kitchen? No problem!
              </h2>
              <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed opacity-90">
                <p>
                  If you don't have cooking facilities, we've got you covered. We prepare fresh, healthy, hygienic, and delicious home-style meals and deliver them right to your doorstep.
                </p>
                <p>
                  Our delivery staff will serve your meal, and once you're finished, they will collect and take back all the utensils used for delivery. There are no cooking or delivery charges from our side—you only pay for the food you order.
                </p>
                <p className="text-2xl font-serif mt-8 border-t border-charcoal/20 pt-8 font-bold">
                  Enjoy the convenience of wholesome meals without the hassle of cooking or cleaning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-alternate text-center">
         <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">Let's Make Your Event Unforgettable</h2>
            <p className="text-gray-600 mb-10 text-lg">Contact us today to discuss your vision and receive a customized catering proposal.</p>
            <Link href="/contact" className="btn-primary bg-charcoal text-white hover:bg-gold inline-flex text-lg px-10 py-4">
              Get in Touch
            </Link>
         </div>
      </section>
    </>
  );
};

export default HomeClient;
