import React, { useEffect, useRef, useState } from 'react';
import { Page } from '../types';
import { REVIEWS } from '../constants';
import { Star, ArrowRight, ShoppingBag, Calendar, ChevronLeft, ChevronRight, Utensils } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import heroVideo from '../assets/rumbar-1.mp4';
import backgroundVideo from '../assets/PHOTOBOARD.mp4';
import heritageArt from '../assets/DSC08044.jpg';
import heritageStaff from '../assets/DSC08392.jpg';
import heritageFamily from '../assets/DSC08040.jpg';
import menuBg from '../assets/menubackground.png';
import heritageHero from '../assets/DSC08713.jpg';
import diningHero from '../assets/DSC08155.jpg';
import occasion1 from '../assets/DSC08191.jpg';
import occasion2 from '../assets/DSC08530.jpg';
import occasion3 from '../assets/DSC08301.jpg';
import occasion4 from '../assets/DSC08725.jpg';
import occasion5 from '../assets/DSC08031.jpg';
import occasion6 from '../assets/DSC08164.jpg';
import occasion7 from '../assets/DSC08271.jpg';
import occasion8 from '../assets/DSC08309.jpg';
import occasion9 from '../assets/DSC08544.jpg';
import occasion10 from '../assets/DSC08720.jpg';
import occasion11 from '../assets/DSC08027.jpg';
import occasion12 from '../assets/DSC08036.jpg';
import occasion13 from '../assets/DSC08045.jpg';
import occasion14 from '../assets/DSC08071.jpg';
import occasion15 from '../assets/DSC08139.jpg';
import occasion16 from '../assets/DSC08215.jpg';
import occasion17 from '../assets/DSC08234.jpg';
import occasion18 from '../assets/DSC08259.jpg';
import occasion19 from '../assets/DSC08371.jpg';
import occasion20 from '../assets/DSC08550.jpg';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [reviewFade, setReviewFade] = useState(true);
  const [showAllOccasions, setShowAllOccasions] = useState(false);
  const occasionsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const diningRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const storyVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (storyVideoRef.current) {
      storyVideoRef.current.playbackRate = 0.7;
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (occasionsRef.current) observer.observe(occasionsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (diningRef.current) observer.observe(diningRef.current);
    if (reviewsRef.current) observer.observe(reviewsRef.current);

    return () => observer.disconnect();
  }, []);

  const nextReview = () => {
    setReviewFade(false);
    setTimeout(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % REVIEWS.length);
      setReviewFade(true);
    }, 300);
  };

  const prevReview = () => {
    setReviewFade(false);
    setTimeout(() => {
      setCurrentReviewIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
      setReviewFade(true);
    }, 300);
  };

  const currentReview = REVIEWS[currentReviewIndex];

  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* Optimized Hero Sector */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110 animate-subtle-zoom">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover brightness-[0.25]"
            style={{ willChange: 'transform' }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

          <h1 className="text-[18vw] sm:text-[15vw] leading-[0.9] sm:leading-[0.7] font-just-another-hand uppercase text-white font-normal tracking-tight mb-8 drop-shadow-2xl animate-reveal-up opacity-0 fill-mode-forwards" style={{ animationDelay: '0.4s' }}>
            SPICED ROOTS
          </h1>

          <div className="flex flex-col items-center animate-reveal-up opacity-0 fill-mode-forwards" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-wrap items-center justify-center gap-3 text-white/70 text-[10px] sm:text-xs tracking-[0.3em] font-bold uppercase mb-12 max-w-2xl px-4">
              <span>Fine Caribbean Cuisine</span>
              <Star className="w-2 h-2 text-[#D1BB94] fill-[#D1BB94]" />
              <span>Rum Bar</span>
              <Star className="w-2 h-2 text-[#D1BB94] fill-[#D1BB94]" />
              <span>Oxford</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap">
              <button
                onClick={() => onNavigate('reservations')}
                className="group flex items-center space-x-4 px-8 py-5 border border-white/20 hover:border-white/60 rounded-full text-[10px] tracking-[0.3em] font-black text-white transition-all duration-500 uppercase backdrop-blur-md btn-hover-scale"
              >
                <span>BOOK A TABLE</span>
                <Calendar className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('menu')}
                className="group flex items-center space-x-4 px-8 py-5 border border-white/20 hover:border-white/60 rounded-full text-[10px] tracking-[0.3em] font-black text-white transition-all duration-500 uppercase backdrop-blur-md btn-hover-scale"
              >
                <span>EXPLORE MENU</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 animate-bounce-slow">
          <span className="text-[9px] tracking-[0.4em] font-bold text-white/30 uppercase vertical-text">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent-pink to-transparent"></div>
        </div>
      </section>

      {/* Decorative Ticker Banner */}
      <div className="bg-[#fcfaf7] py-4 overflow-hidden whitespace-nowrap z-20 relative">
        <div className="flex space-x-12 animate-scroll-fast text-[#27618E] text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase items-center">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center">✦ <span className="ml-8">Cowley Road's Finest</span></span>
              <span className="flex items-center">✦ <span className="ml-8">Modern Caribbean Cuisine</span></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ─── OUR STORY (Editorial) ─────────────────────── */}
      <section id="story" style={{ background: '#F9F8F6', padding: '100px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>

          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
            <div style={{ height: '1px', width: '48px', background: '#D1BB94' }} />
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D1BB94', fontWeight: 700 }}>Our Story</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, #D1BB94, transparent)' }} />
          </div>

          {/* Two-column split */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

            {/* Left: Single image */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: '0 32px 64px rgba(27,46,59,0.15)' }}>
                <img
                  src={heritageHero}
                  alt="Spiced Roots Exterior"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                />
              </div>
              {/* Small floating label */}
              <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', background: '#1a2e3b', color: '#D1BB94', padding: '16px 20px', borderRadius: '2px' }}>
                <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 700, margin: 0 }}>Est. 2019 · Oxford</p>
              </div>
            </div>

            {/* Right: Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2 className="font-just-another-hand text-6xl sm:text-7xl lg:text-[6.5rem] leading-[0.9] text-[#1a2e3b]">
                Food is how we remember<br />where we come from.
              </h2>

              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', lineHeight: 1.85, color: '#3a5068', fontWeight: 300, margin: 0 }}>
                Spiced Roots was born from a simple truth — that the best Caribbean food doesn't need to be dressed up, it just needs to be done properly. When we opened on Cowley Road in 2019, we set out to do justice to the kitchens we grew up in.
              </p>

              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', lineHeight: 1.85, color: '#3a5068', fontWeight: 300, margin: 0 }}>
                Every recipe carries a memory. The jerk is marinated overnight and kissed by smoke. The curries bubble away for half a day. We don't cut corners here, because the people who taught us how to cook never did.
              </p>

              {/* Three micro-pillars */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', borderTop: '1px solid #D1BB94', paddingTop: '32px', marginTop: '8px' }}>
                {[
                  { num: '01', label: 'Craft & Technique' },
                  { num: '02', label: 'Culture & Community' },
                  { num: '03', label: 'Rum & Good Company' },
                ].map(item => (
                  <div key={item.num}>
                    <span style={{ display: 'block', fontFamily: 'Arial, sans-serif', fontSize: '9px', letterSpacing: '0.3em', color: '#D1BB94', fontWeight: 700, marginBottom: '8px' }}>{item.num}</span>
                    <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.875rem', color: '#1a2e3b', lineHeight: 1.4 }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => onNavigate('about')}
                style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '12px', fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#1a2e3b', background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: '8px' }}
              >
                <span style={{ borderBottom: '1px solid #D1BB94', paddingBottom: '4px' }}>Read Our Full Story</span>
                <ArrowRight style={{ width: '16px', height: '16px', color: '#D1BB94' }} />
              </button>
            </div>

          </div>
        </div>

        {/* Responsive overrides */}
        <style>{`
          @media (max-width: 900px) {
            #story > div > div:last-child {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            #story { padding: 64px 0 !important; }
            #story > div { padding: 0 24px !important; }
            #story > div > div:first-child { margin-bottom: 0 !important; }
          }
        `}</style>
      </section>

      {/* Decorative Ticker */}
      <div className="bg-[#27618E] py-5 overflow-hidden whitespace-nowrap border-y border-[#27618E]/10">
        <div className="flex space-x-20 animate-scroll-fast text-white text-[11px] font-black tracking-[0.5em] uppercase items-center">
          {[...Array(20)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center">✦ <span className="ml-8">Life Events & more</span></span>
              <span className="flex items-center">✦ <span className="ml-8">Sip & Paint</span></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Our Menu Sector */}
      <section className="flex flex-col lg:flex-row h-auto lg:h-[90vh]">
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-full group overflow-hidden">
          <img
            src={menuBg}
            alt="Our Signature Dishes"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-green/40 to-transparent"></div>
          <div className="absolute top-8 left-8">
            <div className="w-24 h-24 border border-accent-pink rounded-full flex flex-col items-center justify-center text-[10px] tracking-tighter text-center uppercase p-2 text-accent-pink rotate-12 bg-dark-green/60 backdrop-blur-md shadow-2xl">
              <span className="font-bold">FRESHLY</span>
              <span className="text-white text-lg font-serif italic my-1">Made</span>
              <span className="font-bold">DAILY</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#F9F8F6] p-12 lg:p-24 flex flex-col justify-center items-center text-center text-dark-green">
          <span className="text-4xl mb-6">✦</span>
          <h2 className="text-8xl sm:text-[11rem] font-just-another-hand uppercase font-normal leading-none tracking-tight mb-8">
            OUR<br />FLAVOURS
          </h2>
          <p className="text-lg leading-relaxed mb-12 max-w-md font-medium text-dark-green/70">
            From the deep smokiness of our 14-hour jerk pit to the delicate balance of our tamarind glazes, every dish is an invitation to celebrate.
          </p>
          <button
            onClick={() => onNavigate('menu')}
            className="px-16 py-5 bg-[#27618E] text-[#F9F8F6] rounded-full text-[10px] tracking-[0.3em] font-black uppercase hover:scale-105 transition-all duration-500 shadow-xl btn-hover-scale"
          >
            VIEW FULL MENU
          </button>
        </div>
      </section>

      {/* ─── DINE WITH US (Dark Editorial) ─────────────────────── */}
      <section ref={diningRef} style={{ background: '#1a2e3b', padding: '120px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>

          {/* Header & Image Split */}
          <div className="dining-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '80px' }}>

            {/* Left: Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ height: '1px', width: '48px', background: '#D1BB94' }} />
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D1BB94', fontWeight: 700 }}>Join Us</span>
              </div>

              <h2 className="font-just-another-hand text-6xl sm:text-7xl lg:text-[7rem] leading-[0.9] text-white tracking-tight m-0">
                A Seat at<br />Our Table
              </h2>

              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.7)', fontWeight: 300, margin: 0 }}>
                Whether it's an intimate dinner in our dining room, a lively celebration with friends, or bringing our flavours safely to your own front door — we pour the exact same care into every plate.
              </p>
            </div>

            {/* Right: Large Image */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '4px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 32px 64px rgba(0,0,0,0.4)' }}>
                <img
                  src={diningHero}
                  alt="Dining at Spiced Roots"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

          </div>

          {/* 3 Solid Cards */}
          <div className="dining-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>

            {/* Card 1: Reservations */}
            <div
              onClick={() => onNavigate('reservations')}
              className="group cursor-pointer"
              style={{ background: '#ffffff', padding: '48px 40px', borderRadius: '4px', display: 'flex', flexDirection: 'column', transition: 'transform 0.4s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#1a2e3b', marginBottom: '32px', transition: 'all 0.4s ease' }} className="group-hover:bg-[#D1BB94]">
                <Calendar style={{ width: '20px', height: '20px', color: '#F9F8F6' }} className="group-hover:text-[#1a2e3b] transition-colors duration-400" />
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 400, color: '#1a2e3b', margin: '0 0 16px', letterSpacing: '-0.01em' }}>Reservations</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.9375rem', lineHeight: 1.7, color: '#3a5068', fontWeight: 300, margin: '0 0 32px', flexGrow: 1 }}>
                The full Spiced Roots experience. Secure your table in our dining room for an evening of authentic food and curated rums.
              </p>
              <button
                className="px-8 py-4 bg-[#1a2e3b] text-[#F9F8F6] rounded-full text-[10px] tracking-[0.3em] font-black uppercase transition-all duration-500 shadow-md group-[&]:hover:bg-[#D1BB94] group-[&]:hover:text-[#1a2e3b] w-max mt-auto border border-transparent"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                BOOK A TABLE
              </button>
            </div>

            {/* Card 2: To-Go */}
            <div
              onClick={() => window.open('https://spiced-roots-restaurant-oxford.nextorder.com/', '_blank')}
              className="group cursor-pointer"
              style={{ background: '#ffffff', padding: '48px 40px', borderRadius: '4px', display: 'flex', flexDirection: 'column', transition: 'transform 0.4s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#1a2e3b', marginBottom: '32px', transition: 'all 0.4s ease' }} className="group-hover:bg-[#D1BB94]">
                <ShoppingBag style={{ width: '20px', height: '20px', color: '#F9F8F6' }} className="group-hover:text-[#1a2e3b] transition-colors duration-400" />
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 400, color: '#1a2e3b', margin: '0 0 16px', letterSpacing: '-0.01em' }}>To-Go</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.9375rem', lineHeight: 1.7, color: '#3a5068', fontWeight: 300, margin: '0 0 32px', flexGrow: 1 }}>
                Uncompromising restaurant quality, boxed up for home. Stop by for collection or have it delivered fast to your door.
              </p>
              <button
                className="px-8 py-4 bg-[#1a2e3b] text-[#F9F8F6] rounded-full text-[10px] tracking-[0.3em] font-black uppercase transition-all duration-500 shadow-md group-[&]:hover:bg-[#D1BB94] group-[&]:hover:text-[#1a2e3b] w-max mt-auto border border-transparent"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                ORDER NOW
              </button>
            </div>

            {/* Card 3: Events */}
            <div
              onClick={() => onNavigate('catering')}
              className="group cursor-pointer"
              style={{ background: '#ffffff', padding: '48px 40px', borderRadius: '4px', display: 'flex', flexDirection: 'column', transition: 'transform 0.4s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#1a2e3b', marginBottom: '32px', transition: 'all 0.4s ease' }} className="group-hover:bg-[#D1BB94]">
                <Utensils style={{ width: '20px', height: '20px', color: '#F9F8F6' }} className="group-hover:text-[#1a2e3b] transition-colors duration-400" />
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 400, color: '#1a2e3b', margin: '0 0 16px', letterSpacing: '-0.01em' }}>Private Events</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.9375rem', lineHeight: 1.7, color: '#3a5068', fontWeight: 300, margin: '0 0 32px', flexGrow: 1 }}>
                Bring the rhythm and flavour of Spiced Roots to your own celebration. Full catering for birthdays, weddings, and parties.
              </p>
              <button
                className="px-8 py-4 bg-[#1a2e3b] text-[#F9F8F6] rounded-full text-[10px] tracking-[0.3em] font-black uppercase transition-all duration-500 shadow-md group-[&]:hover:bg-[#D1BB94] group-[&]:hover:text-[#1a2e3b] w-max mt-auto border border-transparent"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                ENQUIRE HERE
              </button>
            </div>

          </div>

          <style>{`
            @media (max-width: 900px) {
              .dining-split { grid-template-columns: 1fr !important; gap: 40px !important; margin-bottom: 48px !important; }
              .dining-cards { grid-template-columns: 1fr !important; gap: 24px !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ─── OCCASIONS GALLERY (Redesigned) ─────────────────────── */}
      <section
        ref={occasionsRef}
        style={{ background: '#F9F8F6', padding: '120px 0', overflow: 'hidden', position: 'relative' }}
        id="occasions-section"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12">

          {/* Section Title */}
          <div className={`text-center mb-16 lg:mb-24 transition-all duration-[1.2s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-just-another-hand text-6xl sm:text-7xl lg:text-[7rem] leading-[0.9] text-[#1a2e3b] tracking-tight mb-6">
              The Atmosphere
            </h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.125rem', lineHeight: 1.85, color: '#3a5068', fontWeight: 300, margin: '0 auto', maxWidth: '42rem' }}>
              Whether you're escaping for a quiet date night, gathering the family for a Sunday feast, or hosting a celebration that spills into the early hours, Spiced Roots is the perfect backdrop.
            </p>
          </div>

          {/* Grid Layout - Larger, Elegant Proportions */}
          {(() => {
            const allImages = [
              { src: occasion1, alt: "Atmospheric Dining" },
              { src: occasion2, alt: "Culinary Joy" },
              { src: occasion3, alt: "Social Moments" },
              { src: occasion4, alt: "Artistic Interior" },
              { src: occasion5, alt: "Cultural Roots" },
              { src: occasion6, alt: "Restaurant Bustle" },
              { src: occasion7, alt: "Intimate Dinner" },
              { src: occasion8, alt: "Signature Dish Close-up" },
              { src: occasion9, alt: "Bar Craft & Spirit" },
              { src: occasion10, alt: "Hand-painted Brand Detail" },
              { src: occasion11, alt: "Vibrant Social" },
              { src: occasion12, alt: "Atmospheric Decor" },
              { src: occasion13, alt: "Bar Service" },
              { src: occasion14, alt: "Guest Happiness" },
              { src: occasion15, alt: "Authentic Vibe" },
              { src: occasion16, alt: "Social Energy" },
              { src: occasion17, alt: "Premium Rums" },
              { src: occasion18, alt: "Gourmet Plating" },
              { src: occasion19, alt: "Cultural Detail" },
              { src: occasion20, alt: "Lively Crowd" }
            ];
            return (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {allImages.map((img, index) => (
                    <div
                      key={index}
                      className={`group overflow-hidden transition-all duration-[1.2s]
                        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
                        ${index >= 6 ? 'hidden md:block' : ''}
                        ${index >= 6 && showAllOccasions ? '!block' : ''}
                      `}
                      style={{ borderRadius: '4px', animationDelay: `${index * 0.05}s`, aspectRatio: '4/5', position: 'relative' }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#1a2e3b]/0 group-hover:bg-[#1a2e3b]/10 transition-colors duration-500"></div>
                    </div>
                  ))}
                </div>

                {/* Show More / Show Less — mobile only */}
                <div className="flex justify-center mt-12 md:hidden">
                  <button
                    onClick={() => setShowAllOccasions(prev => !prev)}
                    className="px-8 py-4 bg-[#1a2e3b] text-[#F9F8F6] rounded-full text-[10px] tracking-[0.3em] font-black uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-3 w-max mx-auto border border-transparent"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  >
                    {showAllOccasions ? (
                      <>SHOW LESS <span className="text-sm leading-none transition-transform duration-300 rotate-180">↑</span></>
                    ) : (
                      <>VIEW MORE <span className="text-sm leading-none transition-transform duration-300">↓</span></>
                    )}
                  </button>
                </div>
              </>
            );
          })()}

        </div>
        <style>{`
          @media (max-width: 900px) {
            #occasions-section { padding: 64px 0 !important; }
            #occasions-section > div { padding: 0 24px !important; }
          }
        `}</style>
      </section>

      {/* ─── GUESTBOOK / REVIEWS (Redesigned Editorial) ─────────────────────── */}
      <section ref={reviewsRef} style={{ display: 'flex', minHeight: '80vh', background: '#1a2e3b' }} className="flex-col lg:flex-row">

        {/* Left side: Content */}
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ height: '1px', width: '48px', background: '#D1BB94' }} />
            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D1BB94', fontWeight: 700 }}>
              Reviews
            </span>
          </div>

          <h2 className="font-just-another-hand text-6xl sm:text-7xl lg:text-[7rem] leading-[0.9] text-white tracking-tight mb-16">
            Words from<br />Our Guests
          </h2>

          <div className="relative w-full max-w-xl flex flex-col justify-center min-h-[250px]">
            {/* Review Content */}
            <div className={`transition-all duration-500 ${reviewFade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '32px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} style={{ width: '20px', height: '20px', color: '#D1BB94', fill: '#D1BB94' }} />
                ))}
              </div>

              <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.75rem', lineHeight: 1.5, color: '#F9F8F6', fontStyle: 'italic', marginBottom: '32px' }}>
                "{[
                  "The most authentic Caribbean food outside of the islands. Every single dish is packed with soul and perfectly balanced spice. Incredible.",
                  "A masterclass in flavour. The 14-hour smoked jerk is unmatched, and the rum pairings recommended by the staff were absolutely perfect.",
                  "Stunning atmosphere and even better food. You can immediately taste the heritage and love they pour into the kitchen."
                ][currentReviewIndex % 3]}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.875rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, color: '#D1BB94' }}>
                  — {[
                    "Michael S.",
                    "Sarah V.",
                    "Daniel H."
                  ][currentReviewIndex % 3]}
                </span>
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Google Reviews
                </span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '48px' }}>
              <button
                onClick={() => {
                  setReviewFade(false);
                  setTimeout(() => {
                    setCurrentReviewIndex(prev => (prev === 0 ? 2 : prev - 1));
                    setReviewFade(true);
                  }, 300);
                }}
                className="group p-4 rounded-full border border-white/20 hover:border-[#D1BB94] transition-colors duration-300"
              >
                <ChevronLeft style={{ width: '24px', height: '24px', color: '#F9F8F6' }} className="group-hover:text-[#D1BB94] transition-colors" />
              </button>

              <button
                onClick={() => {
                  setReviewFade(false);
                  setTimeout(() => {
                    setCurrentReviewIndex(prev => (prev === 2 ? 0 : prev + 1));
                    setReviewFade(true);
                  }, 300);
                }}
                className="group p-4 rounded-full border border-white/20 hover:border-[#D1BB94] transition-colors duration-300"
              >
                <ChevronRight style={{ width: '24px', height: '24px', color: '#F9F8F6' }} className="group-hover:text-[#D1BB94] transition-colors" />
              </button>
            </div>

          </div>
        </div>

        {/* Right side: Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden relative">
          <img
            src={occasion8}
            alt="Spiced Roots Signature Dish"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2e3b]/20"></div>
        </div>
      </section>

      <style>{`
        @keyframes sublte-zoom {
          from { transform: scale(1.1); }
          to { transform: scale(1.0); }
        }
        .animate-subtle-zoom {
          animation: sublte-zoom 10s ease-out forwards;
        }
        @keyframes reveal-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal-up {
          animation: reveal-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(32px); }
          50% { transform: translateY(16px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(10px) translateX(-50%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
