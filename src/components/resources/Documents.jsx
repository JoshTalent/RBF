import React, { useState, useMemo } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Download, 
  Eye, 
  Search, 
  Filter,
  Calendar,
  User,
  Clock,
  BookOpen,
  Shield,
  Award,
  ChevronRight,
  Star,
  Grid3X3,
  List,
  FileCheck,
  FileSearch,
  Bookmark,
  Share2,
  Zap
} from "lucide-react";

const sampleDocuments = [
  {
    id: 1,
    title: "Official Membership Application Form",
    description: "Complete this comprehensive form to become an official registered member of the Rwanda Boxing Federation. Includes personal details, boxing experience, and membership category selection.",
    date: "2025-07-10",
    lastUpdated: "2025-07-01",
    fileUrl: "https://example.com/membership-form.pdf",
    fileSize: "2.4 MB",
    fileType: "PDF",
    category: "Membership",
    downloads: 1247,
    views: 2890,
    featured: true,
    required: true,
    tags: ["Membership", "Registration", "Official"],
    version: "2.1",
    author: "RBF Administration"
  },
  {
    id: 2,
    title: "Event Sanctioning & Approval Application",
    description: "Submit this detailed document for official event approval and sanctioning. Required for all boxing events seeking RBF recognition and official status.",
    date: "2025-06-02",
    lastUpdated: "2025-05-20",
    fileUrl: "https://example.com/event-sanctioning.pdf",
    fileSize: "3.8 MB",
    fileType: "PDF",
    category: "Events",
    downloads: 892,
    views: 1567,
    featured: true,
    required: true,
    tags: ["Events", "Sanctioning", "Approval"],
    version: "1.4",
    author: "RBF Events Committee"
  },
  {
    id: 3,
    title: "Coach License Renewal & Certification",
    description: "Required annual form for renewing your professional coach license certification. Includes continuing education requirements and performance review sections.",
    date: "2025-05-15",
    lastUpdated: "2025-04-28",
    fileUrl: "https://example.com/coach-renewal.pdf",
    fileSize: "1.9 MB",
    fileType: "PDF",
    category: "Coaching",
    downloads: 567,
    views: 1234,
    featured: false,
    required: true,
    tags: ["Coaching", "Renewal", "Certification"],
    version: "3.0",
    author: "RBF Coaching Department"
  },
  {
    id: 4,
    title: "Athlete Medical Clearance & Health Form",
    description: "Mandatory medical clearance form for all registered athletes. Must be completed and signed by licensed medical professionals before competition participation.",
    date: "2025-04-18",
    lastUpdated: "2025-04-10",
    fileUrl: "https://example.com/medical-clearance.pdf",
    fileSize: "1.2 MB",
    fileType: "PDF",
    category: "Medical",
    downloads: 2341,
    views: 4123,
    featured: true,
    required: true,
    tags: ["Medical", "Clearance", "Health"],
    version: "2.2",
    author: "RBF Medical Committee"
  },
  {
    id: 5,
    title: "Club Registration & Affiliation Package",
    description: "Complete package for boxing clubs seeking official RBF affiliation. Includes club registration, facility requirements, and coach certification guidelines.",
    date: "2025-03-22",
    lastUpdated: "2025-03-15",
    fileUrl: "https://example.com/club-registration.pdf",
    fileSize: "4.5 MB",
    fileType: "PDF",
    category: "Clubs",
    downloads: 345,
    views: 789,
    featured: false,
    required: false,
    tags: ["Clubs", "Registration", "Affiliation"],
    version: "1.8",
    author: "RBF Club Development"
  },
  {
    id: 6,
    title: "International Competition Application",
    description: "Application package for athletes and teams seeking to participate in international boxing competitions under RBF representation.",
    date: "2025-02-14",
    lastUpdated: "2025-02-01",
    fileUrl: "https://example.com/international-competition.pdf",
    fileSize: "2.8 MB",
    fileType: "PDF",
    category: "Competition",
    downloads: 678,
    views: 1456,
    featured: true,
    required: true,
    tags: ["International", "Competition", "Travel"],
    version: "1.5",
    author: "RBF International Department"
  },
  {
    id: 7,
    title: "Referee & Judge Certification Application",
    description: "Application form for individuals seeking official RBF certification as boxing referees and judges. Includes experience requirements and examination details.",
    date: "2025-01-30",
    lastUpdated: "2025-01-20",
    fileUrl: "https://example.com/referee-certification.pdf",
    fileSize: "2.1 MB",
    fileType: "PDF",
    category: "Officials",
    downloads: 234,
    views: 567,
    featured: false,
    required: true,
    tags: ["Referee", "Judge", "Certification"],
    version: "2.0",
    author: "RBF Officials Committee"
  },
  {
    id: 8,
    title: "Youth Development Program Registration",
    description: "Registration package for youth boxing development programs. Includes parental consent forms, medical information, and program participation agreements.",
    date: "2024-12-15",
    lastUpdated: "2024-12-01",
    fileUrl: "https://example.com/youth-development.pdf",
    fileSize: "3.2 MB",
    fileType: "PDF",
    category: "Youth",
    downloads: 891,
    views: 1789,
    featured: false,
    required: true,
    tags: ["Youth", "Development", "Registration"],
    version: "1.3",
    author: "RBF Youth Development"
  }
];

