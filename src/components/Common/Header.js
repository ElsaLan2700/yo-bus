import React from "react";
import { Link } from "react-router-dom";
import wavePink from "../../images/icon/wave_pink.png";
import { getYoBusLogoIcon } from "../../utils/iconUtilis";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/">{getYoBusLogoIcon()}</Link>
        <div className="nav_menu">
          <Link to="/" className="menu_busroute">
            公車路線
          </Link>
          <Link to="/" className="menu_buslocate">
            附近站牌
          </Link>
          <a
            href="https://mshmwr.github.io/yo-taiwan/"
            target="_blank"
            rel="noreferrer"
            className="menu_landscape"
          >
            觀光資訊
          </a>
          <button className="btn_callforaction">今天想去哪？</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
