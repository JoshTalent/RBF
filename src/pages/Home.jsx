import React from "react";
import {
  HomeSection,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "../components";
import styles from "../style";

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="bg-primary w-full overflow-hidden">
        <Navbar />

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary  `}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <HomeSection />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
