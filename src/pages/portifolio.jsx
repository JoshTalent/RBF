import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Mail, Phone } from "lucide-react";
import { robot, bill, abc } from "../assets";

// Sample Boxer Data with Manager Contacts
const boxers = [
  {
    id: 1,
    name: "John 'The Lion' Gatera",
    image: "https://i.imgur.com/wYOjC8z.jpeg",
    record: "20W - 2L - 1D",
    wins: 20,
    kos: 15,
    losses: 2,
    bio: "Lightweight boxer known for speed and powerful knockouts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    manager: {
      name: "Alex Mwangi",
      email: "alex.mwangi@example.com",
      phone: "+250 788 123 456",
    },
  },
  {
    id: 2,
    name: "Michael 'The Rock' Smith",
    image: "https://i.postimg.cc/857zgCw7/kanyarwanda-7.jpg",
    record: "15W - 3L",
    wins: 15,
    kos: 9,
    losses: 3,
    bio: "Middleweight champion with incredible stamina and defense. Known for strategic fights and impeccable footwork.",
    manager: {
      name: "Sarah Kimani",
      email: "sarah.kimani@example.com",
      phone: "+250 789 654 321",
    },
  },
  {
    id: 3,
    name: "David 'Thunder' Johnson",
    image: abc,
    record: "18W - 1L",
    wins: 18,
    kos: 12,
    losses: 1,
    bio: "Featherweight fighter famous for lightning-fast punches and unmatched agility in the ring.",
    manager: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+250 777 888 999",
    },
  },
];

// Boxer Card Component
const BoxerCard = ({ boxer, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? "" : "md:flex-row-reverse"
      } bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden mb-16 hover:scale-[1.03] hover:shadow-3xl transition-transform duration-500`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="md:w-1/3 w-full relative group">
        <img
          src={boxer.image}
          alt={boxer.name}
          className="w-full h-96 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"></div>
      </div>

      {/* Info */}
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-extrabold mb-3 text-white tracking-wide">
            {boxer.name}
          </h2>
          <p className="text-gray-400 text-sm mb-4 font-medium">{boxer.record}</p>

          <p className="text-gray-200 mb-6 leading-relaxed">
            {expanded ? boxer.bio : `${boxer.bio.slice(0, 180)}...`}
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-2 text-sky-400 font-semibold hover:underline"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-6 text-center mb-6">
          <div className="flex-1">
            <p className="text-2xl font-bold text-green-400">
              <CountUp end={boxer.wins} duration={1.5} />
            </p>
            <span className="text-gray-400 text-sm">Wins</span>
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold text-yellow-400">
              <CountUp end={boxer.kos} duration={1.5} />
            </p>
            <span className="text-gray-400 text-sm">KOs</span>
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold text-red-500">
              <CountUp end={boxer.losses} duration={1.5} />
            </p>
            <span className="text-gray-400 text-sm">Losses</span>
          </div>
        </div>

     {/* Manager Contacts */}
<div className="mt-6 flex flex-col gap-3">
  {/* Manager Name */}
  <p className="text-xl font-semibold text-gray-100 mb-2">
    Manager: {boxer.manager.name}
  </p>

  <div className="flex flex-col md:flex-row md:gap-4 gap-2">
    {/* Email */}
    <div className="flex items-center gap-2 bg-gray-800/60 p-3 rounded-xl shadow hover:bg-gray-800/80 transition-colors">
      <div className="bg-sky-400 p-2 rounded-full flex items-center justify-center">
        <Mail size={18} className="text-white" />
      </div>
      <a
        href={`mailto:${boxer.manager.email}`}
        className="text-white font-medium hover:text-sky-400 transition-colors"
      >
        {boxer.manager.email}
      </a>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-2 bg-gray-800/60 p-3 rounded-xl shadow hover:bg-gray-800/80 transition-colors">
      <div className="bg-green-400 p-2 rounded-full flex items-center justify-center">
        <Phone size={18} className="text-white" />
      </div>
      <a
        href={`tel:${boxer.manager.phone}`}
        className="text-white font-medium hover:text-green-400 transition-colors"
      >
        {boxer.manager.phone}
      </a>
    </div>
  </div>
</div>

      </div>
    </motion.div>
  );
};

// Portfolio Component
const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBoxers = boxers.filter((boxer) =>
    boxer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="py-20 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6 md:mb-0">
            Boxers Portfolio
          </h1>

          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search boxers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Boxer Cards */}
        <div className="max-w-7xl mx-auto">
          {filteredBoxers.length > 0 ? (
            filteredBoxers.map((boxer, index) => (
              <BoxerCard key={boxer.id} boxer={boxer} index={index} />
            ))
          ) : (
            <p className="text-center text-gray-400 mt-12 text-lg">
              No boxers found.
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
