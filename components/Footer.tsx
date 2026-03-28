
import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2e3b] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">

        {/* Main Footer Grid - Condensed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <h2 className="text-4xl font-just-another-hand text-[#F9F8F6] leading-none">Spiced Roots</h2>
            <p className="text-[#F9F8F6]/70 text-sm font-light leading-relaxed max-w-xs" style={{ fontFamily: 'Arial, sans-serif' }}>
              Elevating Caribbean cuisine through the mastery of fire, spice, and heritage on Cowley Road.
            </p>
            <div className="flex space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram" className="text-[#F9F8F6]/40 hover:text-[#D1BB94] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook" className="text-[#F9F8F6]/40 hover:text-[#D1BB94] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] font-bold text-[#D1BB94] uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>Explore</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-[12px] font-light tracking-wide text-[#F9F8F6]/70" style={{ fontFamily: 'Arial, sans-serif' }}>
              <li><a href="#menu" className="hover:text-white transition-colors">The Menu</a></li>
              <li><a href="#rum-bar" className="hover:text-white transition-colors">Rum Vault</a></li>
              <li><a href="#catering" className="hover:text-white transition-colors">Catering</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#reservations" className="hover:text-white transition-colors">Reservations</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] font-bold text-[#D1BB94] uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>Inquiries</h4>
            <ul className="space-y-3 text-[12px] font-light text-[#F9F8F6]/70" style={{ fontFamily: 'Arial, sans-serif' }}>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-[#D1BB94]/80 group-hover:text-[#D1BB94] transition-colors" />
                <span>+44 1865 249888</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-[#D1BB94]/80 group-hover:text-[#D1BB94] transition-colors" />
                <span>hello@spicedroots.com</span>
              </li>
              <li className="pt-2 italic text-[#F9F8F6]/40 text-[11px]">Cowley Road, Oxford</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] font-bold text-[#D1BB94] uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>Newsletter</h4>
            <form className="flex group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-white/5 border border-white/10 border-r-0 rounded-l-full px-5 py-3 text-[10px] text-[#F9F8F6] focus:outline-none focus:border-[#D1BB94]/50 transition-colors placeholder:text-[#F9F8F6]/30"
                style={{ fontFamily: 'Arial, sans-serif' }}
              />
              <button className="bg-[#D1BB94] hover:bg-white text-[#1a2e3b] px-6 py-3 rounded-r-full text-[10px] font-black tracking-widest transition-all shadow-md">
                JOIN
              </button>
            </form>
            <p className="text-[9px] text-[#F9F8F6]/30 uppercase tracking-widest" style={{ fontFamily: 'Arial, sans-serif' }}>Secret menus & island vibes</p>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 border-t border-[#F9F8F6]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex space-x-8 text-[9px] tracking-[0.2em] font-bold text-[#F9F8F6]/40 uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <p className="text-[9px] tracking-[0.3em] text-[#F9F8F6]/20 uppercase font-black" style={{ fontFamily: 'Arial, sans-serif' }}>
            &copy; {currentYear} SPICED ROOTS OXFORD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
