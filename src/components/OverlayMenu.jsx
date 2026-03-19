import React, { useState, useRef } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OverlayMenu = ({ isOpen, onClose, menuData, title, defaultImages }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const hoverTimeoutRef = useRef(null);
  return (
    <div className={`fixed inset-0 z-50 bg-black text-white transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex`}>
      {/* Left Menu Panel */}
      <div className="w-1/4 h-full bg-black p-8 flex flex-col">
        <div className="flex items-center mb-12">
          <button onClick={onClose} className="text-white hover:text-gray-400 mr-4">
            <X size={24} />
          </button>
          <img src="/logo.png" alt="Ferrari Logo" className="h-8 w-auto invert" />
        </div>

        <span className="text-sm uppercase tracking-widest text-gray-400 mb-8">{title}</span>

        <nav className="flex-grow">
          {menuData.map((category) => (
            category.id === 'new-vehicles' || category.id === 'pre-owned' ? (
              <Link
                key={category.id}
                to={category.path || '#'}
                onClick={onClose}
                className="flex items-center justify-between py-3 border-b border-gray-700 hover:text-red-600 transition-colors group"
              >
                <span className="text-xl font-light uppercase">{category.title}</span>
                <ChevronRight size={20} className="group-hover:text-red-600" />
              </Link>
            ) : (
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
            )
          ))}
        </nav>
      </div>

      {/* Sub-categories Panel */}
      {hoveredCategory && (
        <div
          className="w-1/5 h-full bg-zinc-900 p-8 flex flex-col justify-start"
          onMouseEnter={() => clearTimeout(hoverTimeoutRef.current)}
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <span className="text-sm uppercase tracking-widest text-gray-400 mb-8">{hoveredCategory.title}</span>
          <nav className="flex-grow space-y-4">
            {hoveredCategory.subCategories.map((subCat, index) => (
              <Link
                key={index}
                to={subCat.path || '#'}
                onClick={onClose}
                className="block text-lg font-light text-white hover:text-red-600 transition-colors uppercase"
              >
                {subCat.name}
              </Link>
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
              <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                <div>
                  <h3 className="text-lg font-light uppercase">
                    {hoveredCategory.title}
                  </h3>
                  <Link to={hoveredCategory.path || '#'} onClick={onClose} className="flex items-center text-white text-xs uppercase mt-2 group">
                    <span className="mr-1">Discover</span>
                    <ChevronRight size={14} className="group-hover:text-red-600" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-grow flex flex-col">
              <div className="grid grid-cols-2 flex-grow">
                {defaultImages.slice(0, 2).map((item, index) => (
                <div key={index} className="relative overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                      <div>
                      <h3 className="text-lg font-light uppercase">{item.name}</h3>
                      <Link to="#" onClick={onClose} className="flex items-center text-white text-xs uppercase mt-2 group">
                        <span className="mr-1">Discover</span>
                        <ChevronRight size={14} className="group-hover:text-red-600" />
                      </Link>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
              {!hoveredCategory && title === 'Experiences' && defaultImages.length > 2 && (
                <div className="relative overflow-hidden flex-grow mt-0">
                  <img src={defaultImages[2].image} alt={defaultImages[2].name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-end p-4">
                    <div>
                      <h3 className="text-lg font-light uppercase">{defaultImages[2].name}</h3>
                      <button className="flex items-center text-white text-xs uppercase mt-2 group">
                        <span className="mr-1">Discover</span>
                        <ChevronRight size={14} className="group-hover:text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Events Calendar Section */}
        {!hoveredCategory && title === 'Experiences' && (
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center py-8 px-4">
            <h3 className="text-2xl font-light uppercase tracking-widest mb-4">Events Calendar</h3>
            <Link to="/events-calendar" onClick={onClose} className="flex items-center text-white text-xs uppercase mt-2 group border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              <span className="mr-1">Discover More</span>
              <ChevronRight size={14} className="group-hover:text-red-600" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OverlayMenu;
