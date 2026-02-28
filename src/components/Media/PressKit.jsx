import React, { useState, useMemo, useEffect, useRef } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  X, 
  FileText, 
  Newspaper, 
  Download, 
  Search,
  Eye,
  Heart,
  Share2,
  Clock,
  Filter,
  Grid3X3,
  List,
  Mail,
  Phone,
  MapPin,
  Users,
  ChevronRight,
  Bell,
  Megaphone,
  TrendingUp,
  MessageCircle,
  Bookmark,
  Camera,
  Video,
  Sparkles,
  Flame,
  ThumbsUp,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Play,
  Copy,
  Check,
  MailOpen,
  AtSign,
  Hash,
  Layers,

  ImagePlus,
  Mic,
  Radio,
  Rocket,
  PartyPopper,
  SmileIcon,
  FrownIcon,
  AngryIcon


  // Fixed: Removed FilePdf and FileExcel/FileWord since they don't exist
  // Use FileText instead for PDF/Word/Excel files
} from "lucide-react";

// Data arrays
const posts = [
  {
    id: 1,
    author: {
      id: 101,
      name: "Rwanda Boxing Federation",
      username: "@RwandaBoxing",
      avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true,
      role: "Official Organization",
      followers: 45200,
      following: 890
    },
    content: "🏆 BREAKING: Team Rwanda secures 5 medals at the African Boxing Championships! 2 Gold, 2 Silver, and 1 Bronze! This is our best performance in history! 🇷🇼🥊",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1548003698-0a3da3b4bc4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        caption: "Victory ceremony"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        caption: "Gold medal moment"
      }
    ],
    timestamp: "2025-08-20T10:30:00Z",
    stats: {
      likes: 12500,
      comments: 2340,
      shares: 5670,
      views: 45000,
      saves: 1230
    },
    engagement: {
      reactions: {
        like: 8900,
        love: 2300,
        wow: 890,
        haha: 210,
        sad: 120,
        angry: 80
      }
    },
    tags: ["#RwandaBoxing", "#AfricanChampionships", "#Victory"],
    mentions: ["@RwandaSports", "@AfricanBoxing"],
    isPinned: true,
    isLiked: false,
    isSaved: false
  },
  {
    id: 2,
    author: {
      id: 102,
      name: "Marie Claire Uwase",
      username: "@MarieClaire",
      avatar: "https://images.unsplash.com/photo-1494790108777-466d9cd5d0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: false,
      role: "Sports Journalist",
      followers: 12300,
      following: 450
    },
    content: "Exclusive interview with Captain Mugisha ahead of the Olympic qualifiers. He shares his journey, challenges, and dreams for Rwandan boxing. Full article in the link! 🥊✨",
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        duration: "15:30",
        caption: "Captain Mugisha interview"
      }
    ],
    link: {
      url: "/interviews/captain-mugisha",
      title: "The Captain's Journey: From Kigali to Paris",
      description: "Exclusive interview with Rwanda's boxing captain"
    },
    timestamp: "2025-08-19T15:45:00Z",
    stats: {
      likes: 3450,
      comments: 567,
      shares: 1230,
      views: 8900,
      saves: 450
    },
    engagement: {
      reactions: {
        like: 2300,
        love: 890,
        wow: 200,
        haha: 45,
        sad: 15,
        angry: 0
      }
    },
    tags: ["#Interview", "#Olympics", "#Boxing"],
    mentions: ["@RwandaBoxing", "@CaptainMugisha"],
    isPinned: false,
    isLiked: false,
    isSaved: false
  },
  {
    id: 3,
    author: {
      id: 101,
      name: "Rwanda Boxing Federation",
      username: "@RwandaBoxing",
      avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true,
      role: "Official Organization",
      followers: 45200,
      following: 890
    },
    content: "📢 ANNOUNCEMENT: The 2025 National Boxing Championship dates are confirmed! December 10-15 at BK Arena, Kigali. Registration opens September 1st. Don't miss your chance to compete!",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1548003698-0a3da3b4bc4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        caption: "Championship poster"
      }
    ],
    timestamp: "2025-08-18T09:00:00Z",
    stats: {
      likes: 5670,
      comments: 890,
      shares: 2340,
      views: 12300,
      saves: 670
    },
    engagement: {
      reactions: {
        like: 4300,
        love: 1100,
        wow: 200,
        haha: 50,
        sad: 10,
        angry: 10
      }
    },
    tags: ["#Announcement", "#NationalChampionship", "#Boxing"],
    mentions: [],
    isPinned: true,
    isLiked: false,
    isSaved: false
  },
  {
    id: 4,
    author: {
      id: 103,
      name: "Jean Pierre Habimana",
      username: "@JPHabimana",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true,
      role: "RBF Communications Director",
      followers: 8900,
      following: 320
    },
    content: "Behind the scenes at today's training camp! The team is working harder than ever. Paris 2024 is the goal! 🥊🇷🇼 #RoadToParis",
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        duration: "2:45",
        caption: "Training camp highlights"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        caption: "Morning workout"
      }
    ],
    timestamp: "2025-08-17T07:30:00Z",
    stats: {
      likes: 2340,
      comments: 345,
      shares: 890,
      views: 5600,
      saves: 230
    },
    engagement: {
      reactions: {
        like: 1800,
        love: 450,
        wow: 80,
        haha: 10,
        sad: 0,
        angry: 0
      }
    },
    tags: ["#Training", "#BehindTheScenes", "#RoadToParis"],
    mentions: ["@RwandaBoxing"],
    isPinned: false,
    isLiked: false,
    isSaved: false
  },
  {
    id: 5,
    author: {
      id: 104,
      name: "Rwanda Sports Ministry",
      username: "@RwandaSports",
      avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      verified: true,
      role: "Government Organization",
      followers: 67800,
      following: 150
    },
    content: "Congratulations to the Rwanda Boxing Federation for the outstanding performance at the African Championships! The government reaffirms its commitment to sports development. 🎉🥊",
    timestamp: "2025-08-16T14:20:00Z",
    stats: {
      likes: 8900,
      comments: 670,
      shares: 2340,
      views: 15600,
      saves: 890
    },
    engagement: {
      reactions: {
        like: 6700,
        love: 1800,
        wow: 300,
        haha: 80,
        sad: 20,
        angry: 0
      }
    },
    tags: ["#Government", "#Support", "#SportsDevelopment"],
    mentions: ["@RwandaBoxing"],
    isPinned: false,
    isLiked: false,
    isSaved: false
  }
];

