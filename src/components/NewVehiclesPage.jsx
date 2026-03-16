import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import VehicleCard from './VehicleCard';

const NewVehiclesPage = () => {
  const [showFilters, setShowFilters] = useState(true);
  const vehicles = [
    {
      id: 1,
      name: 'IS350 F-Sport',
      images: ['/IS350.png', '/IS350I.jpg.avif'],
      price: 'Starting from $54,000',
      description: 'A new era of Ferrari mid-rear-engined berlinetta sports cars, the 296 GTB redefines the idea of fun behind the wheel to deliver pure emotions.',
    },
    {
      id: 2,
      name: 'Ferrari SF90 Stradale',
      images: ['/LC.avif', '/LCInterior.avif'],
      price: 'Starting from $510,000',
      description: 'The SF90 Stradale is the first series-production PHEV (Plug-in Hybrid Electric Vehicle) from Ferrari. It guarantees a performance unmatched by any other production car.',
    },
    {
      id: 3,
      name: 'Ferrari Roma',
      images: ['/Ferrari-MAIN-IMAGE-1.jpg'],
      price: 'Starting from $222,000',
      description: 'The Ferrari Roma is a 2+ coupé with a sleek, contemporary design and a sophisticated interior. It embodies the concept of a grand touring car.',
    },
    {
        id: 4,
        name: 'Ferrari Portofino M',
        images: ['/the driving experience.webp'],
        price: 'Starting from $245,000',
        description: 'The Ferrari Portofino M, the evolution of the Ferrari Portofino, is the first spider in the Prancing Horse\'s history to feature an 8-speed dual-clutch gearbox.',
      },
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-16">
      <h1 className="text-6xl font-thin px-6 mt-16 mb-8">Available Vehicles</h1>
      <div className="flex min-h-[calc(100vh-64px-4rem)]">
          {/* Left Sidebar - Filters */}
          <div className={`bg-black shadow-lg transition-all duration-300 flex-shrink-0 ${showFilters ? 'w-1/4 p-6' : 'w-0 overflow-hidden'}`}>
            {showFilters && (
              <>
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
              </>
            )}
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