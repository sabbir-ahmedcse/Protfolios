import React, { useEffect, useState, useRef } from 'react';

import { Code, Monitor, GraduationCap, Rocket, BookOpen, Target, Coffee, Sparkles, Cpu, Zap, TrendingUp, Globe, Users, Award, Lightbulb, Heart, Briefcase, Layers } from 'lucide-react';

const About = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Card animation sequence
  useEffect(() => {
    const timers = [];
    
    // Show cards one by one
    for (let i = 0; i < 5; i++) {
      timers.push(
        setTimeout(() => {
          setVisibleCards(prev => [...prev, i]);
        }, i * 400) // 400ms delay between each card
      );
    }

    // Mark animation complete after all cards
    timers.push(
      setTimeout(() => {
        setAnimationComplete(true);
      }, 5 * 400 + 500)
    );

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  // Cards data
  const cards = [
    {
      id: 0,
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Computer Science Student",
      subtitle: "Naogaon Polytechnic Institute",
      content: "Currently pursuing my Diploma in Computer Science & Technology. Gaining comprehensive knowledge in programming, algorithms, and software development principles.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      animationDelay: 0
    },
    {
      id: 1,
      icon: <Monitor className="w-8 h-8" />,
      title: "Frontend Developer",
      subtitle: "React.js Specialist",
      content: "Creating modern, responsive web applications with React.js, Tailwind CSS, and JavaScript. Passionate about building intuitive user interfaces.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      animationDelay: 400
    },
    {
      id: 2,
      icon: <Briefcase className="w-8 h-8" />,
      title: "Professional Skills",
      subtitle: "Technical Expertise",
      content: "HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Git, VS Code. Focus on clean code, responsive design, and optimal performance.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      animationDelay: 800
    },
    {
      id: 3,
      icon: <Target className="w-8 h-8" />,
      title: "Career Objective",
      subtitle: "Future Vision",
      content: "To become a senior frontend developer and contribute to innovative projects that make a difference. Always eager to learn and adapt to new technologies.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      animationDelay: 1200
    },
    {
      id: 4,
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Passion",
      subtitle: "Beyond Coding",
      content: "Love solving complex problems, contributing to open-source projects, and sharing knowledge with the developer community.",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-100",
      animationDelay: 1600
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      
      {/* Add CSS animations */}
      <style>
        {`
          @keyframes slideInFromLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideInFromRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes borderGlow {
            0%, 100% {
              border-color: #e5e7eb;
            }
            50% {
              border-color: #3b82f6;
            }
          }
          
          .name-animation {
            animation: slideInFromLeft 1s ease-out forwards;
          }
          
          .title-animation {
            animation: slideInFromRight 1s ease-out forwards;
            animation-delay: 0.3s;
            opacity: 0;
          }
          
          .card-animation {
            animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            opacity: 0;
          }
          
          .icon-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .glow-border {
            animation: borderGlow 2s ease-in-out infinite;
          }
          
          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          
          .shine-effect {
            position: relative;
            overflow: hidden;
          }
          
          .shine-effect::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(255, 255, 255, 0.3) 50%,
              transparent 100%
            );
            transform: rotate(30deg);
            animation: shine 3s infinite;
          }
          
          @keyframes shine {
            0% {
              left: -50%;
            }
            100% {
              left: 150%;
            }
          }
        `}
      </style>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 bottom-0" 
             style={{
               backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-5 opacity-10">
        <Code className="w-16 h-16 text-blue-400 icon-float" />
      </div>
      <div className="absolute bottom-1/4 right-5 opacity-10">
        <Cpu className="w-16 h-16 text-purple-400 icon-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header Section with Professional Animation */}
        <div className="text-center mb-16">
          <div className="inline-block mb-8 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-xl"></div>
            <div className="relative bg-white rounded-full p-4 shadow-lg">
              <Sparkles className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          
          <h1 
            className="name-animation text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
          >
            Sabbir Ahmed
          </h1>
          
          <p className="title-animation text-xl md:text-2xl text-gray-600 mb-6">
            Computer Science Student & Frontend Developer
          </p>
          
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 mb-8 shadow-sm">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">
              Naogaon Polytechnic Institute
            </span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main Content - Professionally Animated Cards */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Left Column - Profile Card */}
            <div 
              className={`lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover-lift
                        ${animationComplete ? 'card-animation' : ''}`}
              style={{
                animationDelay: '0.2s',
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Professional Profile</h2>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <div className="w-6 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  I am a dedicated <span className="font-semibold text-blue-600">Computer Science & Technology</span> student with a 
                  strong passion for frontend development. My academic journey at 
                  <span className="font-semibold text-purple-600"> Naogaon Polytechnic Institute</span> has equipped me with 
                  solid theoretical foundations, which I actively apply in practical web development projects.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  As a frontend developer, I specialize in creating responsive, user-friendly web applications 
                  using modern technologies. I believe in writing clean, maintainable code and focusing on 
                  creating exceptional user experiences that are both functional and aesthetically pleasing.
                </p>
                
                {/* Animated skills tags */}
                <div className="flex flex-wrap gap-3">
                  {['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'Responsive Design'].map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200
                                transform transition-all duration-300 hover:scale-105 hover:border-blue-200"
                      style={{
                        animation: `fadeInUp 0.5s ease-out forwards ${0.5 + idx * 0.1}s`,
                        opacity: 0
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div 
              className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl hover-lift
                        ${animationComplete ? 'card-animation' : ''}`}
              style={{
                animationDelay: '0.4s',
                animationFillMode: 'forwards'
              }}
            >
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-blue-400" />
                <span>Career Journey</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  { label: 'Academic Years', value: '3', icon: <BookOpen /> },
                  { label: 'Projects Completed', value: '25+', icon: <Layers /> },
                  { label: 'Technologies', value: '15+', icon: <Code /> },
                  { label: 'Learning Hours', value: '1000+', icon: <Lightbulb /> }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10
                              transform transition-all duration-300 hover:scale-105"
                    style={{
                      animation: `fadeInUp 0.6s ease-out forwards ${0.8 + idx * 0.2}s`,
                      opacity: 0
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">{stat.label}</span>
                      <div className="text-blue-400">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Animated Feature Cards Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">My Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`
                    ${card.bgColor} rounded-xl p-6 border ${card.borderColor} shadow-sm hover-lift
                    ${visibleCards.includes(card.id) ? 'card-animation' : 'opacity-0'}
                  `}
                  style={{
                    animationDelay: `${card.animationDelay}ms`,
                    animationFillMode: 'forwards'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = card.color.replace('text-', 'border-');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = card.borderColor;
                  }}
                >
                  <div className={`p-3 ${card.bgColor.replace('50', '100')} rounded-lg w-fit mb-4`}>
                    <div className={card.color}>
                      {card.icon}
                    </div>
                  </div>
                  
                  <h4 className={`text-lg font-bold ${card.color} mb-2`}>{card.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 font-medium">{card.subtitle}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{card.content}</p>
                  
                  {/* Animated progress line */}
                  <div className="mt-6">
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${card.color.replace('text-', 'bg-')} rounded-full`}
                        style={{
                          animation: `fadeInUp 1s ease-out forwards ${card.animationDelay + 200}ms`,
                          width: '0%',
                          animationFillMode: 'forwards'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Philosophy Section */}
          <div 
            className={`bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-8 border border-gray-200 shadow-lg
                      ${animationComplete ? 'card-animation' : ''}`}
            style={{
              animationDelay: '2s',
              animationFillMode: 'forwards'
            }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <Target className="w-8 h-8 text-gray-700" />
              <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Development Philosophy</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎯',
                  title: 'User-Centric Approach',
                  description: 'Always design with the end-user in mind, creating intuitive and accessible interfaces.'
                },
                {
                  icon: '⚡',
                  title: 'Performance Focus',
                  description: 'Optimize for speed and efficiency, ensuring smooth user experiences across all devices.'
                },
                {
                  icon: '🔧',
                  title: 'Clean Code Practice',
                  description: 'Write maintainable, scalable code with clear documentation and best practices.'
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm
                            transform transition-all duration-300 hover:scale-105"
                  style={{
                    animation: `scaleIn 0.6s ease-out forwards ${2.2 + idx * 0.2}s`,
                    opacity: 0
                  }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Call to Action */}
        <div 
          className="text-center"
          style={{
            animation: `fadeInUp 1s ease-out forwards 3s`,
            opacity: 0,
            animationFillMode: 'forwards'
          }}
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            
            <a 
              href="#contact"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl shadow-lg
                        transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                <Coffee className="w-5 h-5" />
                Let's Connect & Collaborate
              </span>
              <Sparkles className="w-5 h-5 text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm mt-6">
            Cards animate sequentially on page load • Hover for interactive effects
          </p>
        </div>
      </div>

      {/* Animation Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200">
          {[0, 1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                visibleCards.includes(step) ? 'w-4 bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-xs text-gray-600">
            {visibleCards.length}/5 cards loaded
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;