import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import TypingWords from "../typingWords/typing";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1><TypingWords /></h1>
        <h1 className={styles.title}>Hi, I'm Rishi Rawat</h1>
        <p className={styles.description}>
          I'm a  MERN stack developer passionate about creating impactful and innovative 
          web applications. With a strong foundation in MongoDB, Express.js, 
          React.js, and Node.js
        </p>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7167800230795575296/" className={styles.contactBtn}>
          Linkedin
        </a>
      </div>
     <div className=" relative w-[90%]">
     <img
        src={getImageUrl("hero/myimg.png")}
        alt="Hero image of me"
        
        className={`absolute z-10 w-[60%] m-auto top-0 left-0 right-0 max-md:bottom-40 bottom-52   `}
        
      />
     <img
        src={getImageUrl("hero/bg.png")}
        alt="Hero image of me"
        className="w-[100%]"
      />
     
     </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
