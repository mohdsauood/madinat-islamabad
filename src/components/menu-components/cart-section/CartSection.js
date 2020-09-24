import React from 'react';
import styles from './CartSection.module.css';
import { useCartState } from '../../../context/cart-provider-context/cart-provider-context';
import { v4 as uuidv4 } from 'uuid';

export default function CartSection() {
  const cartState = useCartState();

  return generateCart(cartState);
}

function generateCart(cart) {
  let cartValues;
  let bgImg;
  if (cart.length == 0) {
    cartValues = { items: [] };
    bgImg = { backgroundImage: `url('/assets/cart.JPG')` };
  } else {
    cartValues = { items: [] };
    cart.forEach((element) => {
      cartValues.items.push(element.name);
    });
    bgImg = { backgroundImage: `url('/assets/cooking.JPG'` };
  }

  const emptyCart = (
    <section className={styles.cartSection}>
      <h2 className={styles.cartSection__h2}>
        {cartValues.items.length == 0
          ? 'Cart Empty'
          : `${cartValues.items.length} items`}
      </h2>
      <div className={styles.cartSection__div} style={bgImg}></div>
      <p className={styles.cartSection__p}>
        {cartValues.items.length == 0
          ? ` Good food is always cooking ! go ahead , order some yummy items from
          the menu`
          : cartValues.items.map((item) => <span key={uuidv4()}>{item}-</span>)}
      </p>
    </section>
  );
  return emptyCart;
}
