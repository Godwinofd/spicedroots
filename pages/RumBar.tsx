
import React, { useEffect, useState, useRef } from 'react';
import { RUM_CATALOG, MENU_ITEMS } from '../constants';
import { GlassWater, ShieldCheck, ArrowRight, ChevronDown } from 'lucide-react';
import rumBarPhoto from '../assets/DSC08059.jpg?format=webp&w=1600';
import staffPhoto from '../assets/DSC08540.jpg?format=webp&w=1200';
import bartenderPhoto from '../assets/DSC08063.jpg?format=webp&w=1200';
import pourPhoto from '../assets/DSC08568.jpg?format=webp&w=1200';
import signPhoto from '../assets/DSC08032.jpg?format=webp&w=1200';
import redCocktail from '../assets/RedCocktail.jpg.jpeg?format=webp&w=1200';

// Subtle origin colour variants — all within the brand palette
const ORIGIN_COLORS: Record<string, { bg: string; border: string; accent: string }> = {
    Jamaica: { bg: '#27618E', border: '#D1BB94', accent: '#D1BB94' },
    Barbados: { bg: '#1e4d72', border: '#c8a97a', accent: '#e8cfa0' },
    Guyana: { bg: '#2a6b5e', border: '#a8d5c8', accent: '#c8ede5' },
    Venezuela: { bg: '#7c4a1a', border: '#D1BB94', accent: '#f0d5a8' },
};

const rumCocktails = MENU_ITEMS.filter(item => item.category === 'Rum Bar');

const RumBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredRum, setHoveredRum] = useState<string | null>(null);
    const [expandedCocktail, setExpandedCocktail] = useState<string | null>(null);

    useEffect(() => {
        const t = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="bg-[#F9F8F6] text-[#27618E] overflow-x-hidden">

            {/* ─── HERO ─────────────────────────────────────────── */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6" style={{ background: '#27618E' }}>

                {/* Real bar photo — full bleed background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={rumBarPhoto}
                        alt="The Spiced Roots Rum Bar"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Layered overlay: dark teal wash so text stays readable */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,40,60,0.72) 0%, rgba(15,40,60,0.55) 50%, rgba(15,40,60,0.80) 100%)' }} />
                </div>

                {/* Decorative concentric rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[900px] h-[900px] rounded-full border border-white/[0.04] absolute animate-ping-slow" />
                    <div className="w-[650px] h-[650px] rounded-full border border-white/[0.06] absolute" style={{ animation: 'spin-cw 40s linear infinite' }} />
                    <div className="w-[420px] h-[420px] rounded-full border border-[#D1BB94]/15 absolute" style={{ animation: 'spin-ccw 25s linear infinite' }} />
                    <div className="w-[220px] h-[220px] rounded-full border border-[#D1BB94]/25 absolute" style={{ animation: 'spin-cw 15s linear infinite' }} />
                </div>

                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'linear-gradient(#D1BB94 1px, transparent 1px), linear-gradient(to right, #D1BB94 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                {/* Hero text */}
                <div className={`relative z-10 text-center transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                    <p className="text-[#D1BB94] text-xs tracking-[0.6em] uppercase mb-8 font-medium">Artisanal Distillery · Est. Oxford</p>

                    <div className="mt-10 flex items-center justify-center gap-6">
                        <div className="h-[1px] w-16 bg-[#D1BB94]/40" />
                        <p className="text-white/40 text-xs tracking-[0.4em] uppercase font-medium">50+ Rare Caribbean Rums</p>
                        <div className="h-[1px] w-16 bg-[#D1BB94]/40" />
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-white/20 text-[9px] tracking-[0.4em] uppercase">Explore</span>
                    <ChevronDown className="w-4 h-4 text-[#D1BB94]/40" />
                </div>

                {/* Side labels */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D1BB94]/30 to-transparent" />
                    <span className="text-white/20 text-[9px] tracking-[0.5em] uppercase font-medium" style={{ writingMode: 'vertical-rl' }}>Caribbean Soul</span>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D1BB94]/30 to-transparent" />
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D1BB94]/30 to-transparent" />
                    <span className="text-white/20 text-[9px] tracking-[0.5em] uppercase font-medium" style={{ writingMode: 'vertical-rl' }}>Rare Collections</span>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D1BB94]/30 to-transparent" />
                </div>
            </section>

            {/* ─── SCROLLING TICKER ──────────────────────────────── */}
            <div className="bg-[#D1BB94] py-3 overflow-hidden whitespace-nowrap">
                <div className="flex space-x-16 animate-scroll-fast text-[#27618E] text-[10px] font-black tracking-[0.4em] uppercase items-center">
                    {[...Array(20)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span>✦ Aged in Oak</span>
                            <span>✦ Caribbean Soul</span>
                            <span>✦ Rare Distillations</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* ─── SIGNATURE COCKTAILS ───────────────────────────── */}
            <section className="py-24 lg:py-40 px-6 sm:px-12 bg-white">
                <div className="max-w-[1400px] mx-auto">

                    {/* Section header */}
                    <div className="mb-16 lg:mb-24 border-b border-[#27618E]/10 pb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <span className="text-[#D1BB94] text-xs tracking-[0.5em] uppercase font-medium mb-4 block">Mixology</span>
                            <h2 className="font-just-another-hand leading-none text-[#27618E] uppercase text-8xl sm:text-[9rem]">
                                Signature <span className="italic text-[#D1BB94]">Creations</span>
                            </h2>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
                            {/* Red cocktail inset photo */}
                            <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img src={redCocktail} alt="Signature red cocktail" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-[#27618E]/50 text-2xl font-just-another-hand italic max-w-sm leading-relaxed">
                                House-made bitters, tropical ferments, and the world's most expressive rums.
                            </p>
                        </div>
                    </div>

                    {/* Two-column layout: accordion left, staff photo right */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
                        {/* Cocktail accordion list */}
                        <div className="space-y-0 divide-y divide-[#27618E]/[0.08]">
                            {rumCocktails.map((cocktail, idx) => {
                                const isOpen = expandedCocktail === cocktail.id;
                                const num = String(idx + 1).padStart(2, '0');
                                return (
                                    <div
                                        key={cocktail.id}
                                        className="group cursor-pointer"
                                        onClick={() => setExpandedCocktail(isOpen ? null : cocktail.id)}
                                    >
                                        <div className="flex items-center justify-between py-6 lg:py-8 gap-6">
                                            <span className="text-[#27618E]/10 font-just-another-hand text-4xl lg:text-6xl tabular-nums flex-shrink-0 group-hover:text-[#D1BB94]/40 transition-colors duration-300">{num}</span>
                                            <h3 className={`font-just-another-hand text-4xl lg:text-6xl flex-1 transition-colors duration-300 ${isOpen ? 'text-[#D1BB94]' : 'text-[#27618E] group-hover:text-[#D1BB94]/80'}`}>
                                                {cocktail.name}
                                            </h3>
                                            <span className="hidden sm:block text-[#27618E] font-bold text-lg tracking-widest flex-shrink-0">
                                                £{(cocktail.price as number).toFixed(2)}
                                            </span>
                                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'border-[#D1BB94] bg-[#D1BB94] rotate-180' : 'border-[#27618E]/15 group-hover:border-[#27618E]/40'}`}>
                                                <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-[#27618E]/40'}`} />
                                            </div>
                                        </div>
                                        <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-48 pb-8' : 'max-h-0'}`}>
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pl-0 sm:pl-20">
                                                <p className="text-[#27618E]/60 font-just-another-hand italic text-2xl lg:text-3xl leading-relaxed">{cocktail.description}</p>
                                                <span className="sm:hidden text-[#27618E] font-bold text-lg tracking-widest flex-shrink-0">£{(cocktail.price as number).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Staff photo — sticky alongside the list */}
                        <div className="hidden lg:block sticky top-8">
                            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
                                <img
                                    src={staffPhoto}
                                    alt="Spiced Roots bar staff"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <p className="text-center text-[#27618E]/40 text-xs tracking-[0.3em] uppercase font-medium mt-4">Our Bar Team</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── BARTENDER CINEMATIC BREAK ─────────────────────── */}
            <div className="relative h-[55vh] overflow-hidden">
                <img
                    src={bartenderPhoto}
                    alt="Spiced Roots bartender"
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 30%' }}
                />
                {/* Gradient overlays top & bottom for blending */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, white 0%, transparent 20%, transparent 80%, #F9F8F6 100%)' }} />
                {/* Centre label */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl px-10 py-6 border border-white/20">
                        <p className="text-white text-xs tracking-[0.6em] uppercase font-medium mb-2">The Rum Vault</p>
                        <p className="font-just-another-hand text-white text-5xl italic">Crafted with passion</p>
                    </div>
                </div>
            </div>

            {/* ─── RUM CATALOG ───────────────────────────────────── */}
            <section className="py-24 lg:py-40 bg-[#F9F8F6]">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-12">

                    {/* Section header */}
                    <div className="mb-20 text-center">
                        <span className="text-[#D1BB94] text-xs tracking-[0.5em] uppercase font-medium mb-6 block">Inventory</span>
                        <h2 className="font-just-another-hand leading-none uppercase text-[#27618E] text-7xl sm:text-[8rem] lg:text-[10rem]">
                            The Rum <span className="italic text-[#D1BB94]">Catalog</span>
                        </h2>
                    </div>

                    {/* Rum cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {RUM_CATALOG.map((rum, idx) => {
                            const colors = ORIGIN_COLORS[rum.origin] ?? { bg: '#27618E', border: '#D1BB94', accent: '#D1BB94' };
                            const isHovered = hoveredRum === rum.id;
                            const notes = rum.notes.split(',').map(n => n.trim());
                            return (
                                <div
                                    key={rum.id}
                                    className={`relative rounded-3xl overflow-hidden cursor-default transition-all duration-700 ${idx === 0 ? 'lg:col-span-2' : ''}`}
                                    style={{ background: colors.bg }}
                                    onMouseEnter={() => setHoveredRum(rum.id)}
                                    onMouseLeave={() => setHoveredRum(null)}
                                >
                                    {/* Background giant index number */}
                                    <div
                                        className="absolute top-0 right-6 font-just-another-hand leading-none select-none pointer-events-none transition-all duration-700"
                                        style={{ fontSize: idx === 0 ? '18rem' : '14rem', color: 'white', opacity: isHovered ? 0.08 : 0.04 }}
                                    >
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>

                                    {/* Card content */}
                                    <div className={`relative z-10 p-10 lg:p-14 flex flex-col gap-8 ${idx === 0 ? 'lg:flex-row lg:items-end' : ''}`}>
                                        <div className={idx === 0 ? 'flex-1' : ''}>
                                            {/* Origin tag */}
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: colors.accent }} />
                                                <span className="text-xs tracking-[0.5em] uppercase font-medium" style={{ color: colors.accent }}>{rum.origin}</span>
                                            </div>

                                            {/* Name */}
                                            <h3
                                                className="font-just-another-hand leading-[0.9] mb-6 transition-all duration-500"
                                                style={{
                                                    fontSize: idx === 0 ? 'clamp(3rem, 6vw, 6rem)' : 'clamp(2.5rem, 4.5vw, 4rem)',
                                                    color: isHovered ? colors.accent : '#F9F8F6'
                                                }}
                                            >
                                                {rum.name}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-white/50 font-just-another-hand italic text-2xl leading-relaxed max-w-lg">
                                                {rum.description}
                                            </p>
                                        </div>

                                        {/* Tasting notes pills */}
                                        <div className={`flex flex-wrap gap-3 ${idx === 0 ? 'lg:flex-col lg:items-end lg:gap-3' : ''}`}>
                                            <p className="w-full text-white/25 text-[10px] tracking-[0.4em] uppercase font-medium mb-1">Tasting Notes</p>
                                            {notes.map(note => (
                                                <span
                                                    key={note}
                                                    className="px-4 py-2 rounded-full text-sm font-medium tracking-wider border transition-all duration-300"
                                                    style={{
                                                        borderColor: isHovered ? colors.accent : `${colors.accent}40`,
                                                        color: isHovered ? colors.accent : `${colors.accent}70`,
                                                        background: isHovered ? `${colors.accent}15` : 'transparent'
                                                    }}
                                                >
                                                    {note}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom accent bar */}
                                    <div
                                        className="h-[3px] w-full transition-all duration-700 origin-left"
                                        style={{
                                            background: `linear-gradient(to right, ${colors.accent}, transparent)`,
                                            transform: `scaleX(${isHovered ? 1 : 0.15})`,
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── TASTING JOURNEYS ──────────────────────────────── */}
            <section className="py-24 lg:py-40 bg-[#27618E] text-white relative overflow-hidden">

                {/* Decorative large text watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    <span className="font-just-another-hand text-[25vw] text-white/[0.03] leading-none uppercase whitespace-nowrap">Experience</span>
                </div>

                {/* Accent lines */}
                <div className="absolute top-0 left-0 w-[50%] h-[2px] bg-gradient-to-r from-[#D1BB94]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[50%] h-[2px] bg-gradient-to-l from-[#D1BB94]/40 to-transparent pointer-events-none" />

                <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        {/* Left: Text content */}
                        <div className="space-y-10">
                            <div className="flex items-center gap-4">
                                <div className="h-[1px] w-12 bg-[#D1BB94]" />
                                <span className="text-[#D1BB94] text-xs tracking-[0.6em] uppercase font-medium">Experience</span>
                            </div>
                            <h2 className="font-just-another-hand leading-none text-white text-7xl sm:text-[8rem] lg:text-[9rem]">
                                Tasting <span className="italic text-[#D1BB94]">Journeys</span>
                            </h2>
                            <p className="text-white/50 font-just-another-hand italic text-3xl leading-relaxed max-w-md">
                                Our cocktails are more than drinks — they are liquid history, crafted with house-made bitters and the world's most expressive rums.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#D1BB94]/40 transition-all duration-500 group">
                                    <GlassWater className="w-6 h-6 text-[#D1BB94] mb-5 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-just-another-hand text-3xl text-white mb-2">Private Tastings</h4>
                                    <p className="text-white/40 font-just-another-hand italic text-xl leading-relaxed">Guided exploration of rare Caribbean vintages.</p>
                                </div>
                                <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#D1BB94]/40 transition-all duration-500 group">
                                    <ShieldCheck className="w-6 h-6 text-[#D1BB94] mb-5 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-just-another-hand text-3xl text-white mb-2">Cocktail Classes</h4>
                                    <p className="text-white/40 font-just-another-hand italic text-xl leading-relaxed">Learn the art of tropical mixology.</p>
                                </div>
                            </div>

                            <button className="group flex items-center gap-5 mt-4">
                                <span className="px-10 py-5 rounded-full border border-[#D1BB94]/40 text-[#D1BB94] font-just-another-hand text-3xl tracking-[0.3em] uppercase hover:bg-[#D1BB94] hover:text-[#27618E] transition-all duration-500">
                                    Reserve a Journey
                                </span>
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D1BB94] group-hover:bg-[#D1BB94] transition-all duration-500">
                                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#27618E] transition-colors" />
                                </div>
                            </button>
                        </div>

                        {/* Right: Real photo */}
                        <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
                            <img
                                src={pourPhoto}
                                alt="The energy at Spiced Roots Rum Bar"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                                style={{ objectPosition: 'center 20%' }}
                            />
                            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(39,97,142,0.7) 0%, transparent 50%)' }} />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="font-just-another-hand italic text-white text-3xl leading-snug">"The energy here is unmatched"</p>
                                <p className="text-white/50 text-xs tracking-widest uppercase mt-2">The Rum Vault · Oxford</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── BOTTOM CTA STRIP ──────────────────────────────── */}
            <div className="relative py-14 px-6 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
                {/* Sign photo background */}
                <img src={signPhoto} alt="Purveyors of Fine Rum" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-[#D1BB94]/88" style={{ background: 'rgba(209,187,148,0.88)' }} />
                <p className="relative z-10 font-just-another-hand italic text-[#27618E] text-4xl lg:text-5xl">
                    "A sanctuary for the soul of the islands"
                </p>
                <div className="relative z-10 flex items-center gap-3 text-[#27618E] flex-shrink-0">
                    <span className="text-xs tracking-[0.4em] uppercase font-bold">The Rum Vault · Oxford</span>
                    <div className="w-2 h-2 rounded-full bg-[#27618E]/30" />
                </div>
            </div>

            <style>{`
        @keyframes spin-cw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spin-ccw {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.05; }
          50%       { transform: scale(1.04); opacity: 0.10; }
        }
        .animate-ping-slow {
          animation: ping-slow 8s ease-in-out infinite;
        }
        .duration-1200 {
          transition-duration: 1200ms;
        }
      `}</style>
        </div>
    );
};

export default RumBar;
