import React from "react";
import { Link } from "react-router-dom";
import { getYoBusLogoIcon } from "../../utils/iconUtilis";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/">{getYoBusLogoIcon()}</Link>
        <div className="nav_menu">
          <Link to="/" className="menu_rentbike">
            公車路線
            <img
              className="wave_yellow_long"
              src="./static/icon/wave_yellow_long.png"
              alt=""
            />
          </Link>
          <Link to="/" className="menu_routeinfo">
            附近站牌
            <img
              className="wave_yellow"
              src="./static/icon/wave_yellow.png"
              alt=""
            />
          </Link>
          <a
            href="https://mshmwr.github.io/yo-taiwan/"
            target="_blank"
            rel="noreferrer"
            className="menu_landscape"
          >
            觀光資訊
            <img
              className="wave_yellow"
              src="./static/icon/wave_yellow.png"
              alt=""
            />
          </a>
          <button className="btn_callforaction">今天想去哪？</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
