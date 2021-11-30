import axios from "axios";
import { getAuthorizationHeader } from "./axios";
const doBusStopSearch = async (lat, lon, city) => {
  let res = null;

  try {
    await axios
      .get(
        `https://ptx.transportdata.tw/MOTC/v2/Bus/Station/City/${city}?$spatialFilter=nearby(${lat},${lon},1000)&$format=JSON`,
        {
          headers: getAuthorizationHeader(),
        }
      )
      .then(function (response) {
        res = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    alert("GET Error!!" + error);
  }
  return res;
};

export { doBusStopSearch };
