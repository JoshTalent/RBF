import React, { useState, useMemo, useRef, useEffect } from "react";
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
  Heart,
  X,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  Eye,
  DollarSign,
  Camera,
  Dumbbell,
  TrendingUp,
  Sparkles,
  Zap,
  Medal,
  Flag,
  Linkedin,
  Youtube,
  Gift,
  Award as AwardIcon,
  Briefcase,
  Calendar as CalendarIcon,
  CheckCircle,
  AlertCircle,
  Info,
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
    description:
      "Kigali Elite Boxing Club is Rwanda's premier boxing institution, consistently producing champions who represent the nation on international stages. With state-of-the-art facilities and expert coaching staff.",
    image:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80",
    ],
    facilities: [
      "Olympic-size Ring",
      "Weight Training",
      "Cardio Zone",
      "Recovery Room",
      "Sauna",
      "Nutrition Center",
    ],
    programs: [
      "Elite Training",
      "Youth Development",
      "Women's Boxing",
      "Fitness Classes",
      "Professional Certification",
    ],
    socials: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      youtube: "#",
      linkedin: "#",
    },
    rating: 4.8,
    reviews: 156,
    featured: true,
    membershipFee: "50,000 RWF/month",
    upcomingEvents: [
      { name: "Annual Boxing Tournament", date: "Dec 15, 2024" },
      { name: "Youth Camp", date: "Jan 10, 2025" },
    ],
    coaches: [
      {
        name: "Jean Bosco Ndayambaje",
        role: "Head Coach",
        experience: "15 years",
        image:
          "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Alice Mukamana",
        role: "Assistant Coach",
        experience: "8 years",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      },
    ],
    stats: {
      winRate: "85%",
      totalFights: 450,
      champions: 12,
      internationalParticipants: 8,
    },
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
    description:
      "Muhanga Boxing Academy specializes in youth development with structured programs designed to nurture future champions. Our focus is on technical excellence and character building.",
    image:
      "https://images.unsplash.com/photo-1608889175123-8a947c2f92d3?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608889175123-8a947c2f92d3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611117775346-90456c5a6f0e?auto=format&fit=crop&w=800&q=80",
    ],
    facilities: ["Training Ring", "Basic Gym", "Meeting Room", "Study Area"],
    programs: [
      "Youth Program",
      "Beginner Classes",
      "Competition Prep",
      "Academic Support",
    ],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.5,
    reviews: 89,
    featured: false,
    membershipFee: "35,000 RWF/month",
    upcomingEvents: [{ name: "Inter-school Tournament", date: "Nov 20, 2024" }],
    coaches: [
      {
        name: "Innocent Mugabo",
        role: "Head Coach",
        experience: "12 years",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      },
    ],
    stats: {
      winRate: "78%",
      totalFights: 280,
      champions: 5,
      internationalParticipants: 2,
    },
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
    description:
      "Rubavu Champions Center leverages its scenic Lake Kivu location to provide inspirational training environments. We've produced boxers competing internationally across Africa.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?auto=format&fit=crop&w=800&q=80",
    ],
    facilities: [
      "Professional Ring",
      "Strength Training",
      "Lake-view Gym",
      "Yoga Studio",
    ],
    programs: [
      "Elite Program",
      "Recreational Boxing",
      "Tournament Prep",
      "Strength & Conditioning",
    ],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.6,
    reviews: 112,
    featured: true,
    membershipFee: "45,000 RWF/month",
    upcomingEvents: [
      { name: "Lake Kivu Boxing Gala", date: "Dec 5, 2024" },
      { name: "Open Sparring Day", date: "Nov 25, 2024" },
    ],
    coaches: [
      {
        name: "Aimable Nkurunziza",
        role: "Head Coach",
        experience: "10 years",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      },
    ],
    stats: {
      winRate: "82%",
      totalFights: 320,
      champions: 8,
      internationalParticipants: 4,
    },
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
    description:
      "Huye Boxing Institute focuses on gender equality in sports with strong women's boxing programs. We combine traditional techniques with modern training methodologies.",
    image:
      "https://images.unsplash.com/photo-1596704013025-1c0b1a9c6a2c?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1596704013025-1c0b1a9c6a2c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    ],
    facilities: [
      "Training Ring",
      "Women's Locker Room",
      "Study Area",
      "Childcare Center",
    ],
    programs: [
      "Women's Boxing",
      "Youth Development",
      "Community Classes",
      "Self-Defense Workshops",
    ],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.4,
    reviews: 67,
    featured: false,
    membershipFee: "30,000 RWF/month",
    upcomingEvents: [{ name: "Women's Boxing Workshop", date: "Dec 10, 2024" }],
    coaches: [
      {
        name: "Marie Claire Uwase",
        role: "Head Coach",
        experience: "7 years",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      },
    ],
    stats: {
      winRate: "72%",
      totalFights: 180,
      champions: 3,
      internationalParticipants: 1,
    },
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
    description:
      "Located in the volcanic region, our high-altitude training gives fighters exceptional stamina advantages. Professional setup for serious competitors.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    ],
    facilities: [
      "High-Altitude Gym",
      "Mountain Trails",
      "Recovery Center",
      "Altitude Chamber",
    ],
    programs: [
      "Altitude Training",
      "Professional Development",
      "Fitness Retreats",
      "Endurance Camps",
    ],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.7,
    reviews: 94,
    featured: true,
    membershipFee: "55,000 RWF/month",
    upcomingEvents: [
      { name: "Altitude Training Camp", date: "Jan 15, 2025" },
      { name: "Endurance Challenge", date: "Feb 5, 2025" },
    ],
    coaches: [
      {
        name: "Patrick Habimana",
        role: "Head Coach",
        experience: "14 years",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      },
    ],
    stats: {
      winRate: "88%",
      totalFights: 290,
      champions: 9,
      internationalParticipants: 5,
    },
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
    description:
      "Kayonza Boxing Foundation uses boxing as a tool for youth empowerment and community development. We focus on life skills alongside athletic training.",
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fce7090?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1549060279-7e168fce7090?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&h=600&fit=crop",
    ],
    facilities: [
      "Community Gym",
      "Computer Lab",
      "Meeting Space",
      "Outdoor Training Area",
    ],
    programs: [
      "Youth Empowerment",
      "School Programs",
      "Recreational Boxing",
      "Life Skills Training",
    ],
    socials: { facebook: "#", instagram: "#", twitter: "#" },
    rating: 4.3,
    reviews: 42,
    featured: false,
    membershipFee: "25,000 RWF/month",
    upcomingEvents: [{ name: "Community Tournament", date: "Dec 20, 2024" }],
    coaches: [
      {
        name: "Eric Nsengimana",
        role: "Head Coach",
        experience: "6 years",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      },
    ],
    stats: {
      winRate: "68%",
      totalFights: 120,
      champions: 2,
      internationalParticipants: 0,
    },
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

