"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const GalleryClient = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, src: '/images/wedding.png', category: 'Wedding Events' },
    { id: 2, src: '/images/corporate_event.png', category: 'Corporate Events' },
    { id: 3, src: '/images/hero.png', category: 'Food Presentation' },
    { id: 4, src: '/images/food_presentation.png', category: 'Desserts' },
    { id: 5, src: '/images/festival_catering.png', category: 'Buffet Setup' },
    { id: 6, src: '/images/private_party.png', category: 'Chef Moments' },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-white pt-32 pb-16 px-6 text-center border-b border-gray-100">
        <div className="container mx-auto max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4"
          >
            Visual Journey
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 64 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gold mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600"
          >
            A glimpse into the extraordinary moments we've helped create.
          </motion.p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 bg-alternate min-h-screen">
        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-sm break-inside-avoid"
                onClick={() => setSelectedImage(img.src)}
              >
                <img src={img.src} alt={img.category} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <ZoomIn className="text-white mb-2" size={32} />
                  <span className="text-white font-serif font-medium tracking-wide">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors focus:outline-none"
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryClient;
