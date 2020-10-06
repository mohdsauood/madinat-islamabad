import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import styles from './CouponModal.module.css';
import { useCartPageUi } from '../../../context/cart-page-ui-context/cart-page-ui-context';
import { HIDE_COUPON_MODAL } from '../../../context/types/types';
export default function CouponModal() {
  const [uiState, uiDispatch] = useCartPageUi();
  const handleClose = () => uiDispatch({ type: HIDE_COUPON_MODAL });
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
            className={styles.input}
            placeholder="Enter Coupon Code"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer className={styles.footer}>
        <Button
          className={`${styles.btn} d-block w-100`}
          variant="primary"
          onClick={handleClose}>
          use Coupon
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
