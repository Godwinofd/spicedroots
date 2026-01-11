
import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#27618E] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">

        {/* Main Footer Grid - Condensed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <h2 className="text-4xl serif italic text-white leading-none">Spiced Roots</h2>
            <p className="text-white/60 text-xs font-light leading-relaxed max-w-xs">
              Elevating Caribbean cuisine through the mastery of fire, spice, and heritage on Cowley Road.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Visit our Instagram" className="text-white/40 hover:text-accent-pink transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Visit our Facebook" className="text-white/40 hover:text-accent-pink transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] font-bold text-accent-pink uppercase">Explore</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-[11px] font-light tracking-wide text-white/70">
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
            <h4 className="text-[10px] tracking-[0.3em] font-bold text-accent-pink uppercase">Inquiries</h4>
            <ul className="space-y-3 text-[11px] font-light text-white/70">
              <li className="flex items-center space-x-3">
                <Phone className="w-3 h-3 text-accent-pink/60" />
                <span>+44 1865 249888</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-3 h-3 text-accent-pink/60" />
                <span>hello@spicedroots.com</span>
              </li>
              <li className="pt-2 italic text-white/40">Cowley Road, Oxford</li>
            </ul>
          </div>

          {/* Column 4: Newsletter - Tighter */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] font-bold text-accent-pink uppercase">Newsletter</h4>
            <form className="flex group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-white/5 border border-white/10 border-r-0 rounded-l-full px-5 py-3 text-[10px] focus:outline-none focus:border-accent-pink/50 transition-colors"
              />
              <button className="bg-accent-pink hover:bg-white text-[#27618E] px-5 py-3 rounded-r-full text-[9px] font-black tracking-widest transition-all">
                JOIN
              </button>
            </form>
            <p className="text-[9px] text-white/30 uppercase tracking-widest">Secret menus & island vibes</p>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright - Combined */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex space-x-8 text-[9px] tracking-[0.2em] font-bold text-white/40 uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <p className="text-[9px] tracking-[0.3em] text-white/20 uppercase font-black">
            &copy; {currentYear} SPICED ROOTS OXFORD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
