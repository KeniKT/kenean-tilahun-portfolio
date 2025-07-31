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
    : projects.filter(project => project.category === activeFilter );

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
    <div className="min-h-screen bg-slate-900 text-white py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 relative overflow-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
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
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
            My <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-8 rounded-full" />
          <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-2 xs:px-4">
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
              style={{ transitionDelay: `${index * 100}ms` }}
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

        {/* Enhanced Projects Grid with 3-column layout */}
        <div
          ref={projectsAnimation.ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 transition-all duration-1000 ${
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
              <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent group-hover:from-red-300 group-hover:to-red-500 group-focus-within:from-red-300 group-focus-within:to-red-500 transition-all duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Like What You See?
              </h2>
              <span className="hidden xs:inline text-gray-400 text-xs xs:text-sm sm:text-base">•</span>
              <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg group-hover:text-red-300 group-focus-within:text-red-300 transition-all duration-300 flex-1">
                Let's work together to bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Perfectly Symmetric ProjectCard component
const ProjectCard = ({ project, index, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <article
      className={`bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl relative group transition-all duration-800 hover:scale-[1.02] focus-within:scale-[1.02] hover:shadow-2xl hover:shadow-red-900/20 focus-within:shadow-2xl focus-within:shadow-red-900/20 hover:border-red-700/30 focus-within:border-red-700/30 w-full h-full flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-red-900 to-red-800 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
          <Star className="w-3 h-3 fill-current" />
          <span>Featured</span>
        </div>
      )}

      {/* Enhanced background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-red-600/10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Project Image Section - Fixed Height */}
      <div className="relative overflow-hidden flex-shrink-0">
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
              <Code className="w-12 h-12" />
            </div>
          )}

          {/* Loading skeleton */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse" />
          )}

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500" />

          {/* Hover overlay with action buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-500 z-10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-red-900/80 focus:bg-red-900/80 transition-all duration-300 transform hover:scale-110 focus:scale-110 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-red-900/80 focus:bg-red-900/80 transition-all duration-300 transform hover:scale-110 focus:scale-110 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Content Section - Flexible Height with Consistent Padding */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        {/* Project Title */}
        <div>
          <h3
            id={`project-title-${project.id}`}
            className="text-xl font-bold text-white group-hover:text-red-300 group-focus-within:text-red-300 transition-all duration-300 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {project.title}
          </h3>
        </div>

        {/* Project Description - Consistent Height */}
        <div className="flex-grow">
          <div className="relative">
            <p className="text-gray-400 text-sm leading-relaxed transition-all duration-300 overflow-hidden"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: isDescriptionExpanded ? 'none' : '3',
                WebkitBoxOrient: 'vertical',
                textOverflow: 'ellipsis'
              }}
            >
              {project.description}
            </p>
            {project.description.length > 150 && (
              <button
                onClick={toggleDescription}
                className="text-red-400 hover:text-red-300 focus:text-red-300 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800 rounded px-1 mt-2"
                aria-label={isDescriptionExpanded ? 'Show less description' : 'Show more description'}
              >
                {isDescriptionExpanded ? 'Show Less' : 'Read More'}
              </button>
            )}
          </div>
        </div>

        {/* Technology Tags - Consistent Spacing */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium border border-slate-600/30 hover:bg-red-900/30 hover:border-red-700/50 hover:text-red-300 transition-all duration-300 backdrop-blur-sm"
              style={{ transitionDelay: `${techIndex * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons - Fixed at Bottom */}
        <div className="flex gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-slate-700/50 hover:bg-red-900/50 focus:bg-red-900/50 text-gray-300 hover:text-white focus:text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 border border-slate-600/30 hover:border-red-700/50 focus:border-red-700/50 backdrop-blur-sm transform hover:scale-[1.02] focus:scale-[1.02] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-red-900/80 to-red-800/80 hover:from-red-800 hover:to-red-700 focus:from-red-800 focus:to-red-700 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 border border-red-700/50 hover:border-red-600/50 focus:border-red-600/50 backdrop-blur-sm transform hover:scale-[1.02] focus:scale-[1.02] hover:shadow-lg focus:shadow-lg shadow-red-900/25 hover:shadow-red-900/40 focus:shadow-red-900/40 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800"
            aria-label={`View ${project.title} live demo`}
          >
            <Eye className="w-4 h-4" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Projects;

