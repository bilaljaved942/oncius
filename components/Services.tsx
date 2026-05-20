"use client";

import React, { useState } from "react";
import styles from "./Services.module.css";

interface ServiceData {
  num: string;
  name: string;
  desc: string;
  focus: string;
  stack: string[];
  metrics: string;
}

const SERVICES_LIST: ServiceData[] = [
  {
    num: "01",
    name: "Business Consulting",
    desc: "Strategic guidance to streamline workflows, optimize operations, and expand business reach.",
    focus: "Process re-engineering, scaling pipelines, digital capability assessment.",
    stack: ["Strategic Roadmaps", "Operations Audit", "Growth Frameworks"],
    metrics: "Average 40% efficiency boost",
  },
  {
    num: "02",
    name: "Technology Solutions",
    desc: "Bespoke engineering solutions, API integrations, and scalable software pipelines.",
    focus: "AI/ML modeling, enterprise microservices, digital core transformations.",
    stack: ["Next.js/React", "Node.js", "Python AI Models", "AWS Cloud"],
    metrics: "Sub-100ms API response rates",
  },
  {
    num: "03",
    name: "Project Management",
    desc: "On-time delivery of technical systems through agile management and transparent roadmaps.",
    focus: "Milestone auditing, risk modeling, resource leveling, transparent delivery tracking.",
    stack: ["Agile/Scrum", "Linear Roadmaps", "DevOps Pipeline Synch"],
    metrics: "100% on-time deployment track",
  },
  {
    num: "04",
    name: "Staff Augmentation",
    desc: "Vetted senior engineers and technical architects extending your internal team seamlessly.",
    focus: "Rapid scaling, domain-expert placement, streamlined onboard structures.",
    stack: ["Senior Fullstack Devs", "DevOps Engineers", "AI Researchers"],
    metrics: "Average 5-day talent onboarding",
  },
  {
    num: "05",
    name: "Quality Assurance",
    desc: "Rigorous automation testing and performance analysis to ensure absolute system stability.",
    focus: "Load stress testing, end-to-end integration flows, code regression audits.",
    stack: ["Playwright", "Jest/Cypress", "CI/CD Gate Audits"],
    metrics: "Zero critical bugs in production",
  },
  {
    num: "06",
    name: "Support & Maintenance",
    desc: "Continuous systems maintenance, real-time alert triggers, and regular security patching.",
    focus: "24/7 incident responses, system health checks, zero-downtime standard patches.",
    stack: ["Prometheus/Grafana", "Docker/K8s", "Security Firewalls"],
    metrics: "99.99% operational uptime",
  },
];

const TAG_CLOUD: string[] = [
  "Machine Learning",
  "Data Analytics",
  "Web Development",
  "Mobile Apps",
  "AI Consulting",
  "Cloud Solutions",
  "Blockchain",
  "DevOps Automation",
  "UI/UX Design",
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionTag}>Capabilities</span>
          <h2 className={styles.sectionTitle}>
            Our <em>services</em>
          </h2>
        </div>

        <ul className={styles.serviceList}>
          {SERVICES_LIST.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <li
                key={index}
                className={styles.serviceItem}
                onClick={() => toggleExpand(index)}
              >
                <div className={styles.itemHeader}>
                  <span className={styles.sNum}>{service.num}</span>
                  <span className={styles.sName}>{service.name}</span>
                  <span className={styles.sDesc}>{service.desc}</span>
                  <span className={styles.sArrow}>→</span>
                </div>

                <div
                  className={`${styles.itemDetails} ${
                    isExpanded ? styles.expandedDetails : ""
                  }`}
                  onClick={(e) => e.stopPropagation()} // Prevent closing on detail click
                >
                  <div className={styles.detailsGrid}>
                    <div className={styles.detailCol}>
                      <h4>Focus Area</h4>
                      <p>{service.focus}</p>
                    </div>
                    <div className={styles.detailCol}>
                      <h4>Preferred Stack</h4>
                      <ul>
                        {service.stack.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.detailCol}>
                      <h4>Impact Indicator</h4>
                      <p
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "700",
                          color: "var(--white)",
                        }}
                      >
                        {service.metrics}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Tag Cloud */}
        <div className={styles.tagCloudSection}>
          <h3 className={styles.tagCloudTitle}>Strategic Technologies</h3>
          <div className={styles.tagList}>
            {TAG_CLOUD.map((tag, idx) => (
              <div key={idx} className={styles.tagItem}>
                <span className={styles.tagStar}>✦</span>
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
