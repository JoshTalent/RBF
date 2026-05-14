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
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:border-sky-500/30 hover:bg-white/[0.05]"
      whileHover={{ y: -8 }}
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
      
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/20 group-hover:border-sky-500/40 transition-colors">
          <FileText className="w-6 h-6 text-sky-400" />
        </div>
        <span className="px-3 py-1 bg-white/5 text-[10px] uppercase tracking-wider text-gray-400 rounded-full border border-white/5 font-medium">
          {resource.category}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">{resource.title}</h3>
      <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-2">{resource.description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500 uppercase tracking-tighter">Size</span>
          <span className="text-xs font-semibold text-gray-400">{resource.fileSize}</span>
        </div>
        <motion.button
          className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-sky-500/20 hover:bg-sky-400 hover:shadow-sky-500/40 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={16} />
          Get File
        </motion.button>
      </div>
    </motion.div>
  );
};

// FeaturedArticle Component
const FeaturedArticle = ({ article, onReadMore, onShare }) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-10 lg:p-16 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-sky-500/20 rounded-full border border-sky-500/30">
              <Sparkles className="w-3 h-3 text-sky-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400">
                Featured
              </span>
            </div>
            <span className="text-gray-500 text-xs font-medium uppercase tracking-widest">
              {article.category}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            {article.title}
          </h2>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
            {article.excerpt}
          </p>
          
          <div className="flex items-center gap-6 pt-4">
            <motion.button
              className="px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-sky-400 transition-colors flex items-center gap-2 shadow-2xl shadow-white/5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onReadMore(article)}
            >
              Start Reading
              <ChevronRight size={18} />
            </motion.button>
            <motion.button
              className="p-4 text-gray-400 hover:text-white rounded-2xl bg-white/5 border border-white/10 transition-all"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onShare(article)}
            >
              <Share2 size={22} />
            </motion.button>
          </div>
        </div>
        
        <div className="relative h-full min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 md:hidden" />
          <motion.img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        </div>
      </div>
    </motion.div>
  );
};

