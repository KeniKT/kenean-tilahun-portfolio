import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Filter, Code, Eye, Star } from 'lucide-react';

import Book from "../assets/Book.png";
import Management from "../assets/Managemat.png";
import sira from "../assets/sira.png";


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
  image: Book,
  github: "https://github.com/KeniKT/BookShare",
  demo: "https://book-share-hazel.vercel.app/",
  featured: true
},

    {
      id: 2,
      title: "Machinery Management System",
      description: "A full-stack web application designed to streamline machinery inventory and maintenance tracking. Features role-based access control, allowing Admins to manage machinery data and assign maintenance tasks, while Technicians track and update their task progress in a structured workflow.",
      category: "web",
      technologies: ["Node.js", "Express.js", "SQLite", "EJS", "JavaScript"],
      image: Management,
      github: "https://github.com/KeniKT/machinery_management_system",
      demo: "https://demo-taskapp.com",
      featured: false
    },
    {
      id: 3,
      title: "SIRA",
      description: "A mobile freelancing platform that connects employers with skilled professionals. Built using Flutter and Firebase, the app features intuitive Talent and Employer profiles, seamless file uploads, and robust BLoC state management. Emphasizing scalability, performance, and security, SIRA ensures smooth collaboration and reliable data handling, making it a comprehensive solution for mobile-based freelancing.",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "BLoC", "Dart"],
      image: sira,
      github: "https://github.com/username/weatherapp",
      demo: "https://play.google.com/store/apps/details?id=com.weatherapp",
      featured: true
    },
    
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
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-16 md:top-20 left-4 sm:left-6 md:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 right-4 sm:right-6 md:right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-900/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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

        {/* Enhanced Filter Buttons */}
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
              className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-xl font-medium text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 flex items-center gap-1 sm:gap-2 md:gap-3 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm ${
                activeFilter === category.key
                  ? 'bg-gradient-to-r from-red-900 to-red-800 text-white shadow-lg shadow-red-900/25 border border-red-700/50'
                  : 'bg-slate-800/50 border border-slate-700/50 text-gray-300 hover:bg-slate-700/50 hover:border-slate-600/50'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              <span className="hidden xs:inline sm:inline">{category.label}</span>
              <span className="xs:hidden sm:hidden">{category.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Enhanced styling */}
        <div
          ref={projectsAnimation.ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-8 lg:gap-10 xl:gap-12 mb-16 sm:mb-20 md:mb-24 lg:mb-32 transition-all duration-1000 ${
            projectsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isVisible={projectsAnimation.isVisible} />
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div
          ref={ctaAnimation.ref}
          className={`text-center transition-all duration-1000 ${
            ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 border border-slate-700/50 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-red-600/10 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Like What You See?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-4">
                Let's work together to bring your ideas to life and create something amazing
              </p>
              <button className="bg-gradient-to-r from-red-900 to-red-800 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl font-medium text-sm sm:text-base md:text-lg hover:from-red-800 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-900/25 border border-red-700/50">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced ProjectCard component with fixed image fitting and stylish design
const ProjectCard = ({ project, index, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl relative group transition-all duration-800 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-900/20 hover:border-red-700/30 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-red-900 to-red-800 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
          <Star className="w-3 h-3 fill-current" />
          Featured
        </div>
      )}

      {/* Enhanced background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      {/* Fixed Project Image with better aspect ratio and fitting */}
      <div className="relative overflow-hidden">
        <div className="aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
          {!imageError ? (
            <img 
              src={project.image} 
              alt={project.title}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <Code className="w-12 h-12" />
            </div>
          )}
          
          {/* Loading skeleton */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse" />
          )}
          
          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Hover overlay with quick actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-red-900/80 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-red-900/80 transition-all duration-300 transform hover:scale-110"
            >
              <Eye className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Project Content */}
      <div className="p-6 sm:p-8 md:p-6 lg:p-8 xl:p-10 relative z-10">
        <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4 md:mb-3 lg:mb-4 text-white group-hover:text-red-400 transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 text-base sm:text-lg md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-5 md:mb-4 lg:mb-5 line-clamp-3 group-hover:text-gray-200 transition-all duration-300 leading-relaxed">
          {project.description}
        </p>

        {/* Enhanced Technologies with better styling */}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-2 lg:gap-3 xl:gap-3 mb-4 sm:mb-5 md:mb-4 lg:mb-5">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="bg-gradient-to-r from-slate-700/80 to-slate-600/80 backdrop-blur-sm text-red-400 px-3 py-1.5 sm:px-4 sm:py-2 md:px-3 md:py-1.5 lg:px-4 lg:py-2 xl:px-4 xl:py-2 rounded-full text-sm sm:text-base md:text-sm lg:text-base xl:text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-red-900/40 hover:to-red-800/40 hover:scale-105 border border-slate-600/50 hover:border-red-500/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-gradient-to-r from-slate-700/80 to-slate-600/80 backdrop-blur-sm text-red-400 px-3 py-1.5 sm:px-4 sm:py-2 md:px-3 md:py-1.5 lg:px-4 lg:py-2 xl:px-4 xl:py-2 rounded-full text-sm sm:text-base md:text-sm lg:text-base xl:text-base font-medium border border-slate-600/50">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex gap-4 sm:gap-5 md:gap-4 lg:gap-5 xl:gap-6 pt-3 sm:pt-4 md:pt-3 lg:pt-4 border-t border-slate-600/30">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 md:gap-2 lg:gap-3 xl:gap-3 text-gray-300 hover:text-red-400 transition-all duration-300 hover:scale-105 group/btn bg-slate-700/50 px-4 py-2 rounded-lg hover:bg-red-900/20 border border-slate-600/50 hover:border-red-500/50"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 transition-transform duration-300 group-hover/btn:rotate-12" />
            <span className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-medium">Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 md:gap-2 lg:gap-3 xl:gap-3 text-gray-300 hover:text-red-400 transition-all duration-300 hover:scale-105 group/btn bg-slate-700/50 px-4 py-2 rounded-lg hover:bg-red-900/20 border border-slate-600/50 hover:border-red-500/50"
          >
            <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 transition-transform duration-300 group-hover/btn:rotate-12" />
            <span className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-medium">Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;