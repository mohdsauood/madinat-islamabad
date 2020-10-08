import React, { useState } from 'react';
import styles from './Coupon.module.css';
import Divider from '../../cart/divider/Divider';

export default function Coupon({ item }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (err) {
      setCopySuccess(false);
    }
  };
  return (
    <>
      <div className={styles.div}>
        <button
          onClick={() => copyToClipBoard(item.code)}
          className={`${styles.button} xbtnPrimary `}>
          <span className={`${styles.span} xtBold xtBlack tXlg`}>
            {copySuccess ? 'Copied !' : item.code}
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
        <p className={`${styles.details} xtM xtCapitalize`}>{item.details}</p>
        <p className={`${styles.min} xtSm xkarla xtCapitalize `}>
          {' '}
          min items :{item.min}
        </p>
      </div>
      <Divider height="0.2rem" />
    </>
  );
}
