import React, { useState, useMemo } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaUsers, 
  FaTicketAlt,
  FaFilter,
  FaSearch, // Fixed: Added FaSearch import
  FaCalendarAlt,
  FaStar,
  FaCrown,
  FaShare,
  FaBookmark
} from "react-icons/fa";
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
  Search, // Fixed: Added Search import
  Filter // Fixed: Added Filter import
} from "lucide-react";

// Enhanced Events Data with more details
const events = [
  { 
    id: 1, 
    name: "National Boxing Championship 2025", 
    date: new Date(2025, 7, 30), 
    time: "18:00 - 22:00",
    location: "Kigali Arena, Rwanda", 
    category: "Championship",
    status: "upcoming",
    priority: "featured",
    tickets: { available: true, price: "15,000 RWF" },
    participants: 32,
    description: "The biggest boxing event of the year featuring top national fighters competing for the prestigious national title. This championship will determine Rwanda's boxing representatives for international competitions.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500&h=300&fit=crop",
    organizer: "Rwanda Boxing Federation"
  },
  { 
    id: 2, 
    name: "Youth Boxing Development Tournament", 
    date: new Date(2025, 8, 5), 
    time: "14:00 - 18:00",
    location: "Gisenyi Sports Hall, Rubavu", 
    category: "Tournament",
    status: "upcoming",
    priority: "normal",
    tickets: { available: true, price: "5,000 RWF" },
    participants: 24,
    description: "Featuring upcoming young talents from across the country. This tournament focuses on developing the next generation of Rwandan boxing champions with special coaching sessions.",
    image: "https://images.unsplash.com/photo-1599058917765-780d56d1beb3?w=500&h=300&fit=crop",
    organizer: "Youth Sports Development"
  },
  { 
    id: 3, 
    name: "International Boxing Gala Night", 
    date: new Date(2025, 8, 12), 
    time: "19:30 - 23:00",
    location: "Kigali Convention Center", 
    category: "Exhibition",
    status: "upcoming",
    priority: "premium",
    tickets: { available: false, price: "25,000 RWF" },
    participants: 16,
    description: "International fighters showcase their skills in an exciting exhibition match featuring champions from East Africa. Black-tie event with VIP reception.",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=300&fit=crop",
    organizer: "International Boxing Council"
  },
  { 
    id: 4, 
    name: "Women's Boxing Championship", 
    date: new Date(2025, 8, 20), 
    time: "16:00 - 20:00",
    location: "Amahoro Stadium, Kigali", 
    category: "Championship",
    status: "upcoming",
    priority: "featured",
    tickets: { available: true, price: "10,000 RWF" },
    participants: 28,
    description: "Celebrating women in boxing with championship bouts across all weight categories. Supporting gender equality in sports.",
    image: "https://images.unsplash.com/photo-1596704013025-1c0b1a9c6a2c?w=500&h=300&fit=crop",
    organizer: "Rwanda Women in Sports"
  },
];

const categories = ["All", "Championship", "Tournament", "Exhibition", "Training"];
const priorities = ["All", "Premium", "Featured", "Normal"];

const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case "premium": 
        return { color: "from-yellow-500 to-amber-600", icon: <Crown className="w-3 h-3" />, text: "Premium" };
      case "featured": 
        return { color: "from-purple-500 to-pink-600", icon: <Star className="w-3 h-3" />, text: "Featured" };
      default: 
        return { color: "from-sky-500 to-blue-600", icon: null, text: "Standard" };
    }
  };

  const priorityBadge = getPriorityBadge(event.priority);

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
      <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${priorityBadge.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
      
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
          <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${priorityBadge.color} text-white text-xs font-bold backdrop-blur-sm`}>
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
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
          </motion.button>

          {/* Date Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-2xl font-black">{event.date.getDate()}</div>
            <div className="text-xs font-semibold opacity-90">
              {event.date.toLocaleString('default', { month: 'short' }).toUpperCase()}
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
              <div className={`px-2 py-1 rounded text-xs font-semibold ${
                event.tickets.available 
                  ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                  : "bg-red-500/20 text-red-400 border border-red-500/30"
              }`}>
                {event.tickets.available ? `Tickets: ${event.tickets.price}` : "Sold Out"}
              </div>
            </div>
            
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg text-sm font-semibold hover:from-sky-600 hover:to-blue-700 transition-all group/btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Details
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </div>
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
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
      const matchesPriority = selectedPriority === "All" || event.priority === selectedPriority.toLowerCase();
      
      return matchesSearch && matchesCategory && matchesPriority;
    });
  }, [searchTerm, selectedCategory, selectedPriority]);

  const eventsOnSelectedDate = useMemo(() => {
    return filteredEvents.filter(
      (event) => event.date.toDateString() === selectedDate.toDateString()
    );
  }, [filteredEvents, selectedDate]);

  const getEventsForDate = (date) =>
    events.filter((e) => e.date.toDateString() === date.toDateString());

  const displayedEvents = eventsOnSelectedDate.length > 0 ? eventsOnSelectedDate : filteredEvents;

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
          
          <h1 className="text-5xl sm:text-7xl font-black bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
            Events Calendar
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover and track all major boxing events. Never miss another championship fight with our comprehensive event calendar.
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow py-16 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Calendar & Filters */}
          <div className="lg:w-1/3 space-y-6">
            {/* Calendar */}
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-6 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-sky-400" />
                Event Calendar
              </h3>
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="bg-transparent rounded-xl text-white custom-calendar"
                tileContent={({ date }) => {
                  const eventsOnDate = getEventsForDate(date);
                  if (eventsOnDate.length > 0) {
                    return (
                      <div className="flex justify-center mt-1 space-x-1">
                        {eventsOnDate.map((e, idx) => (
                          <div 
                            key={idx} 
                            className={`w-1.5 h-1.5 rounded-full ${
                              e.priority === 'premium' ? 'bg-yellow-400' :
                              e.priority === 'featured' ? 'bg-purple-400' : 'bg-sky-400'
                            }`}
                          />
                        ))}
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </motion.div>

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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                  <select
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    className="w-full px-3 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  >
                    {priorities.map(pri => (
                      <option key={pri} value={pri}>{pri}</option>
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
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
                Showing <span className="text-white font-semibold">{displayedEvents.length}</span> events
                {eventsOnSelectedDate.length > 0 && ` on ${selectedDate.toLocaleDateString()}`}
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
                    <EventCard key={event.id} event={event} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">📅</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No Events Found</h3>
                  <p className="text-gray-400">Try adjusting your search criteria or select a different date.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />

      {/* Custom Calendar Styles */}
      <style jsx>{`
        .custom-calendar .react-calendar__tile--active {
          background: linear-gradient(135deg, #0ea5e9, #3b82f6) !important;
          color: white !important;
        }
        .custom-calendar .react-calendar__tile:enabled:hover,
        .custom-calendar .react-calendar__tile:enabled:focus {
          background: #1e40af !important;
        }
      `}</style>
    </div>
  );
};

export default Upcoming;