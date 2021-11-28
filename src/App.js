import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BusInfoPage from "./pages/BusInfoPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/busInfo" element={<BusInfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
