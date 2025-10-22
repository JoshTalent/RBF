import React, { useState, useMemo } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PlayCircle, 
  X, 
  FileText, 
  Newspaper, 
  Download, 
  Search,
  Calendar,
  Eye,
  Heart,
  Share2,
  Clock,
  Filter,
  Grid3X3,
  List,
  Star,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Image,
  Film,
  Users,
  Award,
  ChevronRight,
  BookOpen,
  Shield
} from "lucide-react";

const videoNews = [
  {
    id: 1,
    title: "National Boxing Championship 2025 Finals Highlights",
    thumbnail: "https://images.unsplash.com/photo-1602482067705-d6f0a7e796f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2025-08-20",
    views: 10240,
    likes: 2340,
    duration: "15:30",
    category: "Championship",
    description: "Relive the electrifying 2025 Boxing Championship finals featuring Rwanda's top contenders. Witness incredible knockouts, unexpected victories, and world-class performances in this comprehensive highlights package.",
    tags: ["Championship", "Finals", "Highlights", "Knockouts"],
    featured: true
  },
  {
    id: 2,
    title: "Michael 'The Rock' Smith Training Regimen",
    thumbnail: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2025-08-18",
    views: 8920,
    likes: 1560,
    duration: "8:45",
    category: "Training",
    description: "Go behind the scenes with Michael 'The Rock' Smith as he shares his intensive training routines, preparation techniques, and fitness secrets. Learn how a champion maintains peak performance.",
    tags: ["Training", "Technique", "Fitness", "Champion"],
    featured: false
  },
  {
    id: 3,
    title: "Top 10 Knockouts of the Season",
    thumbnail: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2025-08-15",
    views: 15320,
    likes: 3240,
    duration: "12:15",
    category: "Highlights",
    description: "Experience the most explosive knockouts of the boxing season. From lightning-fast combinations to powerful finishing moves, this compilation showcases the best of Rwandan boxing talent.",
    tags: ["Knockouts", "Highlights", "Season", "Power"],
    featured: true
  }
];

const pressResources = [
  {
    id: 1,
    title: "RBF Official Logo Pack",
    description: "Complete set of Rwanda Boxing Federation logos in multiple formats including PNG, SVG, and EPS for various media applications.",
    fileType: "ZIP",
    fileSize: "45 MB",
    downloads: 1240,
    category: "Branding",
    featured: true
  },
  {
    id: 2,
    title: "Media Guidelines & Brand Manual",
    description: "Comprehensive guide covering visual identity, brand tone, typography, color palette, and broadcast rights for media partners.",
    fileType: "PDF",
    fileSize: "12 MB",
    downloads: 890,
    category: "Guidelines",
    featured: true
  },
  {
    id: 3,
    title: "High-Resolution Photo Gallery",
    description: "Curated collection of professional high-resolution photographs featuring athletes, events, and training sessions.",
    fileType: "ZIP",
    fileSize: "280 MB",
    downloads: 1560,
    category: "Photography",
    featured: false
  },
  {
    id: 4,
    title: "Press Release Templates",
    description: "Official press release templates and media communication guidelines for accredited journalists and media houses.",
    fileType: "DOCX",
    fileSize: "8 MB",
    downloads: 670,
    category: "Templates",
    featured: false
  },
  {
    id: 5,
    title: "Athlete Biographies & Profiles",
    description: "Detailed biographies, career statistics, and professional profiles of Rwanda's top boxing athletes.",
    fileType: "PDF",
    fileSize: "6 MB",
    downloads: 980,
    category: "Profiles",
    featured: true
  },
  {
    id: 6,
    title: "Broadcast Quality B-Roll",
    description: "Professional B-roll footage for television and digital media featuring training sessions and event coverage.",
    fileType: "MP4",
    fileSize: "1.2 GB",
    downloads: 450,
    category: "Video",
    featured: false
  }
];

const categories = ["All", "Championship", "Training", "Highlights", "Interviews"];
const resourceCategories = ["All", "Branding", "Guidelines", "Photography", "Templates", "Profiles", "Video"];

