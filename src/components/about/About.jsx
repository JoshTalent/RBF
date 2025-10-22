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
      className="flex flex-col items-center justify-center p-6 rounded-xl hover:shadow-[0_0_40px_#1DA1F2] transition-shadow duration-500 bg-slate-900 border border-slate-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="mb-3 text-sky-400">{icon}</div>
      <h3 className="text-3xl font-bold text-white">{count}+</h3>
      <p className="text-slate-300">{label}</p>
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

          {/* Mission & Vision - Enhanced */}
          <section className="relative mb-24 rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 -z-10" />
            <div className="absolute -top-1/2 -left-1/4 w-1/2 h-1/2 bg-sky-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] -z-5" />

            {/* Header */}
            <div className="text-center mb-16 relative">
              <h2 className="text-5xl font-black text-white mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Mission & Vision
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mx-auto" />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Mission Card */}
              <div className="group relative p-10 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-sky-400/30 transition-all duration-500 overflow-hidden">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[2px] rounded-2xl bg-slate-900" />
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mb-8 mx-auto relative shadow-2xl shadow-sky-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <span className="text-white text-2xl">🎯</span>
                  <div className="absolute inset-0 rounded-2xl bg-sky-400/20 blur-md group-hover:blur-xl transition-all duration-500" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 text-center relative z-10 group-hover:text-sky-100 transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed text-center relative z-10 group-hover:text-white transition-colors duration-300">
                  To nurture boxing talent across Rwanda and promote excellence
                  in the sport. We aim to empower youth through discipline,
                  training, and competitive opportunities, creating pathways to
                  success both in and out of the ring.
                </p>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-sky-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-sky-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 animate-pulse" />
              </div>

              {/* Vision Card */}
              <div className="group relative p-10 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-blue-400/30 transition-all duration-500 overflow-hidden">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[2px] rounded-2xl bg-slate-900" />
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center mb-8 mx-auto relative shadow-2xl shadow-blue-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <span className="text-white text-2xl">👁️</span>
                  <div className="absolute inset-0 rounded-2xl bg-blue-400/20 blur-md group-hover:blur-xl transition-all duration-500" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 text-center relative z-10 group-hover:text-blue-100 transition-colors duration-300">
                  Our Vision
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed text-center relative z-10 group-hover:text-white transition-colors duration-300">
                  Become the leading boxing federation in Africa recognized for
                  performance, professionalism, and youth development. We
                  envision a future where Rwandan boxers dominate continental
                  championships and make their mark on the global stage.
                </p>

                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 animate-pulse" />
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <button className="px-10 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl text-white font-bold text-lg shadow-2xl shadow-sky-500/25 hover:shadow-blue-500/40 hover:scale-105 hover:from-sky-400 hover:to-blue-500 transition-all duration-300">
                Join Our Mission
              </button>
            </div>
          </section>

          {/* Achievements / Statistics - Enhanced */}
          <section className="relative mb-24 rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 -z-10" />

            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:40px_40px] opacity-30" />

            {/* Header */}
            <div className="text-center mb-16 relative">
              <h2 className="text-5xl font-black text-white mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mx-auto mb-4" />
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Celebrating milestones that showcase our growth and impact in
                the boxing community
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              {stats.map((stat, index) => (
                <div key={stat.id} className="group relative">
                  {/* Main Stat Card */}
                  <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/2 border border-white/10 group-hover:border-sky-400/30 transition-all duration-500 z-10 overflow-hidden h-full">
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-[1.5px] rounded-2xl bg-slate-900" />
                    </div>

                    {/* Icon Container */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center relative shadow-2xl shadow-sky-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <div className="text-white">
                        {stat.icon}
                      </div>
                      {/* Icon Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-sky-400/20 blur-md group-hover:blur-xl transition-all duration-500" />
                    </div>

                    {/* Value */}
                    <div className="text-4xl font-bold text-sky-400 mb-3 text-center group-hover:scale-110 transition-transform duration-300">
                      {stat.value}+
                    </div>

                    {/* Label */}
                    <div className="text-slate-300 font-semibold text-center group-hover:text-white transition-colors duration-300 text-lg">
                      {stat.label}
                    </div>

                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      {index + 1}
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute right-4 bottom-4 text-sky-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                      ↗
                    </div>
                  </div>

                  {/* Shadow Effect */}
                  <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                </div>
              ))}
            </div>

            {/* Progress Bar Section */}
            <div className="mt-16 p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/2 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Our Growth Journey
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Athlete Development", percentage: 85 },
                  { label: "International Recognition", percentage: 70 },
                  { label: "Community Impact", percentage: 90 },
                  { label: "Infrastructure Growth", percentage: 65 },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-slate-300">
                      <span>{item.label}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-sky-400 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <button className="px-10 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl text-white font-bold text-lg shadow-2xl shadow-sky-500/25 hover:shadow-blue-500/40 hover:scale-105 hover:from-sky-400 hover:to-blue-500 transition-all duration-300 mr-4">
                View Full Results
              </button>
              <button className="px-10 py-4 border border-sky-500/50 text-sky-400 rounded-xl font-bold text-lg hover:bg-sky-500/10 hover:border-sky-400 hover:text-white transition-all duration-300">
                Download Report
              </button>
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