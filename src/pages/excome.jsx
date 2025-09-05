import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { people03 } from "../assets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const Excome = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {excoMembers.map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3 bg-gray-800/60 backdrop-blur-md"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>

              <div className="p-6 relative z-20 flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full border-4 border-sky-500 mb-4 object-cover"
                />
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sky-400 mb-4">{member.position}</p>

                <div className="text-gray-300 text-sm space-y-2">
                  <p className="flex items-center justify-center gap-2">
                    <FaPhoneAlt className="text-sky-400" /> {member.phone}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <FaEnvelope className="text-sky-400" /> {member.email}
                  </p>
                </div>

                <div className="flex justify-center gap-5 mt-5">
                  <a href={member.socials.facebook} className="text-white hover:text-sky-400 transition-transform hover:scale-110">
                    <FaFacebook size={22} />
                  </a>
                  <a href={member.socials.twitter} className="text-white hover:text-sky-400 transition-transform hover:scale-110">
                    <FaTwitter size={22} />
                  </a>
                  <a href={member.socials.linkedin} className="text-white hover:text-sky-400 transition-transform hover:scale-110">
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Excome;
