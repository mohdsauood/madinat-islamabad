import React from 'react';
import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copy__p}>© copyright</p>
      <p className={styles.footer__name__p}>Madinat Islamabad 2020</p>
    </footer>
  );
}
