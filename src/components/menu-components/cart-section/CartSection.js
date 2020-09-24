import React from 'react';
import styles from './CartSection.module.css';
import { useCartState } from '../../../context/cart-provider-context/cart-provider-context';

export default function CartSection() {
  const cartState = useCartState();
  let cartValues, bgImg, totalItems, totalPrice;

  if (cartState.length == 0) {
    totalItems = 0;
    cartValues = { items: [] };
    bgImg = { backgroundImage: `url('/assets/cart.JPG')` };
    totalPrice = ` Good food is always cooking ! go ahead , order some yummy items from
    the menu`;
  } else {
    cartValues = { items: [] };
    cartState.forEach((element) => {
      cartValues.items.push(element.name);
    });
    totalItems = cartState.reduce((accum, fooditem) => {
      return accum + fooditem.quantity;
    }, 0);
    totalPrice = cartState.reduce((accum, fooditem) => {
      return accum + parseInt(fooditem.price) * fooditem.quantity;
    }, 0);
    totalPrice = `Total Price: ${totalPrice} AED`;
    bgImg = { backgroundImage: `url('/assets/cooking.JPG'` };
  }

  return (
    <section className={styles.cartSection}>
      <h2 className={styles.cartSection__h2}>
        {totalItems == 0
          ? 'Cart Empty'
          : totalItems == 1
          ? '1 item'
          : `${totalItems} items`}
      </h2>
      <div className={styles.cartSection__div} style={bgImg}></div>
      <p className={styles.cartSection__p}>{totalPrice}</p>
    </section>
  );
}
