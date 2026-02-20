import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const newsData = [
  {
    id: 0,
    title: "FERRARI UNVEILS 2025 LIVERY OF 499P NUMBERS 50 AND 51",
    description: "Ferrari officially marked the start of its third season in the FIA World Endurance Championship's top class by unveiling the 2025 livery of the 499Ps which will compete under the official Ferrari - AF Corse team banner.",
    image: "/sf8_1.webp",
  },
  {
    id: 1,
    title: "THE MOST ANTICIPATED TEST",
    description: "The 296 Challenge undergoes international press scrutiny at the Monteblanco circuit",
    image: "/ferrari-296-gtb-review-specs-pricing-features-videos-and-more.webp",
  },
  {
    id: 2,
    title: "SCUDERIA FERRARI HP ANNOUNCES AMBIPAR AS TEAM PARTNER",
    description: "Scuderia Ferrari HP is pleased to announce a new partnership with Ambipar, a global leader in environmental solutions, as a Team Partner.",
    image: "/hamilton-leclerc-ferrari-suits-2025.avif",
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
                Read More
                <span className="ml-2 border border-gray-300 rounded-full p-2 group-hover:border-red-600 transition-colors">
                <ChevronRight size={14} />
                </span>
            </button>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 relative flex justify-center">
            <img 
                src={newsData[currentSlide].image} 
                alt={newsData[currentSlide].title} 
                className="w-full max-w-[600px] h-auto object-cover shadow-xl aspect-square"
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
        <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">View All News</a>
      </div>
    </div>
  );
};

export default News;
