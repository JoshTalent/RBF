import React, { useState, useMemo, useEffect } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { 
  Mail, 
  Phone, 
  Search, 
  Award, 
  Target, 
  Activity, 
  Trophy,
  Calendar,
  MapPin,
  Users,
  BarChart3,
  Shield,
  Zap,
  Heart,
  Star,
  Filter,
  X,
  Eye,
  Share2,
  Bookmark,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Instagram,
  Twitter,
  Youtube,
  Globe
} from "lucide-react";
import { abc } from "../../assets";

const boxers = [
  {
    id: 1,
    name: "John 'The Lion' Gatera",
    nickname: "The Lion",
    image: "https://i.imgur.com/wYOjC8z.jpeg",
    video: "https://assets.mixkit.co/videos/preview/mixkit-boxer-training-with-punching-bag-123-large.mp4",
    record: "20-2-1",
    wins: 20,
    kos: 15,
    losses: 2,
    draws: 1,
    weightClass: "Lightweight",
    rank: "Champion",
    country: "Rwanda",
    flag: "🇷🇼",
    age: 28,
    height: "5'9\"",
    reach: "72\"",
    stance: "Orthodox",
    yearsPro: 6,
    trainingGym: "Kigali Elite Boxing",
    bio: "Lightweight boxer known for speed and powerful knockouts. Current world champion with exceptional technical skills and devastating punching power.",
    manager: { 
      name: "Alex Mwangi", 
      email: "alex.mwangi@example.com", 
      phone: "+250 788 123 456",
      experience: "15 years"
    },
    stats: {
      power: 92,
      speed: 88,
      defense: 85,
      stamina: 87,
      technique: 90,
      agility: 86
    },
    achievements: [
      "World Boxing Champion 2023",
      "African Boxing Union Title",
      "Golden Gloves Award",
      "KO of the Year 2022",
      "Undefeated in last 12 fights"
    ],
    nextFight: "2024-03-15",
    opponent: "Carlos Martinez",
    social: {
      instagram: "@john_the_lion",
      twitter: "@john_gatera",
      youtube: "John Gatera Official"
    },
    fightStyle: "Aggressive pressure fighter",
    signatureMove: "Left hook to body"
  },
  {
    id: 2,
    name: "Michael 'The Rock' Smith",
    nickname: "The Rock",
    image: "https://i.postimg.cc/857zgCw7/kanyarwanda-7.jpg",
    video: "https://assets.mixkit.co/videos/preview/mixkit-athlete-doing-boxing-training-123-large.mp4",
    record: "15-3-0",
    wins: 15,
    kos: 9,
    losses: 3,
    draws: 0,
    weightClass: "Middleweight",
    rank: "#1 Contender",
    country: "Kenya",
    flag: "🇰🇪",
    age: 26,
    height: "6'1\"",
    reach: "76\"",
    stance: "Southpaw",
    yearsPro: 4,
    trainingGym: "Nairobi Fight Club",
    bio: "Middleweight champion with incredible stamina and defense. Known for strategic fights and impeccable footwork.",
    manager: { 
      name: "Sarah Kimani", 
      email: "sarah.kimani@example.com", 
      phone: "+250 789 654 321",
      experience: "12 years"
    },
    stats: {
      power: 85,
      speed: 82,
      defense: 95,
      stamina: 90,
      technique: 88,
      agility: 80
    },
    achievements: [
      "Continental Champion",
      "National Boxing Title",
      "Most Improved Fighter 2023",
      "Defensive Fighter of the Year"
    ],
    nextFight: "2024-04-02",
    opponent: "James Rodriguez",
    social: {
      instagram: "@mike_the_rock",
      twitter: "@michael_smith",
      youtube: "Michael Smith Boxing"
    },
    fightStyle: "Technical counter-puncher",
    signatureMove: "Straight left counter"
  },
  {
    id: 3,
    name: "David 'Thunder' Johnson",
    nickname: "Thunder",
    image: abc,
    video: "https://assets.mixkit.co/videos/preview/mixkit-boxer-training-in-the-ring-123-large.mp4",
    record: "18-1-0",
    wins: 18,
    kos: 12,
    losses: 1,
    draws: 0,
    weightClass: "Featherweight",
    rank: "Champion",
    country: "Nigeria",
    flag: "🇳🇬",
    age: 24,
    height: "5'7\"",
    reach: "70\"",
    stance: "Orthodox",
    yearsPro: 3,
    trainingGym: "Lagos Speed Academy",
    bio: "Featherweight fighter famous for lightning-fast punches and unmatched agility in the ring. Youngest champion in promotion history.",
    manager: { 
      name: "John Doe", 
      email: "john.doe@example.com", 
      phone: "+250 777 888 999",
      experience: "10 years"
    },
    stats: {
      power: 78,
      speed: 98,
      defense: 88,
      stamina: 85,
      technique: 92,
      agility: 96
    },
    achievements: [
      "International Boxing Title",
      "Speed Demon Award",
      "Rookie of the Year 2021",
      "Fastest KO Record (0:28)"
    ],
    nextFight: "2024-03-28",
    opponent: "Miguel Santos",
    social: {
      instagram: "@david_thunder",
      twitter: "@david_johnson",
      youtube: "David Thunder Highlights"
    },
    fightStyle: "Speed-based volume puncher",
    signatureMove: "Lightning jab combinations"
  },
];

