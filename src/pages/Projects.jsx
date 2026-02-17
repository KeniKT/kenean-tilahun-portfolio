import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, CheckCircle } from 'lucide-react';
import FollowMe from '../components/FollowMe';
import BMImage from '../assets/BM.png';
import ZKImage from '../assets/ZK.png';

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

// Per-card scroll animation hook
const useCardAnimation = (threshold = 0.05) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Use a short timeout so the card animates in right as the page opens
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold, rootMargin: '200px' } // large rootMargin so cards in view on load trigger immediately
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [threshold]);

  return { ref, isVisible };
};

// Individual project card with its own observer
const ProjectCard = ({ project, index }) => {
  const { ref, isVisible } = useCardAnimation(0.05);

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl overflow-hidden hover:border-red-600/50 transition-all hover:shadow-lg hover:shadow-red-900/20 group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{
        transitionProperty: 'opacity, transform, border-color, box-shadow',
        transitionDuration: '700ms',
        transitionDelay: `${index * 100}ms`,
        transitionTimingFunction: 'ease-out',
      }}
    >
      {/* ── Showcase Image (top of card, only rendered if image path is provided) ── */}
      {project.image && (
        <div className="w-full overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} showcase`}
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      )}

      {/* Project Content */}
      <div className="p-8 space-y-6">

        {/* Title and Year */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <span className="text-xs text-red-400 bg-red-950/30 px-3 py-1 rounded-full border border-red-700/30">
              {project.year}
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-gray-300 text-base leading-relaxed">
          {project.description}
        </p>

        {/* Full Description */}
        <div className="bg-slate-700/20 border border-red-700/20 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Overview</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Points */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Key Highlights</h3>
          <div className="space-y-2">
            {project.keyPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-red-950/30 text-red-300 rounded-lg text-xs border border-red-700/30"
              >
                {tech}
              </span>
            ))}
          </div>
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
              Source Code
            </a>
          )}
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-950/30 border border-red-600/50 rounded-lg text-red-400 hover:bg-red-900/50 hover:border-red-500/70 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const headerAnimation = useScrollAnimation(0.3);

  const projects = [
    {
      title: "BM Coffee Export Website",
      image: BMImage,
      description: "Official website for BM Coffee Export company. Responsive design showcasing products, company information, and contact details with optimized performance.",
      fullDescription: "Designed, developed, and deployed the official BM Coffee Export website, delivering a production-ready platform that strengthens the company's online presence. Managed the full development lifecycle including responsive UI implementation, hosting setup, domain and DNS configuration, and resolution of production-level issues. Ensured cross-device compatibility and reliable performance across modern browsers.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel", "DNS Configuration"],
      keyPoints: [
        "Designed and developed responsive website UI with modern web technologies",
        "Managed full development lifecycle including hosting and domain configuration",
        "Ensured cross-device compatibility and reliable performance across browsers",
        "Resolved production-level issues and optimized performance metrics"
      ],
      github: "#",
      live: "https://bmcoffeeexport.com",
      year: "2025"
    },
    {
      title: "ZX Flower Export Website",
      image: ZKImage,
      description: "Professional business website for export-oriented flower company showcasing products and services with optimized performance.",
      fullDescription: "Built and delivered a professional business website to showcase products and services for an export-oriented company. Implemented responsive layouts and optimized performance to meet production standards. Worked closely with stakeholders to translate business requirements into a functional and visually consistent web solution.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      keyPoints: [
        "Implemented responsive layouts for mobile and desktop viewing",
        "Optimized performance to meet production standards",
        "Translated stakeholder requirements into functional design",
        "Created visually consistent branding across the platform"
      ],
      github: "#",
      live: "https://zk-flowers.vercel.app/",
      year: "2025"
    },
    {
      title: "SIRA - Freelancing Platform",
      description: "A mobile freelancing platform connecting employers with skilled professionals. Built with Flutter and Firebase, featuring real-time notifications and secure authentication.",
      fullDescription: "Developed a mobile freelancing platform using Flutter and Firebase that connects employers with skilled professionals. Implemented authentication, real-time data handling, and a scalable architecture focused on usability. The platform enables seamless job posting, bidding, and communication between employers and freelancers.",
      technologies: ["Flutter", "Firebase", "Dart", "Provider", "Cloud Firestore"],
      keyPoints: [
        "Implemented secure user authentication and authorization",
        "Built real-time job posting and bidding system",
        "Created real-time notifications for job updates",
        "Designed scalable architecture with Cloud Firestore",
        "Developed in-app messaging for user communication"
      ],
      github: "https://github.com/KeniKT/sira",
      live: "#",
      year: "2024 - 2025"
    },
    {
      title: "BookShare - Book Sharing Platform",
      description: "A full-stack book-sharing web platform built with React and TypeScript. Users can browse, share, and manage book collections with a modern, responsive interface.",
      fullDescription: "Built a full-stack book sharing web application using React, TypeScript, and Vite, and deployed it on Vercel. Designed a responsive and user-friendly interface with modern frontend tooling. Optimized performance and maintainability to support smooth content browsing and management.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Vite"],
      keyPoints: [
        "Built responsive and user-friendly interface with modern frontend tooling",
        "Implemented user authentication and profile management",
        "Created book discovery and collection management features",
        "Optimized performance and maintainability with Vite",
        "Deployed on Vercel with continuous integration"
      ],
      github: "https://github.com/KeniKT/bookshare",
      live: "https://bookshare-demo.vercel.app",
      year: "2022 - 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white " style={{ fontFamily: '"Courier Prime", "Courier New", monospace', minHeight: '100vh', width: '100vw' }}>
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-red-900/30 to-slate-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800/15 rounded-full blur-3xl"></div>
      </div>

      {/* FollowMe Component */}
      <FollowMe />

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-start px-8 py-20">

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

          {/* Projects Grid — each card manages its own visibility */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Footer spacing */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default Projects;