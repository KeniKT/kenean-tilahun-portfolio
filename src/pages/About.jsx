import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Smartphone, Award, Users, Coffee, Star } from 'lucide-react';

// Custom hook for scroll animations
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
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

// Counter animation hook
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

  // Skills data with updated percentages
  const skills = [
    {
      logo: <Code className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
      name: "Frontend Development",
      detailedSkills: ["React", "Vue.js", "JavaScript", "HTML5", "CSS3", "Modern Frameworks"],
      level: 95,
      color: "from-blue-500 to-cyan-500"
    },
    {
      logo: <Database className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />,
      name: "Backend Development",
      detailedSkills: ["Node.js", "Python", "PHP", "Database Management Systems"],
      level: 90,
      color: "from-green-500 to-emerald-500"
    },
    {
      logo: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      name: "Web Technologies",
      detailedSkills: ["Full-stack development", "Responsive Solutions", "Scalable Solutions"],
      level: 89,
      color: "from-purple-500 to-pink-500"
    },
    {
      logo: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />,
      name: "Mobile Development",
      detailedSkills: ["Cross-platform mobile apps", "React Native", "Flutter"],
      level: 87,
      color: "from-orange-500 to-red-500"
    }
  ];

  // Stats data
  const stats = [
    { number: 3, label: "Years Experience", icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: 10, label: "Projects Completed", icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: 5, label: "Happy Clients", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: 18, label: "Cups of Coffee", icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
            About <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Learn more about my journey, skills, and passion for creating exceptional digital experiences
          </p>
        </div>

        {/* Story Section */}
        <div
          ref={storyAnimation.ref}
          className={`mb-16 sm:mb-20 lg:mb-24 transition-all duration-1000 ${
            storyAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-700/50 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              My Story
            </h2>
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p className="relative pl-4 sm:pl-6 border-l-2 sm:border-l-4 border-red-500">
                <span className="absolute -left-1 sm:-left-2 top-0 w-2 h-2 sm:w-4 sm:h-4 bg-red-500 rounded-full"></span>
                Hello! I'm Kenean Tilahun, a passionate full-stack developer with a love for creating 
                innovative digital solutions. My journey into programming began during my university years, 
                where I discovered the power of code to solve real-world problems.
              </p>
              <p className="relative pl-4 sm:pl-6 border-l-2 sm:border-l-4 border-blue-500">
                <span className="absolute -left-1 sm:-left-2 top-0 w-2 h-2 sm:w-4 sm:h-4 bg-blue-500 rounded-full"></span>
                With over 3 years of experience in web development, I've worked on diverse projects 
                ranging from e-commerce platforms to enterprise applications. I believe in writing 
                clean, maintainable code and staying up-to-date with the latest technologies.
              </p>
              <p className="relative pl-4 sm:pl-6 border-l-2 sm:border-l-4 border-green-500">
                <span className="absolute -left-1 sm:-left-2 top-0 w-2 h-2 sm:w-4 sm:h-4 bg-green-500 rounded-full"></span>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I'm always 
                eager to take on new challenges and collaborate on exciting projects.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div
          ref={skillsAnimation.ref}
          className={`mb-16 sm:mb-20 lg:mb-24 transition-all duration-1000 ${
            skillsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-12 lg:mb-16">
            My <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <SkillProgressBar key={index} skill={skill} index={index} isVisible={skillsAnimation.isVisible} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsAnimation.ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 ${
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

// SkillProgressBar component
const SkillProgressBar = ({ skill, index, isVisible }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { count, startCounting } = useCountUp(skill.level, 2000);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setTimeout(() => {
        startCounting();
        setHasAnimated(true);
      }, index * 200);
    }
  }, [isVisible, hasAnimated, startCounting, index]);

  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-slate-700/50 shadow-lg relative overflow-hidden group transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`} />

      <div className="relative z-10">
        <div className="flex items-center space-x-3 sm:space-x-4 mb-2">
          <div className="flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-300">
            {skill.logo}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {skill.name}
          </h3>
        </div>

        <div className="text-gray-400 text-xs sm:text-sm flex flex-wrap gap-x-2 gap-y-1 mb-2 pl-8 sm:pl-12">
          {skill.detailedSkills.map((detail, idx) => (
            <span key={idx} className="whitespace-nowrap">
              {detail}{idx < skill.detailedSkills.length - 1 ? ' •' : ''}
            </span>
          ))}
        </div>

        <span className="text-red-400 text-base sm:text-lg font-bold block text-right mb-2">
          {count}%
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full bg-slate-700 rounded-full h-2 sm:h-2.5 relative z-10">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1500 ease-out`}
          style={{ 
            width: isVisible ? `${count}%` : '0%',
            transitionDelay: `${index * 200 + 300}ms`
          }}
        />
      </div>
    </div>
  );
};

// StatCard component
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
      className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl text-center border border-slate-700/50 shadow-xl relative overflow-hidden group transition-all duration-800 hover:scale-105 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
      
      <div className="text-red-400 mb-3 sm:mb-4 relative z-10 group-hover:rotate-12 transition-transform duration-300">
        {stat.icon}
      </div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-400 mb-1 sm:mb-2 relative z-10">
        {displayCount}
      </div>
      <p className="text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10 text-sm sm:text-base">
        {stat.label}
      </p>
    </div>
  );
};

export default About;