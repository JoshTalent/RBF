import React, { useState, useMemo } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
  Filter,
  X,
  Trophy,
  Award,
  CalendarRange,
  ChevronRight,
  Download,
  Armchair,
  CreditCard,
  Minus,
  Plus,
  Check,
} from "lucide-react";

// Enhanced Events Data with more details and draws
const events = [
  {
    id: 1,
    name: "RWANDA NATIONAL MENS BOXING CHAMPIONSHIP 2026",
    date: new Date(2026, 3, 8),
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
        ]
      },
      {
        weightClass: "WELTERWEIGHT",
        bouts: [
          {
            fighter1: "D, jean batiste ",
            fighter2: "M, Errisa",
            time: "19:30",
          },
        ]
      },
      {
        weightClass: "LIGHTWEIGHT MIDDLEWEIGHT",
        bouts: [
          {
            fighter1: "H, kalisa olivier ",
            fighter2: "mboumba Debouba",
            time: "19:30",
          },
        ]
      },
      {
        weightClass: "MIDDLEWEIGHT",
        bouts: [
          {
            fighter1: "N, pqtric",
            fighter2: " innocent",
            time: "19:30",
          },
        ]
      },
    ],
  },
]

const categories = [
  "All",
  "Championship",
  "Tournament",
  "Exhibition",
  "Training",
];
const priorities = ["All", "Premium", "Featured", "Normal"];

