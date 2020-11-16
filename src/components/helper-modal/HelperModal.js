import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default function HelperModal({
  text = 'Sorry ! We are working on it .',
  show,
  handleClose,
}) {
  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Not Available Yet</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
