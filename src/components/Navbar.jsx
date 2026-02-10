import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide when scrolling down (and passed a threshold), show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 transform ${
      isScrolled ? 'bg-black/90 py-4' : 'bg-transparent py-6'
    } ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-white flex items-center gap-2 group">
            <div className="bg-yellow-500 p-1.5 rounded-b-lg">
                <Shield className="h-6 w-6 text-black fill-black" />
            </div>
            <span className="font-bold text-lg tracking-widest uppercase hidden sm:block">Ferrari</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase text-white">
          <a href="#" className="hover:text-ferrari-red transition-colors">Racing</a>
          <a href="#" className="hover:text-ferrari-red transition-colors">Sports Cars</a>
          <a href="#" className="hover:text-ferrari-red transition-colors">Collections</a>
          <a href="#" className="hover:text-ferrari-red transition-colors">Experiences</a>
          <a href="#" className="hover:text-ferrari-red transition-colors">About Us</a>
        </div>

        {/* Search & Mobile Toggle */}
        <div className="flex items-center space-x-6 text-white text-xs font-bold tracking-widest uppercase">
          <button className="hidden md:flex items-center hover:text-ferrari-red transition-colors">
            <span className="mr-2">Search</span>
            <Search size={16} />
          </button>
          
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black absolute top-full w-full py-4 px-6 flex flex-col space-y-4 text-white text-sm font-bold tracking-widest uppercase border-t border-gray-800">
          <a href="#" className="hover:text-ferrari-red">Racing</a>
          <a href="#" className="hover:text-ferrari-red">Sports Cars</a>
          <a href="#" className="hover:text-ferrari-red">Collections</a>
          <a href="#" className="hover:text-ferrari-red">Experiences</a>
          <a href="#" className="hover:text-ferrari-red">About Us</a>
          <div className="flex items-center pt-4 border-t border-gray-800">
            <span className="mr-2">Search</span>
            <Search size={16} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
