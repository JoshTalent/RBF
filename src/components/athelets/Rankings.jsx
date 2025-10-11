import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Sample ranking data
const rankings = [
  { rank: 1, name: "Jean Claude Uwizeye", weight: "Lightweight (60kg)", club: "APR Boxing Club", points: 2450 },
  { rank: 2, name: "Emmanuel Ndayisaba", weight: "Featherweight (57kg)", club: "Police Boxing Club", points: 2210 },
  { rank: 3, name: "Patrick Mugisha", weight: "Middleweight (75kg)", club: "Kigali Boxing Academy", points: 1980 },
  { rank: 4, name: "Eric Iradukunda", weight: "Heavyweight (91kg)", club: "Rubavu Boxing Club", points: 1850 },
  { rank: 5, name: "Samuel Niyonzima", weight: "Bantamweight (54kg)", club: "Musanze Boxing Club", points: 1720 },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Rankings = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      {/* Header Section */}
      <header className="py-20 bg-gradient-to-r from-sky-900 via-black to-gray-900 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-wide">
          National Rankings
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl">
          The official Rwanda Boxing Federation athlete rankings — showcasing the top performers by weight class and accumulated points.
        </p>
      </header>

      {/* Rankings Table Section */}
      <main className="flex-grow py-16 px-6 sm:px-12">
        <motion.div
          className="max-w-5xl mx-auto bg-gray-900/60 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden backdrop-blur-md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <table className="w-full text-left text-gray-300">
            <thead className="bg-sky-800/70">
              <tr>
                <th className="px-6 py-4 text-sky-300 uppercase text-sm">Rank</th>
                <th className="px-6 py-4 text-sky-300 uppercase text-sm">Name</th>
                <th className="px-6 py-4 text-sky-300 uppercase text-sm">Weight Class</th>
                <th className="px-6 py-4 text-sky-300 uppercase text-sm">Club</th>
                <th className="px-6 py-4 text-sky-300 uppercase text-sm">Points</th>
              </tr>
            </thead>
            <motion.tbody>
              {rankings.map((athlete, index) => (
                <motion.tr
                  key={index}
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-sky-900/30 transition duration-300"
                >
                  <td className="px-6 py-4 font-bold text-sky-400">#{athlete.rank}</td>
                  <td className="px-6 py-4 font-semibold">{athlete.name}</td>
                  <td className="px-6 py-4">{athlete.weight}</td>
                  <td className="px-6 py-4">{athlete.club}</td>
                  <td className="px-6 py-4 text-sky-300 font-medium">{athlete.points}</td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Rankings;
