import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Coffee, Star, Lightbulb, Code } from 'lucide-react';

// Custom hook for scroll animations with improved performance
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
      {
        threshold,
        rootMargin: '50px' // Trigger animation earlier for better UX
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

// Counter animation hook with performance optimization
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startCounting = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * end);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  };

  return { count, startCounting };
};

const About = () => {
  const headerAnimation = useScrollAnimation(0.3);
  const storyAnimation = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen bg-slate-900 text-white py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Optimized Background Elements - Reduced for mobile performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-6 xs:top-8 sm:top-10 md:top-20 left-3 xs:left-4 sm:left-5 md:left-10 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-6 xs:bottom-8 sm:bottom-10 md:bottom-20 right-3 xs:right-4 sm:right-5 md:right-10 w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header with better mobile typography */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
            About <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-12 xs:w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-3 xs:mb-4 sm:mb-6 rounded-full" />
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg lg:text-xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 xs:px-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Learn more about my journey and passion for creating exceptional digital experiences
          </p>
        </div>

        {/* Enhanced Creative Story Section with left-aligned text */}
        <div
          ref={storyAnimation.ref}
          className={`mb-12 xs:mb-14 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${
            storyAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="relative">
            {/* Optimized creative background with fewer elements on mobile */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl xs:rounded-3xl">
              <div className="hidden sm:block absolute top-4 right-4 w-16 h-16 xs:w-20 xs:h-20 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse" />
              <div className="hidden sm:block absolute bottom-8 left-8 w-12 h-12 xs:w-16 xs:h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="hidden md:block absolute top-1/2 left-1/4 w-8 h-8 xs:w-12 xs:h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 backdrop-blur-sm rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden">
              {/* Enhanced decorative corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500/10 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-gradient-to-tl from-red-500/10 to-transparent rounded-tl-full" />

              <div className="relative z-10">
                <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 xs:mb-6 sm:mb-8 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  My <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Story</span>
                </h2>

                <div className="space-y-4 xs:space-y-6 sm:space-y-8 text-gray-300 text-sm xs:text-base lg:text-lg leading-relaxed text-left" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  {/* Enhanced timeline styling with left-aligned text */}
                  <div className="relative">
                    <div className="absolute left-4 xs:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-red-500 rounded-full" />

                    <div className="relative pl-12 xs:pl-16 pb-6 xs:pb-8">
                      <div className="absolute left-2.5 xs:left-4 top-2 w-3 h-3 xs:w-4 xs:h-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-ping opacity-75" />
                      </div>
                      <div className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 p-4 xs:p-6 rounded-lg xs:rounded-xl border-l-2 xs:border-l-4 border-red-500/50 hover:border-red-400 transition-all duration-300 group min-h-[44px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800" tabIndex={0} role="button" aria-label="Read about my programming journey">
                        <div className="flex items-start space-x-2 xs:space-x-3">
                          <Lightbulb className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-yellow-400 mt-1 group-hover:animate-pulse flex-shrink-0" />
                          <p className="group-hover:text-white transition-colors duration-300 text-left">
                           Hello! I'm Kenean Tilahun, a passionate full-stack developer with a strong interest in building impactful and user-focused digital solutions. My journey into software development began in Grade 10, when I was selected among the top 200 students nationwide to attend the Addis Coder Summer Camp—an experience that introduced me to data structures, algorithms, and the creative power of code.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-12 xs:pl-16 pb-6 xs:pb-8">
                      <div className="absolute left-2.5 xs:left-4 top-2 w-3 h-3 xs:w-4 xs:h-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }} />
                      </div>
                      <div className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 p-4 xs:p-6 rounded-lg xs:rounded-xl border-l-2 xs:border-l-4 border-orange-500/50 hover:border-orange-400 transition-all duration-300 group min-h-[44px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-800" tabIndex={0} role="button" aria-label="Read about my development experience">
                        <div className="flex items-start space-x-2 xs:space-x-3">
                          <Code className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-400 mt-1 group-hover:animate-bounce flex-shrink-0" />
                          <p className="group-hover:text-white transition-colors duration-300 text-left">
                            Since then, I've been honing my skills through both academic studies and personal projects. My work includes building applications like SIRA, a mobile freelancing platform developed using Flutter and Firebase, and BookShare, a web-based book-sharing platform built with React and TypeScript. These projects, while personal and educational in nature, reflect my commitment to full-stack development and user-centered design
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative pl-12 xs:pl-16">
                      <div className="absolute left-2.5 xs:left-4 top-2 w-3 h-3 xs:w-4 xs:h-4 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }} />
                      </div>
                      <div className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 p-4 xs:p-6 rounded-lg xs:rounded-xl border-l-2 xs:border-l-4 border-yellow-500/50 hover:border-yellow-400 transition-all duration-300 group min-h-[44px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-slate-800" tabIndex={0} role="button" aria-label="Read about my interests and community involvement">
                        <div className="flex items-start space-x-2 xs:space-x-3">
                          <Users className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-green-400 mt-1 group-hover:animate-pulse flex-shrink-0" />
                          <p className="group-hover:text-white transition-colors duration-300 text-left">
                           In addition to development, I've taken on leadership and mentorship roles in the tech community—organizing workshops, supporting students as a teaching assistant, and promoting collaborative learning as part of a Google Developer Group on campus.

I'm always exploring new technologies, contributing to open-source, and looking for opportunities to grow and collaborate on meaningful projects.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default About;


