import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Software Developer';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-6xl font-bold text-gray-600">DM</span>
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Deepika M
          </span>
        </h1>
        
        <div className="text-2xl md:text-3xl text-gray-700 mb-6 h-12 flex items-center justify-center">
          <span>{displayText}</span>
          {isTyping && <span className="ml-1 animate-pulse">|</span>}
        </div>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate developer with expertise in modern web technologies, creating innovative solutions 
          that bridge the gap between design and functionality.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-600">
          <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors cursor-pointer">
            <Mail size={20} />
            <span>deepika.m@email.com</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors cursor-pointer">
            <Phone size={20} />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors cursor-pointer">
            <MapPin size={20} />
            <span>Bangalore, India</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="#"
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 rounded-lg font-medium border-2 border-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Header;