import React from 'react';
import { Send, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PreOrderPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-thin mb-4">Pre-Order Your Vehicle</h1>
      <p className="text-gray-400 mb-8 text-center max-w-2xl">
        Reserve your dream car today. Fill out the form below and specify your desired vehicle.
      </p>

      <div className="bg-black border border-gray-700 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-light mb-6">Pre-Order Form</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-300 mb-2">Name *</label>
            <input
              type="text"
              id="name"
              className="bg-neutral-800 border border-neutral-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-300 mb-2">Email *</label>
            <input
              type="email"
              id="email"
              className="bg-neutral-800 border border-neutral-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm text-gray-300 mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              className="bg-neutral-800 border border-neutral-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="vehicle" className="text-sm text-gray-300 mb-2">Vehicle *</label>
            <input
              type="text"
              id="vehicle"
              placeholder="e.g. LM 350h, Escalade ESV, etc"
              className="bg-neutral-800 border border-neutral-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="comments" className="text-sm text-gray-300 mb-2">Additional Comments</label>
            <textarea
              id="comments"
              rows="5"
              className="bg-neutral-800 border border-neutral-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 resize-y"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-start">
            <button
              type="submit"
              className="bg-gray-700 text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-red-600 transition-colors duration-300"
            >
              <span>Submit Pre-Order</span>
              <Send size={18} />
            </button>
          </div>
        </form>

        <div className="mt-8 text-gray-500 text-sm flex items-center space-x-2">
          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-gray-700 text-white text-xs font-bold">
            i
          </span>
          <span>Our team usually responds within 24 - 48 hours of inquiry.</span>
        </div>
      </div>

      {/* New Section for Inventory Link */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 text-lg mb-4">Check out our vehicle inventory while you wait for your dream car!</p>
        <Link to="/inventory/new-vehicles"
          className="inline-flex items-center text-white text-base uppercase px-6 py-3 border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          <span>View New Cars</span>
          <ChevronRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default PreOrderPage;
