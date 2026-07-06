"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <img src="/logo.jpeg" alt="Roy Services Logo" className="h-20 md:h-24 w-auto object-contain bg-white rounded-md p-2 shadow-sm" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Creating unforgettable dining experiences across Bagdogra, Siliguri with exceptional food, flawless service, and elegant presentation.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/1ChQDnLhdy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-gold transition-colors">Our Services</Link></li>
            <li><Link href="/gallery" className="text-gray-400 hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact Us</Link></li>
            <li><Link href="/faq" className="text-gray-400 hover:text-gold transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Services</h4>
          <ul className="space-y-3">
            <li className="text-gray-400">Wedding Catering</li>
            <li className="text-gray-400">Corporate Events</li>
            <li className="text-gray-400">Birthday Functions</li>
            <li className="text-gray-400">Private Parties</li>
            <li className="text-gray-400">Live Food Counters</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-xl font-semibold mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin className="text-gold shrink-0 mt-1" size={20} />
              <span>Bagdogra Bhujiyapani,<br />Darjeeling, Siliguri, West Bengal, Pin: 734014</span>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <Phone className="text-gold shrink-0 mt-1" size={20} />
              <div className="flex flex-col gap-1">
                <a href="tel:+919933762891" className="hover:text-gold transition-colors">+91 9933762891</a>
                <a href="tel:+917679654927" className="hover:text-gold transition-colors">+91 7679654927</a>
              </div>
            </li>
            <li className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors">
              <Mail className="text-gold shrink-0" size={20} />
              <a href="mailto:roycaterer251@gmail.com">roycaterer251@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Roy Services. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
