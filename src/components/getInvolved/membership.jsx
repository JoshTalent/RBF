import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Membership = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    club: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Normally, you'd send this data to your backend API here
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      {/* Header */}
      <header className="py-20 bg-gradient-to-r from-sky-900 via-black to-gray-900 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-wide">
          Become a Member
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl">
          Join the Rwanda Boxing Federation community and contribute to the growth of boxing in our nation.
        </p>
      </header>

      {/* Membership Form Section */}
      <main className="flex-grow py-16 px-6 sm:px-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl bg-gray-900/60 border border-gray-700 rounded-3xl shadow-2xl p-8 sm:p-10 backdrop-blur-md"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sky-300 mb-2 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sky-300 mb-2 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sky-300 mb-2 font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-200"
                  placeholder="+250 7XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sky-300 mb-2 font-semibold">
                  Boxing Club (optional)
                </label>
                <input
                  type="text"
                  name="club"
                  value={formData.club}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-200"
                  placeholder="Enter your boxing club name"
                />
              </div>

              <div>
                <label className="block text-sky-300 mb-2 font-semibold">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-200"
                  placeholder="Tell us why you want to join..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-sky-600 hover:bg-sky-700 transition-all duration-300 rounded-xl text-white font-semibold text-lg shadow-md hover:shadow-[0_0_25px_#1DA1F2]"
              >
                Submit Application
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl font-bold text-sky-400">Thank You!</h2>
              <p className="text-gray-300 text-lg">
                Your membership application has been received.  
                The Rwanda Boxing Federation will contact you soon.
              </p>
            </motion.div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Membership;
