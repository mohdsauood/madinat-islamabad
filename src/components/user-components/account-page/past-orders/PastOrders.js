import React from 'react';
import styles from './PastOrders.module.css';
import Order from '../../../user-components/account-page/order/Order';
export default function pastOrders() {
  return (
    <div className={styles.div}>
      <h6 className={`${styles.h6} xtUpperCase xtM xtBold`}>past orders</h6>
      <Order item={{ name: 'roti', price: '21 AED', date: 'march 2nd 6pm' }} />
      <Order
        item={{ name: 'chicken gravy', price: '16 AED', date: 'sunday 1pm' }}
      />
      <Order />
    </div>
  );
}
