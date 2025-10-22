import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Trophy, Medal, TrendingUp, Search, Filter, Award, Target } from "lucide-react";

// Enhanced ranking data with more details
const rankings = [
  { 
    rank: 1, 
    name: "Jean Claude Uwizeye", 
    weight: "Lightweight (60kg)", 
    club: "APR Boxing Club", 
    points: 2450,
    trend: "up",
    matches: { won: 18, lost: 2 },
    streak: 8,
    image: "https://i.imgur.com/athlete1.jpg"
  },
  { 
    rank: 2, 
    name: "Emmanuel Ndayisaba", 
    weight: "Featherweight (57kg)", 
    club: "Police Boxing Club", 
    points: 2210,
    trend: "up",
    matches: { won: 16, lost: 3 },
    streak: 5,
    image: "https://i.imgur.com/athlete2.jpg"
  },
  { 
    rank: 3, 
    name: "Patrick Mugisha", 
    weight: "Middleweight (75kg)", 
    club: "Kigali Boxing Academy", 
    points: 1980,
    trend: "down",
    matches: { won: 14, lost: 4 },
    streak: 2,
    image: "https://i.imgur.com/athlete3.jpg"
  },
  { 
    rank: 4, 
    name: "Eric Iradukunda", 
    weight: "Heavyweight (91kg)", 
    club: "Rubavu Boxing Club", 
    points: 1850,
    trend: "up",
    matches: { won: 13, lost: 5 },
    streak: 4,
    image: "https://i.imgur.com/athlete4.jpg"
  },
  { 
    rank: 5, 
    name: "Samuel Niyonzima", 
    weight: "Bantamweight (54kg)", 
    club: "Musanze Boxing Club", 
    points: 1720,
    trend: "neutral",
    matches: { won: 12, lost: 6 },
    streak: 1,
    image: "https://i.imgur.com/athlete5.jpg"
  },
];

// Weight class options for filtering
const weightClasses = ["All", "Bantamweight", "Featherweight", "Lightweight", "Middleweight", "Heavyweight"];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    scale: 0.95,
    transition: { duration: 0.3 }
  }
};

const RankBadge = ({ rank }) => {
  const getRankColor = (rank) => {
    switch(rank) {
      case 1: return "from-yellow-400 to-yellow-600 shadow-yellow-500/25";
      case 2: return "from-gray-400 to-gray-600 shadow-gray-500/25";
      case 3: return "from-amber-600 to-amber-800 shadow-amber-500/25";
      default: return "from-sky-500 to-sky-700 shadow-sky-500/25";
    }
  };

  const getRankIcon = (rank) => {
    switch(rank) {
      case 1: return <Trophy className="w-4 h-4" />;
      case 2: return <Medal className="w-4 h-4" />;
      case 3: return <Award className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  return (
    <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${getRankColor(rank)} shadow-lg text-white font-bold text-lg`}>
      {rank <= 3 ? getRankIcon(rank) : `#${rank}`}
    </div>
  );
};

const TrendIndicator = ({ trend, streak }) => {
  const getTrendProps = (trend) => {
    switch(trend) {
      case "up": return { color: "text-green-400", icon: "↗", bg: "bg-green-500/20" };
      case "down": return { color: "text-red-400", icon: "↘", bg: "bg-red-500/20" };
      default: return { color: "text-gray-400", icon: "→", bg: "bg-gray-500/20" };
    }
  };

  const { color, icon, bg } = getTrendProps(trend);

  return (
    <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${bg} ${color} text-xs font-semibold`}>
      <span>{icon}</span>
      <span>{streak} {streak === 1 ? 'win' : 'wins'}</span>
    </div>
  );
};

const RankingCard = ({ athlete, index }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-sky-500/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-sky-500/10"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <RankBadge rank={athlete.rank} />
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                {athlete.name}
              </h3>
              <p className="text-gray-400 text-sm">{athlete.club}</p>
            </div>
          </div>
          <TrendIndicator trend={athlete.trend} streak={athlete.streak} />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-black/50 rounded-xl border border-gray-800">
            <div className="text-2xl font-black text-sky-400 mb-1">{athlete.points}</div>
            <div className="text-xs text-gray-400 font-semibold">POINTS</div>
          </div>
          <div className="text-center p-3 bg-black/50 rounded-xl border border-gray-800">
            <div className="text-2xl font-black text-green-400 mb-1">{athlete.matches.won}</div>
            <div className="text-xs text-gray-400 font-semibold">WINS</div>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-300 font-medium bg-sky-500/20 px-3 py-1 rounded-full border border-sky-500/30">
            {athlete.weight}
          </span>
          <div className="text-gray-400">
            Record: <span className="text-white font-semibold">{athlete.matches.won}-{athlete.matches.lost}</span>
          </div>
        </div>
      </div>

      {/* Animated border bottom */}
      <div className="h-1 bg-gradient-to-r from-sky-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </motion.div>
  );
};

const Rankings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeightClass, setSelectedWeightClass] = useState("All");
  const [sortBy, setSortBy] = useState("rank");

  const filteredRankings = useMemo(() => {
    return rankings
      .filter(athlete => 
        athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        athlete.club.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(athlete => 
        selectedWeightClass === "All" || 
        athlete.weight.includes(selectedWeightClass)
      )
      .sort((a, b) => {
        switch(sortBy) {
          case "points": return b.points - a.points;
          case "wins": return b.matches.won - a.matches.won;
          case "streak": return b.streak - a.streak;
          default: return a.rank - b.rank;
        }
      });
  }, [searchTerm, selectedWeightClass, sortBy]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />

      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-sky-900 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Header Section */}
      <motion.header 
        className="py-24 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-sky-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-sky-500/30 mb-6"
          >
            <Trophy className="w-6 h-6 text-sky-400" />
            <span className="text-sky-300 font-semibold">OFFICIAL RANKINGS</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
            National Rankings
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The official Rwanda Boxing Federation rankings — tracking elite performers across all weight classes through comprehensive point-based evaluation.
          </p>
        </div>
      </motion.header>

      {/* Controls Section */}
      <motion.section 
        className="px-6 sm:px-12 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search athletes or clubs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <select
                  value={selectedWeightClass}
                  onChange={(e) => setSelectedWeightClass(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
                >
                  {weightClasses.map(weightClass => (
                    <option key={weightClass} value={weightClass}>{weightClass}</option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
              >
                <option value="rank">Sort by Rank</option>
                <option value="points">Sort by Points</option>
                <option value="wins">Sort by Wins</option>
                <option value="streak">Sort by Streak</option>
              </select>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Rankings Grid */}
      <main className="flex-grow px-6 sm:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredRankings.map((athlete, index) => (
                <RankingCard key={athlete.rank} athlete={athlete} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          <AnimatePresence>
            {filteredRankings.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🥊</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Athletes Found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rankings;