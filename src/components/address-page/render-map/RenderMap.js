import React, { useEffect } from 'react';
import { GoogleMap, Marker, Circle, LoadScript } from '@react-google-maps/api';

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

function RenderMap({ marker, onMapClick, setShowModal }) {
  useEffect(() => {
    if (
      //cant access google here
      google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(center.lat, center.lng),
        new google.maps.LatLng(marker.lat, marker.lng)
      ) > 1000
    ) {
      setShowModal(true);
    }
  }, [marker.lat]);
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={libraries}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        options={options}
        center={center}
        onClick={onMapClick}>
        <Circle center={center} options={circleOptions} />
        {marker && <Marker position={{ lat: marker.lat, lng: marker.lng }} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(RenderMap);
