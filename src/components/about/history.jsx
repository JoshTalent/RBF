import { useEffect, useState } from "react";
import { Business, Footer, Navbar } from "..";
import styles from "../../style";
import { motion } from "framer-motion";

// Timeline
const milestones = [
  { year: 2015, title: "Federation Founded", description: "Rwanda Boxing Federation was officially established to promote boxing nationwide." },
  { year: 2018, title: "First National Championship", description: "Organized first national-level boxing championship with wide participation." },
  { year: 2021, title: "Youth Development Program", description: "Launched programs targeting youth across all provinces to train and scout talents." },
  { year: 2024, title: "International Recognition", description: "Rwandan boxers participated and won medals in international competitions." },
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

const History = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} py-24`}>
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

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default History;
