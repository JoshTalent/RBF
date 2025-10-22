import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCrown,
  FaAward,
  FaUsers,
} from "react-icons/fa";
import { people03 } from "../../assets";
import Navbar from "../Navbar";
import Footer from "../Footer";

const excoMembers = [
  {
    name: "John Doe",
    position: "President",
    phone: "+250 788 123 456",
    email: "john@example.com",
    image: people03,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
    tenure: "2022 - Present",
    achievements: ["15+ Years Experience", "National Champion 2015", "IABA Certified"]
  },
  {
    name: "Jane Smith",
    position: "Vice President",
    phone: "+250 788 654 321",
    email: "jane@example.com",
    image: people03,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
    tenure: "2021 - Present",
    achievements: ["Sports Management Degree", "Youth Development Specialist"]
  },
  {
    name: "Michael Lee",
    position: "Secretary General",
    phone: "+250 789 000 111",
    email: "michael@example.com",
    image: people03,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
    tenure: "2023 - Present",
    achievements: ["International Relations", "Event Management Expert"]
  },
  {
    name: "Ntwari Josue",
    position: "Treasurer",
    phone: "+250 788 654 321",
    email: "ntwari@example.com",
    image: people03,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
    tenure: "2020 - Present",
    achievements: ["CPA Certified", "Financial Strategist"]
  },
  {
    name: "Olivier Niyigena",
    position: "Technical Director",
    phone: "+250 789 000 111",
    email: "olivier@example.com",
    image: people03,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
    tenure: "2019 - Present",
    achievements: ["Elite Coach Certified", "5 National Titles"]
  },
  {
    name: "Sarah Uwase",
    position: "Media & Communications",
    phone: "+250 788 333 444",
    email: "sarah@example.com",
    image: people03,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
    tenure: "2022 - Present",
    achievements: ["Digital Marketing Pro", "Brand Development"]
  }
];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, delay: 0.5 }
  }
};

const Excome = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white overflow-hidden">
      <Navbar />

      {/* Enhanced Header Section */}
      <motion.header 
        className="relative py-24 bg-gradient-to-br from-sky-900/80 via-black to-slate-900 text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
        <div className="absolute top-10 left-10 w-20 h-20 bg-sky-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-sky-400/10 rounded-full blur-xl animate-pulse" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-sky-500/20 backdrop-blur-sm rounded-full border border-sky-400/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <FaCrown className="text-sky-400" />
            <span className="text-sky-400 font-semibold text-sm tracking-wider uppercase">
              LEADERSHIP TEAM
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tight bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
            Executive Committee
          </h1>
          
          <motion.p 
            className="text-slate-300 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Meet the visionary leaders steering the Rwanda Boxing Federation towards excellence, 
            innovation, and global recognition in the world of boxing.
          </motion.p>

          {/* Leadership Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={statsVariants}
          >
            {[
              { icon: <FaUsers className="text-3xl" />, value: "6 Members", label: "Dedicated Team" },
              { icon: <FaAward className="text-3xl" />, value: "50+ Years", label: "Combined Experience" },
              { icon: <FaMapMarkerAlt className="text-3xl" />, value: "National", label: "Coverage" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all duration-500"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-sky-400 mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.header>

      {/* Enhanced Main Content */}
      <main className="flex-grow py-20 px-6 sm:px-12 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {excoMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 group-hover:border-sky-500/40 transition-all duration-500 h-full">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[1.5px] rounded-3xl bg-slate-900" />
                </div>

                <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                  {/* Profile Image with Enhanced Design */}
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 rounded-full border-4 border-sky-500/50 p-1 group-hover:border-sky-400 transition-all duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover shadow-2xl"
                      />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-slate-900">
                      {index + 1}
                    </div>
                    {/* Animated Ring */}
                    <div className="absolute -inset-2 rounded-full border-2 border-sky-400/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Member Info */}
                  <div className="flex-1 w-full">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-100 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <div className="mb-4">
                      <p className="text-sky-400 font-semibold text-lg mb-1">{member.position}</p>
                      <p className="text-slate-400 text-sm">{member.tenure}</p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6 space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2 text-slate-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                          {achievement}
                        </div>
                      ))}
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-center gap-3 text-slate-300 hover:text-white transition-colors duration-300">
                        <FaPhoneAlt className="text-sky-400 flex-shrink-0" />
                        <span className="text-sm">{member.phone}</span>
                      </div>
                      <div className="flex items-center justify-center gap-3 text-slate-300 hover:text-white transition-colors duration-300">
                        <FaEnvelope className="text-sky-400 flex-shrink-0" />
                        <span className="text-sm break-all">{member.email}</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 pt-4 border-t border-white/10">
                      {[
                        { icon: FaFacebook, href: member.socials.facebook },
                        { icon: FaTwitter, href: member.socials.twitter },
                        { icon: FaLinkedin, href: member.socials.linkedin }
                      ].map((social, idx) => (
                        <motion.a
                          key={idx}
                          href={social.href}
                          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-300"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <social.icon size={16} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div 
          className="text-center mt-20 max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-sky-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to Connect With Our Leadership?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Our executive committee is dedicated to advancing boxing in Rwanda. 
              Reach out for partnerships, inquiries, or to learn more about our initiatives.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl text-white font-semibold shadow-2xl shadow-sky-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Executive Team
            </motion.button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Excome;