import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle  } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to a backend service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    // Optionally clear the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
            Contact <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-4 rounded-full" />
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4 sm:mb-6">Get in Touch</h2>
            <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              Have a question, a project in mind, or just want to say hello? Fill out the form or reach out through the contact details below.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center text-slate-200 group hover:text-red-400 transition-colors duration-300">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm sm:text-base break-all">keni232127@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-200 group hover:text-red-400 transition-colors duration-300">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm sm:text-base">+251917557529</span>
              </div>
              <div className="flex items-center text-slate-200 group hover:text-red-400 transition-colors duration-300">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm sm:text-base">Addis Ababa, Ethiopia</span>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 border-t border-slate-700 pt-6 sm:pt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4">Connect with Me</h3>
              <div className="flex space-x-4 sm:space-x-6">
                <a 
                  href="https://github.com/KeniKT" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-red-400 transition-all duration-300 hover:scale-110 transform"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kenean/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-red-400 transition-all duration-300 hover:scale-110 transform"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
                
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4 sm:mb-6">Send Me a Message</h2>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 text-sm sm:text-base lg:text-lg font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 placeholder-slate-400 text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate-300 text-sm sm:text-base lg:text-lg font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 placeholder-slate-400 text-sm sm:text-base"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-slate-300 text-sm sm:text-base lg:text-lg font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 placeholder-slate-400 text-sm sm:text-base"
                  placeholder="Regarding a project..."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-300 text-sm sm:text-base lg:text-lg font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 resize-y placeholder-slate-400 text-sm sm:text-base min-h-[120px]"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 sm:py-4 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400/50 shadow-lg hover:shadow-xl"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base">Send Message</span>
              </button>
            </div>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-full mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">
            I typically respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;