import React, { useState, useEffect } from 'react';
import { Calendar, Users, Clock, ChevronDown, ChevronRight, Sparkles } from 'lucide-react';

const Reservations: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState('1:00 AM');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    date: '2025-12-26',
    guests: '2 guests',
    time: '1:00 AM'
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timeSlots = [
    '11:15 PM', '11:30 PM', '11:45 PM', '12:00 AM', '12:15 AM',
    '12:30 AM', '12:45 AM', '1:00 AM', '1:15 AM', '1:30 AM',
    '1:45 AM', '2:00 AM', '2:15 AM', '2:30 AM', '2:45 AM'
  ];

  const handleSubmit = () => {
    alert(`Reservation request sent for ${formData.guests} on ${formData.date} at ${selectedTime}. We'll be in touch!`);
  };

  return (
    <div className="pt-32 pb-40 min-h-screen bg-dark-green text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 right-0 -z-10 w-[60vw] h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none"></div>
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] border border-white/[0.03] rounded-full pointer-events-none animate-subtle-drift"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Breadcrumbs */}
        <nav className={`flex items-center space-x-2 text-[10px] tracking-[0.4em] uppercase text-white/40 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <a href="#home" className="hover:text-accent-pink transition-colors">Home</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/60">Reservations</span>
        </nav>

        {/* Enhanced Header Section */}
        <header className="mb-24 lg:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div className="space-y-6 max-w-4xl">
              <div className="flex items-center space-x-4 animate-reveal-left">
                <span className="w-12 h-[1px] bg-accent-pink"></span>
                <span className="text-accent-pink text-[10px] tracking-[0.6em] font-black uppercase">BOOK YOUR TABLE</span>
              </div>
              <h1 className={`text-[12vw] md:text-[9vw] serif uppercase leading-[0.8] tracking-tighter transition-all duration-[1.5s] ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                REQUEST A<br /><span className="italic serif text-accent-pink">RESERVATION</span>
              </h1>
            </div>
            
            <div className={`lg:max-w-xs text-right transition-all duration-[1.5s] delay-300 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <p className="text-white/40 text-sm font-light italic leading-relaxed serif">
                "Experience the soul of the islands. Secure your space for an evening of vibrant flavors and Caribbean warmth."
              </p>
            </div>
          </div>
        </header>

        {/* Selection Row - Redesigned for a Premium feel */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 pb-20 border-b border-white/10 mb-20 transition-all duration-[1.2s] delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Party Size */}
          <div className="group space-y-6">
            <div className="flex items-center space-x-3 text-white/30 group-hover:text-accent-pink transition-colors">
              <Users className="w-4 h-4" />
              <label className="text-[10px] uppercase tracking-[0.4em] font-bold block">Party size</label>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-6 border-b border-white/10 cursor-pointer group-hover:border-accent-pink transition-all duration-500">
                <span className="text-3xl serif italic">{formData.guests}</span>
                <ChevronDown className="w-6 h-6 text-white/20 group-hover:text-accent-pink group-hover:rotate-180 transition-all duration-500" />
              </div>
              <select 
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={`${n} guests`} className="bg-dark-green text-white">{n} Guests</option>)}
                <option value="9+ guests" className="bg-dark-green text-white">9+ Guests</option>
              </select>
            </div>
          </div>

          {/* Date Picker */}
          <div className="group space-y-6">
            <div className="flex items-center space-x-3 text-white/30 group-hover:text-accent-pink transition-colors">
              <Calendar className="w-4 h-4" />
              <label className="text-[10px] uppercase tracking-[0.4em] font-bold block">Arrival Date</label>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-6 border-b border-white/10 cursor-pointer group-hover:border-accent-pink transition-all duration-500">
                <span className="text-3xl serif italic">{formData.date}</span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-pink group-hover:text-dark-green transition-all duration-500">
                   <Calendar className="w-4 h-4" />
                </div>
              </div>
              <input 
                type="date"
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
          </div>

          {/* Preferred Time */}
          <div className="group space-y-6">
            <div className="flex items-center space-x-3 text-white/30 group-hover:text-accent-pink transition-colors">
              <Clock className="w-4 h-4" />
              <label className="text-[10px] uppercase tracking-[0.4em] font-bold block">Selected Time</label>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-6 border-b border-white/10 cursor-pointer group-hover:border-accent-pink transition-all duration-500">
                <span className="text-3xl serif italic text-accent-pink">{selectedTime}</span>
                <Clock className="w-6 h-6 text-white/20 group-hover:text-accent-pink transition-all duration-500" />
              </div>
            </div>
          </div>

        </div>

        {/* Time Slots Grid with Staggered Reveal */}
        <section className={`space-y-16 transition-all duration-[1.2s] delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center justify-between">
            <h3 className="text-xs tracking-[0.4em] text-white/50 uppercase font-black">Choose your preferred sitting</h3>
            <div className="hidden md:flex items-center space-x-3 text-[10px] tracking-widest text-white/20 uppercase">
               <span>Availability updated real-time</span>
               <div className="w-1.5 h-1.5 rounded-full bg-accent-pink animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {timeSlots.map((time, index) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`group relative py-6 px-8 rounded-2xl text-sm font-bold tracking-[0.2em] transition-all duration-500 border overflow-hidden ${
                  selectedTime === time 
                    ? 'bg-accent-pink text-dark-green border-accent-pink scale-105 shadow-[0_20px_40px_rgba(249,168,212,0.15)]' 
                    : 'bg-white/[0.03] text-white/60 border-white/5 hover:border-accent-pink hover:text-white hover:translate-y-[-4px]'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{time}</span>
                <div className={`absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </button>
            ))}
          </div>

          {/* Submission Footer */}
          <div className="pt-24 flex flex-col items-center">
             <div className="relative group">
                <button 
                  onClick={handleSubmit}
                  className="relative z-10 px-20 py-6 bg-black text-white rounded-full text-xs font-black tracking-[0.4em] uppercase hover:bg-accent-pink hover:scale-105 transition-all duration-700 shadow-2xl overflow-hidden group"
                >
                  <span className="relative z-10">Confirm Reservation</span>
                  <div className="absolute inset-0 bg-accent-pink translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-accent-pink/20 blur-2xl rounded-full scale-0 group-hover:scale-110 transition-transform duration-700"></div>
             </div>
             
             <div className="mt-12 flex flex-col items-center space-y-4">
                <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase text-center max-w-sm leading-loose">
                  For groups larger than <span className="text-white/60 font-bold">8 guests</span> or corporate private events, please reach out to our team.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                   <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-accent-pink">
                      <Clock className="w-4 h-4" />
                   </div>
                   <span className="text-lg serif italic text-accent-pink">+44 1865 249888</span>
                </div>
             </div>
          </div>
        </section>

      </div>

      <style>{`
        @keyframes reveal-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-reveal-left {
          animation: reveal-left 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes subtle-drift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(50px, 30px) rotate(5deg); }
        }
        .animate-subtle-drift {
          animation: subtle-drift 15s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Reservations;