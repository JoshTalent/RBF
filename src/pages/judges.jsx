"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar, Footer } from "../components";
import { Mail, Phone, SearchX } from "lucide-react";

// Sample Judges Data
const judges = [
  {
    id: 1,
    name: "John Doe",
    country: "USA",
    experience: "10 years",
    email: "johndoe@example.com",
    contact: "+1 123-456-7890",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    country: "UK",
    experience: "8 years",
    email: "janesmith@example.com",
    contact: "+44 1234 567890",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    country: "Spain",
    experience: "12 years",
    email: "carlosruiz@example.com",
    contact: "+34 123 456 789",
    image: "https://via.placeholder.com/150",
  },
];

const Judges = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Search across name, country, and experience
  const filteredJudges = judges.filter((judge) => {
    const term = searchTerm.toLowerCase();
    return (
      judge.name.toLowerCase().includes(term) ||
      judge.country.toLowerCase().includes(term) ||
      judge.experience.toLowerCase().includes(term)
    );
  });

  return (
    <div className="relative min-h-screen flex flex-col text-white bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-1 p-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
          Meet the Judges
        </h1>

        {/* Search Box */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by name, country, or experience..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-5 py-3 rounded-full bg-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-lg"
          />
        </div>

        {/* Judges Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {filteredJudges.length > 0 ? (
            filteredJudges.map((judge) => (
              <motion.div
                key={judge.id}
                whileHover={{ scale: 1.08, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative group bg-gray-900 border border-gray-700 rounded-3xl p-6 flex flex-col items-center gap-5 shadow-lg hover:shadow-[0_0_40px_10px_rgba(56,189,248,0.7)] transition-all duration-500"
              >
                {/* Profile Image */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-sky-500 shadow-lg group-hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.8)] transition-all duration-500">
                  <img
                    src={judge.image}
                    alt={judge.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Info */}
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold">{judge.name}</h2>
                  <p className="text-gray-400">{judge.country}</p>
                  <span className="px-4 py-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(56,189,248,0.7)]">
                    {judge.experience}
                  </span>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-2 text-gray-300 mt-3 text-sm">
                  <p className="flex items-center gap-2">
                    <Mail size={16} className="text-sky-400" />{" "}
                    <span className="text-sky-300">{judge.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="text-green-400" />{" "}
                    <span className="text-green-300">{judge.contact}</span>
                  </p>
                </div>

                {/* Neon Aura */}
                <div className="absolute -inset-2 rounded-3xl bg-sky-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              </motion.div>
            ))
          ) : (
            // No Results Found Card
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-full flex flex-col items-center justify-center bg-gray-900/60 border border-gray-700 rounded-3xl p-10 shadow-lg"
            >
              <SearchX size={50} className="text-red-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-300">
                No results found
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Try searching with a different name, country, or experience.
              </p>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Judges;
