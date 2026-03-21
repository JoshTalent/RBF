import React, { useState, useMemo } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Star,
  Users,
  Calendar,
  Facebook,
  Instagram,
  Twitter,
  Search,
  Filter,
  Crown,
  X,
  Eye,
  Trophy,
  Award,
  ChevronRight,
  Clock,
  Briefcase,
  Shield,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

// Clubs data
const clubsData = [
  {
    id: 1,
    name: "THE REAL BOXING CLUB",
    location: "KIGALI , NYARUGENGE , KIMISAGARA MAISON DES JENNE",
    province: "Kigali",
    coach: "oLIVIER NIYIGENA",
    phone: "+250 781 288 442",
    email: "realboxingrwanda@gmail.com",
    founded: 2010,
    members: 120,
    activeFighters: 45,
    description:
      "Rwanda's premier boxing institution with state-of-the-art facilities and expert coaching staff. We've produced numerous national champions and international competitors.",
    image: "https://i.postimg.cc/268gB9Nn/valentin3.jpg",
    facilities: [
      "Olympic Ring",
      "Weight Training",
      "Cardio Zone",
      "Recovery Room",
    ],
    programs: [
      "Elite Training",
      "Youth Development",
      "Women's Boxing",
      "Fitness Classes",
    ],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.8,
    reviews: 156,
    featured: true,
    trainingHours: "6:00 AM - 8:00 PM",
    achievements: "5 National Titles, 3 International Medals",
  },
  {
    id: 1,
    name: "TIGERS BOXING CLUB",
    location: "KIGALI , NYARUGENGE",
    province: "Kigali",
    coach: "SfBOSE Innocent ",
    phone: "+250783202042",
    email: "tiderboxingclub2025@gmail.com",
    founded: 2015,
    members: 40,
    activeFighters: 20,
    description:
      "Rwanda's premier boxing institution with state-of-the-art facilities and expert coaching staff. We've produced numerous national champions and international competitors.",
    image: "https://i.postimg.cc/43NC0sG6/image10.jpg",
    facilities: [
      "Olympic Ring",
      "Weight Training",
      "Cardio Zone",
      "Recovery Room",
    ],
    programs: [
      "Elite Training",
      "Youth Development",
      "Women's Boxing",
      "Fitness Classes",
    ],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.8,
    reviews: 156,
    featured: true,
    trainingHours: "6:00 AM - 8:00 PM",
    achievements: "5 National Titles, 3 International Medals",
  },
];

const provinces = [
  "All",
  "Kigali",
  "Southern",
  "Western",
  "Northern",
  "Eastern",
];

