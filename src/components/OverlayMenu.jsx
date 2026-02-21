import React, { useState, useRef } from 'react';
import { X, ChevronRight } from 'lucide-react';

const menuData = [
  {
    id: 'driving-experience',
    title: 'The Driving Experience',
    mainImage: '/the driving experience.webp',
    subCategories: [
      { name: 'VIP Test Drives', image: '/ferrari-296-gtb-review-specs-pricing-features-videos-and-more.webp' },
      { name: 'Home Delivery/Trial', image: '/Ferrari-MAIN-IMAGE-1.jpg' },
    ],
  },
  {
    id: 'events-community',
    title: 'Events & Community',
    mainImage: '/events and community.avif',
    subCategories: [
      { name: 'Owners\' Track Days', image: '/sf8_1.webp' },
      { name: 'Cars & Coffee / Gala Nights', image: '/01-italia.webp' },
      { name: 'Road Rallies', image: '/Sainz-2024-mexico.webp' },
    ],
  },
  {
    id: 'ownership-perks',
    title: 'Ownership Perks',
    mainImage: '/ownership perk.jpg',
    subCategories: [
      { name: 'The Owner\'s Lounge', image: '/F677_still_02_v11_169.avif' },
      { name: 'Concierge Service', image: '/hamilton-leclerc-ferrari-suits-2025.avif' },
      { name: 'Technical Clinics', image: '/Ferrari-MAIN-IMAGE-1.jpg' },
    ],
  },
  {
    id: 'customization-heritage',
    title: 'Customization & Heritage',
    mainImage: '/customization and heritage.webp',
    subCategories: [
      { name: 'The Design Studio', image: '/01-italia.webp' },
      { name: 'The Heritage Collection', image: '/sf8_1.webp' },
    ],
  },
];

const OverlayMenu = ({ isOpen, onClose }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const hoverTimeoutRef = useRef(null);
  return (
    <div className={`fixed inset-0 z-50 bg-black text-white transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex`}>
      {/* Left Menu Panel */}
      <div className="w-1/4 h-full bg-zinc-900 p-8 flex flex-col">
        <div className="flex items-center mb-12">
          <button onClick={onClose} className="text-white hover:text-gray-400 mr-4">
            <X size={24} />
          </button>
          <img src="/logo.png" alt="Ferrari Logo" className="h-8 w-auto invert" />
        </div>

        <span className="text-sm uppercase tracking-widest text-gray-400 mb-8">Experiences</span>

        <nav className="flex-grow">
          {menuData.map((category) => (
            <a
              key={category.id}
              href="#"
              className="flex items-center justify-between py-3 border-b border-gray-700 hover:text-red-600 transition-colors group"
              onMouseEnter={() => {
                clearTimeout(hoverTimeoutRef.current);
                setHoveredCategory(category);
              }}
              onMouseLeave={() => {
                hoverTimeoutRef.current = setTimeout(() => {
                  setHoveredCategory(null);
                }, 200);
              }}
            >
              <span className="text-xl font-light uppercase">{category.title}</span>
              <ChevronRight size={20} className="group-hover:text-red-600" />
            </a>
          ))}
        </nav>
      </div>

      {/* Sub-categories Panel */}
      {hoveredCategory && (
        <div
          className="w-1/5 h-full bg-zinc-800 p-8 flex flex-col justify-start"
          onMouseEnter={() => clearTimeout(hoverTimeoutRef.current)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <span className="text-sm uppercase tracking-widest text-gray-400 mb-8">{hoveredCategory.title}</span>
          <nav className="flex-grow space-y-4">
            {hoveredCategory.subCategories.map((subCat, index) => (
              <a key={index} href="#" className="block text-lg font-light text-white hover:text-red-600 transition-colors uppercase">
                {subCat.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Right Content Panel */}
      <div className={`h-full bg-black/50 flex flex-col relative ${hoveredCategory ? 'w-[55%]' : 'w-3/4'}`}>
        <div className="flex-grow flex flex-col">
          {/* Dynamic Image Display */}
          {hoveredCategory ? (
            <div className="flex-grow relative overflow-hidden">
              <img
                src={hoveredCategory.mainImage}
                alt={hoveredCategory.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          ) : (
            <div className="flex-grow flex flex-col">
              <div className="grid grid-cols-2 flex-grow">
                <div className="relative overflow-hidden">
                  <img src="/hamilton-leclerc-ferrari-suits-2025.avif" alt="Ferrari Esports Series" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                    <div>
                      <h3 className="text-lg font-light uppercase">Ferrari Esports Series</h3>
                      <button className="flex items-center text-white text-xs uppercase mt-2 group">
                        <span className="mr-1">Discover</span>
                        <ChevronRight size={14} className="group-hover:text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <img src="/sf8_1.webp" alt="Scuderia Ferrari, the complete history" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                    <div>
                      <h3 className="text-lg font-light uppercase">Scuderia Ferrari, the complete history</h3>
                      <button className="flex items-center text-white text-xs uppercase mt-2 group">
                        <span className="mr-1">Discover</span>
                        <ChevronRight size={14} className="group-hover:text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden flex-grow mt-0">
                <img src="/01-italia.webp" alt="Ristorante Cavallino" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                  <div>
                    <h3 className="text-lg font-light uppercase">Book a table at Ristorante Cavallino</h3>
                    <button className="flex items-center text-white text-xs uppercase mt-2 group">
                      <span className="mr-1">Discover</span>
                      <ChevronRight size={14} className="group-hover:text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Events Calendar Section */}
        {!hoveredCategory && (
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center py-8 px-4">
            <h3 className="text-2xl font-light uppercase tracking-widest mb-4">Events Calendar</h3>
            <button className="flex items-center text-white text-xs uppercase mt-2 group border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              <span className="mr-1">Discover More</span>
              <ChevronRight size={14} className="group-hover:text-red-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OverlayMenu;
