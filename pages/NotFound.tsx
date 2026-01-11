
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfaf7] text-center px-6">
            <div className="space-y-6 max-w-lg">
                <div className="text-[#D1BB94] text-9xl font-just-another-hand leading-none">404</div>
                <h1 className="text-5xl font-just-another-hand text-[#27618E] uppercase">Page Not Found</h1>
                <p className="text-xl serif italic text-[#27618E]/60 leading-relaxed">
                    "Looks like you've wandered off the map. Let's get you back to the main island."
                </p>
                <button
                    onClick={() => window.location.hash = 'home'}
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-[#27618E] text-white rounded-full text-xs tracking-[0.2em] font-black uppercase hover:bg-[#D1BB94] transition-colors mt-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Return Home</span>
                </button>
            </div>
        </div>
    );
};

export default NotFound;
