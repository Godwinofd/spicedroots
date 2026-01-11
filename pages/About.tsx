
import React from 'react';
import { ArrowRight } from 'lucide-react';
import backgroundImage from '../assets/new.jpg';

const About: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen overflow-hidden pb-20">
      {/* Heritage Section - Matching Home Page */}
      <section className="relative py-24 lg:py-40 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})` }}>
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
                <span className="text-[#27618E] font-bold tracking-[0.2em] text-sm uppercase group-hover:text-[#D1BB94] transition-colors">Our Story</span>
                <div className="w-12 h-12 rounded-full border border-[#27618E]/20 flex items-center justify-center group-hover:border-[#D1BB94] group-hover:bg-[#D1BB94] group-hover:text-white text-[#27618E] transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

            </div>

            {/* Right Column: Imagery - Refined Layout */}
            <div className="relative h-[500px] sm:h-[700px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">

              {/* Main Image (Food) - Cleaner Lines */}
              <div className="relative z-10 w-[85%] max-w-md transform -translate-x-4 sm:-translate-x-8 -translate-y-8">
                <div className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700">
                  <img
                    src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1935&auto=format&fit=crop"
                    alt="Jerk Ribs"
                    className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </div>

              {/* Secondary Image (Interior) - White Border for Separation */}
              <div className="absolute bottom-12 right-0 sm:right-8 w-[55%] max-w-xs z-20 transform translate-y-12">
                <div className="p-0 bg-white rounded-xl shadow-2xl rotate-[3deg] hover:rotate-0 transition-transform duration-700 border-[8px] border-white">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                    alt="Restaurant Interior"
                    className="w-full h-auto object-cover aspect-square rounded-lg"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
