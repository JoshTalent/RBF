"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Heart, 
  X, 
  Search, 
  Image, 
  Video, 
  Layers,
  Calendar,
  Eye,
  Download,
  Share2,
  Filter,
  ZoomIn,
  Clock,
  User,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  List,
  Star // Fixed: Added Star import
} from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { robot, bill, abc } from "../../assets";

const filterIcons = {
  All: <Layers size={18} />,
  Images: <Image size={18} />,
  Videos: <Video size={18} />,
};

const filters = ["All", "Images", "Videos"];

const postsData = [
  {
    id: 1,
    title: "National Boxing Championship 2025 Finals",
    description: "The electrifying final match of the national boxing championship featuring Rwanda's top contenders in an unforgettable display of skill and determination.",
    date: "2025-08-28",
    likes: 245,
    views: 1250,
    image: abc,
    type: "image",
    category: "Championship",
    tags: ["Finals", "National", "Championship", "Elite"],
    photographer: "James Photography",
    location: "Kigali Arena",
    featured: true
  },
  {
    id: 2,
    title: "Elite Training Camp Highlights",
    description: "Behind the scenes of our intensive training camp where national team boxers prepare for international competitions with world-class coaching.",
    date: "2025-08-20",
    likes: 187,
    views: 890,
    image: bill,
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Training",
    tags: ["Training", "Technique", "Fitness", "Coaching"],
    duration: "2:45",
    featured: false
  },
  {
    id: 3,
    title: "Champions Award Ceremony Gala",
    description: "Celebrating the outstanding achievements of our boxing champions in a grand ceremony attended by sports dignitaries and fans.",
    date: "2025-08-15",
    likes: 312,
    views: 2100,
    image: robot,
    type: "image",
    category: "Ceremony",
    tags: ["Awards", "Celebration", "Champions", "Gala"],
    photographer: "Sarah Visuals",
    location: "Kigali Convention Center",
    featured: true
  },
  {
    id: 4,
    title: "Youth Development Program Session",
    description: "Young aspiring boxers learning fundamental skills in our youth development program, shaping the future of Rwandan boxing.",
    date: "2025-08-10",
    likes: 134,
    views: 670,
    image: abc,
    type: "image",
    category: "Youth",
    tags: ["Youth", "Development", "Future", "Training"],
    photographer: "Mike Studios",
    location: "Rubavu Sports Complex",
    featured: false
  },
  {
    id: 5,
    title: "International Sparring Session",
    description: "Rwandan boxers sparring with international partners, showcasing technical exchange and cultural collaboration in sports.",
    date: "2025-08-05",
    likes: 198,
    views: 1100,
    image: bill,
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "International",
    tags: ["International", "Sparring", "Technique", "Partnership"],
    duration: "4:20",
    featured: true
  },
  {
    id: 6,
    title: "Women's Boxing Championship",
    description: "Empowering women in sports through competitive boxing. Showcasing talent and determination in the women's championship series.",
    date: "2025-07-28",
    likes: 276,
    views: 1580,
    image: robot,
    type: "image",
    category: "Women",
    tags: ["Women", "Empowerment", "Championship", "Sports"],
    photographer: "Grace Photography",
    location: "Amahoro Stadium",
    featured: true
  }
];

