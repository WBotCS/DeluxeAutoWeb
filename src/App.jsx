import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StartEngine from './components/StartEngine';
import News from './components/News';
import Grid from './components/Grid';
import Footer from './components/Footer';
import OverlayMenu from './components/OverlayMenu';

function App() {
  const [isOverlayMenuOpen, setIsOverlayMenuOpen] = useState(false);

  const handleOverlayMenuToggle = () => {
    setIsOverlayMenuOpen(!isOverlayMenuOpen);
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar onOverlayMenuToggle={handleOverlayMenuToggle} />
      <Hero />
      <StartEngine />
      <News />
      <Grid />
      <Footer />
      <OverlayMenu isOpen={isOverlayMenuOpen} onClose={handleOverlayMenuToggle} />
    </div>
  );
}

export default App;
