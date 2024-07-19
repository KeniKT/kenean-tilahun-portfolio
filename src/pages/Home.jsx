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
    <div className="min-h-screen bg-slate-900 text-white" style={{ fontFamily: 'Livvic, sans-serif' }}>
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
          <motion.div variants={fadeInLeft} className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1 
              variants={staggerItem}
              className="font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: 'Literata, serif' }}
            >
              {/* HI, I'M - Enhanced with better mobile scaling */}
              <motion.span
                variants={staggerItem}
                className="inline-block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                HI, I'M{' '}
              </motion.span>
              <br />
              {/* KENEAN - Enhanced with better mobile scaling */}
              <motion.span 
                variants={staggerItem}
                className="text-white inline-block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                KENEAN!
              </motion.span>
              <br />
              {/* FULL-STACK SOFTWARE ENGINEER - Enhanced with better mobile scaling */}
              <motion.span 
                variants={staggerItem}
                className="text-white inline-block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight"
              >

              </motion.span>
              <motion.span 
                variants={staggerItem}
                className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent inline-block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight"
              >
                SOFTWARE ENGINEER
              </motion.span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-4 xs:mb-6 sm:mb-8 max-w-full leading-relaxed tracking-wide px-2 xs:px-4 sm:px-6 lg:px-0"
              style={{
                fontFamily: 'Livvic, sans-serif',
                fontFeatureSettings: '"liga", "kern"',
                letterSpacing: '0.03em',
                lineHeight: '1.75',
              }}
            >
              I’m a passionate and versatile Software Engineer with hands-on experience in building full-stack web and mobile applications. With a strong foundation in backend development
              and a solid grasp of frontend technologies, I specialize in creating scalable, user-centered digital solutions. From intuitive interfaces to robust system architectures,
              I’m driven to craft software that is not only functional but also meaningful and impactful. My work spans frameworks like React, Flutter, and Node.js, and I thrive on
              turning ideas into real-world products that improve lives.
            </motion.p>

            <motion.div 
              variants={staggerItem}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-red-900 to-red-800 text-white px-6 xs:px-8 py-3 xs:py-4 rounded-lg font-medium hover:from-red-800 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm xs:text-base min-h-[44px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                style={{ fontFamily: 'Livvic, sans-serif' }}
                aria-label="Download CV"
              >
                <Download className="w-4 h-4 xs:w-5 xs:h-5" />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Profile Image with better mobile optimization */}
          <motion.div 
            variants={fadeInRight}
            className="w-full lg:w-1/2 flex justify-center mt-6 xs:mt-8 lg:mt-0"
          >
            <motion.div 
              variants={scaleIn}
              className="relative"
            >
              {/* Enhanced decorative frame with better mobile sizing */}
              <motion.div 
                className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 bg-gradient-to-br from-red-900 to-red-600 rounded-xl xs:rounded-2xl sm:rounded-3xl transform rotate-6 absolute -top-1 -left-1 xs:-top-2 xs:-left-2 sm:-top-4 sm:-left-4"
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

              {/* Enhanced profile image container with better mobile sizing */}
              <motion.div 
                className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden relative z-10 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                tabIndex={0}
                role="img"
                aria-label="Kenean Tilahun profile image"
                className="focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden relative z-10 shadow-lg cursor-pointer"
              >
                <img
                  src={keneanImg}
                  alt="Kenean Tilahun - Full-Stack Software Engineer"
                  className="w-full h-full object-cover rounded-xl xs:rounded-2xl sm:rounded-3xl"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Sections with scroll animations - Better mobile spacing */}
        <div className="mt-8 xs:mt-10 sm:mt-12 md:mt-16 lg:mt-20 space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-18">
          {/* About Section */}
          <motion.div
            ref={aboutAnimation.ref}
            initial="hidden"
            animate={aboutAnimation.controls}
            variants={fadeInUp}
            style={{ fontFamily: 'Livvic, sans-serif' }}
          >
            <About />
          </motion.div>

          {/* Projects Section */}
          <motion.div
            ref={projectsAnimation.ref}
            initial="hidden"
            animate={projectsAnimation.controls}
            variants={fadeInUp}
            style={{ fontFamily: 'Livvic, sans-serif' }}
          >
            <Projects />
          </motion.div>

          {/* Contact Section */}
          <motion.div
            ref={contactAnimation.ref}
            initial="hidden"
            animate={contactAnimation.controls}
            variants={fadeInUp}
            style={{ fontFamily: 'Livvic, sans-serif' }}
          >
            <Contact />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

