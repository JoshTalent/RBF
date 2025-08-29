import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import styles from "../style";
import { motion } from "framer-motion";
import { MapPin, Phone, User, Award, Users, Calendar, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

// Sample clubs data with images
const clubsData = [
  {
    id: 1,
    name: "Kigali Boxing Club",
    location: "Kigali City, Rwanda",
    coach: "Jean Bosco",
    phone: "+250 788 123 456",
    achievements: "5 National Titles",
    founded: 2005,
    members: 120,
    image:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    id: 2,
    name: "Muhanga Boxing Academy",
    location: "Muhanga, Southern Province",
    coach: "Innocent Mugabo",
    phone: "+250 789 654 321",
    achievements: "3 Youth Programs",
    founded: 2010,
    members: 80,
    image:
      "https://images.unsplash.com/photo-1608889175123-8a947c2f92d3?auto=format&fit=crop&w=800&q=80",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    id: 3,
    name: "Rubavu Boxing Center",
    location: "Rubavu, Western Province",
    coach: "Aimable Nkurunziza",
    phone: "+250 784 567 890",
    achievements: "2 International Participants",
    founded: 2015,
    members: 65,
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    socials: { facebook: "#", instagram: "#", twitter: "#" },
  },
];

const Clubs = () => {
  const [search, setSearch] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("All");

  const filteredClubs = clubsData.filter((club) => {
    const matchesSearch = club.name.toLowerCase().includes(search.toLowerCase());
    const matchesProvince =
      provinceFilter === "All" ||
      club.location.toLowerCase().includes(provinceFilter.toLowerCase());
    return matchesSearch && matchesProvince;
  });

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} py-20`}>
          {/* Page Header */}
          <section className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
              Our Boxing Clubs
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover all registered boxing clubs across Rwanda, their coaches,
              achievements, and how to get in touch.
            </p>

            {/* Search + Filter */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
              <input
                type="text"
                placeholder="Search clubs by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-5 py-3 w-full md:w-96 rounded-xl border border-gray-600 bg-gray-900 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <select
                value={provinceFilter}
                onChange={(e) => setProvinceFilter(e.target.value)}
                className="px-5 py-3 rounded-xl border border-gray-600 bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="All">All Provinces</option>
                <option value="Kigali">Kigali</option>
                <option value="Southern">Southern Province</option>
                <option value="Western">Western Province</option>
              </select>
            </div>
          </section>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {filteredClubs.length > 0 ? (
              filteredClubs.map((club) => (
                <motion.div
                  key={club.id}
                  className="bg-gray-900/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-[0_0_40px_#0ea5e9] transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Club Image */}
                  <div className="h-56 w-full overflow-hidden">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Club Info */}
                  <div className="p-6 space-y-3">
                    <h2 className="text-2xl font-bold text-white">
                      {club.name}
                    </h2>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 text-sky-500 mr-2" />
                      {club.location}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <User className="w-5 h-5 text-sky-500 mr-2" />
                      Coach: {club.coach}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-5 h-5 text-sky-500 mr-2" />
                      {club.phone}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Award className="w-5 h-5 text-sky-500 mr-2" />
                      {club.achievements}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 text-sky-500 mr-2" />
                      Founded: {club.founded}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-5 h-5 text-sky-500 mr-2" />
                      Members: {club.members}
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4 mt-4">
                      <a href={club.socials.facebook} className="text-gray-400 hover:text-blue-500">
                        <Facebook />
                      </a>
                      <a href={club.socials.instagram} className="text-gray-400 hover:text-pink-500">
                        <Instagram />
                      </a>
                      <a href={club.socials.twitter} className="text-gray-400 hover:text-sky-400">
                        <Twitter />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-400 text-center col-span-3">
                No clubs found.
              </p>
            )}
          </div>

          {/* CTA Section */}
          <section className="mt-20 text-center bg-gradient-to-r from-sky-600 to-blue-700 py-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Want to Register Your Club?
            </h2>
            <p className="text-gray-100 mb-6">
              Join our federation and let your club be recognized nationally and
              internationally.
            </p>
            <button className="px-8 py-3 bg-white text-sky-600 font-bold rounded-full hover:bg-gray-100 transition-all">
              <Link to="/contact"> Register Club </Link>
             
            </button>
          </section>

          {/* Footer */}
          <div className="mt-20">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
