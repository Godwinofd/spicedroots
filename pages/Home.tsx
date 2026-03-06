import React, { useEffect, useRef, useState } from 'react';
import { Page } from '../types';
import { REVIEWS } from '../constants';
import { Star, ArrowRight, ShoppingBag, Calendar, ChevronLeft, ChevronRight, Utensils } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import heroVideo from '../assets/rumbar-1.mp4';
import backgroundVideo from '../assets/PHOTOBOARD.mp4';
import heritageArt from '../assets/DSC08044.jpg?format=webp&w=1600';
import heritageStaff from '../assets/DSC08392.jpg?format=webp&w=1600';
import heritageFamily from '../assets/DSC08040.jpg?format=webp&w=1600';
import menuBg from '../assets/menubackground.png?format=webp&w=1600';
import heritageHero from '../assets/DSC08713.jpg?format=webp&w=1600';
import diningHero from '../assets/DSC08155.jpg?format=webp&w=1600';
import occasion1 from '../assets/DSC08191.jpg?format=webp&w=800';
import occasion2 from '../assets/DSC08530.jpg?format=webp&w=800';
import occasion3 from '../assets/DSC08301.jpg?format=webp&w=800';
import occasion4 from '../assets/DSC08725.jpg?format=webp&w=800';
import occasion5 from '../assets/DSC08031.jpg?format=webp&w=800';
import occasion6 from '../assets/DSC08164.jpg?format=webp&w=800';
import occasion7 from '../assets/DSC08271.jpg?format=webp&w=800';
import occasion8 from '../assets/DSC08309.jpg?format=webp&w=800';
import occasion9 from '../assets/DSC08544.jpg?format=webp&w=800';
import occasion10 from '../assets/DSC08720.jpg?format=webp&w=800';
import occasion11 from '../assets/DSC08027.jpg?format=webp&w=800';
import occasion12 from '../assets/DSC08036.jpg?format=webp&w=800';
import occasion13 from '../assets/DSC08045.jpg?format=webp&w=800';
import occasion14 from '../assets/DSC08071.jpg?format=webp&w=800';
import occasion15 from '../assets/DSC08139.jpg?format=webp&w=800';
import occasion16 from '../assets/DSC08215.jpg?format=webp&w=800';
import occasion17 from '../assets/DSC08234.jpg?format=webp&w=800';
import occasion18 from '../assets/DSC08259.jpg?format=webp&w=800';
import occasion19 from '../assets/DSC08371.jpg?format=webp&w=800';
import occasion20 from '../assets/DSC08550.jpg?format=webp&w=800';

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

      {/* Optimized About Us Sector - Enhanced Design with Video Background */}
      <section id="story" className="relative py-24 lg:py-48 bg-[#F9F8F6] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={heritageHero}
            alt="Spiced Roots Exterior"
            className="w-full h-full object-cover"
          />
          {/* Tonal wash for text legibility - restored to 85% for the night exterior */}
          <div className="absolute inset-0 bg-[#F9F8F6]/85"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
          <div className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[1px] w-12 bg-[#D1BB94]"></div>
              <span className="text-[#D1BB94] font-medium tracking-[0.4em] text-xs uppercase">The Heritage</span>
              <div className="h-[1px] w-12 bg-[#D1BB94]"></div>
            </div>



            <blockquote className="text-[#27618E]/90 font-serif italic text-2xl sm:text-3xl leading-relaxed mb-8 max-w-2xl">
              "We don't just cook food; we share the stories of our grandmothers, the rhythm of our islands, and the warmth of Caribbean hospitality."
            </blockquote>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
            {/* 1. Large Feature: Staff/Team Energy */}
            <div className="lg:col-span-8 group">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative bg-white p-2 border border-[#D1BB94]/10 transition-transform duration-700 hover:scale-[1.02]">
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <img
                    src={heritageStaff}
                    alt="Spiced Roots Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#27618E]/40 text-xs tracking-widest uppercase font-black">01 · Our Energy</p>
                </div>
              </div>
            </div>

            {/* 2. Side Reveal: Heritage Art */}
            <div className="lg:col-span-4 space-y-12 pb-12">
              <div className="text-[#27618E]/70 font-light text-xl leading-relaxed space-y-6 animate-reveal-up">
                <p>
                  Founded with a mission to elevate Caribbean cuisine in Oxford, Spiced Roots blends traditional jerk-pit methods with contemporary techniques.
                </p>
              </div>
              <div className="group">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-2 border border-[#D1BB94]/10 rotate-[2deg] hover:rotate-0 transition-all duration-500">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <img
                      src={heritageArt}
                      alt="Traditional Heritage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-[#D1BB94] text-xs tracking-[0.4em] uppercase font-bold mt-4 text-center">02 · The Roots</p>
              </div>
            </div>

            {/* 3. Bottom Anchor: Family Board */}
            <div className="lg:col-span-5 space-y-8 lg:-mt-20 relative z-20">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white p-2 border border-[#D1BB94]/10 -rotate-[1deg] hover:rotate-0 transition-all duration-500">
                <div className="aspect-[16/10] rounded-xl overflow-hidden">
                  <img
                    src={heritageFamily}
                    alt="Family Board"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-[#27618E]/40 text-xs tracking-widest uppercase font-black">03 · The Community</p>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-end lg:pl-12 pb-12">
              <p className="text-[#27618E]/70 font-light text-xl leading-relaxed max-w-md mb-10">
                Every spice is toasted by hand, every curry slow-cooked for hours, and every cocktail crafted with the finest aged rums.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="group flex items-center space-x-6 pt-4 animate-reveal-up w-fit"
              >
                <span className="text-[#27618E] font-bold tracking-[0.3em] text-sm uppercase group-hover:text-[#D1BB94] transition-colors border-b-2 border-[#D1BB94]/20 pb-1">Our Full Story</span>
                <div className="w-14 h-14 rounded-full border border-[#27618E]/20 flex items-center justify-center group-hover:border-[#D1BB94] group-hover:bg-[#D1BB94] group-hover:text-white text-[#27618E] transition-all duration-500">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
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

      {/* Redesigned Dine With Us Section - Inspired by Reference */}
      <section ref={diningRef} className="bg-[#fcfaf7] py-16 lg:py-32 px-6 sm:px-12 relative overflow-hidden">

        <div className="max-w-[1400px] mx-auto relative z-10">

          {/* Top Split Layout - Title Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">

            {/* Left: Large Title & Description */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="w-8 h-8 text-[#27618E]">✦</div>
                <h2 className="text-6xl lg:text-8xl font-just-another-hand uppercase leading-[0.9] text-[#27618E] tracking-tight">
                  DINING<br />OPTIONS
                </h2>
              </div>
              <p className="text-[#27618E]/70 text-base lg:text-lg leading-relaxed max-w-md">
                Whether you're seeking an intimate dinner, a lively group celebration, or a private event, our versatile spaces and menus are designed to create unforgettable Caribbean experiences.
              </p>
            </div>

            {/* Right: Hero Image */}
            <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={diningHero}
                alt="Dining Experience at Spiced Roots"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#27618E]/30 to-transparent"></div>
            </div>

          </div>

          {/* Service Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* Book Table Card */}
            <div
              onClick={() => onNavigate('reservations')}
              className="group relative bg-white p-6 lg:p-10 rounded-2xl cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500 border border-[#27618E]/10 hover:border-[#27618E]/30"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-xl bg-[#27618E] flex items-center justify-center text-white">
                  <Calendar className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-just-another-hand text-[#27618E] uppercase">Book Your Table</h3>
                  <p className="text-[#27618E]/60 text-sm leading-relaxed">
                    Reserve your spot for an unforgettable dining experience. Perfect for intimate meals, large groups, and special events.
                  </p>
                </div>
                <div className="flex items-center text-[#27618E] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  <span className="mr-2">RESERVE NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Delivery Card */}
            <div
              onClick={() => onNavigate('order')}
              className="group relative bg-white p-6 lg:p-10 rounded-2xl cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500 border border-[#27618E]/10 hover:border-[#27618E]/30"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-xl bg-[#27618E] flex items-center justify-center text-white">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-just-another-hand text-[#27618E] uppercase">Delivery & Collection</h3>
                  <p className="text-[#27618E]/60 text-sm leading-relaxed">
                    Enjoy our authentic Caribbean flavors at home. Fast delivery and convenient collection options available.
                  </p>
                </div>
                <div className="flex items-center text-[#27618E] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  <span className="mr-2">ORDER NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Parties Card */}
            <div
              onClick={() => onNavigate('catering')}
              className="group relative bg-white p-6 lg:p-10 rounded-2xl cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500 border border-[#27618E]/10 hover:border-[#27618E]/30"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-xl bg-[#27618E] flex items-center justify-center text-white">
                  <Utensils className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-just-another-hand text-[#27618E] uppercase">Catering</h3>
                  <p className="text-[#27618E]/60 text-sm leading-relaxed">
                    Host your celebration with us. From birthdays to corporate events, we create memorable experiences.
                  </p>
                </div>
                <div className="flex items-center text-[#27618E] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  <span className="mr-2">LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Redesigned Occasions Section - Full-Width Creative Layout */}
      <section
        ref={occasionsRef}
        className="bg-[#fcfaf7] py-12 lg:py-24 overflow-hidden relative"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12">

          {/* Section Title */}
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-[1.2s] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-6xl lg:text-9xl font-just-another-hand text-[#27618E] leading-none tracking-tight mb-4">
              Perfect for Any Occasion
            </h2>
            <p className="text-[#27618E]/70 text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              From intimate dinners to grand celebrations, our vibrant Caribbean soul offers a sophisticated backdrop for every story.
            </p>
          </div>

          {/* Symmetric Grid Layout - 20 Images (High Density Wall) */}
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
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 lg:gap-6">
                  {allImages.map((img, index) => (
                    <div
                      key={index}
                      className={`group aspect-square rounded-xl overflow-hidden shadow-md transition-all duration-[1.2s]
                        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
                        ${index >= 8 ? 'hidden md:block' : ''}
                        ${index >= 8 && showAllOccasions ? '!block' : ''}
                      `}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-dark-green/5 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                  ))}
                </div>

                {/* Show More / Show Less — mobile only */}
                <div className="flex justify-center mt-8 md:hidden">
                  <button
                    onClick={() => setShowAllOccasions(prev => !prev)}
                    className="group flex items-center gap-3 px-8 py-3 rounded-full border-2 border-[#27618E] text-[#27618E] text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#27618E] hover:text-white"
                  >
                    {showAllOccasions ? (
                      <>Show Less <span className="text-lg leading-none transition-transform duration-300 rotate-180">↑</span></>
                    ) : (
                      <>Show More <span className="text-lg leading-none transition-transform duration-300">↓</span></>
                    )}
                  </button>
                </div>
              </>
            );
          })()}

        </div>
      </section>

      {/* Reviews Sector - REVERTED TO TWO-COLUMN DESIGN */}
      <section ref={reviewsRef} className="flex flex-col lg:flex-row min-h-[80vh]">
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000"
            alt="Cheesecake dessert"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-dark-green p-8 lg:p-24 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <span className="text-accent-pink text-4xl mb-6">✦</span>
          <h2 className="text-7xl sm:text-9xl font-just-another-hand uppercase font-normal leading-none tracking-tight mb-16">
            REVIEWS
          </h2>

          <div className="relative w-full max-w-lg min-h-[350px] flex flex-col justify-center">
            {/* Review Content */}
            <div className={`space-y-8 transition-all duration-300 ${reviewFade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent-pink fill-accent-pink" />
                ))}
              </div>
              <p className="serif italic text-3xl text-[#27618E] leading-tight">"{currentReview.title}"</p>
              <p className="text-xl font-light text-[#27618E]/80 leading-relaxed italic">
                {currentReview.content}
              </p>
              <div className="flex flex-col items-center pt-4">
                <span className="text-sm font-bold tracking-[0.3em] uppercase">{currentReview.author}</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-0 pointer-events-none">
              <button
                onClick={prevReview}
                className="pointer-events-auto p-3 rounded-full border border-white/10 text-white/40 hover:text-accent-pink hover:border-accent-pink hover:scale-110 transition-all duration-300 bg-dark-green/50 backdrop-blur-sm -ml-4 lg:-ml-12"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextReview}
                className="pointer-events-auto p-3 rounded-full border border-white/10 text-white/40 hover:text-accent-pink hover:border-accent-pink hover:scale-110 transition-all duration-300 bg-dark-green/50 backdrop-blur-sm -mr-4 lg:-mr-12"
                aria-label="Next Review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center space-x-2 mt-12">
              {REVIEWS.slice(0, 5).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setReviewFade(false);
                    setTimeout(() => {
                      setCurrentReviewIndex(i);
                      setReviewFade(true);
                    }, 300);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentReviewIndex ? 'bg-accent-pink w-6' : 'bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>
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
