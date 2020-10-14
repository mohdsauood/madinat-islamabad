import React from 'react';
import styles from './UserDetails.module.css';
import { useCartPageUiDispatch } from '../../../../context/cart-page-ui-context/cart-page-ui-context';
import { SHOW_NUMBER_MODAL } from '../../../../context/types/types';
export default function UserDetails() {
  const cartDispatch = useCartPageUiDispatch();
  const handleClick = () => {
    cartDispatch({ type: SHOW_NUMBER_MODAL });
  };
  return (
    <div className={styles.div}>
      <h6 className={`${styles.h6} xtUpperCase xtM xtBold`}>Mohamed sauood</h6>
      <p className={`${styles.p} xtM xtM`}>
        0561222712{' '}
        <span
          onClick={handleClick}
          className={`${styles.span} xkarla xtBold xtSm xtUpperCase`}>
          edit
        </span>
      </p>
    </div>
  );
}
