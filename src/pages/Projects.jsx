import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/username/ecommerce",
      demo: "https://demo-ecommerce.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      category: "web",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/username/taskapp",
      demo: "https://demo-taskapp.com"
    },
    {
      id: 3,
      title: "Weather Mobile App",
      description: "Cross-platform mobile weather application with location services, weather forecasts, and beautiful UI animations.",
      category: "mobile",
      technologies: ["React Native", "OpenWeather API", "AsyncStorage"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/username/weatherapp",
      demo: "https://play.google.com/store/apps/details?id=com.weatherapp"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative design and smooth animations. Built with modern web technologies.",
      category: "web",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/username/portfolio",
      demo: "https://keneantilahun.com"
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data visualization with charts, graphs, and real-time data updates for business analytics.",
      category: "web",
      technologies: ["React", "D3.js", "Python", "Flask"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/username/dashboard",
      demo: "https://demo-dashboard.com"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Comprehensive LMS with course management, video streaming, quiz system, and progress tracking for educational institutions.",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      image: "/api/placeholder/400/300",
      github: "https://github.com/username/lms",
      demo: "https://demo-lms.com"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'ui', label: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore my latest work and creative projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category.key
                  ? 'bg-gradient-to-r from-red-900 to-red-800 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              <Filter className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-gray-600 text-center">
                    <div className="w-16 h-16 bg-gray-500 rounded-lg mx-auto mb-3"></div>
                    <p className="font-medium">Project Image</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-slate-700 text-red-400 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Like What You See?</h2>
          <p className="text-gray-300 mb-8">Let's work together to bring your ideas to life</p>
          <button className="bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-3 rounded-lg font-medium hover:from-red-800 hover:to-red-700 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;