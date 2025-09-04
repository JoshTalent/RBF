import React, { useState } from "react";
import {
  FaHeart,
  FaDownload,
  FaExpand,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
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
    description:
      "Our boxers engage in intensive training to improve their skills.",
    date: "2025-08-20",
    likes: 85,
    image: bill,
    category: "Training",
  },
  {
    id: 3,
    title: "Award Ceremony",
    description:
      "Celebrating the winners of the boxing season with a grand ceremony.",
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
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-sky-500 mb-4">
            Latest Posts
          </h1>
          <p className="text-gray-400 text-center mb-10 text-lg sm:text-xl">
            Stay updated with the latest events, training sessions, and news
            from the Rwanda Boxing Federation.
          </p>

          {/* Search */}
          <div className="flex justify-center mb-12">
            <div className="w-full sm:w-1/2 flex items-center bg-white rounded-full shadow-lg overflow-hidden">
              <FaSearch className="text-gray-400 mx-4" />
              <input
                type="text"
                placeholder="Search posts by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow p-4 text-black focus:outline-none focus:ring-2 focus:ring-sky-500 transition placeholder-gray-400 rounded-r-full"
              />
            </div>
          </div>

          {/* Uniform Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col transition hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Image with fixed height */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setFullscreenImage(post.image)}
                    />
                    {/* Overlay on hover */}
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

                  {/* Card content */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                      <h2 className="text-xl font-bold text-sky-400 mt-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-300 text-sm mt-1">
                        {post.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <FaHeart className="text-red-500 animate-pulse" />{" "}
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-400">
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
