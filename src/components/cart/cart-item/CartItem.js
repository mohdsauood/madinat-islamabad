import React from 'react';
import styles from './CartItem.module.css';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  UPDATE_CART_TOTAL,
  UPDATE_TO_PAY,
} from '../../../context/types/types';
import { useCart } from '../../../context/cart-provider-context/cart-provider-context';

export default function CartItem({ item }) {
  const [cartState, cartDispatch] = useCart();
  const handleIncrement = (e) => {
    e.stopPropagation();
    cartDispatch({ type: INCREASE_ITEM, payload: item });
    cartDispatch({ type: UPDATE_CART_TOTAL });
    cartDispatch({ type: UPDATE_TO_PAY });
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    cartState.items.forEach((elem) => {
      if (elem.name == item.name && elem.quantity == 1) {
        cartDispatch({ type: REMOVE_ITEM, payload: item });
      }
    });
    cartDispatch({ type: DECREASE_ITEM, payload: item });
    cartDispatch({ type: UPDATE_CART_TOTAL });
    cartDispatch({ type: UPDATE_TO_PAY });
  };

  if (cartState.items.length == 0) {
    //redirect to empty cart page
  }
  return (
    <section className={styles.itemSec}>
      <div className={styles.infoDiv}>
        <h5 className={` xtCapitalize xtM xtBlack`}>{item.name}</h5>
        <p className={`${styles.itemPrice} xtSm xtBold xtUpperCase xkarla`}>
          {item.price} AED
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
