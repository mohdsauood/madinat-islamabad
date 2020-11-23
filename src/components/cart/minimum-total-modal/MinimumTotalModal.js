import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function MinimumTotalModal({ showModal = false }) {
  const handleModalClose = () => {};
  const handleShow = () => {};
  return (
    <Modal
      show={showModal}
      onHide={handleModalClose}
      backdrop="static"
      keyboard={false}
      centered>
      <Modal.Header className="py-2 px-2" closeButton></Modal.Header>
      <Modal.Body className="py-2 px-5 text-center">
        <h4>Sorry ! Minimum Item Total for Delivery is 8 AED</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleModalClose}>Add More Items</Button>
        <Button variant="secondary" onClick={handleShow}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
