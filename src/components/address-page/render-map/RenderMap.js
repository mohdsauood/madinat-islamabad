import React, { useEffect, useCallback, useState, useRef } from 'react';
import { GoogleMap, Marker, Circle, LoadScript } from '@react-google-maps/api';
import InvalidLocationModal from '../invalid-location-modal/InvalidLocationModal';
import Search from '../search/Search';
import Locate from '../locate/Locate';
import styles from './RenderMap.module.css';

const libraries = ['places', 'geometry'];
const mapContainerStyle = {
  width: '100%',
  height: '50vh',
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

function RenderMap() {
  const [showModal, setShowModal] = useState(false);
  const [mapCenter, setMapCenter] = useState(restoCenter);
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleBoundsChanged = useCallback(() => {
    console.log('handleboundschanged is being called');
    const center = mapRef.current.getCenter();
    const obj = {};
    obj.lat = center.lat();
    obj.lng = center.lng();
    setMapCenter(obj);
  }, []);

  const handleDragEnd = useCallback(() => {
    if (
      google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(restoCenter.lat, restoCenter.lng),
        new google.maps.LatLng(mapCenter.lat, mapCenter.lng)
      ) > 1000
    ) {
      setShowModal(true);
    }
  }, [mapCenter]);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    if (
      google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(restoCenter.lat, restoCenter.lng),
        new google.maps.LatLng(lat, lng)
      ) > 1000
    ) {
      setShowModal(true);
    }
  }, []);
  const handleShowLocation = () => {
    console.log('handleshow location is called');
    const { lat, lng } = restoCenter;
    mapRef.current.panTo({ lat, lng });
  };
  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        libraries={libraries}>
        <div className={styles.wrapper}>
          <Search panTo={panTo} />
          <Locate panTo={panTo} />
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={zoom}
            options={options}
            center={restoCenter}
            onBoundsChanged={handleBoundsChanged}
            onDragEnd={handleDragEnd}
            onLoad={onMapLoad}>
            <Circle center={restoCenter} options={circleOptions} />
            {<Marker position={mapCenter} />}
            <InvalidLocationModal
              mapCenter={mapCenter}
              setMapCenter={setMapCenter}
              showModal={showModal}
              setShowModal={setShowModal}
              handleShowLocation={handleShowLocation}
            />
          </GoogleMap>
        </div>
      </LoadScript>
    </>
  );
}

export default React.memo(RenderMap);
