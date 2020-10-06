import React from 'react';
import styles from './HeroSection.module.css';
import Link from 'next/link';
export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <p className={styles.heroSection__p}>serving breakfast till 11:40 am .</p>
      <Link href="/menu/roti">
        <a className={`xbtn xbtnPrimary ${styles.heroSection__button}`}>
          order now
        </a>
      </Link>
    </section>
  );
}
