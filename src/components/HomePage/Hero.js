import React from "react";

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="hero_title">最即時的公車動態</div>
      <div className="hero_subtitle">YoBus為你提供全台公車路線</div>
      <div className="search_section">
        <div className="search_box">
          <div className="search_field">
            <input
              type="text"
              className="search_field_input"
              placeholder="請輸入公車路線或站牌名稱"
            />
          </div>
          <div className="btn_group">
            <button className="search_btn">搜尋</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
