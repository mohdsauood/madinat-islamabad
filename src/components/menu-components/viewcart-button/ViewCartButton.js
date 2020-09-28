import React from 'react';
import styles from './ViewCartButton.module.css';
import Link from 'next/link';

import { useCartState } from '../../../context/cart-provider-context/cart-provider-context';
export default function ViewCartButton() {
  const cartState = useCartState();
  let totalItems = cartState.reduce((accum, fooditem) => {
    return accum + fooditem.quantity;
  }, 0);
  totalItems = totalItems > 1 ? `${totalItems} items` : `${totalItems} item`;
  let totalPrice = cartState.reduce((accum, fooditem) => {
    return accum + parseInt(fooditem.price) * fooditem.quantity;
  }, 0);
  return (
    cartState.length > 0 && (
      <Link href="/cart">
        <a
          className={`${styles.viewCartBtn} btn btnPrimary btnGreen ${styles.show}`}>
          <p className={styles.viewCartBtn__price}>
            {totalItems} | {totalPrice} AED
          </p>
          <p className={styles.viewCartBtn__cart}>View cart</p>
        </a>
      </Link>
    )
  );
}
