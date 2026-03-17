import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Shield } from 'lucide-react';

const Navbar = ({ onOverlayMenuToggle }) => {
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
          <Link to="/" className="text-white" onClick={() => onOverlayMenuToggle(null)}>
            <img src="/logo.png" alt="Dealership Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-light tracking-widest uppercase text-white">
          <Link to="#" className="hover:text-ferrari-red transition-colors" onClick={() => onOverlayMenuToggle('experiences')}>Experiences</Link>
          <Link to="#" className="hover:text-ferrari-red transition-colors" onClick={() => onOverlayMenuToggle('inventory')}>Inventory</Link>
          <Link to="/pre-order" className="hover:text-ferrari-red transition-colors" onClick={() => onOverlayMenuToggle(null)}>Pre-Order</Link>
          <Link to="/meet-the-team" className="hover:text-ferrari-red transition-colors" onClick={() => onOverlayMenuToggle(null)}>Meet the Team</Link>
          <Link to="/about-us" className="hover:text-ferrari-red transition-colors" onClick={() => onOverlayMenuToggle(null)}>About Us</Link>
        </div>

        {/* Search & Mobile Toggle */}
        <div className="flex items-center space-x-6 text-white text-sm font-light tracking-widest uppercase">
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
        <div className="md:hidden bg-black absolute top-full w-full py-4 px-6 flex flex-col space-y-4 text-white text-base font-light tracking-widest uppercase border-t border-gray-800">
          <Link to="#" className="hover:text-ferrari-red" onClick={() => onOverlayMenuToggle('experiences')}>Experiences</Link>
          <Link to="#" className="hover:text-ferrari-red" onClick={() => onOverlayMenuToggle('inventory')}>Inventory</Link>
          <Link to="/pre-order" className="hover:text-ferrari-red transition-colors" onClick={() => onOverlayMenuToggle(null)}>Pre-Order</Link>
          <Link to="/meet-the-team" className="hover:text-ferrari-red transition-colors" onClick={() => onOverlayMenuToggle(null)}>Meet the Team</Link>
          <Link to="/about-us" className="hover:text-ferrari-red" onClick={() => onOverlayMenuToggle(null)}>About Us</Link>
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
