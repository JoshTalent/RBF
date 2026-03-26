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

  const getMinTicketPrice = () => {
    if (!event.tickets?.categories) return null;
    const prices = event.tickets.categories.map((cat) => cat.price);
    return Math.min(...prices);
  };

  const minPrice = getMinTicketPrice();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="min-h-screen"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header with X button */}
        <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-lg border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <h1 className="text-xl font-bold text-white truncate">
                {event.name}
              </h1>
            </div>
            <motion.button
              onClick={onClose}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Image Section */}
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
              <div className="flex flex-wrap gap-3 sm:gap-4 text-white text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <CalendarRange className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
                  <span>
                    {event.date.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  <span>{event.participants} Fighters</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-gray-800 mb-6 overflow-x-auto">
            {[
              { id: "details", label: "Event Details", icon: CalendarIcon },
              { id: "draws", label: "Fight Card & Draws", icon: Trophy },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all relative whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-sky-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {/* Details Tab */}
            {activeTab === "details" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-black/40 rounded-2xl border border-gray-800 p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    About This Event
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {event.description}
                  </p>
                </div>

                {/* Ticket Pricing Section */}
                {event.tickets && event.tickets.categories && (
                  <div className="bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-2xl border border-sky-500/30 p-4 sm:p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Ticket className="w-5 h-5 text-sky-400" />
                      Ticket Pricing
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {event.tickets.categories.map((category) => (
                        <div
                          key={category.id}
                          className="bg-black/50 rounded-xl p-4 border border-gray-700 hover:border-sky-500/50 transition-all"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-white">
                              {category.name}
                            </h4>
                            {category.id === "vip" && (
                              <Crown className="w-4 h-4 text-yellow-400" />
                            )}
                          </div>
                          <div className="text-2xl font-bold text-sky-400 mb-2">
                            {category.price.toLocaleString()} RWF
                          </div>
                          <div className="text-sm text-gray-400">
                            {category.available} seats available
                          </div>
                          <div className="mt-2 text-xs text-gray-500">
                            Seats: {category.seats.join(", ")}
                          </div>
                        </div>
                      ))}
                    </div>
                    {minPrice && (
                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-400">
                          Tickets starting from{" "}
                          <span className="text-sky-400 font-bold">
                            {minPrice.toLocaleString()} RWF
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-black/40 rounded-2xl border border-gray-800 p-4 sm:p-6">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red-400" />
                      Venue Information
                    </h3>
                    <p className="text-gray-300 mb-2 text-sm sm:text-base">
                      <span className="font-semibold text-white">Venue:</span>{" "}
                      {event.venue}
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base">
                      <span className="font-semibold text-white">
                        Location:
                      </span>{" "}
                      {event.location}
                    </p>
                  </div>

                  <div className="bg-black/40 rounded-2xl border border-gray-800 p-4 sm:p-6">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Crown className="w-5 h-5 text-yellow-400" />
                      Organizer
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {event.organizer}
                    </p>
                  </div>
                </div>

                {event.draws && event.draws.length > 0 && (
                  <div className="bg-black/40 rounded-2xl border border-gray-800 p-4 sm:p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-400" />
                      Quick Stats
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-sky-400">
                          {event.draws.length}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">
                          Weight Classes
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-sky-400">
                          {event.draws.reduce(
                            (acc, draw) => acc + draw.bouts.length,
                            0,
                          )}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">
                          Total Bouts
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-sky-400">
                          {event.participants}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">
                          Fighters
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-sky-400">
                          {event.tickets?.categories?.length || 0}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">
                          Ticket Categories
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Draws Tab */}
            {activeTab === "draws" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {event.draws && event.draws.length > 0 ? (
                  <div className="space-y-6">
                    {event.draws.map((draw, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-black/40 rounded-xl border border-gray-800 overflow-hidden"
                      >
                        <div className="bg-gradient-to-r from-sky-500/20 to-blue-500/20 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-800">
                          <h4 className="font-bold text-white flex items-center gap-2 text-sm sm:text-base">
                            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                            {draw.weightClass}
                          </h4>
                        </div>

                        <div className="divide-y divide-gray-800">
                          {draw.bouts.map((bout, boutIndex) => (
                            <motion.div
                              key={boutIndex}
                              className={`px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-800/30 transition-colors cursor-pointer ${
                                selectedBout === `${index}-${boutIndex}`
                                  ? "bg-sky-500/10"
                                  : ""
                              }`}
                              onClick={() =>
                                setSelectedBout(
                                  selectedBout === `${index}-${boutIndex}`
                                    ? null
                                    : `${index}-${boutIndex}`,
                                )
                              }
                            >
                              <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <span className="text-xs sm:text-sm font-medium text-sky-400">
                                      {bout.time}
                                    </span>
                                    <div className="flex-1">
                                      <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-white font-semibold text-sm sm:text-base">
                                          {bout.fighter1}
                                        </span>
                                        <span className="text-gray-500 text-xs font-bold">
                                          VS
                                        </span>
                                        <span className="text-white font-semibold text-sm sm:text-base">
                                          {bout.fighter2}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <ChevronRight
                                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform ${
                                    selectedBout === `${index}-${boutIndex}`
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              </div>

                              {selectedBout === `${index}-${boutIndex}` && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="mt-4 pt-4 border-t border-gray-700"
                                >
                                  <div className="bg-sky-500/10 rounded-lg p-3 sm:p-4">
                                    <p className="text-xs sm:text-sm text-gray-300">
                                      Bout details for {draw.weightClass}{" "}
                                      category.
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 sm:py-20">
                    <div className="text-5xl sm:text-6xl mb-4">🎯</div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Draws Not Available
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base">
                      The tournament draw for this event hasn't been announced
                      yet. Check back later.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Professional Event Card with all data visible
const EventCard = ({ event, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getMinTicketPrice = () => {
    if (!event.tickets?.categories) return null;
    const prices = event.tickets.categories.map((cat) => cat.price);
    return Math.min(...prices);
  };

  const minPrice = getMinTicketPrice();
  const totalBouts =
    event.draws?.reduce((acc, draw) => acc + draw.bouts.length, 0) || 0;

  const getPriorityBadge = () => {
    if (event.priority === "featured") {
      return {
        color: "from-purple-500 to-pink-600",
        icon: <Star className="w-3 h-3" />,
        text: "Featured",
      };
    }
    if (event.priority === "premium") {
      return {
        color: "from-yellow-500 to-amber-600",
        icon: <Crown className="w-3 h-3" />,
        text: "Premium",
      };
    }
    return {
      color: "from-sky-500 to-blue-600",
      icon: <Sparkles className="w-3 h-3" />,
      text: "Standard",
    };
  };

  const priorityBadge = getPriorityBadge();

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated Border Glow */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${priorityBadge.color} rounded-2xl blur-xl transition-all duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border border-gray-800 overflow-hidden transition-all duration-500 hover:border-transparent">
        {/* Image Section */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <motion.img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover transition-transform duration-700"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

          {/* Priority Badge */}
          <div
            className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${priorityBadge.color} text-white text-xs font-bold backdrop-blur-sm shadow-lg`}
          >
            {priorityBadge.icon}
            <span>{priorityBadge.text}</span>
          </div>

          {/* Bookmark Button */}
          <motion.button
            className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm border transition-all ${
              isBookmarked
                ? "bg-yellow-500/20 border-yellow-500 text-yellow-400"
                : "bg-black/50 border-gray-600 text-gray-400 hover:bg-sky-500/20 hover:border-sky-500 hover:text-sky-400"
            }`}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
            }}
          >
            <Bookmark
              className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`}
            />
          </motion.button>

          {/* Date Badge */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-700">
            <div className="text-2xl font-black text-white leading-none">
              {event.date.getDate()}
            </div>
            <div className="text-xs font-semibold text-gray-300 uppercase">
              {event.date.toLocaleString("default", { month: "short" })}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Event Title */}
          <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-sky-300 transition-colors">
            {event.name}
          </h3>

          {/* Event Details Grid */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CalendarRange className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span>
                {event.date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-gray-500">•</span>
              <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span>{event.time}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-sm text-gray-300">
                <Users className="w-4 h-4 text-green-400" />
                <span>{event.participants} fighters</span>
              </div>
              {totalBouts > 0 && (
                <div className="flex items-center gap-1.5 text-sm text-gray-300">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span>{totalBouts} bouts</span>
                </div>
              )}
            </div>
          </div>

          {/* Ticket Price Indicator */}
          {minPrice && (
            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-center gap-1 bg-green-500/20 px-3 py-1.5 rounded-full border border-green-500/30">
                <Ticket className="w-3.5 h-3.5 text-green-400" />
                <span className="text-xs font-semibold text-green-400">
                  From {minPrice.toLocaleString()} RWF
                </span>
              </div>
              {event.tickets?.categories && (
                <div className="text-xs text-gray-400">
                  {event.tickets.categories.length} categories
                </div>
              )}
            </div>
          )}

          {/* Action Button */}
          <motion.button
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onViewDetails(event)}
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
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
    <div className="relative flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-sky-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/30 via-transparent to-transparent"></div>

        {/* Animated Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-sky-500 rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Navbar />

      {/* Enhanced Header */}
      <motion.header
        className="relative py-16 sm:py-20 md:py-28 px-6 text-center z-10 overflow-hidden"
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
            className="inline-flex items-center gap-3 bg-sky-500/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-sky-500/30 mb-4 sm:mb-6"
          >
            <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
            <span className="text-sky-300 font-semibold text-sm sm:text-base">
              UPCOMING EVENTS
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent px-2">
            Events Calendar
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Discover and book tickets for the most exciting boxing events in
            Rwanda
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto w-full relative z-10 pb-12">
        {/* Search Bar */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative max-w-2xl mx-auto">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search events, locations, or organizers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 backdrop-blur-sm transition-all text-sm sm:text-base"
            />
          </div>
        </motion.div>

        {/* Events Count */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm sm:text-base">
            Showing{" "}
            <span className="text-white font-semibold">
              {filteredEvents.length}
            </span>{" "}
            events
          </p>
        </motion.div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          {filteredEvents.length > 0 ? (
            <motion.div
              key="events-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredEvents.map((event) => (
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-12 sm:py-20"
            >
              <div className="text-5xl sm:text-6xl mb-4">📅</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                No Events Found
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Try adjusting your search criteria.
              </p>
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
