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
    name: "Next.js & React",
    category: "Frontend Stack",
    desc: "Building highly interactive, SEO-optimized, and lightning fast server-side rendered interfaces.",
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
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="M12 6v12"></path>
        <path d="M8 10h8"></path>
      </svg>
    ),
  },
  {
    name: "PyTorch & ML Models",
    category: "AI Engineering",
    desc: "Developing custom neural networks, fine-tuning large language models, and predictive algorithms.",
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
        <path d="M12 2v20"></path>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    name: "Node.js & Go",
    category: "Scalable Backend",
    desc: "Asynchronous backend runtimes designed to orchestrate complex APIs with high concurrent traffic.",
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
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
      </svg>
    ),
  },
  {
    name: "Docker & Kubernetes",
    category: "DevOps & Containers",
    desc: "Containerizing platforms to guarantee absolute identical environment behavior across dev and production.",
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
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    name: "AWS & GCP Cloud",
    category: "Infrastructure",
    desc: "Deploying fault-tolerant virtual private networks, auto-scaling clusters, and serverless architectures.",
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
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
    ),
  },
  {
    name: "Python & FastAPI",
    category: "API Orchestration",
    desc: "Building highly documented, type-safe API servers backed by Python speed and Pydantic validation.",
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
        <path d="m10 16 6-6-6-6"></path>
        <path d="m14 16-6-6 6-6"></path>
      </svg>
    ),
  },
];

const MARQUEE_SKILLS = [
  "Consulting",
  "Development",
  "Strategy",
  "Integration",
  "Quality Assurance",
  "Support",
  "Management",
  "Staffing",
  "Machine Learning",
  "Cloud Compute",
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
            Our <em>tech stack</em>
          </h2>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeList}>
          {skillsList.map((skill, idx) => (
            <span key={idx}>{skill}</span>
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
