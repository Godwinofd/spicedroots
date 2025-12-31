
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-24">
          <h1 className="text-7xl sm:text-9xl serif uppercase font-medium tracking-tighter mb-4">CONTACT</h1>
          <p className="text-accent-pink tracking-widest text-sm uppercase">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Contact Details */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl serif uppercase italic">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent-pink border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase mb-1">Our Location</h4>
                    <p className="text-white/60 font-light">64 Cowley Rd, Oxford, OX4 1JB, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent-pink border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase mb-1">Call Us</h4>
                    <p className="text-white/60 font-light">+44 1865 249888</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent-pink border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase mb-1">Email Us</h4>
                    <p className="text-white/60 font-light">hello@spicedroots.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
               <h2 className="text-4xl serif uppercase italic">Follow the spice</h2>
               <div className="flex space-x-6">
                  <a href="#" className="w-14 h-14 bg-accent-pink text-dark-green rounded-2xl flex items-center justify-center hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform hover:border-accent-pink">
                    <Facebook className="w-6 h-6" />
                  </a>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-deep-green p-10 rounded-3xl border border-white/10">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">First Name</label>
                  <input type="text" className="w-full bg-dark-green border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-pink transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Last Name</label>
                  <input type="text" className="w-full bg-dark-green border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-pink transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Email</label>
                <input type="email" className="w-full bg-dark-green border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-pink transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Message</label>
                <textarea rows={5} className="w-full bg-dark-green border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-pink transition-colors resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-accent-pink text-dark-green rounded-full text-xs font-bold tracking-[0.3em] uppercase hover:bg-white transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
