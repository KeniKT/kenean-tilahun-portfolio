import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Clock, Users, Code2, Lightbulb } from 'lucide-react';

// Scroll animation hook
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold, rootMargin: '50px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const Experience = () => {
  const headerAnimation = useScrollAnimation(0.3);
  const timelineAnimation = useScrollAnimation(0.2);

  const experiences = [
    {
      title: "Teaching Assistant",
      company: "BITS College",
      location: "Addis Ababa, Ethiopia",
      period: "2023 - Present",
      duration: "2+ years",
      type: "Internship",
      description:
        "Supporting students in understanding programming concepts and providing guidance on software development projects.",
      responsibilities: [
        "Assisted students with programming assignments and projects",
        "Conducted tutorial sessions on data structures and algorithms",
        "Provided mentorship on software development best practices",
        "Helped organize coding workshops and tech events",
      ],
      technologies: ["Python", "Java", "Data Structures", "Algorithms"],
      icon: <Users className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Community Engagement Lead – GDG on Campus @ BITS College",
      company: "BITS College",
      location: "Addis Ababa, Ethiopia",
      period: "2024 – Jan 2025",
      duration: "1 year",
      type: "Volunteer",
      description:
        "Organized and led events like the Vibe Coding Hackathon, focusing on AI and product thinking. Collaborated with peers and industry speakers to promote innovation and technical collaboration.",
      responsibilities: [
        "Organized workshops on modern web development",
        "Facilitated coding bootcamps for beginners",
        "Promoted open-source contribution among students",
        "Mentored junior developers in the community",
      ],
      technologies: ["React", "Flutter", "Firebase", "Git"],
      icon: <Code2 className="w-5 h-5 text-red-500" />,
    },
    {
      title: "E-learning Content Manager",
      company: "BITS College",
      location: "Addis Ababa, Ethiopia",
      period: "2022 - 2024",
      duration: "2 years",
      type: "Program",
      description:
        "Managed and structured course materials on Moodle for over 6 technical and mathematics subjects. Ensured content consistency, clarity, and accessibility.",
      responsibilities: [
        "Coordinated academic content delivery for 6+ subjects",
        "Improved resource organization using Moodle LMS",
        "Supported digital learning across hybrid classrooms",
        "Structured weekly modules, assignments, and quizzes",
      ],
      technologies: ["Moodle", "E-learning Systems", "Digital Content Management"],
      icon: <Lightbulb className="w-5 h-5 text-red-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-16 relative overflow-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Professional <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Experience</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-4 rounded-full" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            My journey through the world of software development
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timelineAnimation.ref}
          className={`transition-all duration-1000 ${
            timelineAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-orange-500 to-red-500 rounded-full" />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  return (
    <div className="relative pl-16">
      {/* Dot */}
      <div className="absolute left-8 top-6 w-4 h-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-lg -translate-x-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-ping opacity-75" />
      </div>

      {/* Card */}
      <div
        className="bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl hover:border-red-400 hover:shadow-red-500/20 transition-all duration-500"
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Title */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {experience.icon}
            <div>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {experience.title}
              </h3>
              <p className="text-red-500 font-semibold">{experience.company}</p>
            </div>
          </div>
          <span className="flex items-center gap-1 text-gray-400 text-sm bg-slate-700/50 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" /> {experience.duration}
          </span>
        </div>

        {/* Period & location */}
        <div className="mb-3 text-gray-400 text-sm flex flex-wrap gap-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {experience.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" /> {experience.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-4">{experience.description}</p>

        {/* Responsibilities */}
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Key Responsibilities:</h4>
          <ul className="space-y-1 list-disc list-inside text-gray-300">
            {experience.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-red-500/20 text-red-300 text-sm rounded border border-red-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Type */}
        <span className="inline-block px-3 py-1 bg-red-500/10 text-red-400 text-sm rounded-full border border-red-500/20">
          {experience.type}
        </span>
      </div>
    </div>
  );
};

export default Experience;
