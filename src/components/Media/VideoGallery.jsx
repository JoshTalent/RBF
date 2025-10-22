"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Heart, 
  X, 
  Search, 
  Download, 
  Expand,
  Calendar,
  Eye,
  Clock,
  Users,
  Award,
  Filter,
  Grid3X3,
  List,
  Share2,
  Bookmark,
  Star,
  ChevronRight,
  ThumbsUp,
  Zap
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const filters = ["All", "Amateur", "Professional", "Championship", "Training", "International"];

const matchesData = [
  {
    id: 1,
    title: "National Boxing Championship 2025 Finals",
    description: "The electrifying final match of the national boxing championship featuring Rwanda's top contenders in an unforgettable display of skill and determination.",
    date: "2025-08-28",
    likes: 2450,
    views: 12500,
    type: "Professional",
    category: "Championship",
    duration: "15:30",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500&h=300&fit=crop",
    featured: true,
    boxers: ["Eric Ndayishimiye", "Jean Uwimana"],
    weightClass: "Lightweight",
    tags: ["Finals", "Championship", "Knockout", "Elite"],
    rating: 4.8
  },
  {
    id: 2,
    title: "Elite Training Camp Session",
    description: "Behind the scenes of our intensive training camp where national team boxers prepare for international competitions with world-class coaching techniques.",
    date: "2025-08-20",
    likes: 1870,
    views: 8900,
    type: "Amateur",
    category: "Training",
    duration: "8:45",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1599058917765-780d56d1beb3?w=500&h=300&fit=crop",
    featured: false,
    boxers: ["National Team Squad"],
    weightClass: "Multiple",
    tags: ["Training", "Technique", "Fitness", "Coaching"],
    rating: 4.6
  },
  {
    id: 3,
    title: "International Boxing Gala Night",
    description: "Celebrating the outstanding achievements of our boxing champions in a grand ceremony attended by sports dignitaries and international fans.",
    date: "2025-08-15",
    likes: 3120,
    views: 21000,
    type: "Professional",
    category: "International",
    duration: "22:15",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=300&fit=crop",
    featured: true,
    boxers: ["David Johnson", "Michael Smith"],
    weightClass: "Heavyweight",
    tags: ["International", "Gala", "Awards", "Celebration"],
    rating: 4.9
  },
  {
    id: 4,
    title: "Youth Development Tournament",
    description: "Young aspiring boxers showcasing their skills in the youth development tournament, shaping the future of Rwandan boxing talent.",
    date: "2025-08-10",
    likes: 1340,
    views: 6700,
    type: "Amateur",
    category: "Training",
    duration: "12:20",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1596704013025-1c0b1a9c6a2c?w=500&h=300&fit=crop",
    featured: false,
    boxers: ["Youth Team"],
    weightClass: "Various",
    tags: ["Youth", "Development", "Future", "Talent"],
    rating: 4.5
  },
  {
    id: 5,
    title: "East African Championship Semi-Finals",
    description: "Intense semi-final matches from the East African Boxing Championship featuring regional champions competing for continental glory.",
    date: "2025-08-05",
    likes: 2980,
    views: 15800,
    type: "Professional",
    category: "International",
    duration: "18:45",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    featured: true,
    boxers: ["Regional Champions"],
    weightClass: "Multiple",
    tags: ["Semi-Finals", "East Africa", "Regional", "Championship"],
    rating: 4.7
  },
  {
    id: 6,
    title: "Women's Boxing Championship Highlights",
    description: "Empowering women in sports through competitive boxing. Showcasing talent and determination in the women's championship series.",
    date: "2025-07-28",
    likes: 2760,
    views: 14500,
    type: "Professional",
    category: "Championship",
    duration: "14:30",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1549060279-7e168fce7090?w=500&h=300&fit=crop",
    featured: true,
    boxers: ["Women's Division"],
    weightClass: "Various",
    tags: ["Women", "Empowerment", "Championship", "Highlights"],
    rating: 4.8
  }
];

