import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import styles, { layout } from "../style";

const HomeSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Fix: Create 4 refs to match the 4 sections
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null), // Added fourth ref
  ];

  const inView = sectionRefs.map((ref) =>
    useInView(ref, { once: true, threshold: 0.2 }),
  );

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } =
        containerRef.current?.getBoundingClientRect() || {};
      const x = (clientX - width / 2) / width;
      const y = (clientY - height / 2) / height;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Professional online images with blue system color
  const sections = [
    {
      image: "https://i.postimg.cc/vBHC62wH/valentin.jpg",
      title: "Build on Resilience and Determination",
      description:
        "Rwanda boxers are renowned for their incredible heart and spirit in the ring. Forged by a culture of resilience, they possess a unique mental toughness that sets them apart. This determination allows them to face any opponent with courage and composure. Our athletes never back down from a challenge, embodying the true fighting spirit. They carry the strength of the nation with every punch.",
      stats: {
        value: "98%",
        label: "Mental Toughness",
        detail: "Rating from coaches",
      },
      features: [
        "Elite mental conditioning programs",
        "Resilience training workshops",
        "Competition psychology support",
        "Peak performance mindset",
      ],
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-500/5 via-blue-600/5 to-transparent",
      reverse: false,
      icon: "🥊",
    },
    {
      image: "https://i.postimg.cc/CK4W5TX5/frank2.jpg",
      title: "Rapidly Gaining International Recognition",
      description:
        "Rwanda boxing is no longer a hidden secret but a rapidly rising force on the continent. Our athletes are consistently delivering impressive performances at major African championships and international tournaments. With each competition, we are earning the respect of the global boxing community. The world is starting to take notice of the skill and power coming from Rwanda. We are proudly putting Rwandan sports on the world stage.",
      stats: {
        value: "25+",
        label: "International Medals",
        detail: "Since 2020",
      },
      features: [
        "African Championship medals",
        "Commonwealth Games participation",
        "Olympic qualification pathway",
        "Global ranking improvements",
      ],
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-500/5 via-blue-600/5 to-transparent",
      reverse: true,
      icon: "🌍",
    },
    {
      image: "https://i.postimg.cc/7h5cKC6w/Heros3.jpg",
      title: "Forged in Discipline, Honed by Hard Work",
      description:
        "The discipline exhibited by Rwandan boxers is second to none. They commit to rigorous training regimens with unparalleled dedication and focus. This profound work ethic is the foundation of every success story, from local gyms to international podiums. Their commitment to the sport is a testament to their character and desire to excel. This culture of hard work is our greatest asset.",
      stats: {
        value: "6+",
        label: "Training Hours",
        detail: "Daily commitment",
      },
      features: [
        "State-of-the-art training facility",
        "Professional coaching staff",
        "Scientific performance tracking",
        "Recovery and nutrition programs",
      ],
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-500/5 via-blue-600/5 to-transparent",
      reverse: false,
      icon: "⚡",
    },
    {
      image: "https://i.postimg.cc/SsT3LLmf/boxing.jpg",
      title: "National Unity: One Nation One Team, Boxing for Rwanda.",
      description:
        "Every jab, hook, and victory is for the pride of the nation. Our boxers compete with the weight and support of a united country behind them. They are not just athletes; they are ambassadors representing the spirit and heart of Rwanda on the global stage.",
      stats: {
        value: "500+",
        label: "Active Members",
        detail: "Growing community",
      },
      features: [
        "National team selection",
        "Community outreach programs",
        "Regional development hubs",
        "Grassroots initiatives",
      ],
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-500/5 via-blue-600/5 to-transparent",
      reverse: true,
      icon: "🇷🇼",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
        duration: 1.2,
      },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-transparent">
      {/* Subtle Blue Background System - Transparent */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-transparent" />

        {/* Very Subtle Blue Gradient Orbs */}
        <motion.div
          className="absolute top-0 -left-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/5 via-blue-400/5 to-transparent blur-3xl"
          animate={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
        />
        <motion.div
          className="absolute bottom-0 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-tl from-blue-600/5 via-blue-500/5 to-transparent blur-3xl"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
        />

        {/* Ultra Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating Particles - Blue Tinted */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      {sections.map((section, index) => {
        const SectionIcon = () => (
          <motion.div
            className="relative w-20 h-20 mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={inView[index] ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: "spring", damping: 15, delay: 0.3 }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${section.color} rounded-2xl opacity-10 blur-xl`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${section.color} rounded-2xl opacity-20`}
            />
            <div className="relative w-full h-full bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-sm rounded-2xl border border-blue-400/20 flex items-center justify-center">
              <span className="text-4xl">{section.icon}</span>
            </div>
          </motion.div>
        );

        return (
          <motion.section
            key={index}
            ref={sectionRefs[index]}
            className={`relative ${layout.section} min-h-screen py-32 p-3 overflow-hidden bg-transparent lg:p-52 `}
            variants={containerVariants}
            initial="hidden"
            animate={inView[index] ? "visible" : "hidden"}
          >
            {/* Section Background Gradient - Very Subtle */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${section.bgColor} pointer-events-none`}
              initial={{ opacity: 0 }}
              animate={inView[index] ? { opacity: 0.3 } : {}}
              transition={{ duration: 1.5 }}
            />

            <div
              className={`relative z-10 flex flex-col ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16 lg:gap-24 bg-transparent`}
            >
              {/* Image Container */}
              <motion.div
                className="flex-1 w-full lg:w-1/2"
                variants={imageVariants}
              >
                <div className="relative group perspective-1000">
                  {/* 3D Image Container */}
                  <motion.div
                    className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10"
                    style={{
                      rotateY: mousePosition.x * (section.reverse ? 5 : -5),
                      rotateX: mousePosition.y * 3,
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Main Image */}
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Subtle Blue Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20" />

                    {/* Animated Blue Border */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      style={{ backgroundSize: "200% 200%" }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />

                    {/* Floating Stats Card - Blue Theme */}
                    <motion.div
                      className="absolute bottom-6 left-6 z-20"
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView[index] ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8, type: "spring" }}
                    >
                      <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/20 shadow-2xl">
                        <div className="text-center">
                          <motion.div
                            className={`text-4xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {section.stats.value}
                          </motion.div>
                          <div className="text-white font-semibold mt-1">
                            {section.stats.label}
                          </div>
                          <div className="text-white/40 text-sm mt-1">
                            {section.stats.detail}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Decorative Blue Elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Background Blue Glow */}
                  <motion.div
                    className={`absolute -inset-4 bg-gradient-to-r ${section.color} opacity-5 blur-3xl -z-10`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Text Content - Transparent Background */}
              <motion.div
                className="flex-1 w-full lg:w-1/2 space-y-8 bg-transparent"
                variants={itemVariants}
              >
                <SectionIcon />

                {/* Section Label - Blue Theme */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView[index] ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  <div
                    className={`w-16 h-1 bg-gradient-to-r ${section.color} rounded-full`}
                  />
                  <span
                    className={`text-sm font-semibold tracking-[0.3em] uppercase bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}
                  >
                    Feature {index + 1}
                  </span>
                </motion.div>

                {/* Title with Character Animation */}
                <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight bg-transparent">
                  {section.title.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block mr-3 mb-2">
                      {word.split("").map((letter, letterIndex) => (
                        <motion.span
                          key={letterIndex}
                          className="inline-block hover:text-blue-400 transition-colors duration-300"
                          custom={wordIndex * 10 + letterIndex}
                          variants={textRevealVariants}
                          initial="hidden"
                          animate={inView[index] ? "visible" : "hidden"}
                          whileHover={{
                            scale: 1.2,
                            rotate: 5,
                            color: "#60a5fa",
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-lg text-white/60 leading-relaxed max-w-xl bg-transparent"
                  variants={itemVariants}
                >
                  {section.description}
                </motion.p>

                {/* Feature Grid */}
                <motion.div
                  className="grid grid-cols-2 gap-4 pt-4 bg-transparent"
                  variants={itemVariants}
                >
                  {section.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start gap-3 group bg-transparent"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView[index] ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className={`w-2 h-2 mt-2 bg-gradient-to-r ${section.color} rounded-full group-hover:scale-150 transition-transform duration-300`}
                      />
                      <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons - Blue Theme */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-8 bg-transparent"
                  variants={itemVariants}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative px-8 py-4 bg-gradient-to-r ${section.color} rounded-xl text-white font-semibold overflow-hidden shadow-2xl shadow-blue-500/20`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explore Program
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                      style={{ opacity: 0.2 }}
                    />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-transparent text-white rounded-xl font-semibold border-2 border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    Watch Video
                  </motion.button>
                </motion.div>

                {/* Achievement Strip */}
                <motion.div
                  className="flex items-center gap-6 pt-6 border-t border-blue-400/10 bg-transparent"
                  initial={{ opacity: 0 }}
                  animate={inView[index] ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-2 border-black/30 backdrop-blur-sm flex items-center justify-center"
                      >
                        <span className="text-xs text-blue-300">🏆</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-white/30 text-sm">
                    Join 500+ elite athletes
                  </span>
                </motion.div>
              </motion.div>
            </div>

            {/* Section Connector - Blue Theme */}
            {index < sections.length - 1 && (
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                initial={{ scaleY: 0 }}
                animate={inView[index] ? { scaleY: 1 } : {}}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <div className="relative">
                  <div className="w-1 h-24 bg-gradient-to-b from-blue-400/20 to-transparent rounded-full" />
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400/40 rounded-full"
                    animate={{
                      y: [0, 90, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            )}
          </motion.section>
        );
      })}

      {/* Decorative Corner Elements - Blue Theme */}
      <div className="fixed top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-blue-400/10 rounded-tl-3xl pointer-events-none" />
      <div className="fixed top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-blue-400/10 rounded-tr-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-blue-400/10 rounded-bl-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-blue-400/10 rounded-br-3xl pointer-events-none" />

      {/* Floating Blue Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default HomeSection;
