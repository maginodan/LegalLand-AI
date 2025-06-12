
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transforming Land Management in Uganda
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              LegalLand AI is at the forefront of revolutionizing land management in Uganda through 
              cutting-edge artificial intelligence. Our platform bridges the gap between traditional 
              land administration and modern technology.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand the complexities of Uganda's land laws and the challenges faced by 
              citizens in navigating property-related matters. Our AI-powered solutions provide 
              accessible, accurate, and reliable assistance to everyone.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Fast & Reliable</h3>
                  <p className="text-gray-600 text-sm">Instant AI-powered responses and verification</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Secure & Trusted</h3>
                  <p className="text-gray-600 text-sm">Government-certified and privacy-protected</p>
                </div>
              </div>
            </div>
            
            {/* Authorized section with improved design */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">🏛️ Officially Authorized</h3>
                  <p className="text-gray-700">
                    Certified by the Ministry of Lands, Housing and Urban Development, Uganda and 
                    developed in partnership with Makerere University.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <div className="relative h-96 bg-gradient-to-br from-blue-900 to-indigo-800 overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
                <svg className="absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#ffffff" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,165.3C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg mb-6">
                  To provide accessible, affordable, and reliable land legal services to all Ugandans 
                  through innovative AI technology.
                </p>
                <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-white">
                    "Empowering citizens with knowledge and technology for secure land ownership"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
