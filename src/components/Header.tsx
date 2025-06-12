
import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg border-2 border-blue-600 hover:scale-105 transition-transform duration-200 shadow-sm">
              <img 
                src="/lovable-uploads/d4ac3071-127a-4f1a-9af8-cc673d7ad4a5.png" 
                alt="LegalLand AI Logo" 
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">LegalLand AI</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Uganda Land Advisory Services</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={scrollToTop} className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-105 transform duration-200">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-105 transform duration-200">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-105 transform duration-200">About</button>
            <button onClick={() => scrollToSection('team')} className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-105 transform duration-200">Team</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-105 transform duration-200">Contact</button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button onClick={scrollToTop} className="text-left text-gray-600 hover:text-blue-600 transition-colors px-2 py-1">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-600 hover:text-blue-600 transition-colors px-2 py-1">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 hover:text-blue-600 transition-colors px-2 py-1">About</button>
              <button onClick={() => scrollToSection('team')} className="text-left text-gray-600 hover:text-blue-600 transition-colors px-2 py-1">Team</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 hover:text-blue-600 transition-colors px-2 py-1">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
