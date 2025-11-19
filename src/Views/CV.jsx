import React from "react";
import styles from "./CV.module.css";
import DownloadCVButton from "../components/DownloadCVButton"


const CV = () => {
  return (
    <div className={styles["cv-container"]}>
      

      {/* ✅ Main 内容 */}
      <main className={styles["cv-main"]}>
        {/* 左边：头像 */}
        <div className={styles["left-side"]}>
          <img
            src="/src/assets/IMG_4835.jpg"
            alt="Tianyu He"
            className={styles["profile-pic"]}
          />
        </div>



        {/* 右边：介绍 */}
        <div className={styles["right-side"]}>
          <section className={styles["intro"]}>
            <h2>Hello!</h2>
            <p>
              I am Tianyu He, a software engineer passionate about translating
              ideas into clean and intuitive digital experiences.
            </p>
          </section>
 

          <section className={styles["about-me"]} id="about">
            <h3>About Me</h3>
            <p>
              I’m a software engineer who loves building things that feel smooth, intuitive, and actually useful. I work mainly with React, Node.js, JavaScript, and MongoDB to create full-stack web and mobile applications. What started as a simple curiosity about fixing everyday problems gradually turned into a passion for turning ideas into real, polished digital experiences.
            </p>
            <p>
              I enjoy working collaboratively and tackling complex challenges
              through creative, efficient solutions. My goal is to contribute to
              impactful projects that make a real difference in people’s lives.
            </p>
          </section>
          <DownloadCVButton></DownloadCVButton>
        </div>
      </main>

     

      {/* ✅ 底部复古技能区域 */}
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
