import React from 'react';
import styles from './Addresses.module.css';
import Address from '../address/Address';
export default function Addresses() {
  return (
    <>
      <div className={styles.div}>
        <Address />
        <Address />
        <Address />
      </div>
      <button className={`${styles.btn} xbtn xbtnOutline`}>
        Add New Address
      </button>
    </>
  );
}
