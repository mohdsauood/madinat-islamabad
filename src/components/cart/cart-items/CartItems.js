import React from 'react';
import styles from './CartItems.module.css';
import CartItem from '../cart-item/CartItem';

export default function CartItems() {
  return (
    <div className={styles.itemsDiv}>
      <CartItem />
    </div>
  );
}
