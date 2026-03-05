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
  TrendingDown,
  X,
  ChevronLeft,
  ChevronRight,
  Activity,
  Clock,
  Weight,
  Flag,
  Heart,
  Zap,
  Shield,
  Grid,
  List,
  Hash,
} from "lucide-react";

// Enhanced results data with detailed information
const resultsData = [
  {
    id: 1,
    event: "RWANDA NATIONAL MENS BOXING CHAMPIONSHIP 2026",
    date: new Date(2026, 3, 8),
    location: "Kigali kimisagara, maison des jenne",
    status: "pending",
    participants: 48,
    image: "https://i.postimg.cc/63n8t70g/Screenshot_2026_03_04_111120.png",
    description:
      "WEEK 1 - RWANDA BOXING CHAMPIONSHIP 🇷🇼🥊The journey begins. 14 explosive bouts.8 different weight classes.One ring. One mission.Rwanda’s finest fighters step into the ring to prove who belongs at the top.",
    winners: [
  
    ],
  },
];

// National rankings data
const nationalRankings = [
  {
    rank: 1,
    name: "Iyanone Jean Claude",
    category: "FLY WEIGHT",
    club: "APR Boxing Club",
    points: 0 ,
    trend: "up",
    change: 2,
    record: "15-2-0",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 15,
    losses: 2,
    draws: 0,
  },
  {
    rank: 2,
    name: "N, Ibrahim",
    category: "FLY WEIGHT",
    club: "Police Boxing Club",
    points: 0 ,
    trend: "up",
    change: 1,
    record: "14-1-1",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 14,
    losses: 1,
    draws: 1,
  },
  {
    rank: 3,
    name: "Hatangimana Amani",
    category: "FLY WEIGHT",
    club: "Kigali Boxing Academy",
    points: 0 ,
    trend: "down",
    change: 1,
    record: "14-1-2",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 14,
    losses: 1,
    draws: 2,
  },
  {
    rank: 4,
    name: "Nshimiye Omal",
    category: "FLY WEIGHT",
    club: "Musanze Boxing Club",
    points: 0 ,
    trend: "up",
    change: 3,
    record: "12-3-1",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 12,
    losses: 3,
    draws: 1,
  },
  {
    rank: 5,
    name: "Muhamad Said Abdalla",
    category: "FLY WEIGHT",
    club: "Youth Boxing Center",
    points: 0 ,
    trend: "up",
    change: 5,
    record: "10-2-0",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 10,
    losses: 2,
    draws: 0,
  },
  {
    rank: 6,
    name: "Muhire Leon",
    category: "FLY WEIGHT",
    club: "Rubavu Boxing Club",
    points: 0 ,
    trend: "up",
    change: 2,
    record: "11-2-1",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 11,
    losses: 2,
    draws: 1,
  },
  {
    rank: 7,
    name: "H, Fabrice",
    category: "BANTAM WEIGHT",
    club: "APR Boxing Club",
    points: 0 ,
    trend: "neutral",
    change: 0,
    record: "10-1-0",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 10,
    losses: 1,
    draws: 0,
  },
  {
    rank: 8,
    name: "N, Valentin",
    category: "BANTAM WEIGHT",
    club: "Police Boxing Club",
    points: 0 ,
    trend: "up",
    change: 4,
    record: "9-2-1",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 9,
    losses: 2,
    draws: 1,
  },
  {
    rank: 9,
    name: "Mazimpaka Vedaste",
    category: "FEATHER WEIGHT",
    club: "APR Boxing Club",
    points: 0 ,
    trend: "down",
    change: 2,
    record: "8-3-0",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 8,
    losses: 3,
    draws: 0,
  },
  {
    rank: 10,
    name: "Iranezeza Aime",
    category: "FEATHER WEIGHT",
    club: "Gisenyi Boxing Club",
    points: 0 ,
    trend: "up",
    change: 0 ,
    record: "7-2-2",
    knockouts: 3,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 7,
    losses: 2,
    draws: 2,
  },
  {
    rank: 11,
    name: "Irasubiza joshua",
    category: "FEATHER WEIGHT",
    club: "APR Boxing Club",
    points: 0 ,
    trend: "down",
    change: 2,
    record: "8-1-1",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 8,
    losses: 1,
    draws: 1,
  },
  {
    rank: 12,
    name: "cyizere emmanuel",
    category: "FEATHER WEIGHT",
    club: "Gisenyi Boxing Club",
    points: 0 ,
    trend: "up",
    change: 1,
    record: "6-3-1",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 6,
    losses: 3,
    draws: 1,
  },
  {
    rank: 13,
    name: "Byukusenge Eric",
    category: "FEATHER WEIGHT",
    club: "APR Boxing Club",
    points: 0 ,
    trend: "down",
    change: 2,
    record: "7-2-0",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 7,
    losses: 2,
    draws: 0,
  },
  {
    rank: 14,
    name: "H, abdul",
    category: "FEATHER WEIGHT",
    club: "Gisenyi Boxing Club",
    points: 0 ,
    trend: "up",
    change: 1,
    record: "5-4-1",
    knockouts: 0 ,
    image: "/api/placeholder/100/100",
    country: "Rwanda",
    wins: 5,
    losses: 4,
    draws: 1,
  },
];