// Simplified Ticket Selector - Just seats and price
const TicketSelector = ({ ticketCategory, onQuantityChange, quantities }) => {
  return (
    <motion.div
      className="border border-gray-700 rounded-xl overflow-hidden bg-black/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="font-bold text-white">{ticketCategory.name}</h4>
            <p className="text-sm text-gray-400 mt-1">
              Seats: {ticketCategory.seats.join(", ")}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">
              {ticketCategory.price.toLocaleString()} RWF
            </div>
            <div className="text-xs text-gray-400">
              {ticketCategory.available} seats left
            </div>
          </div>
        </div>

        {/* Simple Seat Preview */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Armchair className="w-4 h-4 text-sky-400" />
            <span className="text-sm text-gray-300">Available Seats:</span>
          </div>
          <div className="grid grid-cols-8 gap-1">
            {Array.from({ length: 16 }).map((_, idx) => (
              <div
                key={idx}
                className={`aspect-square rounded ${
                  idx < ticketCategory.available / 10
                    ? "bg-green-500/30 border border-green-500"
                    : "bg-gray-700"
                } flex items-center justify-center text-xs text-white`}
              >
                {idx + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-700">
          <div className="flex items-center gap-3">
            <motion.button
              className="p-1.5 rounded-lg bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-50"
              whileTap={{ scale: 0.95 }}
              disabled={quantities[ticketCategory.id] === 0}
              onClick={() =>
                onQuantityChange(
                  ticketCategory.id,
                  Math.max(0, (quantities[ticketCategory.id] || 0) - 1),
                )
              }
            >
              <Minus className="w-4 h-4" />
            </motion.button>

            <span className="w-8 text-center font-bold text-white">
              {quantities[ticketCategory.id] || 0}
            </span>

            <motion.button
              className="p-1.5 rounded-lg bg-gray-700 text-white hover:bg-gray-600 disabled:opacity-50"
              whileTap={{ scale: 0.95 }}
              disabled={
                (quantities[ticketCategory.id] || 0) >= ticketCategory.available
              }
              onClick={() =>
                onQuantityChange(
                  ticketCategory.id,
                  (quantities[ticketCategory.id] || 0) + 1,
                )
              }
            >
              <Plus className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-400">Total</div>
            <div className="font-bold text-white">
              {(
                (quantities[ticketCategory.id] || 0) * ticketCategory.price
              ).toLocaleString()}{" "}
              RWF
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Draw Modal Component
const DrawModal = ({ event, onClose }) => {
  const [activeTab, setActiveTab] = useState("draws");
  const [selectedBout, setSelectedBout] = useState(null);
  const [quantities, setQuantities] = useState({});

  if (!event) return null;

  const totalTickets =
    event.tickets?.categories?.reduce((sum, cat) => sum + cat.total, 0) || 0;
  const availableTickets =
    event.tickets?.categories?.reduce((sum, cat) => sum + cat.available, 0) ||
    0;
  const soldOut = availableTickets === 0;

  const handleQuantityChange = (categoryId, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [categoryId]: newQuantity,
    }));
  };

  const totalAmount = Object.entries(quantities).reduce(
    (sum, [categoryId, qty]) => {
      const category = event.tickets?.categories.find(
        (c) => c.id === categoryId,
      );
      return sum + (category?.price || 0) * qty;
    },
    0,
  );

  const totalTicketsSelected = Object.values(quantities).reduce(
    (sum, qty) => sum + qty,
    0,
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="relative w-full max-w-6xl my-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-br from-gray-900 to-black border-b border-gray-800">
          {/* Header with background image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full border border-gray-700 text-gray-400 hover:text-white transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">{event.name}</h2>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <CalendarRange className="w-4 h-4 text-sky-400" />
                  <span>
                    {event.date.toLocaleDateString()} | {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-green-400" />
                  <span>{event.participants} Fighters</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex px-6 gap-4">
            <button
              onClick={() => setActiveTab("draws")}
              className={`py-3 px-4 font-medium transition-colors relative ${
                activeTab === "draws"
                  ? "text-sky-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Fight Card & Draws
              </div>
              {activeTab === "draws" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("tickets")}
              className={`py-3 px-4 font-medium transition-colors relative ${
                activeTab === "tickets"
                  ? "text-sky-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <Ticket className="w-4 h-4" />
                Tickets & Seats
                {!soldOut && (
                  <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full text-xs">
                    {availableTickets} left
                  </span>
                )}
              </div>
              {activeTab === "tickets" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400"
                />
              )}
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-[calc(100vh-320px)] overflow-y-auto custom-scrollbar">
          <div className="p-6">
            {activeTab === "draws" ? (
              // Draws Content
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-sky-400" />
                    <h3 className="text-xl font-bold text-white">
                      Tournament Draws & Fight Cards
                    </h3>
                  </div>

                
                </div>

                {event.draws && event.draws.length > 0 ? (
                  <div className="space-y-6">
                    {event.draws.map((draw, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-black/50 rounded-xl border border-gray-800 overflow-hidden"
                      >
                        <div className="bg-gradient-to-r from-sky-500/20 to-blue-500/20 px-6 py-3 border-b border-gray-800">
                          <h4 className="font-bold text-white flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-yellow-400" />
                            {draw.weightClass}
                          </h4>
                        </div>

                        <div className="divide-y divide-gray-800">
                          {draw.bouts.map((bout, boutIndex) => (
                            <motion.div
                              key={boutIndex}
                              className={`px-6 py-4 hover:bg-gray-800/30 transition-colors cursor-pointer ${
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
                                <div className="flex-1 min-w-[200px]">
                                  <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-sky-400 w-16">
                                      {bout.time}
                                    </span>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className="text-white font-semibold">
                                          {bout.fighter1}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                          vs
                                        </span>
                                        <span className="text-white font-semibold">
                                          {bout.fighter2}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded-full border border-sky-500/30">
                                          {bout.round}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <ChevronRight
                                  className={`w-4 h-4 text-gray-400 transition-transform ${
                                    selectedBout === `${index}-${boutIndex}`
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              </div>

                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">🎯</div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Draws Not Available
                    </h4>
                    <p className="text-gray-400">
                      The tournament draw for this event hasn't been announced
                      yet. Check back later.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              // Tickets & Seats Content - Simplified
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Ticket className="w-6 h-6 text-sky-400" />
                  <h3 className="text-xl font-bold text-white">
                    Select Your Seats
                  </h3>
                </div>

                {event.tickets ? (
                  <div className="space-y-4">
                    {event.tickets.categories.map((category) => (
                      <TicketSelector
                        key={category.id}
                        ticketCategory={category}
                        quantities={quantities}
                        onQuantityChange={handleQuantityChange}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">🎫</div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Tickets Not Available
                    </h4>
                    <p className="text-gray-400">
                      Ticket information for this event hasn't been released
                      yet.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Fixed Footer with Cart Summary */}
        {activeTab === "tickets" &&
          event.tickets &&
          totalTicketsSelected > 0 && (
            <div className="sticky bottom-0 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent pt-8 pb-4 px-6">
              <div className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400">
                      {totalTicketsSelected}{" "}
                      {totalTicketsSelected === 1 ? "Ticket" : "Tickets"}{" "}
                      Selected
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {totalAmount.toLocaleString()} RWF
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      className="px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setQuantities({})}
                    >
                      Clear
                    </motion.button>
                    <motion.button
                      className="px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <CreditCard className="w-4 h-4" />
                      Checkout
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          )}
      </motion.div>
    </motion.div>
  );
};

const EventCard = ({ event, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "premium":
        return {
          color: "from-yellow-500 to-amber-600",
          icon: <Crown className="w-3 h-3" />,
          text: "Premium",
        };
      case "featured":
        return {
          color: "from-purple-500 to-pink-600",
          icon: <Star className="w-3 h-3" />,
          text: "Featured",
        };
      default:
        return {
          color: "from-sky-500 to-blue-600",
          icon: null,
          text: "Standard",
        };
    }
  };

  const priorityBadge = getPriorityBadge(event.priority);
  const totalTickets =
    event.tickets?.categories?.reduce((sum, cat) => sum + cat.available, 0) ||
    0;

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
      <div
        className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${priorityBadge.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
      ></div>

      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border border-gray-800 overflow-hidden transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-2xl group-hover:shadow-sky-500/20">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover transition-transform duration-700"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

          {/* Priority Badge */}
          <div
            className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${priorityBadge.color} text-white text-xs font-bold backdrop-blur-sm`}
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

          {/* Date Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-2xl font-black">{event.date.getDate()}</div>
            <div className="text-xs font-semibold opacity-90">
              {event.date
                .toLocaleString("default", { month: "short" })
                .toUpperCase()}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors flex-1 pr-4">
              {event.name}
            </h3>
            <motion.button
              className="p-2 text-gray-400 hover:text-sky-400 hover:bg-sky-500/10 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                // Share functionality
              }}
            >
              <Share2 className="w-4 h-4" />
            </motion.button>
          </div>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {event.description}
          </p>

          {/* Event Details Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Users className="w-4 h-4 text-green-400" />
              <span>{event.participants} Fighters</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300 col-span-2">
              <MapPin className="w-4 h-4 text-red-400" />
              <span className="truncate">{event.location}</span>
            </div>
          </div>

          {/* Footer Section */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <div className="flex items-center gap-2">
              <div
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  totalTickets > 0
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
              >
                {totalTickets > 0 ? `${totalTickets} tickets` : "Sold Out"}
              </div>
            </div>

            <div className="flex gap-2">
              {/* View Draws Button - only show if event has draws */}
              {event.draws && event.draws.length > 0 && (
                <motion.button
                  className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-semibold border border-purple-500/30 hover:bg-purple-500/30 transition-all group/draw"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewDetails(event);
                  }}
                >
                  <Trophy className="w-4 h-4" />
                  <span>Draws</span>
                </motion.button>
              )}

              <motion.button
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg text-sm font-semibold hover:from-sky-600 hover:to-blue-700 transition-all group/btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onViewDetails(event)}
              >
                Details
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Draws Indicator - shows number of bouts */}
          {event.draws && event.draws.length > 0 && (
            <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
              <Trophy className="w-3 h-3 text-purple-400" />
              <span>
                {event.draws.reduce((acc, draw) => acc + draw.bouts.length, 0)}{" "}
                bouts
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Upcoming = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriority, setSelectedPriority] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showDrawModal, setShowDrawModal] = useState(false);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || event.category === selectedCategory;
      const matchesPriority =
        selectedPriority === "All" ||
        event.priority === selectedPriority.toLowerCase();

      return matchesSearch && matchesCategory && matchesPriority;
    });
  }, [searchTerm, selectedCategory, selectedPriority]);

  const eventsOnSelectedDate = useMemo(() => {
    return filteredEvents.filter(
      (event) => event.date.toDateString() === selectedDate.toDateString(),
    );
  }, [filteredEvents, selectedDate]);

  const getEventsForDate = (date) =>
    events.filter((e) => e.date.toDateString() === date.toDateString());

  const displayedEvents =
    eventsOnSelectedDate.length > 0 ? eventsOnSelectedDate : filteredEvents;

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setShowDrawModal(true);
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
            <CalendarIcon className="w-5 h-5 text-sky-400" />
            <span className="text-sky-300 font-semibold">UPCOMING EVENTS</span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent ">
            Events Calendar
          </h1>
      
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow  md:px-12 max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Calendar & Filters */}
          <div className="lg:w-1/3">
     
            {/* Filters */}
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Filter className="text-sky-400" />
                Filters
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Priority
                  </label>
                  <select
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className="w-full px-3 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    {priorities.map((pri) => (
                      <option key={pri} value={pri}>
                        {pri}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Events Section */}
          <div className="lg:w-2/3">
            {/* Search and Controls */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
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
                  placeholder="Search events, locations, or organizers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 backdrop-blur-sm transition-all"
                />
              </div>

              <div className="flex gap-2">
                <motion.button
                  className={`px-4 py-3 rounded-xl border transition-all ${
                    viewMode === "grid"
                      ? "bg-sky-500/20 border-sky-500 text-sky-400"
                      : "bg-black/50 border-gray-700 text-gray-400 hover:border-sky-500/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode("grid")}
                >
                  Grid
                </motion.button>
                <motion.button
                  className={`px-4 py-3 rounded-xl border transition-all ${
                    viewMode === "list"
                      ? "bg-sky-500/20 border-sky-500 text-sky-400"
                      : "bg-black/50 border-gray-700 text-gray-400 hover:border-sky-500/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode("list")}
                >
                  List
                </motion.button>
              </div>
            </motion.div>

            {/* Events Count */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-400">
                Showing{" "}
                <span className="text-white font-semibold">
                  {displayedEvents.length}
                </span>{" "}
                events
                {eventsOnSelectedDate.length > 0 &&
                  ` on ${selectedDate.toLocaleDateString()}`}
              </p>
            </motion.div>

            {/* Events Grid */}
            <AnimatePresence mode="wait">
              {displayedEvents.length > 0 ? (
                <motion.div
                  key={viewMode}
                  className={`grid ${
                    viewMode === "grid"
                      ? "grid-cols-1 md:grid-cols-2 gap-6"
                      : "grid-cols-1 gap-4"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {displayedEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">📅</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    No Events Found
                  </h3>
                  <p className="text-gray-400">
                    Try adjusting your search criteria or select a different
                    date.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />

      {/* Draw Modal */}
      <AnimatePresence>
        {showDrawModal && selectedEvent && (
          <DrawModal
            event={selectedEvent}
            onClose={() => setShowDrawModal(false)}
          />
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx>{`
        .custom-calendar .react-calendar__tile--active {
          background: linear-gradient(135deg, #0ea5e9, #3b82f6) !important;
          color: white !important;
        }
        .custom-calendar .react-calendar__tile:enabled:hover,
        .custom-calendar .react-calendar__tile:enabled:focus {
          background: #1e40af !important;
        }

        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #0ea5e9, #3b82f6);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #0284c7, #1d4ed8);
        }
      `}</style>
    </div>
  );
};

export default Upcoming;
