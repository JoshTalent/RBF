import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaTrophy, 
  FaMedal, 
  FaHistory, 
  FaAward, 
  FaCalendarAlt,
  FaFlag,
  FaUsers,
  FaStar,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Timeline data
const timelineData = [
  {
    year: "2023",
    title: "Continental Dominance",
    description: "Rwandan boxers secured 3 gold medals at the African Championships, marking our most successful year in continental competitions.",
    achievements: ["3 Gold Medals", "5 Continental Qualifiers", "Team Spirit Award"],
    icon: <FaTrophy className="text-2xl" />
  },
  {
    year: "2021",
    title: "Olympic Qualification",
    description: "First Rwandan boxer qualified for the Olympic Games, representing the nation on the global stage in Tokyo.",
    achievements: ["Olympic Debut", "International Recognition", "Youth Inspiration"],
    icon: <FaMedal className="text-2xl" />
  },
  {
    year: "2019",
    title: "Federation Restructuring",
    description: "Major organizational overhaul establishing professional training programs and youth development initiatives.",
    achievements: ["Professional Coaches", "Youth Programs", "Infrastructure Upgrade"],
    icon: <FaUsers className="text-2xl" />
  },
  {
    year: "2016",
    title: "First International Medal",
    description: "Won first international medal at the African Boxing Championship, putting Rwandan boxing on the continental map.",
    achievements: ["Bronze Medal", "Continental Breakthrough", "Media Recognition"],
    icon: <FaAward className="text-2xl" />
  },
  {
    year: "2012",
    title: "Rwanda Boxing Federation Founded",
    description: "Official establishment of the national governing body for boxing in Rwanda.",
    achievements: ["National Recognition", "First Championships", "Foundation Laid"],
    icon: <FaFlag className="text-2xl" />
  }
];

// Hall of Fame inductees
const hallOfFame = [
  {
    id: 1,
    name: "Jean Pierre",
    category: "Pioneer",
    years: "2008-2020",
    achievements: ["First National Champion", "Coach of the Year 2015", "Founding Member"],
    image: "/api/placeholder/150/150",
    induction: 2020,
    description: "Pioneered modern boxing techniques in Rwanda and trained the first generation of competitive boxers."
  },
  {
    id: 2,
    name: "Marie Uwase",
    category: "Champion",
    years: "2014-Present",
    achievements: ["3x National Champion", "African Games Silver", "Youth Ambassador"],
    image: "/api/placeholder/150/150",
    induction: 2022,
    description: "Dominant force in women's boxing and role model for aspiring female athletes across Rwanda."
  },
  {
    id: 3,
    name: "David Nshimiye",
    category: "Coach",
    years: "2010-Present",
    achievements: ["Elite Coach Certified", "15 National Titles", "IABA Recognition"],
    image: "/api/placeholder/150/150",
    induction: 2021,
    description: "Master tactician who developed multiple national champions and international competitors."
  },
  {
    id: 4,
    name: "Grace Imanishimwe",
    category: "Trailblazer",
    years: "2016-Present",
    achievements: ["Olympic Qualifier", "Commonwealth Games", "Sports Personality Award"],
    image: "/api/placeholder/150/150",
    induction: 2023,
    description: "First Rwandan boxer to qualify for Olympic Games, inspiring a new generation of athletes."
  }
];

// Statistics
const statistics = [
  { number: "50+", label: "National Champions", icon: <FaTrophy /> },
  { number: "15", label: "International Medals", icon: <FaMedal /> },
  { number: "200+", label: "Trained Athletes", icon: <FaUsers /> },
  { number: "12", label: "Years of Excellence", icon: <FaHistory /> }
];

const History = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentInductee, setCurrentInductee] = useState(0);

  const categories = ["All", "Pioneer", "Champion", "Coach", "Trailblazer"];

  const filteredInductees = selectedCategory === "All" 
    ? hallOfFame 
    : hallOfFame.filter(inductee => inductee.category === selectedCategory);

  const nextInductee = () => {
    setCurrentInductee((prev) => (prev + 1) % filteredInductees.length);
  };

  const prevInductee = () => {
    setCurrentInductee((prev) => (prev - 1 + filteredInductees.length) % filteredInductees.length);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sky-900/80 via-black to-slate-900 overflow-hidden">
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
            <FaHistory className="text-sky-400" />
            <span className="text-sky-400 font-semibold text-sm tracking-wider uppercase">
              LEGACY & ACHIEVEMENTS
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            History & Hall of Fame
          </motion.h1>

          <motion.p 
            className="text-slate-300 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Celebrating the rich legacy, monumental achievements, and legendary figures 
            who shaped Rwandan boxing into the powerhouse it is today.
          </motion.p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6">
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all duration-500 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-sky-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey Through Time</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              From humble beginnings to international recognition, follow our path to excellence.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-500 to-blue-600 rounded-full" />
            
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  variants={timelineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <motion.div
                      className="p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all duration-500 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white">
                          {item.icon}
                        </div>
                        <div className={index % 2 === 0 ? 'text-left' : 'text-right'}>
                          <div className="text-sky-400 text-sm font-semibold">{item.year}</div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-slate-300 mb-4 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm border border-sky-500/30"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Year Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-slate-900 shadow-2xl z-10">
                    {item.year}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Hall of Fame Inductees</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Honoring the legends and pioneers who made exceptional contributions to Rwandan boxing.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-2xl shadow-sky-500/25'
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:border-sky-500/30'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Inductees Carousel */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-white/5 to-white/2 rounded-3xl backdrop-blur-sm border border-white/10 p-8">
              {/* Navigation Arrows */}
              <button
                onClick={prevInductee}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-sky-500/20 border border-sky-500/30 rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-500/30 transition-all duration-300 z-10"
              >
                <FaChevronLeft />
              </button>
              
              <button
                onClick={nextInductee}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-sky-500/20 border border-sky-500/30 rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-500/30 transition-all duration-300 z-10"
              >
                <FaChevronRight />
              </button>

              {/* Inductee Display */}
              {filteredInductees.map((inductee, index) => (
                <motion.div
                  key={inductee.id}
                  className={`text-center ${
                    index === currentInductee ? 'block' : 'hidden'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          src={inductee.image}
                          alt={inductee.name}
                          className="w-48 h-48 rounded-full border-4 border-sky-500/50 object-cover shadow-2xl"
                        />
                        <div className="absolute -inset-4 rounded-full border-2 border-sky-400/30 animate-pulse" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="mb-4">
                        <span className="px-4 py-2 bg-sky-500/20 text-sky-400 rounded-full text-sm border border-sky-500/30">
                          {inductee.category}
                        </span>
                        <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30 ml-2">
                          Inducted {inductee.induction}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-2">{inductee.name}</h3>
                      <p className="text-sky-400 font-semibold mb-4">{inductee.years}</p>
                      
                      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-2xl">
                        {inductee.description}
                      </p>

                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {inductee.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10"
                          >
                            <FaStar className="text-sky-400 text-sm" />
                            <span className="text-slate-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {filteredInductees.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentInductee(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentInductee
                        ? 'bg-sky-400 scale-125'
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-black/50">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FaAward className="text-6xl text-sky-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Preserving Our Legacy</h2>
          <p className="text-slate-300 text-xl leading-relaxed mb-8">
            The Rwanda Boxing Federation continues to build upon the foundation laid by our pioneers. 
            Their dedication, sacrifice, and achievements inspire the next generation of champions 
            to reach even greater heights on the national and international stage.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl text-white font-semibold shadow-2xl shadow-sky-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Archives
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default History;