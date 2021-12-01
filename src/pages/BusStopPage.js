import Header from "../components/Common/Header";
import Footer from "../components/Common/footer";
import BusMenu from "../components/BusStopPage/BusMenu";
import React, { useState, useEffect } from "react";

const BusStopPage = () => {
  const [showSearch, setshowSearch] = useState("hide");
  useEffect(() => {
    setshowSearch("show");
  }, []);

  return (
    <>
      <Header showSearch={!showSearch ? undefined : showSearch} />
      <BusMenu />
      <Footer />
    </>
  );
};

export default BusStopPage;
