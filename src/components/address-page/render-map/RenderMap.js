import React, { useEffect, useCallback, useState, useRef } from 'react';
import { GoogleMap, Marker, Circle, LoadScript } from '@react-google-maps/api';
import InvalidLocationModal from '../invalid-location-modal/InvalidLocationModal';
import '@reach/combobox/styles.css';
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
const libraries = ['places', 'geometry'];
const mapContainerStyle = {
  width: '100%',
  height: '40vh',
};
const restoCenter = {
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
const zoom = 14;
const initialMarker = { lat: null, long: null };

function RenderMap() {
  const [marker, setMarker] = useState(initialMarker);
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onMapClick = useCallback((event) => {
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  }, []);
  const handleBoundsChanged = useCallback(() => {
    const mapCenter = mapRef.current.getCenter();
    setMarker(mapCenter);
  }, []);
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={libraries}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        options={options}
        center={marker}
        onBoundsChanged={handleBoundsChanged}
        onClick={onMapClick}
        onLoad={onMapLoad}>
        <Circle center={restoCenter} options={circleOptions} />
        {marker && <Marker position={{ lat: marker.lat, lng: marker.lng }} />}
        <InvalidLocationModal marker={marker} setMarker={setMarker} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(RenderMap);
