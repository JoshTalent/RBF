import React, { useEffect, useState } from "react";
import { Business, Footer, Navbar, Testimonials } from "../components";
import styles from "../style";
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

// Timeline Milestones
const milestones = [
  { year: 2015, title: "Federation Founded", description: "Rwanda Boxing Federation was officially established to promote boxing nationwide." },
  { year: 2018, title: "First National Championship", description: "Organized first national-level boxing championship with wide participation." },
  { year: 2021, title: "Youth Development Program", description: "Launched programs targeting youth across all provinces to train and scout talents." },
  { year: 2024, title: "International Recognition", description: "Rwandan boxers participated and won medals in international competitions." },
];

// Animated Stat Component
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

// About Page Component
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
            <div className="text-center text-gray-300 text-lg space-y-4">
              <p>
                To nurture boxing talent across Rwanda and promote excellence in the sport.
                We aim to empower youth through discipline, training, and competitive opportunities.
              </p>
              <p>
                Vision: Become the leading boxing federation in Africa recognized for performance, professionalism, and youth development.
              </p>
            </div>
          </section>

          {/* Testimonials */}
          <Testimonials />

          {/* Achievements / Statistics */}
          <section className="mb-24 bg-gray-900 rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-extrabold text-white mb-12 text-center">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-center text-center">
              {stats.map((stat) => (
                <AnimatedStat key={stat.id} icon={stat.icon} value={stat.value} label={stat.label} />
              ))}
            </div>
          </section>

          {/* Federation Timeline */}
          <section className="mb-24">
            <h2 className="text-4xl font-extrabold text-white mb-12 text-center">Our History & Milestones</h2>
            <div className="relative">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  className={`mb-16 flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1/12 flex justify-center md:justify-end">
                    <div className="bg-sky-600 w-5 h-5 rounded-full border-2 border-white z-10"></div>
                  </div>
                  <div className="md:w-5/12 bg-gray-900 p-6 rounded-3xl shadow-lg">
                    <h3 className="text-xl font-bold text-white">{item.year} - {item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-sky-600"></div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-sky-700 rounded-3xl p-12 text-center mb-24 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Join Our Boxing Federation</h2>
            <p className="text-gray-200 mb-6">
              Whether you’re an athlete, coach, or supporter, get involved and help us promote boxing in Rwanda!
            </p>
            <button className="px-8 py-3 bg-white text-sky-700 font-bold rounded-full hover:bg-gray-100 transition-all">
              Get Involved
            </button>
          </section>

          {/* Footer */}
          <Footer />

        </div>
      </div>
    </div>
  );
};

export default About;
