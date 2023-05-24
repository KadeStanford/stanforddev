"use client";

import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="aboutSection"
      className={`${styles.aboutPage} ${
        isScrolled ? styles.fadeIn : styles.fadeOut
      }`}
    >
      <h1 className={styles.aboutus}>I'm Kade Stanford, </h1>
      <p className={styles.aboutblurb}>
        founder of Stanford Development Solutions
      </p>
      <p className={styles.aboutblurb}>&</p>
      <p className={styles.aboutblurb}>
        a developer with a commitment to your vision
      </p>
      <Image
        className={styles.kadeimage}
        src="/images/1.jpg"
        width={700}
        height={700}
      />
      {isAboutVisible && (
        <div className={styles.scrollIndicator}>Scroll to New Page</div>
      )}
    </div>
  );
}
