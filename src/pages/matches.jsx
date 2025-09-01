import React, { useState } from "react";
import { FaHeart, FaDownload, FaExpand, FaSearch, FaTimes } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const matchesData = [
  {
    id: 1,
    title: "National Boxing Championship Final",
    description: "Exciting final match of the national boxing championship.",
    date: "2025-08-28",
    likes: 200,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Event",
  },
  {
    id: 2,
    title: "Boxers Training Session",
    description: "Intensive training session of the national boxing team.",
    date: "2025-08-20",
    likes: 150,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Training",
  },
  {
    id: 3,
    title: "Award Ceremony Highlights",
    description: "Celebrating the winners of the boxing season.",
    date: "2025-08-15",
    likes: 180,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Event",
  },
];

const Matches = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const handleDownload = async (url, title) => {
    try {
      const response = await fetch(url, { mode: "cors" });
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${title}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed", error);
      alert("Download failed. Try again later or use a different browser.");
    }
  };

  const filteredMatches = matchesData.filter((match) =>
    match.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="flex-grow py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-sky-500 mb-4">
            Boxing Matches
          </h1>
          <p className="text-gray-400 text-center mb-10 text-lg sm:text-xl">
            Watch the latest boxing matches and highlights from the Rwanda Boxing Federation.
          </p>

          {/* Advanced Search */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {!searchOpen && (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-3 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition"
                >
                  <FaSearch className="text-gray-400" />
                </button>
              )}

              {searchOpen && (
                <div className="flex items-center bg-gray-800 rounded-full shadow-lg transition-all duration-300 w-64 sm:w-96">
                  <FaSearch className="ml-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search matches by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSearchOpen(false);
                    }}
                    className="p-3"
                  >
                    <FaTimes className="text-gray-400 hover:text-red-500 transition" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Matches Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col transition hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <video
                      src={match.video}
                      className="w-full h-full object-cover cursor-pointer"
                      controls
                      onClick={() => setFullscreenVideo(match.video)}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center gap-4 transition">
                      <button
                        className="bg-black/70 p-2 rounded-full hover:bg-sky-500 transition"
                        onClick={() => handleDownload(match.video, match.title)}
                        title="Download"
                      >
                        <FaDownload className="text-white" />
                      </button>
                      <button
                        className="bg-black/70 p-2 rounded-full hover:bg-sky-500 transition"
                        onClick={() => setFullscreenVideo(match.video)}
                        title="Fullscreen"
                      >
                        <FaExpand className="text-white" />
                      </button>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-xs">
                        {match.category}
                      </span>
                      <h2 className="text-xl font-bold text-sky-400 mt-2">{match.title}</h2>
                      <p className="text-gray-300 text-sm mt-1">{match.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
                      <span>{match.date}</span>
                      <span className="flex items-center gap-1">
                        <FaHeart className="text-red-500 animate-pulse" /> {match.likes}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-400">
                No matches found.
              </p>
            )}
          </div>
        </div>
      </main>

      {fullscreenVideo && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setFullscreenVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl p-3 rounded-full hover:bg-gray-800 transition"
            onClick={() => setFullscreenVideo(null)}
          >
            <FaTimes />
          </button>
          <video
            src={fullscreenVideo}
            controls
            autoPlay
            className="max-h-full max-w-full rounded-2xl shadow-2xl"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Matches;
