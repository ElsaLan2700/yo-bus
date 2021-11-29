import React, { useState, useEffect } from "react";
import MapLayer from "../Common/MapLayer";

const BusMap = () => {
  const [geoFeature, setgeoFeature] = useState({
    polyline: "",
    pathOptions: { color: "blue" },
    markOptions: { color: "red" },
    center: [24, 121],
    zoom: 13,
    height: { height: "836px" },
  });

  useEffect(() => {
    const getPosition = function () {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position),
          reject
        );
      });
    };
    const whereAmI = async function () {
      const location = await getPosition();
      const { latitude: lat, longitude: lon } = location.coords;
      setgeoFeature({
        polyline: "",
        pathOptions: { color: "blue" },
        markOptions: { color: "red" },
        center: [lat, lon],
        zoom: 13,
        height: { height: "836px" },
      });
    };
    whereAmI();
  }, []);

  return (
    <div>
      <MapLayer geoFeature={geoFeature} />
    </div>
  );
};

export default BusMap;
