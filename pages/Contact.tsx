import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Utensils } from 'lucide-react';
import backgroundImage from '../assets/background2.jpg';

const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-32 bg-[#fcfaf7]">
      {/* Fixed Background Image Layer - Lower z-index to avoid burying footer */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#fcfaf7]">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-contain opacity-20"
        />
        <div className="absolute inset-0 bg-[#fcfaf7]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pb-32">
        <div className="text-center mb-24">
          <h1 className="text-8xl sm:text-[11rem] font-just-another-hand uppercase tracking-tighter mb-4 text-[#27618E]">CONTACT</h1>
          <p className="text-[#27618E]/60 tracking-[0.5em] text-[10px] uppercase font-black">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">

          {/* Left Column: Contact Details - High Visibility */}
          <div className="space-y-16">
            <div className="space-y-12">
              <h2 className="text-7xl font-just-another-hand uppercase text-[#27618E]">Get in touch</h2>
              <div className="space-y-10">
                {[
                  { icon: MapPin, title: 'Our Location', detail: '64 Cowley Rd, Oxford, OX4 1JB' },
                  { icon: Phone, title: 'Call Us', detail: '+44 1865 249888' },
                  { icon: Mail, title: 'Email Us', detail: 'hello@spicedroots.com' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6 group">
                    <div className="w-16 h-16 bg-[#27618E] rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:bg-[#D1BB94] transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-just-another-hand tracking-[0.2em] uppercase mb-1 text-[#D1BB94]">{item.title}</h4>
                      <p className="text-[#27618E] text-2xl serif font-medium leading-tight">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-2xl font-just-another-hand tracking-[0.2em] uppercase text-[#27618E]/40">Follow the spice</h4>
              <div className="flex space-x-6">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 bg-white border border-[#27618E]/10 text-[#27618E] rounded-2xl flex items-center justify-center hover:bg-[#27618E] hover:text-white hover:scale-110 transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Form Card */}
          <div className="bg-white p-12 sm:p-20 rounded-[3rem] border border-[#27618E]/5 shadow-[0_40px_80px_-20px_rgba(39,97,142,0.1)]">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-2xl font-just-another-hand tracking-widest text-[#27618E]/60 ml-1">First Name</label>
                  <input type="text" className="w-full bg-[#fcfaf7] border border-[#27618E]/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#D1BB94] text-[#27618E] transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-2xl font-just-another-hand tracking-widest text-[#27618E]/60 ml-1">Last Name</label>
                  <input type="text" className="w-full bg-[#fcfaf7] border border-[#27618E]/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#D1BB94] text-[#27618E] transition-all" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-2xl font-just-another-hand tracking-widest text-[#27618E]/60 ml-1">Email Address</label>
                <input type="email" className="w-full bg-[#fcfaf7] border border-[#27618E]/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#D1BB94] text-[#27618E] transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-2xl font-just-another-hand tracking-widest text-[#27618E]/60 ml-1">Your Message</label>
                <textarea rows={6} className="w-full bg-[#fcfaf7] border border-[#27618E]/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-[#D1BB94] text-[#27618E] transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-6 bg-[#27618E] text-white rounded-full text-4xl font-just-another-hand tracking-widest uppercase hover:shadow-2xl hover:bg-[#27618E]/90 transition-all shadow-xl shadow-[#27618E]/20 transform hover:-translate-y-1 active:scale-95">
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
