"use client";

import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  if (isScrolled == true) {
    return <About />;
  }
  return (
    <>
      <main className={`${styles.main} ${!isScrolled && styles.fadeIn}`}>
        <div className={styles.about}>
          <p className={styles.aboutTextBlurb}>
            Stanford Development Solutions makes the most of your
          </p>
          <p className={styles.space}>space</p>
          <p className={styles.aboutOnTheWeb}>on the web.</p>
        </div>
      </main>
    </>
  );
}

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);
  return (
    <div
      id="aboutSection"
      className={`${styles.aboutPage} ${isScrolled && styles.fadeIn}`}
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
    </div>
  );
}
