import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import backgroundImage from '../assets/DSC08725.jpg';

const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-32 lg:pt-40 bg-[#1a2e3b] text-[#F9F8F6] overflow-x-hidden">
      {/* Background Image — absolute inside same div so bg colour can't block it */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark editorial wash to keep all text and form elements highly legible and moody */}
        <div className="absolute inset-0 bg-[#1a2e3b]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pb-32">
        
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-12 h-[1px] bg-[#D1BB94]" />
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D1BB94', fontWeight: 700 }}>
              Connect with us
            </span>
          </div>
          <h1 className="text-7xl sm:text-[9rem] font-just-another-hand uppercase tracking-tight text-[#F9F8F6] drop-shadow-lg leading-none">
            Get in <span className="italic text-[#D1BB94]">Touch</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">

          {/* Left Column: Contact Details */}
          <div className="space-y-16">
            <div className="space-y-12">
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', lineHeight: 1.8, fontStyle: 'italic', color: 'rgba(249, 248, 246, 0.7)', maxWidth: '28rem' }}>
                Whether you're looking to book a private event, reserve a table for a celebration, or simply ask a question about our menu, we'd love to hear from you.
              </p>

              <div className="space-y-10">
                {[
                  { icon: MapPin, title: 'Our Location', detail: '64 Cowley Rd, Oxford, OX4 1JB' },
                  { icon: Phone, title: 'Call Us', detail: '+44 1865 249888' },
                  { icon: Mail, title: 'Email Us', detail: 'family@spicedroots.com' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 border border-[#D1BB94]/30 rounded-full flex items-center justify-center text-[#D1BB94] group-hover:bg-[#D1BB94] group-hover:text-[#1a2e3b] transition-all duration-500">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(249,248,246,0.4)', fontWeight: 700, marginBottom: '8px' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', color: '#F9F8F6', margin: 0 }}>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 pt-8 border-t border-[#F9F8F6]/10">
              <h4 style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(249,248,246,0.4)', fontWeight: 700 }}>
                Follow the spice
              </h4>
              <div className="flex space-x-4">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a key={i} href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-[#F9F8F6]/20 text-[#F9F8F6] rounded-full flex items-center justify-center hover:bg-[#D1BB94] hover:border-[#D1BB94] hover:text-[#1a2e3b] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dark Editorial Form Card */}
          <div className="bg-[#101d26]/80 backdrop-blur-md p-10 sm:p-14 rounded-2xl border border-[#F9F8F6]/10 shadow-2xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D1BB94', fontWeight: 700 }}>First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-[#F9F8F6]/20 px-0 py-3 focus:outline-none focus:border-[#D1BB94] text-[#F9F8F6] transition-all placeholder-white/20" placeholder="Enter your first name" />
                </div>
                <div className="space-y-4">
                  <label style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D1BB94', fontWeight: 700 }}>Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-[#F9F8F6]/20 px-0 py-3 focus:outline-none focus:border-[#D1BB94] text-[#F9F8F6] transition-all placeholder-white/20" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-4">
                <label style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D1BB94', fontWeight: 700 }}>Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-[#F9F8F6]/20 px-0 py-3 focus:outline-none focus:border-[#D1BB94] text-[#F9F8F6] transition-all placeholder-white/20" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-4">
                <label style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D1BB94', fontWeight: 700 }}>Your Message</label>
                <textarea rows={5} className="w-full bg-transparent border-b border-[#F9F8F6]/20 px-0 py-3 focus:outline-none focus:border-[#D1BB94] text-[#F9F8F6] transition-all placeholder-white/20 resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="group flex items-center justify-center w-full px-12 py-5 bg-[#D1BB94] text-[#1a2e3b] rounded-full hover:bg-[#F9F8F6] transition-all duration-300 shadow-xl mt-6">
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '0.25em', fontWeight: 900, textTransform: 'uppercase' }}>
                  Send Message
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
