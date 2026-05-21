import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Soft ambient glows */}
      <div className={styles.heroGlow}></div>
      <div className={styles.heroGrid}></div>

      <div className={styles.container}>
        <div className={styles.heroLayout}>
          {/* Left Column: Visual AI Copy & Actions */}
          <div className={styles.heroLeft}>
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </span>
              <span>Computer Vision & Visual AI Studio</span>
            </div>

            <h1 className={styles.title}>
              Accelerate your visual product with elite <span className="serif-text">Computer Vision</span> engineering.
            </h1>

            <p className={styles.desc}>
              We design, optimize, and deploy high-performance visual intelligence systems. 
              From custom deep learning model training to sub-millisecond edge inference and multi-stream analytics, 
              we build robust vision systems that stand the test of real-world production.
            </p>

            <div className={styles.actions}>
              <a href="#contact" className={styles.btnSolid}>
                <span>Start Visual Project</span>
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
                <span>Our Capabilities</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Developer Portrait + CV Scanning Overlay */}
          <div className={styles.heroRight}>
            <div className={styles.imageWrapper}>
              {/* Outer Bounding Box Corners */}
              <div className={`${styles.corner} ${styles.topLeft}`}></div>
              <div className={`${styles.corner} ${styles.topRight}`}></div>
              <div className={`${styles.corner} ${styles.bottomLeft}`}></div>
              <div className={`${styles.corner} ${styles.bottomRight}`}></div>

              {/* Glowing Laser Scanline */}
              <div className={styles.scanline}></div>

              {/* The Hero Developer Portrait */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/developer_hero.png"
                alt="Expert AI Engineer"
                className={styles.heroImg}
              />

              {/* Glowing Keypoint Overlays representing Pose Estimation / Keypoints */}
              <div className={`${styles.keypoint} ${styles.kpHead}`} style={{ top: "30%", left: "47%" }}></div>
              <div className={`${styles.keypoint} ${styles.kpShoulderL}`} style={{ top: "45%", left: "32%" }}></div>
              <div className={`${styles.keypoint} ${styles.kpShoulderR}`} style={{ top: "42%", left: "62%" }}></div>
              <div className={`${styles.keypoint} ${styles.kpChest}`} style={{ top: "54%", left: "48%" }}></div>

              {/* Floating Prediction Classification Badge */}
              <div className={styles.predictionBadge}>
                <span className={styles.blinkDot}></span>
                <span className={styles.predictionText}>[Class: AI_Engineer] conf: 99.85%</span>
              </div>

              {/* Floating Stats / Telemetry Badge */}
              <div className={styles.statsBadge}>
                <div className={styles.statsRow}>
                  <span className={styles.statsLabel}>INFERENCE</span>
                  <span className={styles.statsVal}>1.2ms</span>
                </div>
                <div className={styles.statsRow}>
                  <span className={styles.statsLabel}>STREAM_RATE</span>
                  <span className={styles.statsVal}>120 FPS</span>
                </div>
                <div className={styles.statsRow}>
                  <span className={styles.statsLabel}>ENGINE</span>
                  <span className={styles.statsVal}>TENSORRT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Computer Vision Integration / Framework Bar */}
        <div className={styles.frameworkBar}>
          <p className={styles.frameworkTitle}>ENGINEERED WITH HIGH-PERFORMANCE VISUAL AI FRAMEWORKS</p>
          <div className={styles.frameworkGrid}>
            <div className={styles.frameworkItem}>
              <span className={styles.fwIndicator}></span>
              <span className={styles.fwText}>PyTorch</span>
            </div>
            <div className={styles.frameworkItem}>
              <span className={styles.fwIndicator}></span>
              <span className={styles.fwText}>OpenCV</span>
            </div>
            <div className={styles.frameworkItem}>
              <span className={styles.fwIndicator}></span>
              <span className={styles.fwText}>TensorRT</span>
            </div>
            <div className={styles.frameworkItem}>
              <span className={styles.fwIndicator}></span>
              <span className={styles.fwText}>ONNX Runtime</span>
            </div>
            <div className={styles.frameworkItem}>
              <span className={styles.fwIndicator}></span>
              <span className={styles.fwText}>NVIDIA CUDA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

