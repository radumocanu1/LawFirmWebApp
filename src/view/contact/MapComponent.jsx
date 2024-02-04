import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    const rotterdamCoordinates = [51.9225, 4.47917];
    const map = L.map('map').setView(rotterdamCoordinates, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    L.marker(rotterdamCoordinates).addTo(map)
      .bindPopup('Davies and partners')
      .openPopup();
  }, []);

  return <div id="map" className="small-map" />;
};

export default MapComponent;
