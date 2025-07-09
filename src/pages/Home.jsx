import React from 'react';
import { Download, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import keneanImg from '/src/assets/kenean.png';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              HI, I'M KENEAN!
              <br />
              <span className="text-white">CREATIVE </span>
              <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">
                DEVELOPER
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-gray-300 text-lg mb-8 max-w-full leading-relaxed tracking-wide px-8 mx-auto max-w-4xl"
              style={{
                fontFeatureSettings: '"liga", "kern"',
                letterSpacing: '0.03em',
                lineHeight: '1.75',
              }}
            >
              I’m a passionate and versatile Full-Stack Software Engineer dedicated to creating impactful web
              and mobile applications. With a strong foundation in backend development and hands-on
              experience across the full technology stack, I specialize in building scalable, user-focused
              digital solutions. From designing intuitive user interfaces to architecting efficient backend systems,
              I strive to deliver products that are both functional and meaningful.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-3 rounded-lg font-medium hover:from-red-800 hover:to-red-700 transition-all duration-300 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </button>

              <button className="border border-red-600 text-red-400 px-8 py-3 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch The Video
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative frame */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-red-900 to-red-600 rounded-3xl transform rotate-6 absolute -top-4 -left-4"></div>

              {/* Profile image container */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden relative z-10 shadow-lg">
                <img
                  src={keneanImg}
                  alt="Kenean Tilahun"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ===== Add other sections below ===== */}
        <div className="mt-20 space-y-32">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
