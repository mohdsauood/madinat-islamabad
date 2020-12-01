import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useCartPageUi } from '../../../context/cart-page-ui-context/cart-page-ui-context';
import { HIDE_RESTO_CLOSED_MODAL } from '../../../context/types/types';
import styles from './index.module.css';
export default function RestoClosedModal() {
  const [cartUiState, cartUiDispatch] = useCartPageUi();
  const { showRestoClosedModal } = cartUiState;
  const handleModalClose = () => {
    cartUiDispatch({ type: HIDE_RESTO_CLOSED_MODAL });
  };
  return (
    <Modal
      show={showRestoClosedModal}
      onHide={handleModalClose}
      backdrop="static"
      keyboard={false}
      centered>
      <Modal.Header className="py-2 px-2" closeButton></Modal.Header>
      <Modal.Body className="py-2 px-5 text-center ">
        <h4 className={styles.h4}>
          <span className={styles.span}>Sorry ! Restaurant is closed</span>Our
          Timings : 6am - 11pm
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
