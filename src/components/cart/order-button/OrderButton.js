import React from 'react';
import { SHOW_NUMBER_MODAL } from '../../../context/types/types';
import styles from './OrderButton.module.css';
import { useCartPageUiDispatch } from '../../../context/cart-page-ui-context/cart-page-ui-context';
import { useCartState } from '../../../context/cart-provider-context/cart-provider-context';
import axios from 'axios';
export default function OrderButton() {
  const cartDispatch = useCartPageUiDispatch();
  const cartState = useCartState();
  const handleClick = () => {
    cartDispatch({ type: SHOW_NUMBER_MODAL });
  };

  const handlePlaceOrder = async () => {
    if (!cartState.user.mobile) {
      cartDispatch({ type: SHOW_NUMBER_MODAL });
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