const categories = ["All", "Membership", "Events", "Coaching", "Medical", "Clubs", "Competition", "Officials", "Youth"];

// Fixed: Added getFileIcon function
const getFileIcon = (fileType) => {
  return <FileText className="w-8 h-8 text-sky-400" />;
};

const DocumentsForms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [bookmarkedDocs, setBookmarkedDocs] = useState(new Set());

  const filteredDocs = useMemo(() => {
    return sampleDocuments.filter((doc) => {
      const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      switch(sortBy) {
        case "newest": return new Date(b.date) - new Date(a.date);
        case "oldest": return new Date(a.date) - new Date(b.date);
        case "popular": return b.downloads - a.downloads;
        case "views": return b.views - a.views;
        case "featured": return (b.featured - a.featured) || (b.downloads - a.downloads);
        default: return a.title.localeCompare(b.title);
      }
    });
  }, [searchTerm, selectedCategory, sortBy]);

  const toggleBookmark = (docId) => {
    const newBookmarked = new Set(bookmarkedDocs);
    if (newBookmarked.has(docId)) {
      newBookmarked.delete(docId);
    } else {
      newBookmarked.add(docId);
    }
    setBookmarkedDocs(newBookmarked);
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case "Membership": return <User className="w-4 h-4" />;
      case "Events": return <Calendar className="w-4 h-4" />;
      case "Coaching": return <Award className="w-4 h-4" />;
      case "Medical": return <Shield className="w-4 h-4" />;
      case "Clubs": return <Zap className="w-4 h-4" />;
      case "Competition": return <FileCheck className="w-4 h-4" />;
      case "Officials": return <FileSearch className="w-4 h-4" />;
      case "Youth": return <BookOpen className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-sky-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex-grow px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <motion.section 
            className="text-center mb-16"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 bg-sky-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-sky-500/30 mb-6"
            >
              <FileText className="w-5 h-5 text-sky-400" />
              <span className="text-sky-300 font-semibold">OFFICIAL DOCUMENTS</span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
              Documents & Forms
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access all official Rwanda Boxing Federation documents, forms, and resources. Everything you need for membership, events, coaching, and competition.
            </p>
          </motion.section>

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
                { number: "8", label: "Document Categories", icon: <FileText className="w-6 h-6" /> },
                { number: "5.8K+", label: "Total Downloads", icon: <Download className="w-6 h-6" /> },
                { number: "12K+", label: "Document Views", icon: <Eye className="w-6 h-6" /> },
                { number: "24/7", label: "Available", icon: <Clock className="w-6 h-6" /> }
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
                placeholder="Search documents, descriptions, or tags..."
                className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 backdrop-blur-sm transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters Group */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
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
                <option value="popular">Most Downloads</option>
                <option value="views">Most Views</option>
                <option value="featured">Featured First</option>
                <option value="alphabetical">Alphabetical</option>
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

          {/* Results Count */}
          <motion.div 
            className="mb-8 flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredDocs.length}</span> documents
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Download size={16} />
              <span>Total Downloads: {filteredDocs.reduce((sum, doc) => sum + doc.downloads, 0).toLocaleString()}</span>
            </div>
          </motion.div>

          {/* Documents Grid/List */}
          <AnimatePresence mode="wait">
            {filteredDocs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">📄</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Documents Found</h3>
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
                {filteredDocs.map((doc, idx) => (
                  <DocumentCard 
                    key={doc.id} 
                    doc={doc} 
                    index={idx}
                    onBookmark={toggleBookmark}
                    isBookmarked={bookmarkedDocs.has(doc.id)}
                    getCategoryIcon={getCategoryIcon}
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
                {filteredDocs.map((doc, idx) => (
                  <DocumentListItem 
                    key={doc.id} 
                    doc={doc} 
                    index={idx}
                    onBookmark={toggleBookmark}
                    isBookmarked={bookmarkedDocs.has(doc.id)}
                    getCategoryIcon={getCategoryIcon}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
};

// Enhanced Document Card Component
const DocumentCard = ({ doc, index, onBookmark, isBookmarked, getCategoryIcon }) => {
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
      {doc.featured && (
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
      )}
      
      <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border ${
        doc.featured ? 'border-yellow-500/50' : 'border-gray-800'
      } overflow-hidden transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-2xl group-hover:shadow-sky-500/20 p-6`}>
        
        {/* Featured Badge */}
        {doc.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold backdrop-blur-sm">
            <Star size={12} />
            <span>Featured</span>
          </div>
        )}

        {/* Required Badge */}
        {doc.required && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold backdrop-blur-sm">
            <Shield size={12} />
            <span>Required</span>
          </div>
        )}

        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            {/* Fixed: Using the getFileIcon function */}
            {getFileIcon(doc.fileType)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 flex-1 pr-4">
                {doc.title}
              </h3>
              <motion.button
                className={`p-2 rounded-lg transition-all ${
                  isBookmarked ? "text-yellow-400" : "text-gray-400 hover:text-yellow-400"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); onBookmark(doc.id); }}
              >
                <Bookmark size={16} className={isBookmarked ? "fill-current" : ""} />
              </motion.button>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center gap-1 px-2 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full border border-sky-500/30">
                {getCategoryIcon(doc.category)}
                {doc.category}
              </span>
              <span className="text-gray-400 text-xs">{doc.fileType} • {doc.fileSize}</span>
            </div>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {doc.description}
            </p>

            {/* Metadata */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>Updated: {new Date(doc.lastUpdated).toLocaleDateString()}</span>
                </div>
                <span>v{doc.version}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <User size={12} />
                  <span>{doc.author}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Download size={12} />
                  <span>{doc.downloads}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={12} />
                  <span>{doc.views}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {doc.tags.slice(0, 2).map((tag, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                  #{tag}
                </span>
              ))}
              {doc.tags.length > 2 && (
                <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                  +{doc.tags.length - 2}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <motion.a
                href={doc.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye size={16} />
                View Document
              </motion.a>
              <motion.a
                href={doc.fileUrl}
                download
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Document List Item Component for List View
const DocumentListItem = ({ doc, index, onBookmark, isBookmarked, getCategoryIcon }) => {
  return (
    <motion.div
      className="flex gap-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6 hover:border-sky-500/50 transition-all duration-300 group"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Document Icon */}
      <div className="flex-shrink-0">
        {/* Fixed: Using the getFileIcon function */}
        {getFileIcon(doc.fileType)}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                {doc.title}
              </h3>
              {doc.featured && (
                <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                  <Star size={12} />
                  Featured
                </span>
              )}
              {doc.required && (
                <span className="flex items-center gap-1 px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">
                  <Shield size={12} />
                  Required
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 mb-3">
              <span className="flex items-center gap-1 px-2 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full border border-sky-500/30">
                {getCategoryIcon(doc.category)}
                {doc.category}
              </span>
              <span className="text-gray-400 text-xs">{doc.fileType} • {doc.fileSize} • v{doc.version}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              className={`p-2 rounded-lg transition-all ${
                isBookmarked ? "text-yellow-400" : "text-gray-400 hover:text-yellow-400"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onBookmark(doc.id)}
            >
              <Bookmark size={18} className={isBookmarked ? "fill-current" : ""} />
            </motion.button>
          </div>
        </div>

        <p className="text-gray-400 mb-4 line-clamp-2">
          {doc.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>Updated: {new Date(doc.lastUpdated).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>{doc.author}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Download size={14} />
                <span>{doc.downloads} downloads</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye size={14} />
                <span>{doc.views} views</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <motion.a
              href={doc.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={16} />
              View
            </motion.a>
            <motion.a
              href={doc.fileUrl}
              download
              className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
            </motion.a>
          </div>
        </div>
      </div>
      <Footer />

    </motion.div>
  );
};

export default DocumentsForms;