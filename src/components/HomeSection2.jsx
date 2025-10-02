import React from "react";
import { abcde } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";

const HomeSection2 = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          One nation One team , <br className="sm:block hidden" />
          Boxing for rwanda.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Every jab, Hook, and victory is for the pride of the nation. Our
          boxers compete with the weight and support of a united country behind
          them they are not just athletes; they are ambassadors representing the
          spirity heart of Rwanda onthe global stage. this deep sense of
          national pride fuels their performance and unites fans across the
          country. Together, we celebrating every triumph as One.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={abcde} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default HomeSection2;
