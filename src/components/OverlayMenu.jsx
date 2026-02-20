import React from 'react';
import { X, ChevronRight } from 'lucide-react';

const OverlayMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 bg-black text-white transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex`}>
      {/* Left Menu Panel */}
      <div className="w-1/3 h-full bg-zinc-900 p-8 flex flex-col">
        <div className="flex items-center mb-12">
          <button onClick={onClose} className="text-white hover:text-gray-400 mr-4">
            <X size={24} />
          </button>
          <img src="/logo.png" alt="Ferrari Logo" className="h-8 w-auto invert" />
        </div>

        <span className="text-sm uppercase tracking-widest text-gray-400 mb-8">Experiences</span>

        <nav className="flex-grow">
          <a href="#" className="flex items-center justify-between py-3 border-b border-gray-700 hover:text-red-600 transition-colors group">
            <span className="text-xl font-light uppercase">Corse Clienti</span>
            <ChevronRight size={20} className="group-hover:text-red-600" />
          </a>
          <a href="#" className="flex items-center justify-between py-3 border-b border-gray-700 hover:text-red-600 transition-colors group">
            <span className="text-xl font-light uppercase">Ferrari Esports Series</span>
            <ChevronRight size={20} className="group-hover:text-red-600" />
          </a>
          <a href="#" className="flex items-center justify-between py-3 border-b border-gray-700 hover:text-red-600 transition-colors group">
            <span className="text-xl font-light uppercase">Ferrari Museums</span>
            <ChevronRight size={20} className="group-hover:text-red-600" />
          </a>
          <a href="#" className="flex items-center justify-between py-3 border-b border-gray-700 hover:text-red-600 transition-colors group">
            <span className="text-xl font-light uppercase">Ristorante Cavallino</span>
            <ChevronRight size={20} className="group-hover:text-red-600" />
          </a>
          <a href="#" className="flex items-center justify-between py-3 border-b border-gray-700 hover:text-red-600 transition-colors group">
            <span className="text-xl font-light uppercase">Theme Parks</span>
            <ChevronRight size={20} className="group-hover:text-red-600" />
          </a>
          <a href="#" className="flex items-center justify-between py-3 border-b border-gray-700 hover:text-red-600 transition-colors group">
            <span className="text-xl font-light uppercase">Configure your Dreams</span>
            <ChevronRight size={20} className="group-hover:text-red-600" />
          </a>
        </nav>
      </div>

      {/* Right Content Panel (Placeholder) */}
      <div className="w-2/3 h-full bg-black/50 flex flex-col justify-between">
        <div className="flex-grow grid grid-cols-2">
          <div className="relative rounded-lg overflow-hidden">
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
          <div className="relative rounded-lg overflow-hidden">
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

        <div className="relative rounded-lg overflow-hidden h-1/2">
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

        {/* Events Calendar Section */}
        <div className="flex flex-col items-center justify-center py-8">
          <h3 className="text-2xl font-light uppercase tracking-widest mb-4">Events Calendar</h3>
          <button className="flex items-center text-white text-xs uppercase mt-2 group border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            <span className="mr-1">Discover More</span>
            <ChevronRight size={14} className="group-hover:text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverlayMenu;
