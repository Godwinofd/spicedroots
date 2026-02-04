
import React from 'react';
import { ArrowRight } from 'lucide-react';
import backgroundVideo from '../assets/PHOTOBOARD.mp4';
import lambChopsImage from '../assets/lamb-chops.jpg';
import CocktailImage from '../assets/RedCocktail.jpg.jpeg';

const About: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down the video
    }
  }, []);

  return (
    <div className="pt-28 min-h-screen overflow-hidden pb-20">
      {/* Heritage Section - Matching Home Page with Video Background */}
      <section className="relative py-24 lg:py-40 bg-center overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        {/* Overlay for readability - adjusted opacity to allow video visibility */}
        <div className="absolute inset-0 bg-[#F9F8F6]/75 z-0"></div>
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
              <h1 className="leading-[0.9] animate-reveal-up" style={{ animationDelay: '0.2s' }}>
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
              </h1>

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
              <div className="group flex items-center space-x-4 pt-4 animate-reveal-up cursor-pointer w-fit" style={{ animationDelay: '0.5s' }}>


              </div>

            </div>

            {/* Right Column: Imagery - Refined Layout with Glassmorphism */}
            <div className="relative h-[500px] sm:h-[700px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">

              {/* Main Image (Food) - With Glass Effect Border */}
              <div className="relative z-10 w-[85%] max-w-md transform -translate-x-4 sm:-translate-x-8 -translate-y-8 animate-reveal-up" style={{ animationDelay: '0.6s' }}>
                <div className="overflow-hidden rounded-2xl shadow-2xl p-2 bg-white/20 backdrop-blur-sm border border-white/30 hover:shadow-gold/20 transition-all duration-700">
                  <img
                    src={lambChopsImage}
                    alt="Jerk Ribs"
                    className="w-full h-auto object-cover aspect-[4/5] rounded-xl hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </div>

              {/* Secondary Image (Interior) - Moved further out to reveal the food image behind */}
              <div className="absolute bottom-4 right-[-5%] w-[55%] max-w-xs z-20 transform translate-y-8 animate-reveal-up" style={{ animationDelay: '0.8s' }}>
                <div className="p-2 bg-white/40 backdrop-blur-md rounded-2xl shadow-2xl rotate-[3deg] hover:rotate-0 transition-all duration-700 border border-white/50">
                  <img
                    src={CocktailImage}
                    alt="Restaurant Interior"
                    className="w-full h-auto object-cover aspect-square rounded-xl"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      <style>{`
        @keyframes reveal-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal-up {
          animation: reveal-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
