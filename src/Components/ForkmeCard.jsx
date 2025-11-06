import React, { useState, useEffect } from "react";
import "./ForkmeCard.scss";
import "nes.css/css/nes.min.css"

export default function ForkmeCard({ title , link , className }) {
  const [scrollPos, setScrollPos] = useState(0);
  const [animateOctocat, setAnimateOctocat] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`forkme-wrapper ${className || ""}`}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`github-link ${scrollPos < 200 ? "active" : ""}`}
        onMouseOver={() => setAnimateOctocat(true)}
        onMouseOut={() => setAnimateOctocat(false)}
      >
        <p className="nes-balloon from-right">
          {title.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <i className={`nes-octocat ${animateOctocat ? "animate" : ""}`}></i>
      </a>
    </div>
  );
}
