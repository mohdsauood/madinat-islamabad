import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const restoCenter = {
  lat: 25.33800452203996,
  lng: 55.393221974372864,
};
const initialMarker = { lat: null, long: null };

export default function InvalidLocationModal({ marker, setMarker }) {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => {
    setMarker(initialMarker);
    setShowModal(false);
  };
  useEffect(() => {
    if (
      google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(restoCenter.lat, restoCenter.lng),
        new google.maps.LatLng(marker.lat, marker.lng)
      ) > 1000
    ) {
      setShowModal(true);
    }
  }, [marker.lat]);
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
