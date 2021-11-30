import React from "react";
import { useParams } from "react-router-dom";
import Timetable from "../components/BusInfoPage/Timetable";
import Header from "../components/Common/Header";
import Footer from "../components/Common/footer";
import "../css/busInfo.css";

const BusInfoPage = () => {
  const { city, routeName } = useParams();
  return (
    <>
      <Header />
      <Timetable city={city} routeName={routeName} />
      <Footer />
    </>
  );
};

export default BusInfoPage;
