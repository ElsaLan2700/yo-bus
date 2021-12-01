import axios from "axios";
import { getAuthorizationHeader } from "./axios";
const doBusStopSearch = async (lat, lon) => {
  let res = null;
  let city = "Taipei";

  try {
    // await axios
    //   .get(
    //     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyAEhhfNoyyTNN9F2NGIpscafVX4aJ5w0KE`
    //   )
    //   .then(function (response) {
    //     city =
    //       response.data.results[0].address_components[4].long_name.split(
    //         " "
    //       )[0];
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    console.log(city);
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
