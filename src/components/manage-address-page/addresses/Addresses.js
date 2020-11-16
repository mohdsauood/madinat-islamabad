import React from 'react';
import styles from './Addresses.module.css';
import Address from '../address/Address';
import { useCartState } from '../../../context/cart-provider-context/cart-provider-context';
import Link from 'next/link';
export default function Addresses() {
  const cartState = useCartState();
  const {
    user: { address },
  } = cartState;
  return (
    <>
      <div className={styles.div}>
        {address.map((address) => {
          return <Address address={address} key={address.doorNo} />;
        })}
      </div>

      <button className={`${styles.btn} xbtn xbtnOutline`}>
        <Link href="/address">Add New Address</Link>
      </button>
    </>
  );
}
