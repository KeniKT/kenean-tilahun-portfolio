import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Filter, Code, Eye, Star } from 'lucide-react';

import Book from "../assets/Book.png";
import Management from "../assets/Managemat.png";
import sira from "../assets/sira.png";

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

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Scroll animation refs
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
    { key: 'all', label: 'All Projects', shortLabel: 'All' },
    { key: 'web', label: 'Web Development', shortLabel: 'Web' },
    { key: 'mobile', label: 'Mobile Apps', shortLabel: 'Mobile' },
    { key: 'ui', label: 'UI/UX Design', shortLabel: 'UI/UX' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Function to handle navigation to contact page
  const handleContactNavigation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '#contact';
    }
  };

  // Handle keyboard navigation for filters
  const handleFilterKeyDown = (event, categoryKey) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveFilter(categoryKey);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 relative overflow-hidden" style={{ fontFamily: 'Livvic, sans-serif' }}>
      {/* Optimized Background Elements - Reduced for mobile performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 xs:top-6 sm:top-8 md:top-12 lg:top-16 left-2 xs:left-4 sm:left-6 md:left-8 lg:left-10 w-16 h-16 xs:w-20 xs:h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-16 right-2 xs:right-4 sm:right-6 md:right-8 lg:right-10 w-20 h-20 xs:w-24 xs:h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-96 xl:h-96 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-900/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header with better mobile typography */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Literata, serif' }}>
            My <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-8 rounded-full" />
          <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-2 xs:px-4" style={{ fontFamily: 'Livvic, sans-serif' }}>
            Explore my latest work and creative projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Enhanced Filter Buttons with better touch targets and accessibility */}
        <div
          ref={filtersAnimation.ref}
          className={`flex flex-wrap justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 transition-all duration-1000 ${
            filtersAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              onKeyDown={(e) => handleFilterKeyDown(e, category.key)}
              className={`min-h-[40px] xs:min-h-[44px] px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg xs:rounded-xl font-medium text-xs xs:text-sm sm:text-base md:text-lg transition-all duration-300 flex items-center gap-1 xs:gap-2 sm:gap-3 transform hover:scale-105 focus:scale-105 hover:shadow-lg focus:shadow-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                activeFilter === category.key
                  ? 'bg-gradient-to-r from-red-900 to-red-800 text-white shadow-lg shadow-red-900/25 border border-red-700/50'
                  : 'bg-slate-800/50 border border-slate-700/50 text-gray-300 hover:bg-slate-700/50 hover:border-slate-600/50 focus:bg-slate-700/50 focus:border-slate-600/50'
              }`}
              style={{ transitionDelay: `${index * 100}ms`, fontFamily: 'Livvic, sans-serif' }}
              aria-label={`Filter projects by ${category.label}`}
              role="tab"
              aria-selected={activeFilter === category.key}
            >
              <Filter className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline sm:inline">{category.label}</span>
              <span className="xs:hidden sm:hidden">{category.shortLabel}</span>
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid with better mobile layout */}
        <div
          ref={projectsAnimation.ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 transition-all duration-1000 ${
            projectsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          role="region"
          aria-label="Projects showcase"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isVisible={projectsAnimation.isVisible} />
          ))}
        </div>

        {/* Enhanced Call to Action with better mobile layout */}
        <div
          ref={ctaAnimation.ref}
          className={`flex justify-center transition-all duration-1000 ${
            ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div 
            className="bg-gradient-to-r from-slate-800/70 to-slate-700/70 backdrop-blur-sm rounded-xl px-3 py-3 xs:px-4 xs:py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 border border-slate-700/50 shadow-xl relative overflow-hidden max-w-4xl w-full group hover:scale-105 focus-within:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-red-900/20 focus-within:shadow-2xl focus-within:shadow-red-900/20 cursor-pointer" 
            onClick={handleContactNavigation}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleContactNavigation();
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Navigate to contact section"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-red-600/10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 rounded-xl" />
            <div className="absolute top-1 right-1 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-1 left-1 w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.5s' }} />
            
            <div className="relative z-10 flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-3 sm:gap-4 text-center xs:text-left">
              <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent group-hover:from-red-300 group-hover:to-red-500 group-focus-within:from-red-300 group-focus-within:to-red-500 transition-all duration-300" style={{ fontFamily: 'Literata, serif' }}>
                Like What You See?
              </h2>
              <span className="hidden xs:inline text-gray-400 text-xs xs:text-sm sm:text-base">•</span>
              <p 
                className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg group-hover:text-red-300 group-focus-within:text-red-300 transition-all duration-300 flex-1" 
                style={{ fontFamily: 'Livvic, sans-serif' }}
              >
                Let's work together to bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced ProjectCard component with improved accessibility and mobile optimization
const ProjectCard = ({ project, index, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className={`bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-xl xs:rounded-2xl lg:rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl relative group transition-all duration-800 hover:scale-[1.02] focus-within:scale-[1.02] hover:shadow-2xl hover:shadow-red-900/20 focus-within:shadow-2xl focus-within:shadow-red-900/20 hover:border-red-700/30 focus-within:border-red-700/30 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms`, fontFamily: 'Livvic, sans-serif' }}
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-2 xs:top-3 lg:top-4 right-2 xs:right-3 lg:right-4 z-20 bg-gradient-to-r from-red-900 to-red-800 text-white px-2 py-0.5 xs:px-2 xs:py-1 lg:px-3 lg:py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg" style={{ fontFamily: 'Livvic, sans-serif' }}>
          <Star className="w-2.5 h-2.5 xs:w-3 xs:h-3 fill-current" />
          <span className="hidden xs:inline">Featured</span>
        </div>
      )}

      {/* Enhanced background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-red-600/10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 rounded-xl xs:rounded-2xl lg:rounded-3xl" />

      {/* Optimized Project Image with lazy loading */}
      <div className="relative overflow-hidden">
        <div className="aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
          {!imageError ? (
            <img 
              src={project.image} 
              alt={`Screenshot of ${project.title} project`}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-focus-within:scale-110 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400" role="img" aria-label="Project image placeholder">
              <Code className="w-6 h-6 xs:w-8 xs:h-8 lg:w-12 lg:h-12" />
            </div>
          )}
          
          {/* Loading skeleton */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse" />
          )}
          
          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500" />
          
          {/* Enhanced hover overlay with better touch targets */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 xs:gap-3 lg:gap-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/80 backdrop-blur-sm text-white p-2.5 xs:p-3 lg:p-4 rounded-full hover:bg-red-900/80 focus:bg-red-900/80 transition-all duration-300 transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black/80 min-w-[40px] min-h-[40px] xs:min-w-[44px] xs:min-h-[44px] flex items-center justify-center"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github className="w-3.5 h-3.5 xs:w-4 xs:h-4 lg:w-5 lg:h-5" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/80 backdrop-blur-sm text-white p-2.5 xs:p-3 lg:p-4 rounded-full hover:bg-red-900/80 focus:bg-red-900/80 transition-all duration-300 transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black/80 min-w-[40px] min-h-[40px] xs:min-w-[44px] xs:min-h-[44px] flex items-center justify-center"
              aria-label={`View ${project.title} live demo`}
            >
              <Eye className="w-3.5 h-3.5 xs:w-4 xs:h-4 lg:w-5 lg:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Project Content with better mobile typography and LEFT-ALIGNED descriptions */}
      <div className="p-3 xs:p-4 sm:p-5 md:p-4 lg:p-6 xl:p-8 relative z-10">
        <h3 
          id={`project-title-${project.id}`}
          className="text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 xs:mb-2.5 sm:mb-3 md:mb-2.5 lg:mb-3 text-white group-hover:text-red-400 group-focus-within:text-red-400 transition-all duration-300 leading-tight text-left" 
          style={{ fontFamily: 'Literata, serif' }}
        >
          {project.title}
        </h3>
        {/* MAIN CHANGE: Added text-left class and removed line-clamp for better left alignment */}
        <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-sm lg:text-base xl:text-lg mb-3 xs:mb-3.5 sm:mb-4 md:mb-3.5 lg:mb-4 group-hover:text-gray-200 group-focus-within:text-gray-200 transition-all duration-300 leading-relaxed text-left" style={{ fontFamily: 'Livvic, sans-serif' }}>
          {project.description}
        </p>

        {/* Enhanced Technologies with better mobile layout */}
        <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 xl:gap-3 mb-3 xs:mb-3.5 sm:mb-4 md:mb-3.5 lg:mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="bg-gradient-to-r from-slate-700/80 to-slate-600/80 backdrop-blur-sm text-red-400 px-1.5 py-0.5 xs:px-2 xs:py-1 sm:px-3 sm:py-1.5 md:px-2.5 md:py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 rounded-full text-xs xs:text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-red-900/40 hover:to-red-800/40 hover:scale-105 focus:bg-gradient-to-r focus:from-red-900/40 focus:to-red-800/40 focus:scale-105 border border-slate-600/50 hover:border-red-500/50 focus:border-red-500/50" 
              style={{ fontFamily: 'Livvic, sans-serif' }}
              tabIndex={0}
              role="button"
              aria-label={`Technology: ${tech}`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span 
              className="bg-gradient-to-r from-slate-700/80 to-slate-600/80 backdrop-blur-sm text-red-400 px-1.5 py-0.5 xs:px-2 xs:py-1 sm:px-3 sm:py-1.5 md:px-2.5 md:py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2 rounded-full text-xs xs:text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-medium border border-slate-600/50" 
              style={{ fontFamily: 'Livvic, sans-serif' }}
              aria-label={`${project.technologies.length - 4} more technologies`}
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Enhanced Action Buttons with better touch targets */}
        <div className="flex gap-2 xs:gap-3 sm:gap-4 md:gap-3 lg:gap-4 xl:gap-5 pt-2 xs:pt-2.5 sm:pt-3 md:pt-2.5 lg:pt-3 border-t border-slate-600/30">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 xl:gap-3 text-gray-300 hover:text-red-400 focus:text-red-400 transition-all duration-300 hover:scale-105 focus:scale-105 group/btn bg-slate-700/50 px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 rounded-lg hover:bg-red-900/20 focus:bg-red-900/20 border border-slate-600/50 hover:border-red-500/50 focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800 min-h-[36px] xs:min-h-[40px] lg:min-h-[44px] flex-1 justify-center" 
            style={{ fontFamily: 'Livvic, sans-serif' }}
            aria-label={`View ${project.title} source code`}
          >
            <Github className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 transition-transform duration-300 group-hover/btn:rotate-12 group-focus/btn:rotate-12" />
            <span className="text-xs xs:text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-medium">Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 xl:gap-3 text-gray-300 hover:text-red-400 focus:text-red-400 transition-all duration-300 hover:scale-105 focus:scale-105 group/btn bg-slate-700/50 px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5 rounded-lg hover:bg-red-900/20 focus:bg-red-900/20 border border-slate-600/50 hover:border-red-500/50 focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800 min-h-[36px] xs:min-h-[40px] lg:min-h-[44px] flex-1 justify-center" 
            style={{ fontFamily: 'Livvic, sans-serif' }}
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 transition-transform duration-300 group-hover/btn:rotate-12 group-focus/btn:rotate-12" />
            <span className="text-xs xs:text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-medium">Demo</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Projects;

