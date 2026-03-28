import React, { useState, useEffect } from 'react';
import { Calendar, Users, Clock, ChevronDown, ChevronRight } from 'lucide-react';

const Reservations: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState('7:00 PM');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    date: '2025-12-26',
    guests: '2 guests',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requests: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
    '10:00 PM', '10:30 PM'
  ];

  const handleSubmit = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert("Please fill in all required guest details.");
      return;
    }

    setIsSubmitting(true);

    try {
      // ─────────────────────────────────────────────────────────────────
      // TODO: Connect Emailing Service (e.g., GoHighLevel Webhook, Zapier, EmailJS)
      // ─────────────────────────────────────────────────────────────────
      const bookingPayload = {
        restaurantEmail: 'hello@spicedroots.com',
        customerEmail: formData.email,
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerPhone: formData.phone,
        bookingDate: formData.date,
        bookingTime: selectedTime,
        guests: formData.guests,
        specialRequests: formData.requests || 'None'
      };

      // Simulate network request...
      // await fetch('YOUR_WEBHOOK_OR_API_URL', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(bookingPayload)
      // });
      
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitSuccess(true);
      
    } catch (error) {
      alert("There was an issue processing your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-40 min-h-screen bg-[#F9F8F6] text-[#1a2e3b] overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 right-0 -z-10 w-[60vw] h-full bg-gradient-to-l from-[#1a2e3b]/[0.02] to-transparent pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Breadcrumbs */}
        <nav className={`flex items-center space-x-2 text-[10px] tracking-[0.4em] uppercase text-[#1a2e3b]/40 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} style={{ fontFamily: 'Arial, sans-serif' }}>
          <a href="#home" className="hover:text-[#D1BB94] transition-colors">Home</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#1a2e3b]/60">Reservations</span>
        </nav>

        {/* Enhanced Header Section */}
        <header className="mb-24 lg:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div className="space-y-6 max-w-4xl">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="animate-reveal-left">
                <div style={{ height: '1px', width: '48px', background: '#D1BB94' }} />
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D1BB94', fontWeight: 700 }}>
                  Book Your Table
                </span>
              </div>
              <h1 className={`font-just-another-hand text-6xl sm:text-7xl lg:text-[7rem] leading-[0.9] text-[#1a2e3b] tracking-tight transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                Request a Reservation
              </h1>
            </div>

            <div className={`lg:max-w-xs text-left lg:text-right transition-all duration-[1.5s] delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.6, color: '#3a5068', margin: 0 }}>
                "Experience the soul of the islands. Secure your space for an evening of vibrant flavors and Caribbean warmth."
              </p>
            </div>
          </div>
        </header>

        {/* Selection Row - Redesigned for a Premium feel */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 pb-20 border-b border-[#1a2e3b]/10 mb-20 transition-all duration-[1.2s] delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          {/* Party Size */}
          <div className="group space-y-6">
            <div className="flex items-center space-x-3 text-[#1a2e3b]/40 group-hover:text-[#D1BB94] transition-colors">
              <Users className="w-4 h-4" />
              <label style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 700 }}>Party size</label>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-6 border-b border-[#1a2e3b]/10 cursor-pointer group-hover:border-[#D1BB94] transition-all duration-500">
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontStyle: 'italic', color: '#1a2e3b' }}>{formData.guests}</span>
                <ChevronDown className="w-6 h-6 text-[#1a2e3b]/20 group-hover:text-[#D1BB94] group-hover:rotate-180 transition-all duration-500" />
              </div>
              <select
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={`${n} guests`} className="bg-[#F9F8F6] text-[#1a2e3b]">{n} Guests</option>)}
                <option value="9+ guests" className="bg-[#F9F8F6] text-[#1a2e3b]">9+ Guests</option>
              </select>
            </div>
          </div>

          {/* Date Picker */}
          <div className="group space-y-6">
            <div className="flex items-center space-x-3 text-[#1a2e3b]/40 group-hover:text-[#D1BB94] transition-colors">
              <Calendar className="w-4 h-4" />
              <label style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 700 }}>Arrival Date</label>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-6 border-b border-[#1a2e3b]/10 cursor-pointer group-hover:border-[#D1BB94] transition-all duration-500">
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontStyle: 'italic', color: '#1a2e3b' }}>{formData.date}</span>
                <div className="w-10 h-10 rounded-full bg-[#1a2e3b]/5 flex items-center justify-center group-hover:bg-[#D1BB94] group-hover:text-white transition-all duration-500">
                  <Calendar className="w-4 h-4" />
                </div>
              </div>
              <input
                type="date"
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
          </div>

          {/* Preferred Time Display */}
          <div className="group space-y-6 hidden lg:block">
            <div className="flex items-center space-x-3 text-[#1a2e3b]/40 group-hover:text-[#D1BB94] transition-colors">
              <Clock className="w-4 h-4" />
              <label style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 700 }}>Selected Time</label>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between py-6 border-b border-[#1a2e3b]/10 cursor-pointer group-hover:border-[#D1BB94] transition-all duration-500">
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontStyle: 'italic', color: '#D1BB94' }}>{selectedTime}</span>
                <Clock className="w-6 h-6 text-[#1a2e3b]/20 group-hover:text-[#D1BB94] transition-all duration-500" />
              </div>
            </div>
          </div>

        </div>

        {/* Time Slots Grid with Staggered Reveal */}
        <section className={`space-y-16 transition-all duration-[1.2s] delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center justify-between">
            <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(26, 46, 59, 0.5)' }}>
              Choose your preferred sitting
            </h3>
            <div className="hidden md:flex items-center space-x-3" style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(26, 46, 59, 0.3)' }}>
              <span>Availability updated real-time</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#D1BB94] animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {timeSlots.map((time, index) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`group relative py-6 px-8 rounded-lg outline outline-1 outline-offset-[-1px] transition-all duration-300 ${selectedTime === time
                    ? 'bg-[#1a2e3b] outline-[#1a2e3b] text-[#F9F8F6] shadow-lg'
                    : 'bg-transparent outline-[#1a2e3b]/10 text-[#1a2e3b] hover:outline-[#D1BB94] hover:bg-[#D1BB94]/5 hover:text-[#1a2e3b]'
                  }`}
                style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '0.2em', fontWeight: 700, transitionDelay: `${index * 30}ms` }}
              >
                <span className="relative z-10">{time}</span>
              </button>
            ))}
          </div>

          {/* Guest Details Form */}
          <div className="pt-24 pb-8 mt-8 border-t border-[#1a2e3b]/10">
            <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 700, color: '#1a2e3b', marginBottom: '40px' }}>
              Guest Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl">
              {/* First Name */}
              <div className="flex flex-col gap-3">
                <label style={{ fontFamily: 'Arial, sans-serif', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(26, 46, 59, 0.5)', fontWeight: 700 }}>First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="bg-transparent border-b border-[#1a2e3b]/20 py-2 text-[#1a2e3b] focus:outline-none focus:border-[#D1BB94] transition-colors placeholder:text-[#1a2e3b]/20"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontStyle: 'italic' }}
                  placeholder="e.g. James"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-3">
                <label style={{ fontFamily: 'Arial, sans-serif', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(26, 46, 59, 0.5)', fontWeight: 700 }}>Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="bg-transparent border-b border-[#1a2e3b]/20 py-2 text-[#1a2e3b] focus:outline-none focus:border-[#D1BB94] transition-colors placeholder:text-[#1a2e3b]/20"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontStyle: 'italic' }}
                  placeholder="e.g. Smith"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-3">
                <label style={{ fontFamily: 'Arial, sans-serif', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(26, 46, 59, 0.5)', fontWeight: 700 }}>Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-transparent border-b border-[#1a2e3b]/20 py-2 text-[#1a2e3b] focus:outline-none focus:border-[#D1BB94] transition-colors placeholder:text-[#1a2e3b]/20"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontStyle: 'italic' }}
                  placeholder="james@example.com"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-3">
                <label style={{ fontFamily: 'Arial, sans-serif', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(26, 46, 59, 0.5)', fontWeight: 700 }}>Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-transparent border-b border-[#1a2e3b]/20 py-2 text-[#1a2e3b] focus:outline-none focus:border-[#D1BB94] transition-colors placeholder:text-[#1a2e3b]/20"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontStyle: 'italic' }}
                  placeholder="+44 7000 000000"
                />
              </div>

              {/* Special Requests */}
              <div className="flex flex-col gap-3 md:col-span-2">
                <label style={{ fontFamily: 'Arial, sans-serif', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(26, 46, 59, 0.5)', fontWeight: 700 }}>Special Requests (Optional)</label>
                <input
                  type="text"
                  value={formData.requests}
                  onChange={(e) => setFormData({...formData, requests: e.target.value})}
                  className="bg-transparent border-b border-[#1a2e3b]/20 py-2 text-[#1a2e3b] focus:outline-none focus:border-[#D1BB94] transition-colors placeholder:text-[#1a2e3b]/20"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontStyle: 'italic' }}
                  placeholder="Dietary requirements, special occasion..."
                />
              </div>
            </div>
          </div>

          {/* Submission Footer */}
          <div className="pt-16 flex flex-col items-center">
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || submitSuccess}
              className={`px-12 py-4 rounded-full text-[11px] tracking-[0.25em] font-black uppercase transition-all duration-300 shadow-md ${
                submitSuccess
                  ? 'bg-green-700 text-white shadow-none cursor-default'
                  : 'bg-[#1a2e3b] text-[#F9F8F6] hover:bg-[#D1BB94] hover:text-[#1a2e3b] hover:shadow-xl'
              }`}
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              {isSubmitting ? 'Processing...' : submitSuccess ? 'Reservation Requested ✓' : 'Confirm Reservation'}
            </button>

            <div className="mt-12 flex flex-col items-center space-y-4">
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(26, 46, 59, 0.4)', textAlign: 'center', lineHeight: 2, maxWidth: '24rem' }}>
                For groups larger than <span style={{ color: 'rgba(26, 46, 59, 0.8)', fontWeight: 700 }}>8 guests</span> or corporate private events, please reach out to our team.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-10 h-10 rounded-full border border-[#1a2e3b]/10 flex items-center justify-center text-[#D1BB94]">
                  <Clock className="w-4 h-4" />
                </div>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontStyle: 'italic', color: '#D1BB94' }}>
                  +44 1865 249888
                </span>
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
      `}</style>
    </div>
  );
};

export default Reservations;