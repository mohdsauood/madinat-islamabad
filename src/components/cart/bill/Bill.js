import React from 'react';
import styles from './Bill.module.css';

export default function Bill() {
  return (
    <section className={styles.sec}>
      <h5 className={`tCapitalize tLg tBlack`}>Bill Details</h5>
      <div className={`${styles.total} tM tBlack`}>
        <p>Item Total</p>
        <p className="tUpperCase karla ">40 AED</p>
      </div>
      <div className={`${styles.dFee} tM tDarkGray`}>
        <p>Delivery Fee</p>
        <p className="tUpperCase karla ">0 AED</p>
      </div>
      <div className={`${styles.pay} tM tBlack`}>
        <p>To Pay</p>
        <p className="tUpperCase karla tBold">40 AED</p>
      </div>
    </section>
  );
}
