import axios from "axios";
import { getAuthorizationHeader } from "./axios";
const getBus = async (city = "", routeName = "") => {
  if (city === "" || routeName === "") return null;
  let res = null;
  try {
    await axios
      .get(
        `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${city}/${routeName}?$format=JSON`,
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

const getRoute = async (city = "", routeName = "") => {
  if (city === "" || routeName === "") return null;
  let res = null;
  try {
    await axios
      .get(
        `https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${city}/${routeName}?$format=JSON`,
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

export { getBus, getRoute };
