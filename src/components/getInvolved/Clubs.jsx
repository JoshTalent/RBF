import React, { useState, useMemo } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  User,
  Award,
  Users,
  Calendar,
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Star,
  Crown,
  Target,
  Mail,
  Globe,
  Clock,
  Trophy,
  Shield,
  Activity,
  BarChart3,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

// Enhanced clubs data with more details
const clubsData = [
  {
    id: 1,
    name: "Kigali Elite Boxing Club",
    location: "Kigali City, Rwanda",
    province: "Kigali",
    coach: "Jean Bosco Ndayambaje",
    phone: "+250 788 123 456",
    email: "info@kigaliboxing.rw",
    website: "www.kigaliboxing.rw",
    achievements: "5 National Titles, 3 International Medals",
    founded: 2005,
    members: 120,
    activeFighters: 45,
    trainingHours: "6:00 AM - 8:00 PM",
    description: "Kigali Elite Boxing Club is Rwanda's premier boxing institution, consistently producing champions who represent the nation on international stages. With state-of-the-art facilities and expert coaching staff.",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",
    facilities: ["Olympic-size Ring", "Weight Training", "Cardio Zone", "Recovery Room"],
    programs: ["Elite Training", "Youth Development", "Women's Boxing", "Fitness Classes"],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    name: "Muhanga Boxing Academy",
    location: "Muhanga, Southern Province",
    province: "Southern",
    coach: "Innocent Mugabo",
    phone: "+250 789 654 321",
    email: "muhangaboxing@email.com",
    website: "www.muhangaboxing.rw",
    achievements: "3 Youth Championships, 2 Regional Titles",
    founded: 2010,
    members: 80,
    activeFighters: 32,
    trainingHours: "5:00 AM - 9:00 PM",
    description: "Muhanga Boxing Academy specializes in youth development with structured programs designed to nurture future champions. Our focus is on technical excellence and character building.",
    image: "https://images.unsplash.com/photo-1608889175123-8a947c2f92d3?auto=format&fit=crop&w=800&q=80",
    facilities: ["Training Ring", "Basic Gym", "Meeting Room"],
    programs: ["Youth Program", "Beginner Classes", "Competition Prep"],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.5,
    featured: false
  },
  {
    id: 3,
    name: "Rubavu Champions Center",
    location: "Rubavu, Western Province",
    province: "Western",
    coach: "Aimable Nkurunziza",
    phone: "+250 784 567 890",
    email: "rubavuboxing@email.com",
    website: "www.rubavuboxing.rw",
    achievements: "2 International Participants, 4 National Champions",
    founded: 2015,
    members: 65,
    activeFighters: 28,
    trainingHours: "5:30 AM - 8:30 PM",
    description: "Rubavu Champions Center leverages its scenic Lake Kivu location to provide inspirational training environments. We've produced boxers competing internationally across Africa.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    facilities: ["Professional Ring", "Strength Training", "Lake-view Gym"],
    programs: ["Elite Program", "Recreational Boxing", "Tournament Prep"],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.6,
    featured: true
  },
  {
    id: 4,
    name: "Huye Boxing Institute",
    location: "Huye, Southern Province",
    province: "Southern",
    coach: "Marie Claire Uwase",
    phone: "+250 783 987 654",
    email: "huyeboxing@email.com",
    website: "www.huyeboxing.rw",
    achievements: "1 National Champion, Women's Development Program",
    founded: 2018,
    members: 45,
    activeFighters: 18,
    trainingHours: "6:00 AM - 7:00 PM",
    description: "Huye Boxing Institute focuses on gender equality in sports with strong women's boxing programs. We combine traditional techniques with modern training methodologies.",
    image: "https://images.unsplash.com/photo-1596704013025-1c0b1a9c6a2c?w=800&h=600&fit=crop",
    facilities: ["Training Ring", "Women's Locker Room", "Study Area"],
    programs: ["Women's Boxing", "Youth Development", "Community Classes"],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.4,
    featured: false
  },
  {
    id: 5,
    name: "Musanze High Altitude Camp",
    location: "Musanze, Northern Province",
    province: "Northern",
    coach: "Patrick Habimana",
    phone: "+250 785 123 789",
    email: "musanzeboxing@email.com",
    website: "www.musanzeboxing.rw",
    achievements: "Altitude Training Specialists, 3 Regional Titles",
    founded: 2012,
    members: 55,
    activeFighters: 22,
    trainingHours: "5:00 AM - 8:00 PM",
    description: "Located in the volcanic region, our high-altitude training gives fighters exceptional stamina advantages. Professional setup for serious competitors.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    facilities: ["High-Altitude Gym", "Mountain Trails", "Recovery Center"],
    programs: ["Altitude Training", "Professional Development", "Fitness Retreats"],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.7,
    featured: true
  },
  {
    id: 6,
    name: "Kayonza Boxing Foundation",
    location: "Kayonza, Eastern Province",
    province: "Eastern",
    coach: "Eric Nsengimana",
    phone: "+250 786 456 123",
    email: "kayonzaboxing@email.com",
    website: "www.kayonzaboxing.rw",
    achievements: "Community Outreach Excellence, 2 Youth Champions",
    founded: 2019,
    members: 35,
    activeFighters: 15,
    trainingHours: "6:00 AM - 7:30 PM",
    description: "Kayonza Boxing Foundation uses boxing as a tool for youth empowerment and community development. We focus on life skills alongside athletic training.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fce7090?w=800&h=600&fit=crop",
    facilities: ["Community Gym", "Computer Lab", "Meeting Space"],
    programs: ["Youth Empowerment", "School Programs", "Recreational Boxing"],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.3,
    featured: false
  }
];

