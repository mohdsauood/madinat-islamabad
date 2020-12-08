import React from 'react';
import styles from './Bill.module.css';
import { useCart } from '../../../context/cart-provider-context/cart-provider-context';
export default function Bill() {
  const [cartState, cartDispatch] = useCart();
  let totalPrice;
  if (cartState.items.length > 0) {
    totalPrice = cartState.items.reduce((accum, fooditem) => {
      return accum + parseInt(fooditem.price) * fooditem.quantity;
    }, 0);
  }
  return (
    <section className={styles.sec}>
      <h5 className={`xtCapitalize xtLg xtBlack`}>Bill Details</h5>
      <div className={`${styles.total} xtM xtBlack`}>
        <p>Item Total</p>
        <p className="xtUpperCase xkarla ">{cartState.bill.total} AED</p>
      </div>
      <div className={`${styles.dFee} xtM xtDarkGray`}>
        <p>Delivery Fee</p>
        <p className="xtUpperCase xkarla ">0 AED</p>
      </div>
      <div className={`${styles.pay} xtM xtBlack`}>
        <p>To Pay</p>
        <p className="xtUpperCase xkarla xtBold">{cartState.bill.toPay} AED</p>
      </div>
      <p className={styles.cod}>We Only Accept Cash On Delivery ❗❗</p>
    </section>
  );
}
