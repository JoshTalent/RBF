import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "../style";
import { abcd } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Professional animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: "blur(12px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
        duration: 1.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const stats = [
    { number: "50+", label: "Elite Athletes", suffix: "" },
    { number: "100+", label: "Championship", suffix: "Events" },
    { number: "15", label: "National", suffix: "Champions" }
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`relative flex md:flex-row flex-col mt-20 ${styles.paddingY} min-h-screen overflow-hidden bg-black`}
    >
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-sky-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-sky-500/15 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Main Container */}
      <div ref={containerRef} className="relative z-10 w-full max-w-7xl mx-auto flex md:flex-row flex-col items-center justify-between">
        
        {/* Left Content Section */}
        <motion.div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Federation Badge with Gradient Border */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-sky-400/10 backdrop-blur-md rounded-full border border-blue-400/30 mb-12"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full animate-pulse" />
            <span className="text-white font-medium text-sm tracking-wider uppercase">
              Official National Federation
            </span>
          </motion.div>

          {/* Main Title Section */}
          <div className="space-y-4 mb-8">
            <motion.h1
              variants={titleVariants}
              className="font-poppins font-black ss:text-[84px] text-[58px] text-white ss:leading-[94px] leading-[74px] tracking-tight"
            >
              RWANDA
            </motion.h1>
            
            <motion.div
              variants={titleVariants}
              className="relative"
            >
              <span className="font-poppins font-black ss:text-[76px] text-[56px] bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                BOXING
              </span>
              <motion.div
                className="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
              />
            </motion.div>

            <motion.h1
              variants={titleVariants}
              className="font-poppins font-black ss:text-[76px] text-[56px] text-white ss:leading-[84px] leading-[70px] tracking-tighter"
            >
              FEDERATION
            </motion.h1>
          </div>

          {/* Mission Statement */}
          <motion.p
            variants={fadeInUp}
            className={`${styles.paragraph} max-w-[520px] mt-8 text-white/80 text-lg leading-relaxed font-light`}
          >
            Developing world-class boxing talent through professional training programs, 
            international competitions, and community development initiatives. 
            Committed to excellence, integrity, and the growth of Rwandan boxing.
          </motion.p>

          {/* Performance Statistics with Gradient Background */}
          <motion.div
            variants={containerVariants}
            className="flex items-center gap-12 mt-12 py-6 border-y border-white/20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-1 bg-gradient-to-b from-white to-blue-100 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70 tracking-wide uppercase">
                  {stat.label}
                </div>
                {stat.suffix && (
                  <div className="text-sm text-white/70 tracking-wide">
                    {stat.suffix}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 mt-12"
          >
            <GetStarted />
            <motion.button
              whileHover={{ 
                scale: 1.02,
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-white/30 rounded-xl text-white font-medium tracking-wide backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:shadow-2xl hover:shadow-blue-500/20 bg-white/5"
            >
              View Programs
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Visual Section */}
        <motion.div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-16 relative`}
          style={{ y, opacity }}
        >
          {/* Main Image Container with Gradient Border */}
          <motion.div
            className="relative w-full max-w-2xl h-[680px] rounded-3xl overflow-hidden group"
            variants={scaleIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-white/20 to-sky-400/30 rounded-3xl z-0 animate-pulse" />
            
            {/* Main Image */}
            <img
              src={abcd}
              alt="Rwanda Boxing Federation - Professional Athletes in Training"
              className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-2xl z-10 transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-blue-800/20 z-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/10 to-blue-900/30 z-20" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 z-25 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            {/* Image Badge with Gradient */}
            <motion.div
              className="absolute top-6 right-6 z-30 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
            >
              <div className="text-white font-semibold text-sm tracking-wide">
                Professional Training Facility
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Accreditation Badges with Gradients */}
          <motion.div
            className="absolute -top-4 left-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-5 shadow-2xl border border-white/30 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="text-slate-800 font-bold text-sm mb-1">IABA</div>
            <div className="text-slate-600 text-xs">Certified Member</div>
          </motion.div>

          <motion.div
            className="absolute -bottom-6 right-12 bg-gradient-to-br from-blue-500 to-sky-400 rounded-2xl p-5 shadow-2xl z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            whileHover={{ scale: 1.05, y: 2 }}
          >
            <div className="text-white font-bold text-sm mb-1">2024</div>
            <div className="text-white/90 text-xs">Championship Season</div>
          </motion.div>

          {/* Floating Gradient Elements */}
          <motion.div
            className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-sky-300/10 rounded-full blur-xl z-0"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tr from-sky-400/15 to-blue-500/20 rounded-full blur-xl z-0"
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Professional Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm font-light tracking-widest mb-2 uppercase">
            Explore
          </span>
          <motion.div
            className="w-5 h-8 border border-white/30 rounded-full flex justify-center backdrop-blur-sm"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-0.5 h-2 bg-white rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Gradient Rings */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] -top-[400px] -left-[300px] rounded-full border border-blue-400/10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      />
      
      <motion.div
        className="absolute w-[800px] h-[800px] -bottom-[300px] -right-[200px] rounded-full border border-white/5"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;