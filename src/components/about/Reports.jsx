import React, { useState } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Eye, 
  Download, 
  Search, 
  Calendar,
  Filter,
  BarChart3,
  Shield,
  TrendingUp,
  Users,
  Award,
  ExternalLink,
  X,
  FileCheck,
  ChartBar
} from "lucide-react";

const reportsList = [
  {
    id: 1,
    title: "Annual Financial Report 2024",
    description: "Comprehensive financial statement detailing income, expenditures, budget allocations, and financial performance for the fiscal year 2024. Includes detailed breakdowns of sponsorship revenue, government funding, and operational costs.",
    date: "2025-01-15",
    fileUrl: "https://example.com/annual-financial-2024.pdf",
    category: "Financial",
    type: "Annual",
    size: "2.4 MB",
    pages: 48,
    status: "Published",
    highlights: ["Revenue Growth: +15%", "Budget Efficiency: 94%", "Transparency Score: 98%"],
    tags: ["Financial", "Audited", "Comprehensive"]
  },
  {
    id: 2,
    title: "Annual Activity Report 2024",
    description: "Detailed overview of all events, tournaments, training programs, and community initiatives conducted by Rwanda Boxing Federation throughout 2024. Features athlete development metrics and program impact analysis.",
    date: "2025-02-10",
    fileUrl: "https://example.com/activity-report-2024.pdf",
    category: "Operational",
    type: "Annual",
    size: "3.1 MB",
    pages: 62,
    status: "Published",
    highlights: ["50+ Events Organized", "2000+ Participants", "15 New Clubs Established"],
    tags: ["Operations", "Events", "Community"]
  },
  {
    id: 3,
    title: "Independent Audit Report 2024",
    description: "Third-party audit findings examining financial integrity, governance practices, and operational performance. Conducted by certified international auditing firm to ensure transparency and accountability.",
    date: "2025-03-05",
    fileUrl: "https://example.com/audit-report-2024.pdf",
    category: "Audit",
    type: "Annual",
    size: "1.8 MB",
    pages: 36,
    status: "Published",
    highlights: ["Clean Audit Opinion", "100% Compliance", "Best Practices Implemented"],
    tags: ["Audit", "Governance", "Compliance"]
  },
  {
    id: 4,
    title: "Q1 2025 Financial Statement",
    description: "Quarterly financial performance report covering January to March 2025. Includes budget vs actual analysis, revenue streams, and expenditure tracking for ongoing transparency.",
    date: "2025-04-20",
    fileUrl: "https://example.com/q1-financial-2025.pdf",
    category: "Financial",
    type: "Quarterly",
    size: "1.2 MB",
    pages: 28,
    status: "Published",
    highlights: ["Q1 Target: 110%", "Cost Efficiency: +8%", "Revenue: $250K"],
    tags: ["Financial", "Quarterly", "Performance"]
  },
  {
    id: 5,
    title: "Youth Development Program Report",
    description: "Comprehensive analysis of youth boxing initiatives, talent identification programs, and educational outreach efforts. Includes participant demographics and program effectiveness metrics.",
    date: "2025-03-28",
    fileUrl: "https://example.com/youth-development-2024.pdf",
    category: "Program",
    type: "Special",
    size: "2.7 MB",
    pages: 45,
    status: "Published",
    highlights: ["500+ Youth Engaged", "25 Talent Scholarships", "95% Satisfaction Rate"],
    tags: ["Youth", "Development", "Education"]
  },
  {
    id: 6,
    title: "International Performance Review 2024",
    description: "Analysis of Rwandan boxers' performance in international competitions, including continental championships, world tournaments, and Olympic qualification events.",
    date: "2025-02-28",
    fileUrl: "https://example.com/international-performance-2024.pdf",
    category: "Performance",
    type: "Annual",
    size: "2.1 MB",
    pages: 39,
    status: "Published",
    highlights: ["3 Gold Medals", "5 Continental Qualifiers", "World Ranking Improvement"],
    tags: ["Performance", "International", "Athletes"]
  }
];

