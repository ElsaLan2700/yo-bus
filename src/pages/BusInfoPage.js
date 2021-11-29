import React from "react";
import Timetable from "../components/BusInfoPage/Timetable";
import Header from "../components/Common/Header";
import Footer from "../components/Common/footer";
import "../css/busInfo.css";

const BusInfoPage = () => {
  return (
    <>
      <Header />
      <Timetable />
      <Footer />
    </>
  );
};

export default BusInfoPage;
