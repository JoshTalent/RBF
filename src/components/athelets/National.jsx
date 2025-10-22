import React, { useState } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { 
  Mail, 
  Phone, 
  Search, 
  Filter, 
  Trophy, 
  Award, 
  Target,
  Users,
  Calendar,
  MapPin,
  ExternalLink,
  X,
  Star,
  TrendingUp,
  Shield
} from "lucide-react";
import { abc } from "../../assets";

const boxers = [
  {
    id: 1,
    name: "John 'The Lion' Gatera",
    image: "https://i.imgur.com/wYOjC8z.jpeg",
    record: "20W - 2L - 1D",
    wins: 20,
    kos: 15,
    losses: 2,
    draws: 1,
    weightClass: "Lightweight",
    ranking: 1,
    age: 26,
    height: "5'10\"",
    reach: "72\"",
    stance: "Orthodox",
    hometown: "Kigali",
    bio: "Lightweight boxer known for exceptional speed and devastating knockout power. Current national champion with an impressive 75% KO rate. Known for his aggressive fighting style and incredible endurance in later rounds.",
    achievements: [
      "National Champion 2023-2024",
      "East African Games Gold Medalist",
      "Best Boxer Award 2023",
      "Undefeated in last 12 fights"
    ],
    nextFight: "2024-08-15",
    manager: { 
      name: "Alex Mwangi", 
      email: "alex.mwangi@example.com", 
      phone: "+250 788 123 456",
      experience: "15 years"
    },
    socialMedia: {
      instagram: "@johnthelion",
      twitter: "@john_gatera"
    }
  },
  {
    id: 2,
    name: "Michael 'The Rock' Smith",
    image: "https://i.postimg.cc/857zgCw7/kanyarwanda-7.jpg",
    record: "15W - 3L - 0D",
    wins: 15,
    kos: 9,
    losses: 3,
    draws: 0,
    weightClass: "Middleweight",
    ranking: 2,
    age: 28,
    height: "6'1\"",
    reach: "75\"",
    stance: "Southpaw",
    hometown: "Musanze",
    bio: "Middleweight champion renowned for impeccable defense and strategic brilliance. Technical master with exceptional footwork and ring intelligence. Known for outsmarting opponents with calculated precision.",
    achievements: [
      "Middleweight Champion 2024",
      "Commonwealth Games Silver",
      "Defensive Boxer of the Year",
      "5 Title Defenses"
    ],
    nextFight: "2024-09-02",
    manager: { 
      name: "Sarah Kimani", 
      email: "sarah.kimani@example.com", 
      phone: "+250 789 654 321",
      experience: "12 years"
    },
    socialMedia: {
      instagram: "@michaeltherock",
      twitter: "@mike_smith"
    }
  },
  {
    id: 3,
    name: "David 'Thunder' Johnson",
    image: abc,
    record: "18W - 1L - 0D",
    wins: 18,
    kos: 12,
    losses: 1,
    draws: 0,
    weightClass: "Featherweight",
    ranking: 3,
    age: 24,
    height: "5'7\"",
    reach: "68\"",
    stance: "Orthodox",
    hometown: "Huye",
    bio: "Featherweight sensation famous for lightning-fast combinations and unmatched agility. Youngest national champion in history with explosive power and technical precision that belies his age.",
    achievements: [
      "Youngest National Champion",
      "Rising Star Award 2024",
      "KO of the Year 2023",
      "8 Consecutive Wins"
    ],
    nextFight: "2024-08-28",
    manager: { 
      name: "John Doe", 
      email: "john.doe@example.com", 
      phone: "+250 777 888 999",
      experience: "8 years"
    },
    socialMedia: {
      instagram: "@davidthunder",
      twitter: "@david_johnson"
    }
  }
];

