import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const FollowMe = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center z-50">
      {/* Vertical line top */}
      <div className="w-px h-16 bg-red-500/40"></div>

      {/* Social Icons */}
      <div className="flex flex-col items-center space-y-5 py-4">
        <a
          href="https://github.com/KeniKT"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-400 transition-all duration-300 hover:scale-110"
          aria-label="Visit my GitHub profile"
        >
          <Github className="w-5 h-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/kenean/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-400 transition-all duration-300 hover:scale-110"
          aria-label="Visit my LinkedIn profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        <a
          href="mailto:keni232127@gmail.com"
          className="text-gray-500 hover:text-red-400 transition-all duration-300 hover:scale-110"
          aria-label="Send me an email"
        >
          <Code className="w-5 h-5" />
        </a>
      </div>

      {/* Vertical line bottom */}
      <div className="w-px h-10 bg-red-500/40"></div>

      {/* FOLLOW ME text - vertical */}
      <div
        className="text-gray-500 text-xs tracking-widest mt-3"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        FOLLOW ME
      </div>
    </div>
  );
};

export default FollowMe;