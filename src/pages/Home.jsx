import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Code2, Briefcase } from 'lucide-react';
import FollowMe from '../components/FollowMe';

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
      { threshold, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const Home = () => {
  const projectsAnimation = useScrollAnimation(0.2);
  const ctaAnimation = useScrollAnimation(0.2);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('[data-scroll-target]');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const featuredProjects = [
    {
      title: "SIRA",
      description: "A mobile freelancing platform connecting employers with skilled professionals. Built with Flutter and Firebase, featuring real-time notifications and secure authentication.",
      technologies: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/KeniKT/sira",
      image: "🚀",
      year: "2024 - 2025",
      featured: true
    },
    {
      title: "BookShare",
      description: "A full-stack book-sharing web platform built with React and TypeScript. Users can browse, share, and manage book collections with a modern, responsive interface.",
      technologies: ["React", "TypeScript", "Firebase"],
      github: "https://github.com/KeniKT/bookshare",
      live: "https://bookshare-demo.vercel.app",
      image: "📚",
      year: "2022 - 2023",
      featured: true
    },
    {
      title: "BM Coffee Export Website",
      description: "Official website for BM Coffee Export company. Responsive design showcasing products, company information, and contact details with optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      live: "https://bmcoffeeexport.com",
      image: "☕",
      year: "2025",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-y-auto" style={{ fontFamily: '"Courier Prime", "Courier New", monospace', minHeight: '100vh', width: '100vw' }}>
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-red-900/30 to-slate-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800/15 rounded-full blur-3xl"></div>
      </div>

      {/* FollowMe Component */}
      <FollowMe />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center" style={{ minHeight: '100vh', width: '100vw' }}>
        {/* Decorative dot patterns - top left */}
        <div className="absolute top-32 left-16 hidden md:block">
          <div className="grid grid-cols-6 gap-3">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-slate-600/40 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Decorative dot patterns - top right */}
        <div className="absolute top-24 right-24 hidden md:block">
          <div className="grid grid-cols-8 gap-3">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-slate-600/40 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl w-full px-8 text-center">
          {/* Greeting with underline */}
          <div className="mb-8 animate-fade-in">
            <p className="text-gray-300 text-lg mb-2">
              Hi, I'm Kenean Tilahun
            </p>
            <div className="w-20 h-0.5 bg-red-500 mx-auto"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ letterSpacing: '0.02em' }}>
            <span className="block mb-2">Innovative Software Solutions</span>
            <span className="block mb-2">to Build a Connected </span>
            <span className="inline-block">
              <span className="text-gray-300">{`{`}</span>
              <span className="text-red-400">World</span>
              <span className="text-gray-300">{`}`}</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Full-Stack Developer with experience building scalable web and mobile apps. 
            I craft clean, efficient systems with a focus on performance and user experience.
          </p>

          {/* Scroll Indicator */}
          <div className={`mt-16 animate-bounce transition-opacity duration-500 ${showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <button
              onClick={scrollToProjects}
              className="w-6 h-10 border-2 border-red-400/50 rounded-full mx-auto flex items-start justify-center p-2 hover:border-red-400 transition-colors duration-300 bg-transparent cursor-pointer"
              aria-label="Scroll to projects"
            >
              <div className="w-1.5 h-3 bg-red-400 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Projects Showcase Section */}
      <div className="relative z-10 w-full px-8 py-12" data-scroll-target>
        <div className="max-w-6xl w-full mx-auto">
          <div
            ref={projectsAnimation.ref}
            className={`transition-all duration-1000 ${
              projectsAnimation.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Section Header */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ letterSpacing: '0.02em' }}>
                Recent Work
              </h2>
              <p className="text-gray-400 text-base">
                Showcasing some of the projects I'm most proud of
              </p>
            </div>

            {/* Projects List */}
            <div className="space-y-6 mb-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group border-b border-slate-700/50 pb-8 hover:border-red-600/30 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    {/* Left Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {project.title}
                        </h3>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                      
                      <p className="text-gray-300 text-base leading-relaxed mb-5 max-w-2xl">
                        {project.description}
                      </p>

                      {/* Technologies as inline tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-gray-400 border border-gray-600/40 rounded px-2.5 py-1.5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300 text-sm"
                          >
                            <Github className="w-4 h-4" />
                            Source
                          </a>
                        )}
                        {project.live && project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300 text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Visit
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Icon */}
                    <div className="flex-shrink-0 text-6xl md:text-7xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      {project.image}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Projects Button */}
            <div className="flex justify-center pt-8">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-8 py-3 text-red-400 hover:text-red-300 transition-colors duration-300 border-b-2 border-red-400/30 hover:border-red-400/60"
              >
                <span className="font-medium">Explore All Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 w-full px-8 py-20">
        <div className="max-w-6xl w-full mx-auto">
          <div
            ref={ctaAnimation.ref}
            className={`transition-all duration-1000 ${
              ctaAnimation.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl p-12 text-center hover:border-red-600/50 transition-all hover:shadow-lg hover:shadow-red-900/20 relative overflow-hidden">
              {/* Subtle glow behind text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-96 h-48 bg-red-900/10 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-px bg-red-500/40"></div>
                  <Code2 className="w-6 h-6 text-red-400" />
                  <div className="w-12 h-px bg-red-500/40"></div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ letterSpacing: '0.05em' }}>
                  Let's Build Something <span className="text-red-400">Amazing Together</span>
                </h2>

                <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4 mb-10 leading-relaxed">
                  I'm currently open to new opportunities and collaborations. Whether you have a project in mind, 
                  need a developer for your team, or just want to connect, I'd love to hear from you.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                  <Link
                    to="/about"
                    className="px-10 py-4 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 inline-flex items-center gap-2"
                  >
                    <span>About Me</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <Link
                    to="/contact"
                    className="px-10 py-4 rounded-lg font-semibold text-gray-300 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 border-2 border-red-700/40 hover:border-red-500 inline-flex items-center gap-2"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default Home;