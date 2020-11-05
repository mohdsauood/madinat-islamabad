import React from 'react';
import { SHOW_NUMBER_MODAL, CLEAR_ITEMS } from '../../../context/types/types';
import styles from './OrderButton.module.css';
import { useCartPageUiDispatch } from '../../../context/cart-page-ui-context/cart-page-ui-context';
import { useCart } from '../../../context/cart-provider-context/cart-provider-context';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function OrderButton() {
  const router = useRouter();
  const cartUiDispatch = useCartPageUiDispatch();
  const [cartState, cartDispatch] = useCart();
  const handleClick = () => {
    cartUiDispatch({ type: SHOW_NUMBER_MODAL });
  };

  const handlePlaceOrder = async () => {
    if (!cartState.user.mobile) {
      cartUiDispatch({ type: SHOW_NUMBER_MODAL });
      return;
    }
    const { items, user, bill } = cartState;
    const data = {};
    user.address.forEach((element) => {
      if (element.default) {
        data.address = element;
      }
    });
    data.id = user.id;
    data.items = items.map((item) => {
      let obj = {};
      obj.name = item.name;
      obj.price = item.price;
      obj.quantity = item.quantity;
      return obj;
    });
    data.bill = bill;
    console.log(data.items);
    axios
      .post('/api/user/place-order', data)
      .then(function (response) {
        console.log(response);
        if (response) {
          cartDispatch({ type: CLEAR_ITEMS });
          router.push('/order-success');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section className={styles.sec}>
      <div onClick={handleClick} className={`${styles.mobile} xtM `}>
        {cartState.user.mobile ? 'Change Mobile No' : 'Enter Mobile No'}
      </div>
      <div onClick={handlePlaceOrder} className={`${styles.order} xtM`}>
        Place Order
      </div>
    </section>
  );
}
