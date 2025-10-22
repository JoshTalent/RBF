import React, { useState } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Globe, 
  Users, 
  Award, 
  TrendingUp, 
  Handshake,
  ExternalLink,
  Filter,
  X,
  Star,
  Calendar,
  MapPin
} from "lucide-react";

const partnersList = [
  {
    id: 1,
    name: "Rwanda Development Board",
    logo: "https://via.placeholder.com/200x120?text=RDB",
    website: "https://www.rdb.rw",
    description: "Official government partner supporting sports development and youth empowerment programs across Rwanda.",
    category: "Government",
    partnership: "Strategic Partner",
    since: 2018,
    tier: "Platinum",
    initiatives: ["Youth Development", "Infrastructure", "International Events"],
    impact: "Supported 15+ national tournaments and athlete development programs"
  },
  {
    id: 2,
    name: "Bank of Kigali",
    logo: "https://via.placeholder.com/200x120?text=BoK",
    website: "https://www.bk.rw",
    description: "Leading financial institution and main sponsor for national boxing championships and athlete scholarships.",
    category: "Corporate",
    partnership: "Title Sponsor",
    since: 2020,
    tier: "Platinum",
    initiatives: ["Championship Sponsorship", "Athlete Scholarships", "Equipment Funding"],
    impact: "Sponsored 5 national championships and 20+ athlete scholarships"
  },
  {
    id: 3,
    name: "MTN Rwanda",
    logo: "https://via.placeholder.com/200x120?text=MTN",
    website: "https://www.mtn.co.rw",
    description: "Telecommunications giant providing digital coverage, promotion, and technological support for boxing events.",
    category: "Technology",
    partnership: "Digital Partner",
    since: 2019,
    tier: "Gold",
    initiatives: ["Digital Promotion", "Live Streaming", "Fan Engagement"],
    impact: "Reached 2M+ viewers through digital platforms and live streams"
  },
  {
    id: 4,
    name: "Airtel Rwanda",
    logo: "https://via.placeholder.com/200x120?text=Airtel",
    website: "https://www.airtel.co.rw",
    description: "Mobile network operator supporting grassroots boxing programs and community outreach initiatives.",
    category: "Corporate",
    partnership: "Community Partner",
    since: 2021,
    tier: "Silver",
    initiatives: ["Grassroots Programs", "Community Outreach", "Talent Identification"],
    impact: "Supported 50+ community boxing programs across Rwanda"
  },
  {
    id: 5,
    name: "Inyange Industries",
    logo: "https://via.placeholder.com/200x120?text=Inyange",
    website: "https://www.inyange.com",
    description: "Leading beverage company providing hydration support and nutritional products for athletes.",
    category: "Nutrition",
    partnership: "Wellness Partner",
    since: 2022,
    tier: "Silver",
    initiatives: ["Athlete Nutrition", "Hydration Support", "Recovery Programs"],
    impact: "Provided nutritional support for 200+ athletes annually"
  },
  {
    id: 6,
    name: "Rwanda Airlines",
    logo: "https://via.placeholder.com/200x120?text=RwandaAir",
    website: "https://www.rwandair.com",
    description: "National carrier supporting international travel for athletes competing in global tournaments.",
    category: "Travel",
    partnership: "Travel Partner",
    since: 2020,
    tier: "Gold",
    initiatives: ["International Travel", "Athlete Logistics", "Competition Support"],
    impact: "Enabled 100+ international competition participations"
  }
];

