import React, { useEffect } from "react";
import styles from "./CV.module.css";
import DownloadCVButton from "../Components/DownloadCVButton"
import { useScrollToTop } from "../hooks/useScrollToTop";

const CV = () => {
  // Scroll to top when component mounts
  useScrollToTop([]);
  return (
    <div className={styles["cv-container"]}>
      


      <main className={styles["cv-main"]}>

        <div className={styles["left-side"]}>
          <img
            src="/IMG_4835.JPG"
            alt="Tianyu He"
            className={styles["profile-pic"]}
          />
        </div>



        <div className={styles["right-side"]}>
          <section className={styles["intro"]}>
            <h2>Hello!</h2>
            <p>
             I am Tianyu He, a Storyteller turned Software Engineer.
            </p>
          </section>
 

          <section className={styles["about-me"]} id="about">
            <h3>About Me</h3>
            <p>
               My journey began in National TV Production, where I mastered high-pressure storytelling. Driven by curiosity, I self-taught React to fix our messy workflow. That single spark of problem-solving turned a TV director into a software engineer.            </p>
            <p>
              I craft digital experiences with TypeScript and the MERN stack, but my heart beats fastest for AI Automation. I love wandering into the world of RAG and n8n to build AI Agents that act as digital levers, freeing people from mundane tasks. I find my greatest joy in always learning and being driven by the pure spark of creating something that didn’t exist before.
            </p>
          </section>
          <DownloadCVButton></DownloadCVButton>
        </div>
      </main>

     

   
      <section className={styles["bottom-section"]} id="skills">

        <div className={styles["nes-card"]}>
          <h3>Languages & Tools</h3>
          <p>
            JavaScript, TypeScript, HTML, CSS, Git, GitHub, Linux, npm, VS Code
          </p>
        </div>

        <div className={styles["nes-card"]}>
          <h3>Frameworks & Libraries</h3>
          <p>
            React, React Native, Node.js, Express, MongoDB, Tailwind CSS,
            RESTful APIs
          </p>
        </div>

        <div className={styles["nes-card"]}>
          <h3>Core CS Concepts</h3>
          <p>
            Full-stack architecture, API integration, database design,
            responsive design, debugging, version control, deployment,
            UX fundamentals
          </p>
        </div>
      </section>
    </div>
  );
};

export default CV;
