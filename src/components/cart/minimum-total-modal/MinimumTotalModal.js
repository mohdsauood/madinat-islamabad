import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useCartPageUi } from '../../../context/cart-page-ui-context/cart-page-ui-context';
import { HIDE_MINIMUM_TOTAL_MODAL } from '../../../context/types/types';
import { useRouter } from 'next/router';

export default function MinimumTotalModal() {
  const [cartUiState, cartUiDispatch] = useCartPageUi();
  const { showMinimumTotalModal } = cartUiState;
  const router = useRouter();

  const handleModalClose = () => {
    cartUiDispatch({ type: HIDE_MINIMUM_TOTAL_MODAL });
  };
  const handleRedirect = () => {
    cartUiDispatch({ type: HIDE_MINIMUM_TOTAL_MODAL });
    router.push('/menu/roti');
  };
  return (
    <Modal
      show={showMinimumTotalModal}
      onHide={handleModalClose}
      backdrop="static"
      keyboard={false}
      centered>
      <Modal.Header className="py-2 px-2" closeButton></Modal.Header>
      <Modal.Body className="py-2 px-5 text-center ">
        <h4>Sorry ! Minimum Item Total for Delivery is 8 AED</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleRedirect}>Add More Items</Button>
        <Button variant="secondary" onClick={handleModalClose}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
