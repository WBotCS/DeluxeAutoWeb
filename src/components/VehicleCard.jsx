import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VehicleCard = ({ vehicle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? vehicle.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === vehicle.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      key={vehicle.id}
      className="bg-black rounded-lg overflow-hidden shadow-lg relative group border border-gray-700 hover:border-white transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {vehicle.images.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={vehicle.name}
              className={`w-full h-40 flex-shrink-0 ${
                imageSrc === '/IS350.png' || imageSrc === '/LC.avif' || imageSrc === '/vantage.png'
                  ? 'object-contain'
                  : imageSrc === '/LCInterior.avif' || imageSrc === '/interiorvantage.avif'
                    ? 'object-cover object-top'
                    : 'object-cover'
              }`}
            />
          ))}
        </div>
        {vehicle.images.length > 1 && isHovered && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-1.5 text-white rounded-full ml-2"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-1.5 text-white rounded-full mr-2"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-light uppercase mb-1">{vehicle.name}</h3>
        <p className="text-gray-400 text-sm mb-2">{vehicle.mileage}</p>
        <p className="text-white text-lg font-medium">{vehicle.price}</p>
        <p className="text-gray-500 text-sm mt-2">{vehicle.availability}</p>
        {/* Add more features as seen in the example */}
        <div className="mt-4 pt-4 border-t border-gray-700 text-sm text-gray-400">
          <p className="flex items-center"><span className="mr-2">•</span>EPA EST. RANGE: {vehicle.epaRange}</p>
          <p className="flex items-center"><span className="mr-2">•</span>POWER: {vehicle.power}</p>
          <p className="flex items-center"><span className="mr-2">•</span>0-60 MPH: {vehicle.acceleration}</p>
        </div>
        <button className="w-full text-center text-white text-sm uppercase px-4 py-2 mt-4 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300">
          More Features
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
