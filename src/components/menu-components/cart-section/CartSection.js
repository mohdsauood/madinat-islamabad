import React from 'react';
import styles from './CartSection.module.css';

export default function CartSection() {
  return (
    <section className={styles.cartSection}>
      <h2 className={styles.cartSection__h2}>CART EMPTY</h2>
      <div className={styles.cartSection__div}></div>
      <p className={styles.cartSection__p}>
        Good food is always cooking ! go ahead , order some yummy items from the
        menu
      </p>
    </section>
  );
}
