import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  // High-quality boxing image from online source (Unsplash - professional boxing)
  const heroImage = "https://i.postimg.cc/SsT3LLmf/boxing.jpg";
  
  // Backup image in case the main one fails
  const backupImage = "https://i.postimg.cc/268gB9Nn/valentin3.jpg";

  // Advanced scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400
  });

  // Parallax effects
  const y = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1.1, 1]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.8], [1, 0.3]);
  const contentY = useTransform(smoothProgress, [0, 1], [0, -80]);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 700 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 700 });

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const { width, height } = sectionRef.current?.getBoundingClientRect() || {};
    const x = (clientX - width / 2) / width;
    const y = (clientY - height / 2) / height;
    setMousePosition({ x, y });
    mouseX.set(x * 15);
    mouseY.set(y * 15);
  }, [mouseX, mouseY]);

  useEffect(() => {
    setIsVisible(true);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMouseMove]);

  // Responsive text sizes based on screen width
  const getResponsiveTitleSize = () => {
    if (windowSize.width >= 1536) return "text-[92px] leading-[1.1]";
    if (windowSize.width >= 1280) return "text-[84px] leading-[1.1]";
    if (windowSize.width >= 1024) return "text-[72px] leading-[1.1]";
    if (windowSize.width >= 768) return "text-[64px] leading-[1.1]";
    if (windowSize.width >= 640) return "text-[56px] leading-[1.2]";
    return "text-[42px] leading-[1.2]";
  };

  const getResponsiveSubtitleSize = () => {
    if (windowSize.width >= 1536) return "text-[86px]";
    if (windowSize.width >= 1280) return "text-[78px]";
    if (windowSize.width >= 1024) return "text-[68px]";
    if (windowSize.width >= 768) return "text-[60px]";
    if (windowSize.width >= 640) return "text-[52px]";
    return "text-[40px]";
  };

  // Sophisticated animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      filter: "blur(12px)"
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        delay: i * 0.1,
        duration: 1
      }
    })
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  // Stats data
  const stats = [
    { number: "50+", label: "Elite Athletes", suffix: "Active", icon: "🥊" },
    { number: "100+", label: "Championship", suffix: "Events", icon: "🏆" },
    { number: "15", label: "National", suffix: "Champions", icon: "⭐" }
  ];

  // Title words
  const titleWords = ["RWANDA", "BOXING", "FEDERATION"];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full min-h-screen overflow-hidden sm:pt-10 lg:pt-20 bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Full-width background with overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background Image with loading state */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: imageLoaded ? 1 : 0,
            scale: imageLoaded ? 1 : 1.1
          }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={heroImage}
            alt="Boxing ring background"
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = backupImage;
            }}
          />
        </motion.div>

        {/* Enhanced gradient overlays for better text readability */}
        <div className="absolute inset-0 w-full bg-gradient-to-r from-black via-black/95 to-black/80" />
        <div className="absolute inset-0 w-full bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="absolute inset-0 w-full bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      </div>
      
      {/* Advanced Dynamic Background System */}
      <div className="absolute inset-0 w-full">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-0 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/30 via-sky-500/20 to-transparent rounded-full blur-3xl"
          style={{
            x: useTransform(smoothMouseX, [-20, 20], [-30, 30]),
            y: useTransform(smoothMouseY, [-20, 20], [-30, 30])
          }}
        />
        <motion.div 
          className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-sky-500/25 via-blue-600/15 to-transparent rounded-full blur-3xl"
          style={{
            x: useTransform(smoothMouseX, [-20, 20], [30, -30]),
            y: useTransform(smoothMouseY, [-20, 20], [30, -30])
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 w-full opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main Container - Full width with proper padding */}
      <div ref={containerRef} className="relative z-10 w-full h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 lg:py-0">
            
            {/* Left Content Section - Full width on mobile, half on desktop */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col items-start justify-center order-2 lg:order-1 mt-10 lg:mt-0"
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              style={{ y: contentY }}
            >
              {/* Premium Federation Badge */}
              <motion.div
                variants={slideInFromLeft}
                className="group relative inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-12 lg:mb-16 overflow-hidden"
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-sky-400/40 to-blue-500/40 rounded-full animate-gradient-x" />
                <div className="absolute inset-[1px] bg-black/90 rounded-full" />
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/20 to-blue-500/0 rounded-full translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                
                {/* Content */}
                <div className="relative flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full animate-pulse" />
                  <span className="text-white font-medium text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase whitespace-nowrap">
                    Official National Federation
                  </span>
                </div>
              </motion.div>

              {/* Main Title Section - Fully Responsive */}
              <div className="w-full space-y-1 sm:space-y-2 mb-6 sm:mb-8 lg:mb-10">
                {titleWords.map((word, wordIndex) => (
                  <motion.div
                    key={word}
                    className="overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.03,
                          delayChildren: wordIndex * 0.15
                        }
                      }
                    }}
                  >
                    <motion.h1
                      custom={wordIndex}
                      variants={titleVariants}
                      className={`font-poppins font-black ${
                        wordIndex === 0 ? getResponsiveTitleSize() : 
                        wordIndex === 1 ? `${getResponsiveSubtitleSize()} bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent` : 
                        getResponsiveSubtitleSize()
                      } text-white tracking-[-0.02em] break-words`}
                    >
                      {word}
                    </motion.h1>
                  </motion.div>
                ))}

                {/* Underline Animation */}
                <motion.div
                  className="relative h-0.5 mt-2 sm:mt-3 lg:mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{ delay: 2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent" />
                </motion.div>
              </div>

              {/* Enhanced Mission Statement */}
              <motion.p
                variants={fadeInUp}
                className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[540px] text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed font-light tracking-wide mb-6 sm:mb-8"
              >
                Forging champions through excellence in training, competition, and character development. 
                Proudly representing Rwanda on the global stage with integrity and determination.
              </motion.p>

              {/* Advanced Statistics Display */}
              <motion.div
                variants={containerVariants}
                className="w-full grid grid-cols-3 gap-3 sm:gap-4 lg:gap-8 py-4 sm:py-6 lg:py-8 border-y border-white/10 mb-6 sm:mb-8 lg:mb-12"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative text-center">
                      <span className="text-xl sm:text-2xl mb-1 sm:mb-2 block">{stat.icon}</span>
                      <motion.div
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-[10px] sm:text-xs lg:text-sm text-white/50 tracking-wider uppercase whitespace-nowrap">
                        {stat.label}
                      </div>
                      <div className="text-[8px] sm:text-[10px] lg:text-xs text-white/30 mt-0.5">
                        {stat.suffix}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons - Stack on mobile, row on larger screens */}
              <motion.div
                variants={fadeInUp}
                className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-5"
              >
                <div className="w-full sm:w-auto">
                  <GetStarted />
                </div>
                
              </motion.div>
            </motion.div>

            {/* Right Visual Section - Hidden on mobile, visible on desktop */}
            <motion.div
              className="hidden lg:block lg:w-1/2 relative order-1 lg:order-2"
              style={{ y, opacity: contentOpacity }}
            >
              {/* Main Image Container */}
              <motion.div
                className="relative w-full max-w-2xl mx-auto h-[500px] xl:h-[600px] 2xl:h-[680px]"
                style={{ scale: imageScale }}
                variants={fadeInUp}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {/* 3D Perspective Container */}
                <motion.div
                  className="relative w-full h-full perspective-1000"
                  style={{
                    rotateX: useTransform(smoothMouseY, [-20, 20], [2, -2]),
                    rotateY: useTransform(smoothMouseX, [-20, 20], [-2, 2])
                  }}
                >
                  {/* Image Container with Border Animation */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Gradient Border */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500 rounded-3xl"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        padding: '2px'
                      }}
                    >
                      <div className="absolute inset-[2px] bg-black rounded-3xl" />
                    </motion.div>

                    {/* Image with Loading State */}
                    <div className="absolute inset-[2px] rounded-3xl overflow-hidden group">
                      <motion.img
                        src={heroImage}
                        alt="Rwanda Boxing Federation - Elite Training"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 8 }}
                        onError={(e) => {
                          e.target.src = backupImage;
                        }}
                      />

                      {/* Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-blue-900/30" />
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500" />

                      {/* Dynamic Lighting */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                        style={{
                          background: `radial-gradient(circle at ${mousePosition.x * 100 + 50}% ${mousePosition.y * 100 + 50}%, rgba(255,255,255,0.15) 0%, transparent 50%)`
                        }}
                      />
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <motion.div
                    className="absolute -top-4 -left-4 z-30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2, type: "spring" }}
                    whileHover={{ y: -5, rotate: -5 }}
                  >
                    <div className="bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/30">
                      <div className="text-slate-800 font-bold text-sm">IABA</div>
                      <div className="text-slate-600 text-xs">Certified Member</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -right-4 z-30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.6, type: "spring" }}
                    whileHover={{ y: 5, rotate: 5 }}
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl p-4 shadow-2xl">
                      <div className="text-white font-bold text-sm">2024</div>
                      <div className="text-white/90 text-xs">Championship Season</div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Responsive positioning */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8 }}
      >
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <span className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="relative w-5 sm:w-6 h-8 sm:h-10 border border-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="absolute w-1 h-2 bg-white/80 rounded-full left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Corner Accents - Hidden on mobile */}
      <div className="hidden sm:block">
        <div className="absolute top-0 left-0 w-20 sm:w-30 lg:w-40 h-20 sm:h-30 lg:h-40 border-l-2 border-t-2 border-blue-500/30 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-20 sm:w-30 lg:w-40 h-20 sm:h-30 lg:h-40 border-r-2 border-t-2 border-sky-500/30 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-20 sm:w-30 lg:w-40 h-20 sm:h-30 lg:h-40 border-l-2 border-b-2 border-blue-500/30 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-20 sm:w-30 lg:w-40 h-20 sm:h-30 lg:h-40 border-r-2 border-b-2 border-sky-500/30 rounded-br-3xl" />
      </div>

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { transform: translateX(0%); }
          50% { transform: translateX(100%); }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(200%); }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .container {
          width: 100%;
          margin-right: auto;
          margin-left: auto;
        }
        
        @media (min-width: 640px) {
          .container {
            max-width: 640px;
          }
        }
        
        @media (min-width: 768px) {
          .container {
            max-width: 768px;
          }
        }
        
        @media (min-width: 1024px) {
          .container {
            max-width: 1024px;
          }
        }
        
        @media (min-width: 1280px) {
          .container {
            max-width: 1280px;
          }
        }
        
        @media (min-width: 1536px) {
          .container {
            max-width: 1536px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;