import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, Award, ExternalLink, Github, Users, Code2, Lightbulb } from 'lucide-react';

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

const Experience = () => {
  const headerAnimation = useScrollAnimation(0.3);
  const experienceAnimation = useScrollAnimation(0.2);
  const projectsAnimation = useScrollAnimation(0.2);
  const achievementsAnimation = useScrollAnimation(0.2);

  // Experience data
  const experiences = [
    {
      title: "Teaching Assistant",
      company: "BITS College",
      location: "Addis Ababa, Ethiopia",
      period: "2023 - Present",
      type: "intrenship",
      description: "Supporting students in understanding programming concepts and providing guidance on software development projects.",
      responsibilities: [
        "Assisted students with programming assignments and projects",
        "Conducted tutorial sessions on data structures and algorithms",
        "Provided mentorship on software development best practices",
        "Helped organize coding workshops and tech events"
      ],
      technologies: ["Python", "Java", "Data Structures", "Algorithms"],
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Community Engagement Lead – GDG on Campus @ BITS College",
      company: "BITS College",
      location: "Addis Ababa, Ethiopia",
      period: " 2024 – Jan 2025",
      type: "Volunteer",
      description: "As Community Engagement Lead, I organized and led events like the Vibe Coding Hackathon, focusing on AI and product thinking. I collaborated with peers and industry speakers to promote innovation and technical collaboration on campus. This role honed my leadership, public speaking, and event planning skills.",
      responsibilities: [
        "Organized workshops on modern web development",
        "Facilitated coding bootcamps for beginners",
        "Promoted open-source contribution among students",
        "Mentored junior developers in the community"
      ],
      technologies: ["React", "Flutter", "Firebase", "Git"],
      icon: <Code2 className="w-5 h-5" />
    },
    {
      title: "E-learning Content Manager",
      company: " BITS College",
      location: "Addis Ababa, Ethiopia",
      period: "2022 - 2024",
      type: "Program",
      description: "Managed and structured course materials on Moodle for over 6 technical and mathematics subjects. Ensured content consistency, clarity, and accessibility for students and instructors.",
      responsibilities: [
        "Coordinated academic content delivery for 6+ subjects",
        "Improved resource organization using Moodle LMS",
        "Supported digital learning across hybrid classrooms",
        "Used Moodle LMS to manage and deliver course content",
        "Structured weekly modules, assignments, and quizzes",

      ],
      technologies: ["Moodle", "E-learning Systems", "Digital Content Management",],
      icon: <Lightbulb className="w-5 h-5" />
    }
  ];

  // Projects data
  const projects = [
  ];

  // Achievements data
  const achievements = [
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-6 xs:top-8 sm:top-10 md:top-20 left-3 xs:left-4 sm:left-5 md:left-10 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-6 xs:bottom-8 sm:bottom-10 md:bottom-20 right-3 xs:right-4 sm:right-5 md:right-10 w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
            My <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Experience</span>
          </h1>
          <div className="w-12 xs:w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-3 xs:mb-4 sm:mb-6 rounded-full" />
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg lg:text-xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 xs:px-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Explore my professional journey, projects, and achievements in software development
          </p>
        </div>

        {/* Experience Section */}
        <div
          ref={experienceAnimation.ref}
          className={`mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${
            experienceAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Professional <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <div className="space-y-6 xs:space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} isVisible={experienceAnimation.isVisible} />
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div
          ref={projectsAnimation.ref}
          className={`mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${
            projectsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isVisible={projectsAnimation.isVisible} />
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        
      </div>
    </div>
  );
};

// Experience Card Component
const ExperienceCard = ({ experience, index, isVisible }) => {
  return (
    <div
      className={`bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 backdrop-blur-sm rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-700 group cursor-pointer transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
        fontFamily: "'Roboto', sans-serif"
      }}
      tabIndex={0}
      role="button"
      aria-label={`${experience.title} at ${experience.company}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        <div className="flex-shrink-0">
          <div className="p-3 sm:p-4 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg xs:rounded-xl text-red-400 group-hover:text-red-300 transition-colors duration-300">
            {experience.icon}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
            <div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white group-hover:text-red-100 transition-colors duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {experience.title}
              </h3>
              <p className="text-sm xs:text-base sm:text-lg text-red-400 font-medium">
                {experience.company}
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-xs xs:text-sm text-gray-400 mb-1">
                <Calendar className="w-3 h-3 xs:w-4 xs:h-4" />
                {experience.period}
              </div>
              <div className="flex items-center gap-1 text-xs xs:text-sm text-gray-400 mb-1">
                <MapPin className="w-3 h-3 xs:w-4 xs:h-4" />
                {experience.location}
              </div>
              <span className="inline-block px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">
                {experience.type}
              </span>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm xs:text-base mb-4 leading-relaxed">
            {experience.description}
          </p>
          
          <div className="mb-4">
            <h4 className="text-sm xs:text-base font-semibold text-white mb-2">Key Responsibilities:</h4>
            <ul className="space-y-1 text-xs xs:text-sm text-gray-300">
              {experience.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md border border-slate-600/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Card Component

// Achievement Card Component
const AchievementCard = ({ achievement, index, isVisible }) => {
  return (
    <div
      className={`bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 backdrop-blur-sm rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 border border-slate-700/50 shadow-2xl hover:shadow-3xl transition-all duration-700 group cursor-pointer transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
        fontFamily: "'Roboto', sans-serif"
      }}
      tabIndex={0}
      role="button"
      aria-label={achievement.title}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
          {achievement.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-100 transition-colors duration-300 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {achievement.title}
          </h3>
          <p className="text-sm xs:text-base text-yellow-400 font-medium mb-1">
            {achievement.organization}
          </p>
          <span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
            {achievement.year}
          </span>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm xs:text-base leading-relaxed">
        {achievement.description}
      </p>
    </div>
  );
};

export default Experience;

