import React from 'react';
import styles from './Product.module.css';
const dummyData = [
  {
    name: 'Five Star Family',
    details:
      ' 2 plain roti , 3 butter roti with two delicious chicken jalfrazi and mutton haleem',
    price: '27 aed',
    image: '/assets/haleem.jpg',
  },
  {
    name: 'Biriyani Full Meal',
    details: 'chicken biriyani 2 servings with raita and halwa',
    price: '30 aed',
    image: '/assets/biriyani.jpg',
  },
];
export default function Product() {
  const products = dummyData.map((product) => {
    return (
      <section className={styles.productSection}>
        <div className={styles.productSection__infoDiv}>
          <div className={styles.productSection__infoDiv_title}>
            <i
              className={`${styles.productSection__infoDiv_title__icon} far fa-star fa-lg`}></i>
            <h5 className={styles.productSection__infoDiv_title__h5}>
              {product.name}
            </h5>
          </div>
          <p className={styles.productSection__description}>
            {product.details}
          </p>
          <span className={styles.productSection__price}>{product.price}</span>
        </div>
        <div
          className={styles.productSection__buttonDiv}
          style={{ backgroundImage: `url(${product.image})` }}>
          <button
            className={`${styles.productSection__buttonDiv__button} btn btnOutline`}>
            add
          </button>
        </div>
      </section>
    );
  });
  return products;
}
