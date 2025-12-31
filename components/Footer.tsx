
import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-green pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        
        {/* Ticker Section */}
        <div className="border-t border-b border-white/5 py-8 overflow-hidden whitespace-nowrap mb-24">
           <div className="inline-block animate-footer-scroll">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="text-accent-pink/40 text-[10px] tracking-[0.5em] font-black mr-20 uppercase">
                  SPICED ROOTS OXFORD <span className="mx-8 text-[8px] opacity-20">✦</span> JERK PIT MASTERS <span className="mx-8 text-[8px] opacity-20">✦</span> EST. 2016 <span className="mx-8 text-[8px] opacity-20">✦</span>
                </span>
              ))}
           </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-6xl serif italic text-white mb-4">Spiced Roots</h2>
              <p className="text-white/40 text-sm font-light max-w-sm leading-relaxed">
                Elevating Caribbean cuisine through the mastery of fire, spice, and heritage on Cowley Road.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] tracking-[0.4em] font-bold text-accent-pink uppercase">Join the Club</h4>
              <p className="text-xs text-white/40 uppercase tracking-widest">Sign up for exclusive events & secret menus</p>
              <form className="flex max-w-md group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="flex-grow bg-white/5 border border-white/10 border-r-0 rounded-l-full px-8 py-4 text-xs focus:outline-none focus:border-accent-pink transition-colors"
                />
                <button className="bg-accent-pink hover:bg-white text-dark-green px-8 py-4 rounded-r-full text-[10px] font-black tracking-widest transition-all">
                  JOIN
                </button>
              </form>
            </div>
            
            <div className="flex space-x-6 pt-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-accent-pink hover:text-accent-pink transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-accent-pink hover:text-accent-pink transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] tracking-[0.4em] font-bold text-white/30 uppercase">Discover</h4>
            <ul className="space-y-4 text-sm font-light tracking-wide">
              <li><a href="#menu" className="hover:text-accent-pink transition-colors">The Menu</a></li>
              <li><a href="#about" className="hover:text-accent-pink transition-colors">Our Story</a></li>
              <li><a href="#reservations" className="hover:text-accent-pink transition-colors">Reservations</a></li>
              <li><a href="#order" className="hover:text-accent-pink transition-colors">Delivery</a></li>
              <li><a href="#contact" className="hover:text-accent-pink transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] tracking-[0.4em] font-bold text-white/30 uppercase">Inquiries</h4>
            <ul className="space-y-6 text-sm font-light tracking-wide">
              <li className="flex items-start space-x-4">
                <Phone className="w-4 h-4 text-accent-pink mt-1" />
                <span>+44 1865 249888</span>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className="w-4 h-4 text-accent-pink mt-1" />
                <span>hello@spicedroots.com</span>
              </li>
              <li className="flex flex-col space-y-2">
                <span className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-bold">Opening Hours</span>
                <p>Tue - Fri: 12pm - 11pm</p>
                <p>Sat - Sun: 11am - 12am</p>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] tracking-[0.4em] font-bold text-white/30 uppercase">Legal</h4>
            <ul className="space-y-4 text-xs font-light tracking-widest text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Brand Bottom Banner */}
        <div className="text-center py-12 border-t border-white/5">
          <p className="text-[10px] tracking-[0.5em] text-white/20 uppercase font-black">
            &copy; {currentYear} SPICED ROOTS OXFORD. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes footer-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-footer-scroll {
          display: inline-block;
          animation: footer-scroll 40s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
