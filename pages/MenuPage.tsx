
import React, { useState, useRef } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { Leaf } from 'lucide-react';

const MenuPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'FOOD' | 'DRINKS'>('FOOD');

  // Filter items based on tab
  const foodCategories = ['Starters', 'Mains', 'Sides', 'Sweets'];
  const drinkCategories = ['Rum Bar'];

  const displayedCategories = activeTab === 'FOOD' ? foodCategories : drinkCategories;

  const renderMenuItem = (item: MenuItem) => (
    <div key={item.id} className="mb-10 group">
      <div className="flex justify-between items-baseline mb-2">
        <h4 className="text-xl serif font-medium group-hover:text-accent-pink transition-colors duration-300">{item.name}</h4>
        <span className="text-sm font-light text-white/80">£{item.price.toFixed(2)}</span>
      </div>
      {item.description && (
        <p className="text-white/50 text-sm font-light italic mb-3 leading-relaxed">
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
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-dark-green">
      
      {/* Left Panel: Sticky Image - UPDATED IMAGE AND REMOVED OVERLAY TEXT */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen md:sticky md:top-0 overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766502108/pexels-valeriya-1860208_lkg3st.jpg" 
          alt="Menu display"
          className="w-full h-full object-cover brightness-75 transition-all duration-1000 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>

      {/* Right Panel: Scrollable Menu */}
      <div className="w-full md:w-1/2 flex flex-col bg-[#1a3320]">
        
        {/* Navigation Tabs */}
        <div className="sticky top-20 z-20 bg-[#1a3320]/95 backdrop-blur-md px-8 py-10 flex justify-end space-x-12 border-b border-white/5">
          <button 
            onClick={() => setActiveTab('FOOD')}
            className={`text-xs tracking-[0.3em] font-bold transition-all duration-300 relative pb-2 ${
              activeTab === 'FOOD' ? 'text-white' : 'text-white/30 hover:text-white'
            }`}
          >
            FOOD
            {activeTab === 'FOOD' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-pink"></div>}
          </button>
          <button 
            onClick={() => setActiveTab('DRINKS')}
            className={`text-xs tracking-[0.3em] font-bold transition-all duration-300 relative pb-2 ${
              activeTab === 'DRINKS' ? 'text-white' : 'text-white/30 hover:text-white'
            }`}
          >
            DRINKS
            {activeTab === 'DRINKS' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-pink"></div>}
          </button>
        </div>

        {/* Menu Content */}
        <div className="p-8 md:p-16 lg:p-24 space-y-24 flex-grow">
          <div className="animate-fade-in">
            <h1 className="text-8xl sm:text-9xl serif uppercase font-medium tracking-tighter mb-8 leading-none">
              {activeTab}
            </h1>
            <p className="text-white/60 text-sm font-light max-w-md leading-relaxed italic">
              Served daily using local ingredients. All menu items are subject to change according to seasonality and availability.
            </p>
          </div>

          {displayedCategories.map((category) => (
            <section key={category} className="animate-fade-in-up">
              <h2 className="text-[10px] tracking-[0.4em] font-bold uppercase text-accent-pink/80 mb-12 border-b border-white/10 pb-4">
                {category === 'Rum Bar' ? 'RUM BAR SPECIALS' : category.toUpperCase()}
              </h2>
              <div className="space-y-4">
                {MENU_ITEMS.filter(item => item.category === category).map(renderMenuItem)}
              </div>
            </section>
          ))}

          {/* Special Note */}
          <div className="pt-24 border-t border-white/5 text-center md:text-left">
            <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase italic leading-loose">
              Please inform your server of any allergies before ordering.<br/>
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
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default MenuPage;
