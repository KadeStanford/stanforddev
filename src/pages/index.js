import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  const handleAboutButtonClick = () => {
    const aboutMeElement = document.getElementById("aboutMe");
    aboutMeElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactButtonClick = () => {
    const aboutMeElement = document.getElementById("contactForm");
    aboutMeElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectButtonClick = () => {
    const aboutMeElement = document.getElementById("myProjects");
    aboutMeElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhoButtonClick = () => {
    const aboutMeElement = document.getElementById("whoAmI");
    setTimeout(() => {
      aboutMeElement.scrollIntoView({ behavior: "smooth" });
    }, 300); // Adjust the delay time (in milliseconds) as desired
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get("message");
    const name = formData.get("name");
    const email = formData.get("email");

    try {
      await axios.post("/api/contact", { name, email, message });
      alert("Message sent successfully");
    } catch (error) {
      alert("Failed to send message. Please try again later.");
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>StanfordDev</title>
        <meta name="description" content="Stanford Development Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.containerTop}>
          <div className={styles.mainText}>
            <h1 className={styles.title}>Need a website?</h1>
            <h2 className={styles.subtitle}>I&#39;ve got you covered.</h2>
          </div>
          <div className={styles.buttonHolder}>
            <button
              className={`${styles.button} ${
                activeSection === "whoAmI" ? styles.activeButton : ""
              }`}
              onClick={() => {
                handleWhoButtonClick();
                setActiveSection("whoAmI");
              }}
            >
              Who am I?
            </button>
            <button
              className={`${styles.button} ${
                activeSection === "aboutMe" ? styles.activeButton : ""
              }`}
              onClick={() => {
                handleAboutButtonClick();
                setActiveSection("aboutMe");
              }}
            >
              About Me
            </button>
            <button
              className={`${styles.button} ${
                activeSection === "contactForm" ? styles.activeButton : ""
              }`}
              onClick={() => {
                handleContactButtonClick();
                setActiveSection("contactForm");
              }}
            >
              Contact Me
            </button>
            <button
              className={`${styles.button} ${
                activeSection === "myProjects" ? styles.activeButton : ""
              }`}
              onClick={() => {
                handleProjectButtonClick();
                setActiveSection("myProjects");
              }}
            >
              My Projects
            </button>
          </div>
        </div>

        <div id="whoAmI" className={styles.container}>
          <div className={styles.kade}>
            <h1 className={styles.kade__title}>Who am I?</h1>
            <img
              className={styles.kade__image}
              src="/images/kadepro.jpg"
              alt="kade"
            />
            <p className={styles.kade__text}>Kade Stanford</p>
            <p className={styles.kade__text}>
              full-time student and web developer / designer
            </p>
          </div>
        </div>

        <div id="aboutMe" className={styles.container}>
          <div className={styles.aboutme}>
            <h3 className={styles.aboutme__title}>About Me</h3>

            <p className={styles.aboutme__text}>
              I love working with clients 1 on 1 to develop stunning websites
              that will make you say:
            </p>
            <img className={styles.quote} src="/images/text.png" alt="quote" />
          </div>
        </div>

        <div id="contactForm" className={styles.containerContact}>
          <h1 className={styles.contactForm__title}>Contact Me</h1>
          <div className={styles.contactFormWhole}>
            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit}>
                <h3 className={styles.contactForm__header}>
                  Send me an e-mail right from here!
                </h3>
                <div className={styles.form}>
                  <label htmlFor="name">Name:</label>
                  <input id="name" name="name" type="text" required />

                  <label htmlFor="email">Your Contact Email:</label>
                  <input id="email" name="email" type="email" required />

                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" required></textarea>
                  <button className={styles.buttonSend} type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.contactSocials}>
              <h3 className={styles.contactSocials__header}>
                Or find me here:
              </h3>
              <div className={styles.socials}>
                <a
                  href="https://www.linkedin.com/in/kade-stanford-257917273/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={styles.socials__image}
                    src="/images/linkd.svg"
                    alt="linkedin"
                  />
                </a>

                <a
                  href="
                  https://github.com/KadeStanford"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={styles.socials__image}
                    src="\images\github.svg"
                    alt="github"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="myProjects" className={styles.containerContact}>
          <h3 className={styles.myProjects__title}>My Projects</h3>
          <div className={styles.myProjects}>
            <div className={styles.myProjects__projects}>
              <div className={styles.myProjects__project}>
                <h4 className={styles.myProjects__project__title}>
                  <a
                    href="https://atlas-it.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    *NEW* Click here to visit: Atlas IT Solutions
                  </a>
                </h4>
                <p className={styles.myProjects__project__text}>
                  A minimalist website for an IT solutions firm.
                </p>
              </div>
              <div className={styles.myProjects__project}>
                <h4 className={styles.myProjects__project__title}>
                  <a
                    href="https://bigeat.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    *NEW* Click here to visit: Big Eats
                  </a>
                </h4>
                <p className={styles.myProjects__project__text}>
                  A practice site I made for a fake restaurant.
                </p>
              </div>
              <div className={styles.myProjects__project}>
                <h4 className={styles.myProjects__project__title}>
                  <a
                    href="https://www.libertyhousespecialties.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to visit: Liberty House Specialties
                  </a>
                </h4>
                <p className={styles.myProjects__project__text}>
                  A website I created for a local business. Created using
                  Next.JS.
                </p>
              </div>
              <div className={styles.myProjects__project}>
                <h4 className={styles.myProjects__project__title}>
                  <a
                    href="https://foodfate.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to visit: Food Fate
                  </a>
                </h4>
                <p className={styles.myProjects__project__text}>
                  A fun website I created that uses googleMaps API to find
                  resturants nearby and picks one at random.
                </p>
              </div>
              <div className={styles.myProjects__project}>
                <h4 className={styles.myProjects__project__title}>
                  <a
                    href="https://fit-fuel.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to visit: Fit-Fuel
                  </a>
                </h4>
                <p className={styles.myProjects__project__text}>
                  A fake gym website I created using Next.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