const categories = ["All", "Championship", "Training", "Ceremony", "Youth", "International", "Women"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());

  // Filtering with search and multiple criteria
  const filteredPosts = useMemo(() => {
    return postsData.filter((post) => {
      const matchesFilter = filter === "All" ? true : post.type === filter.toLowerCase();
      const matchesCategory = categoryFilter === "All" ? true : post.category === categoryFilter;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesFilter && matchesCategory && matchesSearch;
    }).sort((a, b) => {
      switch(sortBy) {
        case "newest": return new Date(b.date) - new Date(a.date);
        case "oldest": return new Date(a.date) - new Date(b.date);
        case "popular": return b.likes - a.likes;
        case "views": return b.views - a.views;
        default: return 0;
      }
    });
  }, [filter, categoryFilter, searchQuery, sortBy]);

  const toggleLike = (postId) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  const toggleBookmark = (postId) => {
    const newBookmarked = new Set(bookmarkedPosts);
    if (newBookmarked.has(postId)) {
      newBookmarked.delete(postId);
    } else {
      newBookmarked.add(postId);
    }
    setBookmarkedPosts(newBookmarked);
  };

  const particles = Array.from({ length: 30 });

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
              <Image className="w-5 h-5 text-sky-400" />
              <span className="text-sky-300 font-semibold">MEDIA GALLERY</span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
              Boxing Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in the world of Rwandan boxing through our curated collection of championship moments, training sessions, and behind-the-scenes content.
            </p>
          </motion.div>

          {/* Enhanced Search and Filters Section */}
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
                placeholder="Search posts, tags, or descriptions..."
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
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="pl-10 pr-8 py-4 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Liked</option>
                <option value="views">Most Views</option>
              </select>

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

          {/* Type Filter Buttons */}
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
                className={`flex items-center gap-3 px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
                  filter === f
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 scale-105"
                    : "bg-black/50 border border-gray-700 text-gray-300 hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-500/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterIcons[f]}
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
              Showing <span className="text-white font-semibold">{filteredPosts.length}</span> posts
              {categoryFilter !== "All" && ` in ${categoryFilter}`}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Eye size={16} />
              <span>Total Views: {filteredPosts.reduce((sum, post) => sum + post.views, 0).toLocaleString()}</span>
            </div>
          </motion.div>

          {/* Enhanced Posts Grid/List */}
          <AnimatePresence mode="wait">
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">📷</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Posts Found</h3>
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
                {filteredPosts.map((post, idx) => (
                  <GalleryCard 
                    key={post.id} 
                    post={post} 
                    index={idx}
                    onSelect={setSelected}
                    onLike={toggleLike}
                    onBookmark={toggleBookmark}
                    isLiked={likedPosts.has(post.id)}
                    isBookmarked={bookmarkedPosts.has(post.id)}
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
                {filteredPosts.map((post, idx) => (
                  <GalleryListItem 
                    key={post.id} 
                    post={post} 
                    index={idx}
                    onSelect={setSelected}
                    onLike={toggleLike}
                    onBookmark={toggleBookmark}
                    isLiked={likedPosts.has(post.id)}
                    isBookmarked={bookmarkedPosts.has(post.id)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Modal / Lightbox */}
        <AnimatePresence>
          {selected && (
            <GalleryModal 
              post={selected} 
              onClose={() => setSelected(null)}
              onLike={toggleLike}
              onBookmark={toggleBookmark}
              isLiked={likedPosts.has(selected.id)}
              isBookmarked={bookmarkedPosts.has(selected.id)}
            />
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </>
  );
};

// Enhanced Gallery Card Component
const GalleryCard = ({ post, index, onSelect, onLike, onBookmark, isLiked, isBookmarked }) => {
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
      {post.featured && (
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
      )}
      
      <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border ${
        post.featured ? 'border-yellow-500/50' : 'border-gray-800'
      } overflow-hidden transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-2xl group-hover:shadow-sky-500/20`}>
        
        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold backdrop-blur-sm">
            <Star size={12} />
            <span>Featured</span>
          </div>
        )}

        {/* Media Container */}
        <div 
          className="relative h-80 overflow-hidden cursor-pointer"
          onClick={() => onSelect(post)}
        >
          {post.type === "image" ? (
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700"
              animate={{ scale: isHovered ? 1.1 : 1 }}
            />
          ) : (
            <div className="relative w-full h-full">
              <video
                src={post.src}
                muted
                loop
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
                animate={{ opacity: isHovered ? 0 : 1 }}
              >
                <Play className="w-16 h-16 text-white opacity-80" />
              </motion.div>
            </div>
          )}
          
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
                  onClick={(e) => { e.stopPropagation(); onSelect(post); }}
                >
                  <ZoomIn size={20} />
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
                    onClick={(e) => { e.stopPropagation(); onLike(post.id); }}
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
                    onClick={(e) => { e.stopPropagation(); onBookmark(post.id); }}
                  >
                    <Bookmark size={20} className={isBookmarked ? "fill-current" : ""} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video Duration */}
          {post.type === "video" && (
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-semibold">
              {post.duration}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors flex-1 pr-4 line-clamp-2">
              {post.title}
            </h3>
            <span className="px-2 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full border border-sky-500/30 whitespace-nowrap">
              {post.category}
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={14} />
                <span>{post.views}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Heart size={14} className={isLiked ? "text-red-400 fill-current" : ""} />
              <span>{post.likes + (isLiked ? 1 : 0)}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {post.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Gallery List Item Component for List View
const GalleryListItem = ({ post, index, onSelect, onLike, onBookmark, isLiked, isBookmarked }) => {
  return (
    <motion.div
      className="flex gap-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6 hover:border-sky-500/50 transition-all duration-300 group cursor-pointer"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onSelect(post)}
    >
      {/* Thumbnail */}
      <div className="relative w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
        {post.type === "image" ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="relative w-full h-full">
            <video
              src={post.src}
              muted
              loop
              className="w-full h-full object-cover"
            />
            <Play className="absolute inset-0 m-auto w-8 h-8 text-white opacity-70" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 flex-1 pr-4">
            {post.title}
          </h3>
          <div className="flex gap-2">
            <motion.button
              className={`p-2 rounded-lg transition-all ${
                isLiked ? "text-red-400" : "text-gray-400 hover:text-red-400"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); onLike(post.id); }}
            >
              <Heart size={18} className={isLiked ? "fill-current" : ""} />
            </motion.button>
            <motion.button
              className={`p-2 rounded-lg transition-all ${
                isBookmarked ? "text-yellow-400" : "text-gray-400 hover:text-yellow-400"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); onBookmark(post.id); }}
            >
              <Bookmark size={18} className={isBookmarked ? "fill-current" : ""} />
            </motion.button>
          </div>
        </div>

        <p className="text-gray-400 mb-3 line-clamp-2">
          {post.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="px-2 py-1 bg-sky-500/20 text-sky-400 rounded-full text-xs">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={14} />
              <span>{post.views} views</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Heart size={14} className={isLiked ? "text-red-400 fill-current" : ""} />
              <span>{post.likes + (isLiked ? 1 : 0)}</span>
            </div>
            {post.type === "video" && (
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.duration}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Modal Component
const GalleryModal = ({ post, onClose, onLike, onBookmark, isLiked, isBookmarked }) => {
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
          <h2 className="text-2xl font-bold text-white">{post.title}</h2>
          <div className="flex items-center gap-3">
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); onLike(post.id); }}
            >
              <Heart size={20} className={isLiked ? "text-red-400 fill-current" : ""} />
            </motion.button>
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); onBookmark(post.id); }}
            >
              <Bookmark size={20} className={isBookmarked ? "text-yellow-400 fill-current" : ""} />
            </motion.button>
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Share2 size={20} />
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
              {/* Media Section */}
              <div className="relative">
                {post.type === "image" ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                ) : (
                  <video
                    src={post.src}
                    controls
                    autoPlay
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                )}
              </div>

              {/* Details Section */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-sky-400 mb-2">Description</h3>
                  <p className="text-gray-300 leading-relaxed">{post.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Category</h4>
                    <p className="text-white">{post.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Date</h4>
                    <p className="text-white">{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                  {post.photographer && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Photographer</h4>
                      <p className="text-white flex items-center gap-1">
                        <User size={14} />
                        {post.photographer}
                      </p>
                    </div>
                  )}
                  {post.location && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Location</h4>
                      <p className="text-white">{post.location}</p>
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="flex gap-6 py-4 border-y border-gray-800">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{post.views}</div>
                    <div className="text-sm text-gray-400">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{post.likes + (isLiked ? 1 : 0)}</div>
                    <div className="text-sm text-gray-400">Likes</div>
                  </div>
                  {post.type === "video" && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{post.duration}</div>
                      <div className="text-sm text-gray-400">Duration</div>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
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
                  >
                    <Download size={18} />
                    Download
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

export default Gallery;