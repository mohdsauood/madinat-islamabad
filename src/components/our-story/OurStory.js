import React from 'react';
import Link from 'next/link';
import styles from './OurStory.module.css';
export default function OurStory() {
  return (
    <div className={styles.div}>
      <h2 className={`xtBold xkarla xtBlack ${styles.title}`}>Our Story</h2>
      <h2 className={styles.content}>
        A legacy of Authentic Arabic cuisine So we had this passion. Food. And
        we love preparing Arabic dishes developed by our ancestors and handed
        down to generations. In 2001, our passion became a restaurant. We named
        it Bait Al Mandi which means “House of Mandi”. People love us not only
        because we are one of the highly acclaimed homegrown brand in the UAE
        but because we serve great food.
      </h2>
      <div className={styles.linkDiv}>
        <Link href="/about">
          <>
            <a className={`${styles.link}`}>About us</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              className={styles.linkSvg}
              viewBox="0 0 24 24">
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </>
        </Link>
      </div>
    </div>
  );
}
