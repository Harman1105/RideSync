import React, { useState, useEffect, useCallback } from 'react';
import { LoadScript, GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const LiveTracking2 = ({ ride }) => {
  const destinationCoords = {
    lat: Number(ride.destinationCoords.ltd),
    lng: Number(ride.destinationCoords.lng),
  };

  const [currCoords, setCurrCoords] = useState({
    lat: Number(ride.pickupCoords.ltd),
    lng: Number(ride.pickupCoords.lng),
  });

  const [directions, setDirections] = useState(null);

  const [mapLoaded, setMapLoaded] = useState(false);

  // Update current location
  useEffect(() => {
    if (!navigator.geolocation) return;

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setCurrCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => console.error(err),
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 5000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // Recalculate route whenever coords update **and map is loaded**
  useEffect(() => {
    if (!mapLoaded) return; // wait for API

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: currCoords,
        destination: destinationCoords,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === 'OK') {
          setDirections(result);
        } else {
          console.error('Directions request failed due to ' + status);
        }
      }
    );
  }, [currCoords, destinationCoords, mapLoaded]);

  const handleLoad = useCallback(() => {
    setMapLoaded(true);
  }, []);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currCoords}
        zoom={15}
        onLoad={handleLoad} // map is loaded
      >
        <Marker position={currCoords} label="🚗" />
        <Marker position={destinationCoords} label="📍" />
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default LiveTracking2;
