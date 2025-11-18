import React from "react";
import "./MeowMeowFightDetail.css";
import portfolioVideo from "../assets/meowmeow-game.mp4";
import { ButtonCard } from "../Components/ButtonCard";
import ForkmeCard from "../Components/ForkmeCard";

export default function MeowMeowFightDetail() {
  const navigateBack = () => {
    window.location.reload();
  };

  return (
    <div className="meow-page nes-container is-light">
      <main className="meow-main">
        <div className="meow-container">

          {/* 上方 */}
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
              <h2 className="nes-text is-primary">MeowMeowFight ｜ Project</h2>

              <ForkmeCard
                title={"Fork me\nOn GitHub"}
                link="https://github.com/tianyu-075/catmon"
                className="my-fork-card"
              />

              <div className="info-box overview-box nes-container is-rounded no-border">
                <h3>🧩 Overview</h3>
                <p>
                  MeowMeowFight is a full-stack browser game where users can
                  collect, manage, and battle virtual cats in a retro-styled,
                  interactive Gameboy-like environment.
                </p>
                <p>
                  The project integrates authentication, dynamic game logic,
                  turn-based battle mechanics, and database updates — all
                  designed with a nostalgic pixel aesthetic and smooth UI
                  animations.
                </p>
              </div>

              <ButtonCard
                className="buttonCardMeowDetial"
                title="MeowMeowFright Live Site"
                description="Click to explore MeowMeowFright"
                onClick={() =>
                  window.open("https://catmon-vert.vercel.app/", "_blank")
                }
              />
            </div>
          </div>


          <div className="info-box nes-container is-rounded">
            <h3>⚙️ Tech Stack</h3>
            <ul className="nes-list is-disc">
              <li>Frontend: React, React Router DOM, CSS animations</li>
              <li>Backend: Node.js, Express</li>
              <li>Database: MongoDB</li>
              <li>Authentication: JWT (JSON Web Tokens)</li>
              <li>External API: TheCatAPI for cat image resources</li>
            </ul>
          </div>


          <div className="info-box nes-container is-rounded">
            <h3>🌟 Core Features</h3>
            <ul className="nes-list is-circle">
              <li>Secure user registration and login via JWT.</li>
              <li>Cat collection and management system with unique ownership.</li>
              <li>Turn-based battle mechanism with win/lose outcomes.</li>
              <li>Dynamic updates of player and cat pool data.</li>
              <li>Retro Gameboy visual style with animations and sound FX.</li>
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
