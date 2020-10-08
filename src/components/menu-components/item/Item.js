import React, { useEffect, useState } from 'react';
import styles from './Item.module.css';
import PropTypes from 'prop-types';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from '../../../context/types/types';
import { useCart } from '../../../context/cart-provider-context/cart-provider-context';

export default function Item({ foodItem }) {
  const [item, setitem] = useState(foodItem);
  const [cartState, cartDispatch] = useCart();
  let subButtons = 'add';
  const handleClick = () => {
    cartDispatch({ type: ADD_ITEM, payload: item });
  };

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

  //set button content
  cartState.length == 0 && (subButtons = 'add');

  cartState.length > 0 &&
    cartState.forEach((elem, index) => {
      if (elem.name == item.name && elem.quantity > 0) {
        subButtons = (
          <>
            <span onClick={handleDecrement}>-</span>
            {elem.quantity}
            <span onClick={handleIncrement}>+</span>
          </>
        );
      } else if (elem.name == item.name && elem.quantity == 0) {
        subButtons = 'add';
      }
    });
  useEffect(() => {
    setitem(foodItem);
  }, [foodItem]);
  return (
    <section className={styles.itemSec}>
      <div className={styles.itemSec__div}>
        <h4 className={`xtBold ${styles.itemSec__div__h4} `}>{item?.name}</h4>
        <p className={styles.itemSec__div__p}>{item?.description}</p>
        <span className={`${styles.itemSec__div__span}`}>{item?.price}</span>
      </div>
      <div
        className={styles.itemSec__btnDiv}
        style={{ backgroundImage: `url(${item?.imgUrl})` }}>
        <button
          onClick={handleClick}
          className={` xbtn xbtnPrimary ${styles.itemSec__btnDiv__btn} `}>
          {subButtons}
        </button>
      </div>
    </section>
  );
}

Item.propTypes = {
  foodItem: PropTypes.object.isRequired,
};