const BoxerCard = ({ boxer, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const winPercentage = ((boxer.wins / (boxer.wins + boxer.losses + boxer.draws)) * 100).toFixed(1);
  const koPercentage = ((boxer.kos / boxer.wins) * 100).toFixed(1);

  return (
    <>
      <motion.div
        className="group relative"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Main Card */}
        <div 
          className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 group-hover:border-sky-500/40 transition-all duration-500 h-full cursor-pointer"
          onClick={() => setShowDetails(true)}
        >
          {/* Ranking Badge */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg z-10 shadow-2xl border-2 border-slate-900">
            #{boxer.ranking}
          </div>

          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[1.5px] rounded-3xl bg-slate-900" />
          </div>

          <div className="relative z-10">
            {/* Boxer Image */}
            <div className="relative overflow-hidden">
              <img
                src={boxer.image}
                alt={boxer.name}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
              {/* Weight Class Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm font-semibold border border-sky-500/30 backdrop-blur-sm">
                {boxer.weightClass}
              </div>

              {/* Name Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl font-bold text-white mb-1">{boxer.name}</h2>
                <p className="text-sky-400 text-sm font-semibold">{boxer.record}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    <CountUp end={boxer.wins} duration={1.5} />
                  </div>
                  <div className="text-slate-400 text-xs">Wins</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    <CountUp end={boxer.kos} duration={1.5} />
                  </div>
                  <div className="text-slate-400 text-xs">KOs</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-red-400 mb-1">
                    <CountUp end={boxer.losses} duration={1.5} />
                  </div>
                  <div className="text-slate-400 text-xs">Losses</div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {boxer.bio}
              </p>

              {/* Next Fight */}
              <div className="flex items-center gap-2 text-sky-400 text-sm mb-4">
                <Calendar size={16} />
                <span>Next Fight: {new Date(boxer.nextFight).toLocaleDateString()}</span>
              </div>

              {/* View Details CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-sky-400 text-sm font-semibold group-hover:text-sky-300 transition-colors duration-300">
                  View Full Profile
                </span>
                <ExternalLink size={16} className="text-sky-400 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
        </div>
      </motion.div>

      {/* Boxer Detail Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">
                        Rank #{boxer.ranking}
                      </span>
                      <span className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm border border-sky-500/30">
                        {boxer.weightClass}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                        {winPercentage}% Win Rate
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">{boxer.name}</h2>
                    <div className="flex items-center gap-4 text-slate-300">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-sky-400" />
                        <span>{boxer.hometown}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-sky-400" />
                        <span>{boxer.age} years</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target size={16} className="text-sky-400" />
                        <span>{boxer.stance} Stance</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-300"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Image and Stats */}
                  <div className="lg:col-span-1">
                    <div className="text-center">
                      <img
                        src={boxer.image}
                        alt={boxer.name}
                        className="w-64 h-64 rounded-2xl object-cover mx-auto mb-6 border-4 border-sky-500/50 shadow-2xl"
                      />
                      
                      {/* Record Stats */}
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2 justify-center">
                          <Trophy size={20} className="text-sky-400" />
                          Fight Record
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-3xl font-bold text-green-400">{boxer.wins}</div>
                            <div className="text-slate-400 text-sm">Wins</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-red-400">{boxer.losses}</div>
                            <div className="text-slate-400 text-sm">Losses</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-yellow-400">{boxer.kos}</div>
                            <div className="text-slate-400 text-sm">KOs</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-blue-400">{boxer.draws}</div>
                            <div className="text-slate-400 text-sm">Draws</div>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-sky-500/10 rounded-xl border border-sky-500/20">
                          <div className="text-sky-400 font-semibold">{winPercentage}% Win Rate</div>
                          <div className="text-sky-300 text-sm">{koPercentage}% KO Rate</div>
                        </div>
                      </div>

                      {/* Physical Stats */}
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2 justify-center">
                          <Shield size={20} className="text-sky-400" />
                          Physical Stats
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between text-slate-300">
                            <span>Height</span>
                            <span className="text-white font-semibold">{boxer.height}</span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>Reach</span>
                            <span className="text-white font-semibold">{boxer.reach}</span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>Stance</span>
                            <span className="text-white font-semibold">{boxer.stance}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Bio */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Biography</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">{boxer.bio}</p>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <Award className="text-sky-400" />
                        Major Achievements
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {boxer.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
                          >
                            <Star size={16} className="text-yellow-400 flex-shrink-0" />
                            <span className="text-slate-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Next Fight & Manager */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Next Fight */}
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <Calendar size={20} className="text-sky-400" />
                          Next Fight
                        </h4>
                        <div className="text-sky-400 text-lg font-semibold">
                          {new Date(boxer.nextFight).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="text-slate-400 text-sm mt-2">Scheduled bout</div>
                      </div>

                      {/* Manager Contact */}
                      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <Users size={20} className="text-sky-400" />
                          Manager
                        </h4>
                        <div className="space-y-3">
                          <div className="text-white font-semibold">{boxer.manager.name}</div>
                          <div className="text-slate-400 text-sm">{boxer.manager.experience} experience</div>
                          <div className="flex gap-3">
                            <a
                              href={`mailto:${boxer.manager.email}`}
                              className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors duration-300"
                            >
                              <Mail size={16} />
                              Email
                            </a>
                            <a
                              href={`tel:${boxer.manager.phone}`}
                              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300"
                            >
                              <Phone size={16} />
                              Call
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const National = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeightClass, setSelectedWeightClass] = useState("All");
  const [selectedRanking, setSelectedRanking] = useState("All");

  const weightClasses = ["All", "Lightweight", "Middleweight", "Featherweight", "Heavyweight", "Welterweight"];
  const rankings = ["All", "Top 3", "Top 5", "Top 10"];

  const filteredBoxers = boxers.filter((boxer) => {
    const matchesSearch = 
      boxer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      boxer.hometown.toLowerCase().includes(searchTerm.toLowerCase()) ||
      boxer.achievements.some(ach => ach.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesWeightClass = selectedWeightClass === "All" || boxer.weightClass === selectedWeightClass;
    
    const matchesRanking = selectedRanking === "All" || 
      (selectedRanking === "Top 3" && boxer.ranking <= 3) ||
      (selectedRanking === "Top 5" && boxer.ranking <= 5) ||
      (selectedRanking === "Top 10" && boxer.ranking <= 10);

    return matchesSearch && matchesWeightClass && matchesRanking;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
            <Trophy className="text-sky-400" />
            <span className="text-sky-400 font-semibold text-sm tracking-wider uppercase">
              ELITE ATHLETES
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            National Boxers
          </motion.h1>

          <motion.p 
            className="text-slate-300 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Meet Rwanda's elite boxing champions - world-class athletes representing 
            the nation with skill, determination, and unwavering spirit in the ring.
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search boxers, hometown, achievements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                />
              </div>

              {/* Weight Class Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <select
                  value={selectedWeightClass}
                  onChange={(e) => setSelectedWeightClass(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white appearance-none focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                >
                  {weightClasses.map(weightClass => (
                    <option key={weightClass} value={weightClass} className="bg-slate-800">
                      {weightClass}
                    </option>
                  ))}
                </select>
              </div>

              {/* Ranking Filter */}
              <div className="relative">
                <TrendingUp className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <select
                  value={selectedRanking}
                  onChange={(e) => setSelectedRanking(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white appearance-none focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                >
                  {rankings.map(ranking => (
                    <option key={ranking} value={ranking} className="bg-slate-800">
                      {ranking}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedWeightClass("All");
                  setSelectedRanking("All");
                }}
                className="px-6 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-slate-300 hover:text-white hover:border-sky-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <X size={18} />
                Clear Filters
              </button>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedWeightClass !== "All" && (
                <span className="flex items-center gap-2 px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm border border-sky-500/30">
                  {selectedWeightClass}
                  <X size={14} className="cursor-pointer" onClick={() => setSelectedWeightClass("All")} />
                </span>
              )}
              {selectedRanking !== "All" && (
                <span className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                  {selectedRanking}
                  <X size={14} className="cursor-pointer" onClick={() => setSelectedRanking("All")} />
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

          {/* Boxers Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredBoxers.length > 0 ? (
                filteredBoxers.map((boxer, index) => (
                  <BoxerCard key={boxer.id} boxer={boxer} index={index} />
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
                    <h3 className="text-2xl font-bold text-white mb-4">No Boxers Found</h3>
                    <p className="text-slate-400 text-lg mb-6">
                      We couldn't find any boxers matching your search criteria. 
                      Try adjusting your filters or search terms.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedWeightClass("All");
                        setSelectedRanking("All");
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

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-black/50">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-sky-500/20">
            <Trophy className="text-6xl text-sky-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">National Boxing Excellence</h2>
            <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Our national team represents the pinnacle of Rwandan boxing talent, 
              combining technical mastery with the heart and spirit of champions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "53", label: "Total Wins" },
                { number: "36", label: "Knockouts" },
                { number: "6", label: "Losses" },
                { number: "85%", label: "Win Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-sky-400 mb-1">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default National;