import React from "react";
import { getIconGPSPoint } from "../../utils/iconUtilis.js";

const BusCard = ({ nearybyStop }) => {
  //   let busCardItem = "";
  //   if (!nearybyStop || nearybyStop === undefined) {
  //     console.log("yes");
  //     return;
  //   } else {

  //   }

  let busCardItem = nearybyStop.map((cards) => {
    return (
      <div className="bus_card">
        <span className="bus_card_number">{cards.StationID}</span>
        <span className="bus_card_name">{cards.StationName.Zh_tw}</span>
      </div>
    );
  });

  return (
    <div>
      <div className="gps_result_box">
        <div classNameName="gps_box_1">
          {getIconGPSPoint()}
          <span className="gps_result_title">您所在的位置</span>
        </div>
        <div className="gps_box_2">
          <div className="gps_result_title">附近有</div>
          <div className="gps_busstop_number">{nearybyStop.length}</div>
          <div className="gps_result_title">個公車站牌</div>
        </div>
        <div>{busCardItem}</div>
      </div>
    </div>
  );
};

export default BusCard;
