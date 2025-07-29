import React from 'react';
import { User, Award, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '25+', label: 'Projects Completed' },
    { number: '10+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: 'Professional Journey',
      description: 'Dedicated software developer with a passion for creating efficient, scalable solutions that make a real impact.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Technical Excellence',
      description: 'Committed to writing clean, maintainable code and staying current with industry best practices and emerging technologies.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'Strong analytical mindset with the ability to break down complex problems into manageable, implementable solutions.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Team Player',
      description: 'Collaborative approach to development with excellent communication skills and a focus on continuous learning.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer who loves turning complex problems into simple, 
            beautiful, and intuitive solutions. When I'm not coding, you'll find me exploring 
            new technologies or contributing to open-source projects.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Touch */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              I believe that great software comes from understanding both the technical requirements 
              and the human needs behind them. Ready to create something extraordinary?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;