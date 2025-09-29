"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Heart, X, Search, Download, Expand } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const filters = ["All", "Amateur", "Professional"];

const matchesData = [
  {
    id: 1,
    title: "National Boxing Championship Final",
    description: "Exciting final match of the national boxing championship.",
    date: "2025-08-28",
    likes: 200,
    type: "Professional",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Boxers Training Session",
    description: "Intensive training session of the national boxing team.",
    date: "2025-08-20",
    likes: 150,
    type: "Amateur",
    src: "https://images.unsplash.com/photo-1602482067705-d6f0a7e796f8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Award Ceremony Highlights",
    description: "Celebrating the winners of the boxing season.",
    date: "2025-08-15",
    likes: 180,
    type: "Professional",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const Matches = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredMatches = matchesData.filter((match) => {
    const matchesFilter = filter === "All" ? true : match.type === filter;
    const matchesSearch = match.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const particles = Array.from({ length: 25 });

  const handleDownload = async (url, title) => {
    try {
      const response = await fetch(url, { mode: "cors" });
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${title}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed", error);
      alert("Download failed. Try again later.");
    }
  };

  return (
    <>
      <Navbar />

      <section className="relative py-24 bg-black text-white overflow-hidden">
        {/* Background Particles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
          {particles.map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-sky-500/20 blur-xl opacity-40"
              style={{
                width: `${6 + Math.random() * 18}px`,
                height: `${6 + Math.random() * 18}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 20 + Math.random() * 20, 0],
                x: [0, 15 + Math.random() * 15, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-400 uppercase">
              Boxing Matches
            </h2>
            <div className="w-24 h-1 bg-sky-500 rounded-full mx-auto mt-2"></div>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg">
              Watch the latest amateur and professional boxing matches.
            </p>
          </motion.div>

          {/* Search + Filters */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10">
            <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl w-full lg:w-1/3 shadow-inner transition-all duration-300 focus-within:ring-2 focus-within:ring-sky-500">
              <Search size={20} className="text-gray-300" />
              <input
                type="text"
                placeholder="Search matches..."
                className="ml-3 bg-transparent outline-none text-white placeholder-gray-400 w-full text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-3 w-full lg:w-auto">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 shadow-md ${
                    filter === f
                      ? "bg-gradient-to-r from-sky-400 to-blue-500 text-black shadow-lg scale-105"
                      : "bg-white/10 border border-gray-600 text-gray-200 hover:bg-sky-500/20 hover:text-sky-400 hover:scale-105"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Matches Grid */}
          {filteredMatches.length === 0 ? (
            <p className="text-center text-gray-400">No matches found.</p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              <AnimatePresence>
                {filteredMatches.map((match, idx) => (
                  <motion.div
                    key={match.id}
                    className="relative rounded-3xl shadow-xl overflow-hidden break-inside-avoid border border-gray-800 bg-white/5 backdrop-blur-lg cursor-pointer"
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="relative w-full h-64 bg-black rounded-3xl overflow-hidden group">
                      {match.type === "image" ? (
                        <img
                          src={match.src}
                          alt={match.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onClick={() => setSelected(match)}
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <video
                            src={match.src}
                            muted
                            loop
                            className="w-full h-full object-cover"
                          />
                          <Play className="absolute inset-0 m-auto w-12 h-12 text-white opacity-70 pointer-events-none" />
                          {/* Overlay buttons */}
                          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                            <button
                              className="bg-black/70 p-2 rounded-full hover:bg-sky-500 transition"
                              onClick={() =>
                                handleDownload(match.src, match.title)
                              }
                              title="Download"
                            >
                              <Download className="text-white" />
                            </button>
                            <button
                              className="bg-black/70 p-2 rounded-full hover:bg-sky-500 transition"
                              onClick={() => setSelected(match)}
                              title="Fullscreen"
                            >
                              <Expand className="text-white" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-xs">
                          {match.type}
                        </span>
                        <h2 className="text-xl font-bold text-sky-400 mt-2">
                          {match.title}
                        </h2>
                        <p className="text-gray-300 text-sm mt-1">
                          {match.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
                        <span>{match.date}</span>
                        <span className="flex items-center gap-1">
                          <Heart className="text-red-500" /> {match.likes}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Modal / Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative w-full max-w-3xl bg-gray-900 rounded-2xl p-6 shadow-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-white text-2xl"
                  onClick={() => setSelected(null)}
                >
                  <X />
                </button>

                {selected.type === "image" ? (
                  <img
                    src={selected.src}
                    alt={selected.title}
                    className="w-full h-auto rounded-xl mb-4"
                  />
                ) : (
                  <video
                    src={selected.src}
                    controls
                    autoPlay
                    className="w-full h-auto rounded-xl mb-4"
                  />
                )}

                <h2 className="text-2xl font-bold text-sky-400 mb-2">
                  {selected.title}
                </h2>
                <p className="text-gray-300 mb-3">{selected.description}</p>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <span>{selected.date}</span>
                  <span className="flex items-center gap-1">
                    <Heart className="text-red-500" /> {selected.likes}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </>
  );
};

export default Matches;
