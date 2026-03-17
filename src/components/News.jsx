import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsData = [
  {
    id: 0,
    title: "2025 Lexus LM350h",
    description: "The 2025 Lexus LM350h is a flagship luxury hybrid minivan designed for ultimate rear-seat comfort, often described as a \"private jet\" on wheels. Featuring a 2.5L hybrid powertrain with ~247 horsepower and E-Four all-wheel drive, it prioritizes, smooth, quiet, and efficient transport, primarily for high-end chauffeur markets.",
    image: "/LM.png",
  },
  {
    id: 1,
    title: "2025 Cadillac Escalade ESV Sport Premium",
    description: "The 2025 Cadillac Escalade ESV Sport Premium is the top-tier extended-length luxury SUV, combining maximum passenger space with high-performance styling. It features a 6.2L V8 engine (or available 682-HP supercharged V8), gloss black exterior accents, 22-inch to 24-inch wheels, and an extensive 55-inch curved display interior.",
    image: "/escalade.webp",
  },
  {
    id: 2,
    title: "2025 Lexus LX700h",
    description: "The 2025 Lexus LX 700h is a new flagship luxury hybrid SUV featuring a 3.4L twin-turbo V6 hybrid powertrain producing 457 horsepower and 583 lb-ft of torque. It introduces an off-road-focused Overtrail trim, 10-speed transmission, standard 4WD, and 8,000 lbs towing capacity.",
    image: "/Lx.avif",
  }
];

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % newsData.length);
      setIsAnimating(false);
    }, 300); // Wait for fade out
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + newsData.length) % newsData.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleDotClick = (index) => {
    if (index === currentSlide || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
    }, 300);
  }

  return (
    <div className="w-full bg-white text-black min-h-screen flex flex-col justify-center py-16 md:py-0 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative flex-grow pb-20">
        
        {/* Left Arrow - Absolute Positioned */}
        <button 
            onClick={handlePrev}
            className="hidden md:block absolute left-4 z-20 text-gray-400 hover:text-black transition-colors"
        >
            <ChevronLeft size={32} />
        </button>

        {/* Content Wrapper */}
        <div 
            className={`flex flex-col md:flex-row items-center w-full transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
            {/* Left: Content */}
            <div className="w-full md:w-1/2 pr-0 md:pr-16 mb-12 md:mb-0 flex flex-col justify-center pl-12">
            <h2 className="text-4xl md:text-6xl font-thin uppercase leading-tight mb-8">
                {newsData[currentSlide].title}
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed mb-8 max-w-md">
                {newsData[currentSlide].description}
            </p>
            
            <button className="group flex items-center text-black text-xs md:text-sm font-bold tracking-widest uppercase hover:text-red-600 transition-colors">
                See More
                <span className="ml-2 border border-gray-300 rounded-full p-2 group-hover:border-red-600 transition-colors">
                <ChevronRight size={14} />
                </span>
            </button>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 relative flex justify-center overflow-hidden">
            <img 
                src={newsData[currentSlide].image} 
                alt={newsData[currentSlide].title} 
                className={`w-full max-w-[600px] h-auto object-contain shadow-xl aspect-square ${newsData[currentSlide].image === '/LM.png' ? 'scale-110 object-center' : ''}`}
            />
            </div>
        </div>

        {/* Right Arrow - Absolute Positioned */}
        <button 
            onClick={handleNext}
            className="hidden md:block absolute right-4 z-20 text-gray-400 hover:text-black transition-colors"
        >
            <ChevronRight size={32} />
        </button>

      </div>

      {/* Bottom Controls - Absolute Positioned to move up */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-6">
        <div className="flex items-center space-x-2">
            {newsData.map((_, index) => (
                <button 
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className="p-2 focus:outline-none"
                    aria-label={`Go to slide ${index + 1}`}
                >
                    <div className={`rounded-full transition-all duration-300 ${
                        index === currentSlide 
                        ? 'w-3 h-3 border border-red-600 bg-transparent scale-125' 
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}></div>
                </button>
            ))}
        </div>
        <div className="w-12 h-px bg-gray-300"></div>
        <Link to="/inventory/new-vehicles" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">View All Vehicles</Link>
      </div>
    </div>
  );
};

export default News;
