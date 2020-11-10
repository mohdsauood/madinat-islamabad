import React, { useRef, useState, useEffect, useCallback } from 'react';
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

const libraries = ['places', 'geometry'];
const mapContainerStyle = {
  width: '100%',
  height: '40vh',
};
const center = {
  lat: 25.33800452203996,
  lng: 55.393221974372864,
};
const options = {
  zoomControl: true,
};

const circleOptions = {
  strokeColor: '#00a3a6',
  strokeOpacity: 0.4,
  strokeWeight: 2,
  fillColor: '#00a3a6',
  fillOpacity: 0.1,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 1050,
  zIndex: 1,
};

const initialMarker = { lat: null, long: null };

export default function index() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [marker, setMarker] = useState(initialMarker);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
    setMarker(initialMarker);
  };

  const onMapClick = (event) => {
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    console.log(
      google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(center.lat, center.lng),
        new google.maps.LatLng(marker.lat, marker.lng)
      )
    );
    if (
      google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(center.lat, center.lng),
        new google.maps.LatLng(marker.lat, marker.lng)
      ) > 1000
    ) {
      setShowModal(true);
    }
  };

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        options={options}
        center={center}
        onClick={onMapClick}>
        <Circle center={center} options={circleOptions} />
        {marker && <Marker position={{ lat: marker.lat, lng: marker.lng }} />}
      </GoogleMap>
    );
  };

  // useEffect(() => {
  //   if (
  //     google.maps.geometry.spherical.computeDistanceBetween(
  //       new google.maps.LatLng(center.lat, center.lng),
  //       new google.maps.LatLng(marker.lat, marker.lng)
  //     ) > 1000
  //   ) {
  //     setShowModal(true);
  //   }
  // }, [marker.lat]);
  if (loadError) return 'Error Loading Maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <>
      <div>{renderMap()}</div>
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
