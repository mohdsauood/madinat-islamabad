import React from 'react';
import styles from './FacebookButton.module.css';
import { signIn } from 'next-auth/client';
export default function FacebookButton({ id }) {
  return (
    <button
      onClick={() => signIn(id)}
      className={` ${styles.button} ${styles.fbButton}`}>
      <svg
        className={`${styles.button__svg} ${styles.fbSvg}`}
        width="100%"
        height="100%"
        viewBox="0 0 28 26"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M22.1667 0H5.83333C2.61217 0 0 2.36917 0 5.2907V20.1047C0 23.0262 2.61217 25.3953 5.83333 25.3953H22.1667C25.389 25.3953 28 23.0262 28 20.1047V5.2907C28 2.36917 25.389 0 22.1667 0ZM18.6667 7.40698H16.422C15.7045 7.40698 15.1667 7.67363 15.1667 8.34766V9.52326H18.6667L18.389 12.6977H15.1667V21.1628H11.6667V12.6977H9.33333V9.52326H11.6667V7.48845C11.6667 5.34889 12.908 4.23256 15.7045 4.23256H18.6667V7.40698Z" />
      </svg>

      <span className={`${styles.button__span} xtM xkarla xtBold xtCapitalize`}>
        sign in with facebook
      </span>
    </button>
  );
}
