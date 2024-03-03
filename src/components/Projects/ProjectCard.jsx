import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiQuicklook } from "react-icons/si";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={` hover:scale-105 duration-100 ${styles.image}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={` ${styles.links}`}>
        <a href={demo} className={`${styles.link}`}>
        <SiQuicklook />
        </a>
        <a href={source} className={styles.link}>
        <FaGithub />
        </a>
      </div>
    </div>
  );
};
