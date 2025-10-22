import React, { useState, useMemo } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import { FileCheck, Eye, Download, Search, Calendar, Filter, ChevronDown, BookOpen, Shield, Activity, Award } from "lucide-react";

const rulesList = [
  {
    id: 1,
    title: "Official Competition Rules 2025",
    description: "Comprehensive rulebook outlining official boxing regulations, weight categories, scoring criteria, and competition procedures for 2025.",
    date: "2025-01-10",
    fileUrl: "https://example.com/competition-rules-2025.pdf",
    category: "competition",
    fileSize: "2.4 MB",
    pages: 48,
    importance: "high"
  },
  {
    id: 2,
    title: "Athlete Code of Conduct",
    description: "Guidelines for professional behavior, discipline, and fair play expected from all registered athletes and team representatives.",
    date: "2025-02-18",
    fileUrl: "https://example.com/athlete-code.pdf",
    category: "conduct",
    fileSize: "1.1 MB",
    pages: 24,
    importance: "medium"
  },
  {
    id: 3,
    title: "Health & Safety Regulations",
    description: "Rules and standards to ensure safety and well-being during training, sparring, and official matches, including medical clearance requirements.",
    date: "2025-03-12",
    fileUrl: "https://example.com/health-safety.pdf",
    category: "safety",
    fileSize: "3.2 MB",
    pages: 62,
    importance: "high"
  },
  {
    id: 4,
    title: "Event Sanctioning Guidelines",
    description: "Procedures, responsibilities, and compliance standards for promoters and organizers to obtain official event sanctioning.",
    date: "2025-04-22",
    fileUrl: "https://example.com/event-guidelines.pdf",
    category: "organizational",
    fileSize: "1.8 MB",
    pages: 36,
    importance: "medium"
  },
  {
    id: 5,
    title: "Anti-Doping Policy 2025",
    description: "Complete anti-doping regulations, prohibited substances list, testing procedures, and consequences for violations.",
    date: "2025-01-28",
    fileUrl: "https://example.com/anti-doping.pdf",
    category: "safety",
    fileSize: "2.7 MB",
    pages: 52,
    importance: "high"
  },
  {
    id: 6,
    title: "Equipment Standards Manual",
    description: "Technical specifications and approval standards for all competition equipment including gloves, headgear, and ring requirements.",
    date: "2025-03-05",
    fileUrl: "https://example.com/equipment-standards.pdf",
    category: "competition",
    fileSize: "1.5 MB",
    pages: 32,
    importance: "medium"
  }
];

const categoryIcons = {
  competition: Award,
  conduct: Shield,
  safety: Activity,
  organizational: BookOpen
};

const categoryLabels = {
  competition: "Competition",
  conduct: "Conduct",
  safety: "Safety",
  organizational: "Organizational"
};

