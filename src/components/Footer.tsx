
import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white p-2 rounded-lg border-2 border-blue-600">
                <img 
                  src="/lovable-uploads/d4ac3071-127a-4f1a-9af8-cc673d7ad4a5.png" 
                  alt="LegalLand AI Logo" 
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">LegalLand AI</h3>
                <p className="text-gray-400 text-sm">Uganda Land Advisory Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering Ugandans with AI-powered legal land advisory services and 
              land title verification technology.
            </p>
            <div className="text-sm text-gray-400">
              <p>🇺🇬 Proudly serving Uganda</p>
              <p>🤖 Powered by Artificial Intelligence</p>
              <p>🏛️ Government certified and trusted</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Parliamentary Avenue, Kampala</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@legallandai.ug</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+256-700-000-000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="text-sm">www.legallandai.ug</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 LegalLand AI. All rights reserved. | 
            Partnership with Ministry of Lands, Housing and Urban Development, Uganda & Makerere University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
