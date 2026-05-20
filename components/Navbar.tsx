"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <a href="#" className={styles.logoContainer} onClick={handleLinkClick}>
          <div className={styles.logoIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#070708"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
              <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
              <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
              <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
            </svg>
          </div>
          <span className={styles.logoText}>Oncius</span>
        </a>

        <ul className={styles.navLinks}>
          <li>
            <a href="#services" onClick={handleLinkClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#tech" onClick={handleLinkClick}>
              Technology
            </a>
          </li>
          <li>
            <a href="#faqs" onClick={handleLinkClick}>
              FAQs
            </a>
          </li>
        </ul>

        <div className={styles.rightActions}>
          <a href="#contact" className={styles.signIn}>
            Sign In
          </a>
          <a href="#contact" className={styles.ctaBtn}>
            Get Started
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className={styles.menuBtn}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileOpen : ""
        }`}
      >
        <ul className={styles.mobileLinks}>
          <li>
            <a href="#services" onClick={handleLinkClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#tech" onClick={handleLinkClick}>
              Technology
            </a>
          </li>
          <li>
            <a href="#faqs" onClick={handleLinkClick}>
              FAQs
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleLinkClick}
              style={{
                display: "inline-block",
                marginTop: "1.5rem",
                padding: "0.8rem 1.8rem",
                background: "linear-gradient(135deg, #00f5d4, #00bbf9)",
                color: "var(--bg)",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "0.85rem",
                borderRadius: "99px",
                border: "none",
                width: "100%",
              }}
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