// Modal Component - Perfectly Centered
const ClubModal = ({ club, isOpen, onClose }) => {
  const [isSaved, setIsSaved] = useState(false);

  if (!club) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal Container - Perfect Center */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Left Column - Image */}
                <div className="lg:w-2/5 h-72 lg:h-auto relative overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent lg:bg-gradient-to-r" />

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/60 rounded-full hover:bg-black/80 transition-colors z-10 backdrop-blur-sm"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>

                  {/* Featured Badge */}
                  {club.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full z-10">
                      <Crown className="w-3 h-3 text-white" />
                      <span className="text-xs font-bold text-white">
                        Featured Club
                      </span>
                    </div>
                  )}

                  {/* Save Button */}
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className="absolute bottom-4 left-4 p-2 bg-black/60 rounded-full hover:bg-black/80 transition-colors z-10 backdrop-blur-sm"
                  >
                    <Heart
                      className={`w-4 h-4 ${isSaved ? "fill-red-500 text-red-500" : "text-white"}`}
                    />
                  </button>
                </div>

                {/* Right Column - Details */}
                <div className="lg:w-3/5 p-6 overflow-y-auto">
                  {/* Club Name */}
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {club.name}
                  </h2>

                  {/* Rating and Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-red-400" />
                      {club.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      {club.rating} ({club.reviews} reviews)
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-sky-400" />
                      {club.members} members
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {club.description}
                  </p>

                  {/* Quick Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/5 rounded-lg p-3 border border-gray-800">
                      <div className="text-xs text-gray-400 mb-1">Founded</div>
                      <div className="text-white font-semibold">
                        {club.founded}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-gray-800">
                      <div className="text-xs text-gray-400 mb-1">
                        Active Fighters
                      </div>
                      <div className="text-white font-semibold">
                        {club.activeFighters}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-gray-800">
                      <div className="text-xs text-gray-400 mb-1">
                        Training Hours
                      </div>
                      <div className="text-white font-semibold text-sm">
                        {club.trainingHours}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-gray-800">
                      <div className="text-xs text-gray-400 mb-1">
                        Achievements
                      </div>
                      <div className="text-white font-semibold text-sm truncate">
                        {club.achievements}
                      </div>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-sky-400" />
                      Facilities
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {club.facilities.map((facility, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1.5 bg-gray-800/50 text-gray-300 text-xs rounded-lg border border-gray-700"
                        >
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Programs */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      Programs
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {club.programs.map((program, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1.5 bg-sky-500/10 text-sky-400 text-xs rounded-lg border border-sky-500/30"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{club.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-4 h-4 text-sky-400" />
                          <span className="text-gray-300">{club.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300">
                            {club.trainingHours}
                          </span>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-2">
                        {Object.entries(club.socials).map(
                          ([platform, link]) => {
                            const Icon =
                              platform === "facebook"
                                ? Facebook
                                : platform === "instagram"
                                  ? Instagram
                                  : Twitter;
                            return (
                              <a
                                key={platform}
                                href={link}
                                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Icon className="w-4 h-4 text-gray-400" />
                              </a>
                            );
                          },
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() =>
                          (window.location.href = `tel:${club.phone}`)
                        }
                        className="py-2.5 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </button>
                      <button
                        onClick={() =>
                          (window.location.href = `mailto:${club.email}`)
                        }
                        className="py-2.5 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Send Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// Club Card Component
const ClubCard = ({ club, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onClick={() => onViewDetails(club)}
    >
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={club.image}
            alt={club.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

          {/* Featured Badge */}
          {club.featured && (
            <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full">
              <Crown className="w-3 h-3 text-white" />
              <span className="text-xs font-bold text-white">Featured</span>
            </div>
          )}

          {/* Rating Badge */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs font-semibold text-white">
              {club.rating}
            </span>
          </div>

          {/* Members Count */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
            <Users className="w-3 h-3 text-sky-400" />
            <span className="text-xs font-semibold text-white">
              {club.members}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors mb-2 line-clamp-1">
            {club.name}
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <MapPin className="w-3 h-3 text-red-400" />
            <span className="line-clamp-1">{club.location}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {club.founded}
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-3 h-3" />
              {club.activeFighters} fighters
            </span>
          </div>

          <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
            {club.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {club.programs.slice(0, 2).map((program, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded"
              >
                {program}
              </span>
            ))}
            {club.programs.length > 2 && (
              <span className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded">
                +{club.programs.length - 2}
              </span>
            )}
          </div>

          <button className="w-full py-2 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group/btn">
            <span>View Details</span>
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Main Clubs Component
const Clubs = () => {
  const [search, setSearch] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("All");
  const [selectedClub, setSelectedClub] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredClubs = useMemo(() => {
    return clubsData.filter((club) => {
      const matchesSearch =
        club.name.toLowerCase().includes(search.toLowerCase()) ||
        club.coach.toLowerCase().includes(search.toLowerCase()) ||
        club.location.toLowerCase().includes(search.toLowerCase());
      const matchesProvince =
        provinceFilter === "All" || club.province === provinceFilter;
      return matchesSearch && matchesProvince;
    });
  }, [search, provinceFilter]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center border-b border-gray-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Boxing Clubs
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover Rwanda's premier boxing institutions. Find the perfect
              club to start your journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-8 mt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {clubsData.length}
              </div>
              <div className="text-sm text-gray-500">Total Clubs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {provinces.length - 1}
              </div>
              <div className="text-sm text-gray-500">Provinces</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {clubsData.filter((c) => c.featured).length}
              </div>
              <div className="text-sm text-gray-500">Featured Clubs</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search clubs, coaches, or locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl flex items-center gap-2 hover:bg-gray-800/50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>

            <div className={`${showFilters ? "flex" : "hidden"} md:flex gap-3`}>
              <select
                value={provinceFilter}
                onChange={(e) => setProvinceFilter(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-sky-500 cursor-pointer hover:bg-gray-800/50 transition-colors"
              >
                {provinces.map((p) => (
                  <option key={p} value={p}>
                    {p === "All" ? "All Provinces" : `${p} Province`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-400 text-sm">
            Showing{" "}
            <span className="text-white font-semibold">
              {filteredClubs.length}
            </span>{" "}
            clubs
          </p>
          {(search || provinceFilter !== "All") && (
            <button
              onClick={() => {
                setSearch("");
                setProvinceFilter("All");
              }}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
              Clear filters
            </button>
          )}
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredClubs.length > 0 ? (
              filteredClubs.map((club, index) => (
                <ClubCard
                  key={club.id}
                  club={club}
                  onViewDetails={setSelectedClub}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-16"
              >
                <div className="text-6xl mb-4">🥊</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No Clubs Found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search criteria or clear the filters.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Register Your Boxing Club
              </h2>
              <p className="text-gray-100 mb-6 max-w-md mx-auto">
                Join Rwanda's official boxing federation network. Get national
                recognition and support.
              </p>
              <Link to="/contact">
                <button className="px-6 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center gap-2">
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />

      {/* Modal */}
      <ClubModal
        club={selectedClub}
        isOpen={!!selectedClub}
        onClose={() => setSelectedClub(null)}
      />
    </div>
  );
};

export default Clubs;
