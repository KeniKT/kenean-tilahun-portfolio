import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-red-500 mb-12">Contact Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-red-400 mb-6">Get in Touch</h2>
            <p className="text-slate-300 mb-8">
              Have a question, a project in mind, or just want to say hello? Fill out the form or reach out through the contact details below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center text-slate-200">
                <Mail className="w-6 h-6 mr-4 text-red-400" />
                <span>keni232127@gmail.com</span> {/* Replace with your actual email */}
              </div>
              <div className="flex items-center text-slate-200">
                <Phone className="w-6 h-6 mr-4 text-red-400" />
                <span>+251917557529</span> {/* Replace with your actual phone number */}
              </div>
              <div className="flex items-center text-slate-200">
                <MapPin className="w-6 h-6 mr-4 text-red-400" />
                <span>Addis Ababa, Ethiopia</span> {/* Replace with your actual location */}
              </div>
            </div>

            <div className="mt-10 border-t border-slate-700 pt-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Connect with Me</h3>
              <div className="flex space-x-6">
                <a href="https://github.com/KeniKT" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-red-400 transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/kenean/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-red-400 transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
                <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-red-400 transition-colors">
                  <Twitter className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-red-400 mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 text-lg font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 transition-colors placeholder-slate-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-300 text-lg font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 transition-colors placeholder-slate-400"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-slate-300 text-lg font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 transition-colors placeholder-slate-400"
                  placeholder="Regarding a project..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-300 text-lg font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 transition-colors resize-y placeholder-slate-400"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;