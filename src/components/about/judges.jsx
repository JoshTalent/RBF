"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar, Footer } from "../../components";
import { 
  Mail, 
  Phone, 
  Search, 
  MapPin, 
  Award, 
  Calendar,
  Star,
  Filter,
  X,
  ExternalLink
} from "lucide-react";

// Enhanced Judges Data
const judges = [
  {
    id: 1,
    name: "John Doe",
    country: "United States",
    experience: "15 years",
    email: "johndoe@example.com",
    contact: "+1 123-456-7890",
    image: "https://via.placeholder.com/200",
    certifications: ["IABA Certified", "Olympic Judge", "5-Star Official"],
    specialties: ["Amateur Boxing", "Professional Matches", "Youth Development"],
    languages: ["English", "Spanish"],
    events: ["Olympics 2020", "World Championships", "Pan American Games"],
    rating: 4.9,
    matchesJudged: 250
  },
  {
    id: 2,
    name: "Jane Smith",
    country: "United Kingdom",
    experience: "12 years",
    email: "janesmith@example.com",
    contact: "+44 1234 567890",
    image: "https://via.placeholder.com/200",
    certifications: ["IABA Elite", "Commonwealth Games", "European Union"],
    specialties: ["Women's Boxing", "Technical Analysis", "Referee Training"],
    languages: ["English", "French"],
    events: ["Commonwealth Games", "European Championships", "AIBA Events"],
    rating: 4.8,
    matchesJudged: 180
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    country: "Spain",
    experience: "18 years",
    email: "carlosruiz@example.com",
    contact: "+34 123 456 789",
    image: "https://via.placeholder.com/200",
    certifications: ["IABA Master", "World Series", "Mediterranean Games"],
    specialties: ["Professional Circuits", "Championship Bouts", "Rule Interpretation"],
    languages: ["Spanish", "English", "Italian"],
    events: ["World Boxing Series", "Mediterranean Games", "National Federations"],
    rating: 5.0,
    matchesJudged: 320
  },
  {
    id: 4,
    name: "Aisha Mohammed",
    country: "Egypt",
    experience: "9 years",
    email: "aisha@example.com",
    contact: "+20 123 456 7890",
    image: "https://via.placeholder.com/200",
    certifications: ["African Union", "IABA Certified", "Youth Olympics"],
    specialties: ["African Championships", "Youth Development", "Technical Officiating"],
    languages: ["Arabic", "English", "French"],
    events: ["African Games", "Youth Olympics", "Arab Championships"],
    rating: 4.7,
    matchesJudged: 120
  },
  {
    id: 5,
    name: "Zhang Wei",
    country: "China",
    experience: "14 years",
    email: "zhangwei@example.com",
    contact: "+86 123 4567 8901",
    image: "https://via.placeholder.com/200",
    certifications: ["Asian Games", "IABA Elite", "WBC Affiliate"],
    specialties: ["Asian Circuits", "Professional Judging", "Technical Scoring"],
    languages: ["Mandarin", "English", "Japanese"],
    events: ["Asian Games", "World Championships", "Professional Bouts"],
    rating: 4.9,
    matchesJudged: 280
  },
  {
    id: 6,
    name: "Maria Rodriguez",
    country: "Mexico",
    experience: "11 years",
    email: "maria@example.com",
    contact: "+52 123 456 7890",
    image: "https://via.placeholder.com/200",
    certifications: ["IABA Certified", "Pan American", "WBO Official"],
    specialties: ["American Circuits", "Women's Boxing", "Youth Programs"],
    languages: ["Spanish", "English"],
    events: ["Pan American Games", "World Championships", "National Tournaments"],
    rating: 4.8,
    matchesJudged: 190
  }
];

