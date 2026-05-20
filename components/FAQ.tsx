"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
  q: string;
  a: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    q: "How does Oncius ensure the quality of its custom software developments?",
    a: "We implement an elite DevOps workflow incorporating strict automated Playwright/Jest testing gates in our CI/CD pipelines. Every code integration is checked for regressions and performance drops prior to merging, keeping our delivery standard at zero-critical bug thresholds.",
  },
  {
    q: "What is your onboarding and engagement timeline?",
    a: "For staff augmentation, we can onboard vetted senior technical engineers in an average of 5 days. For full-scale custom solution consulting, we typically complete discovery in 1 week, deliver a detailed architecture blueprint, and start execution within 10 days of alignment.",
  },
  {
    q: "Do you offer post-deployment maintenance and updates?",
    a: "Yes. Every custom delivery includes an optional 24/7 support retainer. We set up active Prometheus and Grafana alerts to monitor system health and guarantee a 99.99% operational uptime standard with zero-downtime hot-patches.",
  },
  {
    q: "Can you assist in upgrading legacy platforms with AI integrations?",
    a: "Absolutely. We specialize in digital transformation. We can audit your legacy database/infrastructure, build custom API adapters (typically using highly documented FastAPI or Node.js), and seamlessly introduce machine learning models or LLMs without disrupting your live services.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className={styles.faqSection} id="faqs">
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionTag}>Faqs</span>
          <h2 className={styles.sectionTitle}>
            Common <em>questions</em>
          </h2>
        </div>

        <ul className={styles.faqList}>
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <li
                key={index}
                className={`${styles.faqItem} ${
                  isOpen ? styles.faqActive : ""
                }`}
              >
                <button
                  className={styles.questionHeader}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className={styles.chevron}>
                    {isOpen ? "▲" : "▼"}
                  </span>
                </button>

                <div
                  className={`${styles.answerBox} ${
                    isOpen ? styles.answerActive : ""
                  }`}
                >
                  <p>{faq.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
