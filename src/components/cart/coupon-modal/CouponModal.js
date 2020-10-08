import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
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
  const handleSubmit = () => {
    uiDispatch({ type: HIDE_COUPON_MODAL });
    cartDispatch({ type: CLEAR_COUPON });
  };
  const handleInput = (e) => {
    cartDispatch({ type: UPDATE_COUPON, payload: e.target.value });
  };
  return (
    <Modal centered show={uiState.showCouponModal} onHide={handleClose}>
      <Modal.Header className={styles.header} closeButton>
        <Modal.Title className={styles.title}>
          Apply A Coupon On This Order
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <FormControl
            value={cartState.bill.coupon.name}
            className={styles.input}
            onChange={handleInput}
            placeholder="Enter Coupon Code"
            aria-label="couponCode"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer className={styles.footer}>
        <Button
          className={`${styles.btn} d-block w-100`}
          variant="primary"
          onClick={handleSubmit}>
          use Coupon
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
