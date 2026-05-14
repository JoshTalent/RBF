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
  Grid3X3,
  List,
  Star,
  ArrowRight,
  TrendingUp,
  Share,
  Maximize2
} from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";

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
    description:
      "The electrifying final match of the national boxing championship featuring Rwanda's top contenders in an unforgettable display of skill and determination.",
    date: "2025-08-28",
    likes: 245,
    views: 1250,
    image: "https://i.postimg.cc/268gB9Nn/valentin3.jpg",
    type: "image",
    category: "Championship",
    tags: ["Finals", "National", "Championship", "Elite"],
    photographer: "James Photography",
    location: "Kigali Arena",
    featured: true,
  },
  {
    id: 2,
    title: "Elite Training Camp Highlights",
    description:
      "Behind the scenes of our intensive training camp where national team boxers prepare for international competitions with world-class coaching.",
    date: "2025-08-20",
    likes: 187,
    views: 890,
    image: "https://i.postimg.cc/CK4W5TX5/frank2.jpg",
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Training",
    tags: ["Training", "Technique", "Fitness", "Coaching"],
    duration: "2:45",
    featured: false,
  },
  {
    id: 3,
    title: "Champions Award Ceremony Gala",
    description:
      "Celebrating the outstanding achievements of our boxing champions in a grand ceremony attended by sports dignitaries and fans.",
    date: "2025-08-15",
    likes: 312,
    views: 2100,
    image: "https://i.postimg.cc/vBHC62wH/valentin.jpg",
    type: "image",
    category: "Ceremony",
    tags: ["Awards", "Celebration", "Champions", "Gala"],
    photographer: "Sarah Visuals",
    location: "Kigali Convention Center",
    featured: true,
  },
  {
    id: 4,
    title: "Youth Development Program Session",
    description:
      "Young aspiring boxers learning fundamental skills in our youth development program, shaping the future of Rwandan boxing.",
    date: "2025-08-10",
    likes: 134,
    views: 670,
    image: "https://i.postimg.cc/RFV2npxf/valentin4.jpg",
    type: "image",
    category: "Youth",
    tags: ["Youth", "Development", "Future", "Training"],
    photographer: "Mike Studios",
    location: "Rubavu Sports Complex",
    featured: false,
  },
  {
    id: 5,
    title: "International Sparring Session",
    description:
      "Rwandan boxers sparring with international partners, showcasing technical exchange and cultural collaboration in sports.",
    date: "2025-08-05",
    likes: 198,
    views: 1100,
    image: "https://i.postimg.cc/RFV2npxf/valentin.jpg",
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "International",
    tags: ["International", "Sparring", "Technique", "Partnership"],
    duration: "4:20",
    featured: true,
  },
  {
    id: 6,
    title: "Women's Boxing Championship",
    description:
      "Empowering women in sports through competitive boxing. Showcasing talent and determination in the women's championship series.",
    date: "2025-07-28",
    likes: 276,
    views: 1580,
    image:"https://i.postimg.cc/7h5cKC6w/Heros3.jpg",
    type: "image",
    category: "Women",
    tags: ["Women", "Empowerment", "Championship", "Sports"],
    photographer: "Grace Photography",
    location: "Amahoro Stadium",
    featured: true,
  },
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


  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-[#050505] text-white selection:bg-sky-500/30">
        {/* Minimalist Ambient Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          {/* Professional Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-[1px] w-8 bg-sky-500" />
              <span className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.2em]">Media Archive</span>
            </motion.div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
                >
                  Visual <span className="text-white/40 font-light italic">Storytelling</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-sm text-white/40 leading-relaxed max-w-lg"
                >
                  Capturing the intensity, technical mastery, and cultural heritage of Rwandan boxing through professional cinematography.
                </motion.p>
              </div>

              {/* Minimalist Search */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative w-full md:w-80"
              >
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input
                  type="text"
                  placeholder="Filter by title, tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-sky-500/50 transition-all"
                />
              </motion.div>
            </div>
          </div>

          {/* Clean Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 py-4 border-y border-white/5">
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                    filter === f 
                      ? "bg-sky-500 text-white" 
                      : "text-white/40 hover:text-white/60 hover:bg-white/5"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Sort By</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-[10px] font-bold text-white uppercase focus:outline-none cursor-pointer"
                >
                  <option className="bg-[#0A0A0A]" value="newest">Latest</option>
                  <option className="bg-[#0A0A0A]" value="popular">Most Liked</option>
                  <option className="bg-[#0A0A0A]" value="views">Most Views</option>
                </select>
              </div>

              <div className="h-4 w-[1px] bg-white/10" />

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 transition-colors ${viewMode === "grid" ? "text-sky-500" : "text-white/20 hover:text-white/40"}`}
                >
                  <Grid3X3 size={16} />
                </button>
                <button 
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 transition-colors ${viewMode === "list" ? "text-sky-500" : "text-white/20 hover:text-white/40"}`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Editorial Bento Grid */}
          <AnimatePresence mode="wait">
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-white/20 text-sm font-medium tracking-widest uppercase">No Visuals Found</p>
              </motion.div>
            ) : (
              <motion.div
                key={viewMode}
                className={viewMode === "grid" 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]" 
                  : "flex flex-col gap-4"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {filteredPosts.map((post, idx) => (
                  viewMode === "grid" ? (
                    <GalleryCard 
                      key={post.id} 
                      post={post} 
                      onSelect={setSelected}
                      className={
                        idx % 7 === 0 ? "lg:col-span-2 lg:row-span-2" : 
                        idx % 7 === 3 ? "lg:col-span-2" : ""
                      }
                    />
                  ) : (
                    <GalleryListItem 
                      key={post.id} 
                      post={post} 
                      onSelect={setSelected}
                    />
                  )
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

// Advanced Gallery Card Component
const GalleryCard = ({ post, onSelect, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative group cursor-pointer h-full ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onSelect(post)}
    >
      <div className="relative h-full w-full bg-[#0A0A0A] rounded-xl overflow-hidden border border-white/5 transition-all duration-500 group-hover:border-white/20 shadow-2xl">
        <div className="absolute inset-0 z-0">
          {post.type === "image" ? (
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
            />
          ) : (
            <div className="relative h-full w-full">
              <video src={post.src} muted loop className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                  <Play size={24} className="text-white fill-current translate-x-0.5" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-10" />

        {/* Metadata Content */}
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end transform transition-transform duration-500">
          <motion.div 
            initial={false}
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-sky-500 text-[8px] font-black text-white rounded uppercase tracking-[0.2em]">
                {post.category}
              </span>
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest flex items-center gap-1">
                <Calendar size={10} /> {new Date(post.date).getFullYear()}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-sky-300 transition-colors">
              {post.title}
            </h3>
            
            <div className="flex items-center gap-4 text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">
              <span className="flex items-center gap-1.5"><Eye size={12} className="text-sky-500/50" /> {post.views}</span>
              <span className="flex items-center gap-1.5"><Heart size={12} className="text-red-500/50" /> {post.likes}</span>
            </div>
          </motion.div>
        </div>

        {/* Advanced View Indicator */}
        <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-2xl rounded-lg border border-white/20">
            <span className="text-[8px] font-black text-white uppercase tracking-widest">Explore</span>
            <Maximize2 size={12} className="text-white/60" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Advanced Gallery List Item Component
const GalleryListItem = ({ post, onSelect }) => {
  return (
    <motion.div
      className="flex items-center gap-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group cursor-pointer"
      onClick={() => onSelect(post)}
    >
      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
        <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[9px] font-bold text-sky-500 uppercase tracking-widest">{post.category}</span>
          <div className="w-1 h-1 rounded-full bg-white/10" />
          <span className="text-[9px] font-medium text-white/40 uppercase tracking-widest">{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <h3 className="text-base font-bold text-white truncate mb-1">{post.title}</h3>
        <p className="text-xs text-white/40 truncate">{post.description}</p>
      </div>

      <div className="flex items-center gap-6 px-6 border-l border-white/5">
        <div className="flex flex-col items-center">
          <span className="text-lg font-black text-white leading-none">{post.views}</span>
          <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">Views</span>
        </div>
        <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
      </div>
    </motion.div>
  );
};

// Advanced Gallery Modal Component (Lightbox)
const GalleryModal = ({ post, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#050505]/95 z-[100] backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-6xl h-full flex flex-col md:flex-row bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Media View */}
        <div className="flex-1 relative bg-black flex items-center justify-center p-4">
          {post.type === "image" ? (
            <img src={post.image} className="max-w-full max-h-full object-contain rounded shadow-2xl" alt={post.title} />
          ) : (
            <video src={post.src} controls autoPlay className="max-w-full max-h-full rounded" />
          )}

          {/* Floating Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Info Panel */}
        <div className="w-full md:w-80 bg-[#0D0D0D] border-l border-white/5 flex flex-col h-full">
          <div className="p-6 border-b border-white/5">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 bg-sky-500 text-[9px] font-black text-white rounded uppercase tracking-[0.2em]">
                {post.category}
              </span>
              <span className="text-[10px] font-medium text-white/40 flex items-center gap-1">
                <Clock size={12} /> {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white leading-tight mb-4">{post.title}</h2>
            <p className="text-xs text-white/40 leading-relaxed font-light mb-6">
              {post.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <span className="block text-[8px] font-bold text-white/20 uppercase mb-1">Views</span>
                <span className="text-sm font-black text-white">{post.views.toLocaleString()}</span>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <span className="block text-[8px] font-bold text-white/20 uppercase mb-1">Appreciation</span>
                <span className="text-sm font-black text-white">{post.likes.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
            <section className="mb-8">
              <h4 className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.2em] mb-4">Metadata</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/30">Photographer</span>
                  <span className="text-white/80 font-medium">{post.photographer || "Staff Media"}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/30">Location</span>
                  <span className="text-white/80 font-medium">{post.location || "Arena"}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/30">Format</span>
                  <span className="text-white/80 font-medium uppercase">{post.type}</span>
                </div>
              </div>
            </section>

            <section>
              <h4 className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.2em] mb-4">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-white/[0.03] border border-white/5 rounded text-[9px] font-bold text-white/40 uppercase tracking-wider">
                    #{tag}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="p-6 mt-auto border-t border-white/5 flex items-center justify-between gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-sky-500 hover:bg-sky-600 rounded-lg text-xs font-bold text-white transition-all">
              <Download size={14} /> Download
            </button>
            <button className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-all">
              <Share2 size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;