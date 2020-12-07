import React from 'react';
import Link from 'next/link';
import styles from './OurStory.module.css';
export default function OurStory() {
  return (
    <>
      <div className={styles.divx}>
        <h2 className={`xtBold xkarla xtBlack ${styles.title}`}>
          <svg
            className={styles.titleLogo}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24">
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
          Our Story
        </h2>
        <h2 className={styles.content}>
          Madinat islamabad is a result of family's passion for food and mouth
          watering authentic pakistani/indian recipes prepared with dedication
          and love. We pride ourselves on creating authentic food and an
          experience that will leave an imprint on our guests who order food or
          come to visit us . Our recipe for success is simple – prepare our food
          with love and treat our customers like family, giving them the most
          authentic experience that is second to none.
        </h2>
        <div className={styles.linkDiv}>
          <Link href="/about">
            <span>
              <a className={`${styles.link}`}>About us</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                className={styles.linkSvg}
                viewBox="0 0 24 24">
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
