import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const restoCenter = {
  lat: 25.33800452203996,
  lng: 55.393221974372864,
};

export default function InvalidLocationModal({
  showModal,
  setShowModal,
  handleShowLocation,
  clearValue,
}) {
  const handleModalClose = () => {
    setShowModal(false);
    clearValue();
  };
  const handleShow = () => {
    setShowModal(false);
    handleShowLocation();
    clearValue();
  };
  return (
    <Modal
      show={showModal}
      onHide={handleModalClose}
      backdrop="static"
      keyboard={false}
      centered>
      <Modal.Header className="py-2 px-2" closeButton></Modal.Header>
      <Modal.Body className="py-2 px-5 text-center">
        <h4>Sorry ! We Dont Deliver Food In Your Area .</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleModalClose}>Choose New Address</Button>
        <Button variant="secondary" onClick={handleShow}>
          See Our Delivery Locations
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
