import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const ProfileMap = ({ profile }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [profile.longitude, profile.latitude],
      zoom: 10,
    });

    new mapboxgl.Marker()
      .setLngLat([profile.longitude, profile.latitude])
      .addTo(map);

    return () => {
      map.remove();
    };
  }, [profile]);

  return (
    <div
      style={{ height: '400px', width: '100%' }}
      ref={mapContainerRef}
    />
  );
};

export default ProfileMap;
