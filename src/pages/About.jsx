import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Expert in React, Vue.js, JavaScript, HTML5, CSS3, and modern frameworks"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Proficient in Node.js, Python, PHP, and database management systems"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      description: "Full-stack web development with responsive and scalable solutions"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps using React Native and Flutter"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Learn more about my journey, skills, and passion for creating exceptional digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Story */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-red-400">My Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Hello! I'm Kenean Tilahun, a passionate full-stack developer with a love for creating 
                innovative digital solutions. My journey into programming began during my university years, 
                where I discovered the power of code to solve real-world problems.
              </p>
              <p>
                With over 3 years of experience in web development, I've worked on diverse projects 
                ranging from e-commerce platforms to enterprise applications. I believe in writing 
                clean, maintainable code and staying up-to-date with the latest technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I'm always 
                eager to take on new challenges and collaborate on exciting projects.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-red-900 to-red-600 rounded-2xl transform -rotate-3 absolute top-4 left-4"></div>
              <div className="w-80 h-80 bg-gray-200 rounded-2xl overflow-hidden relative z-10">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-gray-600 text-center">
                    <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-3"></div>
                    <p className="font-medium">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors duration-300">
                <div className="text-red-400 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-slate-800 p-8 rounded-xl">
            <div className="text-4xl font-bold text-red-400 mb-2">3+</div>
            <p className="text-gray-300">Years Experience</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl">
            <div className="text-4xl font-bold text-red-400 mb-2">20+</div>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-xl">
            <div className="text-4xl font-bold text-red-400 mb-2">5+</div>
            <p className="text-gray-300">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;