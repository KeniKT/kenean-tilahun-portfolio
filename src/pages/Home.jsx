import React, { useEffect, useRef } from 'react';
import { Download, Mouse, Github, Linkedin, Code } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import keneanResumePdf from '../assets/kenean_tilahun.pdf';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

// Scroll animation hook
const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold, once: true, rootMargin: '50px' });
  useEffect(() => { if (inView) controls.start('visible'); }, [controls, inView]);
  return { ref, controls, isVisible: inView };
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};
const mouseScrollAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, delay: 1.5, ease: 'easeOut' } 
  }
};
const mouseIconBounce = {
  animate: {
    y: [0, 8, 0],
    transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
  }
};

// Social links array
const socialLinks = [
  { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "https://github.com/KeniKT" },
  { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/kenean/" },
  { name: "LeetCode", icon: <Code className="w-5 h-5" />, url: "https://leetcode.com/u/keniKT/" }
];

const Home = () => {
  const heroAnimation = useScrollAnimation(0.3);
  const aboutAnimation = useScrollAnimation(0.2);
  const skillsAnimation = useScrollAnimation(0.2);
  const experienceAnimation = useScrollAnimation(0.2);
  const projectsAnimation = useScrollAnimation(0.2);
  const contactAnimation = useScrollAnimation(0.2);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = keneanResumePdf;
    link.download = 'Kenean_Tilahun_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContent = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Hero Section */}
      <motion.div
        ref={heroAnimation.ref}
        initial="hidden"
        animate={heroAnimation.controls}
        variants={staggerContainer}
        className="flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20 md:py-24"
        style={{ minHeight: '85vh' }}
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <span className="font-black">HEY, I'M </span>
          {/* Consider defining 'primaryRed' in tailwind.config.js and using 'text-primaryRed' */}
          <span style={{ color: '#900C0D' }} className="font-black">KENEAN TILAHUN</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mb-10"
        >
          Full-Stack Developer with experience building scalable web and mobile apps. 
          I craft clean, efficient systems with a focus on performance and user experience.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={handleDownloadCV}
            className="px-8 py-3 rounded-md font-semibold text-white transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            // Consider defining 'primaryRed' in tailwind.config.js and using 'bg-primaryRed hover:bg-red-700'
            style={{ backgroundColor: '#900C0D' }}
          >
            <Download className="inline-block mr-2 w-5 h-5" />
            Download CV
          </button>

          <a
            href="#projects"
            className="px-8 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            // Consider defining 'secondaryYellow' in tailwind.config.js and using 'bg-secondaryYellow text-gray-900 hover:bg-yellow-600'
            style={{ backgroundColor: '#facc15', color: '#000' }}
          >
            Projects
          </a>
        </motion.div>

        {/* Social media icons */}
        <motion.div variants={fadeInUp} className="flex justify-center space-x-6 mb-20">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-3 rounded-full border border-slate-600/50 hover:border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 hover:scale-110 focus:scale-110 transform flex items-center justify-center focus:outline-none `}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              aria-label={`Visit my ${link.name} profile`}
            >
              <div className="text-gray-400 group-hover:text-red-400 group-focus:text-red-400 transition-all duration-300">
                {link.icon}
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-xs text-gray-400 whitespace-nowrap bg-slate-800 px-2 py-1 rounded border border-slate-600">{link.name}</span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Scroll Mouse Icon */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={mouseScrollAnimation}
          className="flex flex-col items-center cursor-pointer pt-8"
          onClick={scrollToContent}
        >
          <motion.div
            variants={mouseIconBounce}
            animate="animate"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Mouse size={32} className="mb-2" />
            <span className="text-sm font-medium">Scroll Down</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Other Sections */}
      <div id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <motion.div ref={aboutAnimation.ref} initial="hidden" animate={aboutAnimation.controls} variants={fadeInUp}>
          <About />
        </motion.div>
        <motion.div ref={skillsAnimation.ref} initial="hidden" animate={skillsAnimation.controls} variants={fadeInUp}>
          <Skills />
        </motion.div>
        <motion.div ref={experienceAnimation.ref} initial="hidden" animate={experienceAnimation.controls} variants={fadeInUp}>
          <Experience />
        </motion.div>
        <motion.div id="projects" ref={projectsAnimation.ref} initial="hidden" animate={projectsAnimation.controls} variants={fadeInUp}>
          <Projects />
        </motion.div>
        <motion.div ref={contactAnimation.ref} initial="hidden" animate={contactAnimation.controls} variants={fadeInUp}>
          <Contact />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;


