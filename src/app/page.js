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
          <p className={styles.aboutText}> Scroll Down</p>
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="aboutSection"
      className={`${styles.aboutPage} ${isScrolled && styles.fadeIn}`}
      style={isScrolled ? { display: "flex" } : { display: "none" }}
    >
      <h1 className={styles.aboutus}>I am Kade Stanford </h1>
      <p className={styles.aboutblurb}>founder of Stanford Development Solutions</p>
      <p className={styles.aboutblurb}>&</p>
      <p className={styles.aboutblurb}>a developer with a commitment to your vision</p>

      <div className={styles.projects}>
        <h2 className={styles.projectsTitle}>Projects</h2>
        <li className={styles.projectsText}><a href="https://www.libertyhousespecialties.com">Liberty House Specialties</a></li>
        <li className={styles.projectsText}><a href="https://foodfate.vercel.app">FoodFate</a></li>
</div>

      <div className={styles.education}>
        <h2 className={styles.educationTitle}>Education</h2>
        <p className={styles.educationText}>Southeastern Louisiana University</p>

        <p className={styles.educationText}>Class of 2025 - Information Technology
        </p>

        <p className={styles.educationText}>CMPS Classes:</p>
        <p className={styles.spacer}> </p>
        <li className={styles.educationText}>CMPS 161 - Algorithm Design and Implementation I</li>
        <p className={styles.spacer}> </p>
        <li className={styles.educationText}>CMPS 235 - Website Design and Construction</li>
        <p className={styles.spacer}> </p>
        <li className={styles.educationText}>CMPS 257 - Discrete Structures</li>
        <p className={styles.spacer}> </p>
        <li className={styles.educationText}>CMPS 280 - Algorithm Design and Implementation II</li>
        <p className={styles.spacer}> </p>
        <li className={styles.educationText}>CMPS 285 - Software Engineering</li>
        <p className={styles.spacer}></p>
        <li className={styles.educationText}>CMPS 290 - Computer Organization</li>
        <p className={styles.spacer}> </p>
        <li className={styles.educationText}>CMPS 390 - Data Structures</li>
        <p className={styles.spacer}> </p>
        </div>

        

<div className={styles.contact}>
        <h2 className={styles.contactTitle}>Contact</h2>
        <li className={styles.contactText}><a href="mailto:stanfordevcontact@gmail.com">Send me an E-mail</a></li>
        <li className={styles.contactText}><a href="https://github.com/KadeStanford">My Github</a></li>
      
</div>
    </div>
  );
}