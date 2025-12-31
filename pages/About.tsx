
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-28">
      {/* Hero Header - Deep green background and white text */}
      <section className="bg-deep-green px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-7xl sm:text-9xl serif uppercase font-medium tracking-tighter mb-8 text-white">THE ROOTS</h1>
          <p className="text-accent-pink text-lg sm:text-2xl serif italic max-w-3xl mx-auto leading-relaxed">
            "A story of spice, soul, and the vibrant culture of the Caribbean islands, planted in the heart of Oxford's Cowley Road."
          </p>
        </div>
      </section>

      {/* Editorial Sticky Section */}
      <section className="relative flex flex-col lg:flex-row min-h-[200vh] bg-[#fcfaf7]">
        
        {/* Left Side: Sticky Content */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center bg-[#fcfaf7] p-8 md:p-20 lg:p-32">
          <div className="max-w-md space-y-12 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <span className="text-black text-5xl">✦</span>
            </div>
            
            <h2 className="text-[12vw] lg:text-8xl font-bold uppercase tracking-tighter leading-none text-black">
              OUR STORY
            </h2>
            
            <div className="space-y-6 text-black/80 text-lg leading-relaxed font-light">
              <p>
                Founded in 2016, Spiced Roots was born from a desire to bring true, uncompromised Caribbean gastronomy to the heart of the UK.
              </p>
              <p>
                What started as a small dream on Cowley Road has grown into a landmark destination for food lovers seeking the intersection of tradition and modern technique.
              </p>
              <p>
                Our kitchen remains the heartbeat of our operation, where the rhythm of the islands meets the precision of fine dining.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Scrolling Panels */}
        <div className="w-full lg:w-1/2 flex flex-col">
          
          {/* Panel 1: The Owner Image */}
          <div className="h-screen w-full bg-accent-pink flex items-center justify-center p-6 md:p-20">
            <div className="relative w-full h-full max-w-xl max-h-[700px] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dzjqki9gi/image/upload/v1766779725/pexels-cottonbro-4253292_ff1zar.jpg" 
                alt="Kitchen atmosphere" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Panel 2: The Quote */}
          <div className="h-screen w-full bg-deep-green flex flex-col items-center justify-center p-8 md:p-20 text-center relative overflow-hidden border-l border-white/5">
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-[10vw] lg:text-[7vw] serif italic text-white leading-[0.9] tracking-tight mb-12">
                "We make food that makes people happy"
              </h3>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-[1px] bg-accent-pink"></div>
                <p className="text-xs tracking-[0.4em] font-bold uppercase text-white pt-4">
                  THE SPICED ROOTS CREDO
                </p>
              </div>
            </div>
            
            {/* Background Texture/Accent */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[1px] border-white rounded-full"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Philosophy Callout */}
      <div className="bg-deep-green">
        <section className="py-40 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <span className="text-accent-pink text-4xl mb-8 block">✦</span>
          <h2 className="text-5xl sm:text-7xl serif uppercase font-medium tracking-tighter mb-12 text-white">OUR PHILOSOPHY</h2>
          <p className="text-2xl font-light text-white/70 leading-relaxed italic">
            "We believe food is a bridge. It connects us to our past, it brings strangers together, and it heals the soul. Every dish we serve carries the weight of history and the joy of life."
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