const VideoCard = ({ video, onClick, onLike, isLiked }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      {video.featured && (
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
      )}
      
      <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border ${
        video.featured ? 'border-yellow-500/50' : 'border-gray-800'
      } overflow-hidden transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-2xl group-hover:shadow-sky-500/20`}>
        
        {/* Featured Badge */}
        {video.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold backdrop-blur-sm">
            <Star size={12} />
            <span>Featured</span>
          </div>
        )}

        {/* Thumbnail */}
        <div 
          className="relative h-48 overflow-hidden cursor-pointer"
          onClick={() => onClick(video.videoUrl)}
        >
          <motion.img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-700"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          />
          <motion.div
            className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <PlayCircle size={48} className="text-white" />
          </motion.div>
          
          {/* Duration */}
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-semibold">
            {video.duration}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors flex-1 pr-4 line-clamp-2">
              {video.title}
            </h3>
            <motion.button
              className={`p-2 rounded-lg transition-all ${
                isLiked ? "text-red-400" : "text-gray-400 hover:text-red-400"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); onLike(video.id); }}
            >
              <Heart size={20} className={isLiked ? "fill-current" : ""} />
            </motion.button>
          </div>

          <div className="flex items-center gap-4 mb-3">
            <span className="px-2 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full border border-sky-500/30">
              {video.category}
            </span>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <Calendar size={14} />
              <span>{new Date(video.date).toLocaleDateString()}</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {video.description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Eye size={14} />
                <span>{video.views.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart size={14} className={isLiked ? "text-red-400 fill-current" : ""} />
                <span>{video.likes + (isLiked ? 1 : 0)}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{video.duration}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {video.tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                #{tag}
              </span>
            ))}
            {video.tags.length > 2 && (
              <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                +{video.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ResourceCard = ({ resource }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getFileIcon = (fileType) => {
    switch(fileType) {
      case "PDF": return <FileText className="w-6 h-6 text-red-400" />;
      case "ZIP": return <Download className="w-6 h-6 text-yellow-400" />;
      case "DOCX": return <FileText className="w-6 h-6 text-blue-400" />;
      case "MP4": return <Film className="w-6 h-6 text-purple-400" />;
      default: return <FileText className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      {resource.featured && (
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
      )}
      
      <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border ${
        resource.featured ? 'border-yellow-500/50' : 'border-gray-800'
      } overflow-hidden transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-2xl group-hover:shadow-sky-500/20 p-6`}>
        
        {/* Featured Badge */}
        {resource.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold backdrop-blur-sm">
            <Star size={12} />
            <span>Featured</span>
          </div>
        )}

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {getFileIcon(resource.fileType)}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors mb-2 line-clamp-2">
              {resource.title}
            </h3>
            
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full border border-sky-500/30">
                {resource.category}
              </span>
              <span className="text-gray-400 text-xs">{resource.fileType} • {resource.fileSize}</span>
            </div>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {resource.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <Download size={14} />
                <span>{resource.downloads.toLocaleString()} downloads</span>
              </div>
              
              <motion.button
                className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                Download
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VideoModal = ({ videoUrl, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="relative w-full max-w-4xl mx-4"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
      >
        <X size={32} />
      </button>
      <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          src={videoUrl}
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </motion.div>
  </motion.div>
);

const PressKit = () => {
  const [activeTab, setActiveTab] = useState("news");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoFilter, setVideoFilter] = useState("All");
  const [resourceFilter, setResourceFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [likedVideos, setLikedVideos] = useState(new Set());

  const filteredVideos = useMemo(() => {
    return videoNews.filter((video) => {
      const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesFilter = videoFilter === "All" || video.category === videoFilter;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, videoFilter]);

  const filteredResources = useMemo(() => {
    return pressResources.filter((resource) => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = resourceFilter === "All" || resource.category === resourceFilter;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, resourceFilter]);

  const toggleLike = (videoId) => {
    const newLiked = new Set(likedVideos);
    if (newLiked.has(videoId)) {
      newLiked.delete(videoId);
    } else {
      newLiked.add(videoId);
    }
    setLikedVideos(newLiked);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-sky-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-28 text-center z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/40 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10 px-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-sky-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-sky-500/30 mb-6"
          >
            <Newspaper className="w-5 h-5 text-sky-400" />
            <span className="text-sky-300 font-semibold">MEDIA CENTER</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
            Media & Press
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access official media resources, video highlights, and press materials from the Rwanda Boxing Federation. Everything you need for comprehensive coverage.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 px-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Video Views", icon: <Eye className="w-8 h-8" /> },
              { number: "2.5K+", label: "Downloads", icon: <Download className="w-8 h-8" /> },
              { number: "150+", label: "Media Partners", icon: <Users className="w-8 h-8" /> },
              { number: "24/7", label: "Support", icon: <Shield className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-sky-500/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-sky-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="flex-grow py-16 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        {/* Tabs Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-2xl border border-gray-800">
            {[
              { id: "news", label: "News & Videos", icon: <Film className="w-4 h-4" /> },
              { id: "press", label: "Press Resources", icon: <FileText className="w-4 h-4" /> }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-6 mb-12 bg-black/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={`Search ${activeTab === 'news' ? 'videos' : 'resources'}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 backdrop-blur-sm transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <select
                value={activeTab === 'news' ? videoFilter : resourceFilter}
                onChange={(e) => activeTab === 'news' ? setVideoFilter(e.target.value) : setResourceFilter(e.target.value)}
                className="pl-10 pr-8 py-4 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
              >
                {(activeTab === 'news' ? categories : resourceCategories).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
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

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "news" ? (
            <motion.div
              key="news"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Results Count */}
              <div className="mb-8 flex justify-between items-center">
                <p className="text-gray-400">
                  Showing <span className="text-white font-semibold">{filteredVideos.length}</span> videos
                  {videoFilter !== "All" && ` in ${videoFilter}`}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Eye size={16} />
                  <span>Total Views: {filteredVideos.reduce((sum, video) => sum + video.views, 0).toLocaleString()}</span>
                </div>
              </div>

              {/* Videos Grid */}
              {filteredVideos.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🎥</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No Videos Found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                </motion.div>
              ) : (
                <div className={`grid gap-8 ${
                  viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                }`}>
                  {filteredVideos.map((video) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      onClick={setSelectedVideo}
                      onLike={toggleLike}
                      isLiked={likedVideos.has(video.id)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="press"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Results Count */}
              <div className="mb-8">
                <p className="text-gray-400">
                  Showing <span className="text-white font-semibold">{filteredResources.length}</span> resources
                  {resourceFilter !== "All" && ` in ${resourceFilter}`}
                </p>
              </div>

              {/* Resources Grid */}
              {filteredResources.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">📄</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No Resources Found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                </motion.div>
              ) : (
                <div className={`grid gap-6 ${
                  viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                }`}>
                  {filteredResources.map((resource) => (
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                    />
                  ))}
                </div>
              )}

              {/* Contact Information */}
              <motion.div 
                className="mt-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-sky-400 mb-6 text-center">Media Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <a href="mailto:media@rwandaboxing.rw" className="text-gray-300 hover:text-sky-400 transition-colors">
                      media@rwandaboxing.rw
                    </a>
                  </div>
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+250 788 123 456</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-red-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Office</h3>
                    <p className="text-gray-300">RBF Headquarters, Kigali</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>


      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
        <Footer />
    </div>
  );
};

export default PressKit;