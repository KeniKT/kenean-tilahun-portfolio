import React, { useEffect, useRef } from 'react';
import { Download, Play } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import keneanImg from '/src/assets/kenean.png';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold, once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const Home = () => {
  const heroAnimation = useScrollAnimation(0.3);
  const aboutAnimation = useScrollAnimation(0.2);
  const projectsAnimation = useScrollAnimation(0.2);
  const contactAnimation = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <motion.div 
          ref={heroAnimation.ref}
          initial="hidden"
          animate={heroAnimation.controls}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          {/* Left Content */}
          <motion.div variants={fadeInLeft} className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1 
              variants={staggerItem}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <motion.span
                variants={staggerItem}
                className="inline-block"
              >
                HI, I'M KENEAN!
              </motion.span>
              <br />
              <motion.span 
                variants={staggerItem}
                className="text-white inline-block"
              >
                CREATIVE{' '}
              </motion.span>
              <motion.span 
                variants={staggerItem}
                className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent inline-block"
              >
                DEVELOPER
              </motion.span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-full leading-relaxed tracking-wide px-4 sm:px-6 lg:px-0"
              style={{
                fontFeatureSettings: '"liga", "kern"',
                letterSpacing: '0.03em',
                lineHeight: '1.75',
              }}
            >
              I'm a passionate and versatile Full-Stack Software Engineer dedicated to creating impactful web
              and mobile applications. With a strong foundation in backend development and hands-on
              experience across the full technology stack, I specialize in building scalable, user-focused
              digital solutions. From designing intuitive user interfaces to architecting efficient backend systems,
              I strive to deliver products that are both functional and meaningful.
            </motion.p>

            <motion.div 
              variants={staggerItem}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-900 to-red-800 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:from-red-800 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-red-600 text-red-400 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Watch The Video
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            variants={fadeInRight}
            className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
          >
            <motion.div 
              variants={scaleIn}
              className="relative"
            >
              {/* Decorative frame */}
              <motion.div 
                className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-br from-red-900 to-red-600 rounded-2xl sm:rounded-3xl transform rotate-6 absolute -top-2 -left-2 sm:-top-4 sm:-left-4"
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

              {/* Profile image container */}
              <motion.div 
                className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl sm:rounded-3xl overflow-hidden relative z-10 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={keneanImg}
                  alt="Kenean Tilahun"
                  className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Sections with scroll animations */}
        <div className="mt-16 sm:mt-20 lg:mt-32 space-y-16 sm:space-y-24 lg:space-y-32">
          {/* About Section */}
          <motion.div
            ref={aboutAnimation.ref}
            initial="hidden"
            animate={aboutAnimation.controls}
            variants={fadeInUp}
          >
            <About />
          </motion.div>

          {/* Projects Section */}
          <motion.div
            ref={projectsAnimation.ref}
            initial="hidden"
            animate={projectsAnimation.controls}
            variants={fadeInUp}
          >
            <Projects />
          </motion.div>

          {/* Contact Section */}
          <motion.div
            ref={contactAnimation.ref}
            initial="hidden"
            animate={contactAnimation.controls}
            variants={fadeInUp}
          >
            <Contact />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;