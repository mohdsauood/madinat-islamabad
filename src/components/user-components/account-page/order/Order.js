import React from 'react';
import styles from './Order.module.css';
import PropTypes from 'prop-types';

export default function Order({ item }) {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.priceDiv}>
        <p className={`${styles.combo} xtM`}>{item.name}</p>
        <span className={`${styles.delivered} xkarla xtSm`}>
          {item.delivered ? 'delivered' : 'unknown'}
        </span>
      </div>
      <p className={`${styles.price} xtSm `}>
        {item.price}
        <svg
          className={styles.arrow}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24">
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </p>
      <p className={`${styles.date} xtSm`}>{item.date}</p>
      <div className={`${styles.buttonDiv} xtSm`}>
        <button className={`${styles.btn} xbtn xbtnOutline`}>reorder</button>{' '}
        <button className={`${styles.btn} xbtn xbtnPrimary`}>rate us</button>
      </div>
    </div>
  );
}

Order.propTypes = {
  item: PropTypes.object,
};

Order.defaultProps = {
  item: {
    name: 'COMBO1 X 2, pepsi 1',
    delivered: 'Delivered',
    date: 'febrauary 4 , 12:11pm',
    price: '12 aed',
  },
};
