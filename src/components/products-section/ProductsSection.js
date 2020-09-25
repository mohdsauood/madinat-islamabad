import React from 'react';
import styles from './ProductsSection.module.css';
import Product from '../product/Product';
const dummyData = [
  {
    name: 'Five Star Family',
    description:
      ' 2 plain roti , 3 butter roti with two delicious chicken jalfrazi and mutton haleem',
    price: '27 aed',
    image: '/assets/haleem.jpg',
  },
  {
    name: 'Biriyani Full Meal',
    description: 'chicken biriyani 2 servings with raita and halwa',
    price: '30 aed',
    image: '/assets/biriyani.jpg',
  },
];
export default function ProductsSection() {
  const products = dummyData.map((product) => {
    return <Product product={product} />;
  });
  return (
    <section className={styles.productsSection}>
      <h6 className={styles.productsSection__h6}>
        <i
          className={`${styles.productsSection__h6__icon} fas fa-circle fa-sm`}></i>
        top products
      </h6>
      {products}
    </section>
  );
}
