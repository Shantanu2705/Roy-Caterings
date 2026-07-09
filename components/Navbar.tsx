"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-ivory shadow-sm py-4">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* Using mix-blend-multiply so the JPEG background perfectly merges with the navbar */}
          <img src="/logo.png" alt="Roy Services Logo" className="h-16 md:h-20 w-auto object-contain mix-blend-multiply" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold text-charcoal"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2 border text-sm uppercase tracking-wider transition-all duration-300 border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-charcoal" size={28} />
          ) : (
            <Menu className={isScrolled || !isHomePage ? "text-charcoal" : "text-white"} size={28} />
          )}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 pt-20"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-2xl font-serif text-charcoal hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