const PartnersSponsors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTier, setSelectedTier] = useState("All");
  const [selectedPartner, setSelectedPartner] = useState(null);

  const categories = ["All", "Government", "Corporate", "Technology", "Nutrition", "Travel"];
  const tiers = ["All", "Platinum", "Gold", "Silver"];

  const filteredPartners = partnersList.filter((partner) => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.initiatives.some(init => init.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || partner.category === selectedCategory;
    const matchesTier = selectedTier === "All" || partner.tier === selectedTier;

    return matchesSearch && matchesCategory && matchesTier;
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

  const getTierColor = (tier) => {
    switch (tier) {
      case "Platinum": return "from-gray-400 to-white";
      case "Gold": return "from-yellow-400 to-yellow-200";
      case "Silver": return "from-gray-300 to-gray-100";
      default: return "from-sky-400 to-blue-500";
    }
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
            <Handshake className="text-sky-400" />
            <span className="text-sky-400 font-semibold text-sm tracking-wider uppercase">
              STRATEGIC PARTNERSHIPS
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Partners & Sponsors
          </motion.h1>

          <motion.p 
            className="text-slate-300 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Building champions together with our valued partners who share our vision 
            for excellence in Rwandan boxing and sports development.
          </motion.p>
        </div>
      </section>

      {/* Partnership Stats */}
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
              { number: "6", label: "Strategic Partners", icon: <Handshake /> },
              { number: "4", label: "Partnership Years", icon: <Calendar /> },
              { number: "50+", label: "Initiatives", icon: <TrendingUp /> },
              { number: "National", label: "Coverage", icon: <MapPin /> }
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
                  placeholder="Search partners..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
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

              {/* Tier Filter */}
              <div className="relative">
                <Award className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white appearance-none focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300"
                >
                  {tiers.map(tier => (
                    <option key={tier} value={tier} className="bg-slate-800">
                      {tier}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedTier("All");
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
              {selectedTier !== "All" && (
                <span className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                  {selectedTier}
                  <X size={14} className="cursor-pointer" onClick={() => setSelectedTier("All")} />
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

          {/* Partners Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredPartners.length > 0 ? (
                filteredPartners.map((partner) => (
                  <motion.div
                    key={partner.id}
                    variants={cardVariants}
                    layout
                    className="group relative"
                    whileHover={{ y: -8 }}
                  >
                    {/* Partner Card */}
                    <div 
                      className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/2 border border-white/10 group-hover:border-sky-500/40 transition-all duration-500 h-full cursor-pointer"
                      onClick={() => setSelectedPartner(partner)}
                    >
                      {/* Tier Badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getTierColor(partner.tier)} text-slate-900 z-10 shadow-lg`}>
                        {partner.tier}
                      </div>

                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-[1.5px] rounded-3xl bg-slate-900" />
                      </div>

                      <div className="relative z-10 p-6 flex flex-col h-full">
                        {/* Logo */}
                        <div className="flex justify-center mb-4">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="h-16 object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>

                        {/* Partner Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-100 transition-colors duration-300 text-center">
                            {partner.name}
                          </h3>
                          
                          <div className="flex items-center justify-center gap-4 text-slate-400 text-sm mb-3">
                            <span className="px-2 py-1 bg-white/5 rounded text-xs">{partner.category}</span>
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              Since {partner.since}
                            </span>
                          </div>

                          <p className="text-slate-300 text-sm leading-relaxed mb-4 text-center">
                            {partner.description}
                          </p>

                          {/* Initiatives */}
                          <div className="mb-4">
                            <p className="text-slate-400 text-xs mb-2">Key Initiatives:</p>
                            <div className="flex flex-wrap gap-1 justify-center">
                              {partner.initiatives.slice(0, 2).map((initiative, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-white/5 text-slate-300 rounded text-xs border border-white/10"
                                >
                                  {initiative}
                                </span>
                              ))}
                              {partner.initiatives.length > 2 && (
                                <span className="px-2 py-1 bg-white/5 text-slate-400 rounded text-xs border border-white/10">
                                  +{partner.initiatives.length - 2}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Partnership Type */}
                        <div className="text-center mt-4 pt-4 border-t border-white/10">
                          <span className="text-sky-400 text-sm font-semibold">
                            {partner.partnership}
                          </span>
                        </div>

                        {/* View Details CTA */}
                        <div className="mt-4 flex items-center justify-center gap-2 text-sky-400 text-sm font-semibold group-hover:text-sky-300 transition-colors duration-300">
                          View Details
                          <ExternalLink size={14} />
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
                    <h3 className="text-2xl font-bold text-white mb-4">No Partners Found</h3>
                    <p className="text-slate-400 text-lg mb-6">
                      We couldn't find any partners matching your search criteria. 
                      Try adjusting your filters or search terms.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("All");
                        setSelectedTier("All");
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

      {/* Partnership CTA */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-sky-500/20">
            <Handshake className="text-6xl text-sky-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Become a Partner</h2>
            <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Join our network of strategic partners and help shape the future of boxing in Rwanda. 
              Together, we can create opportunities and build champions.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl text-white font-semibold shadow-2xl shadow-sky-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Partnership Opportunities
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Partner Detail Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPartner(null)}
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
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getTierColor(selectedPartner.tier)} text-slate-900 mb-3`}>
                      {selectedPartner.tier} Partner
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedPartner.name}</h2>
                    <div className="flex items-center gap-4 text-slate-300">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-sky-400" />
                        <span>{selectedPartner.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-sky-400" />
                        <span>Partner since {selectedPartner.since}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Handshake size={16} className="text-sky-400" />
                        <span>{selectedPartner.partnership}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPartner(null)}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-300"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Logo and Actions */}
                  <div className="lg:col-span-1">
                    <div className="text-center">
                      <img
                        src={selectedPartner.logo}
                        alt={selectedPartner.name}
                        className="w-48 h-28 object-contain mx-auto mb-6 filter brightness-0 invert"
                      />
                      
                      {/* Website Link */}
                      <a
                        href={selectedPartner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full p-4 bg-white/5 rounded-xl border border-white/10 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-300 mb-6"
                      >
                        <Globe size={20} className="text-sky-400" />
                        <div className="text-left">
                          <div className="text-slate-400 text-sm">Website</div>
                          <div className="text-white font-semibold">Visit Official Site</div>
                        </div>
                        <ExternalLink size={16} className="text-sky-400" />
                      </a>

                      {/* Partnership Details */}
                      <div className="space-y-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <h4 className="text-slate-400 text-sm mb-2">Partnership Type</h4>
                          <div className="text-white font-semibold">{selectedPartner.partnership}</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <h4 className="text-slate-400 text-sm mb-2">Partnership Duration</h4>
                          <div className="text-white font-semibold">{new Date().getFullYear() - selectedPartner.since} Years</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">About the Partnership</h3>
                      <p className="text-slate-300 leading-relaxed">{selectedPartner.description}</p>
                    </div>

                    {/* Impact */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Impact & Achievements</h3>
                      <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                        <p className="text-green-400 font-semibold">{selectedPartner.impact}</p>
                      </div>
                    </div>

                    {/* Initiatives */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Key Initiatives</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedPartner.initiatives.map((initiative, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
                          >
                            <TrendingUp size={16} className="text-sky-400 flex-shrink-0" />
                            <span className="text-slate-300">{initiative}</span>
                          </div>
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

export default PartnersSponsors;