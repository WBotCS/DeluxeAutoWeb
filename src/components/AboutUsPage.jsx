import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16 font-sans">
      {/* Hero Section */}
      <div className="relative h-96 w-full flex flex-col items-center justify-center bg-black px-6">
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-thin uppercase">Our Story</h1>
        </div>
        <p className="text-base font-thin md:text-lg text-gray-300 leading-relaxed text-center max-w-4xl mt-8 font-light">
          At Deluxe Auto, our mission is to provide an unparalleled car buying and ownership experience. We are committed to offering a diverse selection of quality vehicles, exceptional customer service, and transparent dealings, ensuring every customer drives away satisfied and confident in their choice.
        </p>
      </div>

      {/* History Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-thin text-center mb-12 text-gray-900 uppercase">Our Legacy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/white.png" alt="Company History" className="w-full h-auto shadow-lg" />
            </div>
            <div>
              <p className="text-base font-thin md:text-lg text-gray-600 leading-relaxed font-light">
                Established in [Year] by [Founder's Name], Deluxe Auto began with a vision to connect people with their ideal vehicles. We have grown into a trusted name in the automotive industry, consistently expanding our inventory and services to meet the diverse needs of our clientele.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-6 py-16 text-white">
        <h2 className="text-4xl font-thin text-center mb-12 uppercase">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-0 bg-black shadow-md">
              <img src="/carw.avif" alt="Trust" className="w-full h-72 object-cover" />
              <h3 className="text-2xl font-thin mt-4 mb-2 text-white text-left">Trust</h3>
              <p className="text-base font-thin md:text-lg text-gray-300 pb-6 text-left font-light">We build lasting relationships through transparent communication and unwavering integrity. Our clients can depend on us for honest advice and fair dealings.</p>
            </div>
            <div className="p-0 bg-black shadow-md">
              <img src="/car.jpg" alt="Quality" className="w-full h-72 object-cover" />
              <h3 className="text-2xl font-thin mt-4 mb-2 text-white text-left">Quality</h3>
              <p className="text-base font-thin md:text-lg text-gray-300 pb-6 text-left font-light">We offer a meticulously curated selection of reliable and exceptional vehicles. Each car is hand-picked and rigorously inspected to meet our high standards.</p>
            </div>
            <div className="p-0 bg-black shadow-md">
              <img src="/carTech.avif" alt="Service" className="w-full h-72 object-cover" />
              <h3 className="text-2xl font-thin mt-4 mb-2 text-white text-left">Service</h3>
              <p className="text-base font-thin md:text-lg text-gray-300 pb-6 text-left font-light">Our dedication to customer satisfaction extends from the moment you browse our selection to long after you drive off the lot. We are here to support you throughout your ownership experience.</p>
            </div>
        </div>
      </div>

      {/* Large Image Section */}
      <div className="relative w-full bg-black flex justify-center items-center overflow-hidden">
        <img src="/lxx.jpg" alt="Large Promotional Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-between text-white p-20 bg-black/40">
          <div>
            <h2 className="text-5xl font-thin uppercase mb-4 leading-tight">WE VALUE THE JOURNEY</h2>
            <p className="text-lg font-thin leading-relaxed max-w-xl">
              Excellence is our standard, ensuring that the relationship we build today supports every mile you drive tomorrow. Your legacy is our priority.
            </p>
          </div>
          <div className="flex justify-end">
            <Link to="/" className="text-black bg-slate-50 px-6 py-3 uppercase font-thin text-sm rounded-full hover:bg-slate-50 transition-colors">
              Discover Deluxe
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
