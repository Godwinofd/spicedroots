
import React, { useState, useRef } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { Leaf } from 'lucide-react';

const MenuPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'FOOD' | 'DRINKS'>('FOOD');
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);

  const defaultFoodImage = "https://res.cloudinary.com/dzjqki9gi/image/upload/v1766502108/pexels-valeriya-1860208_lkg3st.jpg";
  const defaultDrinkImage = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop";
  const defaultImage = activeTab === 'FOOD' ? defaultFoodImage : defaultDrinkImage;

  // Filter items based on tab
  const foodCategories = ['Starters', 'Mains', 'Sides', 'Sweets'];
  const drinkCategories = ['Rum Bar'];

  const displayedCategories = activeTab === 'FOOD' ? foodCategories : drinkCategories;

  const renderMenuItem = (item: MenuItem) => (
    <div
      key={item.id}
      className="mb-10 group relative cursor-pointer"
      onMouseEnter={() => setHoveredItem(item)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="flex justify-between items-baseline mb-2 relative z-10 transition-transform duration-500 group-hover:translate-x-4">
        <h4 className="text-xl serif font-medium group-hover:text-[#D1BB94] transition-colors duration-300 text-[#27618E]">
          {item.name}
        </h4>
        <span className="text-sm font-light text-[#27618E]/70 group-hover:text-[#27618E]">£{item.price.toFixed(2)}</span>
      </div>

      <div className="relative z-10 transition-transform duration-500 group-hover:translate-x-4">
        {item.description && (
          <p className="text-[#27618E]/50 text-sm font-light italic mb-3 leading-relaxed">
            “{item.description}”
          </p>
        )}
        <div className="flex space-x-3 text-[9px] uppercase tracking-[0.2em] text-accent-pink/60">
          {item.isVegetarian && (
            <span className="flex items-center"><Leaf className="w-3 h-3 mr-1" /> Vegetarian</span>
          )}
          {item.isGlutenFree && (
            <span>Gluten Free</span>
          )}
        </div>
      </div>

      {/* Creative "Bloom" Image Effect - Floating Circular Preview */}
      {/* Mobile: Static Image displayed Above Text */}
      {item.image && (
        <div className="md:hidden w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-lg relative">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 border border-white/10 rounded-2xl"></div>
        </div>
      )}

      {/* Desktop: Creative "Bloom" Image Effect - Floating Circular Preview */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-10 w-32 h-32 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 translate-x-10 group-hover:translate-x-0 transition-all duration-700 pointer-events-none z-0">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-700">
          {item.image && (
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          )}
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-[-10px] border border-[#D1BB94]/20 rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#fcfaf7]">

      {/* Left Panel: Dynamic Interactive Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen md:sticky md:top-0 overflow-hidden bg-[#27618E]">
        <div className="relative w-full h-full">
          {/* Base Background (for transitions) */}
          <img
            src={defaultImage}
            alt="Menu context base"
            className={`absolute inset-0 w-full h-full object-cover brightness-50 transition-opacity duration-1000 ${hoveredItem ? 'opacity-40' : 'opacity-100'}`}
          />

          {/* Hovered Item Image - Transitions in */}
          {MENU_ITEMS.map((item) => (
            item.image && (
              <img
                key={`bg-${item.id}`}
                src={item.image}
                alt={item.name}
                className={`absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-700 scale-110 ${hoveredItem?.id === item.id ? 'opacity-100 scale-100' : 'opacity-0'
                  }`}
              />
            )
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

          {/* Dynamic Content Overlay in Left Panel */}
          <div className="absolute bottom-20 left-12 right-12 text-white z-10 transition-all duration-700">
            <div className={`transition-all duration-700 ${hoveredItem ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="text-[10px] tracking-[0.5em] uppercase text-accent-pink font-bold mb-4 block">Recommended Dish</span>
              <h3 className="text-6xl serif italic mb-4">{hoveredItem?.name}</h3>
              <p className="text-white/60 text-sm max-w-sm font-light italic leading-relaxed">
                {hoveredItem?.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Scrollable Menu */}
      <div className="w-full md:w-1/2 flex flex-col bg-[#fcfaf7]">

        {/* Navigation Tabs */}
        <div className="sticky top-20 z-20 bg-[#fcfaf7]/95 backdrop-blur-md px-8 py-10 flex justify-end space-x-12 border-b border-[#27618E]/10">
          <button
            onClick={() => { setActiveTab('FOOD'); setHoveredItem(null); }}
            className={`text-xs tracking-[0.3em] font-bold transition-all duration-300 relative pb-2 ${activeTab === 'FOOD' ? 'text-[#27618E]' : 'text-[#27618E]/40 hover:text-[#27618E]'
              }`}
          >
            FOOD
            {activeTab === 'FOOD' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-pink"></div>}
          </button>
          <button
            onClick={() => { setActiveTab('DRINKS'); setHoveredItem(null); }}
            className={`text-xs tracking-[0.3em] font-bold transition-all duration-300 relative pb-2 ${activeTab === 'DRINKS' ? 'text-[#27618E]' : 'text-[#27618E]/40 hover:text-[#27618E]'
              }`}
          >
            DRINKS
            {activeTab === 'DRINKS' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-pink"></div>}
          </button>
        </div>

        {/* Menu Content */}
        <div className="p-8 md:p-16 lg:p-24 space-y-24 flex-grow relative">
          <div className="animate-fade-in">
            <h1 className="text-8xl sm:text-9xl serif uppercase font-medium tracking-tighter mb-8 leading-none text-[#27618E]">
              {activeTab}
            </h1>
            <p className="text-[#27618E]/60 text-sm font-light max-w-md leading-relaxed italic">
              Served daily using local ingredients. All menu items are subject to change according to seasonality and availability.
            </p>
          </div>

          {displayedCategories.map((category) => (
            <section key={category} className="animate-fade-in-up">
              <h2 className="text-[10px] tracking-[0.4em] font-bold uppercase text-[#27618E]/60 mb-12 border-b border-[#27618E]/10 pb-4">
                {category === 'Rum Bar' ? 'RUM BAR SPECIALS' : category.toUpperCase()}
              </h2>
              <div className="space-y-4">
                {MENU_ITEMS.filter(item => item.category === category).map(renderMenuItem)}
              </div>
            </section>
          ))}

          {/* Special Note */}
          <div className="pt-24 border-t border-white/5 text-center md:text-left">
            <p className="text-[10px] tracking-[0.2em] text-[#27618E]/40 uppercase italic leading-loose">
              Please inform your server of any allergies before ordering.<br />
              A discretionary 12.5% service charge will be added to your bill.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>
    </div >
  );
};

export default MenuPage;
