import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Sample results data
const resultsData = [
  {
    event: "National Championship 2025",
    date: "August 20, 2025",
    location: "Kigali Arena",
    winners: [
      { category: "Lightweight", name: "Eric Ndayishimiye" },
      { category: "Middleweight", name: "Jean Uwimana" },
      { category: "Heavyweight", name: "Patrick Mugabo" },
    ],
  },
  {
    event: "East African Boxing Cup",
    date: "June 12, 2025",
    location: "Dar es Salaam, Tanzania",
    winners: [
      { category: "Lightweight", name: "Alain Nkurunziza" },
      { category: "Welterweight", name: "Joseph Habimana" },
      { category: "Heavyweight", name: "David Hakizimana" },
    ],
  },
  {
    event: "Rwanda Inter-Club Tournament",
    date: "April 5, 2025",
    location: "Amahoro Stadium",
    winners: [
      { category: "Flyweight", name: "Claude Rukundo" },
      { category: "Lightweight", name: "Innocent Tuyishime" },
      { category: "Middleweight", name: "Olivier Niyigena" },
    ],
  },
];

// Animation settings
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ResultsAndStandings = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      {/* Header Section */}
      <header className="py-20 bg-gradient-to-r from-sky-900 via-black to-gray-900 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-wide">
          Results & Standings
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl">
          Explore the latest competition results, event winners, and national standings from Rwanda Boxing Federation tournaments.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-16 px-6 sm:px-12">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {resultsData.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group overflow-hidden rounded-3xl shadow-2xl bg-gray-900/60 backdrop-blur-lg border border-gray-700 hover:border-sky-500 transition-all duration-500 hover:shadow-[0_0_40px_#1DA1F2] hover:-translate-y-3"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {event.event}
                </h3>
                <p className="text-sky-400 font-medium mb-2">{event.date}</p>
                <p className="text-gray-400 mb-4">{event.location}</p>

                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-lg font-semibold text-sky-400 mb-3">
                    Winners
                  </h4>
                  <ul className="space-y-2">
                    {event.winners.map((winner, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between text-gray-300 hover:text-white transition"
                      >
                        <span>{winner.category}</span>
                        <span className="font-medium">{winner.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Standings Section */}
      <section className="py-16 px-6 sm:px-12 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8">
          National Rankings
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto border border-gray-700 rounded-xl overflow-hidden bg-gray-900/70">
            <thead className="bg-sky-600/40">
              <tr className="text-white text-lg">
                <th className="py-3 px-4 text-left">Rank</th>
                <th className="py-3 px-4 text-left">Boxer</th>
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-left">Points</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Eric Ndayishimiye", "Lightweight", "2450"],
                ["2", "Jean Uwimana", "Middleweight", "2330"],
                ["3", "Patrick Mugabo", "Heavyweight", "2210"],
                ["4", "Claude Rukundo", "Flyweight", "2075"],
                ["5", "Innocent Tuyishime", "Lightweight", "1950"],
              ].map((row, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-700 hover:bg-sky-500/20 transition"
                >
                  {row.map((cell, i) => (
                    <td key={i} className="py-3 px-4 text-gray-300 text-left">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResultsAndStandings;
