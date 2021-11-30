import React from "react";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function SetViewCenter({ coord }) {
  const map = useMap();
  map.setView(coord, map.getZoom());
  return null;
}

const MapLayer = ({ geoFeature, nearybyStop, IconRightHere, IconStop }) => {
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
        <Marker position={geoFeature.center} icon={IconRightHere}>
          <Popup>你目前的位置</Popup>
        </Marker>
        <div>
          {nearybyStop.map((stops) => {
            return (
              <Marker
                position={[
                  stops.StationPosition.PositionLat,
                  stops.StationPosition.PositionLon,
                ]}
                icon={IconStop}
              >
                <Popup>{stops.StationName.Zh_tw}</Popup>
              </Marker>
            );
          })}
        </div>
      </MapContainer>
    </>
  );
};

export default MapLayer;
