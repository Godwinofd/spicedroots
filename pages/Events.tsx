
import React, { useState, useEffect } from 'react';
import { Palette, Wine, Mic2, Music, ArrowLeft, Calendar, Clock, MapPin, Users } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import sipAndPaintImg from '../assets/sipandpaint.jpg';
import dancehallImg from '../assets/dancehall.jpg';
import bachataImg from '../assets/bachata.jpg';

interface EventData {
    id: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    howItWorks: string[];
    image: string;
    price: string;
    duration: string;
    nextDate: string;
    icon: any;
}

const EVENTS_DATA: EventData[] = [
    {
        id: 'sip-paint',
        title: 'Sip & Paint',
        shortDesc: 'Unleash your creativity with a glass of our finest rum punch and Caribbean riddims.',
        fullDesc: 'Join us for an evening of artistic expression and tropical vibes. Whether you’re a seasoned artist or haven’t picked up a brush since school, our guided sessions are designed for everyone to enjoy.',
        howItWorks: [
            'Arrive and grab your welcome Rum Punch.',
            'We provide all materials: canvas, paints, brushes, and apron.',
            'Follow our guest artist step-by-step or go freestyle.',
            'Enjoy Caribbean snacks and music while you paint.',
            'Take your masterpiece home at the end of the night.'
        ],
        image: sipAndPaintImg,
        price: '£35 per person',
        duration: '2.5 Hours',
        nextDate: 'Every Thursday',
        icon: Palette
    },
    {
        id: 'rum-masterclass',
        title: 'Rum Masterclass',
        shortDesc: 'A deep dive into the heritage, distillation, and tasting of rare Caribbean rums.',
        fullDesc: 'Experience the "Rum Vault" like never before. Our resident rum expert will take you on a journey through the history of Caribbean distillations, from the sugar cane fields to the aging barrels.',
        howItWorks: [
            'Introduction to the history of Caribbean Rum.',
            'Explanation of distillation and aging processes.',
            'Guided tasting of 5 premium, rare rums from across the islands.',
            'Learn to identify tasting notes and flavor profiles.',
            'Finish with an exclusive Spiced Roots cocktail masterclass.'
        ],
        image: 'https://images.unsplash.com/photo-1597290282695-edc43d0e7129?q=80&w=2070&auto=format&fit=crop',
        price: '£45 per person',
        duration: '2 Hours',
        nextDate: 'Last Friday of the Month',
        icon: Wine
    },
    {
        id: 'dancehall-karaoke',
        title: 'Dancehall & Reggae Karaoke',
        shortDesc: 'Step to the mic and feel the riddim. Bringing the Kingston energy to Oxford.',
        fullDesc: 'It’s your time to shine on the Spiced Roots stage. From classic Beres Hammond and Bob Marley to modern Popcaan and Shenseea, we have the ultimate library of riddims.',
        howItWorks: [
            'Browse our massive catalog of Reggae & Dancehall classics.',
            'Sign up with our host to get your spot on the mic.',
            'Enjoy a vibrant crowd and backing dancers for top performances.',
            'Special cocktail offers throughout the night.',
            'Maximum vibes and community spirit.'
        ],
        image: dancehallImg,
        price: 'Free Entry / Table Booking Advised',
        duration: 'All Night',
        nextDate: 'Every Saturday Night',
        icon: Mic2
    },
    {
        id: 'bachata-karaoke',
        title: 'Bachata & Reggaeton Karaoke',
        shortDesc: 'The ultimate Latin-Caribbean crossover. Bring the passion and the energy to the stage.',
        fullDesc: 'Where the Caribbean meets Latin America. A night of high-energy Reggaeton bangers and smooth Bachata melodies. Perfect for those who love to sing and dance.',
        howItWorks: [
            'A mix of Karaoke and Latin social dancing.',
            'Sing your favorite hits from Bad Bunny, J Balvin, to Romeo Santos.',
            'Introductory Bachata dance steps at the start of the night.',
            'Latin-fusion cocktails available all night.',
            'A high-energy party atmosphere like no other.'
        ],
        image: bachataImg,
        price: '£10 Entry (incl. Welcome Drink)',
        duration: '4 Hours',
        nextDate: 'Bi-Weekly Sundays',
        icon: Music
    }
];

