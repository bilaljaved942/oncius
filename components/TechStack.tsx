import React from "react";
import styles from "./TechStack.module.css";

interface TechItem {
  name: string;
  category: string;
  desc: string;
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: "PyTorch & Custom Deep Learning",
    category: "Model Development",
    desc: "Our primary framework for designing custom neural networks, fine-tuning pre-trained backbones, and building state-of-the-art vision models.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="5" r="2.5"></circle>
        <circle cx="5" cy="12" r="2.5"></circle>
        <circle cx="19" cy="12" r="2.5"></circle>
        <circle cx="12" cy="19" r="2.5"></circle>
        <line x1="12" y1="7.5" x2="5" y2="9.5"></line>
        <line x1="12" y1="7.5" x2="19" y2="9.5"></line>
        <line x1="5" y1="14.5" x2="12" y2="16.5"></line>
        <line x1="19" y1="14.5" x2="12" y2="16.5"></line>
        <line x1="12" y1="7.5" x2="12" y2="16.5"></line>
      </svg>
    ),
  },
  {
    name: "OpenCV & GStreamer Pipelines",
    category: "Image Processing",
    desc: "Efficient live frame ingestion, matrix transformations, hardware-accelerated RTSP streams, and high-throughput video processing pipelines.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
      </svg>
    ),
  },
  {
    name: "TensorRT & ONNX Compiler",
    category: "Inference Optimization",
    desc: "Compiling models to dedicated GPU structures, executing layer fusion, and quantizing weights to FP16/INT8 for sub-millisecond execution.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    name: "NVIDIA CUDA & Triton Server",
    category: "High-Performance Compute",
    desc: "Direct GPU computing to accelerate heavy tensor operations and scaling concurrent inference pipelines across cloud GPU servers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
  },
  {
    name: "NVIDIA Jetson Edge Devices",
    category: "Embedded Hardware",
    desc: "Deploying highly optimized deep learning models directly on low-power Orin modules for zero-network embedded applications.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
        <rect width="6" height="6" x="9" y="9" rx="1"></rect>
        <path d="M9 1v3"></path>
        <path d="M15 1v3"></path>
        <path d="M9 20v3"></path>
        <path d="M15 20v3"></path>
        <path d="M20 9h3"></path>
        <path d="M20 15h3"></path>
        <path d="M1 9h3"></path>
        <path d="M1 15h3"></path>
      </svg>
    ),
  },
  {
    name: "Dataset Curation & CVAT Tools",
    category: "Data Curation & QA",
    desc: "Implementing automated data-labeling loops, cleaning dataset noise, and applying targeted data augmentations to maximize model recall.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M7 7h10v10H7z"></path>
        <path d="M3 7h4"></path>
        <path d="M17 7h4"></path>
        <path d="M3 17h4"></path>
        <path d="M17 17h4"></path>
      </svg>
    ),
  },
];

const MARQUEE_SKILLS = [
  "Computer Vision",
  "Object Detection",
  "Model Optimization",
  "Edge AI",
  "Inference Scaling",
  "Video Analytics",
  "Dataset Curation",
  "Pose Estimation",
  "Semantic Segmentation",
  "Deep Learning",
];

export default function TechStack() {
  // Repeat skill array three times to create seamless marquee loop
  const skillsList = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS, ...MARQUEE_SKILLS];

  return (
    <section className={styles.techSection} id="tech">
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionTag}>Engineering</span>
          <h2 className={styles.sectionTitle}>
            Our visual AI <em>stack</em>
          </h2>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeList}>
          {skillsList.map((skill, idx) => (
            <span key={idx}>
              <span className={styles.marqueeDot}>✦</span>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.techGrid}>
          {TECH_ITEMS.map((item, idx) => (
            <div key={idx} className={styles.techCard}>
              <div className={styles.cardHead}>
                <div className={styles.techIcon}>{item.icon}</div>
                <span className={styles.techRole}>{item.category}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

