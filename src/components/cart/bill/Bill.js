import React from 'react';
import styles from './Bill.module.css';
import { useCartState } from '../../../context/cart-provider-context/cart-provider-context';

export default function Bill() {
  const cartState = useCartState();
  let totalPrice;
  if (cartState.length > 0) {
    totalPrice = cartState.reduce((accum, fooditem) => {
      return accum + parseInt(fooditem.price) * fooditem.quantity;
    }, 0);
  }
  return (
    <section className={styles.sec}>
      <h5 className={`tCapitalize tLg tBlack`}>Bill Details</h5>
      <div className={`${styles.total} tM tBlack`}>
        <p>Item Total</p>
        <p className="tUpperCase karla ">{totalPrice}</p>
      </div>
      <div className={`${styles.dFee} tM tDarkGray`}>
        <p>Delivery Fee</p>
        <p className="tUpperCase karla ">0 AED</p>
      </div>
      <div className={`${styles.pay} tM tBlack`}>
        <p>To Pay</p>
        <p className="tUpperCase karla tBold">{totalPrice}</p>
      </div>
    </section>
  );
}
