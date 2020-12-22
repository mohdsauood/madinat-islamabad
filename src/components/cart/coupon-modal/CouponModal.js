import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './CouponModal.module.css';
import { useCartPageUi } from '../../../context/cart-page-ui-context/cart-page-ui-context';
import { useCart } from '../../../context/cart-provider-context/cart-provider-context';
import {
  HIDE_COUPON_MODAL,
  UPDATE_COUPON,
  CLEAR_COUPON,
} from '../../../context/types/types';
export default function CouponModal() {
  const [uiState, uiDispatch] = useCartPageUi();
  const [cartState, cartDispatch] = useCart();

  const handleClose = () => {
    uiDispatch({ type: HIDE_COUPON_MODAL });
  };
  return (
    <Modal centered show={uiState.showCouponModal} onHide={handleClose}>
      <Modal.Header className={styles.header} closeButton>
        <Modal.Title className={styles.title}>
          sorry no coupons applicable currently
        </Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer className={styles.footer}>
        <Button
          className={`${styles.btn} d-block w-100`}
          variant="primary"
          onClick={handleClose}>
          ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
