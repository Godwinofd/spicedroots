
import React from 'react';
import { ArrowRight } from 'lucide-react';

// Curated selection from DSC photos — people socialising, food, cocktails, atmosphere
import img1 from '../assets/DSC08182.jpg';  // people at table, socialising
import img2 from '../assets/DSC08309.jpg';  // food close-up, plated dish
import img3 from '../assets/DSC08096.jpg';  // cocktail on bar
import img4 from '../assets/DSC08259.jpg';  // portrait, dreadlocks guy
import img5 from '../assets/DSC08044.jpg';  // bar with rum bottles
import img6 from '../assets/DSC08530.jpg';  // kitchen prep, hands slicing
import img7 from '../assets/DSC08418.jpg';  // celebration, birthday cake
import img8 from '../assets/DSC08568.jpg';  // chef plating
import img9 from '../assets/DSC08025.jpg';  // restaurant interior, palm mural
import img10 from '../assets/DSC08720.jpg';  // chalkboard sign
import img11 from '../assets/DSC08215.jpg';  // another scene
import img12 from '../assets/DSC08232.jpg';  // another scene
import img13 from '../assets/DSC08263.jpg';  // another scene
import img14 from '../assets/DSC08296.jpg';  // another scene
import img15 from '../assets/DSC08371.jpg';  // another scene
import img16 from '../assets/DSC08472.jpg';  // another scene
import img17 from '../assets/DSC08591.jpg';  // another scene
import img18 from '../assets/DSC08667.jpg';  // another scene

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
    <section className="bg-[#F9F8F6] pt-12 pb-6">
      {/* Auto-scrolling Image Reel */}
      <div className="relative group overflow-visible py-12">
        <div className="flex animate-gallery-scroll gap-4">
          {duplicatedImages.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] md:w-[340px] aspect-[4/3] rounded-xl shadow-md cursor-pointer hover:scale-110 hover:shadow-2xl hover:z-50 transition-all duration-500 ease-out"
              style={{ position: 'relative' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Overlays */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9F8F6] to-transparent pointer-events-none z-10" />
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F9F8F6] to-transparent pointer-events-none z-10" />
      </div>

      <style>{`
        @keyframes gallery-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-gallery-scroll {
          animation: gallery-scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