const trendingTopics = [
  {
    id: 1,
    topic: "African Championships",
    posts: 15200,
    category: "Sports"
  },
  {
    id: 2,
    topic: "Olympic Qualifiers",
    posts: 8900,
    category: "Events"
  },
  {
    id: 3,
    topic: "Captain Mugisha",
    posts: 6700,
    category: "Athletes"
  },
  {
    id: 4,
    topic: "Youth Development",
    posts: 4500,
    category: "Programs"
  },
  {
    id: 5,
    topic: "Training Camp",
    posts: 3200,
    category: "Behind the Scenes"
  }
];

const suggestedUsers = [
  {
    id: 201,
    name: "Olympic Committee Rwanda",
    username: "@OlympicRwanda",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    verified: true,
    followers: 23400
  },
  {
    id: 202,
    name: "African Boxing Union",
    username: "@AfricanBoxing",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    verified: true,
    followers: 18900
  },
  {
    id: 203,
    name: "Sports Journalists Rwanda",
    username: "@SportsJournalistsRW",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    verified: false,
    followers: 8900
  }
];

const newsContent = [
  {
    id: 1,
    type: "featured",
    title: "The Rise of Rwandan Boxing: A Decade of Progress",
    excerpt: "From grassroots programs to international medals, discover how Rwandan boxing has transformed over the past 10 years.",
    image: "https://images.unsplash.com/photo-1548003698-0a3da3b4bc4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Feature",
    date: "Aug 15, 2025",
    author: "Jean Pierre Habimana",
    likes: 2340,
    comments: 156
  },
  {
    id: 2,
    type: "article",
    title: "Training Camp Diaries: Week 1",
    excerpt: "An inside look at the national team's preparation for the upcoming championships.",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Behind the Scenes",
    date: "Aug 14, 2025",
    author: "Marie Claire Uwase",
    likes: 890,
    comments: 67
  },
  {
    id: 3,
    type: "interview",
    title: "Exclusive: Captain Mugisha on Olympic Dreams",
    excerpt: "Rwanda's boxing captain shares his journey and aspirations for Paris 2024.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Interviews",
    date: "Aug 13, 2025",
    author: "Sports Desk",
    likes: 1560,
    comments: 234
  },
  {
    id: 4,
    type: "video",
    title: "Highlights: Rwanda vs Kenya",
    excerpt: "Watch the best moments from the regional championship bout.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Videos",
    date: "Aug 12, 2025",
    author: "RBF Media",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    likes: 3450,
    comments: 412
  }
];

const pressResources = [
  {
    id: 1,
    title: "RBF Brand Guidelines",
    description: "Official branding assets and usage guidelines",
    category: "Branding",
    fileSize: "2.4 MB",
    downloads: 156
  },
  {
    id: 2,
    title: "Athlete Profiles 2025",
    description: "Complete profiles of national team boxers",
    category: "Profiles",
    fileSize: "5.1 MB",
    downloads: 234
  },
  {
    id: 3,
    title: "Media Accreditation Form",
    description: "Apply for press credentials",
    category: "Guidelines",
    fileSize: "1.2 MB",
    downloads: 89
  },
  {
    id: 4,
    title: "Event Press Kit",
    description: "Comprehensive materials for upcoming events",
    category: "Templates",
    fileSize: "8.7 MB",
    downloads: 412
  }
];

