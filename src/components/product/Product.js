import React, { useState } from 'react';
import styles from './Product.module.css';
import PropTypes from 'prop-types';
import { useCart } from '../../context/cart-provider-context/cart-provider-context';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from '../../context/types/types';

export default function Product({ product }) {
  const [item, setitem] = useState(product);
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
    cartState.items.forEach((elem) => {
      if (elem.name == item.name && elem.quantity == 1) {
        cartDispatch({ type: REMOVE_ITEM, payload: item });
      }
    });
    cartDispatch({ type: DECREASE_ITEM, payload: item });
  };
  //set button content
  cartState.items.length == 0 && (subButtons = 'add');

  cartState.items.length > 0 &&
    cartState.items.forEach((elem, index) => {
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

  return (
    <section className={styles.productSection}>
      <div className={styles.productSection__infoDiv}>
        <div className={styles.productSection__infoDiv_title}>
          <i
            aria-hidden
            className={`${styles.productSection__infoDiv_title__icon} far fa-star fa-lg`}></i>
          <h5 className={styles.productSection__infoDiv_title__h5}>
            {item?.name}
          </h5>
        </div>
        <p className={styles.productSection__description}>
          {item?.description}
        </p>
        <span className={styles.productSection__price}>{item?.price}</span>
      </div>
      <div
        className={styles.productSection__buttonDiv}
        style={{ backgroundImage: `url(${item?.image})` }}>
        <button
          onClick={handleClick}
          className={`${styles.productSection__buttonDiv__button} xbtn xbtnOutline`}>
          {subButtons}
        </button>
      </div>
    </section>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