const RulesRegulations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(rulesList.map(rule => rule.category))];
    return uniqueCategories;
  }, []);

  const filteredRules = useMemo(() => {
    let filtered = rulesList.filter((rule) =>
      rule.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rule.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== "all") {
      filtered = filtered.filter(rule => rule.category === selectedCategory);
    }

    // Sort rules
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.date) - new Date(a.date);
        case "title":
          return a.title.localeCompare(b.title);
        case "importance":
          const importanceOrder = { high: 3, medium: 2, low: 1 };
          return importanceOrder[b.importance] - importanceOrder[a.importance];
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getImportanceBadge = (importance) => {
    const styles = {
      high: "bg-red-500/20 text-red-400 border-red-500/30",
      medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      low: "bg-green-500/20 text-green-400 border-green-500/30"
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[importance]}`}>
        {importance.charAt(0).toUpperCase() + importance.slice(1)}
      </span>
    );
  };

  return (
    <div className="bg-primary min-h-screen w-full overflow-hidden">
      <Navbar />

      <div className="bg-primary px-6 md:px-20 flex justify-center">
        <div className="w-full max-w-7xl py-20">
          {/* Enhanced Header Section */}
          <motion.section 
            className="bg-black text-white py-16 px-8 md:px-12 rounded-3xl mb-12 relative overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
                <div className="flex-1">
                  <motion.h1 
                    className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Rules & <span className="text-sky-400">Regulations</span>
                  </motion.h1>
                  <motion.p 
                    className="text-xl text-gray-300 max-w-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Official documentation and guidelines for athletes, coaches, and organizers
                  </motion.p>
                </div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-right">
                    <div className="text-3xl font-bold text-sky-400">{rulesList.length}</div>
                    <div className="text-gray-400 text-sm">Total Documents</div>
                  </div>
                  <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center">
                    <BookOpen className="text-white" size={24} />
                  </div>
                </motion.div>
              </div>

              {/* Advanced Search and Filter Bar */}
              <motion.div 
                className="bg-gray-900 rounded-2xl p-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  {/* Search Input */}
                  <div className="flex-1 relative w-full">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search rules, descriptions, or keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 border border-gray-700"
                    />
                  </div>

                  {/* Filter Dropdown */}
                  <div className="flex gap-3 w-full lg:w-auto">
                    <div className="relative flex-1 lg:flex-none">
                      <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="w-full lg:w-48 px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 hover:border-sky-400 transition-all duration-200 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Filter size={18} />
                          <span>{selectedCategory === "all" ? "All Categories" : categoryLabels[selectedCategory]}</span>
                        </div>
                        <ChevronDown size={18} className={`transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isFilterOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-20"
                          >
                            <button
                              onClick={() => {
                                setSelectedCategory("all");
                                setIsFilterOpen(false);
                              }}
                              className={`w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                                selectedCategory === "all" ? "text-sky-400 bg-gray-700" : "text-white"
                              }`}
                            >
                              All Categories
                            </button>
                            {categories.map(category => {
                              const IconComponent = categoryIcons[category];
                              return (
                                <button
                                  key={category}
                                  onClick={() => {
                                    setSelectedCategory(category);
                                    setIsFilterOpen(false);
                                  }}
                                  className={`w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors flex items-center gap-3 first:rounded-t-xl last:rounded-b-xl ${
                                    selectedCategory === category ? "text-sky-400 bg-gray-700" : "text-white"
                                  }`}
                                >
                                  <IconComponent size={18} />
                                  {categoryLabels[category]}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Sort Dropdown */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400 appearance-none cursor-pointer"
                    >
                      <option value="date">Sort by Date</option>
                      <option value="title">Sort by Title</option>
                      <option value="importance">Sort by Importance</option>
                    </select>
                  </div>
                </div>

                {/* Active Filters */}
                {(searchTerm || selectedCategory !== "all") && (
                  <motion.div 
                    className="flex flex-wrap gap-2 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {searchTerm && (
                      <span className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm flex items-center gap-2">
                        Search: "{searchTerm}"
                        <button onClick={() => setSearchTerm("")} className="hover:text-white">×</button>
                      </span>
                    )}
                    {selectedCategory !== "all" && (
                      <span className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm flex items-center gap-2">
                        Category: {categoryLabels[selectedCategory]}
                        <button onClick={() => setSelectedCategory("all")} className="hover:text-white">×</button>
                      </span>
                    )}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.section>

          {/* Enhanced Rules Grid */}
          <section className="mb-16">
            <AnimatePresence mode="wait">
              {filteredRules.length > 0 ? (
                <motion.div
                  key="rules-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {filteredRules.map((rule) => {
                    const CategoryIcon = categoryIcons[rule.category];
                    return (
                      <motion.div
                        key={rule.id}
                        variants={itemVariants}
                        layout
                        className="bg-gray-900 rounded-3xl p-6 border border-gray-800 hover:border-sky-400/30 hover:shadow-2xl hover:shadow-sky-400/10 transition-all duration-500 group"
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="flex flex-col h-full">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-sky-500/20 rounded-xl group-hover:bg-sky-500/30 transition-colors">
                                <CategoryIcon size={24} className="text-sky-400" />
                              </div>
                              <div>
                                <h2 className="text-xl font-bold text-white line-clamp-2 leading-tight">
                                  {rule.title}
                                </h2>
                                <div className="flex items-center gap-2 mt-1">
                                  <Calendar size={14} className="text-gray-400" />
                                  <span className="text-gray-400 text-sm">{rule.date}</span>
                                </div>
                              </div>
                            </div>
                            {getImportanceBadge(rule.importance)}
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-6 flex-1 leading-relaxed">
                            {rule.description}
                          </p>

                          {/* File Info */}
                          <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
                            <div className="flex items-center gap-4">
                              <span>{rule.fileSize}</span>
                              <span>{rule.pages} pages</span>
                            </div>
                            <span className="capitalize">{categoryLabels[rule.category]}</span>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <a
                              href={rule.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-3 rounded-xl transition-all duration-200 group/button"
                            >
                              <Eye size={18} />
                              <span>Preview</span>
                              <motion.div
                                className="opacity-0 group-hover/button:opacity-100 transition-opacity"
                                initial={{ x: -5 }}
                                whileHover={{ x: 0 }}
                              >
                                ↗
                              </motion.div>
                            </a>
                            <a
                              href={rule.fileUrl}
                              download
                              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-xl transition-all duration-200 min-w-[120px]"
                            >
                              <Download size={18} />
                              <span>PDF</span>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-20"
                >
                  <div className="bg-gray-900 rounded-3xl p-12 max-w-md mx-auto">
                    <FileCheck size={64} className="text-gray-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">No documents found</h3>
                    <p className="text-gray-400 mb-6">
                      Try adjusting your search terms or filters to find what you're looking for.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                      }}
                      className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-xl transition-colors"
                    >
                      Clear all filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Statistics Section */}
          <motion.section 
            className="bg-black rounded-3xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Document Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map(category => {
                const IconComponent = categoryIcons[category];
                const count = rulesList.filter(rule => rule.category === category).length;
                return (
                  <div key={category} className="bg-gray-900 rounded-2xl p-6 text-center group hover:bg-gray-800 transition-colors">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-sky-500/20 rounded-xl group-hover:bg-sky-500/30 transition-colors">
                        <IconComponent size={24} className="text-sky-400" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{count}</div>
                    <div className="text-gray-400 text-sm">{categoryLabels[category]}</div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          <Footer />
        </div>
      </div>

      {/* Close dropdown when clicking outside */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 z-10" 
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </div>
  );
};

export default RulesRegulations;