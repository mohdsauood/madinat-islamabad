import React from 'react';
import styles from './AddReq.module.css';
import { useCart } from '../../../context/cart-provider-context/cart-provider-context';
import { UPDATE_REQUEST } from '../../../context/types/types';
export default function AddReq() {
  const [cartState, cartDispatch] = useCart();

  const handleChange = (e) => {
    cartDispatch({ type: UPDATE_REQUEST, payload: e.target.value });
  };
  return (
    <div className={styles.div}>
      <svg
        className={'svgLightGray'}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-8v-1h8v1zm0-4h-8v1h8v-1zm0-3h-8v1h8v-1zm-9 0h-1v1h1v-1zm0 3h-1v1h1v-1zm0 3h-1v1h1v-1z" />
      </svg>
      <input
        onChange={handleChange}
        className=" xtLight"
        type="text"
        value={cartState.request}
        placeholder="Any Request?"
      />
    </div>
  );
}
