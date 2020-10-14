import React, { useEffect } from 'react';
import styles from './CartItems.module.css';
import CartItem from '../cart-item/CartItem';
import { useRouter } from 'next/router';

import { useCart } from '../../../context/cart-provider-context/cart-provider-context';
export default function CartItems() {
  const router = useRouter();
  const [cartState, cartDispatch] = useCart();

  let items = cartState.items.map((item) => <CartItem item={item} />);

  //updated master

  useEffect(() => {
    if (cartState.items.length == 0) {
      router.push('/menu/roti');
    }
  }, [cartState]);
  return <div className={styles.itemsDiv}>{items}</div>;
}
