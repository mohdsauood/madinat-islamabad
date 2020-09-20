import React from 'react';
import styles from './HeroSection.module.css';
export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <p className={styles.heroSection__p}>serving breakfast till 11:40 am .</p>
      <a className={`btn btnPrimary ${styles.heroSection__button}`}>
        order now
      </a>
    </section>
  );
}
