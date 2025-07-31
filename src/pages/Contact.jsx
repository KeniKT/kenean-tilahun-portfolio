import React, { useState, useEffect, useRef } from "react";
import { Mail, User, MessageSquare, Send, Github, Linkedin, Code, MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';

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
      icon: <Github className="w-5 h-5 xs:w-6 xs:h-6" />,
      url: "https://github.com/KeniKT"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="w-5 h-5 xs:w-6 xs:h-6" />,
      url: "https://www.linkedin.com/in/kenean/"
    },
    {
      name: "LeetCode",
      icon: <Code className="w-5 h-5 xs:w-6 xs:h-6" />,
      url: "https://leetcode.com/u/keniKT/"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4 xs:w-5 xs:h-5" />,
      label: "Email",
      value: "keni232127@gmail.com",
      color: "text-red-400",
      href: "mailto:keni232127@gmail.com",
      type: "email"
    },
    {
      icon: <Phone className="w-4 h-4 xs:w-5 xs:h-5" />,
      label: "Phone", 
      value: "+251917557529",
      color: "text-red-400",
      href: "tel:+251917557529",
      type: "phone"
    },
    {
      icon: <MapPin className="w-4 h-4 xs:w-5 xs:h-5" />,
      label: "Location",
      value: "Addis Ababa",
      color: "text-red-400",
      href: "https://maps.google.com/?q=Addis+Ababa",
      type: "location"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Optimized Background Elements - Reduced for mobile performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-8 xs:top-10 sm:top-20 left-3 xs:left-5 sm:left-10 w-32 h-32 xs:w-48 xs:h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-red-900/20 to-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-8 xs:bottom-10 sm:bottom-20 right-3 xs:right-5 sm:right-10 w-40 h-40 xs:w-64 xs:h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-900/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
            Contact <span className="bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-12 xs:w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-red-900 to-red-600 mx-auto mb-3 xs:mb-4 sm:mb-6 rounded-full" />
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg lg:text-xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 xs:px-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Ready to start your next project? Let's collaborate and bring your ideas to life
          </p>
        </div>

        {/* Enhanced Two Main Boxes with better mobile layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          
          {/* Box 1: Enhanced Contact Form */}
          <div
            ref={formAnimation.ref}
            className={`transition-all duration-1000 ${
              formAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-10 border border-slate-700/50 shadow-2xl">
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-6 sm:mb-8 text-center bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Send Message
              </h2>

              {/* Enhanced Status Messages */}
              {status === "success" && (
                <div className="mb-4 xs:mb-6 p-3 xs:p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-100 text-center animate-pulse">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 xs:w-4 xs:h-4 bg-green-500 rounded-full animate-bounce" />
                    <span className="text-sm xs:text-base">Message sent successfully! I'll get back to you within 24 hours.</span>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-4 xs:mb-6 p-3 xs:p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-100 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 xs:w-4 xs:h-4 bg-red-500 rounded-full" />
                    <span className="text-sm xs:text-base">Failed to send message. Please try again.</span>
                  </div>
                </div>
              )}

              <form onSubmit={sendEmail} className="space-y-4 xs:space-y-6">
                {/* Enhanced form fields with better mobile layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6">
                  <div className="group">
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                      <User className="w-3 h-3 xs:w-4 xs:h-4 text-red-400" />
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
                      className="w-full px-3 py-3 xs:px-4 xs:py-3 min-h-[44px] bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 placeholder-slate-400 text-white disabled:opacity-50 group-hover:border-slate-500 text-sm xs:text-base"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                      <Mail className="w-3 h-3 xs:w-4 xs:h-4 text-red-400" />
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
                      className="w-full px-3 py-3 xs:px-4 xs:py-3 min-h-[44px] bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 placeholder-slate-400 text-white disabled:opacity-50 group-hover:border-slate-500 text-sm xs:text-base"
                      placeholder="you@example.com"
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                    <MessageSquare className="w-3 h-3 xs:w-4 xs:h-4 text-red-400" />
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
                    className="w-full px-3 py-3 xs:px-4 xs:py-3 min-h-[44px] bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 placeholder-slate-400 text-white disabled:opacity-50 group-hover:border-slate-500 text-sm xs:text-base"
                    placeholder="Regarding a project..."
                  />
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                    <MessageSquare className="w-3 h-3 xs:w-4 xs:h-4 text-red-400" />
                    <span>Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-3 py-3 xs:px-4 xs:py-3 bg-slate-700/70 border border-slate-600 rounded-lg focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 placeholder-slate-400 text-white disabled:opacity-50 group-hover:border-slate-500 resize-none text-sm xs:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <div className="flex justify-center pt-2">
                  {/* UPDATED SEND MESSAGE BUTTON - Applied Download CV styling */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-red-900 to-red-800 text-white px-6 xs:px-8 py-3 xs:py-4 rounded-lg font-medium hover:from-red-800 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm xs:text-base min-h-[44px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                    aria-label="Send Message"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 xs:w-5 xs:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 xs:w-5 xs:h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>

          {/* Box 2: Enhanced Contact Info & Social Links */}
          <div
            ref={socialAnimation.ref}
            className={`transition-all duration-1000 ${
              socialAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-10 border border-slate-700/50 shadow-2xl h-full">
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4 xs:mb-6 sm:mb-8 text-center bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Connect With Me
              </h2>

              {/* Enhanced Contact Information with click functionality */}
              <div className="mb-6 xs:mb-8">
                <h3 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-gray-200 flex items-center space-x-2">
                  <Mail className="w-4 h-4 xs:w-5 xs:h-5 text-red-400" />
                  <span>Contact Information</span>
                </h3>
                <div className="space-y-3 xs:space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.type === 'location' ? '_blank' : '_self'}
                      rel={info.type === 'location' ? 'noopener noreferrer' : undefined}
                      className={`flex items-center space-x-3 xs:space-x-4 p-3 xs:p-4 rounded-lg bg-slate-700/30 border border-slate-600/50 hover:border-slate-500 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 group transform hover:scale-105 focus:scale-105 cursor-pointer min-h-[44px] focus:outline-none ${
                        socialAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      aria-label={`${info.type === 'email' ? 'Send email to' : info.type === 'phone' ? 'Call' : 'View location'} ${info.value}`}
                    >
                      <div className={`${info.color} group-hover:scale-110 group-focus:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs xs:text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium text-sm xs:text-base truncate">{info.value}</p>
                      </div>
                      {info.type === 'email' && (
                        <div className="text-gray-400 group-hover:text-red-400 transition-colors duration-300">
                          <Mail className="w-3 h-3 xs:w-4 xs:h-4" />
                        </div>
                      )}
                      {info.type === 'phone' && (
                        <div className="text-gray-400 group-hover:text-red-400 transition-colors duration-300">
                          <Phone className="w-3 h-3 xs:w-4 xs:h-4" />
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>

              {/* Enhanced Social Links with better touch targets */}
              <div>
                <h3 className="text-base xs:text-lg font-semibold mb-3 xs:mb-4 text-gray-200 flex items-center space-x-2">
                  <Code className="w-4 h-4 xs:w-5 xs:h-5 text-red-400" />
                  <span>Social Platforms</span>
                </h3>
                <div className="flex justify-center space-x-4 xs:space-x-6 sm:space-x-8">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 xs:p-4 rounded-full border border-slate-600/50 hover:border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300 hover:scale-110 focus:scale-110 transform min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none ${
                        socialAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                      aria-label={`Visit my ${link.name} profile`}
                    >
                      <div className="text-gray-400 group-hover:text-red-400 group-focus:text-red-400 group-hover:scale-110 group-focus:scale-110 transition-all duration-300">
                        {link.icon}
                      </div>
                      <div className="absolute -bottom-8 xs:-bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="text-xs text-gray-400 whitespace-nowrap bg-slate-800 px-2 py-1 rounded border border-slate-600">{link.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UPDATED 24 Hour Reply Message - Removed download arrow, added appropriate icon */}
        <div
          ref={replyAnimation.ref}
          className={`flex justify-center transition-all duration-1000 ${
            replyAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-900 to-red-800 text-white px-6 xs:px-8 py-3 xs:py-4 rounded-lg font-medium hover:from-red-800 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm xs:text-base min-h-[44px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-default"
            style={{ fontFamily: "'Roboto', sans-serif" }}
            tabIndex={0}
            role="status"
            aria-label="Response time commitment"
          >
            <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 animate-pulse" />
            <span>I will reply within 24 hours</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

