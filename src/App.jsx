import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StartEngine from './components/StartEngine';
import News from './components/News';
import Grid from './components/Grid';
import Footer from './components/Footer';
import OverlayMenu from './components/OverlayMenu';
import NewVehiclesPage from './components/NewVehiclesPage';
import PreOrderPage from './components/PreOrderPage'; // New Import

const experienceMenuData = [
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

const inventoryMenuData = [
  {
    id: 'new-vehicles',
    title: 'New Vehicles',
    mainImage: '/ferrari-296-gtb-review-specs-pricing-features-videos-and-more.webp',
    path: '/inventory/new-vehicles',
    subCategories: [
      { name: 'New Vehicles', image: '/ferrari-296-gtb-review-specs-pricing-features-videos-and-more.webp', path: '/inventory/new-vehicles' },
    ],
  },

  {
    id: 'all-pre-owned',
    title: 'All Pre-Owned',
    mainImage: '/01-italia.webp',
    path: '/inventory/all-pre-owned',
    subCategories: [
      { name: 'All Pre-Owned', image: '/01-italia.webp', path: '/inventory/all-pre-owned' },
      { name: 'Certified Pre-Owned', image: '/Sainz-2024-mexico.webp', path: '/inventory/certified-pre-owned' },
    ],
  },

  {
    id: 'vehicle-finder-service',
    title: 'Vehicle Finder Service',
    mainImage: '/sf8_1.webp',
    path: '/inventory/vehicle-finder-service',
    subCategories: [
      { name: 'Vehicle Finder Service', image: '/sf8_1.webp', path: '/inventory/vehicle-finder-service' },
      { name: 'Trade-In', image: '/Ferrari-MAIN-IMAGE-1.jpg', path: '/inventory/trade-in-valuation' },
    ],
  },
];

const experienceDefaultImages = [
  { name: 'Ferrari Esports Series', image: '/hamilton-leclerc-ferrari-suits-2025.avif' },
  { name: 'Scuderia Ferrari, the complete history', image: '/sf8_1.webp' },
  { name: 'Book a table at Ristorante Cavallino', image: '/01-italia.webp' },
];

const inventoryDefaultImages = [
  { name: 'Service Center', image: '/Ferrari-MAIN-IMAGE-1.jpg' },
  { name: 'Certified Pre-Owned', image: '/Sainz-2024-mexico.webp' },
  { name: 'New Arrivals', image: '/01-italia.webp' },
];

function App() {
  const [currentMenuType, setCurrentMenuType] = useState(null);

  const handleOverlayMenuToggle = (menuType = null) => {
    setCurrentMenuType(menuType);
  };

  const getMenuProps = () => {
    switch (currentMenuType) {
      case 'experiences':
        return { menuData: experienceMenuData, title: 'Experiences', defaultImages: experienceDefaultImages };
      case 'inventory':
        return { menuData: inventoryMenuData, title: 'Inventory', defaultImages: inventoryDefaultImages };
      default:
        return { menuData: [], title: '', defaultImages: experienceDefaultImages };
    }
  };

  const { menuData, title, defaultImages } = getMenuProps();

  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar onOverlayMenuToggle={handleOverlayMenuToggle} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <StartEngine />
              <News />
              <Grid />
              <Footer />
            </>
          } />
          <Route path="/inventory/new-vehicles" element={<NewVehiclesPage />} />
          <Route path="/pre-order" element={<PreOrderPage />} />
        </Routes>
        <OverlayMenu isOpen={!!currentMenuType} onClose={() => handleOverlayMenuToggle(null)} menuData={menuData} title={title} defaultImages={defaultImages} />
      </div>
    </Router>
  );
}

export default App;
