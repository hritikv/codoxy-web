import React, { useState, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';

const MyMap = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    setMap(
      <Map center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    );
  }, []);

  return (
    <div className="w-64 h-64 border border-gray-400">
      {map}
    </div>
  );
};

export default MyMap;