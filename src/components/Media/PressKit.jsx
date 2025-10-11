import React, { useState } from "react";
import { Navbar, Footer } from "../../components";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X, FileText, Newspaper } from "lucide-react";

const videoNews = [
  {
    id: 1,
    title: "Boxing Championship 2025 Highlights",
    thumbnail:
      "https://images.unsplash.com/photo-1602482067705-d6f0a7e796f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2025-08-20",
    views: 1024,
    likes: 230,
    description:
      "Relive the 2025 Boxing Championship with incredible knockouts, unexpected victories, and top performances from world-class fighters.",
  },
  {
    id: 2,
    title: "Michael 'The Rock' Smith Training Video",
    thumbnail:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2025-08-18",
    views: 890,
    likes: 150,
    description:
      "Michael 'The Rock' Smith shares his training routines, preparation techniques, and fitness secrets. Learn how a champion maintains endurance and focus.",
  },
  {
    id: 3,
    title: "Top 5 Knockouts of the Month",
    thumbnail:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2025-08-15",
    views: 1340,
    likes: 320,
    description:
      "Check out the top 5 knockouts of the month — explosive punches, lightning reactions, and career-defining moments.",
  },
];

const VideoCard = ({ video, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-900/60 border border-gray-700 rounded-3xl overflow-hidden shadow-xl backdrop-blur-md hover:shadow-[0_0_40px_#0ea5e9] transition-all duration-500 cursor-pointer"
    onClick={() => onClick(video.videoUrl)}
  >
    <div className="relative">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <PlayCircle size={64} className="text-white" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{video.title}</h3>
      <p className="text-gray-400 text-sm mb-2">{video.date}</p>
      <p className="text-gray-300 leading-relaxed">{video.description}</p>
      <div className="flex gap-8 mt-4">
        <div>
          <p className="font-semibold text-white">{video.views}</p>
          <span className="text-gray-400 text-sm">Views</span>
        </div>
        <div>
          <p className="font-semibold text-white">{video.likes}</p>
          <span className="text-gray-400 text-sm">Likes</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const VideoModal = ({ videoUrl, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
    <div className="relative w-full max-w-4xl mx-4">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white hover:text-red-500"
      >
        <X size={32} />
      </button>
      <div className="aspect-video">
        <iframe
          src={videoUrl}
          title="Video Player"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
    </div>
  </div>
);

const PressKit = () => {
  const [activeTab, setActiveTab] = useState("news");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos = videoNews.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-900 via-black to-gray-900 py-24 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide mb-4">
            Media & Press Center
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explore the latest videos, highlights, and official press materials
            from the Rwanda Boxing Federation.
          </p>
        </motion.div>
      </section>

      {/* Tabs */}
      <div className="flex justify-center mt-10">
        <div className="flex gap-4 bg-gray-900/60 border border-gray-700 rounded-full p-2 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("news")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === "news"
                ? "bg-sky-600 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <Newspaper size={20} /> News & Videos
          </button>
          <button
            onClick={() => setActiveTab("press")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === "press"
                ? "bg-sky-600 text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <FileText size={20} /> Press Kit
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 md:px-16 py-16">
        <AnimatePresence mode="wait">
          {activeTab === "news" ? (
            <motion.div
              key="news"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <h2 className="text-3xl font-bold text-sky-400 mb-6 md:mb-0">
                  Latest Video Highlights
                </h2>
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-1/3 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {filteredVideos.length > 0 ? (
                  filteredVideos.map((video) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      onClick={setSelectedVideo}
                    />
                  ))
                ) : (
                  <p className="text-gray-400 text-center col-span-full">
                    No videos found.
                  </p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="press"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto bg-gray-900/60 p-10 rounded-3xl border border-gray-700 backdrop-blur-lg shadow-xl"
            >
              <h2 className="text-3xl font-bold text-sky-400 mb-6 text-center">
                Official Press Kit & Media Resources
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed text-justify">
                The Rwanda Boxing Federation (RBF) provides accredited media
                organizations with access to official branding, photography,
                logos, and communications materials. These assets are for
                approved journalistic and promotional use only.
              </p>

              <h3 className="text-2xl font-semibold text-sky-300 mb-4">
                Downloadable Files
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-4 mb-8">
                <li>
                  <a href="#" className="text-sky-400 hover:underline">
                    RBF Logo Pack (PNG, SVG)
                  </a>{" "}
                  — Official federation logos in multiple formats.
                </li>
                <li>
                  <a href="#" className="text-sky-400 hover:underline">
                    Media Guidelines PDF
                  </a>{" "}
                  — Visual identity, brand tone, and broadcast rights.
                </li>
                <li>
                  <a href="#" className="text-sky-400 hover:underline">
                    Photography Kit
                  </a>{" "}
                  — High-resolution, licensed photos for press use.
                </li>
                <li>
                  <a href="#" className="text-sky-400 hover:underline">
                    Branding Manual
                  </a>{" "}
                  — Typography, color palette, and spacing guidelines.
                </li>
              </ul>

              <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 mb-10">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:media@rbf.rw"
                    className="text-sky-400 hover:underline"
                  >
                    media@rbf.rw
                  </a>
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Phone:</strong> +250 788 123 456
                </p>
                <p className="text-gray-300">
                  <strong>Office:</strong> Rwanda Boxing Federation HQ, Kigali
                </p>
              </div>

              <div className="text-center">
                <a
                  href="#"
                  className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  Download Full Press Kit
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />

      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default PressKit;
