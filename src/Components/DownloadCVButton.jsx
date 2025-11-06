import React from "react";
import styles from "./DownloadCVButton.module.css";

export default function DownloadCVButton() {
  return (
    <a
      href="/Tianyu-He-FlowCV.pdf" 
      download="Tianyu-He-CV.pdf"
      className={styles["download-card"]}
    >
      📄 Download My CV
    </a>
  );
}