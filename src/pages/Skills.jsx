import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Smartphone, Target, Award, Heart } from 'lucide-react';

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

const Skills = () => {
  const headerAnimation = useScrollAnimation(0.3);
  const skillsAnimation = useScrollAnimation(0.2);
  const valuesAnimation = useScrollAnimation(0.2);

  // Updated skills data with individual percentages for each skill (85-90% range)
  const skills = [
    {
      logo: <Code className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-gray-400" />,
      name: "Frontend Development",
      detailedSkills: [
        { name: "React", percentage: 89 },
        { name: "Vue.js", percentage: 87 },
        { name: "JavaScript", percentage: 90 },
        { name: "HTML5", percentage: 88 },
        { name: "CSS3", percentage: 86 },
        { name: "Modern Frameworks", percentage: 85 }
      ],
      color: "from-red-900 to-red-800"
    },
    {
      logo: <Database className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-gray-400" />,
      name: "Backend Development",
      detailedSkills: [
        { name: "Node.js", percentage: 87 },
        { name: "Python", percentage: 85 },
        { name: "PHP", percentage: 89 },
        { name: "Database Management Systems", percentage: 86 }
      ],
      color: "from-red-900 to-red-800"
    },
    {
      logo: <Globe className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-gray-400" />,
      name: "Web Technologies",
      detailedSkills: [
        { name: "Full-stack Development", percentage: 88 },
        { name: "Responsive Solutions", percentage: 90 },
        { name: "Scalable Solutions", percentage: 85 }
      ],
      color: "from-red-900 to-red-800"
    },
    {
      logo: <Smartphone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-gray-400" />,
      name: "Mobile Development",
      detailedSkills: [
        { name: "Cross-platform Mobile Apps", percentage: 86 },
        { name: "React Native", percentage: 88 },
        { name: "Flutter", percentage: 85 }
      ],
      color: "from-red-900 to-red-800"
    }
  ];

  // Core Values data
  const coreValues = [
    {
      icon: <Target className="w-6 h-6 text-red-400" />,
      title: "Innovation",
      description: "Constantly exploring new technologies and creative solutions to solve complex problems."
    },
    {
      icon: <Award className="w-6 h-6 text-red-400" />,
      title: "Quality",
      description: "Committed to delivering high-quality, scalable, and maintainable code in every project."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: "Collaboration",
      description: "Believing in the power of teamwork and open communication to achieve exceptional results."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
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
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
            My <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Skills</span>
          </h1>
          <div className="w-12 xs:w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-3 xs:mb-4 sm:mb-6 rounded-full" />
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg lg:text-xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 xs:px-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Explore my technical expertise and proficiency across various technologies and frameworks
          </p>
        </div>

        {/* Enhanced Skills Section with 4 cards in a row - MODIFIED GRID LAYOUT */}
        <div
          ref={skillsAnimation.ref}
          className={`mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${
            skillsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Updated grid to show 4 cards in a row on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-4 lg:gap-6 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} isVisible={skillsAnimation.isVisible} />
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div
          ref={valuesAnimation.ref}
          className={`mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${
            valuesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <ValueCard key={index} value={value} index={index} isVisible={valuesAnimation.isVisible} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced SkillCard component with REDUCED FONT SIZES
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
      }, index * 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill, index]);

  return (
    <div
      className={`bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 backdrop-blur-sm rounded-xl xs:rounded-2xl sm:rounded-3xl p-3 xs:p-4 sm:p-5 lg:p-6 border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-700 group cursor-pointer transform hover:scale-[1.02] min-h-[220px] xs:min-h-[250px] sm:min-h-[280px] lg:min-h-[320px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        fontFamily: "'Roboto', sans-serif"
      }}
      tabIndex={0}
      role="button"
      aria-label={`${skill.name} skills`}
    >
      {/* Enhanced decorative corner elements */}
      <div className="absolute top-0 left-0 w-6 h-6 xs:w-8 xs:h-8 bg-gradient-to-br from-red-500/10 to-transparent rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-6 h-6 xs:w-8 xs:h-8 bg-gradient-to-tl from-red-500/10 to-transparent rounded-tl-full" />

      <div className="relative z-10">
        {/* Enhanced skill header with REDUCED FONT SIZES */}
        <div className="flex items-center space-x-2 xs:space-x-3 mb-3 xs:mb-4 sm:mb-5 lg:mb-6 group-hover:scale-105 transition-transform duration-300">
          <div className="p-1.5 xs:p-2 sm:p-2.5 lg:p-3 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-lg xs:rounded-xl group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-300 shadow-lg">
            {skill.logo}
          </div>
          <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-red-100 transition-colors duration-300 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {skill.name}
          </h3>
        </div>

        {/* Enhanced individual skills with animated progress bars - REDUCED FONT SIZES */}
        <div className="space-y-2 xs:space-y-3 sm:space-y-3 lg:space-y-4">
          {skill.detailedSkills.map((individualSkill, skillIndex) => {
            const key = `${skill.name}-${skillIndex}`;
            const animatedPercentage = animatedSkills[key] || 0;

            return (
              <div key={skillIndex} className="group/skill">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs xs:text-xs sm:text-sm lg:text-sm text-gray-300 group-hover:text-white group/skill-hover:text-red-200 transition-colors duration-300 font-medium">
                    {individualSkill.name}
                  </span>
                  <span className="text-xs xs:text-xs sm:text-sm lg:text-sm text-gray-400 group-hover:text-gray-200 group/skill-hover:text-red-300 transition-colors duration-300 font-bold">
                    {Math.round(animatedPercentage)}%
                  </span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-1 xs:h-1.5 sm:h-1.5 lg:h-2 overflow-hidden shadow-inner">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg group/skill-hover:shadow-red-500/50`}
                    style={{
                      width: `${animatedPercentage}%`,
                      transitionDelay: `${skillIndex * 100}ms`
                    }}
                  >
                    <div className="h-full bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Smaller Value Card Component for Core Values - REDUCED FONT SIZES
const ValueCard = ({ value, index, isVisible }) => {
  return (
    <div
      className={`bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 backdrop-blur-sm rounded-lg xs:rounded-xl p-3 xs:p-4 sm:p-5 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:scale-105 text-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
        fontFamily: "'Roboto', sans-serif"
      }}
    >
      {/* Icon - REDUCED SIZE */}
      <div className="flex justify-center mb-2 xs:mb-3 group-hover:scale-110 transition-transform duration-300">
        {value.icon}
      </div>
      
      {/* Title - REDUCED FONT SIZE */}
      <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-red-100 transition-colors duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {value.title}
      </h3>
      
      {/* Description - REDUCED FONT SIZE */}
      <p className="text-xs xs:text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
        {value.description}
      </p>
    </div>
  );
};

export default Skills;

