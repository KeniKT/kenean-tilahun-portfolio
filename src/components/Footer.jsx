import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/KeniKT',
      label: 'GitHub'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/kenean/',
      label: 'LinkedIn'
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/u/keniKT/',
      label: 'LeetCode'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer
      className="relative bg-slate-950 border-t border-red-900/20"
      style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}
    >
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-700/40 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

        {/* Main Footer Grid - brand takes more space, other two are compact */}
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-8 mb-10 items-start">

          {/* Column 1 — Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-red-400 font-bold text-lg leading-none">&lt;</span>
              <h3 className="text-base font-bold text-white tracking-wide leading-none">Kenean Tilahun</h3>
              <span className="text-red-400 font-bold text-lg leading-none">/&gt;</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed text-left">
              Full-Stack Developer crafting innovative software solutions. Let's build something amazing together.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5 w-full">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-red-400 text-sm transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-red-500 transition-all duration-300 overflow-hidden flex-shrink-0"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Connect */}
          <div className="flex flex-col items-center">
            <h4 className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-500 hover:text-red-400 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs order-2 sm:order-1">
            © {currentYear} Kenean Tilahun. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs order-1 sm:order-2">
            Designed & built with <span className="text-red-400">❤</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;