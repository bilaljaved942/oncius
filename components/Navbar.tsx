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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/oncius_logo_dark.png" alt="Oncius Logo" className={styles.logoImg} />
        </a>

        <ul className={styles.navLinks}>
          <li>
            <a href="#services" onClick={handleLinkClick}>
              Services
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
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>

        <div className={styles.rightActions}>
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
            <a href="#contact" onClick={handleLinkClick}>
              Contact
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
                background: "var(--white)",
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
