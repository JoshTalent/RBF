import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { bill, abc, robot } from "../assets";
import styles, { layout } from "../style";

const HomeSection = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const inView = sectionRefs.map(ref => useInView(ref, { once: true, threshold: 0.3 }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
        duration: 1.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: 100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
        duration: 1.2
      }
    }
  };

  const gradientVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const sections = [
    {
      image: bill,
      title: "Build on Resilience and Determination",
      description: "Rwanda boxers are renowned for their incredible heart and spirit in the ring. Forged by a culture of resilience, they possess a unique mental toughness that sets them apart. This determination allows them to face any opponent with courage and composure. Our athletes never back down from a challenge, embodying the true fighting spirit. They carry the strength of the nation with every punch.",
      stats: ["98%", "Mental Toughness", "Rating from coaches"],
      reverse: false
    },
    {
      image: abc,
      title: "Rapidly Gaining International Recognition",
      description: "Rwanda boxing is no longer a hidden secret but a rapidly rising force on the continent. Our athletes are consistently delivering impressive performances at major African championships and international tournaments. With each competition, we are earning the respect of the global boxing community. The world is starting to take notice of the skill and power coming from Rwanda. We are proudly putting Rwandan sports on the world stage.",
      stats: ["25+", "International Medals", "Since 2020"],
      reverse: true
    },
    {
      image: robot,
      title: "Forged in Discipline, Honed by Hard Work",
      description: "The discipline exhibited by Rwandan boxers is second to none. They commit to rigorous training regimens with unparalleled dedication and focus. This profound work ethic is the foundation of every success story, from local gyms to international podiums. Their commitment to the sport is a testament to their character and desire to excel. This culture of hard work is our greatest asset.",
      stats: ["6+", "Training Hours", "Daily commitment"],
      reverse: false
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-800 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)] -z-5" />
      
      {sections.map((section, index) => (
        <motion.section
          key={index}
          ref={sectionRefs[index]}
          id={`feature-${index + 1}`}
          className={`relative ${layout.section} ${section.reverse ? 'flex-row-reverse' : ''} min-h-screen py-20`}
          variants={containerVariants}
          initial="hidden"
          animate={inView[index] ? "visible" : "hidden"}
        >
          {/* Image Container */}
          <motion.div
            className={`flex-1 ${layout.sectionImg} relative group`}
            variants={imageVariants}
          >
            {/* Main Image */}
            <motion.div
              className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Enhanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent z-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-blue-900/40 z-20" />
              
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 opacity-0 group-hover:opacity-100 z-30"
                style={{ backgroundSize: "200% 200%" }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="absolute inset-[3px] rounded-3xl bg-slate-900 z-30" />
              </motion.div>

              {/* Stats Badge */}
              <motion.div
                className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 border border-sky-500/20 z-30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="text-white text-center">
                  <div className="text-2xl font-bold text-sky-400">{section.stats[0]}</div>
                  <div className="text-sm font-semibold">{section.stats[1]}</div>
                  <div className="text-xs text-slate-400 mt-1">{section.stats[2]}</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Gradient Effects */}
            <motion.div
              className="absolute z-[3] -left-1/2 top-0 w-[60%] h-[60%] rounded-full bg-gradient-to-r from-white to-sky-200 opacity-20"
              variants={gradientVariants}
            />
            <motion.div
              className="absolute z-[0] -left-1/2 bottom-0 w-[70%] h-[70%] rounded-full bg-gradient-to-r from-sky-400 to-blue-500 opacity-30"
              variants={gradientVariants}
            />
            <motion.div
              className="absolute z-[1] -right-1/4 top-1/2 w-[40%] h-[40%] rounded-full bg-gradient-to-r from-blue-400 to-sky-400 opacity-25"
              variants={gradientVariants}
              transition={{ delay: 0.5 }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className={`flex-1 ${layout.sectionInfo} relative z-10`}
            variants={textVariants}
          >
            {/* Section Number */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-sky-500/25">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
            </motion.div>

            {/* Title */}
            <motion.h2
              className={`${styles.heading2} mb-8 leading-tight text-white`}
              variants={itemVariants}
            >
              {section.title.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-2">
                  {word.split('').map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      className="inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + wordIndex * 0.1 + letterIndex * 0.02 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h2>

            {/* Description */}
            <motion.p
              className={`${styles.paragraph} max-w-[500px] text-slate-300 text-lg leading-relaxed mb-8`}
              variants={itemVariants}
            >
              {section.description}
            </motion.p>

            {/* Feature List */}
            <motion.div
              className="space-y-4 mb-8"
              variants={itemVariants}
            >
              {[
                "World-class training facilities",
                "International competition experience",
                "Professional coaching staff",
                "Youth development programs"
              ].map((feature, featureIndex) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + featureIndex * 0.1 }}
                >
                  <div className="w-2 h-2 bg-sky-400 rounded-full" />
                  <span className="text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl text-white font-semibold shadow-2xl shadow-sky-500/25 transition-all duration-300 hover:scale-105 hover:from-sky-400 hover:to-blue-500"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(56, 189, 248, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Learn More About Our Program
            </motion.button>
          </motion.div>

          {/* Connecting Line Between Sections */}
          {index < sections.length - 1 && (
            <motion.div
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-sky-400 to-transparent rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            />
          )}
        </motion.section>
      ))}
    </div>
  );
};

export default HomeSection;