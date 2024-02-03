// MapComponent.jsx
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
// Coordinates for Rotterdam, Netherlands
    const rotterdamCoordinates = [51.9225, 4.47917];


    // Create Leaflet map
    const map = L.map('map').setView(rotterdamCoordinates, 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker on the map
    L.marker(rotterdamCoordinates).addTo(map);
  }, []);

  return <div id="map" className="small-map" />;
};

export default MapComponent;
