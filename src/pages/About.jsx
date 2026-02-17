import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Clock, Users, Code2, Lightbulb, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const About = () => {
  const headerAnimation = useScrollAnimation(0.3);
  const storyAnimation = useScrollAnimation(0.2);
  const servicesAnimation = useScrollAnimation(0.2);
  const skillsAnimation = useScrollAnimation(0.2);
  const experienceAnimation = useScrollAnimation(0.2);
  const ctaAnimation = useScrollAnimation(0.2);

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive, production-ready web applications using React, Vue.js, Node.js, and modern frameworks with a focus on performance and user experience."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with Flutter and Firebase, delivering scalable solutions with seamless user experiences."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Full-Stack Solutions",
      description: "End-to-end application development combining frontend and backend technologies, from concept to production deployment."
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "Flutter", level: 85 },
    { name: "Python", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 82 }
  ];

  const experiences = [
    {
      title: "Web Developer",
      company: "BM Coffee Export",
      location: "Addis Ababa, Ethiopia",
      period: "2025 - Present",
      duration: "Current",
      type: "Full-time",
      description: "Designed, developed, and deployed the official BM Coffee Export website, delivering a production-ready platform that strengthens the company's online presence and showcases products effectively.",
      responsibilities: [
        "Designed and developed responsive website UI with modern web technologies",
        "Managed full development lifecycle including hosting and domain configuration",
        "Ensured cross-device compatibility and reliable performance across browsers",
        "Resolved production-level issues and optimized performance metrics"
      ],
      technologies: ["React", "TypeScript", "Vercel", "Responsive Design", "DNS Configuration"],
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "GDGoC Community Engagement Lead",
      company: "BITS College",
      location: "Addis Ababa, Ethiopia",
      period: "2024 - 2025",
      duration: "1 year",
      type: "Volunteer",
      description: "Led community engagement initiatives by organizing developer events, workshops, and collaborative learning activities to strengthen student participation in software development.",
      responsibilities: [
        "Organized and led developer events and technical workshops",
        "Facilitated collaborative learning activities and coding bootcamps",
        "Increased community participation in software development initiatives",
        "Fostered an active technical community within the campus"
      ],
      technologies: ["Event Organization", "Community Management", "Technical Mentoring"],
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Teaching Assistant",
      company: "BITS College",
      location: "Addis Ababa, Ethiopia",
      period: "2022 - 2025",
      duration: "3 years",
      type: "Internship",
      description: "Supported undergraduate courses in Computer Systems, Python programming, and Java OOP. Assisted students through lab sessions, mentoring, and hands-on guidance in coding and problem-solving.",
      responsibilities: [
        "Conducted lab sessions and provided hands-on coding guidance",
        "Mentored students in debugging and problem-solving techniques",
        "Graded assignments and provided constructive feedback",
        "Supported course material organization and learning resource management"
      ],
      technologies: ["Python", "Java", "Computer Systems", "OOP Concepts"],
      icon: <Lightbulb className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white " style={{ fontFamily: '"Courier Prime", "Courier New", monospace', minHeight: '100vh', width: '100vw' }}>
      {/* Background Elements - matching home page with ox blood colors */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-red-900/30 to-slate-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800/15 rounded-full blur-3xl"></div>
      </div>

      {/* FollowMe Component */}
      <FollowMe />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start px-8 py-20">

        {/* Content Container */}
        <div className="max-w-6xl w-full">

        {/* Header */}
        <div
          ref={headerAnimation.ref}
          className={`transition-all duration-1000 ${
            headerAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: '"Courier Prime", "Courier New", monospace', letterSpacing: '0.05em' }}>
            About Me
          </h1>
          <p className="text-xl text-gray-300 font-light" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>
            Software Engineer & full-stack developer{' '}
            <span className="text-red-400 font-semibold">
              (engineer)
            </span>
          </p>
        </div>

        {/* Story Section */}
        <div
          ref={storyAnimation.ref}
          className={`mt-20 transition-all duration-1000 ${
            storyAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left side - Main content - wider */}
            <div className="md:col-span-2 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl p-8 hover:border-red-600/50 transition-all hover:shadow-lg hover:shadow-red-900/20">
              <div className="space-y-4">
                <p className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>
                  I'm Kenean Tilahun, a passionate full-stack developer with hands-on experience in web and mobile application development. My journey began with a focus on building clean, maintainable code and creating user-focused digital solutions. I'm proficient in JavaScript, Python, Java, and Dart, with strong expertise in modern frameworks including React, Vue.js, Flutter, Node.js, and Django.
                </p>

                <p className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>
                  Currently working as a <span className="text-red-300 font-semibold">Web Developer at BM Coffee Export</span>, where I designed and deployed the official company website, managing the full development lifecycle including responsive UI, hosting, and domain configuration. I've also led community engagement initiatives as <span className="text-red-300 font-semibold">GDGoC Community Engagement Lead</span>, organizing developer events and fostering collaborative learning within the tech community.
                </p>

                <p className="text-gray-300 text-base leading-relaxed" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>
                  My key projects include <span className="text-red-300 font-semibold">SIRA</span>, a mobile freelancing platform built with Flutter and Firebase, and <span className="text-red-300 font-semibold">BookShare</span>, a full-stack book-sharing web application using React and TypeScript. I'm passionate about writing clean code, continuous learning, and delivering production-ready solutions.
                </p>
              </div>
            </div>

            {/* Right side - Highlights - smaller */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl p-4 hover:border-red-600/50 transition-colors">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Creative Problem Solver</h3>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Innovative solutions with focus on UX.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl p-4 hover:border-red-600/50 transition-colors">
                <div className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Full-Stack Developer</h3>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Front-end and back-end expertise.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl p-4 hover:border-red-600/50 transition-colors">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Community Leader</h3>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Mentoring and collaborative learning.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl p-4 hover:border-red-600/50 transition-colors">
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Clean Code Advocate</h3>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Maintainable and efficient code practices.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl p-4 hover:border-red-600/50 transition-colors">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Production Ready</h3>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Delivering deployed solutions at scale.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl p-4 hover:border-red-600/50 transition-colors">
                <div className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Continuous Learner</h3>
                    <p className="text-gray-400 text-xs" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Always exploring new technologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div
          ref={servicesAnimation.ref}
          className={`mt-32 transition-all duration-1000 ${
            servicesAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: '"Courier Prime", "Courier New", monospace', letterSpacing: '0.05em' }}>
            My Services _______.
          </h2>
          <p className="text-gray-400 mb-12" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Specialized expertise across full-stack development</p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl p-8 hover:border-red-600/50 transition-all hover:shadow-lg hover:shadow-red-900/20"
              >
                <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>{service.title}</h3>
                <p className="text-gray-400" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div
          ref={skillsAnimation.ref}
          className={`mt-32 transition-all duration-1000 ${
            skillsAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: '"Courier Prime", "Courier New", monospace', letterSpacing: '0.05em' }}>
            My Skills _______.
          </h2>
          <p className="text-gray-400 mb-12" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Technologies and proficiencies I work with</p>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>{skill.name}</span>
                  <span className="text-red-400 font-semibold" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-red-600 to-red-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div
          ref={experienceAnimation.ref}
          className={`mt-32 transition-all duration-1000 ${
            experienceAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: '"Courier Prime", "Courier New", monospace', letterSpacing: '0.05em' }}>
            Professional Experience
          </h2>
          <p className="text-gray-400 mb-12" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>My journey and contributions in the tech industry</p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl p-8 hover:border-red-600/50 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-red-400 mt-1">{exp.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>{exp.title}</h3>
                    <p className="text-gray-400 font-medium" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-red-950/30 text-red-400 rounded-full text-sm font-medium border border-red-700/30" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>
                    {exp.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-6 mb-4 text-sm text-gray-400" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-400" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>
                        <span className="text-red-400 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-lg text-sm border border-red-700/30"
                      style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          ref={ctaAnimation.ref}
          className={`mt-16 mb-16 transition-all duration-1000 ${
            ctaAnimation.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-red-700/30 rounded-xl p-8 text-center hover:border-red-600/50 transition-all hover:shadow-lg hover:shadow-red-900/20 relative overflow-hidden">
            {/* Subtle glow behind text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-32 bg-red-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px bg-red-500/40"></div>
                <Code2 className="w-4 h-4 text-red-400" />
                <div className="w-8 h-px bg-red-500/40"></div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: '"Courier Prime", "Courier New", monospace', letterSpacing: '0.05em' }}>
                Let's Build Something <span className="text-red-400">Together.</span>
              </h2>

              <p className="text-gray-400 text-sm max-w-lg mx-auto mt-3 mb-6 leading-relaxed" style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}>
                I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hi, feel free to reach out.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30"
                  style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-2 border border-red-700/40 text-gray-300 hover:text-white hover:border-red-500 rounded-lg text-sm font-medium transition-all duration-300"
                  style={{ fontFamily: '"Courier Prime", "Courier New", monospace' }}
                >
                  View Projects
                </Link>
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