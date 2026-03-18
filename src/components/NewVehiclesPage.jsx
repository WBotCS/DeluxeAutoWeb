import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import VehicleCard from './VehicleCard';

const NewVehiclesPage = () => {
  const [showFilters, setShowFilters] = useState(true);
  const vehicles = [
    {
      id: 1,
      name: 'Lexus IS350 F-Sport',
      images: ['/IS350.png', '/IS350I.jpg.avif'],
      price: 'Starting from $54,000',
      mileage: 'Brand New 2025',
      availability: 'Available Now',
      epaRange: 'V6',
      power: '430 hp',
      acceleration: '4.5 secs',
      color: 'Obsidian Black',
      trim: 'F-Sport',
      engine: '3.5L V6',
      drivetrain: 'RWD',
      transmission: '8-Speed Automatic',
      fuelType: 'Gasoline',
      description: 'A new era of Ferrari mid-rear-engined berlinetta sports cars, the 296 GTB redefines the idea of fun behind the wheel to deliver pure emotions.',
    },
    {
      id: 2,
      name: 'Lexus LC500 Coupe',
      images: ['/LC.avif', '/LCInterior.avif'],
      price: 'Starting from $102,500',
      mileage: 'Brand New 2025',
      availability: 'Available Now',
      epaRange: 'V8',
      power: '471 hp',
      acceleration: '4.4 secs',
      color: 'Infrared',
      trim: 'Coupe',
      engine: '5.0L V8',
      drivetrain: 'RWD',
      transmission: '10-Speed Automatic',
      fuelType: 'Gasoline',
    },
    {
      id: 3,
      name: 'Ferrari 296 GTB',
      images: ['/296GTB.png', '/296interior.avif'],
      price: 'Starting from $346,950',
      availability: 'Available Now',
      mileage: 'Brand New 2025',
      epaRange: 'Twin Turbo V6',
      power: '819 hp',
      acceleration: '2.9 secs',
      color: 'Rosso Corsa',
      trim: 'GTB',
      engine: '3.0L Twin-Turbo V6 Hybrid',
      drivetrain: 'RWD',
      transmission: '8-Speed Dual-Clutch',
      fuelType: 'PHEV',
      description: 'The Ferrari 296 GTB is a mid-engine sports car that combines the power of a V12 engine with the agility of a 4-door coupe. It features a 7-speed dual-clutch gearbox and a 60-inch display.',
    },
    {
        id: 4,
        name: 'Aston Martin Vantage',
        images: ['/vantage.png', '/interiorvantage.avif'],
        price: 'Starting from $191,000',
        availability: 'Available Now',
        mileage: 'Brand New 2025',
        epaRange: 'Twin Turbo V8',
        power: '503 hp',
        acceleration: '3.6 secs',
        color: 'Magnetic Silver',
        trim: 'Standard',
        engine: '4.0L Twin-Turbo V8',
        drivetrain: 'RWD',
        transmission: '8-Speed Automatic',
        fuelType: 'Gasoline',
        description: 'The Aston Martin Vantage is a mid-engine sports car that combines the power of a V12 engine with the agility of a 4-door coupe. It features a 7-speed dual-clutch gearbox and a 60-inch display.',
      },
        {
        id: 5,
        name: 'Lexus LM350h',
        images: ['/LM.png', '/Lmi.jpg'],
        price: 'Starting from $300,000',
        availability: 'Available Now',
        mileage: 'Brand New 2025',
        epaRange: '4-Cylinder Hybrid',
        power: '250 hp',
        acceleration: '8.7 secs',
        color: 'Micah White',
        trim: 'Ultra Luxury',
        engine: '2.5L 4-Cylinder Hybrid',
        drivetrain: 'AWD',
        transmission: 'e-CVT',
        fuelType: 'Gasoline',
        description: '',
      },
      
      {
        id: 6,
        name: 'Lexus LX700h',
        images: ['/Lx.avif', '/010.jpg'],
        price: 'Starting from $142,950',
        availability: 'Available Now',
        mileage: 'Brand New 2025',
        epaRange: 'V6 Turbo',
        power: '457 hp',
        acceleration: ' 6.4 secs',
        color: 'White Pearl',
        trim: 'Ultra Luxury',
        engine: '3.4L twin-turbo V6',
        drivetrain: '4WD',
        transmission: '10-Speed Direct Shift Automatic',
        fuelType: 'Gasoline',
        description: '',
      },
      {
        id: 7,
        name: 'cadillac escalade esv sport premium',
        images: ['/escalade.webp', '/g.avif'],
        price: 'Starting from $224,890',
        availability: 'Available Now',
        mileage: 'Brand New 2025',
        epaRange: 'V8',
        power: '420 hp',
        acceleration: '6.1 secs',
        color: 'Black',
        trim: 'Sport Platinum',
        engine: '6.2L V8',
        drivetrain: '4WD',
        transmission: '10-Speed Automatic Transmission',
        fuelType: 'Gasoline',
        description: '',
      },
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-16">
      <h1 className="text-6xl font-thin px-6 mt-16 mb-8">New Vehicles</h1>
      <div className="flex min-h-[calc(100vh-64px-4rem)]">
          {/* Left Sidebar - Filters */}
          <div className={`bg-black shadow-lg transition-all duration-300 flex-shrink-0 ${showFilters ? 'w-1/4 p-6' : 'w-0 p-0 overflow-hidden'}`}>
              <div className={`transition-opacity duration-300 ${showFilters ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex justify-end items-center mb-6">
                  <button className="text-sm uppercase text-gray-400 hover:text-white transition-colors">Clear All</button>
                </div>



                <div className="space-y-6">
                  {/* Trim Filter */}
                  <div className="border-b border-gray-700 pb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-light">Trim</h3>
                      <ChevronRight size={20} className="transform rotate-90 text-gray-400" /> {/* Placeholder for dropdown icon */}
                    </div>
                    {/* Add dropdown content here */}
                  </div>

                  {/* Search Within Filter */}
                  <div className="border-b border-gray-700 pb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-light">Search Within</h3>
                      <ChevronRight size={20} className="transform rotate-90 text-gray-400" />
                    </div>
                  </div>

                  {/* Color Filter */}
                  <div className="border-b border-gray-700 pb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-light">Color</h3>
                      <ChevronRight size={20} className="transform rotate-90 text-gray-400" />
                    </div>
                  </div>

                  {/* Interior Filter */}
                  <div className="border-b border-gray-700 pb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-light">Interior</h3>
                      <ChevronRight size={20} className="transform rotate-90 text-gray-400" />
                    </div>
                  </div>

                  {/* Appearance Filter */}
                  <div className="border-b border-gray-700 pb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-light">Appearance</h3>
                      <ChevronRight size={20} className="transform rotate-90 text-gray-400" />
                    </div>
                  </div>

                  {/* Roof Filter */}
                  <div className="border-b border-gray-700 pb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-light">Roof</h3>
                      <ChevronRight size={20} className="transform rotate-90 text-gray-400" />
                    </div>
                  </div>

                  {/* Wheels Filter */}
                  <div className="border-b border-gray-700 pb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-light">Wheels</h3>
                      <ChevronRight size={20} className="transform rotate-90 text-gray-400" />
                    </div>
                  </div>

                  {/* Driver Assistance System Filter */}
                  <div className="border-b border-gray-700 pb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-light">Driver Assistance System</h3>
                      <ChevronRight size={20} className="transform rotate-90 text-gray-400" />
                    </div>
                  </div>

                  {/* Sound System Filter */}
                  <div className="border-b border-gray-700 pb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-light">Sound System</h3>
                      <ChevronRight size={20} className="transform rotate-90 text-gray-400" />
                    </div>
                  </div>

                  {/* Seating Filter */}
                  <div className="pb-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-light">Seating</h3>
                      <ChevronRight size={20} className="transform rotate-90 text-gray-400" />
                    </div>
                  </div>


                </div>
              </div>
          </div>

        {/* Right Content Area - Vehicle Listings */}
        <div className={`p-6 transition-all duration-300 ${showFilters ? 'flex-1' : 'w-full'}`}>
          <div className="flex justify-between items-center mb-8">
            <button onClick={() => setShowFilters(!showFilters)} className="flex items-center text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              <ChevronRight size={16} className={`transform ${showFilters ? 'rotate-180' : 'rotate-0'} mr-2`} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            <div className="relative">
              <select className="bg-transparent border border-gray-700 text-gray-400 rounded-full px-4 py-2 text-sm appearance-none pr-8">
                <option>Sort By: Price (Low - High)</option>
                <option>Sort By: Price (High - Low)</option>
              </select>
              <ChevronRight size={16} className="transform rotate-90 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 ${showFilters ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}>
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewVehiclesPage;