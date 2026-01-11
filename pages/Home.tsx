import React, { useEffect, useRef, useState } from 'react';
import { Page } from '../types';
import { REVIEWS } from '../constants';
import { Star, ArrowRight, ShoppingBag, Calendar, ChevronLeft, ChevronRight, Utensils } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import backgroundImage from '../assets/new.jpg';
import backgroundImage2 from '../assets/background2.jpg';
import backgroundImage3 from '../assets/background3.jpg';
import heroVideo from '../assets/rumbar-1.mp4';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [reviewFade, setReviewFade] = useState(true);
  const occasionsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const diningRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

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

      {/* Optimized About Us Sector - Enhanced Design V2 */}
      <section ref={aboutRef} className="relative py-16 lg:py-40 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Overlay for readability - adjusted opacity */}
        <div className="absolute inset-0 bg-[#F9F8F6]/90 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Column: Typography & Text */}
            <div className="space-y-10 relative z-10">

              {/* Header Tag */}
              <div className="flex items-center space-x-4 animate-reveal-up" style={{ animationDelay: '0.1s' }}>
                <div className="h-[2px] w-12 bg-[#D1BB94]"></div>
                <span className="text-[#D1BB94] font-medium tracking-[0.2em] text-sm uppercase">The Heritage</span>
              </div>

              {/* Main Headline */}
              <h2 className="leading-[0.9] animate-reveal-up" style={{ animationDelay: '0.2s' }}>
                <div className="block font-just-another-hand text-[#27618E] text-[15vw] sm:text-[9rem]">
                  VIBRANT
                </div>
                <div className="block -mt-4 sm:-mt-8">
                  <span className="font-just-another-hand text-[#27618E] text-[15vw] sm:text-[9rem]">SOUL, </span>
                  <span className="font-serif italic font-bold text-[#D1BB94] text-[12vw] sm:text-[7rem] ml-2">ROOTED</span>
                </div>
                <div className="block font-just-another-hand text-[#27618E] text-[15vw] sm:text-[9rem] -mt-4 sm:-mt-8">
                  IN TRADITION
                </div>
              </h2>

              {/* Quote */}
              <blockquote className="text-[#27618E]/90 font-serif italic text-xl sm:text-2xl leading-relaxed border-l-0 pl-0 mt-8 animate-reveal-up" style={{ animationDelay: '0.3s' }}>
                "We don't just cook food; we share the stories of our grandmothers, the rhythm of our islands, and the warmth of Caribbean hospitality."
              </blockquote>

              {/* Body Text */}
              <div className="text-[#27618E]/70 font-light text-base sm:text-lg leading-relaxed space-y-6 max-w-lg animate-reveal-up" style={{ animationDelay: '0.4s' }}>
                <p>
                  Founded with a mission to elevate Caribbean cuisine in Oxford, Spiced Roots blends traditional jerk-pit methods with contemporary techniques.
                </p>
                <p>
                  Every spice is toasted by hand, every curry slow-cooked for hours, and every cocktail crafted with the finest aged rums.
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => onNavigate('about')}
                className="group flex items-center space-x-4 pt-4 animate-reveal-up"
                style={{ animationDelay: '0.5s' }}
              >
                <span className="text-[#27618E] font-bold tracking-[0.2em] text-sm uppercase group-hover:text-[#D1BB94] transition-colors">Our Story</span>
                <div className="w-12 h-12 rounded-full border border-[#27618E]/20 flex items-center justify-center group-hover:border-[#D1BB94] group-hover:bg-[#D1BB94] group-hover:text-white text-[#27618E] transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>

            </div>

            {/* Right Column: Imagery - Refined Layout */}
            <div className="relative h-[500px] sm:h-[700px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">

              {/* Main Image (Food) - Cleaner Lines */}
              <div className="relative z-10 w-[85%] max-w-md transform -translate-x-4 sm:-translate-x-8 -translate-y-8">
                <div className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1935&auto=format&fit=crop"
                    alt="Authentic Caribbean Jerk Ribs with traditional spices"
                    aspectRatio="aspect-[4/5]"
                    className="hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 400px"
                  />
                </div>
              </div>

              {/* Secondary Image (Interior) - White Border for Separation */}
              <div className="absolute bottom-12 right-0 sm:right-8 w-[55%] max-w-xs z-20 transform translate-y-12">
                <div className="p-0 bg-white rounded-xl shadow-2xl rotate-[3deg] hover:rotate-0 transition-transform duration-700 border-[8px] border-white">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                    alt="Spiced Roots restaurant interior with Caribbean ambiance"
                    aspectRatio="aspect-square"
                    className="rounded-lg"
                    sizes="(max-width: 768px) 55vw, 300px"
                  />
                </div>
              </div>


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
            src={backgroundImage3}
            alt="Authentic Caribbean dish"
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
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
              <video
                autoPlay muted loop playsInline
                preload="metadata"
                poster="https://res.cloudinary.com/dzjqki9gi/video/upload/v1766502983/4170498-uhd_3840_2160_25fps_zhnymf.jpg"
                className="w-full h-full object-cover"
              >
                <source src="https://res.cloudinary.com/dzjqki9gi/video/upload/v1766502983/4170498-uhd_3840_2160_25fps_zhnymf.mp4" type="video/mp4" />
              </video>
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
            <h2 className="text-7xl lg:text-9xl font-just-another-hand text-[#27618E] leading-none tracking-tight mb-4">
              Perfect for Any Occasion
            </h2>
            <p className="text-[#27618E]/70 text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              From intimate dinners to grand celebrations, our vibrant Caribbean soul offers a sophisticated backdrop for every story.
            </p>
          </div>

          {/* Creative Asymmetric Grid */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">

            {/* Large Left Image - Spans 7 columns */}
            <div
              className={`col-span-12 lg:col-span-7 aspect-[4/3] lg:aspect-[3/2] rounded-2xl overflow-hidden shadow-xl transition-all duration-[1.5s] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'}`}
            >
              <OptimizedImage
                src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766507464/pexels-snappr-27556972_q4exwt.jpg"
                alt="Sophisticated dining experience at Spiced Roots Caribbean restaurant"
                className="hover:scale-110 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>

            {/* Right Column - Two Stacked Images */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 lg:gap-6">
              {/* Top Right */}
              <div
                className={`aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-[1.5s] delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
              >
                <OptimizedImage
                  src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766507462/pexels-valeriya-1860208_tpsg5l.jpg"
                  alt="Caribbean cuisine close-up detail with vibrant presentation"
                  className="hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
              {/* Bottom Right */}
              <div
                className={`aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-[1.5s] delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
              >
                <OptimizedImage
                  src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766507460/pexels-marlein-16021268_x5ezqi.jpg"
                  alt="Atmospheric dining portrait at Spiced Roots"
                  className="hover:scale-110 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </div>

            {/* Bottom Row - Two Images Side by Side */}
            <div className="col-span-12 lg:col-span-6 aspect-[16/9] lg:aspect-[3/2] rounded-2xl overflow-hidden shadow-xl transition-all duration-[1.5s] delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}">
              <OptimizedImage
                src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766507458/pexels-jcabrera-5041487_kricqz.jpg"
                alt="Signature Caribbean dish beautifully plated"
                className="hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="col-span-12 lg:col-span-6 aspect-[16/9] lg:aspect-[3/2] rounded-2xl overflow-hidden shadow-xl transition-all duration-[1.8s] delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'}">
              <OptimizedImage
                src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766507431/pexels-isabella-mendes-107313-1304540_lfh3rd.jpg"
                alt="Social celebration and gathering at Spiced Roots"
                className="hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

          </div>

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
