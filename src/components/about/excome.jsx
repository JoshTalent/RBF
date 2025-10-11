import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
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
  },
  {
    name: "Jane Smith",
    position: "Vice President",
    phone: "+250 788 654 321",
    email: "jane@example.com",
    image: people03,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Michael Lee",
    position: "Secretary General",
    phone: "+250 789 000 111",
    email: "michael@example.com",
    image: people03,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Ntwari Josue",
    position: "Treasurer",
    phone: "+250 788 654 321",
    email: "ntwari@example.com",
    image: people03,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Olivier Niyigena",
    position: "Secretary",
    phone: "+250 789 000 111",
    email: "olivier@example.com",
    image: people03,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

// Framer Motion container variants for stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Excome = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      {/* Header Section */}
      <header className="py-20 bg-gradient-to-r from-sky-900 via-black to-gray-900 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-wide">
          Executive Committee
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl">
          Meet the dedicated leaders of the Rwanda Boxing Federation who guide
          and support the growth of boxing across the country.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-16 px-6 sm:px-12">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {excoMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group overflow-hidden rounded-3xl shadow-2xl bg-gray-900/60 backdrop-blur-lg border border-gray-700 hover:border-sky-500 transition-all duration-500 hover:shadow-[0_0_40px_#1DA1F2] hover:-translate-y-3"
            >
              {/* Neon Glow Overlay */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 p-6 flex flex-col items-center text-center">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full border-4 border-sky-500 mb-4 object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-sky-400 animate-ping opacity-50"></div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  {member.name}
                </h3>
                <p className="text-sky-400 font-semibold mb-4">{member.position}</p>

                <div className="text-gray-300 text-sm space-y-2">
                  <p className="flex items-center justify-center gap-2">
                    <FaPhoneAlt className="text-sky-400" /> {member.phone}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <FaEnvelope className="text-sky-400" /> {member.email}
                  </p>
                </div>

                <div className="flex justify-center gap-5 mt-5">
                  <a
                    href={member.socials.facebook}
                    className="text-white hover:text-sky-400 transition-transform hover:scale-125"
                  >
                    <FaFacebook size={22} />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="text-white hover:text-sky-400 transition-transform hover:scale-125"
                  >
                    <FaTwitter size={22} />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="text-white hover:text-sky-400 transition-transform hover:scale-125"
                  >
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Excome;
