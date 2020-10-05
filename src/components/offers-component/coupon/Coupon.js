import React from 'react';
import styles from './Coupon.module.css';
import Divider from '../../cart/divider/Divider';

export default function Coupon({ item }) {
  return (
    <>
      <div className={styles.div}>
        <button className={`${styles.button} btnPrimary `}>
          <span className={`${styles.span} tBold tBlack tXlg`}>
            {item.code}{' '}
          </span>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24">
            <path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z" />
          </svg>{' '}
        </button>
        <p className={`${styles.details} tM tCapitalize`}>{item.details}</p>
        <p className={`${styles.min} tSm karla tCapitalize `}>
          {' '}
          min items :{item.min}
        </p>
      </div>
      <Divider height="0.2rem" />
    </>
  );
}
