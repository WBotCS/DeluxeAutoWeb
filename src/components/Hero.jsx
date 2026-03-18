import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-[#690000] overflow-hidden">
      {/* Background Image - Full Screen */}
      <img 
        src="/byd.webp" 
        alt="Ferrari SF-25" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-end pb-24 text-center">
        {/* Text Content */}
        <div className="z-20">
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-wider mb-6 uppercase font-sans">
            Yangwang U9
          </h1>
          
          <button className="group flex items-center mx-auto text-white text-sm md:text-base font-bold tracking-widest uppercase border border-white/30 hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all duration-300">
            Discover
            <span className="ml-2 bg-white text-black rounded-full p-1 group-hover:bg-black group-hover:text-white transition-colors">
              <ChevronRight size={14} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