const StatRadial = ({ label, value, color }) => (
  <div className="text-center">
    <div className="relative w-16 h-16 mx-auto mb-2">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#1f2937"
          strokeWidth="3"
        />
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={`${value}, 100`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-sm">{value}</span>
      </div>
    </div>
    <span className="text-gray-400 text-xs font-medium">{label}</span>
  </div>
);

const BoxerCard = ({ boxer, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const winPercentage = useMemo(() => {
    return Math.round((boxer.wins / (boxer.wins + boxer.losses)) * 100);
  }, [boxer.wins, boxer.losses]);

  const knockoutPercentage = useMemo(() => {
    return Math.round((boxer.kos / boxer.wins) * 100);
  }, [boxer.kos, boxer.wins]);

  const stats = useMemo(() => [
    { label: "Wins", value: boxer.wins, color: "text-green-400", bg: "bg-green-500/20" },
    { label: "KOs", value: boxer.kos, color: "text-yellow-400", bg: "bg-yellow-500/20" },
    { label: "Losses", value: boxer.losses, color: "text-red-400", bg: "bg-red-500/20" },
    { label: "Win %", value: winPercentage, color: "text-blue-400", bg: "bg-blue-500/20" }
  ], [boxer, winPercentage]);

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-sky-500/50 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 to-emerald-900/10"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/10 to-emerald-500/10 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Media Section */}
        <div className="relative h-80 overflow-hidden">
          {/* Video/Image Toggle */}
          {isVideoPlaying ? (
            <video
              src={boxer.video}
              autoPlay
              muted={isMuted}
              loop
              className="w-full h-full object-cover"
            />
          ) : (
            <motion.img
              src={boxer.image}
              alt={boxer.name}
              className={`w-full h-full object-cover transition-all duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          )}
          
          {/* Media Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="p-2 bg-black/80 backdrop-blur-sm rounded-full text-white hover:bg-sky-500 transition-colors"
            >
              {isVideoPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 bg-black/80 backdrop-blur-sm rounded-full text-white hover:bg-sky-500 transition-colors"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-2xl border border-sky-500/50">
              <Award size={14} className="text-sky-400" />
              <span className="text-white font-bold text-xs">{boxer.rank}</span>
            </div>
            <div className="bg-sky-500/20 backdrop-blur-sm px-3 py-2 rounded-2xl border border-sky-500/30">
              <span className="text-sky-300 font-bold text-xs">{boxer.weightClass}</span>
            </div>
          </div>

          {/* Country Flag */}
          <div className="absolute top-4 right-4 text-2xl">
            {boxer.flag}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-black text-white mb-1 leading-tight">
                {boxer.name}
              </h3>
              <p className="text-gray-400 text-sm font-medium">{boxer.record}</p>
            </div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-br from-sky-500 to-emerald-500 p-3 rounded-2xl shadow-2xl">
                <div className="text-lg font-black text-white">{winPercentage}%</div>
                <div className="text-[10px] text-white/80 font-medium">WIN RATE</div>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className={`text-center p-2 rounded-xl border border-gray-800 ${stat.bg}`}
              >
                <div className={`text-sm font-black ${stat.color} mb-1`}>
                  {stat.label === 'Win %' ? `${stat.value}%` : stat.value}
                </div>
                <div className="text-gray-400 text-[10px] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Fighter Details */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Style</span>
              <span className="text-white font-semibold">{boxer.fightStyle}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Stance</span>
              <span className="text-white font-semibold capitalize">{boxer.stance}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Age</span>
              <span className="text-white font-semibold">{boxer.age} years</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mb-4">
            <motion.button
              onClick={() => setShowDetail(true)}
              className="flex-1 bg-sky-500 text-white py-3 rounded-xl font-semibold hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye size={16} />
              View Profile
            </motion.button>
            <motion.button
              className="p-3 bg-gray-800 text-gray-300 rounded-xl hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bookmark size={16} />
            </motion.button>
            <motion.button
              className="p-3 bg-gray-800 text-gray-300 rounded-xl hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 size={16} />
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3">
            {Object.entries(boxer.social).map(([platform, handle]) => (
              <motion.a
                key={platform}
                href="#"
                className="text-gray-400 hover:text-sky-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                {platform === 'instagram' && <Instagram size={16} />}
                {platform === 'twitter' && <Twitter size={16} />}
                {platform === 'youtube' && <Youtube size={16} />}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {showDetail && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <DetailView boxer={boxer} onClose={() => setShowDetail(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DetailView = ({ boxer, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="p-8">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-3xl font-black text-white">{boxer.name}</h2>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={boxer.image}
            alt={boxer.name}
            className="w-full h-64 object-cover rounded-2xl mb-4"
          />
          {/* Add more detailed content here */}
        </div>
        <div>
          {/* Add detailed stats and info */}
        </div>
      </div>
    </div>
  );
};

const Others = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeightClass, setSelectedWeightClass] = useState("all");
  const [selectedRank, setSelectedRank] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
  
  const weightClasses = useMemo(() => 
    ['all', ...new Set(boxers.map(boxer => boxer.weightClass))], 
  []);

  const ranks = useMemo(() => 
    ['all', ...new Set(boxers.map(boxer => boxer.rank))], 
  []);

  const filteredBoxers = useMemo(() => {
    let filtered = boxers.filter((boxer) => {
      const matchesSearch = 
        boxer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        boxer.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        boxer.weightClass.toLowerCase().includes(searchTerm.toLowerCase()) ||
        boxer.rank.toLowerCase().includes(searchTerm.toLowerCase()) ||
        boxer.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        boxer.fightStyle.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesWeightClass = selectedWeightClass === "all" || boxer.weightClass === selectedWeightClass;
      const matchesRank = selectedRank === "all" || boxer.rank === selectedRank;

      return matchesSearch && matchesWeightClass && matchesRank;
    });

    // Sort boxers
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "wins":
          return b.wins - a.wins;
        case "kos":
          return b.kos - a.kos;
        case "winPercentage":
          return (b.wins / (b.wins + b.losses)) - (a.wins / (a.wins + a.losses));
        case "age":
          return a.age - b.age;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedWeightClass, selectedRank, sortBy]);

  const totalStats = useMemo(() => ({
    wins: boxers.reduce((sum, boxer) => sum + boxer.wins, 0),
    kos: boxers.reduce((sum, boxer) => sum + boxer.kos, 0),
    champions: boxers.filter(boxer => boxer.rank.includes('Champion')).length,
    totalFights: boxers.reduce((sum, boxer) => sum + boxer.wins + boxer.losses + (boxer.draws || 0), 0)
  }), []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />

      {/* Enhanced Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="pt-24 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-sky-500 to-emerald-500 p-1 rounded-2xl">
                <div className="bg-black px-6 py-2 rounded-xl">
                  <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent font-bold text-sm">
                    PROFESSIONAL BOXING ROSTER
                  </span>
                </div>
              </div>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-4">
              FIGHTER ROSTER
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Meet our elite professional fighters. Each champion brings unique skills and an impressive record to the ring.
            </p>
          </motion.div>

          {/* Controls */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search fighters by name, style, country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-3 rounded-2xl bg-black/50 backdrop-blur-sm text-white placeholder-gray-400 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={selectedWeightClass}
                onChange={(e) => setSelectedWeightClass(e.target.value)}
                className="px-4 py-3 rounded-2xl bg-black/50 backdrop-blur-sm text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              >
                {weightClasses.map(weightClass => (
                  <option key={weightClass} value={weightClass}>
                    {weightClass === 'all' ? 'All Classes' : weightClass}
                  </option>
                ))}
              </select>

              <select
                value={selectedRank}
                onChange={(e) => setSelectedRank(e.target.value)}
                className="px-4 py-3 rounded-2xl bg-black/50 backdrop-blur-sm text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              >
                {ranks.map(rank => (
                  <option key={rank} value={rank}>
                    {rank === 'all' ? 'All Ranks' : rank}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-2xl bg-black/50 backdrop-blur-sm text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              >
                <option value="name">Sort by Name</option>
                <option value="wins">Most Wins</option>
                <option value="kos">Most KOs</option>
                <option value="winPercentage">Win Percentage</option>
                <option value="age">Age</option>
              </select>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredBoxers.length}</span> fighters
            </p>
          </motion.div>

          {/* Boxers Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {filteredBoxers.map((boxer, index) => (
                <BoxerCard key={boxer.id} boxer={boxer} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredBoxers.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-8xl mb-6">🥊</div>
              <h3 className="text-2xl font-bold text-white mb-4">No Fighters Found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
              <button
                onClick={() => {
                  setSelectedWeightClass('all');
                  setSelectedRank('all');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors font-semibold"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Others;