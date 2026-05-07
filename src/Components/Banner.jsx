import React, { useState, useEffect } from 'react';
import sabbir from '../assets/sabbir.JPG';
import resumeUrl from '../assets/sabbir_resume.pdf';


const Banner = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const texts = ['Frontend Developer', 'CST Student', 'Web Designer', 'React Developer'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause at the end
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg animate-float animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-float animation-delay-3000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              {/* Greeting with animation */}
              <div className="overflow-hidden">
                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium animate-slide-up">
                  <span className="inline-block animate-bounce mr-2">👋</span> 
                  Hello, I'm
                </p>
              </div>

              {/* Name with gradient and animation */}
              <div className="overflow-hidden">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  <span className="block text-gray-900 dark:text-white animate-name-slide">
                    Sabbir
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                    Ahmed
                  </span>
                </h1>
              </div>

              {/* Animated Roles */}
              <div className="h-16 flex items-center">
                <div className="flex items-center space-x-4">
                  <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full shadow-lg">
                    <span className="text-white font-semibold text-lg">
                      {displayText}
                      <span className="ml-1 animate-pulse">|</span>
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full shadow-md">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      CST Student
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="overflow-hidden">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-up animation-delay-300">
                Passionate Computer Science & Technology student specializing in modern web development.
                Building beautiful, functional web applications with cutting-edge technologies.
              </p>
            </div>

            {/* Tech Stack with hover effects */}
            <div className="overflow-hidden">
              <div className="flex flex-wrap gap-3 animate-slide-up animation-delay-500">
                {[
                  { name: 'React', color: 'from-blue-400 to-cyan-500' },
                  { name: 'JavaScript', color: 'from-yellow-400 to-orange-500' },
                  { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-500' },
                  { name: 'HTML5', color: 'from-orange-400 to-red-500' },
                  { name: 'CSS3', color: 'from-blue-400 to-indigo-500' },
                  { name: 'Vite', color: 'from-purple-400 to-pink-500' }
                ].map((tech, index) => (
                  <span
                    key={tech.name}
                    className="group relative px-5 py-2.5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl animate-tech-slide"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    {/* Content */}
                    <span className="relative z-10 font-medium text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons with animations */}
            <div className="flex flex-wrap gap-6 pt-8 animate-fade-in-up animation-delay-700">
              <a href="#contact" className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span className="relative flex items-center">
                  Contact Me
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              
              <a
                href={resumeUrl}
                download="Sabbir_Ahmed_CV.pdf"
                className="group relative px-10 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative flex items-center">
                  Download CV
                  <svg className="w-5 h-5 ml-3 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Social Links with glow effect */}
            <div className="flex space-x-8 pt-12 animate-fade-in-up animation-delay-900">
              {[
                { name: 'GitHub', emoji: '💻', url: '#' },
                { name: 'LinkedIn', emoji: '💼', url: '#' },
                { name: 'Facebook', emoji: '👥', url: '#' },
                { name: 'Twitter', emoji: '🐦', url: '#' }
              ].map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="group relative w-16 h-16 flex flex-col items-center justify-center"
                >
                  {/* Outer glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
                  {/* Button */}
                  <div className="relative w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {social.emoji}
                    </span>
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Profile Image with 3D effect */}
          <div className="relative animate-fade-in-up animation-delay-500">
            <div className="relative mx-auto lg:mx-0 max-w-xl">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              
              {/* Main profile card */}
              <div className="relative bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl p-1.5 shadow-2xl transform transition-transform duration-700 hover:rotate-3 hover:scale-105">
                {/* Image container with shine effect */}
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group">
                  {/* Shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Profile Image */}
                  <div className="relative p-8">
                    <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                      <img 
                        src={sabbir} 
                        alt="Sabbir Ahmed"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Info Card */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl transform -translate-y-2">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          Sabbir Ahmed
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4">
                          Frontend Developer & CST Student
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                            <span className="text-gray-500 dark:text-gray-400">📍</span>
                            <span className="text-gray-700 dark:text-gray-300">Bangladesh</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                            <span className="text-gray-500 dark:text-gray-400">📧</span>
                            <span className="text-gray-700 dark:text-gray-300">sabbir@example.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow animation-delay-1000">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-lg flex items-center justify-center shadow-2xl animate-float">
                <span className="text-xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
