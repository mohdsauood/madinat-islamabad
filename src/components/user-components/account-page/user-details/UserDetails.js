import React from 'react';
import styles from './UserDetails.module.css';
import { useCartPageUiDispatch } from '../../../../context/cart-page-ui-context/cart-page-ui-context';
import { SHOW_NUMBER_MODAL } from '../../../../context/types/types';
import { useCartState } from '../../../../context/cart-provider-context/cart-provider-context';
export default function UserDetails() {
  const cartState = useCartState();
  const cartDispatch = useCartPageUiDispatch();
  const handleClick = () => {
    cartDispatch({ type: SHOW_NUMBER_MODAL });
  };
  return (
    <div className={styles.div}>
      <h6 className={`${styles.h6} xtUpperCase xtM xtBold`}>
        {cartState.user.name ? cartState.user.name : 'name'}
      </h6>
      <p className={`${styles.p} xtM xtM`}>{cartState.user.email}</p>
      <p className={`${styles.p} xtM xtM`}>
        {cartState.user.mobile
          ? cartState.user.mobile
          : 'enter your mobile number'}{' '}
        <span
          onClick={handleClick}
          className={`${styles.span} xkarla xtBold xtSm xtUpperCase`}>
          edit
        </span>
      </p>
    </div>
  );
}
