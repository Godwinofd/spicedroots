
import React, { useEffect, useRef, useState } from 'react';
import { Page } from '../types';
import { REVIEWS } from '../constants';
import { Star, ArrowRight, ShoppingBag, Calendar, ChevronLeft, ChevronRight, Utensils } from 'lucide-react';

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
            className="w-full h-full object-cover brightness-[0.25]"
          >
            <source src="/assets/rumbar-1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

          <h1 className="text-[18vw] sm:text-[15vw] leading-[0.7] font-just-another-hand uppercase text-white font-normal tracking-tight mb-8 drop-shadow-2xl animate-reveal-up opacity-0 fill-mode-forwards" style={{ animationDelay: '0.4s' }}>
            SPICED ROOTS
          </h1>

          <div className="flex flex-col items-center animate-reveal-up opacity-0 fill-mode-forwards" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center space-x-3 text-white/70 text-[10px] sm:text-xs tracking-[0.3em] font-bold uppercase mb-12 max-w-2xl">
              <span>Fine Caribbean Cuisine</span>
              <Star className="w-2 h-2 text-[#D1BB94] fill-[#D1BB94]" />
              <span>Rum Bar</span>
              <Star className="w-2 h-2 text-[#D1BB94] fill-[#D1BB94]" />
              <span>Oxford</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <button
                onClick={() => onNavigate('reservations')}
                className="px-12 py-5 bg-[#D1BB94] hover:bg-[#27618E] text-white rounded-full text-[10px] tracking-[0.3em] font-black transition-all duration-500 btn-hover-scale shadow-xl uppercase shadow-[#D1BB94]/10"
              >
                BOOK A TABLE
              </button>
              <button
                onClick={() => onNavigate('menu')}
                className="group flex items-center space-x-4 px-10 py-5 border border-white/20 hover:border-white/60 rounded-full text-[10px] tracking-[0.3em] font-black text-white transition-all duration-500 uppercase backdrop-blur-md btn-hover-scale"
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

      {/* Optimized About Us Sector */}
      <section ref={aboutRef} className="relative py-40 px-6 sm:px-12 bg-[#F9F8F6] overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          {/* Content side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="w-12 h-[1px] bg-[#D1BB94]"></span>
                <span className="text-[#D1BB94] text-[10px] tracking-[0.4em] font-black uppercase">THE HERITAGE</span>
              </div>
              <h2 className="text-8xl sm:text-9xl font-just-another-hand uppercase font-normal leading-none tracking-tight text-[#27618E]">
                VIBRANT<br />SOUL, <span className="text-[#D1BB94]">ROOTED</span><br />IN TRADITION
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-[#27618E]/80 leading-relaxed font-light italic serif">
                "We don't just cook food; we share the stories of our grandmothers, the rhythm of our islands, and the warmth of Caribbean hospitality."
              </p>
              <p className="text-base text-[#27618E]/60 leading-loose font-light max-w-md">
                Founded with a mission to elevate Caribbean cuisine in Oxford, Spiced Roots blends traditional jerk-pit methods with contemporary techniques. Every spice is toasted by hand, every curry slow-cooked for hours, and every cocktail crafted with the finest aged rums.
              </p>
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="group relative flex items-center space-x-6 py-4 overflow-hidden"
            >
              <span className="text-[10px] tracking-[0.4em] font-black uppercase text-[#27618E] group-hover:text-[#D1BB94] transition-colors">OUR STORY</span>
              <div className="w-12 h-12 rounded-full border border-[#27618E]/20 flex items-center justify-center group-hover:border-[#D1BB94] group-hover:bg-[#D1BB94] group-hover:text-white transition-all duration-500">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Visual side - Editorial Layout */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-12 grid-rows-6 h-[700px] gap-4">
              {/* Main Image */}
              <div className="col-start-1 col-end-10 row-start-1 row-end-6 rounded-2xl overflow-hidden shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200"
                  alt="Kitchen craftsmanship"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark-green/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>

              {/* Floating Accent Image */}
              <div className="col-start-8 col-end-13 row-start-3 row-end-7 rounded-2xl overflow-hidden shadow-2xl z-10 border-[10px] border-dark-green translate-y-8 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Interior details"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Coordinates Badge */}
              <div className="absolute -left-12 bottom-12 bg-accent-pink p-6 rounded-full rotate-[-15deg] hidden lg:flex flex-col items-center justify-center text-dark-green shadow-xl z-20 hover:rotate-0 transition-transform duration-500 cursor-default">
                <span className="text-[10px] font-black tracking-widest leading-none">51.7483° N</span>
                <span className="text-[10px] font-black tracking-widest leading-none">1.2366° W</span>
              </div>
            </div>

            {/* Background Texture */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-pink/5 rounded-full blur-[120px] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Decorative Ticker */}
      <div className="bg-accent-pink py-5 overflow-hidden whitespace-nowrap border-y border-dark-green/10">
        <div className="flex space-x-20 animate-scroll-fast text-dark-green text-[11px] font-black tracking-[0.5em] uppercase items-center">
          {[...Array(20)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center">✦ <span className="ml-8">Cowley Road's Culinary Landmark</span></span>
              <span className="flex items-center">✦ <span className="ml-8">Modern Caribbean Gastronomy</span></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Our Menu Sector */}
      <section className="flex flex-col lg:flex-row h-auto lg:h-[90vh]">
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-full group overflow-hidden">
          <img
            src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766709704/pexels-8pcarlos-morocho-2150734957-35260748_yoeh8n.jpg"
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
        <div className="w-full lg:w-1/2 bg-accent-pink p-12 lg:p-24 flex flex-col justify-center items-center text-center text-dark-green">
          <span className="text-4xl mb-6">✦</span>
          <h2 className="text-8xl sm:text-[11rem] font-just-another-hand uppercase font-normal leading-none tracking-tight mb-8">
            CURATED<br />FLAVOURS
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

      {/* Redesigned Dine With Us Section - Less Formal, More Vibrant */}
      <section ref={diningRef} className="bg-[#27618E] py-32 lg:py-56 px-6 sm:px-12 relative overflow-hidden">
        {/* Organic Decorative Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D1BB94]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#F9F8F6]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 items-start">

            {/* Left Column: Narrative with Staggered Elements */}
            <div className="w-full lg:w-[45%] space-y-20">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <span className="font-just-another-hand text-3xl text-[#D1BB94] tracking-wider transform -rotate-12">The Experience</span>
                  <div className="h-[1px] flex-grow bg-[#F9F8F6]/20"></div>
                </div>
                <h2 className="text-[15vw] lg:text-[10vw] font-just-another-hand uppercase font-normal leading-[0.8] tracking-tight text-[#F9F8F6]">
                  DINE<br /><span className="text-[#D1BB94]">WITH</span> US
                </h2>
                <p className="text-[#F9F8F6]/70 text-2xl font-light leading-relaxed max-w-sm font-just-another-hand tracking-wide">
                  Where every meal is a celebration. From sun-drenched lunches to moonlit island rhythms.
                </p>
              </div>

              {/* Overlapping Image Composition */}
              <div className="relative pt-12">
                <div className="relative z-20 w-[85%] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200"
                    alt="Lively Dining Space"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#27618E]/60 to-transparent"></div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -right-5 z-30 w-40 h-40 bg-[#D1BB94] rounded-full flex items-center justify-center text-[#27618E] transform rotate-12 shadow-xl border-4 border-[#27618E]">
                  <div className="text-center">
                    <p className="font-just-another-hand text-4xl leading-none">Vibe</p>
                    <p className="text-[10px] font-black uppercase tracking-widest">Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Cards & Video */}
            <div className="w-full lg:w-[55%] space-y-16 lg:pt-32">

              {/* Main Booking Card */}
              <div
                onClick={() => onNavigate('reservations')}
                className="group relative bg-[#F9F8F6] p-12 rounded-[4rem] cursor-pointer shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D1BB94]/10 rounded-bl-[4rem]"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4">
                    <span className="font-just-another-hand text-4xl text-[#27618E]">Grab a spot</span>
                    <h3 className="text-6xl font-just-another-hand text-[#27618E] leading-none uppercase">Book Your Table</h3>
                    <p className="text-[#27618E]/60 text-sm tracking-widest uppercase font-bold">Intimate Meals • Large Groups • Events</p>
                  </div>
                  <div className="w-20 h-20 rounded-full bg-[#27618E] flex items-center justify-center text-[#F9F8F6] transition-transform duration-500 group-hover:bg-[#D1BB94] group-hover:scale-110">
                    <Calendar className="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Video and Secondary Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Video Card - More Organic Styling */}
                <div className="md:col-span-2 relative aspect-video rounded-[3.5rem] overflow-hidden shadow-2xl group/vid">
                  <video
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover brightness-[0.7] group-hover/vid:brightness-[0.9] transition-all duration-1000"
                  >
                    <source src="https://res.cloudinary.com/dzjqki9gi/video/upload/v1766502983/4170498-uhd_3840_2160_25fps_zhnymf.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-x-8 bottom-8 flex justify-between items-end">
                    <div className="bg-[#F9F8F6]/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                      <span className="text-[10px] tracking-[0.3em] font-black uppercase text-white">Feel the rhythm</span>
                    </div>
                    <p className="font-just-another-hand text-5xl text-white opacity-0 group-hover/vid:opacity-100 transition-opacity duration-700">Live @ Spiced Roots</p>
                  </div>
                </div>

                {/* Delivery Card */}
                <div
                  onClick={() => onNavigate('order')}
                  className="group bg-[#D1BB94] p-10 rounded-[3rem] cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex flex-col h-full justify-between gap-12">
                    <div className="w-16 h-16 rounded-2xl bg-[#27618E] flex items-center justify-center text-[#F9F8F6]">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-5xl font-just-another-hand text-[#27618E] leading-none uppercase">Get the heat</h4>
                      <p className="text-[#27618E]/70 text-[10px] tracking-[0.2em] font-black uppercase flex items-center">
                        Delivery & Collection <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </p>
                    </div>
                  </div>
                </div>

                {/* Events Card */}
                <div
                  onClick={() => onNavigate('menu')}
                  className="group bg-[#F9F8F6]/5 border border-[#F9F8F6]/20 p-10 rounded-[3rem] cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#F9F8F6]/10"
                >
                  <div className="flex flex-col h-full justify-between gap-12">
                    <div className="w-16 h-16 rounded-2xl bg-[#F9F8F6]/10 flex items-center justify-center text-[#F9F8F6]">
                      <Utensils className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-5xl font-just-another-hand text-[#F9F8F6] leading-none uppercase">Parties</h4>
                      <p className="text-[#F9F8F6]/50 text-[10px] tracking-[0.2em] font-black uppercase flex items-center">
                        Private Events <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Optimized Occasions Editorial Section - STRICT HEIGHT REDUCTION */}
      <section
        ref={occasionsRef}
        className="bg-[#fcfaf7] py-24 sm:py-48 px-6 sm:px-12 overflow-hidden relative"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Top Row: Panoramic Layout */}
          <div className="relative flex flex-col md:flex-row items-end justify-between mb-24 md:mb-40 space-y-12 md:space-y-0">

            {/* Image 1: Dining Ambience - Wide Aspect to halve height strictly */}
            <div
              className={`w-full md:w-[32%] aspect-[2/1] shadow-lg rounded-[24px] md:rounded-[30px] overflow-hidden group/img transition-all duration-[1.5s] ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'}`}
            >
              <img
                src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766507464/pexels-snappr-27556972_q4exwt.jpg"
                alt="Sophisticated Dining"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            {/* Image 2: Detail Shot (Floating) - Panoramic Aspect */}
            <div
              className={`w-2/3 md:w-[24%] aspect-[2/1] self-end md:self-auto md:absolute md:left-[42%] md:top-[-10%] shadow-md rounded-[24px] md:rounded-[30px] overflow-hidden z-10 transition-all duration-[1.8s] ease-[cubic-bezier(0.16, 1, 0.3, 1)] delay-200 ${isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-32 scale-75 blur-md'}`}
            >
              <img
                src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766507462/pexels-valeriya-1860208_tpsg5l.jpg"
                alt="Close-up detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Image 3: Portrait / Vibe - Panoramic Aspect */}
            <div
              className={`w-full md:w-[25%] aspect-[2/1] shadow-lg rounded-[24px] md:rounded-[30px] overflow-hidden transition-all duration-[1.5s] ease-[cubic-bezier(0.16, 1, 0.3, 1)] delay-400 ${isVisible ? 'opacity-100 translate-x-0 rotate-1' : 'opacity-0 translate-x-24 rotate-6'}`}
            >
              <img
                src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766507460/pexels-marlein-16021268_x5ezqi.jpg"
                alt="Atmospheric Portrait"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              />
            </div>
          </div>

          {/* Central Editorial Text */}
          <div className="flex flex-col items-center justify-center my-32 md:my-56">
            <div className={`text-center transition-all duration-[1.2s] ease-[cubic-bezier(0.16, 1, 0.3, 1)] delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-[16vw] sm:text-[14vw] md:text-[12vw] font-just-another-hand text-black leading-none tracking-tight">
                "The perfect place for<br />
                <span className={`block md:ml-[25vw] text-black transition-all duration-[1.5s] ease-[cubic-bezier(0.16, 1, 0.3, 1)] delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>any occasion"</span>
              </h2>
            </div>
            <div className={`max-w-xl mt-10 md:mt-16 text-center transition-all duration-[1.2s] delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-black/70 text-base md:text-xl font-light leading-relaxed px-4 md:px-0">
                Whether it's a milestone birthday, a corporate gathering, or an intimate festive celebration, our vibrant Caribbean soul offers a sophisticated backdrop for every story.
              </p>
            </div>
          </div>

          {/* Bottom Row: Entrance from Bottom - STRICT HEIGHT REDUCTION */}
          <div className="flex flex-col md:flex-row items-start justify-center md:space-x-32 space-y-16 md:space-y-0">

            {/* Image 4: Dish Presentation - Panoramic Aspect */}
            <div
              className={`w-full md:w-[35%] aspect-[2/1] transition-all duration-[1.5s] ease-[cubic-bezier(0.16, 1, 0.3, 1)] delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              <div className="shadow-2xl rounded-[24px] md:rounded-[30px] overflow-hidden mb-6 group/dish h-full">
                <img
                  src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766507458/pexels-jcabrera-5041487_kricqz.jpg"
                  alt="Signature Dish"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/dish:scale-105"
                />
              </div>
              <p className="text-black text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold text-center opacity-40">Signature Dish</p>
            </div>

            {/* Image 5: Large Group Experience - Extra Wide Panoramic Aspect */}
            <div
              className={`w-full md:w-[38%] aspect-[3/1] shadow-2xl rounded-[24px] md:rounded-[30px] overflow-hidden md:mt-24 transition-all duration-[1.8s] ease-[cubic-bezier(0.16, 1, 0.3, 1)] delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'}`}
            >
              <img
                src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766507431/pexels-isabella-mendes-107313-1304540_lfh3rd.jpg"
                alt="Social Celebration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>

        {/* Decorative Background Accents */}
        <div className={`absolute top-1/4 left-[-10%] w-[40vw] h-[40vw] border border-black/[0.03] rounded-full transition-transform duration-[4s] linear ${isVisible ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}></div>
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
        <div className="w-full lg:w-1/2 bg-dark-green p-12 lg:p-24 flex flex-col justify-center items-center text-center relative overflow-hidden">
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
              <p className="serif italic text-3xl text-accent-pink leading-tight">"{currentReview.title}"</p>
              <p className="text-xl font-light text-white/70 leading-relaxed italic">
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
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-fast {
          animation: scroll-fast 20s linear infinite;
        }
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
