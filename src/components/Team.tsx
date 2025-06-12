
import React from 'react';
import { Users, Code, Brain, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: "Owiny Marvin",
      role: "Lead AI Engineer",
      icon: Brain,
      description: "Specializes in RAG implementation and legal AI systems",
      expertise: "Machine Learning, NLP, Legal Tech"
    },
    {
      name: "Kaitesi Joan",
      role: "Computer Vision Engineer",
      icon: Code,
      description: "Expert in Vision Transformer and CNN architectures",
      expertise: "Computer Vision, Deep Learning, Image Processing"
    },
    {
      name: "Natukunda Phionah",
      role: "Backend Developer",
      icon: Database,
      description: "Handles system architecture and data management",
      expertise: "System Design, Database Management, API Development"
    },
    {
      name: "Magino Daniel",
      role: "Lead Full Stack Developer",
      icon: Users,
      description: "Focuses on user experience and frontend development",
      expertise: "React, UI/UX Design, AI powered Frontend Architecture"
    }
  ];

  return (
    <section id="team" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Development Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developers from Makerere University dedicated to revolutionizing 
            Uganda's land management through AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-700 transition-colors">
                  <member.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">
                  {member.description}
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-blue-800">
                    {member.expertise}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-2xl mx-auto animate-scale-in">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Makerere University Partnership
            </h3>
            <p className="text-gray-600 mb-4">
              Our team is proud to represent Makerere University's commitment to innovation 
              and technological advancement in Uganda's legal and land management sectors.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>🎓 Institution:</strong> Makerere University, Kampala<br />
                <strong>🏛️ Faculty:</strong> College of Computing and Information Sciences<br />
                <strong>🌟 Mission:</strong> Advancing AI for Social Good in Uganda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
