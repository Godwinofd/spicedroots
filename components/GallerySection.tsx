
import React from 'react';
import { ArrowRight } from 'lucide-react';

const GallerySection: React.FC = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      alt: "Restaurant Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
      alt: "Fried Chicken"
    },
    {
      url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
      alt: "Golden Cocktails"
    },
    {
      url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
      alt: "Family Dining"
    }
  ];

  return (
    <section className="bg-dark-green pt-20">
      {/* Image Reel - Reduced height by using aspect-[8/5] and md:aspect-[2/1] */}
      <div className="relative group px-4 sm:px-12">
        <div className="flex overflow-hidden rounded-sm">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-1/2 md:w-1/4 aspect-[8/5] md:aspect-[2/1] overflow-hidden border-r border-dark-green last:border-0"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer"
              />
            </div>
          ))}
        </div>
        
        {/* Navigation Arrow */}
        <button className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-accent-pink hover:text-dark-green hover:scale-110 transition-all duration-300">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Gallery Ticker */}
      <div className="bg-[#12261a] py-6 border-t border-b border-white/5 overflow-hidden whitespace-nowrap mt-12">
        <div className="inline-block animate-gallery-scroll">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-accent-pink text-[11px] tracking-[0.4em] font-bold uppercase mr-16 inline-flex items-center">
              ALL DAY MENU <span className="mx-6 text-[8px] opacity-40">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gallery-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-gallery-scroll {
          display: inline-block;
          animation: gallery-scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
