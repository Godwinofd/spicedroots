
import React, { useEffect, useState } from 'react';
import { ChefHat, Calendar, Users, ArrowRight, Star } from 'lucide-react';

const Catering: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#F9F8F6] text-[#27618E] pt-32 pb-40">
            <div className="max-w-7xl mx-auto px-6">
                <div className={`text-center space-y-10 mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <span className="text-[#D1BB94] text-xl tracking-[0.5em] font-just-another-hand uppercase">Exceptional Events</span>
                    <h1 className="text-8xl sm:text-[12rem] font-just-another-hand uppercase leading-none tracking-tighter">
                        CATERING <span className="italic text-[#D1BB94]">& EVENTS</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-4xl font-just-another-hand italic text-[#27618E]/60 leading-relaxed">
                        "Bring the vibrant soul of Spiced Roots to your private celebration, corporate gathering, or wedding."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            title: 'Weddings',
                            icon: ChefHat,
                            description: 'Bespoke menus for your special day, infused with Caribbean elegance and tropical romance.',
                            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop' // Vibrant lamb/food
                        },
                        {
                            title: 'Corporate',
                            icon: Users,
                            description: 'Impress your team with vibrant island flavors and professional, seamless service.',
                            image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop' // Professional buffet setup
                        },
                        {
                            title: 'Parties',
                            icon: Calendar,
                            description: 'Celebrate life with our signature rum cocktails, street food classics, and island vibes.',
                            image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2070&auto=format&fit=crop' // Rum cocktail
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white rounded-[3rem] overflow-hidden border border-[#27618E]/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group">
                            {/* Smaller, focused image at the top */}
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-10 flex-grow flex flex-col">
                                <div className="flex items-center mb-6">
                                    <item.icon className="w-8 h-8 text-[#D1BB94] mr-4 uppercase" />
                                    <div className="h-[1px] flex-grow bg-[#27618E]/10"></div>
                                </div>

                                <h3 className="text-5xl font-just-another-hand text-[#27618E] mb-4">{item.title}</h3>
                                <p className="text-2xl font-just-another-hand text-[#27618E]/60 mb-8 leading-tight italic">
                                    {item.description}
                                </p>

                                <div className="mt-auto">
                                    <button className="flex items-center space-x-3 text-3xl font-just-another-hand tracking-widest uppercase text-[#27618E] hover:text-[#D1BB94] transition-colors">
                                        <span>Enquire Now</span>
                                        <ArrowRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-40 relative h-[600px] rounded-[40px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                        alt="Catering Setup"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#27618E]/90 to-transparent flex items-end p-20">
                        <div className="max-w-2xl text-white">
                            <h2 className="text-7xl font-just-another-hand mb-6 italic">A Caribbean  Experience</h2>
                            <p className="text-white/60 mb-10 leading-relaxed font-just-another-hand italic text-3xl">Detailed attention to every spice, every presentation, and every guest.</p>
                            <button className="px-12 py-5 bg-[#27618E] text-white rounded-full text-4xl font-just-another-hand tracking-widest uppercase hover:bg-white hover:text-[#27618E] transition-all shadow-xl">
                                Bookings & Enquiries
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catering;
