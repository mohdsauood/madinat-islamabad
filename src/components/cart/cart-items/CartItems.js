import React from 'react';
import styles from './CartItems.module.css';
import CartItem from '../cart-item/CartItem';

import { useCart } from '../../../context/cart-provider-context/cart-provider-context';
export default function CartItems() {
  const [cartState, cartDispatch] = useCart();
  let items = cartState.map((item) => <CartItem item={item} />);
  return <div className={styles.itemsDiv}>{items}</div>;
}
