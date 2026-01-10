
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
    { label: 'OUR STORY', id: 'about' },
    { label: 'MENUS', id: 'menu' },
    { label: 'RUM BAR', id: 'rum-bar' },
    { label: 'CATERING', id: 'catering' },
    { label: 'GET IN TOUCH', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${isScrolled
        ? 'bg-[#F9F8F6]/95 backdrop-blur-xl h-20 border-b border-[#27618E]/10'
        : 'bg-transparent h-28'
        }`}
    >
      <div className="max-w-[1600px] mx-auto h-full px-6 sm:px-12">
        <div className="flex justify-between items-center h-full relative">

          {/* Left side - Logo integration */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center group">
              <img
                src="/assets/logo.png"
                alt="Spiced Roots Logo"
                className={`h-12 w-auto transition-all duration-500 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
              />
            </a>
          </div>

          <div className="hidden lg:flex flex-1"></div>

          {/* Desktop Right Nav - All links moved here */}
          <div className="hidden lg:flex items-center justify-end space-x-10 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`serif text-[11px] tracking-[0.2em] font-bold transition-all duration-300 relative group py-2 ${currentPage === link.id ? 'text-[#D1BB94]' : isScrolled ? 'text-[#27618E]/80 hover:text-[#D1BB94]' : 'text-white/90 hover:text-[#D1BB94]'
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}

            <div className="flex items-center space-x-8 pl-4">
              <div className="relative group cursor-pointer p-2">
                <ShoppingBag className={`w-5 h-5 transition-all duration-300 transform group-hover:text-[#D1BB94] group-hover:-translate-y-0.5 ${isScrolled ? 'text-[#27618E]' : 'text-white/90'}`} />
                <span className={`absolute top-0 right-0 bg-[#D1BB94] text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-lg border ${isScrolled ? 'border-[#F5F5F0]' : 'border-dark-green'}`}>0</span>
              </div>

              <a
                href="#order"
                className="bg-[#D1BB94] hover:bg-[#27618E] text-white px-8 py-3 rounded-full text-[10px] tracking-[0.2em] font-black transition-all duration-500 btn-hover-scale shadow-xl shadow-[#D1BB94]/10"
              >
                ORDER NOW
              </a>
            </div>
          </div>

          {/* Mobile UI */}
          <div className="lg:hidden flex items-center space-x-6">
            <div className="relative p-2">
              <ShoppingBag className={`w-5 h-5 ${isScrolled ? 'text-[#27618E]' : 'text-white'}`} />
              <span className="absolute top-0 right-0 bg-[#D1BB94] text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-lg">0</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors z-[110] ${isScrolled && !isMobileMenuOpen
                ? 'border-[#27618E]/20 bg-[#27618E]/5 backdrop-blur-md text-[#27618E]'
                : 'border-white/20 bg-white/5 backdrop-blur-md text-white'
                }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <div className={`fixed inset-0 bg-[#F5F5F0] z-[105] transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
        <div className="h-full flex flex-col justify-center items-center px-10 space-y-12">
          <div className="text-center space-y-2 mb-8">
            <p className="text-[#D1BB94] text-[10px] tracking-[0.4em] font-bold uppercase">Spiced Roots</p>
            <h3 className="serif italic text-4xl text-[#27618E]">Menu & Dining</h3>
          </div>

          <nav className="flex flex-col items-center space-y-8 w-full">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl sm:text-4xl serif italic transition-all duration-500 hover:text-[#D1BB94] ${currentPage === link.id ? 'text-[#D1BB94] translate-x-4' : 'text-[#27618E]'
                  }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.label.toLowerCase()}
              </a>
            ))}
          </nav>

          <div className="w-full flex flex-col items-center space-y-8 pt-12 border-t border-[#27618E]/10">
            <a
              href="#order"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full max-w-xs flex items-center justify-center space-x-4 bg-[#D1BB94] py-5 rounded-full text-white text-xs tracking-[0.3em] font-black uppercase hover:bg-[#27618E] transition-all btn-hover-scale"
            >
              <span>Order Delivery</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex space-x-12 pt-4">
              <button className="text-[10px] tracking-[0.2em] font-bold text-[#27618E]/50 hover:text-[#27618E] transition-colors">LOGIN</button>
              <button className="text-[10px] tracking-[0.2em] font-bold text-[#27618E]/50 hover:text-[#27618E] transition-colors">SUPPORT</button>
            </div>
          </div>
        </div>

        {/* Decorative background elements for mobile menu */}
        <div className="absolute top-20 right-[-10%] w-64 h-64 bg-[#D1BB94]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-[-10%] w-96 h-96 bg-[#D1BB94]/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </nav>
  );
};

export default Navbar;
