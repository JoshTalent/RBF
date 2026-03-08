import React, { useState, useMemo } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileCheck,
  Eye,
  Download,
  Search,
  Calendar,
  Filter,
  ChevronDown,
  BookOpen,
  Shield,
  Activity,
  Award,
  X,
  FileText,
  ExternalLink,
  Loader,
  AlertCircle,
  Lock,
  Mail,
  Users,
} from "lucide-react";

const rulesList = [
  {
    id: 1,
    title: "GENERAL MEDICAL & SAFETY PROTOCOLS",
    description:
      "A document outlining the medical requirements, health checks, and safety measures designed to protect athletes, officials, and participants during boxing training and competitions. 🥊🏥",
    date: "2025-01-10",
    fileUrl:
      "https://drive.google.com/file/d/1L-n5u_tGkMKUJAWvJulNUlHOaf9P_DfJ/view?usp=sharing",
    category: "competition",
    fileSize: "2.4 MB",
    pages: 48,
    importance: "high",
    isGoogleDrive: false,
  },
  {
    id: 2,
    title: "CODE OF CONDUCT & ETHICS",
    description:
      "A document that defines the expected behavior, professional standards, and ethical principles for athletes, coaches, officials, and participants to ensure respect, integrity, and fairness in boxing activities. 🥊",
    date: "2025-02-18",
    fileUrl:
      "https://drive.google.com/file/d/1dPukSkVhx_dS2lPh8i9i8LpwfIbQEeDN/view?usp=sharing",
    category: "conduct",
    fileSize: "1.1 MB",
    pages: 24,
    importance: "medium",
    isGoogleDrive: false,
  },
  {
    id: 3,
    title: "EVENT MEDICAL & EMERGENCY RESPONSE (FULL)",
    description:
      "A comprehensive document outlining the medical preparedness, emergency procedures, and response protocols required to ensure the safety and immediate care of participants during boxing events. 🥊🚑",
    date: "2025-03-12",
    fileUrl:
      "https://drive.google.com/file/d/1VTHzsnl0pkCgWX9frhHvce1W99Hdg_gk/view?usp=sharing",
    category: "safety",
    fileSize: "3.2 MB",
    pages: 62,
    importance: "high",
    isGoogleDrive: false,
  },
  {
    id: 4,
    title: "AMATEUR BOXING REGULATIONS (FULL)",
    description:
      "A comprehensive document that defines the official rules, eligibility requirements, competition procedures, safety standards, and conduct governing amateur boxing competitions. 🥊",
    date: "2025-04-22",
    fileUrl:
      "https://drive.google.com/file/d/1EYuLLVL1EZELu3l84pdH5FZjfFiAeYdK/view?usp=sharing",
    category: "organizational",
    fileSize: "1.8 MB",
    pages: 36,
    importance: "medium",
    isGoogleDrive: true,
    googleDriveId: "1EYuLLVL1EZELu3l84pdH5FZjfFiAeYdK",
    requiresAccess: true, // Mark this as requiring access
  },
  {
    id: 5,
    title: "PROFESSIONAL BOXING REGULATIONS",
    description:
      "A formal document that outlines the rules, standards, and guidelines governing professional boxing, including athlete eligibility, competition procedures, safety requirements, licensing, and conduct to ensure fair and safe boxing events. 🥊",
    fileUrl:
      "https://drive.google.com/file/d/1VmcfqxZ1rdYGopmKSVmS6lIJbb36WPE9/view?usp=sharing",
    category: "safety",
    fileSize: "2.7 MB",
    pages: 52,
    importance: "high",
    isGoogleDrive: false,
  },
  {
    id: 6,
    title: "EVENT PLANNING & ORGANISATION",
    description:
      "A document that outlines the procedures, roles, and requirements for planning, coordinating, and managing boxing events to ensure they are organized professionally, safely, and efficiently. 🥊📋",
    date: "2025-03-05",
    fileUrl:
      "https://drive.google.com/file/d/1xPFYQeejJtYY7Whswptg0Hjoe2XpsRIT/view?usp=sharing",
    category: "competition",
    fileSize: "1.5 MB",
    pages: 32,
    importance: "medium",
    isGoogleDrive: false,
  },
  {
    id: 6,
    title: "RULES FOR ACADEMIES, BOXING GYMS & SIMILAR INSTITUTIONS",
    description:
      "A document outlining the standards, responsibilities, and operational guidelines for boxing academies, gyms, and related institutions to ensure proper training environments, safety, and compliance with boxing regulations. 🥊🏋️‍♂️",
    date: "2025-03-05",
    fileUrl:
      "https://drive.google.com/file/d/1SY6nH5PBbOaB_wB9MUlUGbRoYMwFMctd/view?usp=sharing",
    category: "competition",
    fileSize: "1.5 MB",
    pages: 32,
    importance: "medium",
    isGoogleDrive: false,
  },
  {
    id: 6,
    title: "ATHLETE REGISTRATION, TRANSFERS & CONTRACTS (FULL)",
    description:
      "A comprehensive document outlining the procedures and regulations for athlete registration, transfer processes, and contractual agreements to ensure transparency, fairness, and proper management of boxing athletes. 🥊📄",
    date: "2025-03-05",
    fileUrl:
      "https://drive.google.com/file/d/1mOyd8J_PIUP2GRWLCX9_rfYh3VWP5-2K/view?usp=sharing",
    category: "competition",
    fileSize: "1.5 MB",
    pages: 32,
    importance: "medium",
    isGoogleDrive: false,
  },
  {
    id: 6,
    title: "CODE OF PROCEDURE",
    description:
      "A document that establishes the formal processes and guidelines for handling administrative actions, disputes, disciplinary matters, and decision-making within boxing governance. 🥊📑",
    date: "2025-03-05",
    fileUrl:
      "https://drive.google.com/file/d/1L95BHhnXXJH_ChIjTtBqBCbXNcnrgV8e/view?usp=sharing",
    category: "competition",
    fileSize: "1.5 MB",
    pages: 32,
    importance: "medium",
    isGoogleDrive: false,
  },
];

