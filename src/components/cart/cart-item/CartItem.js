import React from 'react';
import styles from './CartItem.module.css';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from '../../../context/types/types';
import { useCart } from '../../../context/cart-provider-context/cart-provider-context';

export default function CartItem({ item }) {
  const [cartState, cartDispatch] = useCart();
  const handleIncrement = (e) => {
    e.stopPropagation();
    cartDispatch({ type: INCREASE_ITEM, payload: item });
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    console.log('yes handle decrement works');
    cartState.forEach((elem) => {
      if (elem.name == item.name && elem.quantity == 1) {
        cartDispatch({ type: REMOVE_ITEM, payload: item });
      }
    });
    cartDispatch({ type: DECREASE_ITEM, payload: item });
  };

  if (cartState.length == 0) {
    //redirect to empty cart page
  }
  return (
    <section className={styles.itemSec}>
      <div className={styles.infoDiv}>
        <h5 className={`${styles.itemTitle} xtCapitalize xtM xtBlack`}>
          {item.name}
        </h5>
        <p className={`${styles.itemPrice} xtSm xtBold xtUpperCase xkarla`}>
          {' '}
          {item.price}
        </p>
      </div>
      <button className={`${styles.itemBtn} xbtn xbtnPrimary`}>
        <span onClick={handleDecrement}>-</span>
        {item.quantity}
        <span onClick={handleIncrement}>+</span>
      </button>
    </section>
  );
}
