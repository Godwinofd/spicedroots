
import React, { useEffect, useState } from 'react';
import { RUM_CATALOG, MENU_ITEMS } from '../constants';
import { GlassWater, ShieldCheck, ArrowRight, ChevronDown } from 'lucide-react';

import rumBarPhoto from '../assets/DSC08059.jpg';
import pourPhoto from '../assets/DSC08568.jpg';
import bartenderPhoto from '../assets/DSC08063.jpg';

// Subtle origin colour variants — adapted to the dark editorial palette
const ORIGIN_COLORS: Record<string, { bg: string; border: string; accent: string }> = {
    Jamaica: { bg: '#142530', border: '#D1BB94', accent: '#D1BB94' },
    Barbados: { bg: '#101d26', border: '#c8a97a', accent: '#e8cfa0' },
    Guyana: { bg: '#0d1820', border: '#a8d5c8', accent: '#c8ede5' },
    Venezuela: { bg: '#081015', border: '#D1BB94', accent: '#f0d5a8' },
};

const rumCocktails = MENU_ITEMS.filter(item => item.category === 'Rum Bar' || item.category === 'Cocktails').slice(0, 8); // Taking the best 8 for mixology

const RumBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredRum, setHoveredRum] = useState<string | null>(null);
    const [expandedCocktail, setExpandedCocktail] = useState<string | null>(rumCocktails[0]?.id || null);

    useEffect(() => {
        const t = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    const onNavigate = (path: string) => {
        window.location.hash = path;
    };

    return (
        <div className="bg-[#1a2e3b] text-[#F9F8F6] overflow-x-hidden">

            {/* ─── 1. HERO (Image 1) ─────────────────────────────────────────── */}
            <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden px-6 bg-[#1a2e3b] pb-32 lg:pb-40">

                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={rumBarPhoto}
                        alt="The Spiced Roots Rum Bar"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Clean Dark Wash Overlay without grid/squares */}
                    <div className="absolute inset-0 bg-[#1a2e3b]/50" />
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#1a2e3b] via-[#1a2e3b]/80 to-transparent" />
                </div>

                {/* Hero Text */}
                <div className={`relative z-10 text-center max-w-4xl transition-all duration-[1500ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                    <div className="flex items-center justify-center gap-6 mb-8">

                    </div>

                    <h1 className="font-just-another-hand text-7xl sm:text-[9rem] lg:text-[11rem] leading-[0.85] text-[#F9F8F6] tracking-tight mb-8 drop-shadow-2xl">
                        The Rum Vault
                    </h1>

                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', lineHeight: 1.8, fontStyle: 'italic', color: 'rgba(249, 248, 246, 0.7)' }}>
                        Housing one of the most extensive and authentic collections of rare Caribbean rums in the country. Let us take you on a liquid journey across the islands.
                    </p>
                </div>
            </section>

            {/* ─── SCROLLING TICKER ──────────────────────────────── */}
            <div className="bg-[#D1BB94] py-4 overflow-hidden whitespace-nowrap">
                <div className="flex space-x-12 animate-scroll-fast text-[#1a2e3b]" style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 900 }}>
                    {[...Array(20)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span>✦ Liquid History</span>
                            <span>✦ Rare Distillations</span>
                            <span>✦ Premium Mixology</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* ─── 2. SIGNATURE COCKTAILS (Image 2) ───────────────────────────── */}
            <section className="py-24 lg:py-40 px-6 sm:px-12 bg-[#F9F8F6]">
                <div className="max-w-[1400px] mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">

                        {/* Mixology Copy & Accordion */}
                        <div>
                            <div className="mb-16">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                    <div style={{ height: '1px', width: '48px', background: '#D1BB94' }} />
                                    <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D1BB94', fontWeight: 700 }}>
                                        Masterclass Mixology
                                    </span>
                                </div>
                                <h2 className="font-just-another-hand text-6xl sm:text-[7rem] leading-[0.9] text-[#1a2e3b] tracking-tight">
                                    Signature <span className="italic text-[#D1BB94]">Pours</span>
                                </h2>
                            </div>

                            <div className="space-y-0 border-t border-[#1a2e3b]/10">
                                {rumCocktails.map((cocktail, idx) => {
                                    const isOpen = expandedCocktail === cocktail.id;
                                    const num = String(idx + 1).padStart(2, '0');
                                    return (
                                        <div
                                            key={cocktail.id}
                                            className="group cursor-pointer border-b border-[#1a2e3b]/10"
                                            onClick={() => setExpandedCocktail(isOpen ? null : cocktail.id)}
                                        >
                                            <div className="flex items-center justify-between py-6 lg:py-8 gap-6">
                                                <span className="text-[#1a2e3b]/20 font-just-another-hand text-4xl lg:text-5xl tabular-nums flex-shrink-0 group-hover:text-[#D1BB94] transition-colors duration-300">{num}</span>
                                                <h3 className={`font-just-another-hand text-4xl lg:text-5xl flex-1 transition-colors duration-300 ${isOpen ? 'text-[#D1BB94]' : 'text-[#1a2e3b]'}`}>
                                                    {cocktail.name}
                                                </h3>
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isOpen ? 'bg-[#D1BB94] rotate-180' : 'bg-[#1a2e3b]/5 group-hover:bg-[#1a2e3b]/10'}`}>
                                                    <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-[#1a2e3b]' : 'text-[#1a2e3b]/60'}`} />
                                                </div>
                                            </div>
                                            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-48 pb-8' : 'max-h-0'}`}>
                                                <div className="flex flex-col gap-4 pl-0 sm:pl-20">
                                                    <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontStyle: 'italic', color: 'rgba(26, 46, 59, 0.7)' }}>
                                                        {cocktail.description}
                                                    </p>
                                                    <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', letterSpacing: '0.2em', fontWeight: 700, color: '#D1BB94' }}>
                                                        £{(cocktail.price as number).toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <button onClick={() => onNavigate('menu')} className="mt-16 group flex items-center gap-4">
                                <span className="text-[10px] tracking-[0.3em] text-[#1a2e3b] font-black uppercase transition-all duration-300 group-hover:text-[#D1BB94]" style={{ fontFamily: 'Arial, sans-serif' }}>
                                    View Full Drinks Menu
                                </span>
                                <div className="w-8 h-8 rounded-full bg-[#1a2e3b] text-[#F9F8F6] flex items-center justify-center group-hover:bg-[#D1BB94] group-hover:text-[#1a2e3b] transition-all duration-300">
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            </button>
                        </div>

                        {/* Right: Premium massive portrait image */}
                        <div className="w-full relative group">
                            <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src={pourPhoto}
                                    alt="Expert bartender creating a signature cocktail"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                                />
                                <div className="absolute inset-0 bg-[#1a2e3b]/10 group-hover:bg-transparent transition-colors duration-700" />
                            </div>
                            {/* Accent block under image */}
                            <div className="absolute -bottom-6 -left-6 bg-[#1a2e3b] px-10 py-8 shadow-xl max-w-xs">
                                <p className="font-just-another-hand text-[#D1BB94] text-4xl leading-tight">
                                    Crafted with unwavering precision.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ─── 3. RUM CATALOG ───────────────────────────────────── */}
            <section className="py-24 lg:py-40 bg-[#1a2e3b]">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-12">

                    <div className="mb-24 text-center">
                        <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D1BB94', fontWeight: 700 }} className="mb-6 block">
                            Our Private Reserve
                        </span>
                        <h2 className="font-just-another-hand leading-none text-[#F9F8F6] text-7xl sm:text-[9rem]">
                            The Rum <span className="italic text-[#D1BB94]">Catalog</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {RUM_CATALOG.map((rum, idx) => {
                            const colors = ORIGIN_COLORS[rum.origin] ?? { bg: '#142530', border: '#D1BB94', accent: '#D1BB94' };
                            const isHovered = hoveredRum === rum.id;
                            const notes = rum.notes.split(',').map(n => n.trim());

                            return (
                                <div
                                    key={rum.id}
                                    className={`relative rounded-xl overflow-hidden cursor-default transition-all duration-700 outline outline-1 outline-white/5 hover:outline-[#D1BB94]/30 ${idx === 0 ? 'lg:col-span-2' : ''}`}
                                    style={{ background: colors.bg }}
                                    onMouseEnter={() => setHoveredRum(rum.id)}
                                    onMouseLeave={() => setHoveredRum(null)}
                                >
                                    {/* Giant background number */}
                                    <div
                                        className="absolute top-4 right-8 font-just-another-hand leading-none select-none pointer-events-none transition-all duration-700"
                                        style={{ fontSize: idx === 0 ? '16rem' : '10rem', color: '#F9F8F6', opacity: isHovered ? 0.05 : 0.02 }}
                                    >
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>

                                    {/* Content */}
                                    <div className={`relative z-10 p-10 lg:p-14 flex flex-col gap-10 ${idx === 0 ? 'lg:flex-row lg:items-center' : ''}`}>
                                        <div className={idx === 0 ? 'flex-1' : ''}>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: colors.accent }} />
                                                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: colors.accent, fontWeight: 700 }}>
                                                    {rum.origin}
                                                </span>
                                            </div>

                                            <h3
                                                className="font-just-another-hand leading-[0.95] mb-6 transition-all duration-500 text-[#F9F8F6]"
                                                style={{ fontSize: idx === 0 ? 'clamp(4rem, 6vw, 6rem)' : 'clamp(3rem, 4.5vw, 4rem)' }}
                                            >
                                                {rum.name}
                                            </h3>

                                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.6, color: 'rgba(249, 248, 246, 0.6)', maxWidth: '28rem' }}>
                                                {rum.description}
                                            </p>
                                        </div>

                                        {/* Tasting Notes */}
                                        <div className={`flex flex-wrap gap-3 mt-6 lg:mt-0 ${idx === 0 ? 'lg:w-[350px] lg:flex-col lg:items-end' : ''}`}>
                                            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', width: '100%', color: 'rgba(249, 248, 246, 0.3)', marginBottom: '8px', textAlign: idx === 0 ? 'right' : 'left' }}>
                                                Tasting Profile
                                            </p>
                                            {notes.map(note => (
                                                <span
                                                    key={note}
                                                    className="px-5 py-2.5 rounded-none outline outline-1 transition-all duration-300 backdrop-blur-sm"
                                                    style={{
                                                        outlineColor: isHovered ? colors.accent : 'rgba(255,255,255,0.1)',
                                                        color: isHovered ? '#1a2e3b' : 'rgba(249, 248, 246, 0.7)',
                                                        background: isHovered ? colors.accent : 'transparent',
                                                        fontFamily: 'Arial, sans-serif',
                                                        fontSize: '10px',
                                                        letterSpacing: '0.2em',
                                                        textTransform: 'uppercase',
                                                        fontWeight: 700
                                                    }}
                                                >
                                                    {note}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── 4. TASTING JOURNEYS (Image 3) ──────────────────────────────── */}
            <section className="py-24 lg:py-40 bg-[#F9F8F6] relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        {/* Images 3: The Bartender */}
                        <div className="relative h-[600px] lg:h-[800px] rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src={bartenderPhoto}
                                alt="Bartender in action at The Rum Vault"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms] ease-out grayscale hover:grayscale-0"
                                style={{ objectPosition: 'center 40%' }}
                            />
                            <div className="absolute inset-0 bg-[#1a2e3b]/30" />
                        </div>

                        {/* Content */}
                        <div className="space-y-12">
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                    <div style={{ height: '1px', width: '48px', background: '#D1BB94' }} />
                                    <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#D1BB94', fontWeight: 700 }}>
                                        Private Experiences
                                    </span>
                                </div>
                                <h2 className="font-just-another-hand leading-[0.9] text-[#1a2e3b] text-7xl sm:text-[8rem] lg:text-[9rem]">
                                    Guided <span className="italic text-[#D1BB94]">Tastings</span>
                                </h2>
                            </div>

                            <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontStyle: 'italic', lineHeight: 1.6, color: 'rgba(26, 46, 59, 0.7)', maxWidth: '32rem' }}>
                                Book a private session with our master bartenders. Learn the history of sugarcane distillation, sip through aged vintages, and understand the soul behind every bottle on our shelf.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-[#1a2e3b]/10">
                                <div className="space-y-4">
                                    <GlassWater className="w-8 h-8 text-[#D1BB94]" />
                                    <h4 className="font-just-another-hand text-4xl text-[#1a2e3b]">Exclusive Flights</h4>
                                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', lineHeight: 1.8, color: 'rgba(26, 46, 59, 0.6)' }}>
                                        Curated selections of 3 or 5 rare rums, walking you through the distinct regional profiles of the Caribbean.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <ShieldCheck className="w-8 h-8 text-[#D1BB94]" />
                                    <h4 className="font-just-another-hand text-4xl text-[#1a2e3b]">Cocktail Masterclasses</h4>
                                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', lineHeight: 1.8, color: 'rgba(26, 46, 59, 0.6)' }}>
                                        Learn how to balance tropical acidity, premium sugar profiles, and complex bitters like a true professional.
                                    </p>
                                </div>
                            </div>

                            <button onClick={() => onNavigate('contact')} className="mt-12 group flex items-center justify-center w-full sm:w-auto px-12 py-5 bg-[#1a2e3b] text-[#F9F8F6] rounded-full hover:bg-[#D1BB94] hover:text-[#1a2e3b] transition-all duration-300 shadow-xl border border-transparent hover:border-[#D1BB94]">
                                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '0.25em', fontWeight: 900, textTransform: 'uppercase' }}>
                                    Enquire Now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RumBar;
