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
            <img src="/logo.png" alt="Roy Services Logo" className="h-20 md:h-24 w-auto object-contain bg-white rounded-md p-2 shadow-sm" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />
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

      {/* Digital Dictionary Banner */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-8">
        <div className="relative w-full max-w-5xl mx-auto group hover:scale-[1.01] transition-transform duration-300">
          <style>{`
            @keyframes subtle-blink {
              0%, 100% { opacity: 1; filter: drop-shadow(0 0 0px rgba(255,255,255,0)); }
              50% { opacity: 0.9; filter: drop-shadow(0 0 15px rgba(255,255,255,0.1)); transform: scale(0.995); }
            }
            .animate-blink {
              animation: subtle-blink 3s ease-in-out infinite;
            }
            .torn-bg {
              filter: url(#torn-filter);
            }
          `}</style>
          
          <svg width="0" height="0" className="absolute">
            <filter id="torn-filter">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>

          <a 
            href="https://www.digitaldictionarysiliguri.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full relative animate-blink"
          >
            {/* Background layers with torn edge */}
            {/* Darker than charcoal background (#181818) for the torn paper effect */}
            <div className="absolute inset-0 torn-bg bg-[#181818] shadow-2xl"></div>
            <div className="absolute inset-[4px] md:inset-[8px] torn-bg bg-white"></div>
            
            {/* Content layer */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 lg:p-12 h-full">
              
              {/* Left side: Text */}
              <div className="flex-1 w-full text-center md:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#113320] mb-6 tracking-tight uppercase" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.05)' }}>
                  Comprehensive Agency Solutions
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-3 mb-8 w-fit mx-auto md:mx-0">
                  {[
                    "Website Development", "Digital Marketing",
                    "Performance Marketing", "Google Ads",
                    "Software Development", "Mobile App",
                    "SEO", "ORM"
                  ].map(service => (
                    <div key={service} className="flex items-center gap-3 text-gray-800 font-medium text-sm sm:text-base md:text-lg">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#113320] flex-shrink-0 shadow-sm"></span>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-gray-900 font-bold text-base sm:text-xl md:text-2xl hover:text-[#113320] transition-colors inline-block">
                  www.digitaldictionarysiliguri.com
                </div>
              </div>
              
              {/* Right side: Recreated Logo */}
              <div className="w-full md:w-auto mt-10 md:mt-0 flex flex-col items-center justify-center pl-0 md:pl-8 lg:pl-12 md:border-l-2 border-gray-100">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                  {/* Outer golden rings */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f9f295] via-[#b8860b] to-[#f9f295] p-[3px] sm:p-[4px]">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-[4px] sm:p-[5px]">
                      <div className="w-full h-full rounded-full bg-gradient-to-bl from-[#e0aa3e] via-[#f9f295] to-[#b8860b] p-[2px]">
                         <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            {/* Big 'D' */}
                            <div className="text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-br from-[#f9f295] via-[#d4af37] to-[#8c6200] text-transparent bg-clip-text font-serif italic pr-2 sm:pr-3" style={{ filter: 'drop-shadow(2px 3px 1px rgba(0,0,0,0.1))' }}>
                              D
                            </div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#8c6200] via-[#d4af37] to-[#8c6200] text-transparent bg-clip-text font-serif leading-none drop-shadow-sm">
                    Digital Dictionary
                  </div>
                  <div className="text-xs sm:text-sm tracking-[0.25em] font-bold text-[#b8860b] mt-2 uppercase">
                    Siliguri
                  </div>
                </div>
              </div>
              
            </div>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-6 pb-2 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4 md:gap-0">
        <div className="flex-1 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Roy Services. All rights reserved.</p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end gap-6">
          <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
