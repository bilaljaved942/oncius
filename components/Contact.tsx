"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    
    // Simulate API submission
    setSubmitted(true);
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.ctaBg}></div>
      <div className={styles.ctaRadial}></div>

      <div className={styles.container}>
        <div className={styles.ctaHead}>
          <h2>
            Let&apos;s build<br />
            something <em><strong>great</strong></em>
          </h2>
          <p>Ready to accelerate your visual AI product? Contact our engineering team to schedule a technical discovery call.</p>
        </div>

        <div className={styles.contactGrid}>
          {/* Glassmorphic Form */}
          <div className={styles.formBox}>
            {submitted ? (
              <div className={styles.successMsg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 8 12 12 14 14"></polyline>
                </svg>
                <h3>Message Logged Successfully</h3>
                <p style={{ marginTop: "1rem", color: "var(--gray)", fontSize: "0.88rem" }}>
                  Thank you! A senior Computer Vision architect will review your project requirements 
                  and reach back to schedule a technical discovery call within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Bilal"
                    className={styles.formInput}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. hello@oncius.com"
                    className={styles.formInput}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="project">Project Specifications</label>
                  <textarea
                    id="project"
                    rows={4}
                    placeholder="Describe your model goals, inference constraints, annotation scale, and camera streaming requirements..."
                    className={styles.formInput}
                    style={{ resize: "vertical" }}
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                  />
                </div>

                <button type="submit" className={styles.btnSubmit}>
                  <span>Send Specifications</span>
                  <span>→</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Side */}
          <div className={styles.infoBox}>
            <div className={styles.infoDetails}>
              <div className={styles.cBlock}>
                <label>Direct Email</label>
                <span>hello@oncius.com</span>
              </div>
              <div className={styles.cBlock}>
                <label>Technical Hotline</label>
                <span>+92 (340) 5744-852</span>
              </div>
              <div className={styles.cBlock}>
                <label>HQ Operations</label>
                <span>Islamabad, PK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <span>&copy; {new Date().getFullYear()} Oncius. All rights reserved.</span>
          <div className={styles.footerLinks}>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </footer>
      </div>
    </section>
  );
}

