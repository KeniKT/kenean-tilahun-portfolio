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
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-red-400/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-red-400 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Projects Showcase Section */}
      <div className="relative z-10 w-full px-8 py-20">
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
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px bg-red-500/40"></div>
                <Briefcase className="w-5 h-5 text-red-400" />
                <div className="w-8 h-px bg-red-500/40"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '0.05em' }}>
                Featured Projects
              </h2>
              <p className="text-xl text-gray-300 font-light">
                Some of my recent work and accomplishments
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl overflow-hidden hover:border-red-600/50 transition-all hover:shadow-lg hover:shadow-red-900/20 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Project Image/Icon */}
                  <div className="h-48 bg-gradient-to-br from-red-900/30 to-red-800/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <span className="text-xs text-red-400 bg-red-950/30 px-3 py-1 rounded-full border border-red-700/30">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-lg text-xs border border-red-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 border border-red-700/30 rounded-lg text-red-400 hover:bg-red-950/30 hover:border-red-600/50 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-red-950/30 border border-red-600/50 rounded-lg text-red-400 hover:bg-red-900/50 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Projects Button */}
            <div className="flex justify-center">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-800/80 border border-red-700/30 rounded-lg text-gray-300 hover:text-white hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20"
              >
                <span className="font-medium">View All Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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