import React, { useEffect, useRef } from 'react';
import { Download, Play } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import keneanImg from '../assets/kenean.png';
import keneanResumePdf from '../assets/kenean_tilahun.pdf';
import About from './About';
import Skills from './Skills'; // Import Skills component
import Experience from './Experience'; // Import Experience component
import Projects from './Projects';
import Contact from './Contact';

// Custom hook for scroll animations with improved performance
const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    threshold,
    once: true,
    rootMargin: '50px' // Trigger animation earlier for better UX
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
};

// Enhanced animation variants with better mobile performance
const fadeInUp = {
  hidden: { opacity: 0, y: 40 }, // Reduced movement for mobile
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' } // Faster for mobile
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 }, // Reduced movement for mobile
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 }, // Reduced movement for mobile
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Faster stagger for mobile
      delayChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 }, // Reduced movement
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 }, // Less dramatic scale
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const Home = () => {
  const heroAnimation = useScrollAnimation(0.3);
  const aboutAnimation = useScrollAnimation(0.2);
  const skillsAnimation = useScrollAnimation(0.2); // Add skills animation hook
  const experienceAnimation = useScrollAnimation(0.2); // Add experience animation hook
  const projectsAnimation = useScrollAnimation(0.2);
  const contactAnimation = useScrollAnimation(0.2);

  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = keneanResumePdf;
    link.download = 'Kenean_Tilahun_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Full-screen Hero Section with row layout */}
      <div className="app-container">
        <motion.div
          ref={heroAnimation.ref}
          initial="hidden"
          animate={heroAnimation.controls}
          variants={staggerContainer}
          className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Text Section - Center aligned */}
          <motion.div variants={fadeInLeft} className="w-full lg:w-1/2 text-center">
            <motion.h1
              variants={staggerItem}
              className="font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {/* Name in one line with bold styling and color variation - Reduced font sizes */}
              <motion.div
                variants={staggerItem}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-wide mb-4"
                style={{ 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  display: 'block',
                  whiteSpace: 'nowrap',
                  overflow: 'visible'
                }}
              >
                <span style={{ color: '#ffffff' }}>Kenean </span>
                <span style={{ color: '#900C0D' }}>Tilahun</span>
              </motion.div>
              <motion.span
                variants={staggerItem}
                className="block text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-wide text-gray-300 mb-4"
                style={{ 
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                SOFTWARE ENGINEER
              </motion.span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed tracking-wide max-w-2xl mx-auto"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontFeatureSettings: '"liga", "kern"',
                letterSpacing: '0.03em',
                lineHeight: '1.75',
              }}
            >
              Full-Stack Developer with experience building scalable web and mobile apps. I craft clean, efficient systems with a focus on performance and user experience.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-base min-h-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 border-2"
                style={{ 
                  backgroundColor: '#900C0D',
                  borderColor: '#900C0D',
                  fontFamily: "'Roboto', sans-serif"
                }}
                aria-label="Download CV"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image Section - Right side on desktop */}
          <motion.div
            variants={fadeInRight}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <motion.div
              variants={scaleIn}
              className="relative"
            >
              {/* Enhanced decorative frame with #900C0D color */}
              <motion.div
                className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-3xl transform rotate-6 absolute -top-4 -left-4"
                style={{ backgroundColor: '#900C0D' }}
                animate={{
                  rotate: [6, 8, 6],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Enhanced profile image container */}
              <motion.div
                className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-3xl overflow-hidden relative z-10 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                tabIndex={0}
                role="img"
                aria-label="Kenean Tilahun profile image"
                style={{
                  cursor: 'pointer',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.outline = '2px solid #900C0D';
                  e.target.style.outlineOffset = '2px';
                }}
                onBlur={(e) => {
                  e.target.style.outline = 'none';
                }}
              >
                <img
                  src={keneanImg}
                  alt="Kenean Tilahun - Software Engineer"
                  className="w-full h-full object-cover rounded-3xl"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Other Sections - Outside the full-screen hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="space-y-3">
          {/* About Section */}
          <motion.div
            ref={aboutAnimation.ref}
            initial="hidden"
            animate={aboutAnimation.controls}
            variants={fadeInUp}
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <About />
          </motion.div>

          {/* Skills Section */}
          <motion.div
            ref={skillsAnimation.ref}
            initial="hidden"
            animate={skillsAnimation.controls}
            variants={fadeInUp}
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <Skills />
          </motion.div>

          {/* Experience Section */}
          <motion.div
            ref={experienceAnimation.ref}
            initial="hidden"
            animate={experienceAnimation.controls}
            variants={fadeInUp}
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <Experience />
          </motion.div>

          {/* Projects Section */}
          <motion.div
            ref={projectsAnimation.ref}
            initial="hidden"
            animate={projectsAnimation.controls}
            variants={fadeInUp}
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <Projects />
          </motion.div>

          {/* Contact Section */}
          <motion.div
            ref={contactAnimation.ref}
            initial="hidden"
            animate={contactAnimation.controls}
            variants={fadeInUp}
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <Contact />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

