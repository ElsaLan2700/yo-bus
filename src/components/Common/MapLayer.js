import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import { getMyLocationIcon } from "../../utils/iconUtilis";
// import wave_pink from "../../images/icon/static/my_location";

var Icon = L.icon({
  iconUrl:
    "https://user-images.githubusercontent.com/89368918/143837077-d739a52f-fc3a-47d7-8f8e-c288ae7dffcf.png",
  shadowUrl:
    "https://user-images.githubusercontent.com/89368918/143837081-7c1446e0-b76c-4228-a933-12a34a00898f.png",
  iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
  shadowAnchor: [5, 5], // the same for the shadow
});

function SetViewCenter({ coord }) {
  const map = useMap();
  map.setView(coord, map.getZoom());
  return null;
}

const MapLayer = ({ geoFeature }) => {
  return (
    <>
      <MapContainer
        center={geoFeature.center}
        zoom={geoFeature.zoom}
        scrollWheelZoom={true}
        style={geoFeature.height}
      >
        <SetViewCenter coord={geoFeature.center} />
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          id="mapbox/streets-v11"
          accessToken="pk.eyJ1IjoiZWxzYTI3MDAiLCJhIjoiY2t2cXFjdmVqOGhzZDMxcXdnZjVjN3Z2ZiJ9.v1URgFZJDg6nNZ5nj5VgXQ"
        />
        <Marker position={geoFeature.center} icon={Icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapLayer;
