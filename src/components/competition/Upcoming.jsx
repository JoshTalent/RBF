import React, { useState, useMemo } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";

import {
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  Users,
  Ticket,
  ArrowRight,
  Share2,
  Bookmark,
  Crown,
  Star,
  Search,
  X,
  Trophy,
  Award,
  CalendarRange,
  ChevronRight,
  Armchair,
  CreditCard,
  Minus,
  Plus,
  DollarSign,
  TrendingUp,
  Sparkles,
  Zap,
} from "lucide-react";

// Enhanced Events Data with more details and draws
const events = [
  
  {
    id: 2,
    name: "RWANDA NATIONAL MENS BOXING CHAMPIONSHIP 2026 Preliminaries / Quarter-Finals",
    date: new Date(2026, 4, 15),
    time: "14:00 - 19:00",
    location: "BODYMAX FITNESS GYM REMERA KABEZA",
    category: "Championship",
    status: "upcoming",
    priority: "featured",
    participants: 34,
    description:
      "WEEK 2 - RWANDA BOXING CHAMPIONSHIP 🇷🇼🥊The journey begins. 14 explosive bouts.8 different weight classes.One ring. One mission.Rwanda’s finest fighters step into the ring to prove who belongs at the top.",
    image: "https://i.postimg.cc/63n8t70g/Screenshot_2026_03_04_111120.png",
    organizer: "Rwanda Boxing Federation",
    venue: "BODYMAX FITNESS GYM REMERA KABEZA",
    tickets: {
      categories: [
        {
          id: "vip",
          name: "VIP Premium",
          price: 10000,
          currency: "RWF",
          available: 50,
          total: 30,
          seats: ["A1-A10", "B1-B10", "C1-C10", "D1-D10", "E1-E10"],
        },
        {
          id: "gold",
          name: "Gold Category",
          price: 5000,
          currency: "RWF",
          available: 100,
          total: 100,
          seats: ["F1-F20", "G1-G20", "H1-H20", "I1-I20", "J1-J20"],
        },
        {
          id: "silver",
          name: "Silver Category",
          price: 2000,
          currency: "RWF",
          available: 300,
          total: 400,
          seats: ["K1-K40", "L1-L40", "M1-M40", "N1-N40", "O1-O40"],
        },
      ],
    },
    draws: [
      {
        weightClass: "FLY WEIGHT",
        bouts: [
          {
            fighter1: "Iyanone Jean Claude",
            fighter2: "N, Ibrahim",
            time: "14:00",
          },
          {
            fighter1: "Muhamad Said Abdalla",
            fighter2: "Muhire Leon",
            time: "14:30",
          },
          {
            fighter1: "Hatangimana Amani",
            fighter2: "Nshimiye Omal",
            time: "15:00",
          },
        ],
      },
      {
        weightClass: "BANTAM WEIGHT",
        bouts: [
          {
            fighter1: "H, Fabrice",
            fighter2: "N, Valentin",
            time: "19:00",
          },
        ],
      },
      {
        weightClass: "FEATHER WEIGHT",
        bouts: [
          {
            fighter1: "Mazimpaka Vedaste ",
            fighter2: "Iranezeza Aime",
            time: "19:30",
          },
          {
            fighter1: "Irasubiza joshua",
            fighter2: "cyizere emmanuel",
            time: "19:30",
          },
          {
            fighter1: "Byukusenge Eric",
            fighter2: "H, abdul",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "LIGHT WEIGHT",
        bouts: [
          {
            fighter1: "iradukunda Bruce ",
            fighter2: "Rubamba Iguru",
            time: "19:30",
          },
          {
            fighter1: "munyehirwe kenny",
            fighter2: "tuyizere halid",
            time: "19:30",
          },
          {
            fighter1: "gisubizo justin ",
            fighter2: "izabayo placide",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "LIGHT WELTERWEIGHT",
        bouts: [
          {
            fighter1: "Mugisha Kawembe ",
            fighter2: "Niyonzima Pacifique",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "WELTERWEIGHT",
        bouts: [
          {
            fighter1: "D, jean batiste ",
            fighter2: "M, Errisa",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "LIGHTWEIGHT MIDDLEWEIGHT",
        bouts: [
          {
            fighter1: "H, kalisa olivier ",
            fighter2: "mboumba Debouba",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "MIDDLEWEIGHT",
        bouts: [
          {
            fighter1: "N, pqtric",
            fighter2: " innocent",
            time: "19:30",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "KIGALI FIGHT NIGHT",
    date: new Date(2026, 2, 28),
    time: "14:00 - 21:00",
    location: "KCC ROUNDABOUT",
    category: "Championship",
    status: "upcoming",
    priority: "featured",
    participants: 32,
    description:
      "Kigali Fight Night brings together ELITE professional boxers from across Africa for one night in a SPECIAL CITY on MARCH 28 at Kigali Heights, KCC Roundabout. Get your tickets on Sinc and be part of culture, entertainment AND A COMBAT SPECTACULAR, a night of EXCEPTIONAL BOXING. 🥊 ",
    image: "https://i.postimg.cc/3w9CdjZr/Screenshot-2026-03-26-135316.png",
    organizer: "Silver Back Sports",
    venue: "KCC ROUNDABOUT",
    tickets: {
      categories: [
        {
          id: "vip",
          name: "DIAMOND RINGSIDE",
          price: 120000,
          currency: "RWF",
          available: 50,
          total: 30,
          seats: ["A1-A10", "B1-B10", "C1-C10", "D1-D10", "E1-E10"],
        },
        {
          id: "gold",
          name: "PLATINUM VIP",
          price: 60000,
          currency: "RWF",
          available: 100,
          total: 100,
          seats: ["F1-F20", "G1-G20", "H1-H20", "I1-I20", "J1-J20"],
        },
        {
          id: "silver",
          name: "GOLD REGULAR Wave 2",
          price: 14000,
          currency: "RWF",
          available: 300,
          total: 400,
          seats: ["K1-K40", "L1-L40", "M1-M40", "N1-N40", "O1-O40"],
        },
      ],
    },
    draws: [
      {
        weightClass: "FLY WEIGHT",
        bouts: [
          {
            fighter1: "Iyanone Jean Claude",
            fighter2: "N, Ibrahim",
            time: "14:00",
          },
          {
            fighter1: "Muhamad Said Abdalla",
            fighter2: "Muhire Leon",
            time: "14:30",
          },
          {
            fighter1: "Hatangimana Amani",
            fighter2: "Nshimiye Omal",
            time: "15:00",
          },
        ],
      },
      {
        weightClass: "BANTAM WEIGHT",
        bouts: [
          {
            fighter1: "H, Fabrice",
            fighter2: "N, Valentin",
            time: "19:00",
          },
        ],
      },
      {
        weightClass: "FEATHER WEIGHT",
        bouts: [
          {
            fighter1: "Mazimpaka Vedaste ",
            fighter2: "Iranezeza Aime",
            time: "19:30",
          },
          {
            fighter1: "Irasubiza joshua",
            fighter2: "cyizere emmanuel",
            time: "19:30",
          },
          {
            fighter1: "Byukusenge Eric",
            fighter2: "H, abdul",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "LIGHT WEIGHT",
        bouts: [
          {
            fighter1: "iradukunda Bruce ",
            fighter2: "Rubamba Iguru",
            time: "19:30",
          },
          {
            fighter1: "munyehirwe kenny",
            fighter2: "tuyizere halid",
            time: "19:30",
          },
          {
            fighter1: "gisubizo justin ",
            fighter2: "izabayo placide",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "LIGHT WELTERWEIGHT",
        bouts: [
          {
            fighter1: "Mugisha Kawembe ",
            fighter2: "Niyonzima Pacifique",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "WELTERWEIGHT",
        bouts: [
          {
            fighter1: "D, jean batiste ",
            fighter2: "M, Errisa",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "LIGHTWEIGHT MIDDLEWEIGHT",
        bouts: [
          {
            fighter1: "H, kalisa olivier ",
            fighter2: "mboumba Debouba",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "MIDDLEWEIGHT",
        bouts: [
          {
            fighter1: "N, pqtric",
            fighter2: " innocent",
            time: "19:30",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "RWANDA NATIONAL MENS BOXING CHAMPIONSHIP 2026",
    date: new Date(2026, 2, 15),
    time: "14:00 - 19:00",
    location: "HILL TOP HOTEL REMERA",
    category: "Championship",
    status: "upcoming",
    priority: "featured",
    participants: 32,
    description:
      "WEEK 2 - RWANDA BOXING CHAMPIONSHIP 🇷🇼🥊The journey begins. 14 explosive bouts.8 different weight classes.One ring. One mission.Rwanda’s finest fighters step into the ring to prove who belongs at the top.",
    image: "https://i.postimg.cc/63n8t70g/Screenshot_2026_03_04_111120.png",
    organizer: "Rwanda Boxing Federation",
    venue: "HILL TOP HOTEL REMERA",
    tickets: {
      categories: [
        {
          id: "vip",
          name: "VIP Premium",
          price: 10000,
          currency: "RWF",
          available: 50,
          total: 30,
          seats: ["A1-A10", "B1-B10", "C1-C10", "D1-D10", "E1-E10"],
        },
        {
          id: "gold",
          name: "Gold Category",
          price: 5000,
          currency: "RWF",
          available: 100,
          total: 100,
          seats: ["F1-F20", "G1-G20", "H1-H20", "I1-I20", "J1-J20"],
        },
        {
          id: "silver",
          name: "Silver Category",
          price: 2000,
          currency: "RWF",
          available: 300,
          total: 400,
          seats: ["K1-K40", "L1-L40", "M1-M40", "N1-N40", "O1-O40"],
        },
      ],
    },
    draws: [
      {
        weightClass: "FLY WEIGHT",
        bouts: [
          {
            fighter1: "Iyanone Jean Claude",
            fighter2: "N, Ibrahim",
            time: "14:00",
          },
          {
            fighter1: "Muhamad Said Abdalla",
            fighter2: "Muhire Leon",
            time: "14:30",
          },
          {
            fighter1: "Hatangimana Amani",
            fighter2: "Nshimiye Omal",
            time: "15:00",
          },
        ],
      },
      {
        weightClass: "BANTAM WEIGHT",
        bouts: [
          {
            fighter1: "H, Fabrice",
            fighter2: "N, Valentin",
            time: "19:00",
          },
        ],
      },
      {
        weightClass: "FEATHER WEIGHT",
        bouts: [
          {
            fighter1: "Mazimpaka Vedaste ",
            fighter2: "Iranezeza Aime",
            time: "19:30",
          },
          {
            fighter1: "Irasubiza joshua",
            fighter2: "cyizere emmanuel",
            time: "19:30",
          },
          {
            fighter1: "Byukusenge Eric",
            fighter2: "H, abdul",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "LIGHT WEIGHT",
        bouts: [
          {
            fighter1: "iradukunda Bruce ",
            fighter2: "Rubamba Iguru",
            time: "19:30",
          },
          {
            fighter1: "munyehirwe kenny",
            fighter2: "tuyizere halid",
            time: "19:30",
          },
          {
            fighter1: "gisubizo justin ",
            fighter2: "izabayo placide",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "LIGHT WELTERWEIGHT",
        bouts: [
          {
            fighter1: "Mugisha Kawembe ",
            fighter2: "Niyonzima Pacifique",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "WELTERWEIGHT",
        bouts: [
          {
            fighter1: "D, jean batiste ",
            fighter2: "M, Errisa",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "LIGHTWEIGHT MIDDLEWEIGHT",
        bouts: [
          {
            fighter1: "H, kalisa olivier ",
            fighter2: "mboumba Debouba",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "MIDDLEWEIGHT",
        bouts: [
          {
            fighter1: "N, pqtric",
            fighter2: " innocent",
            time: "19:30",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "RWANDA NATIONAL MENS BOXING CHAMPIONSHIP 2026",
    date: new Date(2026, 2, 8),
    time: "14:00 - 19:00",
    location: "Kimisagara, maison des jenne",
    category: "Championship",
    status: "upcoming",
    priority: "featured",
    participants: 32,
    description:
      "WEEK 1 - RWANDA BOXING CHAMPIONSHIP 🇷🇼🥊The journey begins. 14 explosive bouts.8 different weight classes.One ring. One mission.Rwanda’s finest fighters step into the ring to prove who belongs at the top.",
    image: "https://i.postimg.cc/63n8t70g/Screenshot_2026_03_04_111120.png",
    organizer: "Rwanda Boxing Federation",
    venue: "Kimisagara, maison des jenne",
    tickets: {
      categories: [
        {
          id: "vip",
          name: "VIP Premium",
          price: 50000,
          currency: "RWF",
          available: 50,
          total: 100,
          seats: ["A1-A10", "B1-B10", "C1-C10", "D1-D10", "E1-E10"],
        },
        {
          id: "gold",
          name: "Gold Category",
          price: 25000,
          currency: "RWF",
          available: 150,
          total: 200,
          seats: ["F1-F20", "G1-G20", "H1-H20", "I1-I20", "J1-J20"],
        },
        {
          id: "silver",
          name: "Silver Category",
          price: 15000,
          currency: "RWF",
          available: 300,
          total: 400,
          seats: ["K1-K40", "L1-L40", "M1-M40", "N1-N40", "O1-O40"],
        },
        {
          id: "bronze",
          name: "Bronze Category",
          price: 5000,
          currency: "RWF",
          available: 500,
          total: 800,
          seats: ["P1-P80", "Q1-Q80", "R1-R80", "S1-S80", "T1-T80"],
        },
      ],
    },
    draws: [
      {
        weightClass: "FLY WEIGHT",
        bouts: [
          {
            fighter1: "Iyanone Jean Claude",
            fighter2: "N, Ibrahim",
            time: "14:00",
          },
          {
            fighter1: "Muhamad Said Abdalla",
            fighter2: "Muhire Leon",
            time: "14:30",
          },
          {
            fighter1: "Hatangimana Amani",
            fighter2: "Nshimiye Omal",
            time: "15:00",
          },
        ],
      },
      {
        weightClass: "BANTAM WEIGHT",
        bouts: [
          {
            fighter1: "H, Fabrice",
            fighter2: "N, Valentin",
            time: "19:00",
          },
        ],
      },
      {
        weightClass: "FEATHER WEIGHT",
        bouts: [
          {
            fighter1: "Mazimpaka Vedaste ",
            fighter2: "Iranezeza Aime",
            time: "19:30",
          },
          {
            fighter1: "Irasubiza joshua",
            fighter2: "cyizere emmanuel",
            time: "19:30",
          },
          {
            fighter1: "Byukusenge Eric",
            fighter2: "H, abdul",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "LIGHT WEIGHT",
        bouts: [
          {
            fighter1: "iradukunda Bruce ",
            fighter2: "Rubamba Iguru",
            time: "19:30",
          },
          {
            fighter1: "munyehirwe kenny",
            fighter2: "tuyizere halid",
            time: "19:30",
          },
          {
            fighter1: "gisubizo justin ",
            fighter2: "izabayo placide",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "LIGHT WELTERWEIGHT",
        bouts: [
          {
            fighter1: "Mugisha Kawembe ",
            fighter2: "Niyonzima Pacifique",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "WELTERWEIGHT",
        bouts: [
          {
            fighter1: "D, jean batiste ",
            fighter2: "M, Errisa",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "LIGHTWEIGHT MIDDLEWEIGHT",
        bouts: [
          {
            fighter1: "H, kalisa olivier ",
            fighter2: "mboumba Debouba",
            time: "19:30",
          },
        ],
      },
      {
        weightClass: "MIDDLEWEIGHT",
        bouts: [
          {
            fighter1: "N, pqtric",
            fighter2: " innocent",
            time: "19:30",
          },
        ],
      },
    ],
  },
];

// Full Screen Event Modal
const EventDetailsModal = ({ event, onClose }) => {
  const [activeTab, setActiveTab] = useState("details");
  const [selectedBout, setSelectedBout] = useState(null);

  if (!event) return null;

  const minPrice = useMemo(() => {
    if (!event.tickets?.categories) return null;
    return Math.min(...event.tickets.categories.map((cat) => cat.price));
  }, [event]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl overflow-y-auto flex items-start justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-[#0A0A0A] w-full max-w-5xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="relative h-64 sm:h-80 w-full">
          <img src={event.image} alt={event.name} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-sky-500 text-[10px] font-bold text-white rounded uppercase tracking-wider">
                {event.category}
              </span>
              <span className="text-[10px] font-medium text-white/60 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {event.location}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 leading-tight">
              {event.name}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-sky-400" />
                {event.date.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                {event.time}
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-sky-400" />
                {event.participants} Fighters
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 px-6 border-b border-white/5 bg-[#0D0D0D]">
          {[
            { id: "details", label: "Overview", icon: CalendarRange },
            { id: "draws", label: "Fight Card", icon: Trophy },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-4 text-xs font-bold uppercase tracking-widest transition-all relative ${
                activeTab === tab.id ? "text-white" : "text-white/30 hover:text-white/50"
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div layoutId="modalTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500" />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeTab === "details" ? (
              <motion.div
                key="details"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Left: Description */}
                <div className="lg:col-span-2 space-y-8">
                  <section>
                    <h3 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em] mb-4">Event Description</h3>
                    <p className="text-sm text-white/70 leading-relaxed font-light">
                      {event.description}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.2em] mb-4">Venue & Logistics</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                        <span className="block text-[9px] font-bold text-white/30 uppercase mb-1">Main Venue</span>
                        <span className="text-sm text-white font-medium">{event.venue}</span>
                      </div>
                      <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                        <span className="block text-[9px] font-bold text-white/30 uppercase mb-1">Organized By</span>
                        <span className="text-sm text-white font-medium">{event.organizer}</span>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Right: Tickets */}
                <div className="space-y-6">
                  <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                      <Ticket className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-6">Ticketing</h3>
                    
                    <div className="space-y-3">
                      {event.tickets?.categories.map((cat) => (
                        <div key={cat.id} className="group p-3 bg-white/[0.03] border border-white/5 rounded-lg hover:border-sky-500/30 transition-all">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-bold text-white">{cat.name}</span>
                            {cat.id === 'vip' && <Crown className="w-3 h-3 text-yellow-500" />}
                          </div>
                          <div className="flex justify-between items-end">
                            <span className="text-lg font-black text-sky-400">{cat.price.toLocaleString()} <span className="text-[10px]">RWF</span></span>
                            <span className="text-[9px] text-white/30 uppercase">{cat.available} left</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-6 py-3 bg-sky-500 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/10">
                      Secure Access
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="draws"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {event.draws?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {event.draws.map((draw, idx) => (
                      <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
                        <div className="px-4 py-2.5 bg-white/[0.03] border-b border-white/5 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{draw.weightClass}</span>
                          <span className="text-[9px] font-medium text-sky-500 bg-sky-500/10 px-2 py-0.5 rounded uppercase">{draw.bouts.length} Bouts</span>
                        </div>
                        <div className="divide-y divide-white/[0.03]">
                          {draw.bouts.map((bout, bIdx) => (
                            <div key={bIdx} className="p-4 flex items-center justify-between group hover:bg-white/[0.01] transition-all">
                              <div className="flex-1">
                                <div className="flex items-center gap-3">
                                  <span className="text-[10px] font-mono text-white/20">{bout.time}</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold text-white/80">{bout.fighter1}</span>
                                    <span className="text-[9px] font-black text-sky-500/40 italic">VS</span>
                                    <span className="text-xs font-semibold text-white/80">{bout.fighter2}</span>
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-3 h-3 text-white/10 group-hover:text-sky-500 transition-all group-hover:translate-x-1" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 bg-white/[0.03] rounded-full flex items-center justify-center mb-4">
                      <Trophy className="w-5 h-5 text-white/20" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">Fight card not finalized</h3>
                    <p className="text-xs text-white/40">Check back soon for the official draw.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Professional Event Card with all data visible
const EventCard = ({ event, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const minPrice = useMemo(() => {
    if (!event.tickets?.categories) return null;
    return Math.min(...event.tickets.categories.map((cat) => cat.price));
  }, [event]);

  return (
    <motion.div
      className="relative cursor-pointer group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onViewDetails(event)}
    >
      <div className="relative h-24 sm:h-32 bg-[#0A0A0A] rounded-xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-sky-500/30 hover:shadow-[0_0_40px_rgba(14,165,233,0.05)] flex items-center">
        {/* Background Image Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-1/3 overflow-hidden">
          <motion.img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover grayscale opacity-20 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0A0A0A] to-[#0A0A0A]" />
        </div>

        {/* Date Section (Editorial) */}
        <div className="relative z-10 flex flex-col items-center justify-center w-20 sm:w-32 border-r border-white/5 group-hover:border-sky-500/20 transition-colors">
          <span className="text-3xl sm:text-5xl font-black text-white/10 group-hover:text-sky-500/20 transition-colors absolute inset-0 flex items-center justify-center pointer-events-none">
            {event.date.getDate()}
          </span>
          <span className="text-xl sm:text-2xl font-black text-white leading-none relative z-10">
            {event.date.getDate()}
          </span>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] relative z-10">
            {event.date.toLocaleString("default", { month: "short" })}
          </span>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex-1 px-4 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[9px] font-bold text-sky-500 uppercase tracking-widest">{event.category}</span>
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <span className="text-[9px] font-medium text-white/30 uppercase truncate">{event.location}</span>
            </div>
            <h3 className="text-sm sm:text-lg font-bold text-white truncate group-hover:text-sky-400 transition-colors">
              {event.name}
            </h3>
          </div>

          <div className="flex items-center gap-6 sm:gap-12">
            <div className="hidden md:flex flex-col">
              <span className="text-[9px] font-bold text-white/20 uppercase">Schedule</span>
              <span className="text-xs text-white/60 font-medium">{event.time}</span>
            </div>
            
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-bold text-white/20 uppercase">Starting From</span>
              <span className="text-sm sm:text-base font-black text-white">
                {minPrice?.toLocaleString()} <span className="text-[10px] font-medium text-white/40">RWF</span>
              </span>
            </div>

            <motion.div 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-sky-500 group-hover:border-sky-500 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Hover Highlight Strip */}
        <motion.div 
          className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const Upcoming = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesSearch;
    });
  }, [searchTerm]);

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-[#050505] text-white selection:bg-sky-500/30">
      {/* Minimalist Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Simple Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-[1px] w-8 bg-sky-500" />
            <span className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.2em]">Live Calendar</span>
          </motion.div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold tracking-tight mb-3"
              >
                Upcoming <span className="text-white/40 font-light">Events</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-sm text-white/40 max-w-md leading-relaxed"
              >
                Experience the intensity of Rwandan boxing. Book your spot at the next championship fight.
              </motion.p>
            </div>

            {/* Compact Search */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-full md:w-80"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input
                type="text"
                placeholder="Find an event..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.05] transition-all"
              />
            </motion.div>
          </div>
        </div>

        {/* Cinematic Strip List */}
        <AnimatePresence mode="wait">
          {filteredEvents.length > 0 ? (
            <motion.div
              key="events-grid"
              className="flex flex-col gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-events"
              className="flex flex-col items-center justify-center py-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-12 h-12 bg-white/[0.03] rounded-full flex items-center justify-center mb-4">
                <Search className="w-5 h-5 text-white/20" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">No events found</h3>
              <p className="text-xs text-white/40">Try searching for something else.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      {/* Event Details Modal */}
      <AnimatePresence>
        {showEventModal && selectedEvent && (
          <EventDetailsModal
            event={selectedEvent}
            onClose={() => setShowEventModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Upcoming;
