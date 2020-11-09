import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from '@react-google-maps/api';
import '@reach/combobox/styles.css';
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import getDistanceFromLatLonInKm from '../../utils/getDistanceFromLatLonInKm.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 25.337971,
  lng: 55.393274,
};
export default function index() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [marker, setMarker] = useState({ lat: null, long: null });
  const [showModal, setShowModal] = useState(false);
  if (loadError) return 'Error Loading Maps';
  if (!isLoaded) return 'Loading Maps';

  const handleModalClose = () => {
    setShowModal(false);
    setMarker(null);
  };

  return (
    <>
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
          onClick={(event) => {
            setMarker({
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
            });
            if (
              getDistanceFromLatLonInKm(
                process.env.NEXT_PUBLIC_RESTO_LAT,
                process.env.NEXT_PUBLIC_RESTO_LONG,
                marker.lat,
                marker.lng
              ) > 3
            ) {
              setShowModal(true);
            }
          }}>
          {marker && <Marker position={{ lat: marker.lat, lng: marker.lng }} />}
        </GoogleMap>
      </div>
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
    </>
  );
}
