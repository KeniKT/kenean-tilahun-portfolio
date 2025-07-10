import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import BookShareImage from "../assets/BookShare.png";
import MachineryImage from "../assets/Machinery Management.png";

// Custom hook for scroll animations (same as About page)
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

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Scroll animation refs (same pattern as About page)
  const headerAnimation = useScrollAnimation(0.3);
  const filtersAnimation = useScrollAnimation(0.2);
  const projectsAnimation = useScrollAnimation(0.2);
  const ctaAnimation = useScrollAnimation(0.3);

  const projects = [
   {
  id: 1,
  title: "BookShare",
  description: "A full-stack book sharing platform built with React, TypeScript, and Vite. It features a clean UI, fast navigation, and efficient deployment on Vercel. Designed to promote collaborative reading and book exchange.",
  category: "web",
  technologies: ["React", "TypeScript", "Vite", "ESLint", "Vercel"],
  image: BookShareImage,
  github: "https://github.com/KeniKT/BookShare",
  demo: "https://book-share-hazel.vercel.app/"
},

    {
      id: 2,
      title: "Machinery Management System",
      description: "A full-stack web application designed to streamline machinery inventory and maintenance tracking. Features role-based access control, allowing Admins to manage machinery data and assign maintenance tasks, while Technicians track and update their task progress in a structured workflow.",
      category: "web",
      technologies: ["Node.js", "Express.js", "SQLite", "EJS", "JavaScript"],
      image: MachineryImage,
      github: "https://github.com/KeniKT/machinery_management_system",
      demo: "https://demo-taskapp.com"
    },
    {
      id: 3,
      title: "Weather Mobile App",
      description: "Cross-platform mobile weather application with location services, weather forecasts, and beautiful UI animations.",
      category: "mobile",
      technologies: ["React Native", "OpenWeather API", "AsyncStorage"],
      image: BookShareImage,
      github: "https://github.com/username/weatherapp",
      demo: "https://play.google.com/store/apps/details?id=com.weatherapp"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative design and smooth animations. Built with modern web technologies.",
      category: "web",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/username/portfolio",
      demo: "https://keneantilahun.com"
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data visualization with charts, graphs, and real-time data updates for business analytics.",
      category: "web",
      technologies: ["React", "D3.js", "Python", "Flask"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/username/dashboard",
      demo: "https://demo-dashboard.com"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Comprehensive LMS with course management, video streaming, quiz system, and progress tracking for educational institutions.",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/username/lms",
      demo: "https://demo-lms.com"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'ui', label: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Animated Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-16 md:top-20 left-4 sm:left-6 md:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 right-4 sm:right-6 md:right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Fully responsive */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
            My <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full" />
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed px-4">
            Explore my latest work and creative projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Filter Buttons - Fully responsive */}
        <div
          ref={filtersAnimation.ref}
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-16 sm:mb-20 md:mb-24 lg:mb-32 transition-all duration-1000 ${
            filtersAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-medium text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 flex items-center gap-1 sm:gap-2 md:gap-3 transform hover:scale-105 hover:shadow-lg ${
                activeFilter === category.key
                  ? 'bg-gradient-to-r from-red-900 to-red-800 text-white shadow-lg shadow-red-900/25'
                  : 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-gray-300 hover:bg-slate-700/50'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              <span className="hidden xs:inline sm:inline">{category.label}</span>
              <span className="xs:hidden sm:hidden">{category.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Fully responsive */}
        <div
          ref={projectsAnimation.ref}
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-16 sm:mb-20 md:mb-24 lg:mb-32 transition-all duration-1000 ${
            projectsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isVisible={projectsAnimation.isVisible} />
          ))}
        </div>

        {/* Call to Action - Fully responsive */}
        <div
          ref={ctaAnimation.ref}
          className={`text-center transition-all duration-1000 ${
            ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 border border-slate-700/50 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Like What You See?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-4">
              Let's work together to bring your ideas to life and create something amazing
            </p>
            <button className="bg-gradient-to-r from-red-900 to-red-800 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg font-medium text-sm sm:text-base md:text-lg hover:from-red-800 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-900/25">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProjectCard component - Fully responsive
const ProjectCard = ({ project, index, isVisible }) => {
  return (
    <div
      className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl relative group transition-all duration-800 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />

      {/* Project Image - Responsive */}
      <div className="relative overflow-hidden">
        <div className="aspect-[16/9] sm:aspect-[16/10] h-40 sm:h-48 md:h-56 lg:h-64">
          <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
      </div>

      {/* Project Content - Responsive */}
      <div className="p-4 sm:p-5 md:p-6 lg:p-8 relative z-10">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white group-hover:text-red-400 transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 line-clamp-3 sm:line-clamp-4 group-hover:text-gray-200 transition-all duration-300 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies - Responsive */}
        <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="bg-slate-700/70 text-red-400 px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-red-900/30 hover:scale-105 border border-slate-600/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-slate-700/70 text-red-400 px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-medium border border-slate-600/50">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons - Responsive */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-3 md:pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2 md:gap-3 text-gray-300 hover:text-red-400 transition-all duration-300 hover:scale-105 group/btn"
          >
            <Github className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:rotate-12" />
            <span className="text-xs sm:text-sm md:text-base font-medium">Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2 md:gap-3 text-gray-300 hover:text-red-400 transition-all duration-300 hover:scale-105 group/btn"
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:rotate-12" />
            <span className="text-xs sm:text-sm md:text-base font-medium">Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;