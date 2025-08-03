import React, { useEffect, useRef } from 'react';
import { Download, Play } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import keneanImg from '/src/assets/kenean.png';
import keneanResumePdf from '/src/assets/kenean_tilahun.pdf'; // Add this import
import About from './About';
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
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
        {/* Enhanced Hero Section with better mobile layout */}
        <motion.div
          ref={heroAnimation.ref}
          initial="hidden"
          animate={heroAnimation.controls}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 xs:gap-8 lg:gap-12"
        >
          {/* Enhanced Left Content with better mobile typography */}
          <motion.div variants={fadeInLeft} className="w-full lg:w-1/2 text-left">
            <motion.h1
              variants={staggerItem}
              className="font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {/* Welcome - Changed to #900C0D color */}
              <motion.span
                variants={staggerItem}
                className="inline-block text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-wide"
                style={{ 
                  color: '#900C0D', // Changed to requested color
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Welcome.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-4 xs:mb-6 sm:mb-8 max-w-full leading-relaxed tracking-wide px-2 xs:px-4 sm:px-6 lg:px-0"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontFeatureSettings: '"liga", "kern"',
                letterSpacing: '0.03em',
                lineHeight: '1.75',
              }}
            >
              My name Kenean. I'm a passionate and versatile Software Engineer with hands-on experience in building full-stack web and mobile applications. With a strong foundation in backend development
              and a solid grasp of frontend technologies, I specialize in creating scalable, user-centered digital solutions. From intuitive interfaces to robust system architectures,
              I'm driven to craft software that is not only functional but also meaningful and impactful. My work spans frameworks like React, Flutter, and Node.js, and I thrive on
              turning ideas into real-world products that improve lives.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-4 xs:mb-6 sm:mb-8 max-w-full leading-relaxed tracking-wide px-2 xs:px-4 sm:px-6 lg:px-0"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontFeatureSettings: '"liga", "kern"',
                letterSpacing: '0.03em',
                lineHeight: '1.75',
              }}
            >
              I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="text-white px-6 xs:px-8 py-3 xs:py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm xs:text-base min-h-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 border-2"
                style={{ 
                  backgroundColor: '#900C0D', // Changed to requested color
                  borderColor: '#900C0D',
                  fontFamily: "'Roboto', sans-serif"
                }}
                aria-label="Download CV"
              >
                <Download className="w-4 h-4 xs:w-5 xs:h-5" />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Profile Image with bigger size and better mobile optimization */}
          <motion.div
            variants={fadeInRight}
            className="w-full lg:w-1/2 flex justify-center mt-6 xs:mt-8 lg:mt-0"
          >
            <motion.div
              variants={scaleIn}
              className="relative"
            >
              {/* Enhanced decorative frame with #900C0D color and bigger size */}
              <motion.div
                className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-88 lg:h-88 xl:w-96 xl:h-96 2xl:w-112 2xl:h-112 rounded-xl xs:rounded-2xl sm:rounded-3xl transform rotate-6 absolute -top-1 -left-1 xs:-top-2 xs:-left-2 sm:-top-4 sm:-left-4"
                style={{ backgroundColor: '#900C0D' }} // Changed to requested color
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

              {/* Enhanced profile image container with bigger size for better alignment */}
              <motion.div
                className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-88 lg:h-88 xl:w-96 xl:h-96 2xl:w-112 2xl:h-112 rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden relative z-10 shadow-lg"
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
                  className="w-full h-full object-cover rounded-xl xs:rounded-2xl sm:rounded-3xl"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Sections with scroll animations - Reduced spacing for a more connected feel */}
        <div className="mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
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

