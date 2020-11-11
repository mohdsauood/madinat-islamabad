import React from 'react';
import { GoogleMap, Marker, Circle } from '@react-google-maps/api';

function RenderMap({
  mapContainerStyle,
  zoom,
  options,
  center,
  onMapClick,
  circleOptions,
  position,
  marker,
}) {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={zoom}
      options={options}
      center={center}
      onClick={onMapClick}>
      <Circle center={center} options={circleOptions} />
      {marker && <Marker position={position} />}
    </GoogleMap>
  );
}

export default React.memo(RenderMap);
