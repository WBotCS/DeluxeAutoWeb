import React from 'react';
import Footer from './Footer';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative h-96 w-full flex flex-col items-center justify-center bg-black px-6">
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-thin">Our Story</h1>
          <p className="text-xl font-light text-gray-300 mt-2">Your Journey, Our Commitment</p>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mt-8">
          At Deluxe Auto, our mission is to provide an unparalleled car buying and ownership experience. We are committed to offering a diverse selection of quality vehicles, exceptional customer service, and transparent dealings, ensuring every customer drives away satisfied and confident in their choice.
        </p>
      </div>

      {/* History Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-thin text-center mb-12 text-gray-900">Our Legacy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/white.png" alt="Company History" className="w-full h-auto shadow-lg" />
            </div>
            <div>
              <p className="text-lg text-gray-900 leading-relaxed">
                Established in [Year] by [Founder's Name], Deluxe Auto began with a vision to connect people with their ideal vehicles. We have grown into a trusted name in the automotive industry, consistently expanding our inventory and services to meet the diverse needs of our clientele.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-6 py-16 text-white">
        <h2 className="text-4xl font-thin text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-0 bg-black shadow-md">
              <img src="/carWinding.webp" alt="Trust" className="w-full h-72 object-cover" />
              <h3 className="text-2xl font-light mt-4 mb-2 text-white text-left">Trust</h3>
              <p className="text-gray-300 pb-6 text-left">We build lasting relationships through transparent communication and unwavering integrity. Our clients can depend on us for honest advice and fair dealings.</p>
            </div>
            <div className="p-0 bg-black shadow-md">
              <img src="/lot.webp" alt="Quality" className="w-full h-72 object-cover" />
              <h3 className="text-2xl font-light mt-4 mb-2 text-white text-left">Quality</h3>
              <p className="text-gray-300 pb-6 text-left">We offer a meticulously curated selection of reliable and exceptional vehicles. Each car is hand-picked and rigorously inspected to meet our high standards.</p>
            </div>
            <div className="p-0 bg-black shadow-md">
              <img src="/carTech.jpg" alt="Service" className="w-full h-72 object-cover" />
              <h3 className="text-2xl font-light mt-4 mb-2 text-white text-left">Service</h3>
              <p className="text-gray-300 pb-6 text-left">Our dedication to customer satisfaction extends from the moment you browse our selection to long after you drive off the lot. We are here to support you throughout your ownership experience.</p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
