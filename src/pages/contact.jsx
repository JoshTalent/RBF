import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import styles from "../style";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Send,
  Clock,
  User,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Loader
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+250 788 111 222",
      description: "Mon-Fri from 8am to 5pm",
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@rwaboxingfed.rw",
      description: "We reply within 24 hours",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Kigali Arena, Kigali",
      description: "Office hours: 8:00 - 17:00",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 Hours",
      description: "For all inquiries",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    }
  ];

  const departments = [
    { name: "General Inquiries", email: "info@rwaboxingfed.rw" },
    { name: "Technical Questions", email: "technical@rwaboxingfed.rw" },
    { name: "Partnerships", email: "partnerships@rwaboxingfed.rw" },
    { name: "Media Relations", email: "media@rwaboxingfed.rw" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate random success/failure for demo
      if (Math.random() > 0.2) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Network error. Please try again.");
      }
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen">
      <Navbar />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} py-16`}>
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-sky-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6"
            >
              <MessageCircle className="w-10 h-10 text-sky-400" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Get In <span className="text-sky-400">Touch</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Reach out to the Rwanda Boxing Federation. We're here to support athletes, 
              partners, and the boxing community in Rwanda and beyond.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900 rounded-2xl p-6 text-center group hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-sky-400/10 border border-gray-800"
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>
                <h3 className="text-white font-bold mb-2">{method.title}</h3>
                <p className="text-sky-400 font-semibold mb-1">{method.details}</p>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Contact Info & Departments */}
            <motion.div
              className="lg:col-span-1 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Contact Information Card */}
              <div className="bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-sky-400" />
                  Contact Information
                </h2>

                <div className="space-y-4">
                  {contactMethods.slice(0, 3).map((method, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-800 transition-colors">
                      <div className={`p-2 ${method.bgColor} rounded-xl`}>
                        <method.icon className={`w-5 h-5 ${method.color}`} />
                      </div>
                      <div>
                        <p className="text-white font-medium">{method.title}</p>
                        <p className="text-sky-400">{method.details}</p>
                        <p className="text-gray-400 text-sm">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h3 className="text-white font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-3">
                    {[
                      { icon: Facebook, color: "hover:bg-blue-600", href: "#" },
                      { icon: Twitter, color: "hover:bg-sky-500", href: "#" },
                      { icon: Instagram, color: "hover:bg-pink-600", href: "#" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-3 rounded-xl bg-gray-800 text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Departments Card */}
              <div className="bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">Departments</h2>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="p-4 rounded-xl bg-gray-800 hover:bg-gray-750 transition-colors">
                      <h3 className="text-white font-semibold mb-1">{dept.name}</h3>
                      <p className="text-sky-400 text-sm">{dept.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form & Map */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Contact Form Card */}
              <div className="bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Send className="w-6 h-6 text-sky-400" />
                    Send Us a Message
                  </h2>
                  <AnimatePresence>
                    {formStatus.submitted && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 text-green-400 bg-green-500/20 px-3 py-1 rounded-full text-sm"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Message Sent!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence>
                  {formStatus.error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 bg-red-500/20 border border-red-500/30 text-red-400 p-4 rounded-xl mb-6"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>{formStatus.error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full py-4 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                    whileHover={{ scale: formStatus.submitting ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {formStatus.submitting ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>

              {/* Map Card */}
              <motion.div
                className="bg-gray-900 rounded-2xl shadow-xl p-6 border border-gray-800"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white font-bold mb-4 text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-sky-400" />
                  Visit Our Office
                </h3>
                <div className="h-80 w-full rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    title="Rwanda Boxing Federation Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.738264919104!2d30.06188411475358!3d-1.9440729985740167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6e2d9dd2a81%3A0x7f89c0f45c7cf9b!2sBK%20Arena!5e0!3m2!1sen!2srw!4v1674245335978!5m2!1sen!2srw"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    className="border-0"
                    style={{ filter: "invert(90%) hue-rotate(180deg)" }}
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-300 text-sm">
                    Kigali Arena, Kigali, Rwanda • Open 8:00 AM - 5:00 PM
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="mt-20">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;