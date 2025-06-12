
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI-Powered Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing land management in Uganda with cutting-edge artificial intelligence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Legal Advisory Service */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Legal Advisory Service</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our RAG (Retrieval-Augmented Generation) powered AI provides comprehensive legal advice on land matters, 
              helping you navigate Uganda's complex land laws and regulations with confidence.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Land acquisition guidance
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Property dispute resolution
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Legal document preparation
              </li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800 font-medium">
                🤖 Powered by advanced RAG technology for accurate, context-aware legal guidance
              </p>
            </div>
          </div>

          {/* Land Title Verification */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-4 rounded-full mr-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Land Title Verification</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Advanced Computer Vision technology using Vision Transformer (ViT) and CNN models to authenticate 
              and verify land titles, protecting you from fraudulent documents.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Document authenticity verification
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Fraud detection & prevention
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Instant verification results
              </li>
            </ul>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-800 font-medium">
                🔍 Powered by ViT & CNN models for 99.9% accuracy in document verification
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <p className="text-gray-600">Documents Verified</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <p className="text-gray-600">Accuracy Rate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-gray-600">AI Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
