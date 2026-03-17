import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col space-y-4">
    <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index} className="flex items-start">
          {link.Icon && <link.Icon size={14} className="text-gray-400 mr-3 mt-1" />}
          <span className={`text-[10px] uppercase tracking-wider text-gray-400 ${link.Icon ? '' : 'hover:text-white transition-colors'}`}>
            {link.text || link}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const socialIcons = [
    { Icon: Facebook, label: 'Facebook' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Youtube, label: 'Youtube' },
  ];

  return (
    <footer className="bg-[#111] text-white pt-20 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20 border-b border-gray-800 pb-16">
          <FooterColumn 
            title="Quick Links" 
            links={['Inventory', 'Service & Parts', 'Financing', 'Trade-In Valuation', 'Careers', 'Our Team']} 
          />
          <FooterColumn 
            title="Ownership" 
            links={['Owner Benefits', 'Events', 'Detailing & Protection', 'News & Editorial']} 
          />
          <FooterColumn 
            title="Customer Support" 
            links={['Contact Us', 'Service Schedule', 'FAQs']} 
          />
          <FooterColumn 
            title="Contact Info" 
            links={[
              { Icon: MapPin, text: 'Preah Monivong Blvd (93) Phnom Penh, Cambodia' },
              { Icon: Mail, text: 'Email: info@deluxeautocambodia.com' },
              { Icon: Phone, text: '+855 17 977 111 | +855 12 99 14 24' }
            ]} 
          />
          <FooterColumn 
            title="Business Hours" 
            links={['Monday: 8 AM - 5 PM', 'Tuesday: 8 AM - 5 PM', 'Wednesday: 8 AM - 5 PM', 'Thursday: 8 AM - 5 PM', 'Friday: 8 AM - 5 PM', 'Saturday: 8 AM - 5 PM', 'Sunday: 8 AM - 5 PM']} 
          />
        </div>

        {/* Social Media */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            {socialIcons.map(({ Icon, label }, idx) => (
                <a key={idx} href="#" className="flex items-center space-x-2 group">
                    <Icon size={20} className="text-white group-hover:text-gray-300" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-gray-300">{label}</span>
                </a>
            ))}
        </div>

        {/* Legal Text */}
        <div className="text-center mb-12">
            <p className="text-[10px] text-gray-500 max-w-4xl mx-auto leading-relaxed uppercase">
              Deluxe Auto Cambodia
            </p>

             <p className="text-[10px] text-gray-500 mt-4 uppercase">
                Copyright 2025 - All rights reserved
            </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase font-bold tracking-wider">
            <div className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
            
            <div className="flex items-center space-x-2 cursor-pointer hover:text-white">
                <span>Cambodia</span>
            </div>
        </div>
        
        {/* Shell Logo Placeholder */}
        <div className="flex justify-center mt-12">
            <img src="/logo.png" alt="Logo" className="w-16 h-10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
