import React from 'react';
import styles from './CartItems.module.css';
import CartItem from '../cart-item/CartItem';
import { useRouter } from 'next/router';

import { useCart } from '../../../context/cart-provider-context/cart-provider-context';
export default function CartItems() {
  const router = useRouter();
  const [cartState, cartDispatch] = useCart();
  if (cartState.length == 0) {
    router.push('/menu/roti');
  }
  let items = cartState.map((item) => <CartItem item={item} />);
  return <div className={styles.itemsDiv}>{items}</div>;
}
