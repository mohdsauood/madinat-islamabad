import React from 'react';
import styles from './Coupons.module.css';
import Coupon from '../coupon/Coupon';
const dummyCoupon = [
  {
    code: 'GRC45X',
    details: 'use code GRC45X & get 15% up to 12 AED ',
    min: 1,
  },
  {
    code: 'HALEEM',
    details: 'use code HALEEM & get 15% up to 12 AED on haleem ',
    min: 2,
  },
  {
    code: 'GRC45X',
    details: 'use code BIRIYANI & get 15% up to 12 AED on biriyani',
    min: 1,
  },
];
export default function Coupons() {
  return (
    <section className={styles.section}>
      {dummyCoupon.map((item) => (
        <Coupon item={item} />
      ))}{' '}
    </section>
  );
}
