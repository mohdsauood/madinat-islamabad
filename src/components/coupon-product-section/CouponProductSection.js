import React from 'react';
import styles from './CouponProductsSection.module.css';
import CouponSection from '../coupon-section/CouponSection.js';
import ProductsSection from '../products-section/ProductsSection.js';

export default function CouponProductSection({ menu }) {
  return (
    <section className={styles.couponProductsSection}>
      <CouponSection />
      <ProductsSection menu={menu} />
    </section>
  );
}
