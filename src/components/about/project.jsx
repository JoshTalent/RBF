import React, { useState } from "react";
import { Navbar, Footer } from "..";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  BarChart3, 
  X, 
  Target,
  Users,
  Award,
  TrendingUp,
  Filter,
  ExternalLink,
  MapPin,
  Star,
  CheckCircle2,
  PlayCircle
} from "lucide-react";
import { abcdef, abcdefg, abcdefgh, abcdefghi } from "../../assets";

// Enhanced Projects Data
const projects = [
  {
    id: 1,
    title: "National Boxing Academy",
    type: "Long-term",
    duration: "2025 - 2030",
    progress: 40,
    description: "Establishing a state-of-the-art nationwide academy to train the next generation of Rwandan boxing champions with modern equipment, expert coaching, and comprehensive athlete development programs.",
    image: abcdef,
    milestones: [
      { name: "Site Selection & Land Acquisition", completed: true, date: "2024 Q1" },
      { name: "Architectural Design & Planning", completed: true, date: "2024 Q2" },
      { name: "Construction Phase 1", completed: false, date: "2024 Q4" },
      { name: "Coach Recruitment & Training", completed: false, date: "2025 Q1" },
      { name: "Student Enrollment", completed: false, date: "2025 Q2" }
    ],
    budget: "$2.5M",
    teamSize: 15,
    location: "Kigali, Rwanda",
    impact: "Train 200+ young athletes annually",
    status: "In Progress",
    partners: ["RDB", "Ministry of Sports", "International Boxing Association"],
    technologies: ["Modern Training Equipment", "Sports Science Lab", "Digital Tracking Systems"]
  },
  {
    id: 2,
    title: "Monthly Youth Tournament Series",
    type: "Short-term",
    duration: "Monthly",
    progress: 70,
    description: "Organizing competitive monthly tournaments across all regions to provide young boxers with regular competitive experience, talent identification, and pathway to national recognition.",
    image: abcdefg,
    milestones: [
      { name: "Venue Partnerships", completed: true, date: "2024 Q1" },
      { name: "Sponsorship Acquisition", completed: true, date: "2024 Q2" },
      { name: "Regional Coordinators", completed: true, date: "2024 Q3" },
      { name: "Digital Registration System", completed: false, date: "2024 Q4" },
      { name: "National Finals", completed: false, date: "2025 Q1" }
    ],
    budget: "$500K",
    teamSize: 8,
    location: "Nationwide",
    impact: "Engage 5,000+ youth participants",
    status: "Active",
    partners: ["MTN Rwanda", "Airtel", "Local Governments"],
    technologies: ["Live Streaming", "Digital Scoring", "Mobile App"]
  },
  {
    id: 3,
    title: "Digital Platform Upgrade",
    type: "Short-term",
    duration: "3 Months",
    progress: 90,
    description: "Complete overhaul of the federation's digital presence with advanced features for news distribution, event management, athlete profiling, and interactive fan engagement.",
    image: abcdefgh,
    milestones: [
      { name: "UX/UI Design", completed: true, date: "2024 Q1" },
      { name: "Backend Development", completed: true, date: "2024 Q2" },
      { name: "Content Migration", completed: true, date: "2024 Q3" },
      { name: "User Testing", completed: false, date: "2024 Q4" },
      { name: "Official Launch", completed: false, date: "2024 Q4" }
    ],
    budget: "$150K",
    teamSize: 6,
    location: "Digital",
    impact: "Serve 50,000+ monthly users",
    status: "Final Phase",
    partners: ["Tech Companies", "Digital Agencies"],
    technologies: ["React", "Node.js", "Cloud Infrastructure", "Mobile First"]
  },
  {
    id: 4,
    title: "International Boxing League Participation",
    type: "Long-term",
    duration: "2025 - 2028",
    progress: 30,
    description: "Strategic participation in international boxing leagues to elevate Rwandan boxers' global profile, gain valuable experience, and establish Rwanda as a competitive boxing nation.",
    image: abcdefghi,
    milestones: [
      { name: "Talent Identification", completed: true, date: "2024 Q1" },
      { name: "International Partnerships", completed: false, date: "2024 Q3" },
      { name: "Training Camps", completed: false, date: "2024 Q4" },
      { name: "League Registration", completed: false, date: "2025 Q1" },
      { name: "Competition Season", completed: false, date: "2025 Q2" }
    ],
    budget: "$1.2M",
    teamSize: 12,
    location: "International",
    impact: "20+ international competitors",
    status: "Planning",
    partners: ["World Boxing", "African Boxing Confederation", "Sponsors"],
    technologies: ["High-Performance Training", "Video Analysis", "Sports Medicine"]
  }
];

