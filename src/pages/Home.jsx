import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Code2, Briefcase, User, Mail } from 'lucide-react';
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
  const introAnimation = useScrollAnimation(0.2);
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

  // ✅ Fixed: now targets the Featured Projects section
  const scrollToIntro = () => {
    const featuredSection = document.querySelector('[data-featured-target]');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const introCards = [
    {
      title: "About Me",
      description: "Learn more about my background, experience, and the technologies I specialize in. Discover what drives my passion for building innovative solutions.",
      icon: <User className="w-6 h-6" />,
      link: "/about",
      color: "from-red-600/20 to-red-700/10",
      accent: "red"
    },
    {
      title: "My Projects",
      description: "Explore a curated selection of my recent work. See how I apply my skills to create production-ready applications with focus on performance and UX.",
      icon: <Code2 className="w-6 h-6" />,
      link: "/projects",
      color: "from-red-600/20 to-red-700/10",
      accent: "red"
    },
    {
      title: "Get In Touch",
      description: "Have a project in mind? Let's collaborate. I'm open to new opportunities and excited to discuss how we can build something great together.",
      icon: <Mail className="w-6 h-6" />,
      link: "/contact",
      color: "from-red-600/20 to-red-700/10",
      accent: "red"
    }
  ];

  const featuredProjects = [
    {
      title: "BM Coffee Export Website",
      description: "Official website for BM Coffee Export company. Responsive design showcasing products, company information, and contact details with optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      live: "https://bmcoffeeexport.com",
      year: "2025"
    },
    {
      title: "ZX Flower Export Website",
      description: "Professional business website for export-oriented flower company showcasing products and services with optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      live: "https://zk-flowers.vercel.app/",
      year: "2025"
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
              onClick={scrollToIntro}
              className="w-6 h-10 border-2 border-red-400/50 rounded-full mx-auto flex items-start justify-center p-2 hover:border-red-400 transition-colors duration-300 bg-transparent cursor-pointer"
              aria-label="Scroll to introduction"
            >
              <div className="w-1.5 h-3 bg-red-400 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Added data-featured-target here so the scroll button lands on this section */}
      {/* Projects Showcase Section */}
      <div className="relative z-10 w-full px-8 py-20" data-featured-target>
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
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-red-400 text-xl font-bold">&lt;</span>
                  <span className="text-gray-500 text-sm uppercase tracking-wider">Featured</span>
                  <span className="text-red-400 text-xl font-bold">/&gt;</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ letterSpacing: '0.02em' }}>
                Recent Work
              </h2>
              
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                A selection of projects that showcase my approach to problem-solving 
                and technical execution
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Card Container */}
                  <div className="h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-red-700/30 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/30 flex flex-col">
                    
                    {/* Top Accent Bar */}
                    <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 group-hover:from-red-500 group-hover:via-red-400 group-hover:to-red-500 transition-all duration-300"></div>

                    {/* Content Area */}
                    <div className="p-8 flex flex-col flex-grow">
                      
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"></div>
                          </div>
                          <span className="ml-4 px-4 py-2 bg-red-950/40 text-red-300 text-sm font-semibold rounded-lg border border-red-700/30 whitespace-nowrap">
                            {project.year}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-base leading-relaxed mb-8 flex-grow">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-8">
                        <p className="text-xs uppercase text-gray-500 font-semibold mb-3 tracking-wider">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-medium text-red-300 bg-red-950/30 border border-red-700/40 rounded-full px-3 py-1.5 group-hover:bg-red-950/50 group-hover:border-red-600/60 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-red-700/20 via-red-600/20 to-transparent mb-6"></div>

                      {/* Links */}
                      <div className="flex gap-3">
                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/40 border border-red-700/30 text-red-400 hover:bg-red-950/40 hover:border-red-600/50 transition-all duration-300 text-sm font-medium"
                          >
                            <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                            <span>Source</span>
                          </a>
                        )}
                        {project.live && project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 px-4 py-2 rounded-lg bg-red-950/30 border border-red-600/50 text-red-300 hover:bg-red-900/50 hover:border-red-500/70 transition-all duration-300 text-sm font-medium"
                          >
                            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/0 via-transparent to-red-500/0 group-hover:from-red-600/5 group-hover:to-red-500/5 transition-all duration-300 pointer-events-none rounded-2xl"></div>
                  </div>

                  {/* Floating accent circle */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-600/0 group-hover:bg-red-600/10 rounded-full blur-3xl transition-all duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>

            {/* View All Projects Button */}
            <div className="flex justify-center pt-12">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-700/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                
                {/* Border with glow effect */}
                <div className="absolute inset-0 border border-red-500/40 group-hover:border-red-400/80 transition-all duration-300 rounded-lg shadow-lg shadow-red-900/0 group-hover:shadow-lg group-hover:shadow-red-900/30"></div>
                
                {/* Content */}
                <span className="relative text-red-400 group-hover:text-red-300 font-semibold transition-colors duration-300">
                  Explore All Projects
                </span>
                <ArrowRight className="relative w-5 h-5 text-red-400 group-hover:text-red-300 group-hover:translate-x-2 group-hover:-translate-y-0.5 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Cards Section */}
      <div className="relative z-10 w-full px-8 py-20" data-intro-target>
        <div className="max-w-6xl w-full mx-auto">
          <div
            ref={introAnimation.ref}
            className={`transition-all duration-1000 ${
              introAnimation.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Section Header */}
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400 text-xl font-bold">&lt;</span>
                  <span className="text-gray-500 text-sm uppercase tracking-wider">Explore</span>
                  <span className="text-red-400 text-xl font-bold">/&gt;</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ letterSpacing: '0.02em' }}>
                What's Inside
              </h2>
              
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                A comprehensive look at my work, expertise, and how I can help bring your ideas to life
              </p>
            </div>

            {/* Intro Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {introCards.map((card, index) => (
                <Link
                  key={index}
                  to={card.link}
                  className="group relative overflow-hidden"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`bg-gradient-to-br ${card.color} border border-red-700/30 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 min-h-[280px] flex flex-col justify-between cursor-pointer`}>
                    {/* Top Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-red-950/40 rounded-lg flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:bg-red-900/50 transition-all duration-300">
                        {card.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Arrow */}
                    <div className="mt-6 flex items-center gap-2 text-red-400 group-hover:text-red-300 transition-all duration-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-900/0 to-red-600/0 group-hover:from-red-900/10 group-hover:to-red-600/10 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </Link>
              ))}
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