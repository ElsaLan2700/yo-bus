import React from "react";
import MapLayer from "../Common/MapLayer";
import L from "leaflet";

const BusMap = ({ position, nearybyStop }) => {
  const geoFeature = {
    polyline: "",
    pathOptions: { color: "blue" },
    markOptions: { color: "red" },
    center: position,
    zoom: 13,
    height: { height: "100vh" },
  };

  let IconRightHere = L.icon({
    iconUrl:
      "https://user-images.githubusercontent.com/89368918/143837077-d739a52f-fc3a-47d7-8f8e-c288ae7dffcf.png",
    shadowUrl:
      "https://user-images.githubusercontent.com/89368918/143837081-7c1446e0-b76c-4228-a933-12a34a00898f.png",
    iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [5, 5], // the same for the shadow
  });

  let IconStop = L.icon({
    iconUrl:
      "https://user-images.githubusercontent.com/89368918/144017675-0fd4743b-35f6-455c-a92a-7de3963dd41c.png",
    shadowUrl:
      "https://user-images.githubusercontent.com/89368918/144017965-c9b49c42-7f4c-4a82-b7d5-985402d4cbc4.png",
    iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [-5, -5], // the same for the shadow
    shadowSize: [25, 25],
  });

  return (
    <div>
      <MapLayer
        geoFeature={geoFeature}
        nearybyStop={nearybyStop}
        IconRightHere={IconRightHere}
        IconStop={IconStop}
      />
    </div>
  );
};

export default BusMap;
