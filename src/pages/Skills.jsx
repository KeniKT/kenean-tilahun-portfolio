import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Smartphone, Target, Award, Heart } from 'lucide-react';

// Scroll Animation Hook
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold, rootMargin: '50px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const Skills = () => {
  const headerAnimation = useScrollAnimation(0.3);
  const skillsAnimation = useScrollAnimation(0.2);
  const valuesAnimation = useScrollAnimation(0.2);

  const skills = [
    {
      logo: <Code className="w-5 h-5 text-gray-400" />,
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
      logo: <Database className="w-5 h-5 text-gray-400" />,
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
      logo: <Globe className="w-5 h-5 text-gray-400" />,
      name: "Web Technologies",
      detailedSkills: [
        { name: "Full-stack Development", percentage: 88 },
        { name: "Responsive Solutions", percentage: 90 },
        { name: "Scalable Solutions", percentage: 85 }
      ],
      color: "from-red-900 to-red-800"
    },
    {
      logo: <Smartphone className="w-5 h-5 text-gray-400" />,
      name: "Mobile Development",
      detailedSkills: [
        { name: "Cross-platform Mobile Apps", percentage: 86 },
        { name: "React Native", percentage: 88 },
        { name: "Flutter", percentage: 85 }
      ],
      color: "from-red-900 to-red-800"
    }
  ];

  const coreValues = [
    {
      icon: <Target className="w-6 h-6 text-red-400" />,
      title: "Innovation",
      description: "Exploring new technologies and creative solutions to solve complex problems."
    },
    {
      icon: <Award className="w-6 h-6 text-red-400" />,
      title: "Quality",
      description: "Delivering high-quality, scalable, and maintainable code in every project."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: "Collaboration",
      description: "Believing in teamwork and open communication to achieve great results."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 relative overflow-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
      
      {/* Background glow elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>
            My <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Skills</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore my technical expertise and proficiency across technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={skillsAnimation.ref}
          className={`mb-20 transition-all duration-1000 ${
            skillsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} isVisible={skillsAnimation.isVisible} />
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div
          ref={valuesAnimation.ref}
          className={`transition-all duration-1000 ${
            valuesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <ValueCard key={index} value={value} index={index} isVisible={valuesAnimation.isVisible} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// Skill Card
const SkillCard = ({ skill, index, isVisible }) => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        skill.detailedSkills.forEach((individualSkill, skillIndex) => {
          const key = `${skill.name}-${skillIndex}`;
          setTimeout(() => {
            setAnimatedSkills(prev => ({ ...prev, [key]: individualSkill.percentage }));
          }, skillIndex * 150);
        });
      }, index * 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill, index]);

  return (
    <div
      className={`relative bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center mb-6 space-x-3">
        <div className="p-3 bg-slate-700/50 rounded-xl group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-300">
          {skill.logo}
        </div>
        <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {skill.name}
        </h3>
      </div>
      <div className="space-y-4">
        {skill.detailedSkills.map((individualSkill, skillIndex) => {
          const key = `${skill.name}-${skillIndex}`;
          const animatedPercentage = animatedSkills[key] || 0;
          return (
            <div key={skillIndex}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-300">{individualSkill.name}</span>
                <span className="text-sm text-gray-400 font-bold">{Math.round(animatedPercentage)}%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${animatedPercentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Value Card
const ValueCard = ({ value, index, isVisible }) => (
  <div
    className={`bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-center ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    style={{ transitionDelay: `${index * 200}ms` }}
  >
    <div className="flex justify-center mb-4">{value.icon}</div>
    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {value.title}
    </h3>
    <p className="text-sm text-gray-300">{value.description}</p>
  </div>
);

export default Skills;
