import React, { useState } from "react";
import { FaHeart, FaDownload, FaExpand, FaTimes } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { robot, bill, abc } from "../assets";

const postsData = [
  {
    id: 1,
    title: "Boxing Championship Highlights",
    description:
      "The final match of the national boxing championship with breathtaking moments.",
    date: "2025-08-28",
    likes: 120,
    image: abc,
    category: "Event",
  },
  {
    id: 2,
    title: "Training Session",
    description: "Our boxers engage in intensive training to improve their skills.",
    date: "2025-08-20",
    likes: 85,
    image: bill,
    category: "Training",
  },
  {
    id: 3,
    title: "Award Ceremony",
    description: "Celebrating the winners of the boxing season with a grand ceremony.",
    date: "2025-08-15",
    likes: 95,
    image: robot,
    category: "Event",
  },
];

const Posts = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDownload = (url, title) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="flex-grow py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-sky-500 mb-4 text-left">
              Latest Posts
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl mb-6 text-left">
              Stay updated with the latest events, training sessions, and news
              from the Rwanda Boxing Federation.
            </p>

            {/* Search */}
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-black/40 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 backdrop-blur-sm shadow-lg transition"
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="relative bg-gray-900/30 backdrop-blur-lg border border-gray-700 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgb(14,165,233)]"
                >
                  {/* Image */}
                  <div className="relative w-full h-48 rounded-t-2xl overflow-hidden border-b-2 border-gray-700">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setFullscreenImage(post.image)}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center gap-4 transition">
                      <button
                        className="bg-black/70 p-2 rounded-full hover:bg-sky-500 transition"
                        onClick={() => handleDownload(post.image, post.title)}
                        title="Download"
                      >
                        <FaDownload className="text-white" />
                      </button>
                      <button
                        className="bg-black/70 p-2 rounded-full hover:bg-sky-500 transition"
                        onClick={() => setFullscreenImage(post.image)}
                        title="Fullscreen"
                      >
                        <FaExpand className="text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col gap-3">
                    <span className="bg-gray-800 text-sky-500 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-sky-400">{post.title}</h2>
                    <p className="text-gray-300 text-sm">{post.description}</p>

                    <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <FaHeart className="text-red-500 animate-pulse" /> {post.likes}
                      </span>
                    </div>
                  </div>

                  {/* Floating Glow */}
                  <div className="absolute -inset-0.5 rounded-3xl bg-sky-500/20 blur-2xl opacity-20 animate-pulse-slow"></div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 col-span-full text-center">
                No posts found.
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl p-3 rounded-full hover:bg-gray-800 transition"
            onClick={() => setFullscreenImage(null)}
          >
            <FaTimes />
          </button>
          <img
            src={fullscreenImage}
            alt="Full Screen"
            className="max-h-full max-w-full rounded-2xl shadow-2xl"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Posts;
