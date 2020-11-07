import React from 'react';
import styles from './PastOrders.module.css';
import Order from '../../../user-components/account-page/order/Order';
import { useCartState } from '../../../../context/cart-provider-context/cart-provider-context';
import moment from 'moment-timezone';
export default function pastOrders() {
  const cartState = useCartState();
  const { user } = cartState;
  const { orders } = user;

  return (
    <div className={styles.div}>
      <h6 className={`${styles.h6} xtUpperCase xtM xtBold`}>past orders</h6>
      {orders &&
        orders.map((order) => {
          const name =
            order.items.length > 1 ? 'multiple items' : order.items[0].name;
          const price = order.bill.toPay;
          const format = 'Do MMMM, h:mm a';
          const timeZone = 'Asia/Dubai';
          const unhandledDate = order && order.orderedAt;
          const date = moment.tz(unhandledDate, timeZone).format(format);
          const id = order._id;
          return <Order item={{ name, price, date, id }} />;
        })}
    </div>
  );
}
