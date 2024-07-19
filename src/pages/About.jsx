import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Smartphone, Award, Users, Coffee, Star, Lightbulb } from 'lucide-react';

// Custom hook for scroll animations with improved performance
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold,
        rootMargin: '50px' // Trigger animation earlier for better UX
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

// Counter animation hook with performance optimization
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startCounting = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * end);
      
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsAnimating(false);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return { count, startCounting };
};

const About = () => {
  const headerAnimation = useScrollAnimation(0.3);
  const storyAnimation = useScrollAnimation(0.2);
  const skillsAnimation = useScrollAnimation(0.2);
  const statsAnimation = useScrollAnimation(0.3);

  // Updated skills data with individual percentages for each skill (85-90% range)
  const skills = [
    {
      logo: <Code className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-gray-400" />,
      name: "Frontend Development",
      detailedSkills: [
        { name: "React", percentage: 89 },
        { name: "Vue.js", percentage: 87 },
        { name: "JavaScript", percentage: 90 },
        { name: "HTML5", percentage: 88 },
        { name: "CSS3", percentage: 86 },
        { name: "Modern Frameworks", percentage: 85 }
      ],
      color: "from-gray-600 to-gray-500"
    },
    {
      logo: <Database className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-gray-400" />,
      name: "Backend Development",
      detailedSkills: [
        { name: "Node.js", percentage: 87 },
        { name: "Python", percentage: 85 },
        { name: "PHP", percentage: 89 },
        { name: "Database Management Systems", percentage: 86 }
      ],
      color: "from-gray-600 to-gray-500"
    },
    {
      logo: <Globe className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-gray-400" />,
      name: "Web Technologies",
      detailedSkills: [
        { name: "Full-stack Development", percentage: 88 },
        { name: "Responsive Solutions", percentage: 90 },
        { name: "Scalable Solutions", percentage: 85 }
      ],
      color: "from-gray-600 to-gray-500"
    },
    {
      logo: <Smartphone className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-gray-400" />,
      name: "Mobile Development",
      detailedSkills: [
        { name: "Cross-platform Mobile Apps", percentage: 86 },
        { name: "React Native", percentage: 88 },
        { name: "Flutter", percentage: 85 }
      ],
      color: "from-gray-600 to-gray-500"
    }
  ];

  // Stats data
  const stats = [
    { number: 3, label: "Years Experience", icon: <Award className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" /> },
    { number: 10, label: "Projects Completed", icon: <Star className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" /> },
    { number: 5, label: "Happy Clients", icon: <Users className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" /> },
    { number: 18, label: "Cups of Coffee", icon: <Coffee className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{ fontFamily: 'Livvic, sans-serif' }}>
      {/* Optimized Background Elements - Reduced for mobile performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-6 xs:top-8 sm:top-10 md:top-20 left-3 xs:left-4 sm:left-5 md:left-10 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-6 xs:bottom-8 sm:bottom-10 md:bottom-20 right-3 xs:right-4 sm:right-5 md:right-10 w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header with better mobile typography */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Literata, serif' }}>
            About <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-12 xs:w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-3 xs:mb-4 sm:mb-6 rounded-full" />
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg lg:text-xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 xs:px-4" style={{ fontFamily: 'Livvic, sans-serif' }}>
            Learn more about my journey, skills, and passion for creating exceptional digital experiences
          </p>
        </div>

        {/* Enhanced Creative Story Section with left-aligned text */}
        <div
          ref={storyAnimation.ref}
          className={`mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${
            storyAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="relative">
            {/* Optimized creative background with fewer elements on mobile */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl xs:rounded-3xl">
              <div className="hidden sm:block absolute top-4 right-4 w-16 h-16 xs:w-20 xs:h-20 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse" />
              <div className="hidden sm:block absolute bottom-8 left-8 w-12 h-12 xs:w-16 xs:h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="hidden md:block absolute top-1/2 left-1/4 w-8 h-8 xs:w-12 xs:h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 backdrop-blur-sm rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden">
              {/* Enhanced decorative corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500/10 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-gradient-to-tl from-red-500/10 to-transparent rounded-tl-full" />
              
              <div className="relative z-10">
                <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 xs:mb-6 sm:mb-8 text-center" style={{ fontFamily: 'Literata, serif' }}>
                  My <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Story</span>
                </h2>

                <div className="space-y-4 xs:space-y-6 sm:space-y-8 text-gray-300 text-sm xs:text-base lg:text-lg leading-relaxed text-left" style={{ fontFamily: 'Livvic, sans-serif' }}>
                  {/* Enhanced timeline styling with left-aligned text */}
                  <div className="relative">
                    <div className="absolute left-4 xs:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-red-500 rounded-full" />
                    
                    <div className="relative pl-12 xs:pl-16 pb-6 xs:pb-8">
                      <div className="absolute left-2.5 xs:left-4 top-2 w-3 h-3 xs:w-4 xs:h-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-ping opacity-75" />
                      </div>
                      <div className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 p-4 xs:p-6 rounded-lg xs:rounded-xl border-l-2 xs:border-l-4 border-red-500/50 hover:border-red-400 transition-all duration-300 group min-h-[44px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800" tabIndex={0} role="button" aria-label="Read about my programming journey">
                        <div className="flex items-start space-x-2 xs:space-x-3">
                          <Lightbulb className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-yellow-400 mt-1 group-hover:animate-pulse flex-shrink-0" />
                          <p className="group-hover:text-white transition-colors duration-300 text-left">
                           Hello! I'm Kenean Tilahun, a passionate full-stack developer with a strong interest in building impactful and user-focused digital solutions. My journey into software development began in Grade 10, when I was selected among the top 200 students nationwide to attend the Addis Coder Summer Camp—an experience that introduced me to data structures, algorithms, and the creative power of code.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-12 xs:pl-16 pb-6 xs:pb-8">
                      <div className="absolute left-2.5 xs:left-4 top-2 w-3 h-3 xs:w-4 xs:h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }} />
                      </div>
                      <div className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 p-4 xs:p-6 rounded-lg xs:rounded-xl border-l-2 xs:border-l-4 border-orange-500/50 hover:border-orange-400 transition-all duration-300 group min-h-[44px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-800" tabIndex={0} role="button" aria-label="Read about my development experience">
                        <div className="flex items-start space-x-2 xs:space-x-3">
                          <Code className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-400 mt-1 group-hover:animate-bounce flex-shrink-0" />
                          <p className="group-hover:text-white transition-colors duration-300 text-left">
                            Since then, I've been honing my skills through both academic studies and personal projects. My work includes building applications like SIRA, a mobile freelancing platform developed using Flutter and Firebase, and BookShare, a web-based book-sharing platform built with React and TypeScript. These projects, while personal and educational in nature, reflect my commitment to full-stack development and user-centered design
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-12 xs:pl-16">
                      <div className="absolute left-2.5 xs:left-4 top-2 w-3 h-3 xs:w-4 xs:h-4 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }} />
                      </div>
                      <div className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 p-4 xs:p-6 rounded-lg xs:rounded-xl border-l-2 xs:border-l-4 border-yellow-500/50 hover:border-yellow-400 transition-all duration-300 group min-h-[44px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-slate-800" tabIndex={0} role="button" aria-label="Read about my interests and community involvement">
                        <div className="flex items-start space-x-2 xs:space-x-3">
                          <Users className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-green-400 mt-1 group-hover:animate-pulse flex-shrink-0" />
                          <p className="group-hover:text-white transition-colors duration-300 text-left">
                           In addition to development, I've taken on leadership and mentorship roles in the tech community—organizing workshops, supporting students as a teaching assistant, and promoting collaborative learning as part of a Google Developer Group on campus.

I'm always exploring new technologies, contributing to open-source, and looking for opportunities to grow and collaborate on meaningful projects.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Skills Section with left-aligned text */}
        <div
          ref={skillsAnimation.ref}
          className={`mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${
            skillsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16" style={{ fontFamily: 'Literata, serif' }}>
            My <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} isVisible={skillsAnimation.isVisible} />
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section with better mobile layout */}
        <div
          ref={statsAnimation.ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 ${
            statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={statsAnimation.isVisible} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Enhanced SkillCard component with left-aligned text
const SkillCard = ({ skill, index, isVisible }) => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const animated = {};
        skill.detailedSkills.forEach((individualSkill, skillIndex) => {
          const key = `${skill.name}-${skillIndex}`;
          setTimeout(() => {
            animated[key] = individualSkill.percentage;
            setAnimatedSkills(prev => ({ ...prev, [key]: individualSkill.percentage }));
          }, skillIndex * 150);
        });
      }, index * 200);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skill, index]);

  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 border border-slate-700/50 shadow-xl relative overflow-hidden group transition-all duration-800 h-full flex flex-col hover:scale-105 focus-within:scale-105 cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms`, fontFamily: 'Livvic, sans-serif' }}
      tabIndex={0}
      role="button"
      aria-label={`View ${skill.name} skills`}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 group-focus:opacity-10 transition-opacity duration-300 rounded-xl xs:rounded-2xl`} />

      <div className="relative z-10 flex-1">
        <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 mb-4 xs:mb-6">
          <div className="flex-shrink-0 text-white group-hover:scale-110 group-focus:scale-110 transition-transform duration-300">
            {skill.logo}
          </div>
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-red-400 leading-tight text-left" style={{ fontFamily: 'Literata, serif' }}>
            {skill.name}
          </h3>
        </div>

        <div className="space-y-3 xs:space-y-4">
          {skill.detailedSkills.map((individualSkill, skillIndex) => {
            const skillKey = `${skill.name}-${skillIndex}`;
            const animatedPercentage = animatedSkills[skillKey] || 0;

            return (
              <div key={skillIndex} className="space-y-1.5 xs:space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 text-xs xs:text-sm sm:text-base font-medium truncate pr-2 text-left" style={{ fontFamily: 'Livvic, sans-serif' }}>
                    {individualSkill.name}
                  </span>
                  <span className="text-red-400 text-xs xs:text-sm sm:text-base font-bold flex-shrink-0" style={{ fontFamily: 'Livvic, sans-serif' }}>
                    {individualSkill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-1.5 xs:h-2 sm:h-2.5">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${animatedPercentage}%`,
                      boxShadow: '0 0 10px rgba(107, 114, 128, 0.5)'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Enhanced StatCard component with better mobile optimization
const StatCard = ({ stat, index, isVisible }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { count, startCounting } = useCountUp(stat.number, 2000);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setTimeout(() => {
        startCounting();
        setHasAnimated(true);
      }, index * 150);
    }
  }, [isVisible, hasAnimated, startCounting, index]);

  const displayCount = stat.label === "Cups of Coffee" ? `${count}+` : count;

  return (
    <div
      className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-3 xs:p-4 sm:p-6 lg:p-8 rounded-lg xs:rounded-xl sm:rounded-2xl text-center border border-slate-700/50 shadow-xl relative overflow-hidden group transition-all duration-800 hover:scale-105 focus:scale-105 cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms`, fontFamily: 'Livvic, sans-serif' }}
      tabIndex={0}
      role="button"
      aria-label={`${displayCount} ${stat.label}`}
    >
      {/* Animated background with gray colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-500/20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 rounded-lg xs:rounded-xl sm:rounded-2xl" />
      
      <div className="text-gray-400 mb-2 xs:mb-3 sm:mb-4 relative z-10 group-hover:rotate-12 group-focus:rotate-12 transition-transform duration-300 flex justify-center">
        {stat.icon}
      </div>
      <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-400 mb-1 xs:mb-2 relative z-10" style={{ fontFamily: 'Literata, serif' }}>
        {displayCount}
      </div>
      <p className="text-gray-300 group-hover:text-white group-focus:text-white transition-colors duration-300 relative z-10 text-xs xs:text-sm sm:text-base leading-tight" style={{ fontFamily: 'Livvic, sans-serif' }}>
        {stat.label}
      </p>
    </div>
  );
};

export default About;

