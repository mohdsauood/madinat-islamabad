import React from 'react';
import { SHOW_NUMBER_MODAL } from '../../../context/types/types';
import styles from './OrderButton.module.css';
import { useCartPageUiDispatch } from '../../../context/cart-page-ui-context/cart-page-ui-context';
export default function OrderButton() {
  const cartDispatch = useCartPageUiDispatch();
  const handleClick = () => {
    cartDispatch({ type: SHOW_NUMBER_MODAL });
  };
  return (
    <section className={styles.sec}>
      <div onClick={handleClick} className={`${styles.mobile} xtM `}>
        Enter Mobile No
      </div>
      <div className={`${styles.order} xtM`}>Place Order</div>
    </section>
  );
}
