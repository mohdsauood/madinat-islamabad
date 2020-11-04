import React from 'react';
import styles from './Date.module.css';
import Card from 'react-bootstrap/Card';
import { format, utcToZonedTime } from 'date-fns-tz';
import { useCartState } from '../../../context/cart-provider-context/cart-provider-context';
export default function Date() {
  const cartState = useCartState();
  const { user } = cartState;
  const order = user.orders && user.orders[user.orders.length - 1];
  const unhandledDate = order && order.orderedAt;
  const format = 'do MMM yyyy, h:mo b..bbb';
  const timeZone = 'Asia/Dubai';
  console.log(unhandledDate);
  const testtime = new Date(`'${unhandledDate}'`);
  console.log(testtime);
  // const localDate = utcToZonedTime(new Date(unhandledDate), timeZone);
  // const formatedDate = format(localDate, format, { timeZone: timeZone });
  // const formatDate = (date, format) => {
  //   const timeZone = 'Asia/Dubai';
  //   const localDate = utcToZonedTime(new Date(`'${date}'`), timeZone);
  //   const formatedDate = format(localDate, format, { timeZone: timeZone });
  //   console.log(formatedDate);
  //   return formatedDate;
  // };

  // formatedDate = formatDate(unhandledDate, format);
  return (
    <>
      <Card className="ml-3 mr-3 mt-2  border-0 xkarla border-bottom-2">
        <Card.Body className="p-1 ">
          <Card.Subtitle className="mb-2 text-muted ">
            <svg
              className={`${styles.svg} mr-2`}
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
            </svg>
            {/* Ordered on {formatedDate || unhandledDate} */}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <div className="divider py-1 bg-light"></div>
    </>
  );
}
