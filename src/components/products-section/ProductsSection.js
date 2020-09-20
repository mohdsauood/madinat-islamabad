import React from 'react';
import styles from './ProductsSection.module.css';
import Product from '../product/Product';
export default function ProductsSection() {
  return (
    <section className={styles.productsSection}>
      <h6 className={styles.productsSection__h6}>
        <i
          className={`${styles.productsSection__h6__icon} fas fa-circle fa-sm`}></i>
        top products
      </h6>
      <Product />
    </section>
  );
}
