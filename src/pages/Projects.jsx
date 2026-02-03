import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
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

const Projects = () => {
  const headerAnimation = useScrollAnimation(0.3);
  const projectsAnimation = useScrollAnimation(0.2);

  const projects = [
    {
      title: "BookShare",
      description: "A full-stack book-sharing web platform built with React and TypeScript. Users can browse, share, and manage book collections with a modern, responsive interface.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Vite"],
      github: "https://github.com/KeniKT/bookshare",
      live: "https://bookshare-demo.vercel.app",
      image: "📚",
      year: "2022 - 2023"
    },
    {
      title: "SIRA",
      description: "A mobile freelancing platform connecting employers with skilled professionals. Built with Flutter and Firebase, featuring real-time notifications and secure authentication.",
      technologies: ["Flutter", "Firebase", "Dart", "Provider", "Cloud Firestore"],
      github: "https://github.com/KeniKT/sira",
      live: "#",
      image: "🚀",
      year: "2024 - 2025"
    },
    {
      title: "BM Coffee Export Website",
      description: "Official website for BM Coffee Export company. Responsive design showcasing products, company information, and contact details with optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel", "DNS Configuration"],
      github: "#",
      live: "https://bmcoffeeexport.com",
      image: "☕",
      year: "2025"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden" style={{ fontFamily: '"Courier Prime", "Courier New", monospace', height: '100vh', width: '100vw' }}>
      {/* Background Elements - matching home page with ox blood colors */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-red-900/30 to-slate-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800/15 rounded-full blur-3xl"></div>
      </div>

      {/* FollowMe Component */}
      <FollowMe />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start px-8 py-20 overflow-y-auto">

        <div className="max-w-6xl w-full">
          {/* Header */}
          <div
            ref={headerAnimation.ref}
            className={`transition-all duration-1000 mb-16 ${
              headerAnimation.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ letterSpacing: '0.05em' }}>
              My Projects
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Showcasing my recent work and accomplishments
            </p>
          </div>

          {/* Projects Grid */}
          <div
            ref={projectsAnimation.ref}
            className={`transition-all duration-1000 ${
              projectsAnimation.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
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
                      {project.github !== "#" && (
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
                      {project.live !== "#" && (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;