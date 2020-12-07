import React, { useState } from 'react';
import styles from './Product.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Product({ product }) {
  const [item, setitem] = useState(product);
  let subButtons = 'add';

  return (
    <section className={styles.productSection}>
      <div className={styles.productSection__infoDiv}>
        <div className={styles.productSection__infoDiv_title}>
          <svg
            className={styles.productSection__infoDiv_title__icon}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24">
            <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
          </svg>
          <h5 className={styles.productSection__infoDiv_title__h5}>
            {item?.name}
          </h5>
        </div>
        <p className={styles.productSection__description}>
          {item?.description}
        </p>
        <span className={styles.productSection__price}>{item?.price} AED</span>
      </div>
      <div
        className={styles.productSection__buttonDiv}
        style={{ backgroundImage: `url(${item?.image})` }}>
        <button
          className={`${styles.productSection__buttonDiv__button} xbtn xbtnOutline`}>
          <Link href={`/menu/${item?.category}`}>{subButtons}</Link>
        </button>
      </div>
    </section>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
