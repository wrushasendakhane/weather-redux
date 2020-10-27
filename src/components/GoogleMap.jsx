import React, { useEffect, useRef } from "react";
const google = window.google;
function GoogleMap(props) {
  const mapRef = useRef();
  useEffect(() => {
    console.log(mapRef.current);
    new google.maps.Map(mapRef.current, {
      zoom: 12,
      center: {
        lat: props.lat,
        lng: props.lon,
      },
    });
  }, []);

  return <div ref={mapRef} style={{ width: "250px", height: "200px" }} />;
}

export default GoogleMap;
