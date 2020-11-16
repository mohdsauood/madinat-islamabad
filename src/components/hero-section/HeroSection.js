import React from 'react';
import styles from './HeroSection.module.css';
import Link from 'next/link';
import TextLoop from 'react-text-loop';
export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <p className={styles.heroSection__p}>
        serving{' '}
        <TextLoop>
          <span>breakfast from 6am .</span>
          <span>lunch from 12 pm .</span>
          <span>dinner from 7pm .</span>
        </TextLoop>
      </p>
      <Link href="/menu/roti">
        <a className={`xbtn xbtnPrimary ${styles.heroSection__button}`}>
          order now
        </a>
      </Link>
    </section>
  );
}
