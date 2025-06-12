
import React from 'react';
import { MapPin, Mail, Phone, Clock, Building2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for legal land advisory services or technical support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  <span>Office Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Ministry of Lands Building</p>
                    <p className="text-gray-600">Parliamentary Avenue</p>
                    <p className="text-gray-600">Kampala, Uganda</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>
                  Contact our support team for assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@legallandai.ug</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+256-700-000-000</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Emergency Land Disputes?</h3>
              <p className="mb-4">Our AI-powered legal advisory is available 24/7 for urgent land matters.</p>
              <p className="text-blue-100">🚨 Emergency Hotline: +256-800-LEGAL-AI</p>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="animate-fade-in">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Ministry of Lands Location</CardTitle>
                <CardDescription>
                  Parliamentary Avenue, Kampala - Uganda
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-64 sm:h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-b-lg relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7567415087!2d32.57861731475397!3d0.31728999974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb6c7e1a1a7b%3A0x3e02c91a3ae1f1a5!2sMinistry%20of%20Lands%2C%20Housing%20and%20Urban%20Development!5e0!3m2!1sen!2sug!4v1638360000000!5m2!1sen!2sug"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-lg"
                    title="Ministry of Lands Location"
                  ></iframe>
                  
                  {/* Fallback if iframe doesn't load */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100" style={{ zIndex: -1 }}>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-green-500 rounded-full opacity-20 mb-4 mx-auto animate-pulse"></div>
                      <div className="bg-white rounded-lg p-4 shadow-lg">
                        <p className="font-bold text-gray-900">📍 Parliamentary Avenue</p>
                        <p className="text-sm text-gray-600">Ministry of Lands Building</p>
                        <p className="text-xs text-gray-500 mt-2">Kampala, Uganda</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partnership Information */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="animate-scale-in hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-blue-600">Government Partnership</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">
                Officially partnered with the Ministry of Lands, Housing and Urban Development
              </p>
              <p className="text-sm text-gray-500">
                📞 Ministry Contact: +256-414-341-621<br />
                🌐 Website: www.mlhud.go.ug
              </p>
            </CardContent>
          </Card>

          <Card className="animate-scale-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="text-green-600">Academic Partnership</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">
                Developed in collaboration with Makerere University
              </p>
              <p className="text-sm text-gray-500">
                🎓 College of Computing and Information Sciences<br />
                📍 Makerere University, Kampala
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
