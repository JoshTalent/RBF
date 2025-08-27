import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Instagram, Facebook, Twitter, Search } from "lucide-react";
import styles from "../style";
import { robot , bill , abc  } from "../assets";

// Sample Boxer Data
const boxers = [
  {
    id: 1,
    name: "John 'The Lion' Gatera",
    image: robot ,
    record: "20W - 2L - 1D",
    wins: 20,
    kos: 15,
    losses: 2,
    bio: "Lightweight boxer known for speed and powerful knockouts. Lorem ipsum dolor sit amet.",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: 2,
    name: "Michael 'The Rock' Smith",
    image: bill ,
    record: "15W - 3L",
    wins: 15,
    kos: 9,
    losses: 3,
    bio: "Middleweight champion with incredible stamina and defense.",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
  {
    id: 3,
    name: "David 'Thunder' Johnson",
    image: abc ,
    record: "18W - 1L",
    wins: 18,
    kos: 12,
    losses: 1,
    bio: "Featherweight fighter famous for lightning-fast punches.",
    socials: {
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
    },
  },
];

// Advanced Boxer Card
const BoxerCard = ({ boxer, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`flex flex-col md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"} bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden mb-16 hover:scale-[1.02] transition-transform duration-500`}
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
        <div className="absolute inset-0 bg-black/40 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"></div>
      </div>

      {/* Info */}
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-extrabold mb-3 text-white">
            {boxer.name}
          </h2>
          <p className="text-gray-300 text-sm mb-4">{boxer.record}</p>

          <p className="text-gray-200 mb-6 leading-relaxed">
            {expanded ? boxer.bio : `${boxer.bio.slice(0, 150)}...`}
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
            <p className="text-2xl font-bold text-white">
              <CountUp end={boxer.wins} duration={1.5} />
            </p>
            <span className="text-gray-400 text-sm">Wins</span>
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold text-white">
              <CountUp end={boxer.kos} duration={1.5} />
            </p>
            <span className="text-gray-400 text-sm">KOs</span>
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold text-white">
              <CountUp end={boxer.losses} duration={1.5} />
            </p>
            <span className="text-gray-400 text-sm">Losses</span>
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-5 mt-4">
          <a href={boxer.socials.instagram} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
            <Instagram size={24} />
          </a>
          <a href={boxer.socials.facebook} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors">
            <Facebook size={24} />
          </a>
          <a href={boxer.socials.twitter} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-sky-400 transition-colors">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Portfolio Page with Glass Search Bar
const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBoxers = boxers.filter((boxer) =>
    boxer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black w-full min-h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section className="py-20 px-6 md:px-20">
            {/* Title + Search */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6 md:mb-0 text-white">
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
                <Search className="absolute right-4 top-3 text-gray-400" />
              </div>
            </div>

            {/* Boxer Cards */}
            <div className="max-w-7xl mx-auto">
              {filteredBoxers.length > 0 ? (
                filteredBoxers.map((boxer, index) => (
                  <BoxerCard key={boxer.id} boxer={boxer} index={index} />
                ))
              ) : (
                <p className="text-center text-gray-400 mt-12 text-lg">No boxers found.</p>
              )}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
