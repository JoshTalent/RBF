import React, { useEffect, useState } from "react";
import { Business, Footer, Navbar, Testimonials } from "..";
import styles from "../../style";
import { motion } from "framer-motion";
import { Users, Trophy, Target, Flag, Star } from "lucide-react";

// Achievements Stats
const stats = [
  { id: 1, icon: <Users size={32} />, value: 500, label: "Registered Boxers" },
  { id: 2, icon: <Trophy size={32} />, value: 15, label: "National Titles" },
  { id: 3, icon: <Target size={32} />, value: 20, label: "Youth Programs" },
  { id: 4, icon: <Flag size={32} />, value: 5, label: "International Events" },
  { id: 5, icon: <Star size={32} />, value: 10, label: "Awards Won" },
];

const AnimatedStat = ({ icon, value, label }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 30);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(counter);
  }, [value]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 rounded-xl hover:shadow-[0_0_40px_#1DA1F2] transition-shadow duration-500 bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="mb-3 text-sky-600">{icon}</div>
      <h3 className="text-3xl font-bold text-white">{count}+</h3>
      <p className="text-gray-400">{label}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} py-24`}>

          {/* Business Overview */}
          <Business />

          {/* Mission & Vision */}
          <section className="mb-24 bg-gradient-to-r from-sky-900 via-gray-900 to-black rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-extrabold text-white mb-6 text-center">Our Mission & Vision</h2>
            <p className="text-gray-300 text-lg mb-4 text-center">
              To nurture boxing talent across Rwanda and promote excellence in the sport.
              We aim to empower youth through discipline, training, and competitive opportunities.
            </p>
            <p className="text-gray-300 text-lg text-center">
              Vision: Become the leading boxing federation in Africa recognized for performance, professionalism, and youth development.
            </p>
          </section>
          {/* Achievements / Statistics */}
          <section className="mb-24 bg-gray-900 rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-extrabold text-white mb-12 text-center">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-center text-center">
              {stats.map((stat) => (
                <AnimatedStat key={stat.id} icon={stat.icon} value={stat.value} label={stat.label} />
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <Testimonials />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
