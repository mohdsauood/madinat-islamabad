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
import { Circle } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 25.33800452203996,
  lng: 55.393221974372864,
};
const options = {
  strokeColor: '#00a3a6',
  strokeOpacity: 0.4,
  strokeWeight: 2,
  fillColor: '#00a3a6',
  fillOpacity: 0.1,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 1000,
  zIndex: 1,
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
          zoom={15}
          center={center}
          onClick={(event) => {
            setMarker({
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
            });
            // if (
            //   getDistanceFromLatLonInKm(
            //     process.env.NEXT_PUBLIC_RESTO_LAT,
            //     process.env.NEXT_PUBLIC_RESTO_LONG,
            //     marker.lat,
            //     marker.lng
            //   ) > 1
            // ) {
            //   setShowModal(true);
            // }
            console.log(
              google.maps.geometry.spherical.computeDistanceBetween(
                new google.maps.LatLng(center.lat, center.lng),
                new google.maps.LatLng(marker.lat, marker.lng),
                1000
              ) * 1000
            );
            if (
              google.maps.geometry.spherical.computeDistanceBetween(
                { lat: center.lat, lng: center.lng },
                { lat: marker.lat, lng: marker.lng },
                1000
              ) > 1000
            ) {
              setShowModal(true);
            }
          }}>
          <Circle center={center} options={options} />
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
