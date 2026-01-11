
import React, { useEffect, useState } from 'react';
import { RUM_CATALOG } from '../constants';
import { GlassWater, Star, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

const RumBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="bg-[#F9F8F6] text-[#27618E] overflow-x-hidden">

            {/* 1. Cinematic Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#27618E]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
                        alt="Rum Bar Atmosphere"
                        className="w-full h-full object-cover brightness-[0.3] scale-105 animate-subtle-zoom"
                    />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <span className="text-[#D1BB94] text-xl tracking-[0.5em] font-just-another-hand uppercase mb-6 block">Artisanal Distillery</span>
                        <h1 className="text-[15vw] sm:text-[9.5rem] font-just-another-hand leading-[0.8] text-white hover:text-[#D1BB94] transition-colors duration-500 cursor-default">
                            THE RUM <span className="italic">VAULT</span>
                        </h1>
                        <p className="mt-8 text-white/60 text-4xl font-just-another-hand italic max-w-xl mx-auto leading-relaxed">
                            "A curated sanctuary for the soul of the islands, featuring over 50 rare and aged rums from the heart of the Caribbean."
                        </p>
                    </div>
                </div>

                {/* Floating elements */}
                <div className="absolute bottom-12 left-12 animate-bounce-slow hidden lg:block">
                    <div className="flex items-center space-x-4 text-white/30 text-2xl tracking-[0.4em] uppercase vertical-text font-just-another-hand">
                        <span>Rare Collections</span>
                        <div className="w-[1px] h-20 bg-gradient-to-b from-white/30 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* 2. Interactive Catalog Grid */}
            <section className="py-32 px-6 sm:px-12 max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8 border-b border-[#27618E]/10 pb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-8xl sm:text-9xl font-just-another-hand uppercase leading-none tracking-tighter mb-8">
                            OUR <span className="italic text-[#D1BB94]">SELECTION</span>
                        </h2>
                        <p className="text-[#27618E]/60 text-3xl leading-relaxed italic font-just-another-hand">
                            Explore our hand-picked inventory of exceptional distillations. Each bottle in our vault tells a story of heritage, terroir, and time-honored craftsmanship.
                        </p>
                    </div>
                    <div className="flex items-center space-x-8 text-[#27618E]/40 text-2xl font-just-another-hand tracking-widest uppercase mb-4">
                        <div className="flex items-center"><Star className="w-4 h-4 mr-2 text-[#D1BB94]" /> Aged in Oak</div>
                        <div className="flex items-center"><Star className="w-4 h-4 mr-2 text-[#D1BB94]" /> Caribbean Soul</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                    {RUM_CATALOG.map((item, idx) => (
                        <div
                            key={item.id}
                            className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                            style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-8 bg-[#27618E]/5">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-1000"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-[#27618E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-12 text-center">
                                    <div className="space-y-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                        <span className="text-[#D1BB94] text-xl tracking-[0.4em] font-just-another-hand uppercase">Tasting Notes</span>
                                        <p className="text-white text-3xl font-just-another-hand italic leading-relaxed">"{item.notes}"</p>
                                        <button className="flex items-center space-x-3 text-white text-3xl tracking-[0.3em] font-just-another-hand uppercase mx-auto hover:text-[#D1BB94] transition-colors border-b border-white/20 pb-2">
                                            <span>Details</span>
                                            <ArrowRight className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-[#D1BB94]">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-xl font-just-another-hand tracking-[0.3em] uppercase">{item.origin}</span>
                                </div>
                                <h3 className="text-5xl font-just-another-hand group-hover:text-[#D1BB94] transition-colors duration-300">
                                    {item.name}
                                </h3>
                                <p className="text-[#27618E]/50 text-2xl font-just-another-hand leading-relaxed italic">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. The Masterclass Section */}
            <section className="py-40 bg-[#27618E] text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] transform skew-x-12"></div>

                <div className="max-w-[1400px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12 relative z-10 order-2 lg:order-1">
                        <div className="flex items-center space-x-4">
                            <div className="h-[1px] w-12 bg-[#D1BB94]"></div>
                            <span className="text-[#D1BB94] text-xl tracking-[0.6em] uppercase font-just-another-hand">Experience</span>
                        </div>
                        <h2 className="text-8xl sm:text-[10rem] font-just-another-hand leading-none">
                            MIXOLOGY <span className="italic text-[#D1BB94]">RITUALS</span>
                        </h2>
                        <p className="text-white/60 text-4xl font-just-another-hand leading-relaxed italic">
                            Our cocktails are more than drinks—they are liquid history. Crafted with house-made bitters, tropical ferments, and the world's most expressive rums.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-4 p-8 bg-[#fcfaf7] border border-[#27618E]/5 rounded-2xl hover:shadow-xl transition-all group/card">
                                <GlassWater className="w-8 h-8 text-[#D1BB94] mb-4 group-hover/card:scale-110 transition-transform" />
                                <h4 className="text-4xl font-just-another-hand text-[#27618E]">House Ferments</h4>
                                <p className="text-[#27618E]/60 text-xl leading-relaxed tracking-wider uppercase font-just-another-hand italic">Aged in small clay vessels for depth.</p>
                            </div>
                            <div className="space-y-4 p-8 bg-[#fcfaf7] border border-[#27618E]/5 rounded-2xl hover:shadow-xl transition-all group/card">
                                <ShieldCheck className="w-8 h-8 text-[#D1BB94] mb-4 group-hover/card:scale-110 transition-transform" />
                                <h4 className="text-4xl font-just-another-hand text-[#27618E]">Rare Barrels</h4>
                                <p className="text-[#27618E]/60 text-xl leading-relaxed tracking-wider uppercase font-just-another-hand italic">Exclusive access to single-estate rums.</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button className="px-12 py-6 bg-white text-[#27618E] rounded-full text-4xl font-just-another-hand tracking-[0.4em] uppercase hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-xl">
                                Join a Tasting
                            </button>
                        </div>
                    </div>

                    <div className="relative z-10 order-1 lg:order-2">
                        <div className="aspect-square relative flex items-center justify-center">
                            <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-8 border border-[#D1BB94]/20 rounded-full animate-spin-slow-reverse"></div>
                            <div className="w-[85%] h-[85%] rounded-full overflow-hidden shadow-2xl border-8 border-white/10 rotate-[5deg] hover:rotate-0 transition-transform duration-1000">
                                <img
                                    src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2070&auto=format&fit=crop"
                                    alt="Mixology Ritual"
                                    className="w-full h-full object-cover"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite alternate;
        }
        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
        </div>
    );
};

export default RumBar;
