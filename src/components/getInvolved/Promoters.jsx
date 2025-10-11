import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Promoter = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      {/* Header Section */}
      <header className="py-20 bg-gradient-to-r from-sky-900 via-black to-gray-900 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-wide">
          Promoter Sanctioning
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl">
          Information and requirements for event promoters seeking official
          Rwanda Boxing Federation (RBF) sanctioning and recognition.
        </p>
      </header>

      {/* Main Section */}
      <main className="flex-grow py-16 px-6 sm:px-12">
        <motion.div
          className="max-w-5xl mx-auto bg-gray-900/60 p-8 rounded-3xl shadow-2xl border border-gray-700 backdrop-blur-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-400 mb-6 text-center">
            Become a Sanctioned Promoter
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 text-justify">
            The Rwanda Boxing Federation (RBF) works hand-in-hand with
            professional and amateur promoters to ensure that all boxing events
            meet the highest standards of safety, fairness, and sportsmanship.
            Promoters play a vital role in developing the sport by organizing
            well-managed and officially recognized events.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-4">
            Sanctioning Requirements:
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-3 mb-8">
            <li>Promoter must be a registered member of RBF.</li>
            <li>Submit event proposal at least <strong>30 days</strong> before the event date.</li>
            <li>Provide proof of venue safety and medical readiness.</li>
            <li>Ensure all participants hold valid RBF licenses.</li>
            <li>Comply with all RBF and international boxing regulations.</li>
          </ul>

          <h3 className="text-xl sm:text-2xl font-semibold text-sky-300 mb-4">
            Sanctioning Process:
          </h3>
          <ol className="list-decimal list-inside text-gray-300 space-y-3 mb-8">
            <li>Submit a formal application via the RBF Promoter Registration Form.</li>
            <li>Pay the applicable sanctioning and administrative fees.</li>
            <li>Receive official confirmation and event ID after approval.</li>
            <li>Ensure RBF officials and medical staff are present at the event.</li>
          </ol>

          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Apply for Promoter Sanctioning
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Promoter;
