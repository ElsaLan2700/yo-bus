import React, { useState, useEffect } from "react";
import { getBus, getRoute, getRouteInfo } from "../../apis/TimetableApi";
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

const busState = ["進站中", "即將到站", "末班已過", "分"];

const getRouteData = (datas, direction) => {
  // 返程
  const { routeData, directionData } = datas;
  const directionIndex = direction === "go" ? 0 : 1;
  let busID = "";
  let time = 0;
  let timeTextObj = {
    busStateIdx: 2,
    text: "",
  };

  if (routeData[directionIndex] === undefined) return [];

  const routeStopsData = [];
  routeData[directionIndex].Stops.forEach((item) => {
    directionData.forEach((back) => {
      back.stops.forEach((stop) => {
        if (stop.stopUID === item.StopUID) {
          busID = back.plateNumb;
          time = Math.floor(stop.estimateTime / 60);

          // 文字顯示
          if (time === 0) {
            timeTextObj = {
              busStateIdx: 0,
              text: "",
            };
          } else if (time <= 1 && 0 < time) {
            timeTextObj = {
              busStateIdx: 1,
              text: "",
            };
          } else if (!time) {
            timeTextObj = {
              busStateIdx: 2,
              text: "",
            };
          } else {
            timeTextObj = {
              busStateIdx: 3,
              text: `${time}`,
            };
          }
        }
      });
    });
    routeStopsData.push({
      timeTextObj,
      stopUID: item.StopUID,
      stopName: item.StopName.Zh_tw,
      busID,
    });
  });
  return routeStopsData;
};

const switchBusStopState = (item) => {
  const idx = item.timeTextObj.busStateIdx;
  switch (idx) {
    case 0:
    case 1:
      return <div className="realtime_status_pullin">{busState[idx]}</div>;
    case 2:
      return <div className="realtime_status_nobus">{busState[idx]}</div>;
    case 3:
      return (
        <div className="realtime_status_timing">
          <span className="realtime_status_timing_number">
            {item.timeTextObj.text}
          </span>
          <span className="realtime_status_timing_minute">{busState[idx]}</span>
        </div>
      );

    default:
      return <div>error</div>;
  }
};

const Timetable = ({ city = "Taichung", routeName = "1" }) => {
  const [busGoStopsData, setbusGoStopsData] = useState([]);
  const [busDirection, setbusDirection] = useState("go");
  const [busBackStopsData, setbusBackStopsData] = useState([]);

  useEffect(() => {
    async function fetchRouteData() {
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

    fetchRouteData();
  }, [city, routeName]);

  return (
    <>
      <div className="hero_section">
        <div className="bus_info_container">
          <div className="bus_info">
            <div className="bus_name_box">
              <span className="bus_name">{routeName}</span>
              <div className="label">
                <div className="label_location">
                  <img src="../../images/icon/location.png" alt="location" />
                  {city}
                </div>
                <div className="label_bus">市區公車</div>
              </div>
            </div>
            <div className="info_box">
              <div className="info_title">收費方式：</div>
              <div className="info_content">15元</div>
            </div>
            <div className="info_box">
              <div className="info_title">營運業者：</div>
              <div className="info_content">台北客運</div>
            </div>
            <div className="info_box">
              <div className="info_title">聯絡電話：</div>
              <div className="info_content">0800616688</div>
            </div>
          </div>
          <div className="bus_realtime">
            <div className="bus_realtime_title">即時動態</div>
            <div className="bus_realtime_tab">
              <div
                className={`${
                  busDirection === "go" ? "tab_selected" : "tab_default"
                }`}
                onClick={() => setbusDirection("go")}
              >
                {`往${
                  busGoStopsData.length === 0
                    ? null
                    : busGoStopsData[busGoStopsData.length - 1].stopName
                }`}

                {busDirection === "go" && (
                  <div className="tab_selected_bar"></div>
                )}
              </div>
              <div
                className={`${
                  busDirection === "back" ? "tab_selected" : "tab_default"
                }`}
                onClick={() => setbusDirection("back")}
              >
                {`往${
                  busBackStopsData.length === 0
                    ? null
                    : busBackStopsData[busBackStopsData.length - 1].stopName
                }`}
                {busDirection === "back" && (
                  <div className="tab_selected_bar"></div>
                )}
              </div>
            </div>
            <div className="realtime_list">
              {busDirection === "go"
                ? busGoStopsData.map((item) => (
                    <>
                      <div className="realtime_box">
                        {switchBusStopState(item)}
                        <div className="realtime_title_box">
                          <span className="realtime_title">
                            {item.stopName}
                          </span>
                          <div className="license">{item.busID}</div>
                        </div>
                      </div>
                    </>
                  ))
                : busBackStopsData.map((item) => (
                    <>
                      <div className="realtime_box">
                        {switchBusStopState(item)}
                        <div className="realtime_title_box">
                          <span className="realtime_title">
                            {item.stopName}
                          </span>
                          <div className="license">{item.busID}</div>
                        </div>
                      </div>
                    </>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timetable;