const Events: React.FC = () => {
    const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);
    }, [selectedEventId]);

    const selectedEvent = EVENTS_DATA.find(e => e.id === selectedEventId);

    if (selectedEventId && selectedEvent) {
        return (
            <div className="min-h-screen bg-[#fcfaf7] text-[#27618E] pt-32 pb-40">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Back Button */}
                    <button
                        onClick={() => setSelectedEventId(null)}
                        className="flex items-center space-x-2 text-2xl font-just-another-hand tracking-widest uppercase hover:text-[#D1BB94] transition-colors mb-12"
                    >
                        <ArrowLeft className="w-6 h-6" />
                        <span>Back to Events</span>
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        {/* Left: Image & Quick Info */}
                        <div className="space-y-12">
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                                <OptimizedImage
                                    src={selectedEvent.image}
                                    alt={selectedEvent.title}
                                    className="w-full h-full object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 bg-white rounded-3xl border border-[#27618E]/5">
                                    <Clock className="w-6 h-6 text-[#D1BB94] mb-4" />
                                    <h4 className="text-xl font-just-another-hand tracking-widest uppercase opacity-40">Duration</h4>
                                    <p className="text-3xl font-just-another-hand">{selectedEvent.duration}</p>
                                </div>
                                <div className="p-8 bg-white rounded-3xl border border-[#27618E]/5">
                                    <Users className="w-6 h-6 text-[#D1BB94] mb-4" />
                                    <h4 className="text-xl font-just-another-hand tracking-widest uppercase opacity-40">Price</h4>
                                    <p className="text-3xl font-just-another-hand">{selectedEvent.price}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Detailed Content */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <span className="text-2xl font-just-another-hand tracking-[0.4em] uppercase text-[#D1BB94]">Featured Event</span>
                                <h1 className="text-8xl sm:text-9xl font-just-another-hand leading-none uppercase">{selectedEvent.title}</h1>
                                <p className="text-4xl font-just-another-hand italic text-[#27618E]/70 leading-relaxed">
                                    {selectedEvent.fullDesc}
                                </p>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-5xl font-just-another-hand uppercase border-b border-[#27618E]/10 pb-4">How it works</h3>
                                <ul className="space-y-6">
                                    {selectedEvent.howItWorks.map((step, i) => (
                                        <li key={i} className="flex items-start space-x-6">
                                            <div className="w-10 h-10 rounded-full bg-[#27618E] text-white flex items-center justify-center font-just-another-hand text-2xl flex-shrink-0">
                                                {i + 1}
                                            </div>
                                            <p className="text-3xl font-just-another-hand leading-snug pt-1">{step}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-10 bg-[#27618E] rounded-[3rem] text-white space-y-8">
                                <div className="flex items-center space-x-4">
                                    <Calendar className="w-8 h-8 text-[#D1BB94]" />
                                    <p className="text-3xl font-just-another-hand tracking-widest uppercase">Next Event: {selectedEvent.nextDate}</p>
                                </div>
                                <button
                                    onClick={() => window.location.hash = 'reservations'}
                                    className="w-full py-6 bg-[#D1BB94] text-white rounded-full text-5xl font-just-another-hand tracking-widest uppercase hover:bg-white hover:text-[#27618E] transition-all shadow-xl"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fcfaf7] text-[#27618E] pt-32 pb-40">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className={`text-center space-y-8 mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <span className="text-[#D1BB94] text-2xl tracking-[0.5em] font-just-another-hand uppercase">Island Vibes</span>
                    <h1 className="text-9xl sm:text-[12rem] font-just-another-hand uppercase leading-none italic">
                        EVENTS <span className="not-italic text-[#D1BB94]">& VIBES</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-4xl font-just-another-hand italic text-[#27618E]/60 leading-relaxed">
                        "More than a restaurant—a community of riddim, art, and heritage."
                    </p>
                </div>

                {/* Event Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {EVENTS_DATA.map((event, idx) => (
                        <div
                            key={event.id}
                            onClick={() => {
                                setIsVisible(false);
                                setTimeout(() => setSelectedEventId(event.id), 500);
                            }}
                            className="group cursor-pointer bg-white rounded-[4rem] overflow-hidden border border-[#27618E]/5 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col"
                        >
                            <div className="h-[400px] overflow-hidden relative">
                                <OptimizedImage
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#27618E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                                    <span className="px-10 py-4 bg-white text-[#27618E] rounded-full text-3xl font-just-another-hand tracking-widest uppercase">View Details</span>
                                </div>
                            </div>

                            <div className="p-12 space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="w-16 h-16 bg-[#fcfaf7] rounded-2xl flex items-center justify-center text-[#D1BB94]">
                                        <event.icon className="w-8 h-8" />
                                    </div>
                                    <span className="text-2xl font-just-another-hand text-[#D1BB94] tracking-widest uppercase">{event.price}</span>
                                </div>
                                <h3 className="text-6xl font-just-another-hand text-[#27618E]">{event.title}</h3>
                                <p className="text-3xl font-just-another-hand text-[#27618E]/60 italic leading-snug">
                                    {event.shortDesc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-20 lg:mt-40 text-center space-y-8 lg:space-y-12 p-8 lg:p-20 bg-[#27618E] rounded-[3rem] text-white">
                    <h2 className="text-5xl lg:text-7xl font-just-another-hand italic">Looking for a private venue?</h2>
                    <p className="text-xl lg:text-3xl font-just-another-hand opacity-70 max-w-2xl mx-auto">
                        Host your own celebration at Spiced Roots. From intimate dinners to massive parties, we bring the Caribbean to you.
                    </p>
                    <button
                        onClick={() => window.location.hash = 'contact'}
                        className="px-8 py-4 lg:px-16 lg:py-6 bg-[#D1BB94] text-white rounded-full text-2xl lg:text-4xl font-just-another-hand tracking-widest uppercase hover:bg-white hover:text-[#27618E] transition-all"
                    >
                        Private Hire Enquiries
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Events;
