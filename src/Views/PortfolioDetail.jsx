import React from "react";
import "./PortfolioDetail.css";

import ForkmeCard from "../Components/ForkmeCard";

export default function PortfolioDetail() {
  const navigateBack = () => {
    window.location.reload();
  };

  return (
    <div className="portfolio-page nes-container is-light">
      <main className="portfolio-main">
        <div className="portfolio-container">

        
<div className="portfolio-up nes-container is-rounded no-border">
  <div className="portfolio-left">
    <img
      className="portfolio-video"
      src="/src/assets/balck.png"
      alt="portfolio preview"
    />
  </div>

  <div className="portfolio-right">
    <h2 className="nes-text is-primary">Portfolio ｜ Tianyu</h2>

    <ForkmeCard
      title={"Fork me\nOn GitHub"}
      link="https://github.com/your-username"
      className="my-fork-card"
    />

    <div className="info-box overview-box nes-container is-rounded no-border">
      <h3>🧩 Overview</h3>
      <p>
        A modern, interactive portfolio built entirely with React,
        designed to showcase my projects, creative coding style, and
        development journey.
      </p>
      <p>
        This site highlights not just my technical abilities but also
        my love for UI motion, clean component architecture, and
        immersive design. It features dynamic typing animation,
        modular navigation, responsive layout, and project detail
        pages crafted for both aesthetics and performance.
      </p>
    </div>
  </div>
</div>
          {/* 下方: 技术、特性、挑战、联系方式 */}
       <div className="info-box nes-container is-rounded">
  <h3>⚙️ Tech Stack</h3>
  <div className="lists">
    <ul className="nes-list is-disc">
      <li>Frontend: React, React Router, JSX, CSS Modules</li>
      <li>UI Components: Custom reusable (ButtonCard, ForkmeCard)</li>
      <li>Styling: CSS Animations, Flexbox, Media Queries</li>
      <li>Build Tool: Vite</li>
      <li>Hosting: Vercel</li>
      <li>Other Tools: GitHub, Visual Studio Code</li>
    </ul>
  </div>
</div>

<div className="info-box nes-container is-rounded">
  <h3>🌟 Key Features</h3>
  <div className="lists">
    <ul className="nes-list is-circle">
      <li>Smooth typing animation introducing the developer.</li>
      <li>Interactive ButtonCard navigation for each project.</li>
      <li>Responsive layout optimized for all devices.</li>
      <li>Modular routing with individual project pages.</li>
      <li>Custom footer with live local time and links.</li>
      <li>NES-inspired pixel-style contact section.</li>
    </ul>
  </div>
</div>


            <div className="info-box nes-container is-rounded contact-box">
              <h3>📬 Contact</h3>
              <p>If you’d like to connect or collaborate, feel free to reach out:</p>
              <p>
                <strong>📧 tianyuu10@gmail.com</strong>
              </p>

              <button
                className="nes-btn is-primary"
                onClick={navigateBack}
              >
                ← Back to Portfolio
              </button>
            </div>
          </div>
        
      </main>
    </div>
  );
}
