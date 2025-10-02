import { motion } from "framer-motion";
import styles from "../style";
import { abcd } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`relative flex md:flex-row flex-col ${styles.paddingY} overflow-hidden`}
    >
      {/* Left Content */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10`}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-row justify-between items-center w-full"
        >
          <h1 className="flex-1 font-poppins font-extrabold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            RWANDA <br className="sm:block hidden" />{" "}
            <span className="text-gradient">BOXING</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-poppins font-extrabold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"
        >
          FEDERATION
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}
        >
          We foster excellence in the ring and beyond—developing athletes,
          uplifting communities, and growing Rwanda's boxing culture with
          integrity and passion.
        </motion.p>
      </div>

      {/* Right Image with floating elements */}
      <motion.div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative z-0`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={abcd}
          alt="HomeSection"
          className="w-full h-full relative z-[5] rounded-xl object-cover shadow-2xl"
        />

        {/* Animated Floating Gradient Elements */}
        <motion.div
          className="absolute w-[35%] h-[35%] top-0 pink__gradient rounded-full blur-3xl z-[1]"
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[80%] h-[80%] rounded-full white__gradient bottom-40 opacity-60 blur-2xl z-[0]"
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[50%] h-[50%] right-20 bottom-20 blue__gradient rounded-full blur-3xl z-[0]"
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Mobile CTA Button */}
      <div className={`ss:hidden ${styles.flexCenter} mt-10`}>
        <GetStarted />
      </div>

      {/* Background Neon Rings */}
      <motion.div
        className="absolute w-[600px] h-[600px] top-[-200px] left-[-150px] rounded-full border-4 border-sky-600 opacity-30 animate-spin-slow z-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bottom-[-150px] right-[-100px] rounded-full border-4 border-pink-500 opacity-20 animate-spin-slow z-0"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />
    </section>
  );
};

export default Hero;
