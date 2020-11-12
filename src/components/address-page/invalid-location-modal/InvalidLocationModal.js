import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const restoCenter = {
  lat: 25.33800452203996,
  lng: 55.393221974372864,
};

export default function InvalidLocationModal({ showModal, setShowModal }) {
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Modal
      show={showModal}
      onHide={handleModalClose}
      backdrop="static"
      keyboard={false}
      centered>
      <Modal.Header closeButton>
        <Modal.Title>Address is out of bounds</Modal.Title>
      </Modal.Header>
      <Modal.Body>Sorry ! We Dont Deliver Food In Your Area .</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleModalClose}>Choose New Address</Button>
      </Modal.Footer>
    </Modal>
  );
}
