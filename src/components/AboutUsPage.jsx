import React from 'react';

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
                Established in [Year] by [Founder's Name], Deluxe AutoWeb began with a vision to connect people with their ideal vehicles. We have grown into a trusted name in the automotive industry, consistently expanding our inventory and services to meet the diverse needs of our clientele.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h2 className="text-4xl font-thin text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-black border border-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-light mb-4">Trust</h3>
            <p className="text-gray-400">Building lasting relationships through honesty and integrity.</p>
          </div>
          <div className="text-center p-6 bg-black border border-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-light mb-4">Quality</h3>
            <p className="text-gray-400">Offering a curated selection of reliable and exceptional vehicles.</p>
          </div>
          <div className="text-center p-6 bg-black border border-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-light mb-4">Service</h3>
            <p className="text-gray-400">Dedicated to customer satisfaction from selection to ownership.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
