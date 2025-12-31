
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'MENU', id: 'menu' },
    { label: 'ORDER ONLINE', id: 'order' },
    { label: 'RESERVATIONS', id: 'reservations' },
    { label: 'ABOUT', id: 'about' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-dark-green/90 backdrop-blur-xl h-20 border-b border-white/10' 
          : 'bg-transparent h-28'
      }`}
    >
      <div className="max-w-[1600px] mx-auto h-full px-6 sm:px-12">
        <div className="flex justify-between items-center h-full relative">
          
          {/* Desktop Left Nav */}
          <div className="hidden lg:flex items-center space-x-12 flex-1">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-[10px] tracking-[0.3em] font-bold transition-all duration-300 relative group overflow-hidden py-2 ${
                  currentPage === link.id ? 'text-accent-pink' : 'text-white/70 hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-accent-pink transition-transform duration-500 origin-left ${currentPage === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            ))}
          </div>

          {/* Logo - Centered with refined typography */}
          <div className="flex-shrink-0 flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <a href="#home" className="flex flex-col items-center group">
              <span className="serif italic text-3xl md:text-4xl font-light text-white tracking-tighter leading-none group-hover:text-accent-pink transition-colors duration-500">
                Spiced Roots
              </span>
              <span className={`text-[8px] tracking-[0.6em] text-accent-pink font-bold uppercase mt-1 transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-3 opacity-100'}`}>
                Oxford
              </span>
            </a>
          </div>

          {/* Desktop Right Nav */}
          <div className="hidden lg:flex items-center justify-end space-x-12 flex-1">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-[10px] tracking-[0.3em] font-bold transition-all duration-300 relative group overflow-hidden py-2 ${
                  currentPage === link.id ? 'text-accent-pink' : 'text-white/70 hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-accent-pink transition-transform duration-500 origin-left ${currentPage === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            ))}
            
            <div className="flex items-center space-x-8 pl-4">
              <div className="relative group cursor-pointer p-2">
                <ShoppingBag className="w-5 h-5 text-white/90 group-hover:text-accent-pink transition-all duration-300 transform group-hover:-translate-y-0.5" />
                <span className="absolute top-0 right-0 bg-accent-pink text-dark-green text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-lg border border-dark-green">0</span>
              </div>
              
              <a 
                href="#order" 
                className="bg-accent-pink hover:bg-white text-dark-green px-8 py-3 rounded-full text-[10px] tracking-[0.2em] font-black transition-all duration-500 hover:scale-105 shadow-xl shadow-accent-pink/10"
              >
                ORDER NOW
              </a>
            </div>
          </div>

          {/* Mobile UI */}
          <div className="lg:hidden flex items-center space-x-6">
            <div className="relative p-2">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-accent-pink text-dark-green text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-lg">0</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white z-[110]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <div className={`fixed inset-0 bg-dark-green z-[105] transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="h-full flex flex-col justify-center items-center px-10 space-y-12">
          <div className="text-center space-y-2 mb-8">
            <p className="text-accent-pink text-[10px] tracking-[0.4em] font-bold uppercase">Spiced Roots</p>
            <h3 className="serif italic text-4xl text-white">Menu & Dining</h3>
          </div>
          
          <nav className="flex flex-col items-center space-y-8 w-full">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl sm:text-4xl serif italic transition-all duration-500 hover:text-accent-pink ${
                  currentPage === link.id ? 'text-accent-pink translate-x-4' : 'text-white'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.label.toLowerCase()}
              </a>
            ))}
          </nav>

          <div className="w-full flex flex-col items-center space-y-8 pt-12 border-t border-white/10">
            <a 
              href="#order" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full max-w-xs flex items-center justify-center space-x-4 bg-accent-pink py-5 rounded-full text-dark-green text-xs tracking-[0.3em] font-black uppercase hover:bg-white transition-all"
            >
              <span>Order Delivery</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <div className="flex space-x-12 pt-4">
              <button className="text-[10px] tracking-[0.2em] font-bold text-white/50 hover:text-white transition-colors">LOGIN</button>
              <button className="text-[10px] tracking-[0.2em] font-bold text-white/50 hover:text-white transition-colors">SUPPORT</button>
            </div>
          </div>
        </div>

        {/* Decorative background elements for mobile menu */}
        <div className="absolute top-20 right-[-10%] w-64 h-64 bg-accent-pink/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </nav>
  );
};

export default Navbar;
