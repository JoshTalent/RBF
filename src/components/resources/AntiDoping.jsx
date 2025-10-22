import React, { useState, useMemo } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Eye, Download, Search, Calendar, Filter, ChevronDown, FileText, TestTube, Pill, Stethoscope, AlertTriangle } from "lucide-react";

const antiDopingResources = [
  {
    id: 1,
    title: "Anti-Doping Policy 2025",
    description: "Official policy of the Rwanda Boxing Federation outlining anti-doping procedures, responsibilities, and sanctions in compliance with WADA regulations.",
    date: "2025-01-05",
    fileUrl: "https://example.com/anti-doping-policy-2025.pdf",
    category: "policy",
    fileSize: "2.1 MB",
    pages: 34,
    importance: "critical",
    updateFrequency: "Annual"
  },
  {
    id: 2,
    title: "Prohibited Substances List (WADA 2025)",
    description: "Comprehensive list of banned substances and methods for 2025. All athletes are required to familiarize themselves with this list to avoid violations.",
    date: "2025-01-15",
    fileUrl: "https://example.com/wada-prohibited-list-2025.pdf",
    category: "reference",
    fileSize: "3.8 MB",
    pages: 72,
    importance: "critical",
    updateFrequency: "Quarterly"
  },
  {
    id: 3,
    title: "Therapeutic Use Exemption (TUE) Guidelines",
    description: "Information and application process for athletes requiring therapeutic use exemptions for prescribed medications under medical supervision.",
    date: "2025-02-01",
    fileUrl: "https://example.com/tue-guidelines.pdf",
    category: "medical",
    fileSize: "1.5 MB",
    pages: 28,
    importance: "high",
    updateFrequency: "As Needed"
  },
  {
    id: 4,
    title: "Testing Procedures and Athlete Rights",
    description: "Detailed explanation of anti-doping testing procedures, athlete rights, and responsibilities during sample collection and analysis.",
    date: "2025-02-20",
    fileUrl: "https://example.com/testing-procedures.pdf",
    category: "procedural",
    fileSize: "2.3 MB",
    pages: 45,
    importance: "high",
    updateFrequency: "Annual"
  },
  {
    id: 5,
    title: "Athlete Anti-Doping Education Manual",
    description: "Comprehensive educational resource covering all aspects of anti-doping awareness, responsibilities, and clean sport principles.",
    date: "2025-03-10",
    fileUrl: "https://example.com/education-manual.pdf",
    category: "educational",
    fileSize: "4.2 MB",
    pages: 88,
    importance: "medium",
    updateFrequency: "Annual"
  },
  {
    id: 6,
    title: "Supplement Risk Assessment Guide",
    description: "Guidelines for evaluating dietary supplements and understanding contamination risks that could lead to anti-doping violations.",
    date: "2025-03-25",
    fileUrl: "https://example.com/supplement-guide.pdf",
    category: "safety",
    fileSize: "1.9 MB",
    pages: 36,
    importance: "high",
    updateFrequency: "Semi-Annual"
  }
];

const categoryIcons = {
  policy: FileText,
  reference: Pill,
  medical: Stethoscope,
  procedural: TestTube,
  educational: ShieldAlert,
  safety: AlertTriangle
};

const categoryLabels = {
  policy: "Policy Documents",
  reference: "Substance Lists",
  medical: "Medical Guidelines",
  procedural: "Testing Procedures",
  educational: "Education",
  safety: "Safety Guides"
};

const importanceColors = {
  critical: "bg-red-500/20 text-red-400 border-red-500/30",
  high: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  low: "bg-green-500/20 text-green-400 border-green-500/30"
};

