import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StartEngine from './components/StartEngine';
import News from './components/News';
import Grid from './components/Grid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <StartEngine />
      <News />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
