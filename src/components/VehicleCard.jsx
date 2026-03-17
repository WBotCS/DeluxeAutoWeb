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
        
        <div className="flex justify-around items-center text-center mt-6 py-4 border-y border-gray-700">
          <div className="flex-1">
            <p className="text-xs text-gray-400 uppercase">ENGINE</p>
            <p className="text-lg font-medium text-white">{vehicle.epaRange}</p>
          </div>
          <div className="border-l border-gray-700 h-10"></div>
          <div className="flex-1">
            <p className="text-xs text-gray-400 uppercase">POWER</p>
            <p className="text-lg font-medium text-white">{vehicle.power}</p>
          </div>
          <div className="border-l border-gray-700 h-10"></div>
          <div className="flex-1">
            <p className="text-xs text-gray-400 uppercase">0-60 MPH</p>
            <p className="text-lg font-medium text-white">{vehicle.acceleration}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-400 mt-6">
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-600 mr-2"></span>
            <p>Color: <span className="text-white">{vehicle.color}</span></p>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-600 mr-2"></span>
            <p>Trim: <span className="text-white">{vehicle.trim}</span></p>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-600 mr-2"></span>
            <p>Engine: <span className="text-white">{vehicle.engine}</span></p>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-600 mr-2"></span>
            <p>Drivetrain: <span className="text-white">{vehicle.drivetrain}</span></p>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-600 mr-2"></span>
            <p>Transmission: <span className="text-white">{vehicle.transmission}</span></p>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-600 mr-2"></span>
            <p>Fuel Type: <span className="text-white">{vehicle.fuelType}</span></p>
          </div>
        </div>

        <button className="w-full text-center text-white text-sm uppercase px-4 py-2 mt-4 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300">
          More Features
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
