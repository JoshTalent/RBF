import React from "react";
import { bill, abc, robot } from "../assets";
import styles, { layout } from "../style";

const HomeSection = () => {
  return (
    <>
      <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img
            src={bill}
            alt="HomeSection"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Build on Resilience and <br className="sm:block hidden" />{" "}
            Determination
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Rwanda boxers are renowned for thier increadible heart and spirity
            in the ring. Forged by a culture of Resilience , they poses a unique
            mental toughtness that sets them apart. This determination allows
            them to face any opponent with courage and composure. Our athletes
            never back down from a challenge , embodying the true fighting
            spirity. they carry the strenght of the nation with every punch.
          </p>
        </div>
      </section>
      <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Rapidly Gaining Intenational <br className="sm:block hidden" />{" "}
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Recognition Rwanda boxing is no linger a hidden secret but a rapidly
            rising force on the continent. Our athletes are consistently
            delivering impressive performance at major african championships and
            international tournaments. with each competition, we are earning
            respect of global boxing community. the world'sstarting to take
            notice of the skill and power comming from Rwanda. we are proudly
            putting Rwandan sports on the world stage
          </p>
        </div>
        <div className={layout.sectionImgReverse}>
          <img
            src={abc}
            alt="HomeSection"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>
      </section>
      <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img
            src={robot}
            alt="HomeSection"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            Forged in the Displine,
            <br className="sm:block hidden" /> Honed by hard work
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            the Displine exhibited by Rwandan boxers is second to none. they
            commit to rigorous training regimers with unparalleled dedication
            and focus. this profound work ethis is the foundation of every
            success story, from local gyms to international podiums. thier
            commitiment to the sport is a testament to their character and
            desire to excel. this culture of hard word is our greatest assets
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
