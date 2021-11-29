import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/footer";
import BusMap from "../components/BusStopPage/BusMap";

const BusStopPage = () => {
  return (
    <>
      <Header />

      <BusMap />
      <Footer />
    </>
  );
};

export default BusStopPage;
