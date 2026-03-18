import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const StartEngine = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      video: "/LFACon.mp4",
      subtitle: "A SYMPHONY OF POWER",
      title: "Start Your Engine",
      cta: "Discover Excellences"
    },
    {
      id: 1,
      video: "/video2.mp4",
      subtitle: "PERFORMANCE, HEIGHTENED",
      title: "Take every drive to the next level on or off-road.",
      cta: "Explore LX700h"
    }
  ];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-end pb-20 md:pb-32">
      {/* Background Video */}
      {slides.map((slide, index) => (
        <div 
            key={slide.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div key={currentSlide} className="transition-all duration-500 transform">
            <h3 className="text-sm md:text-base font-bold uppercase tracking-widest mb-4 animate-fade-in">
                {slides[currentSlide].subtitle}
            </h3>
            <h2 className={`font-light uppercase tracking-wider mb-8 animate-fade-in-up ${currentSlide === 1 ? 'text-2xl md:text-3xl' : 'text-4xl md:text-6xl'}`}>
                {slides[currentSlide].title}
            </h2>
        </div>
        
        <button className="group flex items-center mx-auto text-white text-xs md:text-sm font-bold tracking-widest uppercase border border-white/30 hover:bg-white hover:text-black px-6 py-3 rounded-full transition-all duration-300">
          {slides[currentSlide].cta}
          <span className="ml-2 bg-white text-black rounded-full p-1 group-hover:bg-black group-hover:text-white transition-colors">
            <ChevronRight size={12} />
          </span>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((slide, index) => (
            <button 
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                    index === currentSlide 
                    ? 'border-red-600 scale-110' 
                    : 'border-transparent hover:border-gray-500'
                }`}
            >
                <div className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-red-600' : 'bg-gray-500'}`}></div>
            </button>
        ))}
      </div>
    </div>
  );
};

export default StartEngine;
