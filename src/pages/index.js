import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { useState, useCallback, useRef } from "react";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

function HomeContent() {
  return (
    <>
      <div className={styles.homeOrganizer}>
        <div className={styles.contentBoxHome}>
          <img
            className={styles.kadeImage}
            src="/kadeProRemoved.png"
            alt="kade"
          />
          <h1 className={styles.title}>Kade Stanford</h1>
          <h2 className={styles.subtitle_two}>Web Developer & Designer</h2>
        </div>
        <div className={styles.contentBoxHome_two}>
          <h1 className={styles.title}>Need a website?</h1>
          <h2 className={styles.subtitle_two}>I&#39;ve got you covered.</h2>
          <p className={styles.homeText}>If you need a website for your</p>
          <li className={styles.list}>Business</li>
          <li className={styles.list}>Organization</li>
          <li className={styles.list}>Personal Projects</li>
          <li className={styles.list}>etc...</li>

          <p className={styles.homeText}>
            I&#39;m here to help your dreams turn into reality.
          </p>
        </div>
      </div>
    </>
  );
}

function ContactContent() {
  return (
    <div className={styles.contentBoxContact}>
      <form className={styles.contactForm}>
        <h1 className={styles.title}>Have a Question?</h1>
        <p className={styles.subtitle_two}>Send me an email!</p>

        <input className={styles.contactInput} type="text" placeholder="Name" />
        <input
          className={styles.contactInput}
          type="text"
          placeholder="Email"
        />
        <textarea
          className={styles.contactTextArea}
          type="text"
          placeholder="Message"
        />
        <button className={styles.contactButton}>Send</button>
      </form>
      <div className={styles.contactInfo}>
        <h1 className={styles.title}>Contact Info</h1>
        <div className={styles.contactInfoBox}>
          <img className={styles.contactIcon} src="/email.png" />
          <p className={styles.subtitle_contact}>
            stanforddevcontact@gmail.com
          </p>
        </div>
        <div className={styles.contactInfoBox}>
          <a
            className={styles.contactLink}
            href="https://www.linkedin.com/in/kade-stanford-257917273/"
            target="_blank"
          >
            <img className={styles.contactIcon} src="/linkd.png" />
            <p className={styles.subtitle_linkd}>Kade Stanford</p>
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectsContent() {
  return (
    <div className={styles.contentBoxProject}>
      <h1 className={styles.title}>Click to visit a site!</h1>

      <div className={styles.projectOrganizer}>
        <div className={styles.projectBox}>
          <a href="https://libertyhousespecialties.com/" target="_blank">
            <h1 className={styles.title}>Liberty House Specialties</h1>
            <img className={styles.projectImage} src="/libhouse.png" />
            <p className={styles.homeText}>
              A website for a local morning specialties shop. Built with React
              and Next.js.
            </p>
          </a>
        </div>
        <div className={styles.projectBox}>
          <a href="https://atlas-it.vercel.app/" target="_blank">
            <h1 className={styles.title}>Atlas IT</h1>
            <img className={styles.projectImage} src="/atlas.png" />
            <p className={styles.homeText}>
              A website I created for a local IT company. Built with React and
              Next.js.
            </p>
          </a>
        </div>
        <div className={styles.projectBox}>
          <a href="https://foodfate.vercel.app/" target="_blank">
            <h1 className={styles.title}>Food Fate</h1>
            <img className={styles.projectImage} src="/foodfate.png" />
            <p className={styles.homeText}>
              A practice website to randomly choose a nearby restaurant for you.
              Built with React and Next.js and using the Google Maps and Places
              API
            </p>
          </a>
        </div>

        <div className={styles.projectBox}>
          <a href="https://fit-fuel.vercel.app/" target="_blank">
            <h1 className={styles.title}>Fit-Fuel</h1>
            <img className={styles.projectImage} src="/fitfuel.png" />
            <p className={styles.homeText}>
              A practice website I created for a fake gym. Built with React and
              Next.js.
            </p>
          </a>
        </div>

        <div className={styles.projectBox}>
          <a href="https://bigeat.vercel.app/" target="_blank">
            <h1 className={styles.title}>Big Eats</h1>
            <img className={styles.projectImage} src="/bigeat.png" />
            <p className={styles.homeText}>
              A practice website I created for a fake restaurant. Built with
              React and Next.js.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [page, setPage] = useState("home");

  function changePage(newPage) {
    setPage(newPage);
  }

  useEffect(() => {
    document.title = `StanfordDev - ${page[0].toUpperCase()}${page.slice(1)}`;
  }, [page]);

  return (
    <>
      <Head>
        <title>StanfordDev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.sideBar}>
          <div className={styles.sideBarContent}>
            <img className={styles.sideBarImage} src="/logoSDS.png" />
            <div className={styles.sideBarButtonBox}>
              <button
                className={styles.sideBarButton}
                onClick={() => changePage("home")}
              >
                Home
              </button>
              <button
                className={styles.sideBarButton}
                onClick={() => changePage("contact")}
              >
                Contact
              </button>
              <button
                className={styles.sideBarButton}
                onClick={() => changePage("projects")}
              >
                Projects
              </button>
            </div>
          </div>
        </div>
        <div className={styles.pageContent}>
          <div className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Stanford Development Solutions</h1>
          </div>
          <div className={styles.pageMain}>
            {page === "home" && <HomeContent />}
            {page === "contact" && <ContactContent />}
            {page === "projects" && <ProjectsContent />}
          </div>
        </div>
      </main>
    </>
  );
}
