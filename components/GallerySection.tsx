
import React from 'react';
import { ArrowRight } from 'lucide-react';

// Curated selection from DSC photos — people socialising, food, cocktails, atmosphere
import img1 from '../assets/DSC08182.jpg?format=webp&w=640';  // people at table, socialising
import img2 from '../assets/DSC08309.jpg?format=webp&w=640';  // food close-up, plated dish
import img3 from '../assets/DSC08096.jpg?format=webp&w=640';  // cocktail on bar
import img4 from '../assets/DSC08259.jpg?format=webp&w=640';  // portrait, dreadlocks guy
import img5 from '../assets/DSC08044.jpg?format=webp&w=640';  // bar with rum bottles
import img6 from '../assets/DSC08530.jpg?format=webp&w=640';  // kitchen prep, hands slicing
import img7 from '../assets/DSC08418.jpg?format=webp&w=640';  // celebration, birthday cake
import img8 from '../assets/DSC08568.jpg?format=webp&w=640';  // chef plating
import img9 from '../assets/DSC08025.jpg?format=webp&w=640';  // restaurant interior, palm mural
import img10 from '../assets/DSC08720.jpg?format=webp&w=640';  // chalkboard sign
import img11 from '../assets/DSC08215.jpg?format=webp&w=640';  // another scene
import img12 from '../assets/DSC08232.jpg?format=webp&w=640';  // another scene
import img13 from '../assets/DSC08263.jpg?format=webp&w=640';  // another scene
import img14 from '../assets/DSC08296.jpg?format=webp&w=640';  // another scene
import img15 from '../assets/DSC08371.jpg?format=webp&w=640';  // another scene
import img16 from '../assets/DSC08472.jpg?format=webp&w=640';  // another scene
import img17 from '../assets/DSC08591.jpg?format=webp&w=640';  // another scene
import img18 from '../assets/DSC08667.jpg?format=webp&w=640';  // another scene

const images = [
  { src: img1, alt: 'Guests enjoying dinner at Spiced Roots' },
  { src: img2, alt: 'Authentic Caribbean plated dish' },
  { src: img3, alt: 'Signature rum cocktail' },
  { src: img4, alt: 'Guest at Spiced Roots' },
  { src: img5, alt: 'The Rum Vault bar collection' },
  { src: img6, alt: 'Fresh ingredients being prepared' },
  { src: img7, alt: 'Celebration at Spiced Roots' },
  { src: img8, alt: 'Chef at work' },
  { src: img9, alt: 'Spiced Roots restaurant interior' },
  { src: img10, alt: 'Spiced Roots Fine Caribbean Cuisine signage' },
  { src: img11, alt: 'Dining experience' },
  { src: img12, alt: 'Caribbean atmosphere' },
  { src: img13, alt: 'Social dining' },
  { src: img14, alt: 'Island flavours' },
  { src: img15, alt: 'Spiced Roots events' },
  { src: img16, alt: 'Restaurant vibes' },
  { src: img17, alt: 'Food preparation' },
  { src: img18, alt: 'Caribbean culture' },
];

// Duplicate for seamless infinite scroll
const duplicatedImages = [...images, ...images];

const GallerySection: React.FC = () => {
  return (
    <section className="bg-[#F9F8F6] pt-12">
      {/* Auto-scrolling Image Reel */}
      <div className="relative group overflow-hidden">
        <div className="flex animate-gallery-scroll gap-3">
          {duplicatedImages.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] md:w-[340px] aspect-[4/3] overflow-hidden rounded-xl shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9F8F6] to-transparent pointer-events-none z-10" />
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F9F8F6] to-transparent pointer-events-none z-10" />
      </div>

      {/* Scrolling Ticker - ALL DAY MENU */}
      <div className="bg-[#27618E] py-4 overflow-hidden whitespace-nowrap mt-6">
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
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-gallery-scroll {
          animation: gallery-scroll 60s linear infinite;
        }
        .animate-gallery-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