const provinces = ["All", "Kigali", "Southern", "Western", "Northern", "Eastern"];

const ClubCard = ({ club }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Glow Effect */}
      {club.featured && (
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
      )}
      
      <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border ${
        club.featured ? 'border-yellow-500/50' : 'border-gray-800'
      } overflow-hidden transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-2xl group-hover:shadow-sky-500/20`}>
        
        {/* Featured Badge */}
        {club.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold backdrop-blur-sm">
            <Star className="w-3 h-3 fill-current" />
            <span>Featured</span>
          </div>
        )}

        {/* Club Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={club.image}
            alt={club.name}
            className="w-full h-full object-cover transition-transform duration-700"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Rating Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-semibold">{club.rating}</span>
          </div>

          {/* Members Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">{club.members}+</span>
            </div>
          </div>
        </div>

        {/* Club Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors flex-1 pr-4">
              {club.name}
            </h3>
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-gray-400 hover:text-sky-400 hover:bg-sky-500/10 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Basic Info Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-red-400" />
              <span className="truncate">{club.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <User className="w-4 h-4 text-sky-400" />
              <span className="truncate">{club.coach}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Phone className="w-4 h-4 text-green-400" />
              <span className="truncate">{club.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Clock className="w-4 h-4 text-purple-400" />
              <span className="truncate">{club.trainingHours}</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-sky-400">{club.activeFighters}</div>
              <div className="text-xs text-gray-400">Active Fighters</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-400">{club.founded}</div>
              <div className="text-xs text-gray-400">Established</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-yellow-400">{club.rating}</div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
          </div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden border-t border-gray-800 pt-4"
              >
                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {club.description}
                </p>

                {/* Achievements */}
                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300 font-semibold">Achievements:</span>
                  <span className="text-sm text-gray-400">{club.achievements}</span>
                </div>

                {/* Facilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-sky-400" />
                    Facilities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {club.facilities.map((facility, index) => (
                      <span key={index} className="px-2 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full border border-sky-500/30">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Programs */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-green-400" />
                    Programs
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {club.programs.map((program, index) => (
                      <span key={index} className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact & Social */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex gap-3">
                    <motion.a
                      href={`mailto:${club.email}`}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={club.website}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Globe className="w-5 h-5" />
                    </motion.a>
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={club.socials.facebook}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Facebook className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={club.socials.instagram}
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={club.socials.twitter}
                      className="text-gray-400 hover:text-sky-400 transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Clubs = () => {
  const [search, setSearch] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filteredClubs = useMemo(() => {
    return clubsData
      .filter((club) => {
        const matchesSearch = club.name.toLowerCase().includes(search.toLowerCase()) ||
                            club.coach.toLowerCase().includes(search.toLowerCase()) ||
                            club.location.toLowerCase().includes(search.toLowerCase());
        
        const matchesProvince = provinceFilter === "All" || club.province === provinceFilter;
        
        return matchesSearch && matchesProvince;
      })
      .sort((a, b) => {
        switch(sortBy) {
          case "featured": 
            return (b.featured - a.featured) || (b.rating - a.rating);
          case "rating": 
            return b.rating - a.rating;
          case "members": 
            return b.members - a.members;
          case "newest": 
            return b.founded - a.founded;
          default: 
            return a.name.localeCompare(b.name);
        }
      });
  }, [search, provinceFilter, sortBy]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-sky-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>
      </div>

      <Navbar />

      {/* Header Section */}
      <motion.header 
        className="relative py-28 px-6 text-center z-10 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/40 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-sky-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-sky-500/30 mb-6"
          >
            <Target className="w-5 h-5 text-sky-400" />
            <span className="text-sky-300 font-semibold">BOXING CLUBS NETWORK</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
            Boxing Clubs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover Rwanda's premier boxing institutions. Find clubs by location, facilities, and programs to start your boxing journey.
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow py-16 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        {/* Search and Filters */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search clubs, coaches, or locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 backdrop-blur-sm transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <select
                value={provinceFilter}
                onChange={(e) => setProvinceFilter(e.target.value)}
                className="pl-10 pr-8 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
              >
                {provinces.map(province => (
                  <option key={province} value={province}>{province} Province</option>
                ))}
              </select>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
            >
              <option value="featured">Featured First</option>
              <option value="rating">Highest Rated</option>
              <option value="members">Most Members</option>
              <option value="newest">Newest First</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{filteredClubs.length}</span> clubs
            {provinceFilter !== "All" && ` in ${provinceFilter} Province`}
          </p>
        </motion.div>

        {/* Clubs Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {filteredClubs.length > 0 ? (
              filteredClubs.map((club) => (
                <ClubCard key={club.id} club={club} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 col-span-3"
              >
                <div className="text-6xl mb-4">🥊</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Clubs Found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.section 
          className="mt-20 relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
          
          <div className="relative z-10 text-center py-16 px-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-6"
            >
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">JOIN OUR NETWORK</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Ready to Register Your Club?
            </h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Join Rwanda's official boxing federation network. Get national recognition, access to tournaments, and support for your club's development.
            </p>
            
            <motion.button
              className="px-8 py-4 bg-white text-sky-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="flex items-center gap-2">
                Register Your Club
                <Target className="w-5 h-5" />
              </Link>
            </motion.button>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Clubs;