// Advanced Modal Component
const ClubModal = ({ club, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!club) return null;

  const tabs = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "facilities", label: "Facilities", icon: Dumbbell },
    { id: "coaches", label: "Coaches", icon: User },
    { id: "events", label: "Events", icon: CalendarIcon },
    { id: "stats", label: "Statistics", icon: TrendingUp },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-3 bg-black/50 backdrop-blur-sm rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-sky-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Action Buttons */}
            <div className="absolute top-6 right-20 z-20 flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSaved(!isSaved)}
                className={`p-3 rounded-full backdrop-blur-sm border transition-all ${
                  isSaved
                    ? "bg-sky-500/20 border-sky-500 text-sky-400"
                    : "bg-black/50 border-gray-700 text-gray-400 hover:text-white hover:border-sky-500"
                }`}
              >
                <Bookmark
                  className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-black/50 backdrop-blur-sm rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-sky-500 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="h-full flex flex-col lg:flex-row overflow-y-auto">
              {/* Left Column - Images */}
              <div className="lg:w-1/2 h-96 lg:h-full relative">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={club.gallery[selectedImage] || club.image}
                    alt={club.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </motion.div>

                {/* Image Gallery Thumbnails */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-2 overflow-x-auto pb-2">
                  {club.gallery.map((img, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-sky-500 ring-2 ring-sky-500/50"
                          : "border-white/20 hover:border-white/40"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Featured Badge */}
                {club.featured && (
                  <div className="absolute top-6 left-6 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-sm font-bold">
                    <Crown className="w-4 h-4" />
                    <span>Featured Club</span>
                  </div>
                )}
              </div>

              {/* Right Column - Details */}
              <div className="lg:w-1/2 p-8 overflow-y-auto">
                {/* Header */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6"
                >
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {club.name}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-red-400" />
                      <span>{club.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>
                        {club.rating} ({club.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-sky-400" />
                      <span>{club.members} members</span>
                    </div>
                  </div>
                </motion.div>

                {/* Tabs */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-2 mb-6 border-b border-gray-800 pb-4 overflow-x-auto"
                >
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <motion.button
                        key={tab.id}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                          activeTab === tab.id
                            ? "bg-sky-500/20 text-sky-400 border border-sky-500/50"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {tab.label}
                      </motion.button>
                    );
                  })}
                </motion.div>

                {/* Tab Content */}
                <motion.div
                  key={activeTab}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Overview Tab */}
                  {activeTab === "overview" && (
                    <>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                          <Info className="w-4 h-4 text-sky-400" />
                          About the Club
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {club.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="text-sm text-gray-400 mb-1">
                            Founded
                          </div>
                          <div className="text-lg font-bold text-white">
                            {club.founded}
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="text-sm text-gray-400 mb-1">
                            Active Fighters
                          </div>
                          <div className="text-lg font-bold text-white">
                            {club.activeFighters}
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="text-sm text-gray-400 mb-1">
                            Membership
                          </div>
                          <div className="text-lg font-bold text-sky-400">
                            {club.membershipFee}
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="text-sm text-gray-400 mb-1">
                            Training Hours
                          </div>
                          <div className="text-lg font-bold text-white">
                            {club.trainingHours}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <AwardIcon className="w-4 h-4 text-yellow-400" />
                          Achievements
                        </h3>
                        <p className="text-gray-400">{club.achievements}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-green-400" />
                          Programs Offered
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {club.programs.map((program, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30"
                            >
                              {program}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Facilities Tab */}
                  {activeTab === "facilities" && (
                    <div className="grid grid-cols-2 gap-4">
                      {club.facilities.map((facility, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-sky-500/50 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-sky-500/20 rounded-lg group-hover:bg-sky-500/30 transition-colors">
                              <Dumbbell className="w-5 h-5 text-sky-400" />
                            </div>
                            <span className="text-white font-medium">
                              {facility}
                            </span>
                          </div>
                          <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>Available</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Coaches Tab */}
                  {activeTab === "coaches" && (
                    <div className="space-y-4">
                      {club.coaches.map((coach, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-gray-800 hover:border-sky-500/50 transition-all"
                        >
                          <img
                            src={coach.image}
                            alt={coach.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-sky-500/50"
                          />
                          <div>
                            <h4 className="text-lg font-semibold text-white">
                              {coach.name}
                            </h4>
                            <p className="text-sky-400 text-sm">{coach.role}</p>
                            <p className="text-gray-400 text-sm mt-1">
                              Experience: {coach.experience}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Events Tab */}
                  {activeTab === "events" && (
                    <div className="space-y-3">
                      {club.upcomingEvents.map((event, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-gray-800 hover:border-sky-500/50 transition-all"
                        >
                          <div>
                            <h4 className="text-white font-semibold">
                              {event.name}
                            </h4>
                            <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                              <CalendarIcon className="w-3 h-3" />
                              {event.date}
                            </p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-sky-500/20 text-sky-400 rounded-lg text-sm font-medium border border-sky-500/30 hover:bg-sky-500/30 transition-colors"
                          >
                            Register
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Stats Tab */}
                  {activeTab === "stats" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-xl p-6 text-center">
                          <TrendingUp className="w-8 h-8 text-sky-400 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">
                            {club.stats.winRate}
                          </div>
                          <div className="text-sm text-gray-400">Win Rate</div>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-xl p-6 text-center">
                          <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">
                            {club.stats.champions}
                          </div>
                          <div className="text-sm text-gray-400">Champions</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 text-center">
                          <Activity className="w-8 h-8 text-green-400 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">
                            {club.stats.totalFights}
                          </div>
                          <div className="text-sm text-gray-400">
                            Total Fights
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 text-center">
                          <Globe className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-white">
                            {club.stats.internationalParticipants}
                          </div>
                          <div className="text-sm text-gray-400">
                            International
                          </div>
                        </div>
                      </div>

                      {/* Performance Chart Placeholder */}
                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-white font-semibold mb-4">
                          Performance Trend
                        </h4>
                        <div className="h-32 flex items-end justify-between gap-2">
                          {[65, 72, 78, 82, 85, 88].map((value, index) => (
                            <div
                              key={index}
                              className="flex-1 flex flex-col items-center"
                            >
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${value}%` }}
                                transition={{
                                  delay: index * 0.1,
                                  duration: 0.5,
                                }}
                                className="w-full bg-gradient-to-t from-sky-500 to-blue-500 rounded-t-lg"
                                style={{ height: `${value}%` }}
                              />
                              <span className="text-xs text-gray-400 mt-2">
                                {2019 + index}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-6 border-t border-gray-800"
                >
                  <div className="flex flex-wrap gap-4 items-center justify-between">
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
                        <Globe className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">{club.website}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {Object.entries(club.socials).map(([platform, link]) => {
                        const getIcon = (platform) => {
                          switch (platform) {
                            case "facebook":
                              return Facebook;
                            case "instagram":
                              return Instagram;
                            case "twitter":
                              return Twitter;
                            case "youtube":
                              return Youtube;
                            case "linkedin":
                              return Linkedin;
                            default:
                              return Facebook;
                          }
                        };
                        const Icon = getIcon(platform);

                        return (
                          <motion.a
                            key={platform}
                            href={link}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/5 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-sky-500 transition-all"
                          >
                            <Icon className="w-4 h-4" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Contact Club
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                    >
                      <CalendarIcon className="w-4 h-4" />
                      Visit Website
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ClubCard = ({ club, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onViewDetails(club)}
    >
      {/* Background Glow Effect */}
      {club.featured && (
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
      )}

      <div
        className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border ${
          club.featured ? "border-yellow-500/50" : "border-gray-800"
        } overflow-hidden transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-2xl group-hover:shadow-sky-500/20`}
      >
        {/* Save Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsSaved(!isSaved);
          }}
          className={`absolute top-4 right-4 z-20 p-2 rounded-full backdrop-blur-sm transition-all ${
            isSaved
              ? "bg-sky-500/20 text-sky-400 border border-sky-500/50"
              : "bg-black/50 text-white border border-gray-700 hover:border-sky-500"
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
        </motion.button>

        {/* Featured Badge */}
        {club.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold backdrop-blur-sm">
            <Crown className="w-3 h-3" />
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
          <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-semibold">
              {club.rating}
            </span>
          </div>

          {/* Quick Stats Overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white">
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">{club.members}+</span>
            </div>
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-semibold">View</span>
            </div>
          </div>
        </div>

        {/* Club Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
            {club.name}
          </h3>

          {/* Basic Info Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="flex items-center gap-1 text-sm text-gray-300">
              <MapPin className="w-3 h-3 text-red-400 flex-shrink-0" />
              <span className="truncate">{club.location}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-300">
              <User className="w-3 h-3 text-sky-400 flex-shrink-0" />
              <span className="truncate">{club.coach}</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center bg-white/5 rounded-lg p-2">
              <div className="text-sm font-bold text-sky-400">
                {club.activeFighters}
              </div>
              <div className="text-xs text-gray-400">Fighters</div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-2">
              <div className="text-sm font-bold text-green-400">
                {club.founded}
              </div>
              <div className="text-xs text-gray-400">Founded</div>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-2">
              <div className="text-sm font-bold text-yellow-400">
                {club.reviews}
              </div>
              <div className="text-xs text-gray-400">Reviews</div>
            </div>
          </div>

          {/* Programs Preview */}
          <div className="flex flex-wrap gap-1 mb-4">
            {club.programs.slice(0, 3).map((program, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full border border-sky-500/30"
              >
                {program}
              </span>
            ))}
            {club.programs.length > 3 && (
              <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">
                +{club.programs.length - 3}
              </span>
            )}
          </div>

          {/* View Details Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2 group"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(club);
            }}
          >
            <span>View Details</span>
            <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Clubs = () => {
  const [search, setSearch] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedClub, setSelectedClub] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredClubs = useMemo(() => {
    return clubsData
      .filter((club) => {
        const matchesSearch =
          club.name.toLowerCase().includes(search.toLowerCase()) ||
          club.coach.toLowerCase().includes(search.toLowerCase()) ||
          club.location.toLowerCase().includes(search.toLowerCase());

        const matchesProvince =
          provinceFilter === "All" || club.province === provinceFilter;

        return matchesSearch && matchesProvince;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "featured":
            return b.featured - a.featured || b.rating - a.rating;
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
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-sky-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <Navbar />

      {/* Header Section */}
      <motion.header
        className="relative py-20 sm:py-28 px-4 sm:px-6 text-center z-10 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/40 via-transparent to-transparent"></div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 text-sky-500/20"
        >
          <Target className="w-24 h-24" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 text-sky-500/20"
        >
          <Trophy className="w-32 h-32" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-500/20 to-blue-500/20 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full border border-sky-500/30 mb-4 sm:mb-6"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
            <span className="text-sm sm:text-base text-sky-300 font-semibold">
              RWANDA BOXING CLUBS NETWORK
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Elite Boxing Clubs
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Discover Rwanda's premier boxing institutions. Find clubs by
            location, facilities, and programs to start your boxing journey.
          </p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-12"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {clubsData.length}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                Total Clubs
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {provinces.length - 1}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Provinces</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {clubsData.filter((c) => c.featured).length}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                Featured Clubs
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow py-8 sm:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        {/* Search and Filters */}
        <motion.div
          className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search clubs, coaches, or locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 backdrop-blur-sm transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
              />
            </motion.button>

            <div
              className={`${showFilters ? "flex" : "hidden"} lg:flex flex-col sm:flex-row gap-3 sm:gap-4`}
            >
              <div className="relative">
                <Filter
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <select
                  value={provinceFilter}
                  onChange={(e) => setProvinceFilter(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none cursor-pointer w-full"
                >
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province} Province
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="rating">Highest Rated</option>
                <option value="members">Most Members</option>
                <option value="newest">Newest First</option>
                <option value="name">Alphabetical</option>
              </select>

              {/* View Toggle */}
              <div className="flex bg-black/50 border border-gray-700 rounded-xl overflow-hidden">
                <motion.button
                  whileHover={{ backgroundColor: "rgba(56, 189, 248, 0.1)" }}
                  onClick={() => setViewMode("grid")}
                  className={`p-3 transition-colors ${
                    viewMode === "grid"
                      ? "bg-sky-500/20 text-sky-400"
                      : "text-gray-400"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </motion.button>
                <motion.button
                  whileHover={{ backgroundColor: "rgba(56, 189, 248, 0.1)" }}
                  onClick={() => setViewMode("list")}
                  className={`p-3 transition-colors ${
                    viewMode === "list"
                      ? "bg-sky-500/20 text-sky-400"
                      : "text-gray-400"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count & Active Filters */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm sm:text-base text-gray-400">
            Showing{" "}
            <span className="text-white font-semibold">
              {filteredClubs.length}
            </span>{" "}
            clubs
            {provinceFilter !== "All" && ` in ${provinceFilter} Province`}
          </p>

          {(search || provinceFilter !== "All") && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => {
                setSearch("");
                setProvinceFilter("All");
                setSortBy("featured");
              }}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-3 h-3" />
              Clear Filters
            </motion.button>
          )}
        </motion.div>

        {/* Clubs Grid/List */}
        <motion.div
          className={`grid gap-6 sm:gap-8 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {filteredClubs.length > 0 ? (
              filteredClubs.map((club) => (
                <ClubCard
                  key={club.id}
                  club={club}
                  onViewDetails={setSelectedClub}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 sm:py-20 col-span-3"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-6xl sm:text-8xl mb-4 sm:mb-6"
                >
                  🥊
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  No Clubs Found
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Try adjusting your search or filter criteria.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.section
          className="mt-12 sm:mt-20 relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-600 to-purple-600"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

          <div className="relative z-10 text-center py-12 sm:py-16 px-4 sm:px-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/30 mb-4 sm:mb-6"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-sm sm:text-base text-white font-semibold">
                JOIN OUR NETWORK
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-2 sm:mb-4 px-2">
              Ready to Register Your Club?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join Rwanda's official boxing federation network. Get national
              recognition, access to tournaments, and support for your club's
              development.
            </p>

            <motion.button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-sky-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="flex items-center gap-2">
                Register Your Club
                <Target className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.button>
          </div>
        </motion.section>
      </main>

      <Footer />

      {/* Advanced Modal */}
      <ClubModal
        club={selectedClub}
        isOpen={!!selectedClub}
        onClose={() => setSelectedClub(null)}
      />
    </div>
  );
};

export default Clubs;
