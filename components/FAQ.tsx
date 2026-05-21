"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
  q: string;
  a: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    q: "How do you guarantee custom model accuracy and minimize false positives?",
    a: "Model accuracy is governed by dataset quality and testing rigor. We establish strict offline evaluation loops, utilizing target verification sets with cross-validation protocols. By tuning confidence thresholds and precision-recall curves (mAP), we optimize predictions for your specific operational constraints before deploying.",
  },
  {
    q: "Can you deploy models to execute fully on edge devices with zero internet connection?",
    a: "Yes. We specialize in edge-native AI. By compiling deep learning models via TensorRT or ONNX Runtime and deploying on specialized hardware like NVIDIA Jetson Orin modules or custom embedded compute boards, we achieve sub-millisecond local processing. This eliminates cloud bandwidth costs and ensures robust, zero-downtime operation.",
  },
  {
    q: "How do you handle dataset collection, annotation, and data privacy constraints?",
    a: "We design secure dataset curation workflows. We can ingest raw camera feeds, implement automated face/license-plate blurring to ensure compliance, and securely manage high-precision bounding box or segmentation annotation loops using CVAT. All assets are handled within isolated, encrypted sandboxes.",
  },
  {
    q: "What is your typical timeline for delivering a functional model or pipeline PoC?",
    a: "We work rapidly. We can typically ingest your preliminary dataset, benchmark a pre-trained baseline model, and deliver a fully functional pipeline Proof of Concept (PoC) in 7 to 10 business days. This allows you to validate real-world latency, throughput, and baseline precision before committing to full-scale training.",
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
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
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

