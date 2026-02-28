import React, { useEffect } from "react";
import "./MedicationDetail.css";
import portfolioVideo from "../assets/medi.mp4";
import { ButtonCard } from "../Components/ButtonCard";
import ForkmeCard from "../Components/ForkmeCard";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function MedicationDetail() {
  const navigateBack = () => {
    window.history.back();
  };

  // Scroll to top when component mounts
  useScrollToTop([]);

  return (
    <div className="meow-page nes-container is-light">
      <main className="meow-main">
        <div className="meow-container">

         
          <div className="meow-up nes-container is-rounded no-border">
            <div className="meow-left">
              <video
                className="meow-video"
                src={portfolioVideo}
                controls
                autoPlay
                loop
              />
            </div>

            <div className="meow-right">
              <h2 className="nes-text is-primary">syno ｜ Mobile Project</h2>

              <ForkmeCard
                title={"Fork me\nOn GitHub"}
                link="https://github.com/tianyu-075/syno"
                className="my-fork-card"
              />

              <div className="info-box overview-box nes-container is-rounded no-border">
                <h3>🧩 Overview</h3>
                <p>
                  Syno is a clean and intuitive medication-tracking application built with React Native and Expo.
                </p>
                <p>
                  It helps users log daily medication intake, review history records, and better manage personal health routines.
The app focuses on simplicity, efficiency, and real-world usability, featuring smooth UI interactions and persistent data storage.
                </p>
              </div>

              <ButtonCard
                className="buttonCardMeowDetail"
                title="snyo on App Store"
                description="Click to check out Syno"
                onClick={() =>
                  window.open("https://apps.apple.com/es/app/syno/id6754502303?l=en-GB", "_blank")
                }
              />
            </div>
          </div>


          <div className="info-box nes-container is-rounded">
            <h3>⚙️ Tech Stack</h3>
            <ul className="nes-list is-disc">
              <li>React Native (Expo) — Cross-platform mobile app development</li>
              <li>AsyncStorage — Local device storage for saving medication logs</li>
              <li>React Navigation — Multi-screen navigation</li>
              <li>Context API — Global state management for medication records</li>
              <li>Custom Hooks — Reusable logic for cleaner code architecture</li>
              <li>iOS & Android Support — Fully compatible across mobile devices</li>
            </ul>
          </div>


          <div className="info-box nes-container is-rounded">
            <h3>🌟 Core Features</h3>
            <ul className="nes-list is-circle">
              <li>Daily Medication Logging: Users can easily record daily medication intake, dosage, and time。</li>
              <li>History Timeline: Medication records are stored persistently and displayed in a chronological log for quick review.</li>
              <li>Editable Entries: Users can modify or delete previous medication entries to maintain accurate records.</li>
              <li>Clean UI & Smooth UX: A simple and distraction-free interface designed for ease of use and accessibility.</li>
              <li>Cross-Platform Deployment: Tested and deployable through Expo EAS, supporting both iOS and Android environments.</li>
            </ul>
          </div>


          <div >
            

            <button className="nes-btn is-primary" onClick={navigateBack}>
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
