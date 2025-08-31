import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

// Sample Events Data
const events = [
  {
    id: 1,
    name: "National Boxing Championship",
    date: new Date(2025, 7, 30),
    location: "Kigali Arena, Rwanda",
    description: "The biggest boxing event of the year with top fighters competing for the national title.",
  },
  {
    id: 2,
    name: "Youth Boxing Tournament",
    date: new Date(2025, 8, 5),
    location: "Gisenyi Sports Hall",
    description: "Featuring upcoming young talents from across the country.",
  },
  {
    id: 3,
    name: "International Boxing Gala",
    date: new Date(2025, 8, 12),
    location: "Kigali Convention Center",
    description: "International fighters showcase their skills in an exciting exhibition match.",
  },
];

const EventCard = ({ event }) => (
  <motion.div
    className="bg-gray-900 rounded-3xl shadow-lg p-6 mb-6 hover:shadow-[0_0_50px_#1DA1F2] hover:scale-[1.02] transition-all duration-500"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h2 className="text-2xl font-bold mb-2 text-white">{event.name}</h2>
    <p className="text-gray-400 text-sm mb-1">{event.date.toDateString()}</p>
    <p className="text-gray-400 text-sm mb-2">{event.location}</p>
    <p className="text-gray-300">{event.description}</p>
  </motion.div>
);

const EventsCalendar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const eventsOnSelectedDate = events.filter(
    (event) => event.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-sky-900 via-black to-gray-900 py-24 px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Events & Calendar
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Stay updated with upcoming boxing events and plan your schedule.
        </p>
      </div>

      {/* Search + Content */}
      <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Calendar */}
        <div className="lg:w-1/3 w-full bg-gray-800 p-6 rounded-3xl shadow-xl hover:shadow-[0_0_60px_#1DA1F2] transition-all duration-500">
          <h3 className="text-xl font-bold text-white mb-4">Select a Date</h3>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="bg-gray-900 rounded-xl shadow-inner"
            tileClassName={({ date }) =>
              events.some(
                (event) => event.date.toDateString() === date.toDateString()
              )
                ? "bg-sky-600 text-white font-bold rounded-full"
                : ""
            }
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
              className="w-full px-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-lg"
            />
          </div>

          {/* Event Cards */}
          {eventsOnSelectedDate.length > 0 ? (
            eventsOnSelectedDate.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
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

export default EventsCalendar;
