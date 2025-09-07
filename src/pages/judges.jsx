import React, { useState } from "react";
import { Navbar, Footer } from "../components";

// Sample Judges Data
const judges = [
  {
    id: 1,
    name: "John Doe",
    country: "USA",
    experience: "10 years",
    email: "johndoe@example.com",
    contact: "+1 123-456-7890",
    image: "https://via.placeholder.com/150", // replace with real image URL
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

  const filteredJudges = judges.filter((judge) =>
    judge.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Judges</h1>

        {/* Search Box */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search judges..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 rounded-full bg-black/40 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 backdrop-blur-sm"
          />
        </div>

{/* Judges List */}
<div className="grid md:grid-cols-3 gap-8">
  {filteredJudges.map((judge) => (
    <div
      key={judge.id}
      className="relative bg-gray-900/30 backdrop-blur-lg border border-gray-700 rounded-3xl p-6 flex flex-col items-center gap-4 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgb(14,165,233)]"
    >
      {/* Profile Image with Neon Outline */}
      <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-sky-500 shadow-lg">
        <img
          src={judge.image}
          alt={judge.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Judge Info */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">{judge.name}</h2>
        <p className="text-gray-300">{judge.country}</p>

        {/* Experience Badge */}
        <span className="mt-2 inline-block px-3 py-1 bg-gray-800 text-sky-500 rounded-full text-sm font-semibold shadow-md">
          {judge.experience}
        </span>
      </div>

      {/* Contact Info */}
      <div className="text-center text-gray-300 mt-2 space-y-1">
        <p>Email: <span className="text-sky-400">{judge.email}</span></p>
        <p>Contact: <span className="text-sky-400">{judge.contact}</span></p>
      </div>

      {/* Subtle Floating Glow */}
      <div className="absolute -inset-0.5 rounded-3xl bg-sky-500/20 blur-2xl opacity-20 animate-pulse-slow"></div>
    </div>
  ))}
</div>


      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Judges;