// Project Modal Component
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover rounded-t-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent rounded-t-3xl" />
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/30 transition-all duration-300"
        >
          <X size={24} />
        </button>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              project.type === "Long-term" 
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "bg-green-500/20 text-green-400 border border-green-500/30"
            }`}>
              {project.type}
            </span>
            <span className="px-4 py-2 bg-sky-500/20 text-sky-400 rounded-full text-sm font-semibold border border-sky-500/30">
              {project.status}
            </span>
            <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold border border-white/10">
              {project.duration}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">{project.title}</h2>
          <div className="flex items-center gap-4 text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-sky-400" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-sky-400" />
              <span>{project.teamSize} Team Members</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-sky-400" />
              <span>{project.budget} Budget</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="text-sky-400" />
                Project Overview
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Impact */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Award className="text-sky-400" />
                Expected Impact
              </h3>
              <div className="p-4 bg-green-500/10 rounded-2xl border border-green-500/20">
                <p className="text-green-400 font-semibold text-lg">{project.impact}</p>
              </div>
            </div>

            {/* Milestones */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="text-sky-400" />
                Project Milestones
              </h3>
              <div className="space-y-4">
                {project.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${
                      milestone.completed
                        ? "bg-green-500/10 border-green-500/20"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      milestone.completed
                        ? "bg-green-500 text-white"
                        : "bg-slate-700 text-slate-400"
                    }`}>
                      {milestone.completed ? <CheckCircle2 size={20} /> : <span>{index + 1}</span>}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${
                        milestone.completed ? "text-green-400" : "text-white"
                      }`}>
                        {milestone.name}
                      </h4>
                      <p className="text-slate-400 text-sm">{milestone.date}</p>
                    </div>
                    {milestone.completed && (
                      <CheckCircle2 size={20} className="text-green-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-sky-400" />
                Project Progress
              </h4>
              <div className="space-y-3">
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Progress</span>
                  <span className="text-sky-400 font-semibold">{project.progress}%</span>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Users size={20} className="text-sky-400" />
                Strategic Partners
              </h4>
              <div className="space-y-2">
                {project.partners.map((partner, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-300">
                    <Star size={16} className="text-sky-400" />
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <PlayCircle size={20} className="text-sky-400" />
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm border border-sky-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl text-white font-semibold shadow-2xl shadow-sky-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <ExternalLink size={20} />
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// Project Card Component
const ProjectCard = ({ project, onClick }) => (
  <motion.div
    className="group relative"
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div 
      className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 group-hover:border-sky-500/40 transition-all duration-500 h-full cursor-pointer"
      onClick={() => onClick(project)}
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[1.5px] rounded-3xl bg-slate-900" />
      </div>

      <div className="relative z-10">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
          {/* Status Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              project.type === "Long-term" 
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "bg-green-500/20 text-green-400 border border-green-500/30"
            }`}>
              {project.type === "Long-term" ? <Calendar size={12} /> : <Clock size={12} />}
              {project.type}
            </span>
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-semibold border border-white/10">
              {project.status}
            </span>
          </div>

          {/* Progress on Image */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-sm font-semibold">Progress</span>
              <span className="text-sky-400 text-sm font-bold">{project.progress}%</span>
            </div>
            <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-100 transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={14} className="text-sky-400" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Users size={14} className="text-sky-400" />
              <span>{project.teamSize} Team</span>
            </div>
          </div>

          {/* Impact Preview */}
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <p className="text-sky-400 text-sm font-semibold">{project.impact}</p>
          </div>

          {/* View Details CTA */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sky-400 text-sm font-semibold group-hover:text-sky-300 transition-colors duration-300">
              View Details
            </span>
            <ExternalLink size={16} className="text-sky-400 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
    </div>
  </motion.div>
);

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(proj => 
        filter === "Long-term" ? proj.type === "Long-term" : proj.type === "Short-term"
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-900/80 via-black to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-sky-500/20 backdrop-blur-sm rounded-full border border-sky-400/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Target className="text-sky-400" />
            <span className="text-sky-400 font-semibold text-sm tracking-wider uppercase">
              STRATEGIC INITIATIVES
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Projects
          </motion.h1>

          <motion.p 
            className="text-slate-300 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover our strategic initiatives and development projects designed to 
            elevate Rwandan boxing to new heights of excellence and global recognition.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filter Section */}
          <motion.div
            className="flex flex-wrap gap-4 mb-12 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {["All", "Long-term", "Short-term"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === type
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-2xl shadow-sky-500/25"
                    : "bg-white/5 text-slate-300 border border-white/10 hover:border-sky-500/30 hover:text-white"
                }`}
              >
                {type === "Long-term" && <Calendar size={18} />}
                {type === "Short-term" && <Clock size={18} />}
                {type}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={setSelectedProject}
                  />
                ))
              ) : (
                <motion.div
                  className="col-span-full text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-2xl mx-auto">
                    <Filter className="text-sky-400 mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
                    <p className="text-slate-400 text-lg">
                      No projects match the current filter. Try selecting a different category.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-black/50">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-sky-500/20">
            <Target className="text-6xl text-sky-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Support Our Vision</h2>
            <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Join us in building the future of Rwandan boxing. Your support can help 
              transform these projects into lasting legacies for generations of athletes.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl text-white font-semibold shadow-2xl shadow-sky-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;