const categories = [
  "All",
  "FLY WEIGHT",
  "BANTAM WEIGHT",
  "FEATHER WEIGHT",
  "LIGHT WEIGHT",
  "WELTER WEIGHT",
];

// Advanced Modal Component with Rankings and Share Functionality
const EventDetailsModal = ({ event, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedWinner, setSelectedWinner] = useState(null);
  const [rankSearchTerm, setRankSearchTerm] = useState("");
  const [rankCategory, setRankCategory] = useState("All");
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  // Filter rankings based on search and category
  const filteredRankings = useMemo(() => {
    return nationalRankings.filter(
      (athlete) =>
        (rankCategory === "All" || athlete.category === rankCategory) &&
        (athlete.name.toLowerCase().includes(rankSearchTerm.toLowerCase()) ||
          athlete.club.toLowerCase().includes(rankSearchTerm.toLowerCase())),
    );
  }, [rankSearchTerm, rankCategory]);

  // Share functionality
  const shareData = {
    title: `${event.event} - Boxing Results`,
    text: `Check out the results from ${event.event} held at ${event.location} on ${event.date.toLocaleDateString()}. Prize pool: ${event.prizePool}`,
    url: window.location.href,
  };

  const handleShare = async (platform) => {
    const text = encodeURIComponent(shareData.text);
    const url = encodeURIComponent(shareData.url);
    const title = encodeURIComponent(shareData.title);

    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${text}%20${url}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${title}&body=${text}%0A%0A${url}`;
        break;
      case "copy":
        try {
          await navigator.clipboard.writeText(
            `${shareData.text}\n\n${shareData.url}`,
          );
          setShareSuccess(true);
          setTimeout(() => setShareSuccess(false), 2000);
          setShowShareMenu(false);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
        return;
      case "native":
        if (navigator.share) {
          try {
            await navigator.share({
              title: shareData.title,
              text: shareData.text,
              url: shareData.url,
            });
          } catch (err) {
            if (err.name !== "AbortError") {
              console.error("Error sharing:", err);
            }
          }
        } else {
          setShowShareMenu(true);
        }
        return;
      default:
        return;
    }

    if (shareUrl) {
      window.open(
        shareUrl,
        "_blank",
        "noopener,noreferrer,width=600,height=400",
      );
    }
    setShowShareMenu(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        {/* Backdrop with blur */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-sky-500/50 text-gray-400 hover:text-white transition-all"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Hero Section with Event Image */}
          <div className="relative h-56 md:h-64 overflow-hidden">
            <img
              src={event.image}
              alt={event.event}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Event Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-2"
              >
                <div className="bg-sky-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-sky-500/30">
                  <span className="text-sky-400 text-xs font-semibold">
                    {event.status.toUpperCase()}
                  </span>
                </div>
                <div className="bg-yellow-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-500/30">
                  <span className="text-yellow-400 text-xs font-semibold">
                    {event.prizePool}
                  </span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-white mb-1"
              >
                {event.event}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-300"
              >
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-sky-400" />
                  <span>
                    {event.date.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-sky-400" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3 text-sky-400" />
                  <span>{event.participants} Participants</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-800 px-6">
            <div className="flex gap-6">
              {["overview", "winners", "rankings"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 font-semibold capitalize relative text-sm ${
                    activeTab === tab
                      ? "text-sky-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400"
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                      <div className="text-xs text-sky-400 mb-1">
                        Total Fights
                      </div>
                      <div className="text-lg font-bold text-white">14</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                      <div className="text-xs text-sky-400 mb-1">Knockouts</div>
                      <div className="text-lg font-bold text-white">0</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                      <div className="text-xs text-sky-400 mb-1">
                        Weight Classes
                      </div>
                      <div className="text-lg font-bold text-white">8</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                      <div className="text-xs text-sky-400 mb-1">Clubs</div>
                      <div className="text-lg font-bold text-white">8</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-sky-500/10 to-transparent rounded-lg p-4 border border-sky-500/20">
                    <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-sky-400" />
                      Key Highlights
                    </h3>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-sky-400" />
                        Record-breaking 48 participants from 8 different clubs
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-sky-400" />0
                        knockout victories in the tournament
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-sky-400" />0
                        title defenses successfully completed
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === "winners" && (
                <motion.div
                  key="winners"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid gap-3">
                    {event.winners.map((winner, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-800/30 rounded-lg border border-gray-700 overflow-hidden hover:border-sky-500/30 transition-all cursor-pointer"
                        whileHover={{ scale: 1.01, x: 5 }}
                        onClick={() =>
                          setSelectedWinner(
                            selectedWinner === index ? null : index,
                          )
                        }
                      >
                        <div className="p-3 flex items-center gap-3">
                          <div
                            className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${
                              index === 0
                                ? "from-yellow-400 to-yellow-600"
                                : index === 1
                                  ? "from-gray-400 to-gray-600"
                                  : "from-amber-600 to-amber-800"
                            } shadow-lg text-xs`}
                          >
                            {index === 0 ? (
                              <Crown className="w-4 h-4 text-white" />
                            ) : index === 1 ? (
                              <Medal className="w-4 h-4 text-white" />
                            ) : (
                              <Award className="w-4 h-4 text-white" />
                            )}
                          </div>

                          <img
                            src={winner.image}
                            alt={winner.name}
                            className="w-10 h-10 rounded-full object-cover border border-sky-500"
                          />

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-white text-sm truncate">
                                {winner.name}
                              </h4>
                              <span className="text-xs text-sky-400 font-semibold">
                                {winner.points} pts
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                              <span className="truncate">
                                {winner.category}
                              </span>
                              <span>•</span>
                              <span className="truncate">{winner.club}</span>
                            </div>
                          </div>

                          <motion.div
                            animate={{
                              rotate: selectedWinner === index ? 180 : 0,
                            }}
                            className="text-gray-400"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {selectedWinner === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-3 border-t border-gray-700 bg-black/20">
                                <h5 className="text-xs font-semibold text-sky-400 mb-2">
                                  Detailed Statistics
                                </h5>
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="bg-gray-800/50 rounded p-2">
                                    <span className="text-xs text-gray-400">
                                      Record
                                    </span>
                                    <span className="text-sm font-bold text-white block">
                                      {winner.record}
                                    </span>
                                  </div>
                                  <div className="bg-gray-800/50 rounded p-2">
                                    <span className="text-xs text-gray-400">
                                      Knockouts
                                    </span>
                                    <span className="text-sm font-bold text-white block">
                                      {winner.knockouts}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "rankings" && (
                <motion.div
                  key="rankings"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Rankings Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Crown className="w-5 h-5 text-yellow-400" />
                      National Rankings
                    </h3>

                    {/* Search and Filter */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <Search
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={16}
                        />
                        <input
                          type="text"
                          placeholder="Search boxers or clubs..."
                          value={rankSearchTerm}
                          onChange={(e) => setRankSearchTerm(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-sm bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />
                      </div>

                      <div className="relative sm:w-40">
                        <Filter
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={14}
                        />
                        <select
                          value={rankCategory}
                          onChange={(e) => setRankCategory(e.target.value)}
                          className="w-full pl-9 pr-6 py-2 text-sm bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-sky-500 appearance-none"
                        >
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Rankings Table */}
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-sky-500/20">
                          <tr>
                            <th className="py-2 px-3 text-left font-semibold text-white text-xs">
                              Rank
                            </th>
                            <th className="py-2 px-3 text-left font-semibold text-white text-xs">
                              Boxer
                            </th>
                            <th className="py-2 px-3 text-left font-semibold text-white text-xs">
                              Category
                            </th>
                            <th className="py-2 px-3 text-left font-semibold text-white text-xs">
                              Club
                            </th>
                            <th className="py-2 px-3 text-left font-semibold text-white text-xs">
                              Record
                            </th>
                            <th className="py-2 px-3 text-left font-semibold text-white text-xs">
                              Points
                            </th>
                            <th className="py-2 px-3 text-left font-semibold text-white text-xs">
                              Trend
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredRankings.map((athlete, index) => (
                            <motion.tr
                              key={athlete.rank}
                              className="border-t border-gray-800 hover:bg-sky-500/10 transition-colors"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.02 }}
                            >
                              <td className="py-2 px-3">
                                <RankBadge rank={athlete.rank} size="sm" />
                              </td>
                              <td className="py-2 px-3">
                                <div>
                                  <div className="font-medium text-white text-xs">
                                    {athlete.name}
                                  </div>
                            
                                </div>
                              </td>
                              <td className="py-2 px-3 text-xs text-gray-300">
                                {athlete.category}
                              </td>
                              <td className="py-2 px-3 text-xs text-gray-400">
                                {athlete.club}
                              </td>
                              <td className="py-2 px-3">
                                <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full text-gray-300">
                                  {athlete.record}
                                </span>
                              </td>
                              <td className="py-2 px-3 text-xs font-bold text-sky-400">
                                {athlete.points}
                              </td>
                              <td className="py-2 px-3">
                                <TrendIndicator
                                  trend={athlete.trend}
                                  change={athlete.change}
                                  size="sm"
                                />
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {filteredRankings.length === 0 && (
                      <div className="text-center py-8">
                        <div className="text-4xl mb-2">📊</div>
                        <h3 className="text-sm font-bold text-white mb-1">
                          No Rankings Found
                        </h3>
                        <p className="text-xs text-gray-400">
                          Try adjusting your search or filter criteria.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Rankings Summary */}
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="bg-gray-800/30 rounded-lg p-2 border border-gray-700">
                      <div className="text-xs text-gray-400">Total Boxers</div>
                      <div className="text-lg font-bold text-white">
                        {nationalRankings.length}
                      </div>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-2 border border-gray-700">
                      <div className="text-xs text-gray-400">
                        Weight Classes
                      </div>
                      <div className="text-lg font-bold text-white">6</div>
                    </div>
                    <div className="bg-gray-800/30 rounded-lg p-2 border border-gray-700">
                      <div className="text-xs text-gray-400">Active Clubs</div>
                      <div className="text-lg font-bold text-white">8</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-gray-800 px-6 py-3 bg-black/20 relative">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 relative">
                {/* Share Button with Menu */}
                <motion.div className="relative">
                  <motion.button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="p-1.5 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </motion.button>

                  {/* Share Menu */}
                  <AnimatePresence>
                    {showShareMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-0 mb-2 w-48 bg-gray-800 rounded-xl border border-gray-700 shadow-xl overflow-hidden z-30"
                      >
                        <div className="p-1">
                          {/* Native Share (if available) */}
                          {navigator.share && (
                            <button
                              onClick={() => handleShare("native")}
                              className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white hover:bg-gray-700 rounded-lg transition-colors"
                            >
                              <Share2 className="w-3.5 h-3.5 text-sky-400" />
                              Share via...
                            </button>
                          )}

                          {/* Social Media Options */}
                          <button
                            onClick={() => handleShare("twitter")}
                            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-sky-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            Twitter
                          </button>

                          <button
                            onClick={() => handleShare("facebook")}
                            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-sky-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                            </svg>
                            Facebook
                          </button>

                          <button
                            onClick={() => handleShare("whatsapp")}
                            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-sky-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.125 1.523 5.872L.055 23.905l6.169-1.509C7.875 22.763 9.891 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.944 0-3.825-.529-5.422-1.456l-.37-.222-3.792.928 1.026-3.672-.246-.397C2.398 15.66 1.818 13.884 1.818 12c0-5.611 4.571-10.182 10.182-10.182S22.182 6.389 22.182 12 17.611 21.818 12 21.818z" />
                            </svg>
                            WhatsApp
                          </button>

                          <button
                            onClick={() => handleShare("telegram")}
                            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-sky-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.195l-1.769 8.324c-.134.604-.488.75-1.024.467l-2.818-2.078-1.358 1.307c-.15.149-.276.276-.566.276l.202-2.855 5.199-4.699c.226-.202-.05-.314-.35-.112l-6.423 4.045-2.77-.924c-.603-.202-.615-.604.124-.894l10.824-4.174c.502-.184.941.124.777.891z" />
                            </svg>
                            Telegram
                          </button>

                          <button
                            onClick={() => handleShare("linkedin")}
                            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-sky-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                          </button>

                          <button
                            onClick={() => handleShare("email")}
                            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-sky-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            Email
                          </button>

                          <button
                            onClick={() => handleShare("copy")}
                            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-sky-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                            </svg>
                            Copy Link
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Copy Success Toast */}
                <AnimatePresence>
                  {shareSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 10 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: 10 }}
                      className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap"
                    >
                      Link copied!
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  className="p-1.5 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-3.5 h-3.5" />
                </motion.button>
              </div>

              <motion.button
                className="px-3 py-1.5 bg-sky-500 text-white rounded-lg text-sm font-semibold hover:bg-sky-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Export Rankings
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Updated TrendIndicator to accept size prop
const TrendIndicator = ({ trend, change, size = "md" }) => {
  const getTrendProps = (trend) => {
    switch (trend) {
      case "up":
        return {
          color: "text-green-400",
          bg: "bg-green-500/20",
          icon: (
            <TrendingUp className={size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3"} />
          ),
        };
      case "down":
        return {
          color: "text-red-400",
          bg: "bg-red-500/20",
          icon: (
            <TrendingDown
              className={size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3"}
            />
          ),
        };
      default:
        return {
          color: "text-gray-400",
          bg: "bg-gray-500/20",
          icon: (
            <BarChart3 className={size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3"} />
          ),
        };
    }
  };

  const { color, bg, icon } = getTrendProps(trend);

  return (
    <div
      className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-full ${bg} ${color} text-${size === "sm" ? "2xs" : "xs"} font-semibold`}
    >
      {icon}
      <span>{change}</span>
    </div>
  );
};

// Updated RankBadge to accept size prop
const RankBadge = ({ rank, size = "md" }) => {
  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return "from-yellow-400 to-yellow-600 shadow-yellow-500/25";
      case 2:
        return "from-gray-400 to-gray-600 shadow-gray-500/25";
      case 3:
        return "from-amber-600 to-amber-800 shadow-amber-500/25";
      default:
        return "from-sky-500 to-sky-700 shadow-sky-500/25";
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />;
      case 2:
        return <Medal className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />;
      case 3:
        return <Award className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />;
      default:
        return <Target className={size === "sm" ? "w-3 h-3" : "w-4 h-4"} />;
    }
  };

  const sizeClasses = size === "sm" ? "w-6 h-6 text-xs" : "w-10 h-10 text-sm";

  return (
    <div
      className={`flex items-center justify-center ${sizeClasses} rounded-lg bg-gradient-to-br ${getRankColor(rank)} shadow-lg text-white font-bold`}
    >
      {rank <= 3 ? getRankIcon(rank) : `#${rank}`}
    </div>
  );
};

const EventCard = ({ event, onViewDetails }) => {
  return (
    <motion.div
      className="relative group bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-sky-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.event}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-4 right-4 bg-sky-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-sky-500/30">
          <span className="text-sky-400 text-sm font-semibold">Pending</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors mb-3">
          {event.event}
        </h3>

        <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-4">
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

        <div className="flex items-center justify-between">
          <span className="text-gray-400">
            Prize Pool:{" "}
            <span className="text-yellow-400 font-semibold">
              {event.prizePool}
            </span>
          </span>

          <motion.button
            onClick={() => onViewDetails(event)}
            className="px-4 py-2 bg-sky-500/20 text-sky-400 rounded-xl font-semibold flex items-center gap-2 hover:bg-sky-500/30 transition-colors border border-sky-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="w-4 h-4" />
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ResultsAndStandings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredResults = useMemo(() => {
    return resultsData.filter(
      (event) =>
        event.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  const filteredRankings = useMemo(() => {
    return nationalRankings.filter(
      (athlete) =>
        (selectedCategory === "All" || athlete.category === selectedCategory) &&
        (athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          athlete.club.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  }, [searchTerm, selectedCategory]);

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

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
            <span className="text-sky-300 font-semibold">
              COMPETITION RESULTS
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
            Results & Standings
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Explore past competition results and view national rankings
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        {/* Search and Filters */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {filteredResults.length > 0 ? (
            filteredResults.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onViewDetails={handleViewDetails}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-2 text-center py-12 bg-gray-900/50 rounded-2xl border border-gray-800"
            >
              <div className="text-6xl mb-4">🥊</div>
              <h3 className="text-xl font-bold text-white mb-2">
                No Events Found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search criteria.
              </p>
            </motion.div>
          )}
        </motion.div>
      </main>

      {/* Event Details Modal */}
      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedEvent(null);
          }}
        />
      )}

      <Footer />

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(56, 189, 248, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(56, 189, 248, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ResultsAndStandings;
