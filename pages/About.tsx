
import React from 'react';
import { ArrowRight, Utensils, Heart, Users } from 'lucide-react';
import backgroundVideo from '../assets/PHOTOBOARD.mp4';
import heritageArt from '../assets/DSC08044.jpg?format=webp&w=1200';
import heritageStaff from '../assets/DSC08392.jpg?format=webp&w=1200';
import heritageFamily from '../assets/DSC08040.jpg?format=webp&w=1200';
import heritageHero from '../assets/DSC08713.jpg?format=webp&w=1600';

const About: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Much slower for extreme luxury feel
    }
  }, []);

  return (
    <div className="bg-[#F9F8F6] text-[#27618E] overflow-x-hidden pt-20">

      {/* ─── HERO SECTION ─────────────────────────────────── */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heritageHero}
            alt="Spiced Roots Exterior"
            className="w-full h-full object-cover object-center"
          />
          {/* Tonal overlay for text contrast */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,40,60,0.6) 0%, rgba(15,40,60,0.4) 50%, rgba(15,40,60,0.7) 100%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-[1px] w-12 bg-[#D1BB94]"></div>
            <span className="text-[#D1BB94] font-medium tracking-[0.4em] text-xs uppercase">Est. 2019 · Oxford</span>
            <div className="h-[1px] w-12 bg-[#D1BB94]"></div>
          </div>

          <h1 className="leading-[0.85] uppercase">
            <span className="block font-just-another-hand text-[18vw] sm:text-[12rem] animate-title-fade">Vibrant Soul,</span>
            <span className="block font-serif italic font-bold text-[#D1BB94] text-[12vw] sm:text-[8rem] -mt-4 sm:-mt-8 lowercase tracking-tight animate-title-fade" style={{ animationDelay: '0.2s' }}>rooted</span>
            <span className="block font-just-another-hand text-[18vw] sm:text-[12rem] -mt-4 sm:-mt-8 animate-title-fade" style={{ animationDelay: '0.4s' }}>In Tradition</span>
          </h1>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] tracking-widest uppercase font-bold">Scroll Story</span>
          <div className="w-[1px] h-12 bg-[#27618E]"></div>
        </div>
      </section>

      {/* ─── CHAPTER 1: THE ENERGY ────────────────────────── */}
      <section className="py-24 lg:py-40 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 lg:pr-12">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#D1BB94]/10 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] bg-white">
                  <img
                    src={heritageStaff}
                    alt="The Spiced Roots Team"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-[#D1BB94]" />
                <span className="text-[#D1BB94] text-xs tracking-[0.3em] uppercase font-bold">01 · The Energy</span>
              </div>
              <blockquote className="text-3xl sm:text-4xl font-serif italic leading-relaxed text-[#27618E]/90">
                "We don't just cook food; we share the rhythm of our islands and the warmth of Caribbean hospitality."
              </blockquote>
              <p className="text-lg font-light leading-relaxed text-[#27618E]/70 max-w-sm">
                Our bar is the heart of Oxford's vibrant soul, where friendships are forged over the world's finest rums and house-made spirits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER 2: THE ROOTS ─────────────────────────── */}
      <section className="py-24 lg:py-40 bg-[#27618E] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-8">
              <div className="flex items-center space-x-3">
                <Utensils className="w-5 h-5 text-[#D1BB94]" />
                <span className="text-[#D1BB94] text-xs tracking-[0.3em] uppercase font-bold">02 · The Roots</span>
              </div>
              <h2 className="font-just-another-hand text-7xl sm:text-8xl leading-none uppercase">Crafting <br /><span className="text-[#D1BB94] italic">Liquid History</span></h2>
              <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed max-w-md">
                <p>
                  Founded with a mission to elevate Caribbean cuisine in Oxford, Spiced Roots blends traditional jerk-pit methods with contemporary techniques.
                </p>
                <p>
                  Every spice is toasted by hand, every curry slow-cooked for hours, and every cocktail crafted with the finest aged rums from across the archipelago.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] aspect-[16/10]">
                <img
                  src={heritageArt}
                  alt="Traditional Caribbean Heritage"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHAPTER 3: THE FAMILY ───────────────────────── */}
      <section className="py-24 lg:py-48 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col items-center text-center mb-20 lg:mb-32">
            <Heart className="w-8 h-8 text-[#D1BB94] mb-6" />
            <span className="text-[#D1BB94] text-xs tracking-[0.5em] uppercase font-bold mb-4">03 · The Community</span>
            <h2 className="font-just-another-hand text-6xl sm:text-[9rem] text-[#27618E] leading-none uppercase">
              The Spiced Roots <span className="italic text-[#D1BB94]">Family</span>
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-4 sm:p-6 border border-[#D1BB94]/20">
              <div className="aspect-[16/9] rounded-[1.5rem] overflow-hidden">
                <img
                  src={heritageFamily}
                  alt="The Family Board"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-6 lg:-right-12 bg-[#27618E] text-white p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center text-center shadow-xl rotate-12 transition-transform hover:rotate-0 duration-500">
              <p className="font-just-another-hand text-4xl leading-none">Oxford's</p>
              <p className="text-[10px] tracking-widest uppercase font-bold mt-1">Best Loved</p>
            </div>
          </div>

          <div className="mt-32 flex flex-col items-center">
            <p className="text-[#27618E]/40 text-xs tracking-[0.6em] uppercase font-black mb-12">End of Story</p>
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D1BB94] to-transparent"></div>
          </div>
        </div>
      </section>

      <style>{`
                @keyframes title-fade {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-title-fade {
                    opacity: 0;
                    animation: title-fade 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
    </div>
  );
};

export default About;