const AntiDoping = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(antiDopingResources.map(doc => doc.category))];
    return uniqueCategories;
  }, []);

  const filteredResources = useMemo(() => {
    let filtered = antiDopingResources.filter((doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory !== "all") {
      filtered = filtered.filter(doc => doc.category === selectedCategory);
    }

    // Sort documents
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.date) - new Date(a.date);
        case "title":
          return a.title.localeCompare(b.title);
        case "importance":
          const importanceOrder = { critical: 4, high: 3, medium: 2, low: 1 };
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
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${importanceColors[importance]}`}>
        {importance.charAt(0).toUpperCase() + importance.slice(1)} Priority
      </span>
    );
  };

  const stats = useMemo(() => {
    const criticalCount = antiDopingResources.filter(doc => doc.importance === "critical").length;
    const totalPages = antiDopingResources.reduce((sum, doc) => sum + doc.pages, 0);
    
    return { criticalCount, totalPages };
  }, []);

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
            {/* Warning Gradient Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
                <div className="flex-1">
                  <motion.div 
                    className="flex items-center gap-4 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="p-3 bg-red-500/20 rounded-2xl">
                      <ShieldAlert size={32} className="text-red-400" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                      Anti-<span className="text-red-400">Doping</span>
                    </h1>
                  </motion.div>
                  <motion.p 
                    className="text-xl text-gray-300 max-w-2xl mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Ensuring clean sport through comprehensive anti-doping education, testing, and compliance
                  </motion.p>
                  
                  {/* Warning Banner */}
                  <motion.div 
                    className="bg-red-500/20 border border-red-500/30 rounded-2xl p-4 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3">
                      <AlertTriangle size={20} className="text-red-400" />
                      <p className="text-red-200 text-sm">
                        <strong>Important:</strong> All athletes and support personnel must be familiar with these documents. 
                        Violations can result in severe sanctions including competition bans.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="flex items-center gap-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-right">
                    <div className="text-3xl font-bold text-red-400">{stats.criticalCount}</div>
                    <div className="text-gray-400 text-sm">Critical Documents</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-orange-400">{antiDopingResources.length}</div>
                    <div className="text-gray-400 text-sm">Total Resources</div>
                  </div>
                  <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center">
                    <ShieldAlert className="text-white" size={24} />
                  </div>
                </motion.div>
              </div>

              {/* Advanced Search and Filter Bar */}
              <motion.div 
                className="bg-gray-900 rounded-2xl p-6 mt-8 border border-gray-800"
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
                      placeholder="Search anti-doping policies, substances, or procedures..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 border border-gray-700"
                    />
                  </div>

                  {/* Filter Dropdown */}
                  <div className="flex gap-3 w-full lg:w-auto">
                    <div className="relative flex-1 lg:flex-none">
                      <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="w-full lg:w-48 px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 hover:border-red-400 transition-all duration-200 flex items-center justify-between"
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
                                selectedCategory === "all" ? "text-red-400 bg-gray-700" : "text-white"
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
                                    selectedCategory === category ? "text-red-400 bg-gray-700" : "text-white"
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
                      className="px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400 appearance-none cursor-pointer"
                    >
                      <option value="date">Sort by Date</option>
                      <option value="title">Sort by Title</option>
                      <option value="importance">Sort by Priority</option>
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
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm flex items-center gap-2">
                        Search: "{searchTerm}"
                        <button onClick={() => setSearchTerm("")} className="hover:text-white">×</button>
                      </span>
                    )}
                    {selectedCategory !== "all" && (
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm flex items-center gap-2">
                        Category: {categoryLabels[selectedCategory]}
                        <button onClick={() => setSelectedCategory("all")} className="hover:text-white">×</button>
                      </span>
                    )}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.section>

          {/* Enhanced Resources Grid */}
          <section className="mb-16">
            <AnimatePresence mode="wait">
              {filteredResources.length > 0 ? (
                <motion.div
                  key="resources-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {filteredResources.map((doc) => {
                    const CategoryIcon = categoryIcons[doc.category];
                    return (
                      <motion.div
                        key={doc.id}
                        variants={itemVariants}
                        layout
                        className="bg-gray-900 rounded-3xl p-6 border border-gray-800 hover:border-red-400/30 hover:shadow-2xl hover:shadow-red-400/10 transition-all duration-500 group"
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <div className="flex flex-col h-full">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-red-500/20 rounded-xl group-hover:bg-red-500/30 transition-colors">
                                <CategoryIcon size={24} className="text-red-400" />
                              </div>
                              <div>
                                <h2 className="text-xl font-bold text-white line-clamp-2 leading-tight">
                                  {doc.title}
                                </h2>
                                <div className="flex items-center gap-2 mt-1">
                                  <Calendar size={14} className="text-gray-400" />
                                  <span className="text-gray-400 text-sm">{doc.date}</span>
                                </div>
                              </div>
                            </div>
                            {getImportanceBadge(doc.importance)}
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-6 flex-1 leading-relaxed">
                            {doc.description}
                          </p>

                          {/* File Info */}
                          <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-400">
                            <div>
                              <div className="font-medium">{doc.fileSize}</div>
                              <div className="text-xs">{doc.pages} pages</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">{categoryLabels[doc.category]}</div>
                              <div className="text-xs">Updates: {doc.updateFrequency}</div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <a
                              href={doc.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-3 rounded-xl transition-all duration-200 group/button"
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
                              href={doc.fileUrl}
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
                  <div className="bg-gray-900 rounded-3xl p-12 max-w-md mx-auto border border-gray-800">
                    <ShieldAlert size={64} className="text-gray-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">No documents found</h3>
                    <p className="text-gray-400 mb-6">
                      Try adjusting your search terms or filters to find anti-doping resources.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                      }}
                      className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl transition-colors"
                    >
                      Clear all filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Critical Information Section */}
          <motion.section 
            className="bg-black rounded-3xl p-8 mb-12 border border-red-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle size={32} className="text-red-400" />
              <h3 className="text-2xl font-bold text-white">Critical Anti-Doping Information</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map(category => {
                const IconComponent = categoryIcons[category];
                const count = antiDopingResources.filter(doc => doc.category === category).length;
                const criticalCount = antiDopingResources.filter(doc => 
                  doc.category === category && doc.importance === "critical"
                ).length;
                
                return (
                  <div key={category} className="bg-gray-900 rounded-2xl p-6 group hover:bg-gray-800 transition-colors border border-gray-800">
                    <div className="flex justify-between items-start mb-3">
                      <div className="p-2 bg-red-500/20 rounded-xl">
                        <IconComponent size={20} className="text-red-400" />
                      </div>
                      {criticalCount > 0 && (
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium">
                          {criticalCount} Critical
                        </span>
                      )}
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

export default AntiDoping;