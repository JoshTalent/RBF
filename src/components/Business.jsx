import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Animated Background Card */}
      <motion.div
        className={`flex flex-row p-8 rounded-2xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-white/5 to-white/2 relative overflow-hidden group-hover:bg-white/10 transition-all duration-500 ${
          index !== features.length - 1 ? "mb-6" : "mb-0"
        }`}
        whileHover={{ 
          scale: 1.02,
          y: -5,
          borderColor: "rgba(56, 189, 248, 0.3)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/5 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[1px] rounded-2xl bg-slate-900" />
        </div>

        {/* Icon Container */}
        <motion.div
          className={`w-[70px] h-[70px] rounded-2xl ${styles.flexCenter} bg-gradient-to-br from-sky-400 to-blue-500 relative z-10 shadow-2xl shadow-sky-500/20`}
          whileHover={{ 
            scale: 1.1,
            rotate: 5
          }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <img 
            src={icon} 
            alt="icon" 
            className="w-[55%] h-[55%] object-contain filter brightness-0 invert" 
          />
          
          {/* Icon Glow */}
          <div className="absolute inset-0 rounded-2xl bg-sky-400/20 blur-md group-hover:blur-xl transition-all duration-500" />
        </motion.div>

        {/* Content */}
        <div className="flex-1 flex flex-col ml-6 relative z-10">
          <motion.h4 
            className="font-poppins font-bold text-white text-[20px] leading-[26px] mb-3 group-hover:text-sky-200 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h4>
          <motion.p 
            className="font-poppins font-normal text-slate-300 text-[16px] leading-[26px] group-hover:text-white transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {content}
          </motion.p>
        </div>

        {/* Number Badge */}
        <motion.div 
          className="absolute -top-2 -right-2 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg z-20"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
        >
          {index + 1}
        </motion.div>

        {/* Hover Arrow */}
        <motion.div
          className="absolute right-6 bottom-6 text-sky-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
          whileHover={{ x: 5 }}
        >
          →
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Business = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100
      }
    }
  };

  const stats = [
    { number: "50+", label: "Active Clubs" },
    { number: "200+", label: "Trained Athletes" },
    { number: "25+", label: "International Events" }
  ];

  return (
    <section id="features" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 -z-10" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl" />
      
      <motion.div
        ref={sectionRef}
        className={layout.section}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Content */}
        <motion.div 
          className={layout.sectionInfo}
          variants={itemVariants}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 bg-sky-500/20 backdrop-blur-sm rounded-full border border-sky-400/30 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            <span className="text-sky-400 font-semibold text-sm tracking-wider">
              ABOUT THE FEDERATION
            </span>
          </motion.div>

          <motion.h2 
            className={`${styles.heading2} mb-6 relative`}
            variants={itemVariants}
          >
            Shaping Rwanda's
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Boxing Future
            </span>
            <motion.div 
              className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.h2>

          <motion.div 
            className="space-y-6 mb-8"
            variants={itemVariants}
          >
            <p className={`${styles.paragraph} text-slate-300 text-lg leading-relaxed`}>
              The <span className="text-sky-400 font-semibold">Rwanda Boxing Federation (RBF)</span> is the governing body for amateur and professional boxing in Rwanda. We are committed to developing the sport at all levels, from grassroots initiatives to elite international competitions.
            </p>
            <p className={`${styles.paragraph} text-slate-300 text-lg leading-relaxed`}>
              Through comprehensive programs, we build strong fundamentals, promote core values of discipline and sportsmanship, and create clear pathways for young boxers to thrive both in and out of the ring.
            </p>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-3 gap-6 mb-10"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(56, 189, 248, 0.1)",
                  borderColor: "rgba(56, 189, 248, 0.3)"
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-2xl font-bold text-sky-400 mb-1">{stat.number}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
          >
            <Button styles="mt-6 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-2xl shadow-sky-500/25 hover:shadow-blue-500/40" />
          </motion.div>
        </motion.div>

        {/* Right Content - Feature Cards */}
        <motion.div 
          className={`${layout.sectionImg} flex-col relative`}
          variants={itemVariants}
        >
          {/* Floating Elements */}
          <motion.div
            className="absolute -top-10 -right-10 w-20 h-20 bg-sky-500/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div
            className="absolute -bottom-10 -left-10 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut" 
            }}
          />

          {/* Feature Cards Container */}
          <div className="relative z-10">
            {features.map((feature, index) => (
              <FeatureCard 
                key={feature.id} 
                {...feature} 
                index={index} 
              />
            ))}
          </div>

          {/* Decorative Element */}
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-500/10 to-transparent rounded-tl-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Business;