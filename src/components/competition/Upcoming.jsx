import React, { useState } from "react";
import { Navbar, Footer } from "../../components";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { FaCircle } from "react-icons/fa"; // For event dots

// Sample Events Data
const events = [
  { id: 1, name: "National Boxing Championship", date: new Date(2025, 7, 30), location: "Kigali Arena, Rwanda", description: "The biggest boxing event of the year with top fighters competing for the national title." },
  { id: 2, name: "Youth Boxing Tournament", date: new Date(2025, 8, 5), location: "Gisenyi Sports Hall", description: "Featuring upcoming young talents from across the country." },
  { id: 3, name: "International Boxing Gala", date: new Date(2025, 8, 12), location: "Kigali Convention Center", description: "International fighters showcase their skills in an exciting exhibition match." },
];

const EventCard = ({ event }) => (
  <motion.div
    className="relative bg-gray-900 border border-gray-700 rounded-3xl shadow-xl p-6 mb-6 overflow-hidden hover:scale-[1.03] hover:shadow-[0_0_50px_#0ea5e9] transition-all duration-500"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="absolute -inset-0.5 rounded-3xl bg-sky-500/20 blur-2xl animate-pulse opacity-30"></div>
    <div className="relative z-10">
      <h2 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">{event.name}</h2>
      <p className="text-gray-400 text-sm mb-1">{event.date.toDateString()}</p>
      <p className="text-gray-400 text-sm mb-2">{event.location}</p>
      <p className="text-gray-300">{event.description}</p>
    </div>
  </motion.div>
);

const Upcoming = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const eventsOnSelectedDate = events.filter(
    (event) => event.date.toDateString() === selectedDate.toDateString()
  );

  // Get events for a particular date for dots
  const getEventsForDate = (date) =>
    events.filter((e) => e.date.toDateString() === date.toDateString());

  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Neon Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-sky-500 rounded-full w-2 h-2 animate-bounce"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="bg-black/90 py-24 px-6 md:px-12 text-center z-10 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-white drop-shadow-lg">
          Events & Calendar
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Stay updated with upcoming boxing events and plan your schedule.
        </p>
      </div>

      {/* Search + Content */}
      <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 z-10 relative">
        {/* Calendar */}
        <div className="lg:w-1/3 w-full bg-gray-900 p-6 rounded-3xl shadow-2xl hover:shadow-[0_0_60px_#0ea5e9] transition-all duration-500">
          <h3 className="text-xl font-bold text-white mb-4">Select a Date</h3>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="bg-black rounded-xl shadow-inner border-gray-700 text-white"
            tileContent={({ date }) => {
              const eventsOnDate = getEventsForDate(date);
              if (eventsOnDate.length > 0) {
                return (
                  <div className="flex justify-center mt-1 space-x-1">
                    {eventsOnDate.map((e, idx) => (
                      <FaCircle key={idx} className="text-sky-500 w-2 h-2" />
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
        </div>

        {/* Events List */}
        <div className="lg:w-2/3 w-full">
          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-lg transition-all"
            />
          </div>

          {/* Event Cards */}
          {eventsOnSelectedDate.length > 0 ? (
            eventsOnSelectedDate.map((event) => <EventCard key={event.id} event={event} />)
          ) : filteredEvents.length > 0 ? (
            filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <p className="text-gray-400 text-center text-lg mt-8">
              No events found.
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Upcoming;
