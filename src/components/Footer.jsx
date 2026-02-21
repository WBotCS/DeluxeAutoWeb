import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Twitch } from 'lucide-react';

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col space-y-4">
    <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="text-[10px] uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const socialIcons = [
    { Icon: Facebook, label: 'Facebook' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Linkedin, label: 'Linkedin' },
    { Icon: Twitch, label: 'Twitch' }, // Using Twitch as placeholder for TikTok if not available in standard set
    { Icon: Twitter, label: 'X' }, // Using Twitter icon for X
    { Icon: Youtube, label: 'Youtube' },
  ];

  return (
    <footer className="bg-[#111] text-white pt-20 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20 border-b border-gray-800 pb-16">
          <FooterColumn 
            title="Inventory" 
            links={['New Vehicles', 'Certified Pre-Owned', 'All Pre-Owned', 'Trade-In Valuation', 'Virtual Showroom', 'Vehicle Finder Service']} 
          />
          <FooterColumn 
            title="Purchase & Finance" 
            links={['Finance Application', 'Leasing Programs', 'Monthly Payment Calculator', 'Current Incentives', 'Corporate Sales', 'Export Services']} 
          />
          <FooterColumn 
            title="Service & Parts" 
            links={['Schedule Service', 'Maintenance Packages', 'Genuine Parts Shop', 'Boutique & Accessories', 'Tire Center', 'Roadside Assistance']} 
          />
          <FooterColumn 
            title="Ownership" 
            links={['Owner Benefits', 'Upcoming Events', 'Driving Academy', 'Client Reviews', 'Detailing & Protection', 'News & Editorial']} 
          />
          <FooterColumn 
            title="Our Dealership" 
            links={['Our Story', 'Meet the Team', 'Location & Hours', 'Careers', 'Contact Us', 'Privacy & Legal']} 
          />
        </div>

        {/* Social Media */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20">
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
                Ferrari N.V. - Holding company - A company under Dutch law, having its official seat in Amsterdam, the Netherlands and its corporate address at Via Abetone Inferiore No. 4, I-41053 Maranello (MO), Italy, registered with the Dutch trade register under number 64060977
            </p>
             <p className="text-[10px] text-gray-500 max-w-4xl mx-auto leading-relaxed mt-4 uppercase">
                Ferrari S.p.A. - A company under Italian law, having its registered office at Via Emilia Est No. 1163, Modena, Italy, Companies' Register of Modena, VAT and Tax number 00159560366 and share capital of Euro 20,260,000
            </p>
             <p className="text-[10px] text-gray-500 mt-4 uppercase">
                Copyright 2025 - All rights reserved
            </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase font-bold tracking-wider">
            <div className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
                <a href="#" className="hover:text-white">Legal</a>
                <a href="#" className="hover:text-white">Privacy Section</a>
                <a href="#" className="hover:text-white">Cookie Policy</a>
                <a href="#" className="hover:text-white">Do Not Sell My Personal Information</a>
                <a href="#" className="hover:text-white">Submit your privacy request under GDPR</a>
                <a href="#" className="hover:text-white">Accessibility</a>
            </div>
            
            <div className="flex items-center space-x-2 cursor-pointer hover:text-white">
                <span>United States of America</span>
                <span className="text-xs">^</span>
            </div>
        </div>
        
        {/* Shell Logo Placeholder */}
        <div className="flex justify-center mt-12">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-red-600 font-bold text-xs">
                S
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
