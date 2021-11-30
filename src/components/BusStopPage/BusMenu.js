import React, { useState, useEffect } from "react";
import "../../css/gps_busstop.css";
import BusMap from "./BusMap";
import BusCard from "./BusCard";
import { doBusStopSearch } from "../../apis/searchbusStopApi";

const BusMenu = () => {
  const [position, setposition] = useState([24, 121]);
  const [nearybyStop, setnearybyStop] = useState([]);

  console.log(position);

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
      console.log(location);
      setposition([lat, lon]);
      setnearybyStop(await doBusStopSearch(lat, lon));
    };
    whereAmI();
  }, []);

  return (
    <>
      <div className="hero_section_stop">
        <div className="bus-map">
          <BusMap position={position} nearybyStop={nearybyStop} />
        </div>
        <div className="gps_result">
          <BusCard nearybyStop={nearybyStop} />
        </div>
      </div>
    </>
  );
};

export default BusMenu;
