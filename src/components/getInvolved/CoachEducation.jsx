import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";

const trainingPrograms = [
  {
    title: "National Level Coaching Certification",
    description:
      "An official program designed for aspiring boxing coaches across Rwanda. Covers athlete safety, fundamental techniques, and competition preparation.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
  },
  {
    title: "Advanced Technical Coaching",
    description:
      "For certified coaches looking to improve their tactical and analytical boxing knowledge. Includes video analysis and advanced training modules.",
    duration: "2 Months",
    level: "Advanced",
  },
  {
    title: "Refresher & Development Workshops",
    description:
      "Short-term workshops for current coaches to stay updated with new international boxing trends, fitness methods, and AIBA regulations.",
    duration: "2 Weeks",
    level: "All Certified Coaches",
  },
  {
    title: "Youth Coaching Program",
    description:
      "Focuses on training coaches who work with youth boxers, promoting safety, discipline, and foundational boxing skills.",
    duration: "1 Month",
    level: "Youth Coaches",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CoachEducation = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      {/* Header */}
      <header className="py-20 bg-gradient-to-r from-sky-900 via-black to-gray-900 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-wide">
          Coach Education
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl">
          Empowering coaches with the skills and knowledge to raise the next generation of Rwandan boxing champions.
        </p>
      </header>

      {/* Training Programs Section */}
      <main className="flex-grow py-16 px-6 sm:px-12">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative overflow-hidden rounded-3xl shadow-2xl bg-gray-900/60 border border-gray-700 hover:border-sky-500 transition-all duration-500 hover:shadow-[0_0_30px_#1DA1F2] hover:-translate-y-3 backdrop-blur-lg"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-pink-500/10 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10 p-6 text-center">
                <h3 className="text-2xl font-bold text-sky-400 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-300 mb-4">{program.description}</p>

                <div className="text-sm text-gray-400 space-y-1">
                  <p>
                    <span className="font-semibold text-sky-300">
                      Duration:
                    </span>{" "}
                    {program.duration}
                  </p>
                  <p>
                    <span className="font-semibold text-sky-300">Level:</span>{" "}
                    {program.level}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-sky-400">
            Want to Become a Certified Coach?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join the Rwanda Boxing Federation’s official coaching certification programs to enhance your professional skills and contribute to the development of our athletes.
          </p>
          <motion.a
            href="/membership"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-sky-600 hover:bg-sky-700 transition-all duration-300 px-8 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-[0_0_25px_#1DA1F2]"
          >
            Apply Now
          </motion.a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default CoachEducation;
