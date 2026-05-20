import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Blueprint grid and mesh glows */}
      <div className={styles.heroGlow}></div>
      <div className={styles.heroGrid}></div>

      <div className={styles.content}>
        {/* Top Centered Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeStar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v18"></path>
              <path d="M3 12h18"></path>
            </svg>
          </span>
          <span>AI-Powered Development Solutions</span>
        </div>

        {/* Main H1 Title */}
        <h1 className={styles.title}>
          We Craft Elite
          <span className={styles.highlight}>Intelligent Software Systems</span>
        </h1>

        {/* Subdescription */}
        <p className={styles.desc}>
          Oncius delivers cutting-edge machine learning integrations and senior software
          engineering that streamline your operations, optimize data flows, and scale
          your business dynamically.
        </p>

        {/* Dual Actions */}
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnSolid}>
            <span>Start Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          <a href="#services" className={styles.btnOutline}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>See How It Works</span>
          </a>
        </div>
      </div>
    </section>
  );
}
