
import React from 'react';
import { ShoppingBag, Clock, MapPin } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

const OrderOnline: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Main Content */}
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-5xl serif uppercase mb-2">Order Online</h1>
              <div className="flex items-center space-x-4 text-xs text-white/50 uppercase tracking-widest">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> ASAP (35-45 mins)</span>
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 64 Cowley Rd, Oxford</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {['Mains', 'Starters', 'Sides'].map((category) => (
              <div key={category}>
                <h2 className="text-2xl serif mb-6 border-b border-white/10 pb-4">{category}</h2>
                <div className="space-y-6">
                  {MENU_ITEMS.filter(i => i.category === category).map((item) => (
                    <div key={item.id} className="flex justify-between items-center group p-4 border border-white/5 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                      <div className="max-w-[70%]">
                        <h4 className="text-lg font-medium group-hover:text-accent-pink transition-colors">{item.name}</h4>
                        <p className="text-sm text-white/50 font-light truncate">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-accent-pink mb-2">£{item.price.toFixed(2)}</p>
                        <button className="px-4 py-1.5 bg-accent-pink text-dark-green rounded-full text-[10px] font-bold uppercase hover:scale-105 transition-transform">
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar / Cart Summary */}
        <div className="w-full lg:w-96">
          <div className="sticky top-32 bg-deep-green border border-white/10 rounded-3xl p-8 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl serif italic">Your Order</h3>
              <ShoppingBag className="w-5 h-5 text-accent-pink" />
            </div>
            
            <div className="py-12 border-y border-white/10 text-center">
              <p className="text-white/40 text-sm italic">Hungry? Start adding items to your bag.</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Subtotal</span>
                <span>£0.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-4 border-t border-white/10">
                <span>Total</span>
                <span className="text-accent-pink">£0.00</span>
              </div>
            </div>

            <button disabled className="w-full py-4 bg-white/10 text-white/30 rounded-full text-xs font-bold tracking-[0.2em] uppercase cursor-not-allowed">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