const TransparencyReports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedReport, setSelectedReport] = useState(null);

  const categories = ["All", "Financial", "Operational", "Audit", "Program", "Performance"];
  const types = ["All", "Annual", "Quarterly", "Special"];

  const filteredReports = reportsList.filter((report) => {
    const matchesSearch = 
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || report.category === selectedCategory;
    const matchesType = selectedType === "All" || report.type === selectedType;

    return matchesSearch && matchesCategory && matchesType;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sky-900/80 via-black to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-sky-500/20 backdrop-blur-sm rounded-full border border-sky-400/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="text-sky-400" />
            <span className="text-sky-400 font-semibold text-sm tracking-wider uppercase">
              ACCOUNTABILITY & TRANSPARENCY
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Transparency & Reports
          </motion.h1>

          <motion.p 
            className="text-slate-300 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Committed to complete transparency in our operations, finances, and governance. 
            Access all official reports, audits, and performance metrics below.
          </motion.p>
        </div>
      </section>

      {/* Transparency Stats */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { number: "100%", label: "Financial Transparency", icon: <Shield /> },
              { number: "6", label: "Published Reports", icon: <FileText /> },
              { number: "2021", label: "Years of Reporting", icon: <Calendar /> },
              { number: "A+", label: "Governance Rating", icon: <Award /> }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all duration-500"
              >
                <div className="text-sky-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search reports, categories, tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white appearance-none focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div className="relative">
                <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white appearance-none focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                >
                  {types.map(type => (
                    <option key={type} value={type} className="bg-slate-800">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedType("All");
                }}
                className="px-6 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-slate-300 hover:text-white hover:border-sky-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <X size={18} />
                Clear Filters
              </button>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedCategory !== "All" && (
                <span className="flex items-center gap-2 px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm border border-sky-500/30">
                  {selectedCategory}
                  <X size={14} className="cursor-pointer" onClick={() => setSelectedCategory("All")} />
                </span>
              )}
              {selectedType !== "All" && (
                <span className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                  {selectedType}
                  <X size={14} className="cursor-pointer" onClick={() => setSelectedType("All")} />
                </span>
              )}
              {searchTerm && (
                <span className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                  "{searchTerm}"
                  <X size={14} className="cursor-pointer" onClick={() => setSearchTerm("")} />
                </span>
              )}
            </div>
          </motion.div>

          {/* Reports Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <motion.div
                    key={report.id}
                    variants={cardVariants}
                    layout
                    className="group relative"
                    whileHover={{ y: -8 }}
                  >
                    {/* Report Card */}
                    <div 
                      className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 group-hover:border-sky-500/40 transition-all duration-500 h-full cursor-pointer"
                      onClick={() => setSelectedReport(report)}
                    >
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold border border-green-500/30 z-10">
                        {report.status}
                      </div>

                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-[1.5px] rounded-3xl bg-slate-900" />
                      </div>

                      <div className="relative z-10 p-6 flex flex-col h-full">
                        {/* Icon and Category */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center">
                            <FileText className="text-sky-400" size={24} />
                          </div>
                          <div>
                            <span className="px-2 py-1 bg-white/5 text-slate-300 rounded text-xs border border-white/10">
                              {report.category}
                            </span>
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs border border-blue-500/30 ml-1">
                              {report.type}
                            </span>
                          </div>
                        </div>

                        {/* Report Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-100 transition-colors duration-300 line-clamp-2">
                            {report.title}
                          </h3>
                          
                          <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                            <Calendar size={14} />
                            <span>{formatDate(report.date)}</span>
                          </div>

                          <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                            {report.description}
                          </p>

                          {/* Highlights */}
                          <div className="mb-4">
                            <p className="text-slate-400 text-xs mb-2">Key Highlights:</p>
                            <div className="space-y-1">
                              {report.highlights.slice(0, 2).map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sky-400 text-sm">
                                  <TrendingUp size={12} />
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {report.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-white/5 text-slate-300 rounded text-xs border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* File Details & Actions */}
                        <div className="border-t border-white/10 pt-4">
                          <div className="flex justify-between items-center text-slate-400 text-sm mb-3">
                            <span>{report.size}</span>
                            <span>{report.pages} pages</span>
                          </div>
                          
                          <div className="flex gap-2">
                            <a
                              href={report.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 py-2 bg-sky-500/20 text-sky-400 rounded-lg border border-sky-500/30 hover:bg-sky-500/30 transition-all duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Eye size={16} />
                              Preview
                            </a>
                            <a
                              href={report.fileUrl}
                              download
                              className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/5 text-slate-300 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Download size={16} />
                              Download
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="col-span-full text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-2xl mx-auto">
                    <Search className="text-sky-400 mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-bold text-white mb-4">No Reports Found</h3>
                    <p className="text-slate-400 text-lg mb-6">
                      We couldn't find any reports matching your search criteria. 
                      Try adjusting your filters or search terms.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("All");
                        setSelectedType("All");
                      }}
                      className="px-6 py-3 bg-sky-500/20 text-sky-400 rounded-xl border border-sky-500/30 hover:bg-sky-500/30 transition-all duration-300"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-black/50">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-sky-500/20">
            <Shield className="text-6xl text-sky-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Our Commitment to Transparency</h2>
            <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              We believe that transparency builds trust. That's why we regularly publish 
              comprehensive reports on our finances, operations, and performance for public scrutiny.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { icon: <FileCheck />, title: "Regular Reporting", desc: "Quarterly and annual reports published on schedule" },
                { icon: <ChartBar />, title: "Detailed Analysis", desc: "Comprehensive data and performance metrics" },
                { icon: <Users />, title: "Public Access", desc: "All reports freely available to stakeholders" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                  <div className="text-sky-400 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Report Detail Modal */}
      <AnimatePresence>
        {selectedReport && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReport(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm border border-sky-500/30">
                        {selectedReport.category}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                        {selectedReport.type}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                        {selectedReport.status}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedReport.title}</h2>
                    <div className="flex items-center gap-4 text-slate-300">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-sky-400" />
                        <span>Published {formatDate(selectedReport.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText size={16} className="text-sky-400" />
                        <span>{selectedReport.pages} pages • {selectedReport.size}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedReport(null)}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-300"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Report Overview</h3>
                      <p className="text-slate-300 leading-relaxed">{selectedReport.description}</p>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Key Highlights</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedReport.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
                          >
                            <TrendingUp size={16} className="text-sky-400 flex-shrink-0" />
                            <span className="text-slate-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Actions */}
                  <div className="space-y-6">
                    {/* Download Actions */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <Download size={20} className="text-sky-400" />
                        Access Report
                      </h4>
                      <div className="space-y-3">
                        <a
                          href={selectedReport.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-3 py-3 bg-sky-500/20 text-sky-400 rounded-xl border border-sky-500/30 hover:bg-sky-500/30 transition-all duration-300"
                        >
                          <Eye size={20} />
                          Preview Online
                          <ExternalLink size={16} />
                        </a>
                        <a
                          href={selectedReport.fileUrl}
                          download
                          className="w-full flex items-center justify-center gap-3 py-3 bg-white/5 text-slate-300 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                          <Download size={20} />
                          Download PDF
                        </a>
                      </div>
                    </div>

                    {/* Report Details */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h4 className="text-white font-semibold mb-4">Report Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between text-slate-300">
                          <span>File Size</span>
                          <span className="text-white font-semibold">{selectedReport.size}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Pages</span>
                          <span className="text-white font-semibold">{selectedReport.pages}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Format</span>
                          <span className="text-white font-semibold">PDF</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h4 className="text-white font-semibold mb-4">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedReport.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm border border-sky-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default TransparencyReports;