const advertisements = [
  {
    id: 1,
    sponsor: "Visit Rwanda",
    description: "Explore the land of a thousand hills",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    sponsor: "BK Arena",
    description: "Home of champions",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    sponsor: "RwandAir",
    description: "Fly with pride",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const notifications = [
  {
    id: 1,
    message: "New press release: Olympic qualification update",
    time: "5 min ago"
  },
  {
    id: 2,
    message: "Media accreditation deadline approaching",
    time: "1 hour ago"
  },
  {
    id: 3,
    message: "Live press conference starting in 30 minutes",
    time: "2 hours ago"
  }
];

const newsletters = [
  {
    id: 1,
    title: "Monthly Roundup: August 2025",
    description: "All the highlights from an action-packed month",
    image: "https://images.unsplash.com/photo-1548003698-0a3da3b4bc4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "Aug 1, 2025",
    readCount: 1234,
    topics: ["Championships", "Interviews", "Results"]
  },
  {
    id: 2,
    title: "Special Edition: African Championships",
    description: "Complete coverage of our medal-winning performance",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "Jul 25, 2025",
    readCount: 2567,
    topics: ["African Championships", "Medals", "Victory"]
  },
  {
    id: 3,
    title: "Youth Development Quarterly",
    description: "Progress report on grassroots programs",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "Jul 15, 2025",
    readCount: 890,
    topics: ["Youth", "Development", "Training"]
  }
];

const mediaPartners = [
  {
    id: 1,
    name: "Times Sport",
    type: "Print & Digital",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Rwanda TV",
    type: "Broadcast",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Radio Rwanda",
    type: "Radio",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Sport Online",
    type: "Digital",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const categories = ["All", "News", "Features", "Interviews", "Analysis", "Press Releases", "Photo Essays", "Videos"];
const contentTypes = ["All", "Article", "Video", "Interview", "Press Release", "Photo Essay", "Infographic"];
const resourceCategories = ["All", "Branding", "Guidelines", "Photography", "Templates", "Profiles", "Video"];
const postCategories = ["All", "Announcements", "Highlights", "Interviews", "Training", "Events", "Results"];

// VideoModal Component
const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <iframe
            src={videoUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ResourceCard Component
const ResourceCard = ({ resource }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-6 hover:border-sky-500/50 transition-all"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-sky-500/20 rounded-xl">
          <FileText className="w-6 h-6 text-sky-400" />
        </div>
        <span className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded-full">
          {resource.category}
        </span>
      </div>
      <h3 className="font-bold text-white mb-2">{resource.title}</h3>
      <p className="text-sm text-gray-400 mb-4">{resource.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{resource.fileSize}</span>
        <motion.button
          className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={16} />
          Download
        </motion.button>
      </div>
    </motion.div>
  );
};

// FeaturedArticle Component
const FeaturedArticle = ({ article, onReadMore, onShare }) => {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-sky-500/20 text-sky-400 text-sm rounded-full">
              Featured
            </span>
            <span className="text-gray-400 text-sm">{article.category}</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{article.title}</h2>
          <p className="text-gray-300 mb-6">{article.excerpt}</p>
          <div className="flex items-center gap-4">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onReadMore(article)}
            >
              Read Full Article
            </motion.button>
            <motion.button
              className="p-3 text-gray-400 hover:text-sky-400 rounded-xl hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onShare(article)}
            >
              <Share2 size={20} />
            </motion.button>
          </div>
        </div>
        <div className="relative h-full min-h-[300px]">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

// NewsCard Component
const NewsCard = ({ item, onClick, onLike, isLiked, onBookmark, isBookmarked }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 overflow-hidden hover:border-sky-500/50 transition-all cursor-pointer"
      whileHover={{ y: -5, scale: 1.02 }}
      onClick={() => onClick(item)}
    >
      {item.image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {item.type === 'video' && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          )}
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded-full">
            {item.category}
          </span>
          <span className="text-xs text-gray-500">{item.date}</span>
        </div>
        <h3 className="font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{item.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              className={`flex items-center gap-1 text-sm ${isLiked ? 'text-red-400' : 'text-gray-500 hover:text-red-400'}`}
              onClick={(e) => { e.stopPropagation(); onLike(item.id); }}
            >
              <Heart size={16} className={isLiked ? "fill-current" : ""} />
              <span>{item.likes || 0}</span>
            </button>
            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-sky-400">
              <MessageCircle size={16} />
              <span>{item.comments || 0}</span>
            </button>
          </div>
          <button 
            className={`text-gray-500 hover:text-yellow-400 ${isBookmarked ? 'text-yellow-400' : ''}`}
            onClick={(e) => { e.stopPropagation(); onBookmark(item.id); }}
          >
            <Bookmark size={16} className={isBookmarked ? "fill-current" : ""} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// AdvertisementBanner Component
const AdvertisementBanner = ({ ad }) => {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-4 overflow-hidden group"
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10 flex items-center gap-3">
        <img 
          src={ad.logo} 
          alt={ad.sponsor}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-xs text-gray-400 mb-1">Sponsored</p>
          <h4 className="font-semibold text-white text-sm">{ad.sponsor}</h4>
          <p className="text-xs text-gray-500">{ad.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// NotificationCenter Component
const NotificationCenter = ({ notifications, onDismiss }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button
        className="relative p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="w-5 h-5" />
        {notifications.length > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-80 bg-gray-900 rounded-xl border border-gray-800 overflow-hidden z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="p-3 border-b border-gray-800 flex justify-between items-center">
              <h3 className="font-semibold text-white">Notifications</h3>
              {notifications.length > 0 && (
                <button 
                  className="text-xs text-gray-400 hover:text-sky-400"
                  onClick={() => onDismiss('all')}
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-4 text-center text-gray-400 text-sm">
                  No notifications
                </div>
              ) : (
                notifications.map(notification => (
                  <div key={notification.id} className="p-3 hover:bg-gray-800/50 border-b border-gray-800 last:border-0">
                    <p className="text-sm text-white mb-1">{notification.message}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// NewsletterSignup Component
const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-white mb-2">Newsletter Signup</h3>
      <p className="text-sm text-gray-400 mb-4">
        Get the latest news and updates directly in your inbox.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 mb-3"
        />
        <motion.button
          type="submit"
          className="w-full px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Subscribe
        </motion.button>
      </form>
    </motion.div>
  );
};

// MediaGallery Component
const MediaGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={image.url} 
            alt={image.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity">
            <p className="absolute bottom-2 left-2 text-xs text-white">{image.caption}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// ArticleModal Component
const ArticleModal = ({ article, onClose, onShare }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 p-4 flex justify-between items-center">
            <h2 className="font-bold text-white">{article.title}</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onShare(article)}
                className="p-2 text-gray-400 hover:text-sky-400 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Share2 size={20} />
              </button>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="p-6">
            {article.image && (
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
            )}
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">{article.content || article.excerpt}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ShareModal Component
const ShareModal = ({ item, onClose, onCopy, copied }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-md bg-gray-900 rounded-2xl p-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-bold text-white mb-4">Share</h3>
          
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[Twitter, Facebook, Instagram, Youtube].map((Icon, index) => (
              <motion.button
                key={index}
                className="p-3 bg-gray-800 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
              </motion.button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 p-2 bg-black/50 border border-gray-700 rounded-xl">
            <input
              type="text"
              value={window.location.href}
              readOnly
              className="flex-1 px-2 py-1 bg-transparent text-sm text-gray-300 focus:outline-none"
            />
            <motion.button
              className="px-3 py-1.5 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCopy}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// PostCard Component
const PostCard = ({ post, onLike, onComment, onShare, onSave, onReact }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showReactions, setShowReactions] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [localLikes, setLocalLikes] = useState(post.stats?.likes || 0);
  const [localReactions, setLocalReactions] = useState(post.engagement?.reactions || {});
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [isSaved, setIsSaved] = useState(post.isSaved || false);

  const reactions = [
    { type: 'like', icon: <ThumbsUp className="w-5 h-5" />, color: 'text-blue-400', bgColor: 'bg-blue-500' },
    { type: 'love', icon: <Heart className="w-5 h-5" />, color: 'text-red-400', bgColor: 'bg-red-500' },
    { type: 'wow', icon: <Sparkles className="w-5 h-5" />, color: 'text-yellow-400', bgColor: 'bg-yellow-500' },
    { type: 'haha', icon: <SmileIcon className="w-5 h-5" />, color: 'text-green-400', bgColor: 'bg-green-500' },
    { type: 'sad', icon: <FrownIcon className="w-5 h-5" />, color: 'text-purple-400', bgColor: 'bg-purple-500' },
    { type: 'angry', icon: <AngryIcon className="w-5 h-5" />, color: 'text-orange-400', bgColor: 'bg-orange-500' }
  ];

  const handleReaction = (reactionType) => {
    setSelectedReaction(reactionType);
    setLocalReactions(prev => ({
      ...prev,
      [reactionType]: (prev[reactionType] || 0) + 1
    }));
    setLocalLikes(prev => prev + 1);
    setIsLiked(true);
    setShowReactions(false);
    onReact?.(post.id, reactionType);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInSeconds = Math.floor((now - postTime) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds}s`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
    return `${Math.floor(diffInSeconds / 86400)}d`;
  };

  // Smile and Frown components (since they're not imported)
  const Smile = (props) => <span {...props}>😊</span>;
  const Frown = (props) => <span {...props}>😞</span>;
  const Angry = (props) => <span {...props}>😠</span>;

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glow effect for pinned posts */}
      {post.isPinned && (
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-yellow-500/30 to-amber-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
      )}
      
      <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border ${
        post.isPinned ? 'border-yellow-500/50' : 'border-gray-800'
      } overflow-hidden transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-2xl group-hover:shadow-sky-500/20`}>
        
        {/* Pinned Badge */}
        {post.isPinned && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold backdrop-blur-sm">
            <Rocket size={12} />
          </div>
        )}

        {/* Post Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start gap-3">
            {/* Author Avatar */}
            <div className="relative">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-sky-500"
              />
              {post.author.verified && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center border-2 border-black">
                  <Check size={10} className="text-white" />
                </div>
              )}
            </div>

            {/* Author Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-white group-hover:text-sky-300 transition-colors">
                  {post.author.name}
                </h3>
                {post.author.verified && (
                  <Check className="w-4 h-4 text-sky-400" />
                )}
                <span className="text-gray-500 text-sm">{post.author.username}</span>
                <span className="text-gray-600 text-sm">·</span>
                <span className="text-gray-500 text-sm">{getTimeAgo(post.timestamp)}</span>
              </div>
              <p className="text-sm text-gray-400">{post.author.role}</p>
            </div>

            {/* Follow Button */}
            <motion.button
              className="px-4 py-1.5 bg-sky-500/20 text-sky-400 rounded-full text-sm font-semibold hover:bg-sky-500/30 transition-colors border border-sky-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Follow
            </motion.button>
          </div>

          {/* Post Content */}
          <div className="mt-4">
            <p className="text-gray-200 whitespace-pre-wrap">{post.content}</p>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="text-sky-400 text-sm hover:underline cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Mentions */}
            {post.mentions && post.mentions.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {post.mentions.map((mention, idx) => (
                  <span key={idx} className="text-purple-400 text-sm hover:underline cursor-pointer">
                    {mention}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Media Grid */}
          {post.media && post.media.length > 0 && (
            <div className={`mt-4 grid gap-2 ${
              post.media.length === 1 ? 'grid-cols-1' :
              post.media.length === 2 ? 'grid-cols-2' :
              'grid-cols-2'
            }`}>
              {post.media.map((media, idx) => (
                <motion.div
                  key={idx}
                  className={`relative rounded-xl overflow-hidden cursor-pointer ${
                    post.media.length === 3 && idx === 2 ? 'col-span-2' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {media.type === 'image' ? (
                    <img 
                      src={media.url} 
                      alt={media.caption}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="relative h-48">
                      <img 
                        src={media.thumbnail} 
                        alt={media.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                        {media.duration}
                      </div>
                    </div>
                  )}
                  {media.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                      <p className="text-xs text-white">{media.caption}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Link Preview */}
          {post.link && (
            <motion.div 
              className="mt-4 bg-black/50 rounded-xl border border-gray-700 overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.01 }}
            >
              <div className="p-4">
                <p className="text-xs text-gray-400 mb-1">rwandaboxing.rw</p>
                <h4 className="font-semibold text-white mb-1">{post.link.title}</h4>
                <p className="text-sm text-gray-400">{post.link.description}</p>
              </div>
            </motion.div>
          )}

          {/* Stats */}
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Eye size={16} />
              <span>{formatNumber(post.stats.views)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart size={16} className={isLiked ? "text-red-400 fill-current" : ""} />
              <span>{formatNumber(localLikes)}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={16} />
              <span>{formatNumber(post.stats.comments)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Share2 size={16} />
              <span>{formatNumber(post.stats.shares)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bookmark size={16} className={isSaved ? "text-yellow-400 fill-current" : ""} />
              <span>{formatNumber(post.stats.saves)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
            {/* Reaction Button */}
            <div className="relative">
              <motion.button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isLiked ? 'text-blue-400 bg-blue-500/10' : 'text-gray-400 hover:text-blue-400 hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setShowReactions(true)}
                onMouseLeave={() => setShowReactions(false)}
                onClick={() => {
                  if (!isLiked) {
                    handleReaction('like');
                  }
                }}
              >
                {selectedReaction ? (
                  reactions.find(r => r.type === selectedReaction)?.icon
                ) : (
                  <ThumbsUp size={20} />
                )}
                <span>Like</span>
              </motion.button>

              {/* Reaction Picker */}
              <AnimatePresence>
                {showReactions && !isLiked && (
                  <motion.div
                    className="absolute bottom-full left-0 mb-2 flex gap-1 p-2 bg-gray-800 rounded-full border border-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setShowReactions(true)}
                    onMouseLeave={() => setShowReactions(false)}
                  >
                    {reactions.map((reaction) => (
                      <motion.button
                        key={reaction.type}
                        className={`p-2 rounded-full hover:bg-gray-700 transition-colors ${reaction.color}`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleReaction(reaction.type)}
                      >
                        {reaction.icon}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Comment Button */}
            <motion.button
              className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-green-400 rounded-lg hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowComments(!showComments)}
            >
              <MessageCircle size={20} />
              <span>Comment</span>
            </motion.button>

            {/* Share Button */}
            <motion.button
              className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-purple-400 rounded-lg hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onShare(post)}
            >
              <Share2 size={20} />
              <span>Share</span>
            </motion.button>

            {/* Save Button */}
            <motion.button
              className={`p-2 rounded-lg transition-all ${
                isSaved ? 'text-yellow-400 bg-yellow-500/10' : 'text-gray-400 hover:text-yellow-400 hover:bg-gray-800'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setIsSaved(!isSaved);
                onSave?.(post.id);
              }}
            >
              <Bookmark size={20} className={isSaved ? "fill-current" : ""} />
            </motion.button>
          </div>

          {/* Comments Section */}
          <AnimatePresence>
            {showComments && (
              <motion.div
                className="mt-4 pt-4 border-t border-gray-800"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {/* Comment Input */}
                <div className="flex gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                    alt="Your avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                  <motion.button
                    className="px-4 py-2 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!commentText.trim()}
                  >
                    Post
                  </motion.button>
                </div>

                {/* Sample Comments */}
                <div className="mt-4 space-y-3">
                  <div className="flex gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108777-466d9cd5d0e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                      alt="Commenter"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-white text-sm">Marie Uwase</span>
                          <span className="text-gray-500 text-xs">2h</span>
                        </div>
                        <p className="text-gray-300 text-sm">Congratulations team Rwanda! So proud of our boxers! 🥊🇷🇼</p>
                      </div>
                      <div className="flex gap-4 mt-1 ml-2">
                        <button className="text-xs text-gray-500 hover:text-sky-400">Like</button>
                        <button className="text-xs text-gray-500 hover:text-sky-400">Reply</button>
                      </div>
                    </div>
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

// PostComposer Component
const PostComposer = ({ onPost }) => {
  const [content, setContent] = useState("");
  const [media, setMedia] = useState([]);
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 280;

  const handleContentChange = (e) => {
    const text = e.target.value;
    setContent(text);
    setCharCount(text.length);
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-3">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
          alt="Your avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <textarea
            placeholder="Share your thoughts about Rwandan boxing..."
            value={content}
            onChange={handleContentChange}
            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 resize-none"
            rows="3"
          />
          
          {/* Media Preview */}
          {media.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-2">
              {media.map((file, idx) => (
                <div key={idx} className="relative aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={URL.createObjectURL(file)} 
                    alt={`Preview ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    className="absolute top-1 right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white"
                    onClick={() => setMedia(media.filter((_, i) => i !== idx))}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Media Picker */}
              <div className="relative">
                <motion.button
                  className="p-2 text-gray-400 hover:text-sky-400 rounded-lg hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowMediaPicker(!showMediaPicker)}
                >
                  <ImagePlus size={20} />
                </motion.button>
                
                <AnimatePresence>
                  {showMediaPicker && (
                    <motion.div
                      className="absolute bottom-full left-0 mb-2 p-2 bg-gray-800 rounded-xl border border-gray-700 flex gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <motion.button
                        className="p-2 text-gray-400 hover:text-sky-400 rounded-lg hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Camera size={18} />
                      </motion.button>
                      <motion.button
                        className="p-2 text-gray-400 hover:text-purple-400 rounded-lg hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Video size={18} />
                      </motion.button>
                      <motion.button
                        className="p-2 text-gray-400 hover:text-green-400 rounded-lg hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Mic size={18} />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                className="p-2 text-gray-400 hover:text-yellow-400 rounded-lg hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Hash size={20} />
              </motion.button>

              <motion.button
                className="p-2 text-gray-400 hover:text-green-400 rounded-lg hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AtSign size={20} />
              </motion.button>
            </div>

            <div className="flex items-center gap-3">
              <span className={`text-sm ${charCount > maxChars ? 'text-red-400' : 'text-gray-400'}`}>
                {charCount}/{maxChars}
              </span>
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!content.trim() || charCount > maxChars}
              >
                Post
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// TrendingSidebar Component
const TrendingSidebar = ({ topics, users }) => {
  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6">
        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-400" />
          Trending in Rwanda
        </h3>
        <div className="space-y-4">
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              className="cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <p className="text-xs text-gray-500 mb-1">{topic.category}</p>
              <p className="font-semibold text-white hover:text-sky-400 transition-colors">
                {topic.topic}
              </p>
              <p className="text-xs text-gray-500 mt-1">{topic.posts.toLocaleString()} posts</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Who to Follow */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6">
        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-sky-400" />
          Who to Follow
        </h3>
        <div className="space-y-4">
          {users.map((user) => (
            <motion.div
              key={user.id}
              className="flex items-center gap-3"
               whileHover={{ x: 5 }}
            >
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <h4 className="font-semibold text-white text-sm">{user.name}</h4>
                  {user.verified && <Check className="w-3 h-3 text-sky-400" />}
                </div>
                <p className="text-xs text-gray-400">{user.username}</p>
              </div>
              <motion.button
                className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-xs font-semibold hover:bg-sky-500/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Events */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6">
        <h3 className="font-bold text-white mb-4 flex items-center gap-2">
          <Radio className="w-5 h-5 text-red-400 animate-pulse" />
          Live & Upcoming
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/30">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-red-400">LIVE NOW</span>
            </div>
            <p className="text-sm font-semibold text-white">Press Conference</p>
            <p className="text-xs text-gray-400">National Team Announcement</p>
          </div>
          <div className="p-3 bg-gray-800/50 rounded-xl">
            <p className="text-xs text-gray-400 mb-1">Today • 3:00 PM</p>
            <p className="text-sm font-semibold text-white">Training Session</p>
          </div>
          <div className="p-3 bg-gray-800/50 rounded-xl">
            <p className="text-xs text-gray-400 mb-1">Tomorrow • 10:00 AM</p>
            <p className="text-sm font-semibold text-white">Media Briefing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main PressKit Component
const PressKit = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedContentType, setSelectedContentType] = useState("All");
  const [resourceFilter, setResourceFilter] = useState("All");
  const [postFilter, setPostFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [likedItems, setLikedItems] = useState(new Set());
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [notificationList, setNotificationList] = useState(notifications);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [sharedItem, setSharedItem] = useState(null);
  const [copied, setCopied] = useState(false);
  const [postList, setPostList] = useState(posts);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter content based on search and filters
  const filteredPosts = useMemo(() => {
    return postList.filter((post) => {
      const matchesSearch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.author.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesFilter = postFilter === "All" || post.category === postFilter;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, postFilter, postList]);

  const filteredContent = useMemo(() => {
    return newsContent.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (item.excerpt || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesType = selectedContentType === "All" || 
                         (selectedContentType.toLowerCase() === item.type?.toLowerCase());
      
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchTerm, selectedCategory, selectedContentType]);

  const filteredNewsletters = useMemo(() => {
    return newsletters.filter(newsletter => 
      newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      newsletter.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const filteredResources = useMemo(() => {
    return pressResources.filter((resource) => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = resourceFilter === "All" || resource.category === resourceFilter;
      
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, resourceFilter]);

  const handleLike = (id) => {
    const newLiked = new Set(likedItems);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedItems(newLiked);
  };

  const handlePostLike = (id) => {
    setPostList(prev => prev.map(post => 
      post.id === id 
        ? { ...post, stats: { ...post.stats, likes: post.stats.likes + 1 } }
        : post
    ));
  };

  const handlePostSave = (id) => {
    setPostList(prev => prev.map(post => 
      post.id === id 
        ? { ...post, stats: { ...post.stats, saves: post.stats.saves + 1 }, isSaved: !post.isSaved }
        : post
    ));
  };

  const handlePostReact = (id, reaction) => {
    setPostList(prev => prev.map(post => 
      post.id === id 
        ? { 
            ...post, 
            engagement: { 
              ...post.engagement, 
              reactions: { 
                ...post.engagement.reactions, 
                [reaction]: (post.engagement.reactions[reaction] || 0) + 1 
              } 
            } 
          }
        : post
    ));
  };

  const handleBookmark = (id) => {
    const newBookmarked = new Set(bookmarkedItems);
    if (newBookmarked.has(id)) {
      newBookmarked.delete(id);
    } else {
      newBookmarked.add(id);
    }
    setBookmarkedItems(newBookmarked);
  };

  const handleDismissNotification = (id) => {
    if (id === 'all') {
      setNotificationList([]);
    } else {
      setNotificationList(notificationList.filter(n => n.id !== id));
    }
  };

  const handleShare = (item) => {
    setSharedItem(item);
    setShareModalOpen(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVideoPlay = (video) => {
    setCurrentVideo(video);
    setShowVideoModal(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white relative overflow-hidden lg:pt-20 sm:pt-10">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Enhanced animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-sky-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-sky-500/10 to-transparent"></div>
        
        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sky-500/20 rounded-full"
            animate={{
              x: [Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
              y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <Navbar />

      {/* Top bar with notifications */}
      <div className="sticky top-0 z-40 bg-black/50 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-semibold text-sky-400">RBF MEDIA CENTER</span>
          </div>
          <div className="flex items-center gap-3">
            <NotificationCenter 
              notifications={notificationList} 
              onDismiss={handleDismissNotification}
            />
            <motion.button
              className="p-2 bg-sky-500/20 rounded-xl border border-sky-500/30 text-sky-400 hover:bg-sky-500/30 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Megaphone className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">Media Kit</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hero Section with live updates */}
      <section className="relative py-20 text-center z-10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-sky-600/20 via-transparent to-purple-600/20"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="max-w-5xl mx-auto relative z-10 px-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-sky-500/30 mb-6"
          >
            <Sparkles className="w-5 h-5 text-sky-400" />
            <span className="text-sky-300 font-semibold">LIVE UPDATES • 24/7 COVERAGE</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-sky-300 to-purple-300 bg-clip-text text-transparent">
              Rwanda Boxing
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
              Community Hub
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Join the conversation, share your passion, and stay connected with the 
            Rwandan boxing community. Get the latest news, exclusive content, and 
            interact with fellow fans.
          </p>

          {/* Live stats ticker */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-gray-800">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300">LIVE: Press Conference</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-gray-800">
              <Users className="w-4 h-4 text-sky-400" />
              <span className="text-gray-300">4.2K online now</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-gray-800">
              <MessageCircle className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300">2.3K new posts today</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advertisement banners */}
      <section className="px-6 max-w-7xl mx-auto w-full relative z-10 mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          {advertisements.map((ad) => (
            <AdvertisementBanner key={ad.id} ad={ad} />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-8 px-6 max-w-7xl mx-auto w-full relative z-10">
        {/* Enhanced Tabs Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-wrap gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-2xl border border-gray-800">
            {[
              { id: "posts", label: "Community Posts", icon: <MessageCircle className="w-4 h-4" />, count: posts.length },
              { id: "news", label: "News Feed", icon: <Newspaper className="w-4 h-4" />, count: newsContent.length },
              { id: "newsletters", label: "Newsletters", icon: <Mail className="w-4 h-4" />, count: newsletters.length },
              { id: "press", label: "Press Kit", icon: <FileText className="w-4 h-4" />, count: pressResources.length },
              { id: "partners", label: "Partners", icon: <Users className="w-4 h-4" />, count: mediaPartners.length }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all relative ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.icon}
                {tab.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id ? "bg-white/20" : "bg-gray-700"
                }`}>
                  {tab.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Search and Filters */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-4 mb-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search posts, news, articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 backdrop-blur-sm transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative min-w-[150px]">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <select
                value={
                  activeTab === 'posts' ? postFilter :
                  activeTab === 'news' ? selectedCategory : 
                  resourceFilter
                }
                onChange={(e) => {
                  if (activeTab === 'posts') setPostFilter(e.target.value);
                  else if (activeTab === 'news') setSelectedCategory(e.target.value);
                  else setResourceFilter(e.target.value);
                }}
                className="w-full pl-10 pr-8 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
              >
                {(activeTab === 'posts' ? postCategories : 
                  activeTab === 'news' ? categories : 
                  resourceCategories).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {activeTab === 'news' && (
              <div className="relative min-w-[150px]">
                <Layers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <select
                  value={selectedContentType}
                  onChange={(e) => setSelectedContentType(e.target.value)}
                  className="w-full pl-10 pr-8 py-3 bg-black/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 appearance-none"
                >
                  {contentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            )}

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

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "posts" && (
            <motion.div
              key="posts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Feed */}
                <div className="lg:col-span-2">
                  {/* Post Composer */}
                  <PostComposer onPost={(content) => console.log('New post:', content)} />

                  {/* Posts Feed */}
                  {filteredPosts.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800"
                    >
                      <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">No Posts Found</h3>
                      <p className="text-gray-400">Be the first to share something!</p>
                    </motion.div>
                  ) : (
                    <div className="space-y-4">
                      {filteredPosts.map((post) => (
                        <PostCard
                          key={post.id}
                          post={post}
                          onLike={handlePostLike}
                          onComment={(id) => console.log('Comment on:', id)}
                          onShare={handleShare}
                          onSave={handlePostSave}
                          onReact={handlePostReact}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div>
                  <TrendingSidebar topics={trendingTopics} users={suggestedUsers} />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "news" && (
            <motion.div
              key="news"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Featured Article */}
              {filteredContent.find(item => item.type === "featured") && (
                <div className="mb-8">
                  <FeaturedArticle 
                    article={filteredContent.find(item => item.type === "featured")}
                    onReadMore={setSelectedArticle}
                    onShare={handleShare}
                  />
                </div>
              )}

              {/* Results Header */}
              <div className="mb-6 flex flex-wrap justify-between items-center">
                <div>
                  <p className="text-gray-400">
                    Showing <span className="text-white font-semibold">{filteredContent.length}</span> articles
                    {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-sm text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1">
                    <TrendingUp size={16} />
                    Trending
                  </button>
                  <button className="text-sm text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1">
                    <Clock size={16} />
                    Latest
                  </button>
                  <button className="text-sm text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1">
                    <Flame size={16} />
                    Popular
                  </button>
                </div>
              </div>

              {/* Content Grid */}
              {filteredContent.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800"
                >
                  <Newspaper className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">No Content Found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                </motion.div>
              ) : (
                <div className={`grid gap-6 ${
                  viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                }`}>
                  {filteredContent
                    .filter(item => item.type !== "featured")
                    .map((item) => (
                      <NewsCard
                        key={item.id}
                        item={item}
                        onClick={item.type === "video" ? handleVideoPlay : setSelectedArticle}
                        onLike={handleLike}
                        isLiked={likedItems.has(item.id)}
                        onBookmark={handleBookmark}
                        isBookmarked={bookmarkedItems.has(item.id)}
                      />
                    ))}
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "newsletters" && (
            <motion.div
              key="newsletters"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Newsletter List */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-white mb-6">Newsletter Archive</h2>
                  
                  {filteredNewsletters.length === 0 ? (
                    <div className="text-center py-12 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800">
                      <Mail className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                      <p className="text-gray-400">No newsletters found</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredNewsletters.map((newsletter) => (
                        <motion.div
                          key={newsletter.id}
                          className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-4 hover:border-sky-500/50 transition-all cursor-pointer"
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <div className="flex gap-4">
                            <img 
                              src={newsletter.image} 
                              alt={newsletter.title}
                              className="w-24 h-24 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h3 className="font-bold text-white mb-1">{newsletter.title}</h3>
                              <p className="text-sm text-gray-400 mb-2">{newsletter.description}</p>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {newsletter.topics.map((topic, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                                    {topic}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span>{newsletter.date}</span>
                                <div className="flex items-center gap-1">
                                  <Eye size={12} />
                                  <span>{newsletter.readCount} reads</span>
                                </div>
                              </div>
                            </div>
                            <motion.button
                              className="px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700 transition-colors self-center"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Read
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Newsletter Signup Sidebar */}
                <div>
                  <NewsletterSignup />
                  
                  {/* Topics Cloud */}
                  <motion.div
                    className="mt-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="font-bold text-white mb-4">Popular Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Championships", "Olympics", "Training", "Interviews", "Results", "Development", "Youth", "International", "Rankings", "Events"].map((topic) => (
                        <motion.span
                          key={topic}
                          className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-sky-600 hover:text-white transition-colors cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                        >
                          #{topic}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "press" && (
            <motion.div
              key="press"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Press Resources */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-white mb-6">Press Resources</h2>
                  
                  <div className={`grid gap-4 ${
                    viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                  }`}>
                    {filteredResources.map((resource) => (
                      <ResourceCard
                        key={resource.id}
                        resource={resource}
                      />
                    ))}
                  </div>
                </div>

                {/* Media Partners Sidebar */}
                <div>
                  <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6">
                    <h3 className="font-bold text-white mb-4">Media Partners</h3>
                    <div className="space-y-4">
                      {mediaPartners.map((partner) => (
                        <motion.div
                          key={partner.id}
                          className="flex items-center gap-3 p-3 bg-black/50 rounded-xl border border-gray-800 hover:border-sky-500/50 transition-all cursor-pointer"
                          whileHover={{ x: 5 }}
                        >
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="w-12 h-12 rounded-lg object-cover bg-gray-800"
                          />
                          <div>
                            <h4 className="font-semibold text-white text-sm">{partner.name}</h4>
                            <p className="text-xs text-gray-400">{partner.type}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Card */}
                  <motion.div 
                    className="mt-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-bold text-white mb-4">Media Contact</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-sky-400" />
                        <a href="mailto:media@rwandaboxing.rw" className="text-gray-300 hover:text-sky-400 text-sm transition-colors">
                          media@rwandaboxing.rw
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-green-400" />
                        <p className="text-gray-300 text-sm">+250 788 123 456</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-red-400" />
                        <p className="text-gray-300 text-sm">RBF Headquarters, Kigali</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-800">
                      <p className="text-xs text-gray-500 mb-3">For press accreditation:</p>
                      <motion.button
                        className="w-full px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Apply for Media Pass
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "partners" && (
            <motion.div
              key="partners"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-3">Our Media Partners</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Collaborating with leading media organizations to bring you comprehensive coverage of Rwandan boxing.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {mediaPartners.map((partner, index) => (
                  <motion.div
                    key={partner.id}
                    className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6 text-center hover:border-sky-500/50 transition-all cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-20 h-20 mx-auto mb-4 rounded-full object-cover bg-gray-800"
                    />
                    <h3 className="font-bold text-white mb-1">{partner.name}</h3>
                    <p className="text-sm text-sky-400">{partner.type}</p>
                  </motion.div>
                ))}
              </div>

              {/* Partnership CTA */}
              <motion.div 
                className="mt-12 bg-gradient-to-r from-sky-600/20 to-purple-600/20 rounded-2xl border border-gray-800 p-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-3">Become a Media Partner</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join our network of media partners and get exclusive access to events, interviews, and press resources.
                </p>
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply for Partnership
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter Section */}
        <motion.section 
          className="mt-16 bg-gradient-to-br from-sky-900/20 via-transparent to-purple-900/20 rounded-3xl border border-gray-800 p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <MailOpen className="w-12 h-12 text-sky-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-3">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest news, exclusive content, and media alerts.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                Subscribe
              </motion.button>
            </form>
            
            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </motion.section>
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 p-3 bg-sky-600 text-white rounded-full shadow-lg shadow-sky-500/25 hover:bg-sky-700 transition-colors z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
          >
            <ChevronRight className="w-6 h-6 rotate-[-90deg]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && currentVideo && (
          <VideoModal
            videoUrl={currentVideo.videoUrl}
            onClose={() => setShowVideoModal(false)}
          />
        )}
      </AnimatePresence>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleModal
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
            onShare={handleShare}
          />
        )}
      </AnimatePresence>

      {/* Share Modal */}
      <AnimatePresence>
        {shareModalOpen && sharedItem && (
          <ShareModal
            item={sharedItem}
            onClose={() => setShareModalOpen(false)}
            onCopy={handleCopyLink}
            copied={copied}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default PressKit;