import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import styles from './NumberModal.module.css';
import { useCartPageUi } from '../../../context/cart-page-ui-context/cart-page-ui-context';
import { useCart } from '../../../context/cart-provider-context/cart-provider-context';
import { HIDE_NUMBER_MODAL, UPDATE_NUMBER } from '../../../context/types/types';
import axios from 'axios';
export default function NumberModal() {
  const [uiState, uiDispatch] = useCartPageUi();
  const [cartState, cartDispatch] = useCart();
  const handleChange = (e) => {
    cartDispatch({ type: UPDATE_NUMBER, payload: e.target.value });
  };
  const handleClose = () => {
    uiDispatch({ type: HIDE_NUMBER_MODAL });
  };
  const handleSubmit = () => {
    uiDispatch({ type: HIDE_NUMBER_MODAL });
    axios
      .put('/api/user/update-mobile', {
        mobile: cartState.user.mobile,
        id: cartState.user.id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Modal centered show={uiState.showNumberModal} onHide={handleClose}>
      <Modal.Header className={styles.header} closeButton>
        <Modal.Title className={styles.title}>
          Add your Mobile Number
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <FormControl
            onChange={handleChange}
            value={cartState.user.mobile}
            className={styles.input}
            placeholder="Enter Mobile Number"
            aria-label="mobileNumber"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer className={styles.footer}>
        <Button
          className={`${styles.btn} d-block w-100`}
          variant="primary"
          onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