const Judges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJudge, setSelectedJudge] = useState(null);
  const [filterCountry, setFilterCountry] = useState("All");
  const [filterExperience, setFilterExperience] = useState("All");

  // Get unique countries for filter
  const countries = ["All", ...new Set(judges.map(judge => judge.country))];
  const experienceLevels = ["All", "5-10 years", "10-15 years", "15+ years"];

  // Enhanced search and filter
  const filteredJudges = judges.filter((judge) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = 
      judge.name.toLowerCase().includes(term) ||
      judge.country.toLowerCase().includes(term) ||
      judge.specialties.some(spec => spec.toLowerCase().includes(term)) ||
      judge.certifications.some(cert => cert.toLowerCase().includes(term));

    const matchesCountry = filterCountry === "All" || judge.country === filterCountry;
    
    const matchesExperience = filterExperience === "All" || 
      (filterExperience === "5-10 years" && parseInt(judge.experience) < 10) ||
      (filterExperience === "10-15 years" && parseInt(judge.experience) >= 10 && parseInt(judge.experience) < 15) ||
      (filterExperience === "15+ years" && parseInt(judge.experience) >= 15);

    return matchesSearch && matchesCountry && matchesExperience;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-900/80 via-black to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-sky-500/20 backdrop-blur-sm rounded-full border border-sky-400/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Award className="text-sky-400" />
            <span className="text-sky-400 font-semibold text-sm tracking-wider uppercase">
              CERTIFIED OFFICIALS
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            International Judges
          </motion.h1>

          <motion.p 
            className="text-slate-300 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Meet our panel of world-class boxing judges and officials who ensure 
            fair play and uphold the highest standards of the sport globally.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search judges by name, country, or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                />
              </div>

              {/* Country Filter */}
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <select
                  value={filterCountry}
                  onChange={(e) => setFilterCountry(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white appearance-none focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                >
                  {countries.map(country => (
                    <option key={country} value={country} className="bg-slate-800">
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Filter */}
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <select
                  value={filterExperience}
                  onChange={(e) => setFilterExperience(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white appearance-none focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                >
                  {experienceLevels.map(level => (
                    <option key={level} value={level} className="bg-slate-800">
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {filterCountry !== "All" && (
                <span className="flex items-center gap-2 px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm border border-sky-500/30">
                  {filterCountry}
                  <X size={14} className="cursor-pointer" onClick={() => setFilterCountry("All")} />
                </span>
              )}
              {filterExperience !== "All" && (
                <span className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                  {filterExperience}
                  <X size={14} className="cursor-pointer" onClick={() => setFilterExperience("All")} />
                </span>
              )}
              {searchTerm && (
                <span className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                  "{searchTerm}"
                  <X size={14} className="cursor-pointer" onClick={() => setSearchTerm("")} />
                </span>
              )}
            </div>
          </motion.div>

          {/* Judges Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredJudges.length > 0 ? (
                filteredJudges.map((judge) => (
                  <motion.div
                    key={judge.id}
                    variants={cardVariants}
                    layout
                    className="group relative"
                    whileHover={{ y: -8 }}
                  >
                    {/* Judge Card */}
                    <div 
                      className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 group-hover:border-sky-500/40 transition-all duration-500 h-full cursor-pointer"
                      onClick={() => setSelectedJudge(judge)}
                    >
                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-[1.5px] rounded-3xl bg-slate-900" />
                      </div>

                      <div className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                        {/* Profile Image */}
                        <div className="relative mb-4">
                          <div className="relative w-24 h-24 rounded-full border-4 border-sky-500/50 p-1 group-hover:border-sky-400 transition-all duration-500">
                            <img
                              src={judge.image}
                              alt={judge.name}
                              className="w-full h-full rounded-full object-cover shadow-2xl"
                            />
                          </div>
                          {/* Rating Badge */}
                          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-slate-900">
                            <Star size={12} fill="currentColor" />
                            <span className="ml-1">{judge.rating}</span>
                          </div>
                        </div>

                        {/* Judge Info */}
                        <div className="flex-1 w-full">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-100 transition-colors duration-300">
                            {judge.name}
                          </h3>
                          
                          <div className="flex items-center justify-center gap-2 text-sky-400 mb-3">
                            <MapPin size={14} />
                            <span className="text-sm font-semibold">{judge.country}</span>
                          </div>

                          <div className="mb-4">
                            <span className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm border border-sky-500/30">
                              {judge.experience}
                            </span>
                          </div>

                          {/* Specialties */}
                          <div className="mb-4">
                            <p className="text-slate-400 text-sm mb-2">Specialties:</p>
                            <div className="flex flex-wrap gap-1 justify-center">
                              {judge.specialties.slice(0, 2).map((specialty, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-white/5 text-slate-300 rounded text-xs border border-white/10"
                                >
                                  {specialty}
                                </span>
                              ))}
                              {judge.specialties.length > 2 && (
                                <span className="px-2 py-1 bg-white/5 text-slate-400 rounded text-xs border border-white/10">
                                  +{judge.specialties.length - 2}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="flex justify-center gap-4 text-slate-400 text-sm">
                            <div className="text-center">
                              <div className="text-white font-semibold">{judge.matchesJudged}</div>
                              <div>Matches</div>
                            </div>
                            <div className="text-center">
                              <div className="text-white font-semibold">{judge.languages.length}</div>
                              <div>Languages</div>
                            </div>
                          </div>
                        </div>

                        {/* View Profile CTA */}
                        <div className="mt-4 flex items-center gap-2 text-sky-400 text-sm font-semibold group-hover:text-sky-300 transition-colors duration-300">
                          View Profile
                          <ExternalLink size={14} />
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="col-span-full text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-2xl mx-auto">
                    <Search className="text-sky-400 mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-bold text-white mb-4">No Judges Found</h3>
                    <p className="text-slate-400 text-lg mb-6">
                      We couldn't find any judges matching your search criteria. 
                      Try adjusting your filters or search terms.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setFilterCountry("All");
                        setFilterExperience("All");
                      }}
                      className="px-6 py-3 bg-sky-500/20 text-sky-400 rounded-xl border border-sky-500/30 hover:bg-sky-500/30 transition-all duration-300"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Judge Detail Modal */}
      <AnimatePresence>
        {selectedJudge && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedJudge(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedJudge.name}</h2>
                    <div className="flex items-center gap-4 text-slate-300">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-sky-400" />
                        <span>{selectedJudge.country}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-sky-400" />
                        <span>{selectedJudge.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star size={16} className="text-yellow-400" fill="currentColor" />
                        <span>{selectedJudge.rating}/5.0</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJudge(null)}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-300"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Image and Contact */}
                  <div className="lg:col-span-1">
                    <div className="text-center">
                      <img
                        src={selectedJudge.image}
                        alt={selectedJudge.name}
                        className="w-48 h-48 rounded-full border-4 border-sky-500/50 object-cover mx-auto mb-6 shadow-2xl"
                      />
                      
                      {/* Contact Information */}
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                          <Mail size={20} className="text-sky-400" />
                          <div>
                            <div className="text-slate-400 text-sm">Email</div>
                            <div className="text-white">{selectedJudge.email}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                          <Phone size={20} className="text-green-400" />
                          <div>
                            <div className="text-slate-400 text-sm">Contact</div>
                            <div className="text-white">{selectedJudge.contact}</div>
                          </div>
                        </div>
                      </div>

                      {/* Languages */}
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <h4 className="text-slate-400 text-sm mb-3">Languages</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedJudge.languages.map((language, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm border border-sky-500/30"
                            >
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Certifications */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedJudge.certifications.map((cert, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
                          >
                            <Award size={16} className="text-sky-400 flex-shrink-0" />
                            <span className="text-slate-300">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedJudge.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Major Events */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Major Events Judged</h3>
                      <div className="space-y-2">
                        {selectedJudge.events.map((event, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
                          >
                            <Calendar size={16} className="text-green-400 flex-shrink-0" />
                            <span className="text-slate-300">{event}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="text-2xl font-bold text-white mb-1">{selectedJudge.matchesJudged}</div>
                        <div className="text-slate-400 text-sm">Matches Judged</div>
                      </div>
                      <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="text-2xl font-bold text-white mb-1">{selectedJudge.experience}</div>
                        <div className="text-slate-400 text-sm">Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Judges;