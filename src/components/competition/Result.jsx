import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { 
  Trophy, 
  Medal, 
  Award, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Filter, 
  Search,
  Download,
  Share2,
  Eye,
  Crown,
  Star,
  Target,
  Users,
  BarChart3,
  TrendingDown
} from "lucide-react";

// Enhanced results data with detailed information
const resultsData = [
  {
    id: 1,
    event: "National Boxing Championship 2025",
    date: new Date(2025, 7, 20),
    location: "Kigali Arena, Rwanda",
    status: "completed",
    participants: 45,
    prizePool: "25,000,000 RWF",
    winners: [
      { 
        category: "Lightweight (60kg)", 
        name: "Eric Ndayishimiye", 
        club: "APR Boxing Club",
        points: 2450,
        trend: "up",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=150&h=150&fit=crop"
      },
      { 
        category: "Middleweight (75kg)", 
        name: "Jean Uwimana", 
        club: "Police Boxing Club",
        points: 2330,
        trend: "up",
        image: "https://images.unsplash.com/photo-1599058917765-780d56d1beb3?w=150&h=150&fit=crop"
      },
      { 
        category: "Heavyweight (91kg+)", 
        name: "Patrick Mugabo", 
        club: "Kigali Boxing Academy",
        points: 2210,
        trend: "down",
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=150&h=150&fit=crop"
      },
    ],
  },
  {
    id: 2,
    event: "East African Boxing Cup",
    date: new Date(2025, 5, 12),
    location: "Dar es Salaam, Tanzania",
    status: "completed",
    participants: 32,
    prizePool: "18,000,000 RWF",
    winners: [
      { 
        category: "Lightweight (60kg)", 
        name: "Alain Nkurunziza", 
        club: "Musanze Boxing Club",
        points: 1980,
        trend: "up",
        image: "https://images.unsplash.com/photo-1596704013025-1c0b1a9c6a2c?w=150&h=150&fit=crop"
      },
      { 
        category: "Welterweight (69kg)", 
        name: "Joseph Habimana", 
        club: "Rubavu Boxing Club",
        points: 1850,
        trend: "up",
        image: "https://images.unsplash.com/photo-1549060279-7e168fce7090?w=150&h=150&fit=crop"
      },
      { 
        category: "Heavyweight (91kg+)", 
        name: "David Hakizimana", 
        club: "APR Boxing Club",
        points: 1720,
        trend: "neutral",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop"
      },
    ],
  },
  {
    id: 3,
    event: "Rwanda Inter-Club Tournament",
    date: new Date(2025, 3, 5),
    location: "Amahoro Stadium, Kigali",
    status: "completed",
    participants: 28,
    prizePool: "12,000,000 RWF",
    winners: [
      { 
        category: "Flyweight (52kg)", 
        name: "Claude Rukundo", 
        club: "Youth Boxing Center",
        points: 1650,
        trend: "up",
        image: "https://images.unsplash.com/photo-1571019614244-c5c476de34fb?w=150&h=150&fit=crop"
      },
      { 
        category: "Lightweight (60kg)", 
        name: "Innocent Tuyishime", 
        club: "Police Boxing Club",
        points: 1580,
        trend: "up",
        image: "https://images.unsplash.com/photo-1599058917765-780d56d1beb3?w=150&h=150&fit=crop"
      },
      { 
        category: "Middleweight (75kg)", 
        name: "Olivier Niyigena", 
        club: "APR Boxing Club",
        points: 1520,
        trend: "down",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=150&h=150&fit=crop"
      },
    ],
  },
];

// National rankings data
const nationalRankings = [
  { rank: 1, name: "Eric Ndayishimiye", category: "Lightweight", club: "APR Boxing Club", points: 2450, trend: "up", change: 2 },
  { rank: 2, name: "Jean Uwimana", category: "Middleweight", club: "Police Boxing Club", points: 2330, trend: "up", change: 1 },
  { rank: 3, name: "Patrick Mugabo", category: "Heavyweight", club: "Kigali Boxing Academy", points: 2210, trend: "down", change: 1 },
  { rank: 4, name: "Alain Nkurunziza", category: "Lightweight", club: "Musanze Boxing Club", points: 1980, trend: "up", change: 3 },
  { rank: 5, name: "Claude Rukundo", category: "Flyweight", club: "Youth Boxing Center", points: 1650, trend: "up", change: 5 },
  { rank: 6, name: "Joseph Habimana", category: "Welterweight", club: "Rubavu Boxing Club", points: 1850, trend: "up", change: 2 },
  { rank: 7, name: "David Hakizimana", category: "Heavyweight", club: "APR Boxing Club", points: 1720, trend: "neutral", change: 0 },
  { rank: 8, name: "Innocent Tuyishime", category: "Lightweight", club: "Police Boxing Club", points: 1580, trend: "up", change: 4 },
  { rank: 9, name: "Olivier Niyigena", category: "Middleweight", club: "APR Boxing Club", points: 1520, trend: "down", change: 2 },
  { rank: 10, name: "Samuel Niyonshuti", category: "Welterweight", club: "Gisenyi Boxing Club", points: 1480, trend: "up", change: 1 },
];