const categoryIcons = {
  competition: Award,
  conduct: Shield,
  safety: Activity,
  organizational: BookOpen,
};

const categoryLabels = {
  competition: "Competition",
  conduct: "Conduct",
  safety: "Safety",
  organizational: "Organizational",
};

// Google Drive Preview Component with Access Request
const GoogleDrivePreview = ({ fileId, onClose, requiresAccess }) => {
  const [loading, setLoading] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);
  const [showAccessForm, setShowAccessForm] = useState(false);

  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const directViewUrl = `https://drive.google.com/file/d/${fileId}/view`;
  const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handleIframeLoad = () => {
    setLoading(false);
    // Check if the iframe content shows access denied
    try {
      const iframe = document.getElementById("google-drive-iframe");
      if (iframe && iframe.contentDocument) {
        const bodyText = iframe.contentDocument.body?.innerText || "";
        if (
          bodyText.includes("You need access") ||
          bodyText.includes("Request access")
        ) {
          setAccessDenied(true);
        }
      }
    } catch (e) {
      // Cross-origin restrictions may prevent access to iframe content
      console.log(
        "Cannot access iframe content due to cross-origin restrictions",
      );
    }
  };

  const handleIframeError = () => {
    setLoading(false);
    setAccessDenied(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-500/20 rounded-xl">
              <FileText className="text-sky-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Document Preview</h3>
              <p className="text-gray-400 text-sm">
                {accessDenied ? "Access Required" : "Google Drive Viewer"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-xl transition-colors"
          >
            <X size={24} className="text-gray-400" />
          </button>
        </div>

        {/* Preview Content */}
        <div className="relative w-full" style={{ height: "60vh" }}>
          {loading && !accessDenied && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
              <Loader size={48} className="text-sky-400 animate-spin mb-4" />
              <p className="text-gray-400">Loading document...</p>
            </div>
          )}

          {accessDenied ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 p-8">
              <div className="max-w-md w-full">
                {/* Google Drive Access Request UI */}
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-red-500/20 rounded-2xl flex items-center justify-center">
                      <Lock size={40} className="text-red-400" />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-white text-center mb-2">
                    You need access
                  </h2>

                  <p className="text-gray-400 text-center mb-6">
                    Request access to view this document, or switch to an
                    account with access.
                    <a
                      href="#"
                      className="text-sky-400 hover:text-sky-300 ml-1"
                    >
                      Learn more
                    </a>
                  </p>

                  {/* Permission Level Selector */}
                  <div className="flex gap-3 mb-6 bg-gray-900 p-2 rounded-xl">
                    {["Viewer", "Commenter", "Editor"].map((role) => (
                      <label key={role} className="flex-1">
                        <input
                          type="radio"
                          name="permission"
                          value={role.toLowerCase()}
                          className="hidden peer"
                        />
                        <div className="text-center px-3 py-2 rounded-lg text-gray-400 peer-checked:bg-sky-600 peer-checked:text-white cursor-pointer transition-colors hover:bg-gray-700">
                          {role}
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="mb-6">
                    <textarea
                      placeholder="Message (optional)"
                      rows="3"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
                    />
                  </div>

                  {/* Account Info */}
                  <div className="flex items-center gap-3 mb-6 p-3 bg-gray-900 rounded-xl">
                    <div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center">
                      <Users size={20} className="text-sky-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">
                        You're signed in as
                      </p>
                      <p className="text-white font-medium">
                        ntwarijose5@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Request Access Button */}
                  <button className="w-full bg-sky-600 hover:bg-sky-500 text-white font-semibold py-4 px-6 rounded-xl transition-colors mb-4">
                    Request access
                  </button>

                  {/* Alternative Options */}
                  <div className="flex gap-3">
                    <a
                      href={directDownloadUrl}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
                    >
                      <Download size={18} />
                      Download
                    </a>
                    <a
                      href={directViewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Open in Drive
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              id="google-drive-iframe"
              src={embedUrl}
              className="w-full h-full"
              allow="autoplay"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              title="Google Drive Preview"
            />
          )}
        </div>

        {/* Footer - Only show if not access denied */}
        {!accessDenied && (
          <div className="flex items-center justify-end gap-4 p-4 bg-gray-800 border-t border-gray-700">
            <a
              href={directDownloadUrl}
              className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-2.5 rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download
            </a>
            <a
              href={directViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2.5 rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <ExternalLink size={18} />
              Open in Drive
            </a>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

// PDF Preview Component for regular files
const PDFPreview = ({ fileUrl, onClose, title }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-6xl bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-500/20 rounded-xl">
              <FileText className="text-sky-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white line-clamp-1">
                {title}
              </h3>
              <p className="text-gray-400 text-sm">PDF Preview</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-xl transition-colors"
          >
            <X size={24} className="text-gray-400" />
          </button>
        </div>

        {/* Preview Content */}
        <div className="relative w-full" style={{ height: "80vh" }}>
          {loading && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <Loader size={48} className="text-sky-400 animate-spin" />
            </div>
          )}

          {error ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
              <AlertCircle size={48} className="text-red-400 mb-4" />
              <p className="text-white text-lg mb-2">Failed to load document</p>
              <p className="text-gray-400 mb-6">
                Please try downloading instead
              </p>
              <a
                href={fileUrl}
                download
                className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          ) : (
            <iframe
              src={`${fileUrl}#toolbar=0&navpanes=0`}
              className="w-full h-full"
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setError(true);
              }}
              title="PDF Preview"
            />
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-4 p-4 bg-gray-800 border-t border-gray-700">
          <a
            href={fileUrl}
            download
            className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-2.5 rounded-xl transition-colors inline-flex items-center gap-2"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Rest of the component remains the same...
const RulesRegulations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [previewDocument, setPreviewDocument] = useState(null);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(rulesList.map((rule) => rule.category)),
    ];
    return uniqueCategories;
  }, []);

  const filteredRules = useMemo(() => {
    let filtered = rulesList.filter(
      (rule) =>
        rule.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rule.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    if (selectedCategory !== "all") {
      filtered = filtered.filter((rule) => rule.category === selectedCategory);
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const getImportanceBadge = (importance) => {
    const styles = {
      high: "bg-red-500/20 text-red-400 border-red-500/30",
      medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      low: "bg-green-500/20 text-green-400 border-green-500/30",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[importance]}`}
      >
        {importance.charAt(0).toUpperCase() + importance.slice(1)}
      </span>
    );
  };

  const handlePreview = (rule) => {
    setPreviewDocument(rule);
  };

  const handleDownload = (rule) => {
    if (rule.isGoogleDrive && rule.googleDriveId) {
      // For Google Drive files, use the download URL
      window.open(
        `https://drive.google.com/uc?export=download&id=${rule.googleDriveId}`,
        "_blank",
      );
    } else {
      // For regular files, trigger download
      const link = document.createElement("a");
      link.href = rule.fileUrl;
      link.download = rule.title.replace(/\s+/g, "_") + ".pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-primary min-h-screen w-full overflow-hidden">
      <Navbar />

      <div className="bg-primary px-6 md:px-20 flex justify-center">
        <div className="w-full max-w-7xl py-20">
          {/* Header Section */}
          <motion.section
            className="bg-black text-white py-16 px-8 md:px-12 rounded-3xl mb-12 relative overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
                    Official documentation and guidelines for athletes, coaches,
                    and organizers
                  </motion.p>
                </div>

                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-right">
                    <div className="text-3xl font-bold text-sky-400">
                      {rulesList.length}
                    </div>
                    <div className="text-gray-400 text-sm">Total Documents</div>
                  </div>
                  <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center">
                    <BookOpen className="text-white" size={24} />
                  </div>
                </motion.div>
              </div>

              {/* Search and Filter Bar */}
              <motion.div
                className="bg-gray-900 rounded-2xl p-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  {/* Search Input */}
                  <div className="flex-1 relative w-full">
                    <Search
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Search rules, descriptions, or keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 border border-gray-700"
                    />
                  </div>

                  {/* Filter and Sort Controls */}
                  <div className="flex gap-3 w-full lg:w-auto">
                    {/* Category Filter */}
                    <div className="relative flex-1 lg:flex-none">
                      <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="w-full lg:w-48 px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 transition-colors flex items-center justify-between gap-2"
                      >
                        <span className="flex items-center gap-2">
                          <Filter size={18} />
                          <span>
                            {selectedCategory === "all"
                              ? "All Categories"
                              : categoryLabels[selectedCategory]}
                          </span>
                        </span>
                        <ChevronDown
                          size={18}
                          className={`transform transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isFilterOpen && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-gray-800 rounded-xl border border-gray-700 shadow-xl z-20">
                          <button
                            onClick={() => {
                              setSelectedCategory("all");
                              setIsFilterOpen(false);
                            }}
                            className={`w-full px-4 py-2.5 text-left hover:bg-gray-700 transition-colors first:rounded-t-xl ${
                              selectedCategory === "all"
                                ? "bg-sky-600 text-white"
                                : "text-gray-300"
                            }`}
                          >
                            All Categories
                          </button>
                          {categories.map((category) => (
                            <button
                              key={category}
                              onClick={() => {
                                setSelectedCategory(category);
                                setIsFilterOpen(false);
                              }}
                              className={`w-full px-4 py-2.5 text-left hover:bg-gray-700 transition-colors last:rounded-b-xl ${
                                selectedCategory === category
                                  ? "bg-sky-600 text-white"
                                  : "text-gray-300"
                              }`}
                            >
                              {categoryLabels[category]}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Sort Dropdown */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
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
                        <button
                          onClick={() => setSearchTerm("")}
                          className="hover:text-white"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    {selectedCategory !== "all" && (
                      <span className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm flex items-center gap-2">
                        Category: {categoryLabels[selectedCategory]}
                        <button
                          onClick={() => setSelectedCategory("all")}
                          className="hover:text-white"
                        >
                          ×
                        </button>
                      </span>
                    )}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.section>

          {/* Rules Grid */}
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
                                <CategoryIcon
                                  size={24}
                                  className="text-sky-400"
                                />
                              </div>
                              <div>
                                <h2 className="text-xl font-bold text-white line-clamp-2 leading-tight">
                                  {rule.title}
                                </h2>
                                <div className="flex items-center gap-2 mt-1">
                                  <Calendar
                                    size={14}
                                    className="text-gray-400"
                                  />
                                  <span className="text-gray-400 text-sm">
                                    {rule.date}
                                  </span>
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
                            <span className="capitalize flex items-center gap-1">
                              {rule.isGoogleDrive && (
                                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                                  {rule.requiresAccess && <Lock size={10} />}
                                  Drive
                                </span>
                              )}
                              {categoryLabels[rule.category]}
                            </span>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <button
                              onClick={() => handlePreview(rule)}
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
                            </button>
                            <button
                              onClick={() => handleDownload(rule)}
                              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-xl transition-all duration-200 min-w-[120px]"
                            >
                              <Download size={18} />
                              <span>PDF</span>
                            </button>
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
                    <FileCheck
                      size={64}
                      className="text-gray-600 mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      No documents found
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Try adjusting your search terms or filters to find what
                      you're looking for.
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
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Document Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => {
                const IconComponent = categoryIcons[category];
                const count = rulesList.filter(
                  (rule) => rule.category === category,
                ).length;
                return (
                  <div
                    key={category}
                    className="bg-gray-900 rounded-2xl p-6 text-center group hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-sky-500/20 rounded-xl group-hover:bg-sky-500/30 transition-colors">
                        <IconComponent size={24} className="text-sky-400" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {count}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {categoryLabels[category]}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          <Footer />
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewDocument &&
          (previewDocument.isGoogleDrive ? (
            <GoogleDrivePreview
              fileId={previewDocument.googleDriveId}
              requiresAccess={previewDocument.requiresAccess}
              onClose={() => setPreviewDocument(null)}
            />
          ) : (
            <PDFPreview
              fileUrl={previewDocument.fileUrl}
              title={previewDocument.title}
              onClose={() => setPreviewDocument(null)}
            />
          ))}
      </AnimatePresence>

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
