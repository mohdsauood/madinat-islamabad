import React from 'react';
import styles from './ViewCartButton.module.css';

import { useCartState } from '../../../context/cart-provider-context/cart-provider-context';
export default function ViewCartButton() {
  const cartState = useCartState();
  return (
    cartState.length > 0 && (
      <button
        className={`${styles.viewCartBtn} btn btnPrimary btnGreen ${styles.show}`}>
        <p className={styles.viewCartBtn__price}>1 item | 4 AED</p>
        <p className={styles.viewCartBtn__cart}>View cart</p>
      </button>
    )
  );
}