const VideoGallery = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [bookmarkedVideos, setBookmarkedVideos] = useState(new Set());

  const filteredMatches = useMemo(() => {
    return matchesData.filter((match) => {
      const matchesFilter = filter === "All" ? true : match.type === filter;
      const matchesSearch = match.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           match.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           match.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesFilter && matchesSearch;
    }).sort((a, b) => {
      switch(sortBy) {
        case "newest": return new Date(b.date) - new Date(a.date);
        case "oldest": return new Date(a.date) - new Date(b.date);
        case "popular": return b.views - a.views;
        case "likes": return b.likes - a.likes;
        case "rating": return b.rating - a.rating;
        default: return 0;
      }
    });
  }, [filter, searchQuery, sortBy]);

  const toggleLike = (videoId) => {
    const newLiked = new Set(likedVideos);
    if (newLiked.has(videoId)) {
      newLiked.delete(videoId);
    } else {
      newLiked.add(videoId);
    }
    setLikedVideos(newLiked);
  };

  const toggleBookmark = (videoId) => {
    const newBookmarked = new Set(bookmarkedVideos);
    if (newBookmarked.has(videoId)) {
      newBookmarked.delete(videoId);
    } else {
      newBookmarked.add(videoId);
    }
    setBookmarkedVideos(newBookmarked);
  };

  const particles = Array.from({ length: 30 });

  const handleDownload = async (url, title) => {
    try {
      const response = await fetch(url, { mode: "cors" });
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${title}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed", error);
      alert("Download failed. Try again later.");
    }
  };

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Enhanced Background Particles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-sky-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent" />
          
          {particles.map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-sky-500/30 to-blue-500/30 blur-xl"
              style={{
                width: `${8 + Math.random() * 20}px`,
                height: `${8 + Math.random() * 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 30 + Math.random() * 30, 0],
                x: [0, 20 + Math.random() * 20, 0],
                opacity: [0.1, 0.8, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          {/* Enhanced Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 bg-sky-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-sky-500/30 mb-6"
            >
              <Play className="w-5 h-5 text-sky-400" />
              <span className="text-sky-300 font-semibold">BOXING MATCHES</span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
              Match Videos
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the intensity and skill of Rwanda's finest boxers through our comprehensive collection of professional and amateur match videos.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.section 
            className="py-12 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "50K+", label: "Total Views", icon: <Eye className="w-6 h-6" /> },
                { number: "10K+", label: "Likes", icon: <ThumbsUp className="w-6 h-6" /> },
                { number: "4.7", label: "Avg Rating", icon: <Star className="w-6 h-6" /> },
                { number: "150+", label: "Matches", icon: <Award className="w-6 h-6" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-sky-500/50 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-sky-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Enhanced Search and Filters */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-6 mb-12 bg-black/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search matches, boxers, or tags..."
                className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 backdrop-blur-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters Group */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-10 pr-8 py-4 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Viewed</option>
                  <option value="likes">Most Liked</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <div className="flex gap-2">
                <motion.button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-xl border transition-all ${
                    viewMode === "grid" 
                      ? "bg-sky-500/20 border-sky-500 text-sky-400" 
                      : "bg-black/50 border-gray-700 text-gray-400 hover:border-sky-500/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid3X3 size={20} />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-xl border transition-all ${
                    viewMode === "list" 
                      ? "bg-sky-500/20 border-sky-500 text-sky-400" 
                      : "bg-black/50 border-gray-700 text-gray-400 hover:border-sky-500/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <List size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
                  filter === f
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 scale-105"
                    : "bg-black/50 border border-gray-700 text-gray-300 hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-500/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {f === "Professional" && <Award size={16} />}
                {f === "Amateur" && <Users size={16} />}
                {f === "Championship" && <Zap size={16} />}
                {f}
              </motion.button>
            ))}
          </motion.div>

          {/* Results Count */}
          <motion.div 
            className="mb-8 flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredMatches.length}</span> matches
              {filter !== "All" && ` in ${filter}`}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Eye size={16} />
              <span>Total Views: {filteredMatches.reduce((sum, match) => sum + match.views, 0).toLocaleString()}</span>
            </div>
          </motion.div>

          {/* Enhanced Matches Grid/List */}
          <AnimatePresence mode="wait">
            {filteredMatches.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🥊</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Matches Found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </motion.div>
            ) : viewMode === "grid" ? (
              <motion.div
                key="grid-view"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredMatches.map((match, idx) => (
                  <VideoCard 
                    key={match.id} 
                    match={match} 
                    index={idx}
                    onSelect={setSelected}
                    onLike={toggleLike}
                    onBookmark={toggleBookmark}
                    onDownload={handleDownload}
                    isLiked={likedVideos.has(match.id)}
                    isBookmarked={bookmarkedVideos.has(match.id)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list-view"
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredMatches.map((match, idx) => (
                  <VideoListItem 
                    key={match.id} 
                    match={match} 
                    index={idx}
                    onSelect={setSelected}
                    onLike={toggleLike}
                    onBookmark={toggleBookmark}
                    onDownload={handleDownload}
                    isLiked={likedVideos.has(match.id)}
                    isBookmarked={bookmarkedVideos.has(match.id)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Modal / Lightbox */}
        <AnimatePresence>
          {selected && (
            <VideoModal 
              match={selected} 
              onClose={() => setSelected(null)}
              onLike={toggleLike}
              onBookmark={toggleBookmark}
              onDownload={handleDownload}
              isLiked={likedVideos.has(selected.id)}
              isBookmarked={bookmarkedVideos.has(selected.id)}
            />
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </>
  );
};

// Enhanced Video Card Component
const VideoCard = ({ match, index, onSelect, onLike, onBookmark, onDownload, isLiked, isBookmarked }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      {match.featured && (
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
      )}
      
      <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border ${
        match.featured ? 'border-yellow-500/50' : 'border-gray-800'
      } overflow-hidden transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-2xl group-hover:shadow-sky-500/20`}>
        
        {/* Featured Badge */}
        {match.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold backdrop-blur-sm">
            <Star size={12} />
            <span>Featured</span>
          </div>
        )}

        {/* Video Thumbnail */}
        <div 
          className="relative h-48 overflow-hidden cursor-pointer"
          onClick={() => onSelect(match)}
        >
          <motion.img
            src={match.thumbnail}
            alt={match.title}
            className="w-full h-full object-cover transition-transform duration-700"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          />
          <motion.div
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
            animate={{ opacity: isHovered ? 0 : 1 }}
          >
            <Play className="w-16 h-16 text-white opacity-80" />
          </motion.div>
          
          {/* Overlay with Actions */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-between items-center">
                <motion.button
                  className="p-2 bg-black/60 backdrop-blur-sm rounded-lg text-white hover:bg-sky-500 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => { e.stopPropagation(); onSelect(match); }}
                >
                  <Expand size={20} />
                </motion.button>
                <div className="flex gap-2">
                  <motion.button
                    className={`p-2 rounded-lg backdrop-blur-sm border transition-all ${
                      isLiked 
                        ? "bg-red-500/20 border-red-500 text-red-400" 
                        : "bg-black/60 border-gray-600 text-gray-400 hover:border-red-500 hover:text-red-400"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); onLike(match.id); }}
                  >
                    <Heart size={20} className={isLiked ? "fill-current" : ""} />
                  </motion.button>
                  <motion.button
                    className={`p-2 rounded-lg backdrop-blur-sm border transition-all ${
                      isBookmarked 
                        ? "bg-yellow-500/20 border-yellow-500 text-yellow-400" 
                        : "bg-black/60 border-gray-600 text-gray-400 hover:border-yellow-500 hover:text-yellow-400"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); onBookmark(match.id); }}
                  >
                    <Bookmark size={20} className={isBookmarked ? "fill-current" : ""} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Duration */}
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-semibold">
            {match.duration}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors flex-1 pr-4 line-clamp-2">
              {match.title}
            </h3>
            <span className="px-2 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full border border-sky-500/30 whitespace-nowrap">
              {match.type}
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {match.description}
          </p>

          {/* Boxers */}
          <div className="flex items-center gap-2 mb-3">
            <Users size={14} className="text-gray-400" />
            <span className="text-sm text-gray-300">{match.boxers.join(" vs ")}</span>
          </div>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{new Date(match.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={14} />
                <span>{(match.views / 1000).toFixed(1)}K</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Heart size={14} className={isLiked ? "text-red-400 fill-current" : ""} />
              <span>{(match.likes / 1000).toFixed(1)}K</span>
            </div>
          </div>

          {/* Rating and Weight Class */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-400 fill-current" />
              <span className="text-sm text-gray-300">{match.rating}</span>
            </div>
            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
              {match.weightClass}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Video List Item Component for List View
const VideoListItem = ({ match, index, onSelect, onLike, onBookmark, onDownload, isLiked, isBookmarked }) => {
  return (
    <motion.div
      className="flex gap-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6 hover:border-sky-500/50 transition-all duration-300 group cursor-pointer"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onSelect(match)}
    >
      {/* Thumbnail */}
      <div className="relative w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={match.thumbnail}
          alt={match.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="w-8 h-8 text-white" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-xs text-white font-semibold">
          {match.duration}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 flex-1 pr-4">
            {match.title}
          </h3>
          <div className="flex gap-2">
            <motion.button
              className={`p-2 rounded-lg transition-all ${
                isLiked ? "text-red-400" : "text-gray-400 hover:text-red-400"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); onLike(match.id); }}
            >
              <Heart size={18} className={isLiked ? "fill-current" : ""} />
            </motion.button>
            <motion.button
              className={`p-2 rounded-lg transition-all ${
                isBookmarked ? "text-yellow-400" : "text-gray-400 hover:text-yellow-400"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); onBookmark(match.id); }}
            >
              <Bookmark size={18} className={isBookmarked ? "fill-current" : ""} />
            </motion.button>
          </div>
        </div>

        <p className="text-gray-400 mb-3 line-clamp-2">
          {match.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="px-2 py-1 bg-sky-500/20 text-sky-400 rounded-full text-xs">
              {match.type}
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{new Date(match.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={14} />
              <span>{(match.views / 1000).toFixed(1)}K views</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Heart size={14} className={isLiked ? "text-red-400 fill-current" : ""} />
              <span>{(match.likes / 1000).toFixed(1)}K</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-400 fill-current" />
              <span>{match.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Modal Component
const VideoModal = ({ match, onClose, onLike, onBookmark, onDownload, isLiked, isBookmarked }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-6xl bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-black/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white">{match.title}</h2>
          <div className="flex items-center gap-3">
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); onLike(match.id); }}
            >
              <Heart size={20} className={isLiked ? "text-red-400 fill-current" : ""} />
            </motion.button>
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); onBookmark(match.id); }}
            >
              <Bookmark size={20} className={isBookmarked ? "text-yellow-400 fill-current" : ""} />
            </motion.button>
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); onDownload(match.src, match.title); }}
            >
              <Download size={20} />
            </motion.button>
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-red-500/20 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
            >
              <X size={20} />
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="max-h-[80vh] overflow-y-auto">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Video Section */}
              <div className="relative">
                <video
                  src={match.src}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Details Section */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-sky-400 mb-2">Match Description</h3>
                  <p className="text-gray-300 leading-relaxed">{match.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Boxers</h4>
                    <p className="text-white">{match.boxers.join(" vs ")}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Weight Class</h4>
                    <p className="text-white">{match.weightClass}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Date</h4>
                    <p className="text-white">{new Date(match.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Duration</h4>
                    <p className="text-white">{match.duration}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-6 py-4 border-y border-gray-800">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{(match.views / 1000).toFixed(1)}K</div>
                    <div className="text-sm text-gray-400">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{(match.likes / 1000).toFixed(1)}K</div>
                    <div className="text-sm text-gray-400">Likes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{match.rating}</div>
                    <div className="text-sm text-gray-400">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{match.type}</div>
                    <div className="text-sm text-gray-400">Type</div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {match.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <motion.button
                    className="flex-1 px-6 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => { e.stopPropagation(); onDownload(match.src, match.title); }}
                  >
                    <Download size={18} />
                    Download Match
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-sky-400 hover:text-sky-400 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Share2 size={18} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoGallery;