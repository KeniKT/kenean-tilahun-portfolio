import React, { useState, useEffect, useRef } from "react";
import { Mail, User, MessageSquare, Send, Github, Linkedin, Code, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

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
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const headerAnimation = useScrollAnimation(0.3);
  const formAnimation = useScrollAnimation(0.2);
  const socialAnimation = useScrollAnimation(0.2);
  const replyAnimation = useScrollAnimation(0.2);

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("Kz89cdId_2J4qi-Mf");
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        "service_02ikrub", // Your actual service ID
        "template_a7797ok", // Your actual template ID
        {
          from_name: formData.user_name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Kz89cdId_2J4qi-Mf" // Your actual public key
      );

      console.log("SUCCESS!", result.status, result.text);
      setStatus("success");
      setFormData({
        user_name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("error");
      
      // More specific error handling
      if (error.status === 400) {
        alert("Bad request. Please check your EmailJS configuration.");
      } else if (error.status === 401) {
        alert("Unauthorized. Please check your EmailJS public key.");
      } else if (error.status === 404) {
        alert("Service or template not found. Please check your service ID and template ID.");
      } else {
        alert(`Failed to send message: ${error.text || error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/KeniKT"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/kenean/"
    },
    {
      name: "LeetCode",
      icon: <Code className="w-6 h-6" />,
      url: "https://leetcode.com/u/keniKT/"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "keni232127@gmail.com",
      color: "text-red-400"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone", 
      value: "+251917557529",
      color: "text-red-400"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Addis Ababa",
      color: "text-red-400"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated Background Elements - matching About page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - matching About page styling */}
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
            Contact <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Ready to start your next project? Let's collaborate and bring your ideas to life
          </p>
        </div>

        {/* Two Main Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          
          {/* Box 1: Contact Form - matching About page card styling */}
          <div
            ref={formAnimation.ref}
            className={`transition-all duration-1000 ${
              formAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/50 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Send Message
              </h2>

              {/* Status Messages */}
              {status === "success" && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-100 text-center animate-pulse">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce" />
                    <span>Message sent successfully! I'll get back to you within 24 hours.</span>
                  </div>
                </div>
              )}

              <form onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                      <User className="w-4 h-4 text-red-400" />
                      <span>Name</span>
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 placeholder-slate-400 text-white disabled:opacity-50 group-hover:border-slate-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-red-400" />
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 placeholder-slate-400 text-white disabled:opacity-50 group-hover:border-slate-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-red-400" />
                    <span>Subject</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 placeholder-slate-400 text-white disabled:opacity-50 group-hover:border-slate-500"
                    placeholder="Regarding a project..."
                  />
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-red-400" />
                    <span>Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 placeholder-slate-400 text-white disabled:opacity-50 group-hover:border-slate-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[160px] overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center space-x-2">
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          <span>Send Message</span>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Box 2: Contact Info & Social Links - matching About page card styling */}
          <div
            ref={socialAnimation.ref}
            className={`transition-all duration-1000 ${
              socialAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/50 shadow-2xl h-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Connect With Me
              </h2>

              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-200 flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span>Contact Information</span>
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 p-4 rounded-lg bg-slate-700/30 border border-slate-600/50 hover:border-slate-500 transition-all duration-300 group transform hover:scale-105 ${
                        socialAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className={`${info.color} group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links - Icon only without background colors */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-200 flex items-center space-x-2">
                  <Code className="w-5 h-5 text-red-400" />
                  <span>Social Platforms</span>
                </h3>
                <div className="flex justify-center space-x-8">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-4 rounded-full border border-slate-600/50 hover:border-red-400/50 transition-all duration-300 hover:scale-110 transform ${
                        socialAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                    >
                      <div className="text-gray-400 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300">
                        {link.icon}
                      </div>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs text-gray-400 whitespace-nowrap">{link.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 24 Hour Reply Message at the end */}
        <div
          ref={replyAnimation.ref}
          className={`text-center mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 ${
            replyAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/50 rounded-lg inline-block overflow-hidden shadow-lg animate-pulse-slow">
            <p className="text-red-400 text-sm sm:text-base font-medium flex items-center space-x-2 relative z-10">
              <span className="text-lg animate-bounce-fast">⏰</span>
              <span>I will reply within 24 hours</span>
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-20 blur-xl animate-spin-slow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


