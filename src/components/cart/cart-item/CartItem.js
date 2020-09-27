import React from 'react';
import styles from './CartItem.module.css';

export default function CartItem() {
  return (
    <section className={styles.itemSec}>
      <div className={styles.infoDiv}>
        <h5 className={`${styles.itemTitle} tCapitalize tLg tBlack`}>
          combo for 2
        </h5>
        <p className={`${styles.itemDesc} tM tDarkGray`}>
          {' '}
          4 plain roti . chana masala 2 pepi
        </p>
        <p className={`${styles.itemPrice} tSm tBold tUpperCase karla`}>
          {' '}
          AED 24.53
        </p>
      </div>
      <button className={`${styles.itemBtn} btn btnPrimary`}>
        <span>-</span>1<span>+</span>
      </button>
    </section>
  );
}
