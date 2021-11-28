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

// function getBus() {
//   axios({
//     method: "get",
//     url: `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${city}/${routeName}`,
//     headers: GetAuthorizationHeader(),
//   })
//     .then((response) => {
//       console.log("預估", response);
//       const data = response.data;

//       // 篩出有在跑的公車(存公車物件)
//       const bus = data.filter((item) => item.PlateNumb);
//       // console.log('bus', bus)

//       //從有在跑的公車資料裡分類出「去程0」與「返程1」
//       const cachegoData = bus.filter((item) => !item.Direction);
//       const cachebackData = bus.filter((item) => item.Direction);

//       console.log("cachebackData", cachebackData);
//       // console.log('cachegoData',goData)

//       // 組出我要的資料格式
//       cachebackData.forEach((item) => {
//         // [a,a,b,c]
//         const index = backData
//           .map((item) => item.plateNumb)
//           .indexOf(item.PlateNumb);

//         if (index === -1) {
//           // 代表沒找到
//           backData.push({
//             plateNumb: item.PlateNumb, //車牌號碼
//             stops: [
//               {
//                 estimateTime: item.EstimateTime, //到站時間預估(秒)
//                 stopUID: item.StopUID, //站牌唯一識別代碼
//               },
//             ],
//           });
//         } else {
//           // 有找到
//           backData[index].stops.push({
//             estimateTime: item.EstimateTime, //到站時間預估(秒)
//             stopUID: item.StopUID, //站牌唯一識別代碼
//           });
//         }
//       });
//       console.log("backData", backData);

//       getRoute();
//     })
//     .catch((error) => console.log("error", error));
// }

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

/*
function getRoute() {
  axios({
    method: 'get',
    url: `https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${city}/${routeName}`,
    headers: GetAuthorizationHeader()
  })
    .then((response) => {
      console.log('往返列表', response)
      const data = response.data;

      const routeData = data.filter((item) => item.RouteID === routeName)

      // 返程
      let backStr = '';
      let busID = ''
      let time = 0;
      let timeText = '';

      routeData[1].Stops.forEach((item) => {
        backData.forEach((back) => {
          back.stops.forEach((stop) => {
            if (stop.stopUID === item.StopUID) {
              busID = back.plateNumb
              time = Math.floor(stop.estimateTime / 60)
              // console.log(busID, time)

              // 文字顯示
              if (time === 0) {
                timeText = '進站中';
              } else if (time <= 1 && 0 < time) {
                timeText = '即將到站';
              } else if (!time) {
                timeText = '--';
              } else {
                timeText = `${time} 分鐘`;
              }
            }
          })
        })
        backStr += `<li class="list-group-item d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center ">
              <p class="timeColor border rounded-pill px-2 me-2 mb-0 bg-light">${timeText}</p>
              <h5 class="fs-6 mb-0">${item.StopUID}/${item.StopName.Zh_tw}</h5>
            </div>
            <p class="mb-0 text-primary">${busID}</p>
          </li>
       `
      })
      backList.innerHTML = backStr;
    })
    .catch((error) => console.log('error', error))
}

*/

export { getBus, getRoute };
