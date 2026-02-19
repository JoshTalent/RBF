import React, { useEffect, useState } from "react";
import {  Footer, Navbar, Testimonials } from "..";
import styles from "../../style";
import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  Target,
  Flag,
  Star,
  ArrowRight,
  Award, // Added missing Award import
  Calendar,
  MapPin,
  ExternalLink,
  X,
  TrendingUp,
  Shield,
  Mail,
  Phone,
  Search,
  Filter,
} from "lucide-react";

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

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-sky-900/80 via-black to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-sky-500/20 backdrop-blur-sm rounded-full border border-sky-400/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Trophy className="text-sky-400" size={20} />
            <span className="text-sky-400 font-semibold text-sm tracking-wider uppercase">
              ABOUT THE FEDERATION
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl sm:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Shaping Rwanda's <br />
            Boxing Future
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-slate-300 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The Rwanda Boxing Federation (RBF) is the governing body for amateur
            and professional boxing in Rwanda. We are committed to developing
            the sport at all levels, from grassroots initiatives to elite
            international competitions.
          </motion.p>

          <motion.p
            className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Through comprehensive programs, we build strong fundamentals,
            promote core values of discipline and sportsmanship, and create
            clear pathways for young boxers to thrive both in and out of the
            ring.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {/* Stat 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-bold text-sky-400 mb-2">50+</div>
              <div className="text-white text-lg font-semibold">
                Active Clubs
              </div>
              <div className="text-slate-400 text-sm mt-2">
                Nationwide network
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-bold text-sky-400 mb-2">200+</div>
              <div className="text-white text-lg font-semibold">
                Trained Athletes
              </div>
              <div className="text-slate-400 text-sm mt-2">
                Professional development
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-bold text-sky-400 mb-2">25+</div>
              <div className="text-white text-lg font-semibold">
                International Events
              </div>
              <div className="text-slate-400 text-sm mt-2">
                Global experience
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button className="group px-10 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl text-white font-bold text-lg shadow-2xl shadow-sky-500/25 hover:shadow-blue-500/40 hover:scale-105 hover:from-sky-400 hover:to-blue-500 transition-all duration-300 flex items-center gap-2 mx-auto">
              Join Now
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="group relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-sky-400/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>

              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Youth Development
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Grassroots training for ages 10-18 focusing on fundamentals and
                safety.
              </p>

              <div className="flex items-center gap-2 text-sky-400 group-hover:gap-4 transition-all duration-300">
                <span className="text-sm font-semibold">Learn More</span>
                <ArrowRight size={16} />
              </div>

              <div className="absolute bottom-4 right-4 text-sky-400/20 text-6xl font-black">
                →
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="group relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-sky-400/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>

              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Elite Training
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                High-performance coaching for competitive boxers aiming for
                national team.
              </p>

              <div className="flex items-center gap-2 text-sky-400 group-hover:gap-4 transition-all duration-300">
                <span className="text-sm font-semibold">Learn More</span>
                <ArrowRight size={16} />
              </div>

              <div className="absolute bottom-4 right-4 text-sky-400/20 text-6xl font-black">
                →
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="group relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-sky-400/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>

              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Coaches & Officials
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Certification and continuous education for coaches, referees and
                judges.
              </p>

              <div className="flex items-center gap-2 text-sky-400 group-hover:gap-4 transition-all duration-300">
                <span className="text-sm font-semibold">Learn More</span>
                <ArrowRight size={16} />
              </div>

              <div className="absolute bottom-4 right-4 text-sky-400/20 text-6xl font-black">
                →
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of your existing content */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} py-24`}>
          {/* Mission & Vision Section */}
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

          {/* Achievements Section */}
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
                      <div className="text-white">{stat.icon}</div>
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
