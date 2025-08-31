import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import { motion } from "framer-motion";
import { Calendar, Clock, BarChart2, X } from "lucide-react";
import { abcdef, abcdefg, abcdefgh, abcdefghi } from "../assets";

// Sample Projects Data
const projects = [
  {
    id: 1,
    title: "National Boxing Academy",
    type: "Long-term",
    duration: "2025 - 2030",
    progress: 40,
    description:
      "Establish a nationwide academy to train young boxing talents in Rwanda, providing modern equipment and expert coaching.",
    image: abcdef,
    milestones: ["Site Selection", "Recruit Coaches", "Student Recruitment"],
  },
  {
    id: 2,
    title: "Monthly Youth Tournament",
    type: "Short-term",
    duration: "Monthly",
    progress: 70,
    description:
      "Organize monthly tournaments to give young boxers competitive experience and recognition across regions.",
    image: abcdefg,
    milestones: ["Venue Booking", "Match Scheduling", "Award Ceremony"],
  },
  {
    id: 3,
    title: "Website Upgrade",
    type: "Short-term",
    duration: "3 Months",
    progress: 90,
    description:
      "Upgrade the federation website to include news, events, projects, and interactive media for fans and members.",
    image: abcdefgh,
    milestones: ["Design Mockups", "Develop Features", "Testing & Launch"],
  },
  {
    id: 4,
    title: "International Boxing League",
    type: "Long-term",
    duration: "2025 - 2028",
    progress: 30,
    description:
      "Participate in international boxing leagues to elevate the profile of Rwandan boxers and gain global recognition.",
    image: abcdefghi,
    milestones: ["Team Selection", "Training Camps", "League Matches"],
  },
];

// Project Modal Component
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-gray-900 rounded-3xl max-w-4xl w-full overflow-y-auto max-h-[90vh] shadow-2xl relative"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-red-500"
      >
        <X size={28} />
      </button>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-t-3xl"
      />
      <div className="p-6">
        <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-gray-400 mb-2">{project.duration}</p>
        <div className="flex items-center gap-2 mb-4">
          {project.type === "Long-term" ? (
            <Calendar className="text-sky-600" />
          ) : (
            <Clock className="text-sky-600" />
          )}
          <span className="text-sky-600 font-semibold">{project.type}</span>
        </div>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="w-full bg-gray-800 rounded-full h-4 mb-4">
          <div
            className="bg-sky-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <p className="text-gray-400 mb-4 flex items-center gap-1">
          <BarChart2 size={16} /> Progress: {project.progress}%
        </p>

        <h3 className="text-white text-xl font-semibold mb-2">Milestones</h3>
        <ul className="list-disc list-inside text-gray-300">
          {project.milestones.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  </motion.div>
);

// Project Card Component
const ProjectCard = ({ project, onClick }) => (
  <motion.div
    className="bg-gray-900 rounded-3xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-[0_0_60px_#1DA1F2] transition-all duration-500 relative"
    onClick={() => onClick(project)}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <button className="px-5 py-2 bg-sky-600 text-white rounded-full font-semibold shadow-lg hover:bg-sky-500">
          View Details
        </button>
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-sky-600 text-white text-sm font-semibold flex items-center gap-2 shadow-lg">
        {project.type === "Long-term" ? <Calendar size={16} /> : <Clock size={16} />}
        {project.type}
      </div>
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
      <p className="text-gray-400 text-sm mb-3">{project.duration}</p>
      <p className="text-gray-300 mb-3">{project.description}</p>
      <div className="w-full bg-gray-800 rounded-full h-3 mb-2">
        <div
          className="bg-sky-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
      <p className="text-gray-400 text-sm flex items-center gap-1">
        <BarChart2 size={16} /> {project.progress}%
      </p>
    </div>
  </motion.div>
);

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((proj) => proj.type === filter);

  return (
    <div className="flex flex-col min-h-screen bg-primary text-white">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-sky-900 via-black to-gray-900 py-24 px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Projects
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Explore our long-term and short-term projects for the boxing federation.
        </p>
      </div>

      {/* Filter + Projects */}
      <div className="py-16 px-6 md:px-12">
        {/* Filter Buttons */}
        <div className="flex gap-4 mb-12 justify-center md:justify-start">
          {["All", "Long-term", "Short-term"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 ${
                filter === type
                  ? "bg-sky-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-sky-600 hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} onClick={setSelectedProject} />
            ))
          ) : (
            <p className="text-gray-400 text-center text-lg">No projects found.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default ProjectsPage;
