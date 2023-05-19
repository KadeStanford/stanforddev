import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.about}>
          <p className={styles.aboutTextBlurb}>
            Stanford Development Solutions is the web development solution that
            makes the most of your
          </p>
          <p className={styles.space}>space</p>
          <p className={styles.aboutOnTheWeb}>on the web.</p>
        </div>
      </main>
    </>
  );
}
