
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { Leaf } from 'lucide-react';

type MenuTab = 'LUNCH' | 'DINNER' | 'DRINKS';

const MenuPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuTab>('DINNER');

  const categoriesByTab: Record<MenuTab, string[]> = {
    'LUNCH': ['Lunch', 'Deals'],
    'DINNER': ['Starters', 'Mains', 'Sides', 'Sweets'],
    'DRINKS': ['Cocktails', 'Wine', 'Soft Drinks']
  };

  const currentCategories = categoriesByTab[activeTab];

  const renderMenuItem = (item: MenuItem) => (
    <div key={item.id} className="group py-6 border-b border-[#27618E]/10 last:border-0">
      <div className="flex justify-between items-start mb-2 uppercase">
        <h4 className="text-lg sm:text-xl font-bold text-[#27618E] tracking-wider leading-tight">
          {item.name}
          {item.isVegan && <span className="ml-2 text-[10px] text-[#D1BB94] align-top">VE</span>}
          {item.isGlutenFree && <span className="ml-2 text-[10px] text-[#D1BB94] align-top">GF</span>}
        </h4>
        <span className="text-lg font-medium text-[#27618E]/80 whitespace-nowrap ml-4">
          {typeof item.price === 'number' ? `£${item.price.toFixed(2)}` : item.price}
        </span>
      </div>
      {item.description && (
        <p className="text-[#27618E]/60 text-sm font-light italic leading-relaxed max-w-2xl">
          {item.description}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcfaf7] pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-8xl sm:text-[10rem] font-just-another-hand text-[#27618E] leading-none mb-6">
            Our Menu
          </h1>
          <p className="text-[#27618E]/60 text-sm sm:text-base font-light max-w-xl mx-auto italic tracking-wide">
            "Authentic Caribbean soul food, prepared with love and seasoned to perfection."
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-8 sm:space-x-16 mb-24 border-b border-[#27618E]/10 pb-6 relative z-10">
          {(['LUNCH', 'DINNER', 'DRINKS'] as MenuTab[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs sm:text-sm tracking-[0.4em] font-black transition-all duration-300 relative px-2 py-3 ${activeTab === tab ? 'text-[#27618E]' : 'text-[#27618E]/30 hover:text-[#27618E]/60'
                }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#D1BB94] animate-reveal-width"></div>
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="space-y-32">
          {currentCategories.map((category) => {
            const items = MENU_ITEMS.filter(item => item.category === category);
            if (items.length === 0) return null;

            return (
              <section key={category} className="animate-fade-in-up">
                <div className="flex items-center space-x-6 mb-12">
                  <h2 className="text-5xl sm:text-7xl font-just-another-hand text-[#D1BB94] uppercase tracking-wide">
                    {category === 'Rum Bar' ? 'Rum Bar Specials' : category}
                  </h2>
                  <div className="h-[1px] flex-grow bg-[#D1BB94]/20"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-2">
                  {items.map(renderMenuItem)}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-40 pt-16 border-t border-[#27618E]/10 text-center">
          <div className="inline-block px-12 py-8 bg-[#27618E]/5 rounded-3xl backdrop-blur-sm">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[#27618E]/50 uppercase italic leading-loose">
              Please inform your server of any allergies before ordering.<br />
              <span className="text-[#D1BB94] font-bold">VE</span> = Vegan | <span className="text-[#D1BB94] font-bold">GF</span> = Gluten Free<br />
              A discretionary 12.5% service charge will be added to your bill.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes reveal-width {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-fade-in { animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-reveal-width { animation: reveal-width 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default MenuPage;
