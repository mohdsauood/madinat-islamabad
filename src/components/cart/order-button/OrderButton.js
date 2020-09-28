import React from 'react';
import styles from './OrderButton.module.css';
export default function OrderButton() {
  return (
    <section className={styles.sec}>
      <div className={`${styles.mobile} tM`}>Enter Mobile No</div>
      <div className={`${styles.order} tM`}>Place Order</div>
    </section>
  );
}
