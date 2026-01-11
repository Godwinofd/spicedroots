
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
    },
    {
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
      alt: "Jerk Lamb Chops"
    },
    {
      url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
      alt: "Rum Cocktail"
    },
    {
      url: "https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=800&auto=format&fit=crop",
      alt: "Jerk Chicken Plate"
    },
    {
      url: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=800&auto=format&fit=crop",
      alt: "Caribbean Ribs"
    },
    {
      url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
      alt: "Dessert Presentation"
    },
    {
      url: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
      alt: "Catering Setup"
    },
    {
      url: "https://images.unsplash.com/photo-1470333738027-52dfdc48c8df?q=80&w=800&auto=format&fit=crop",
      alt: "Bar Atmosphere"
    },
    {
      url: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=800&auto=format&fit=crop",
      alt: "Tropical Drinks"
    }
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <section className="bg-dark-green pt-20">
      {/* Auto-scrolling Image Reel */}
      <div className="relative group overflow-hidden">
        <div className="flex animate-gallery-scroll">
          {duplicatedImages.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[400px] aspect-[4/3] overflow-hidden border-r border-dark-green"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* View More Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9F8F6] to-transparent pointer-events-none"></div>

        {/* Navigation Arrow */}
        <button
          className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[#27618E] hover:bg-accent-pink hover:text-white hover:scale-110 transition-all duration-300 z-10"
          aria-label="View more images"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scrolling Ticker */}
      <div className="bg-[#27618E] py-4 overflow-hidden whitespace-nowrap">
        <div className="flex space-x-20 animate-scroll-fast text-white text-[10px] font-black tracking-[0.4em] uppercase items-center">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-white text-[11px] tracking-[0.4em] font-bold uppercase mr-16 inline-flex items-center">
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
          animation: gallery-scroll 40s linear infinite;
        }
        .animate-gallery-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