// NewsCard Component
const NewsCard = ({ item, onClick, onLike, isLiked, onBookmark, isBookmarked }) => {
  return (
    <motion.div
      className="group flex flex-col h-full bg-white/[0.03] rounded-3xl border border-white/5 overflow-hidden hover:border-sky-500/30 transition-all duration-500"
      whileHover={{ y: -8 }}
      onClick={() => onClick(item)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        
        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </motion.div>
          </div>
        )}
        
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white rounded-lg border border-white/10">
            {item.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <Clock className="w-3 h-3 text-gray-500" />
          <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">{item.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors line-clamp-2 leading-tight">
          {item.title}
        </h3>
        
        <p className="text-sm text-gray-400 mb-6 line-clamp-2 leading-relaxed">
          {item.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div className="flex items-center gap-4">
            <button 
              className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${isLiked ? 'text-red-400' : 'text-gray-500 hover:text-red-400'}`}
              onClick={(e) => { e.stopPropagation(); onLike(item.id); }}
            >
              <Heart size={14} className={isLiked ? "fill-current" : ""} />
              <span>{item.likes || 0}</span>
            </button>
            <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-sky-400">
              <MessageCircle size={14} />
              <span>{item.comments || 0}</span>
            </button>
          </div>
          
          <button 
            className={`p-2 rounded-lg transition-colors ${isBookmarked ? 'bg-yellow-500/10 text-yellow-400' : 'text-gray-500 hover:text-yellow-400 hover:bg-yellow-500/5'}`}
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

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className={`relative bg-white/[0.02] backdrop-blur-2xl rounded-3xl border ${
        post.isPinned ? 'border-sky-500/30 bg-sky-500/[0.02]' : 'border-white/5'
      } overflow-hidden transition-all duration-500 hover:border-sky-500/20 hover:shadow-2xl hover:shadow-sky-500/10`}>
        
        {post.isPinned && (
          <div className="absolute top-6 right-6 z-20 px-3 py-1 bg-sky-500/20 text-sky-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-sky-500/30">
            Pinned
          </div>
        )}

        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white/5"
              />
              {post.author.verified && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center border-2 border-black">
                  <Check size={10} className="text-white" />
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-lg tracking-tight">
                  {post.author.name}
                </h3>
                <span className="text-gray-500 text-sm font-medium">· {getTimeAgo(post.timestamp)}</span>
              </div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">{post.author.role}</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-200 text-lg leading-relaxed font-medium">
              {post.content}
            </p>
            
            {(post.tags || post.mentions) && (
              <div className="flex flex-wrap gap-2 text-sm">
                {post.tags?.map((tag, idx) => (
                  <span key={idx} className="text-sky-400 hover:text-sky-300 transition-colors font-semibold cursor-pointer">
                    {tag}
                  </span>
                ))}
                {post.mentions?.map((mention, idx) => (
                  <span key={idx} className="text-purple-400 hover:text-purple-300 transition-colors font-semibold cursor-pointer">
                    {mention}
                  </span>
                ))}
              </div>
            )}
          </div>

          {post.media && post.media.length > 0 && (
            <div className={`mt-6 grid gap-4 ${
              post.media.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
            }`}>
              {post.media.map((media, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl overflow-hidden group/media ${
                    post.media.length === 3 && idx === 0 ? 'row-span-2 h-full' : 'h-64'
                  }`}
                >
                  <img 
                    src={media.type === 'image' ? media.url : media.thumbnail} 
                    alt={media.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-105"
                  />
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-xs text-white font-medium">{media.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
            <div className="flex items-center gap-6">
              <motion.button
                className={`flex items-center gap-2 text-sm font-bold transition-colors ${isLiked ? 'text-sky-400' : 'text-gray-500 hover:text-sky-400'}`}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setShowReactions(true)}
                onMouseLeave={() => setShowReactions(false)}
                onClick={() => !isLiked && handleReaction('like')}
              >
                {selectedReaction ? reactions.find(r => r.type === selectedReaction)?.icon : <Heart size={20} className={isLiked ? "fill-current" : ""} />}
                <span>{formatNumber(localLikes)}</span>
                
                <AnimatePresence>
                  {showReactions && !isLiked && (
                    <motion.div
                      className="absolute bottom-full left-0 mb-4 flex gap-1 p-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/10"
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    >
                      {reactions.map((reaction) => (
                        <motion.button
                          key={reaction.type}
                          className="p-2.5 rounded-full hover:bg-white/10 transition-colors"
                          whileHover={{ scale: 1.3 }}
                          onClick={(e) => { e.stopPropagation(); handleReaction(reaction.type); }}
                        >
                          {reaction.icon}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-sky-400 transition-colors">
                <MessageCircle size={20} />
                <span>{formatNumber(post.stats.comments)}</span>
              </button>
              
              <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-sky-400 transition-colors">
                <Share2 size={20} />
                <span>{formatNumber(post.stats.shares)}</span>
              </button>
            </div>

            <motion.button
              className={`p-2 rounded-xl transition-all ${isSaved ? 'text-yellow-400 bg-yellow-500/10' : 'text-gray-500 hover:text-yellow-400 hover:bg-white/5'}`}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsSaved(!isSaved)}
            >
              <Bookmark size={22} className={isSaved ? "fill-current" : ""} />
            </motion.button>
          </div>
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
    <div className="flex flex-col min-h-screen bg-[#020617] text-white selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent z-[100]"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Hero Section - Advanced Cinematic Design */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-sky-500/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-400">Media Center Alpha</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
            >
              THE HEART OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-sky-400 bg-[length:200%_auto] animate-gradient">RWANDAN BOXING</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12 font-medium"
            >
              Experience the adrenaline, the stories, and the legacy. Your definitive source for official news, 
              community insights, and media assets from the Rwanda Boxing Federation.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-2xl font-bold transition-all shadow-xl shadow-sky-500/20 flex items-center gap-2 group">
                Access Press Kit
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold transition-all border border-white/10 backdrop-blur-md">
                Live Coverage
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation & Search - Clean Glassmorphism */}
      <section className="sticky top-20 z-50 px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="p-2 bg-white/[0.02] backdrop-blur-2xl rounded-[2rem] border border-white/5 shadow-2xl flex flex-col md:flex-row items-center gap-2">
            <div className="flex flex-wrap gap-1 p-1 w-full md:w-auto">
              {[
                { id: "posts", label: "Community", icon: <Users size={16} /> },
                { id: "news", label: "Newsroom", icon: <Newspaper size={16} /> },
                { id: "newsletters", label: "Insights", icon: <TrendingUp size={16} /> },
                { id: "press", label: "Resources", icon: <Layers size={16} /> },
                { id: "partners", label: "Network", icon: <Share2 size={16} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                    activeTab === tab.id 
                      ? "bg-white text-black shadow-xl" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="h-8 w-[1px] bg-white/10 hidden md:block mx-4" />

            <div className="relative flex-1 w-full px-2 md:px-0">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search the media center..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none font-medium"
              />
            </div>

            <div className="hidden lg:flex items-center gap-2 pr-4">
              <NotificationCenter 
                notifications={notificationList} 
                onDismiss={handleDismissNotification}
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-24 w-full relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === "posts" && (
            <motion.div
              key="posts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-8 space-y-8">
                <PostComposer onPost={(content) => console.log('New post:', content)} />
                {filteredPosts.map((post) => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onLike={handlePostLike}
                    onShare={handleShare}
                    onSave={handlePostSave}
                    onReact={handlePostReact}
                  />
                ))}
              </div>
              <aside className="lg:col-span-4 space-y-8">
                <TrendingSidebar topics={trendingTopics} users={suggestedUsers} />
              </aside>
            </motion.div>
          )}

          {activeTab === "news" && (
            <motion.div
              key="news"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              {filteredContent.find(item => item.type === "featured") && (
                <FeaturedArticle 
                  article={filteredContent.find(item => item.type === "featured")}
                  onReadMore={setSelectedArticle}
                  onShare={handleShare}
                />
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </motion.div>
          )}

          {activeTab === "press" && (
            <motion.div
              key="press"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </motion.div>
          )}

          {activeTab === "newsletters" && (
            <motion.div
              key="newsletters"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="max-w-3xl mx-auto">
                <NewsletterSignup />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsletters.map((newsletter) => (
                  <motion.div
                    key={newsletter.id}
                    className="bg-white/[0.03] rounded-[2rem] border border-white/5 overflow-hidden group hover:border-sky-500/30 transition-all duration-500"
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img src={newsletter.image} alt={newsletter.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-widest text-sky-400">{newsletter.date}</span>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors">{newsletter.title}</h3>
                      <p className="text-sm text-gray-400 mb-6 leading-relaxed">{newsletter.description}</p>
                      <button className="w-full py-3 bg-white/5 hover:bg-white text-gray-300 hover:text-black rounded-xl font-bold transition-all border border-white/10">Read Archive</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "partners" && (
            <motion.div
              key="partners"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {mediaPartners.map((partner) => (
                <div key={partner.id} className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 text-center hover:border-sky-500/30 transition-all duration-500 group">
                  <div className="w-20 h-20 mx-auto mb-6 relative">
                    <img src={partner.logo} alt={partner.name} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-sky-500/50 transition-colors" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{partner.type}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      {/* Modals & Overlays */}
      <AnimatePresence>
        {showVideoModal && currentVideo && <VideoModal videoUrl={currentVideo.videoUrl} onClose={() => setShowVideoModal(false)} />}
        {selectedArticle && <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} onShare={handleShare} />}
        {shareModalOpen && sharedItem && <ShareModal item={sharedItem} onClose={() => setShareModalOpen(false)} onCopy={handleCopyLink} copied={copied} />}
      </AnimatePresence>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PressKit;