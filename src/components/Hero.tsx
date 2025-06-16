import React from 'react';
import { Bot, Eye, ArrowRight, Sparkles, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 sm:py-20 animate-fade-in relative overflow-hidden">
      {/* AI-themed background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="mb-8 animate-scale-in">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/d4ac3071-127a-4f1a-9af8-cc673d7ad4a5.png" 
                alt="Justice Scale" 
                className="h-20 w-20 sm:h-24 sm:w-24 mx-auto mb-6 hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
              />
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-blue-600 animate-bounce" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            AI-Powered Legal Land
            <span className="text-blue-600 block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Advisory Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
            Get expert legal land advice and verify land titles in Uganda using cutting-edge 
            Artificial Intelligence technology. Powered by <span className="font-semibold text-blue-600">RAG</span> and <span className="font-semibold text-purple-600">Computer Vision (ViT & CNN)</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
            <a href="https://legalland.vercel.app" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Start Legal Advisory</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>

{/*             <a href="https://huggingface.co/spaces/danmagino/Title-verifier" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                <Eye className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Verify Land Title</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a> */}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-6 sm:p-8 max-w-5xl mx-auto animate-slide-in-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center space-x-3 mb-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">Authorized by:</span>
                </div>
                <p className="text-gray-700 text-sm">Ministry of Lands, Housing and Urban Development - Republic of Uganda</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200">
                <div className="flex items-center space-x-3 mb-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-purple-900">In partnership with:</span>
                </div>
                <p className="text-gray-700 text-sm">Makerere University - College of Computing and Information Sciences</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-8 text-xs sm:text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <span>🇺🇬</span>
                <span>Government Certified</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>🤖</span>
                <span>AI-Powered</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>⚡</span>
                <span>Instant Results</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>🔒</span>
                <span>Secure & Confidential</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
