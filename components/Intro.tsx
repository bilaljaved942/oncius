"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./Intro.module.css";

const INTRO_TEXT = "Your business deserves premium innovation, and it needs cutting-edge software systems to stay ahead in an AI-driven market. That is why we engineer high-performance platforms at Oncius.";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate fraction of container scrolling through viewport
      // Starts when container's top reaches 85% of screen height
      // Finishes when container's bottom reaches 15% of screen height
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.15;
      
      const elementHeight = rect.height;
      const elementTop = rect.top;
      
      const totalDist = start - end + elementHeight;
      const currentDist = start - elementTop;
      
      let progress = currentDist / totalDist;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = INTRO_TEXT.split(" ");
  const totalWords = words.length;

  return (
    <section ref={containerRef} className={styles.introSection} id="about">
      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.star}>✦</span>
          <span>Emergent Tech Partner</span>
        </div>

        <h2 className={styles.introText}>
          {words.map((word, i) => {
            // Determine active highlight state based on scroll fraction
            const wordThreshold = i / totalWords;
            const isHighlighted = scrollProgress > wordThreshold;
            const isLastWord = i >= totalWords - 3; // "at Oncius" accentuation

            return (
              <span
                key={i}
                className={`${styles.word} ${
                  isHighlighted ? styles.highlighted : ""
                } ${isHighlighted && isLastWord ? styles.accent : ""}`}
              >
                {word}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
