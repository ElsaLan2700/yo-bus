import React, { useState, useEffect } from "react";
import { getBus, getRoute } from "../../apis/TimetableApi";
const cityData = [
  { name: "臺北市", value: "Taipei" },
  { name: "新北市", value: "NewTaipei" },
  { name: "桃園市", value: "Taoyuan" },
  { name: "臺中市", value: "Taichung" },
  { name: "臺南市", value: "Tainan" },
  { name: "高雄市", value: "Kaohsiung" },
  { name: "基隆市", value: "Keelung" },
  { name: "新竹市", value: "Hsinchu" },
  { name: "新竹縣", value: "HsinchuCounty" },
  { name: "苗栗縣", value: "MiaoliCounty" },
  { name: "彰化縣", value: "ChanghuaCounty" },
  { name: "南投縣", value: "NantouCounty" },
  { name: "雲林縣", value: "YunlinCounty" },
  { name: "嘉義縣", value: "ChiayiCounty" },
  { name: "嘉義市", value: "Chiayi" },
  { name: "屏東縣", value: "PingtungCounty" },
  { name: "宜蘭縣", value: "YilanCounty" },
  { name: "花蓮縣", value: "HualienCounty" },
  { name: "臺東縣", value: "TaitungCounty" },
  { name: "金門縣", value: "KinmenCounty" },
  { name: "澎湖縣", value: "PenghuCounty" },
  { name: "連江縣", value: "LienchiangCounty" },
];

const fillBusData = (cachebackData, backData) => {
  // 組出我要的資料格式
  cachebackData.forEach((item) => {
    const index = backData
      .map((item) => item.plateNumb)
      .indexOf(item.PlateNumb);

    if (index === -1) {
      // 代表沒找到
      backData.push({
        plateNumb: item.PlateNumb, //車牌號碼
        stops: [
          {
            estimateTime: item.EstimateTime, //到站時間預估(秒)
            stopUID: item.StopUID, //站牌唯一識別代碼
          },
        ],
      });
    } else {
      // 有找到
      backData[index].stops.push({
        estimateTime: item.EstimateTime, //到站時間預估(秒)
        stopUID: item.StopUID, //站牌唯一識別代碼
      });
    }
  });
};

const getRouteData = (datas, direction) => {
  // 返程
  const { routeData, directionData } = datas;
  const directionIndex = direction === "go" ? 0 : 1;
  let busID = "";
  let time = 0;
  let timeText = "";
  const routeBackStopsData = [];

  routeData[directionIndex].Stops.forEach((item) => {
    directionData.forEach((back) => {
      back.stops.forEach((stop) => {
        if (stop.stopUID === item.StopUID) {
          busID = back.plateNumb;
          time = Math.floor(stop.estimateTime / 60);

          // 文字顯示
          if (time === 0) {
            timeText = "進站中";
          } else if (time <= 1 && 0 < time) {
            timeText = "即將到站";
          } else if (!time) {
            timeText = "--";
          } else {
            timeText = `${time} 分鐘`;
          }
        }
      });
    });
    routeBackStopsData.push({
      timeText,
      stopUID: item.StopUID,
      stopName: item.StopName.Zh_tw,
      busID,
    });
  });
  return routeBackStopsData;
};

const Timetable = () => {
  const [city, setcity] = useState("Taichung");
  const [routeName, setrouteName] = useState("1");
  const [busGoStopsData, setbusGoStopsData] = useState([]);
  const [busBackStopsData, setbusBackStopsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // get 公車預估到站資料
      let goData = [];
      let backData = [];
      const data_bus = await getBus(city, routeName);

      // 篩出有在跑的公車(存公車物件)
      const bus = data_bus.filter((item) => item.PlateNumb);

      //從有在跑的公車資料裡分類出「去程0」與「返程1」
      const cachegoData = bus.filter((item) => !item.Direction);
      const cachebackData = bus.filter((item) => item.Direction);

      fillBusData(cachegoData, goData);
      fillBusData(cachebackData, backData);

      const data_route = await getRoute(city, routeName);
      const routeData = data_route.filter((item) => item.RouteID === routeName);

      setbusGoStopsData(
        getRouteData({ routeData: routeData, directionData: goData }, "go")
      );
      setbusBackStopsData(
        getRouteData({ routeData: routeData, directionData: backData }, "back")
      );
    }

    fetchData();
  }, [city, routeName]);

  return (
    <div className="">
      Timetable
      {busBackStopsData.map((item) => (
        <div>
          <div>aaaa: {item.timeText}</div>
          <div>bbbb: {`${item.stopUID}/${item.stopName}`}</div>
          <div>cccc: {item.busID}</div>
        </div>
      ))}
      <div>-------------------------------</div>
      {busGoStopsData.map((item) => (
        <div>
          <div>aaaa: {item.timeText}</div>
          <div>bbbb: {`${item.stopUID}/${item.stopName}`}</div>
          <div>cccc: {item.busID}</div>
        </div>
      ))}
    </div>
  );
};

export default Timetable;
