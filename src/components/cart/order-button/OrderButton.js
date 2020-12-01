import React from 'react';
import moment from 'moment';

import {
  SHOW_NUMBER_MODAL,
  CLEAR_ITEMS,
  SHOW_MINIMUM_TOTAL_MODAL,
  SHOW_RESTO_CLOSED_MODAL,
} from '../../../context/types/types';
import styles from './OrderButton.module.css';
import { useCartPageUiDispatch } from '../../../context/cart-page-ui-context/cart-page-ui-context';
import { useCart } from '../../../context/cart-provider-context/cart-provider-context';
import axios from 'axios';
import { useRouter } from 'next/router';
import updateUserFromSession from '../../../utils/updateUserFromSession';
import { getSession } from 'next-auth/client';

function isRestoClosed() {
  const format = 'HH:mm ';
  const currentTime = moment();
  const bt = moment('06:00', format);
  const at = moment('23:00', format);
  return currentTime.isBefore(bt) || currentTime.isAfter(at);
}

export default function OrderButton({ setNoAddress }) {
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
    if (!cartState.selectedAddress) {
      setNoAddress(true);
      setTimeout(() => {
        setNoAddress(false);
      }, 500);
      return;
    }
    if (cartState.bill.total < 8) {
      cartUiDispatch({ type: SHOW_MINIMUM_TOTAL_MODAL });
      console.log('Minimum Order Total for Delivery is 8 AED');
      return;
    }
    if (isRestoClosed()) {
      cartUiDispatch({ type: SHOW_RESTO_CLOSED_MODAL });
      console.log('resto is closed sorry no order allowed');
      return;
    }

    const { items, user, bill, selectedAddress } = cartState;
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
    data.address = {
      name: selectedAddress.name || '',
      area: selectedAddress.area,
      street: selectedAddress.street || '',
      doorNo: selectedAddress.doorNo,
      landmark: selectedAddress.landmark || '',
      geoCode: selectedAddress.geoCode,
    };
    axios
      .post('/api/user/place-order', data)
      .then(function (response) {
        getSession().then((res) => {
          updateUserFromSession(res, cartDispatch);
          router.push('/order-success');
          cartDispatch({ type: CLEAR_ITEMS });
        });
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
