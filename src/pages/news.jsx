import React, { useState } from "react";
import { Navbar, Footer } from "../components";
import { motion } from "framer-motion";
import { PlayCircle, X } from "lucide-react";

// Sample video news data
const videoNews = [
  {
    id: 1,
    title: "Boxing Championship 2025 Highlights",
    thumbnail: "https://images.unsplash.com/photo-1602482067705-d6f0a7e796f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2025-08-20",
    views: 1024,
    likes: 230,
    description: "Relive the 2025 Boxing Championship with incredible knockouts, unexpected victories, and top performances from world-class fighters. Highlights include intense matches, crowd-favorite moments, and behind-the-scenes footage.",
  },
  {
    id: 2,
    title: "Michael 'The Rock' Smith Training Video",
    thumbnail: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2025-08-18",
    views: 890,
    likes: 150,
    description: "Michael 'The Rock' Smith shares his training routines, preparation techniques, and fitness secrets. Learn how a champion maintains endurance, strength, and focus to dominate in the ring.",
  },
  {
    id: 3,
    title: "Top 5 Knockouts of the Month",
    thumbnail: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    date: "2025-08-15",
    views: 1340,
    likes: 320,
    description: "Check out the top 5 knockouts of the month. These fighters stunned audiences with lightning-fast punches and unmatched precision, making this a month to remember in the boxing world.",
  },
];

// Video Card Component
const VideoCard = ({ video, onClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="flex flex-col md:flex-row bg-gray-900 rounded-3xl shadow-lg overflow-hidden mb-12 hover:shadow-[0_0_50px_#1DA1F2] transition-all duration-500 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/3 w-full relative group" onClick={() => onClick(video.videoUrl)}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-64 md:h-80 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
          <PlayCircle size={60} className="text-white opacity-90" />
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-extrabold mb-2 text-white">
            {video.title}
          </h2>
          <p className="text-gray-400 text-sm mb-4">{video.date}</p>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {expanded ? video.description : `${video.description.slice(0, 120)}...`}
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-2 text-sky-400 font-semibold hover:underline"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          </p>
        </div>

        <div className="flex gap-8 text-center mt-4 md:mt-0">
          <div>
            <p className="text-xl font-bold text-white">{video.views}</p>
            <span className="text-gray-400 text-sm">Views</span>
          </div>
          <div>
            <p className="text-xl font-bold text-white">{video.likes}</p>
            <span className="text-gray-400 text-sm">Likes</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Modal Component
const VideoModal = ({ videoUrl, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
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

const NewsAndMedia = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos = videoNews.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="bg-primary px-6 md:px-20 flex justify-center">
        <div className="w-full max-w-6xl py-20">
          {/* Title + Search */}
          <section className="bg-black text-white py-10 px-6 md:px-10 rounded-3xl mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h1 className="text-5xl font-extrabold tracking-wide mb-4 md:mb-0 text-white">
                News & Media
              </h1>
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
            </div>

            {/* Video Cards */}
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} onClick={setSelectedVideo} />
              ))
            ) : (
              <p className="text-center text-gray-400 mt-12">No videos found.</p>
            )}
          </section>

          <Footer />
        </div>
      </div>

      {selectedVideo && <VideoModal videoUrl={selectedVideo} onClose={() => setSelectedVideo(null)} />}
    </div>
  );
};

export default NewsAndMedia;

