
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
            <source src="https://res.cloudinary.com/dzjqki9gi/video/upload/v1766454033/2882090-uhd_3840_2160_24fps_azn3yy.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="overflow-hidden mb-2">
             <h2 className="text-[10px] sm:text-[12px] tracking-[0.8em] uppercase text-accent-pink font-black animate-reveal-up opacity-0 fill-mode-forwards" style={{animationDelay: '0.2s'}}>
               EST. 2016 OXFORD
             </h2>
          </div>
          
          <h1 className="text-[14vw] sm:text-[12vw] leading-[0.85] serif uppercase text-white font-medium tracking-tighter mb-8 drop-shadow-2xl animate-reveal-up opacity-0 fill-mode-forwards" style={{animationDelay: '0.4s'}}>
            SPICED<br/><span className="italic serif">ROOTS</span>
          </h1>
          
          <div className="flex flex-col items-center animate-reveal-up opacity-0 fill-mode-forwards" style={{animationDelay: '0.6s'}}>
            <p className="text-white/60 text-sm sm:text-lg font-light tracking-wide mb-12 max-w-xl">
              Authentic Caribbean flavors meeting modern culinary artistry. <br className="hidden sm:block" /> Experience the soul of the islands on Cowley Road.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <button 
                onClick={() => onNavigate('reservations')}
                className="group relative px-12 py-5 bg-accent-pink text-dark-green rounded-full text-[10px] tracking-[0.3em] font-black hover:bg-white hover:scale-105 transition-all duration-500 uppercase shadow-2xl"
              >
                BOOK A TABLE
              </button>
              <button 
                onClick={() => onNavigate('menu')}
                className="group flex items-center space-x-4 px-10 py-5 border border-white/20 hover:border-white/60 rounded-full text-[10px] tracking-[0.3em] font-black text-white transition-all duration-500 uppercase backdrop-blur-md"
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
      <section ref={aboutRef} className="relative py-40 px-6 sm:px-12 bg-[#0d1e15] overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Content side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="w-12 h-[1px] bg-accent-pink"></span>
                <span className="text-accent-pink text-[10px] tracking-[0.4em] font-black uppercase">THE HERITAGE</span>
              </div>
              <h2 className="text-7xl sm:text-8xl serif uppercase font-medium leading-[0.9] tracking-tighter text-white">
                VIBRANT<br/>SOUL, <span className="italic text-accent-pink">ROOTED</span><br/>IN TRADITION
              </h2>
            </div>
            
            <div className="space-y-8">
              <p className="text-xl text-white/70 leading-relaxed font-light italic serif">
                "We don't just cook food; we share the stories of our grandmothers, the rhythm of our islands, and the warmth of Caribbean hospitality."
              </p>
              <p className="text-base text-white/50 leading-loose font-light max-w-md">
                Founded with a mission to elevate Caribbean cuisine in Oxford, Spiced Roots blends traditional jerk-pit methods with contemporary techniques. Every spice is toasted by hand, every curry slow-cooked for hours, and every cocktail crafted with the finest aged rums.
              </p>
            </div>

            <button 
              onClick={() => onNavigate('about')}
              className="group relative flex items-center space-x-6 py-4 overflow-hidden"
            >
              <span className="text-[10px] tracking-[0.4em] font-black uppercase text-white group-hover:text-accent-pink transition-colors">OUR STORY</span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent-pink group-hover:bg-accent-pink group-hover:text-dark-green transition-all duration-500">
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
          <h2 className="text-7xl sm:text-9xl serif uppercase font-medium leading-[0.85] tracking-tighter mb-8">
            CURATED<br/><span className="italic">FLAVOURS</span>
          </h2>
          <p className="text-lg leading-relaxed mb-12 max-w-md font-medium text-dark-green/70">
            From the deep smokiness of our 14-hour jerk pit to the delicate balance of our tamarind glazes, every dish is an invitation to celebrate.
          </p>
          <button 
            onClick={() => onNavigate('menu')}
            className="px-16 py-5 bg-dark-green text-accent-pink rounded-full text-[10px] tracking-[0.3em] font-black uppercase hover:bg-white hover:text-dark-green hover:scale-105 transition-all duration-500 shadow-xl"
          >
            VIEW FULL MENU
          </button>
        </div>
      </section>

      {/* Optimized Dining Options (Dine With Us) Sector */}
      <section ref={diningRef} className="bg-deep-green py-32 lg:py-48 px-6 sm:px-12 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
            
            {/* Left Column: Narrative & Hero Card */}
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-6">
                 <div className="flex items-center space-x-4">
                    <span className="text-accent-pink text-[10px] tracking-[0.5em] font-black uppercase">EXPERIENCES</span>
                    <div className="h-[1px] flex-grow bg-white/10"></div>
                 </div>
                 <h2 className="text-7xl sm:text-[9vw] lg:text-[7vw] serif uppercase font-medium leading-[0.85] tracking-tighter text-white">
                   DINE<br/><span className="italic text-accent-pink">WITH</span> US
                 </h2>
                 <p className="text-white/50 text-xl font-light leading-relaxed max-w-sm italic serif">
                   A sensory journey from the heart of Oxford to the soul of the islands.
                 </p>
              </div>

              {/* Large CTA Card */}
              <div 
                onClick={() => onNavigate('reservations')}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 hover:scale-[1.02]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200" 
                  alt="Restaurant Dining Area"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-50 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                   <h3 className="text-4xl serif italic text-white mb-4">Book Your Table</h3>
                   <div className="flex items-center justify-between">
                     <p className="text-white/60 text-xs tracking-widest uppercase">Intimate Dining & Events</p>
                     <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-accent-pink group-hover:border-accent-pink group-hover:text-dark-green transition-all duration-500">
                       <Calendar className="w-5 h-5" />
                     </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interaction Grid & Video */}
            <div className="lg:col-span-7 space-y-12">
               
               {/* Video Showcase Card */}
               <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl group/vid border border-white/5">
                 <video 
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover brightness-[0.6] group-hover/vid:brightness-[0.85] transition-all duration-[1.5s]"
                 >
                    <source src="https://res.cloudinary.com/dzjqki9gi/video/upload/v1766502983/4170498-uhd_3840_2160_25fps_zhnymf.mp4" type="video/mp4" />
                 </video>
                 
                 <div className="absolute top-8 left-8 flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent-pink animate-pulse"></div>
                    <span className="text-[10px] tracking-[0.3em] font-black uppercase text-white/80">LIVE FROM COWLEY ROAD</span>
                 </div>

                 {/* Video Overlay Text */}
                 <div className="absolute bottom-10 left-10 right-10 pointer-events-none transform translate-y-4 opacity-0 group-hover/vid:translate-y-0 group-hover/vid:opacity-100 transition-all duration-700">
                    <p className="text-2xl serif italic text-white max-w-xs">
                      "The atmosphere here is as bold as the flavors."
                    </p>
                 </div>
               </div>

               {/* Second CTA Card: Delivery */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div 
                    onClick={() => onNavigate('order')}
                    className="group bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-accent-pink/50 p-10 rounded-[2rem] transition-all duration-500 cursor-pointer flex flex-col justify-between h-[280px]"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-accent-pink/10 flex items-center justify-center text-accent-pink group-hover:scale-110 group-hover:bg-accent-pink group-hover:text-dark-green transition-all duration-500">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-3xl serif italic text-white mb-2">Order Delivery</h4>
                      <p className="text-white/40 text-xs tracking-widest uppercase flex items-center group-hover:text-accent-pink transition-colors">
                        Bring the heat home <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </p>
                    </div>
                  </div>

                  <div 
                    onClick={() => onNavigate('menu')}
                    className="group bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 p-10 rounded-[2rem] transition-all duration-500 cursor-pointer flex flex-col justify-between h-[280px]"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 group-hover:scale-110 group-hover:bg-white group-hover:text-dark-green transition-all duration-500">
                      <Utensils className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-3xl serif italic text-white mb-2">Private Events</h4>
                      <p className="text-white/40 text-xs tracking-widest uppercase flex items-center group-hover:text-white transition-colors">
                        Enquire for parties <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </p>
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
              <h2 className="text-[14vw] sm:text-[12vw] md:text-[10.5vw] serif italic text-black leading-[0.85] tracking-tighter">
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
          <h2 className="text-6xl sm:text-8xl serif uppercase font-medium leading-[0.9] tracking-tighter mb-16">
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
