import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import '@reach/combobox/styles.css';
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

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
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return 'Error Loading Maps';
  if (!isLoaded) return 'Loading Maps';
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={18}
        center={center}></GoogleMap>
    </div>
  );
}
