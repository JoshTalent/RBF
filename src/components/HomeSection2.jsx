import React from "react";
import { motion } from "framer-motion";
import { abcde } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";

const HomeSection2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={`${layout.section} bg-slate-50/50 dark:bg-slate-900/30 py-20`}>
      <div className={`${layout.section} gap-12 lg:gap-16`}>
        {/* Left Content */}
        <motion.div
          className={layout.sectionInfo}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-full mb-6"
            variants={itemVariants}
          >
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
            <span className="text-red-700 dark:text-red-300 text-xs font-medium tracking-wide uppercase">
              National Unity
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className={`${styles.heading2} relative`}
          >
            One Nation One Team,
            <br className="sm:block hidden" />
            <span className="text-gradient bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Boxing for Rwanda.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`${styles.paragraph} max-w-[500px] mt-6 text-slate-700 dark:text-slate-300 leading-relaxed`}
          >
            Every jab, hook, and victory is for the pride of the nation. Our
            boxers compete with the weight and support of a united country behind
            them. They are not just athletes; they are ambassadors representing the
            spirit and heart of Rwanda on the global stage.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className={`${styles.paragraph} max-w-[500px] mt-4 text-slate-600 dark:text-slate-400 leading-relaxed`}
          >
            This deep sense of national pride fuels their performance and unites fans across the
            country. Together, we celebrate every triumph as One.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button styles="mt-8" />
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className={`${layout.sectionImg} relative`}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative rounded-2xl overflow-hidden group">
            <img 
              src={abcde} 
              alt="Rwanda Boxing National Team - United as One Nation" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Simple decorative elements */}
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-red-600 opacity-60" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-blue-600 opacity-60" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection2;