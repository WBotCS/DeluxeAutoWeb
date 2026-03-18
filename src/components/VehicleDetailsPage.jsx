import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VehicleDetailsPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? vehicle.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === vehicle.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // In a real application, you would fetch vehicle data based on the ID
  // For now, we'll use dummy data or find it from the existing vehicles array
  const vehicles = [
    {
        id: 1,
        name: 'IS350 F-Sport',
        images: ['/IS350.png', '/IS350I.jpg.avif'],
        price: 'Starting from $54,000',
        mileage: 'Brand New 2025',
        availability: 'Available Now',
        epaRange: 'V6',
        power: '430 hp',
        acceleration: '4.5 secs',
        color: 'Obsidian Black',
        trim: 'F-Sport',
        engine: '3.5L V6',
        drivetrain: 'RWD',
        transmission: '8-Speed Automatic',
        fuelType: 'Gasoline',
        description: 'A new era of Ferrari mid-rear-engined berlinetta sports cars, the 296 GTB redefines the idea of fun behind the wheel to deliver pure emotions.',
        details: {
          year: 2024,
          used: false,
          odometer: 'Brand New',
          vin: 'N/A',
          historyReport: '#',
          standards: '#',
          configuration: {
            drivetrain: 'Rear-Wheel Drive',
            suspension: 'Adaptive Variable Suspension',
            steering: 'Electric Power Steering',
            brakes: 'Performance Brakes',
            wheels: '19-inch Forged Alloy',
            tires: 'Summer Performance',
            exterior: 'F-Sport Design Elements',
            interior: 'F-Sport Leather-Trimmed',
            audio: 'Mark Levinson Audio System',
            safety: 'Lexus Safety System+ 2.5',
            warranty: '4-Year/50,000-Mile Basic'
          }
        }
      },
      {
        id: 2,
        name: 'LC500 Coupe',
        images: ['/LC.avif', '/LCInterior.avif'],
        price: 'Starting from $102,500',
        mileage: 'Brand New 2025',
        availability: 'Available Now',
        epaRange: 'V8',
        power: '471 hp',
        acceleration: '4.4 secs',
        color: 'Infrared',
        trim: 'Coupe',
        engine: '5.0L V8',
        drivetrain: 'RWD',
        transmission: '10-Speed Automatic',
        fuelType: 'Gasoline',
        details: {
          year: 2024,
          used: false,
          odometer: 'Brand New',
          vin: 'N/A',
          historyReport: '#',
          standards: '#',
          configuration: {
            drivetrain: 'Rear-Wheel Drive',
            suspension: 'Adaptive Variable Suspension',
            steering: 'Electric Power Steering',
            brakes: 'Performance Brakes',
            wheels: '21-inch Forged Alloy',
            tires: 'Summer Performance',
            exterior: 'Unique LC Design',
            interior: 'Semi-Aniline Leather',
            audio: 'Mark Levinson Reference Audio System',
            safety: 'Lexus Safety System+ 2.5',
            warranty: '4-Year/50,000-Mile Basic'
          }
        }
      },
      {
        id: 3,
        name: 'Ferrari 296 GTB',
        images: ['/296GTB.png', '/296interior.avif'],
        price: 'Starting from $346,950',
        availability: 'Available Now',
        mileage: 'Brand New 2025',
        epaRange: 'Twin Turbo V6',
        power: '819 hp',
        acceleration: '2.9 secs',
        color: 'Rosso Corsa',
        trim: 'GTB',
        engine: '3.0L Twin-Turbo V6 Hybrid',
        drivetrain: 'RWD',
        transmission: '8-Speed Dual-Clutch',
        fuelType: 'PHEV',
        description: 'The Ferrari 296 GTB is a mid-engine sports car that combines the power of a V12 engine with the agility of a 4-door coupe. It features a 7-speed dual-clutch gearbox and a 60-inch display.',
        details: {
          year: 2024,
          used: false,
          odometer: 'Brand New',
          vin: 'N/A',
          historyReport: '#',
          standards: '#',
          configuration: {
            drivetrain: 'Rear-Wheel Drive',
            suspension: 'Magnetorheological Suspension',
            steering: 'Ferrari Dynamic Enhancer',
            brakes: 'Carbon Ceramic Brakes',
            wheels: '20-inch Forged Wheels',
            tires: 'Pirelli P Zero Corsa',
            exterior: 'Aerodynamic Design',
            interior: 'Carbon Fiber Trim',
            audio: 'Premium JBL Audio System',
            safety: 'Advanced Driver Assistance Systems',
            warranty: '3-Year/Unlimited-Mile Basic'
          }
        }
      },
      {
          id: 4,
          name: 'Aston Martin Vantage',
          images: ['/vantage.png', '/interiorvantage.avif'],
          price: 'Starting from $191,000',
          availability: 'Available Now',
          mileage: 'Brand New 2025',
          epaRange: 'Twin Turbo V8',
          power: '503 hp',
          acceleration: '3.6 secs',
          color: 'Magnetic Silver',
          trim: 'Standard',
          engine: '4.0L Twin-Turbo V8',
          drivetrain: 'RWD',
          transmission: '8-Speed Automatic',
          fuelType: 'Gasoline',
          description: 'The Aston Martin Vantage is a mid-engine sports car that combines the power of a V12 engine with the agility of a 4-door coupe. It features a 7-speed dual-clutch gearbox and a 60-inch display.',
          details: {
            year: 2024,
            used: false,
            odometer: 'Brand New',
            vin: 'N/A',
            historyReport: '#',
            standards: '#',
            configuration: {
              drivetrain: 'Rear-Wheel Drive',
              suspension: 'Adaptive Damping System',
              steering: 'Speed-Sensitive Electric Power Steering',
              brakes: 'Ventilated Disc Brakes',
              wheels: '20-inch Alloy Wheels',
              tires: 'Pirelli P Zero',
              exterior: 'Vantage Design Elements',
              interior: 'Leather and Alcantara Trim',
              audio: 'Aston Martin Premium Audio',
              safety: 'Front and Rear Parking Sensors',
              warranty: '3-Year/Unlimited-Mile Basic'
            }
          }
        },
          { // Added Lexus LM350h
            id: 5,
            name: 'Lexus LM350h',
            images: ['/LM.png', '/Lmi.jpg'],
            price: 'Starting from $300,000',
            availability: 'Available Now',
            mileage: 'Brand New 2025',
            epaRange: '4-Cylinder Hybrid',
            power: '250 hp',
            acceleration: '8.7 secs',
            color: 'Micah White',
            trim: 'Ultra Luxury',
            engine: '2.5L 4-Cylinder Hybrid',
            drivetrain: 'AWD',
            transmission: 'e-CVT',
            fuelType: 'Gasoline',
            description: 'The 2025 Lexus LM350h is a flagship luxury hybrid minivan designed for ultimate rear-seat comfort, often described as a \"private jet\" on wheels. Featuring a 2.5L hybrid powertrain with ~247 horsepower and E-Four all-wheel drive, it prioritizes, smooth, quiet, and efficient transport, primarily for high-end chauffeur markets.',
            details: {
              year: 2025,
              used: false,
              odometer: 'Brand New',
              vin: 'N/A',
              historyReport: '#',
              standards: '#',
              configuration: {
                drivetrain: 'All-Wheel Drive',
                suspension: 'Adaptive Variable Suspension',
                steering: 'Electric Power Steering',
                brakes: 'Ventilated Disc Brakes',
                wheels: '19-inch Alloy Wheels',
                tires: 'All-Season',
                exterior: 'LM Design Elements',
                interior: "Semi-Aniline Leather with Captain's Chairs",
                audio: 'Mark Levinson Reference Audio System',
                safety: 'Lexus Safety System+ 3.0',
                warranty: '4-Year/50,000-Mile Basic'
              }
            }
          },
          
          { // Added Lexus LX700h
            id: 6,
            name: 'Lexus LX700h ',
            images: ['/Lx.avif', '/010.jpg'],
            price: 'Starting from $142,950',
            availability: 'Available Now',
            mileage: 'Brand New 2025',
            epaRange: 'V6 Turbo',
            power: '457 hp',
            acceleration: ' 6.4 secs',
            color: 'White Pearl',
            trim: 'Ultra Luxury',
            engine: '3.4L twin-turbo V6',
            drivetrain: '4WD',
            transmission: '10-speed Direct Shift Automatic',
            fuelType: 'Gasoline',
            description: 'The 2025 Lexus LX 700h is a new flagship luxury hybrid SUV featuring a 3.4L twin-turbo V6 hybrid powertrain producing 457 horsepower and 583 lb-ft of torque. It introduces an off-road-focused Overtrail trim, 10-speed transmission, standard 4WD, and 8,000 lbs towing capacity.',
            details: {
              year: 2025,
              used: false,
              odometer: 'Brand New',
              vin: 'N/A',
              historyReport: '#',
              standards: '#',
              configuration: {
                drivetrain: '4-Wheel Drive',
                suspension: 'Adaptive Variable Suspension',
                steering: 'Electronic Power Steering',
                brakes: 'Ventilated Disc Brakes',
                wheels: '22-inch Forged Alloy Wheels',
                tires: 'All-Terrain',
                exterior: 'LX Design Elements',
                interior: 'Semi-Aniline Leather',
                audio: 'Mark Levinson Surround Sound System',
                safety: 'Lexus Safety System+ 3.0',
                warranty: '4-Year/50,000-Mile Basic'
              }
            }
          },
          { // Added Cadillac Escalade ESV Sport Premium
            id: 7,
            name: 'Cadillac Escalade ESV Sport Premium',
            images: ['/escalade.webp', '/g.avif'],
            price: 'Starting from $224,890',
            availability: 'Available Now',
            mileage: 'Brand New 2025',
            epaRange: 'V8',
            power: '420 hp',
            acceleration: '6.1 secs',
            color: 'Black',
            trim: 'Sport Platinum',
            engine: '6.2L V8',
            drivetrain: '4WD',
            transmission: '10-Speed Automatic Transmission',
            fuelType: 'Gasoline',
            description: 'The 2025 Cadillac Escalade ESV Sport Premium is the top-tier extended-length luxury SUV, combining maximum passenger space with high-performance styling. It features a 6.2L V8 engine (or available 682-HP supercharged V8), gloss black exterior accents, 22-inch to 24-inch wheels, and an extensive 55-inch curved display interior.',
            details: {
              year: 2025,
              used: false,
              odometer: 'Brand New',
              vin: 'N/A',
              historyReport: '#',
              standards: '#',
              configuration: {
                drivetrain: '4-Wheel Drive',
                suspension: 'Air Ride Adaptive Suspension',
                steering: 'Magnetic Ride Control',
                brakes: 'Performance Brakes',
                wheels: '22-inch Alloy Wheels',
                tires: 'All-Season',
                exterior: 'Sport Platinum Trim',
                interior: 'Full Leather Interior',
                audio: 'AKG Studio Reference 36-speaker System',
                safety: 'Super Cruise Driver Assistance',
                warranty: '4-Year/50,000-Mile Basic'
            }
          }
        },
  ];

  const vehicle = vehicles.find((v) => v.id === parseInt(id));

  if (!vehicle) {
    return <div className="min-h-screen bg-black text-white p-6">Vehicle not found.</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans flex">
      {/* Left Column - Image Gallery (Fixed) */}
      <div className="w-1/2 sticky top-0 h-screen overflow-hidden bg-black flex flex-col items-center justify-center p-8 relative">
        <img src={vehicle.images[currentImageIndex]} alt={vehicle.name} className="max-w-full max-h-[80%] object-contain mb-4" />
        <div className="grid grid-cols-5 gap-2 w-full max-w-lg">
          {vehicle.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${vehicle.name} ${index + 1}`}
              className={`w-full h-20 object-cover cursor-pointer rounded-lg ${index === currentImageIndex ? 'border-2 border-red-600' : 'border-2 border-transparent'}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        {vehicle.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-1.5 text-white rounded-full z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-1.5 text-white rounded-full z-10"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Right Column - Details (Scrollable) */}
      <div className="w-1/2 bg-black px-8 pb-8 pt-24 overflow-y-auto">
        {/* Back Button */}
        <Link to="/inventory/new-vehicles" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 mt-8">
          <ChevronLeft size={20} className="mr-2" /> Back
        </Link>

        <div className="bg-black rounded-lg">
          <p className="text-gray-400 text-sm mb-1">{vehicle.details.year}</p>
          <h1 className="text-4xl font-light uppercase mb-4">{vehicle.name}</h1>
          
          {/* Quick Stats */}
          <div className="flex justify-around items-center text-center py-4 border-y border-gray-700 mb-6">
            <div className="flex-1">
              <p className="text-xs text-gray-400 uppercase">EPA-EST. RANGE</p>
              <p className="text-lg font-medium text-white">{vehicle.epaRange}</p>
            </div>
            <div className="border-l border-gray-700 h-10"></div>
            <div className="flex-1">
              <p className="text-xs text-gray-400 uppercase">POWER</p>
              <p className="text-lg font-medium text-white">{vehicle.power}</p>
            </div>
            <div className="border-l border-gray-700 h-10"></div>
            <div className="flex-1">
              <p className="text-xs text-gray-400 uppercase">0-60 MPH</p>
              <p className="text-lg font-medium text-white">{vehicle.acceleration}</p>
            </div>
          </div>

          <p className="text-white text-3xl font-bold mb-6">{vehicle.price}</p>

          <button className="w-full text-center text-white bg-red-600 px-6 py-3 uppercase font-bold text-sm rounded-full hover:bg-red-700 transition-colors mb-8">
            Schedule a Demo Drive
          </button>

          {/* Vehicle Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-4">Vehicle Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Used: {vehicle.details.used ? 'Yes' : 'No'}</li>
              <li>Odometer: {vehicle.details.odometer}</li>
              <li>VIN: {vehicle.details.vin}</li>
              <li>Review the <a href={vehicle.details.historyReport} className="text-red-600 hover:underline">Vehicle History Report</a> to check ownership history and if this vehicle has been in an accident</li>
              <li>Learn more about <a href={vehicle.details.standards} className="text-red-600 hover:underline">Cosmetic and Mechanical Standards</a></li>
            </ul>
          </div>

          {/* Configuration */}
          <div>
            <h2 className="text-2xl font-light mb-4">Configuration</h2>
            <div className="grid grid-cols-2 gap-y-2 text-gray-300">
              {Object.entries(vehicle.details.configuration).map(([key, value]) => (
                <p key={key} className="capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}: <span className="text-white font-medium">{value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsPage;
