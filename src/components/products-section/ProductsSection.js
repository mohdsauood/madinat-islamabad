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
export default function ProductsSection({ menu }) {
  const products = menu.map((product) => {
    return <Product key={product.name} product={product} />;
  });
  return (
    <section className={styles.productsSection}>
      <h6 className={styles.productsSection__h6}>
        <svg
          className={styles.productsSection__h6__icon}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" />
        </svg>
        top products
      </h6>
      {products}
    </section>
  );
}
