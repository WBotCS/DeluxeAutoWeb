import React from 'react';
import { ChevronRight } from 'lucide-react';

const GridItem = ({ category, title, image, size }) => {
    return (
        <div className={`relative group overflow-hidden ${size === 'large' ? 'col-span-1 md:col-span-2' : 'col-span-1'} h-[400px] md:h-[600px] cursor-pointer`}>
            {/* Image */}
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

            {/* Content */}
            <div className="absolute bottom-12 left-0 w-full text-center text-white p-4">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">{category}</h4>
                <h3 className="text-2xl md:text-4xl font-light uppercase mb-6">{title}</h3>
                
                 <button className="inline-flex items-center text-xs font-bold tracking-widest uppercase border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                    Discover
                    <span className="ml-2">
                        <ChevronRight size={12} />
                    </span>
                </button>
            </div>
        </div>
    )
}

const Grid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-black">
      {/* Top Left - Collections */}
      <GridItem 
        category="Inventory"
        title="New Arrivals"
        image="/01-italia.webp"
      />

      {/* Top Right - Magazine */}
      <GridItem 
        category="Services"
        title="Excellence in Service"
        image="/F677_still_02_v11_169.avif"
      />

      {/* Bottom Left - Sports Cars */}
      <GridItem 
        category="Showroom"
        title="The Featured Fleet"
        image="/Ferrari-MAIN-IMAGE-1.jpg"
      />

      {/* Bottom Right - Ferrari Approved */}
      <GridItem 
        category="Deluxe Approved"
        title="Certified Pre-Owned"
        image="/Sainz-2024-mexico.webp"
      />
    </div>
  );
};

export default Grid;