const categories = ["All", "Lightweight", "Middleweight", "Heavyweight", "Welterweight", "Flyweight"];

const TrendIndicator = ({ trend, change }) => {
  const getTrendProps = (trend) => {
    switch(trend) {
      case "up": return { color: "text-green-400", bg: "bg-green-500/20", icon: <TrendingUp className="w-3 h-3" /> };
      case "down": return { color: "text-red-400", bg: "bg-red-500/20", icon: <TrendingDown className="w-3 h-3" /> };
      default: return { color: "text-gray-400", bg: "bg-gray-500/20", icon: <BarChart3 className="w-3 h-3" /> };
    }
  };

  const { color, bg, icon } = getTrendProps(trend);

  return (
    <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${bg} ${color} text-xs font-semibold`}>
      {icon}
      <span>{change}</span>
    </div>
  );
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
      case 1: return <Crown className="w-4 h-4" />;
      case 2: return <Medal className="w-4 h-4" />;
      case 3: return <Award className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  return (
    <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${getRankColor(rank)} shadow-lg text-white font-bold text-sm`}>
      {rank <= 3 ? getRankIcon(rank) : `#${rank}`}
    </div>
  );
};

const EventCard = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative group bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-sky-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
              {event.event}
            </h3>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{event.date.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{event.participants} Participants</span>
              </div>
            </div>
          </div>
          <div className="bg-sky-500/20 px-3 py-1 rounded-full border border-sky-500/30">
            <span className="text-sky-400 text-sm font-semibold">Completed</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Prize Pool: <span className="text-yellow-400 font-semibold">{event.prizePool}</span></span>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            {isExpanded ? "Show Less" : "Show Winners"}
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ↓
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Winners Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-black/20">
              <h4 className="text-lg font-semibold text-sky-400 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Event Champions
              </h4>
              <div className="grid gap-4">
                {event.winners.map((winner, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-sky-500/30 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img
                      src={winner.image}
                      alt={winner.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-sky-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="font-semibold text-white">{winner.name}</h5>
                        <TrendIndicator trend={winner.trend} change={winner.points} />
                      </div>
                      <p className="text-sm text-gray-400">{winner.category}</p>
                      <p className="text-xs text-gray-500">{winner.club}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ResultsAndStandings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("results"); // "results" or "standings"

  const filteredResults = useMemo(() => {
    return resultsData.filter(event =>
      event.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.winners.some(winner => winner.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const filteredRankings = useMemo(() => {
    return nationalRankings.filter(athlete =>
      (selectedCategory === "All" || athlete.category === selectedCategory) &&
      (athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       athlete.club.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-sky-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>
      </div>

      <Navbar />

      {/* Header Section */}
      <motion.header 
        className="relative py-28 px-6 text-center z-10 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/40 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-sky-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-sky-500/30 mb-6"
          >
            <Trophy className="w-5 h-5 text-sky-400" />
            <span className="text-sky-300 font-semibold">COMPETITION RESULTS</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
            Results & Standings
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive overview of competition results, event winners, and national rankings from Rwanda Boxing Federation tournaments.
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow py-16 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        {/* Tabs and Controls */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Tabs */}
          <div className="flex gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-2xl border border-gray-800 w-fit">
            {["results", "standings"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab === "results" ? "Event Results" : "National Rankings"}
              </motion.button>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={activeTab === "results" ? "Search events or winners..." : "Search boxers or clubs..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 backdrop-blur-sm"
              />
            </div>

            {activeTab === "standings" && (
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === "results" ? (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {filteredResults.length > 0 ? (
                filteredResults.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🥊</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No Results Found</h3>
                  <p className="text-gray-400">Try adjusting your search criteria.</p>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="standings"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden shadow-2xl"
            >
              {/* Table Header */}
              <div className="p-6 border-b border-gray-800 bg-black/50">
                <h2 className="text-2xl font-bold text-white mb-2">National Rankings</h2>
                <p className="text-gray-400">Current standings based on competition performance and points</p>
              </div>

              {/* Rankings Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-sky-500/20">
                    <tr className="text-white">
                      <th className="py-4 px-6 text-left font-semibold">Rank</th>
                      <th className="py-4 px-6 text-left font-semibold">Boxer</th>
                      <th className="py-4 px-6 text-left font-semibold">Category</th>
                      <th className="py-4 px-6 text-left font-semibold">Club</th>
                      <th className="py-4 px-6 text-left font-semibold">Points</th>
                      <th className="py-4 px-6 text-left font-semibold">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRankings.map((athlete, index) => (
                      <motion.tr
                        key={athlete.rank}
                        className="border-t border-gray-800 hover:bg-sky-500/10 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <td className="py-4 px-6">
                          <RankBadge rank={athlete.rank} />
                        </td>
                        <td className="py-4 px-6 font-semibold text-white">{athlete.name}</td>
                        <td className="py-4 px-6 text-gray-300">{athlete.category}</td>
                        <td className="py-4 px-6 text-gray-400">{athlete.club}</td>
                        <td className="py-4 px-6 font-bold text-sky-400">{athlete.points}</td>
                        <td className="py-4 px-6">
                          <TrendIndicator trend={athlete.trend} change={athlete.change} />
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredRankings.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No Rankings Found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default ResultsAndStandings;