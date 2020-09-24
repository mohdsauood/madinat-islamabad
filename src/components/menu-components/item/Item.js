import React, { useEffect, useState } from 'react';
import styles from './Item.module.css';
import { ADD_ITEM } from '../../../context/types/types';
import { useCart } from '../../../context/cart-provider-context/cart-provider-context';

export default function Item({ foodItem }) {
  const [item, setitem] = useState(null);
  const [cartState, cartDispatch] = useCart();
  let subButtons = 'add';
  cartState.length == 0 && (subButtons = 'add');

  cartState.length > 0 &&
    cartState.forEach((elem, index) => {
      if (elem.name == item.name) {
        subButtons = (
          <>
            <span>-</span>
            {elem.quantity}
            <span>+</span>
          </>
        );
      }
    });
  const handleClick = () => {
    cartDispatch({ type: ADD_ITEM, payload: item });
  };
  useEffect(() => {
    setitem(foodItem);
  }, [foodItem, cartState]);
  return (
    <section className={styles.itemSec}>
      <div className={styles.itemSec__div}>
        <h4 className={styles.itemSec__div__h4}>{item?.name}</h4>
        <p className={styles.itemSec__div__p}>{item?.description}</p>
        <span className={styles.itemSec__div__span}>{item?.price}</span>
      </div>
      <div
        className={styles.itemSec__btnDiv}
        style={{ backgroundImage: `url(${item?.imgUrl})` }}>
        <button
          onClick={handleClick}
          className={`${styles.itemSec__btnDiv__btn} btn btnPrimary`}>
          {subButtons}
        </button>
      </div>
    </section>
  );
}
