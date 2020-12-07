import React from 'react';
import styles from './ViewCartButton.module.css';
import Link from 'next/link';

import { useCartState } from '../../../context/cart-provider-context/cart-provider-context';
export default function ViewCartButton() {
  const cartState = useCartState();
  let totalItems = cartState.items.reduce((accum, fooditem) => {
    return accum + fooditem.quantity;
  }, 0);
  totalItems = totalItems > 1 ? `${totalItems} items` : `${totalItems} item`;
  let totalPrice = cartState.items
    .reduce((accum, fooditem) => {
      return accum + Number(fooditem.price) * fooditem.quantity;
    }, 0)
    .toFixed(2);
  return (
    cartState.items.length > 0 && (
      <Link href="/cart">
        <a
          className={`${styles.viewCartBtn} xbtn xbtnPrimary xbtnGreen ${styles.show}`}>
          <p className={styles.viewCartBtn__price}>
            {totalItems} | {totalPrice} AED
          </p>
          <p className={styles.viewCartBtn__cart}>View cart</p>
        </a>
      </Link>
    )
  );
}
