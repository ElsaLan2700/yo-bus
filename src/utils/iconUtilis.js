import { ReactComponent as IconMyLocation } from "../images/icon/my_location.svg";
import { ReactComponent as IconYoBusLogo } from "../images/icon/YoBus_logo.svg";
import { ReactComponent as IconGPSPoint } from "../images/icon/gps_point.svg";

function getMyLocationIcon() {
  return <IconMyLocation alt="my_location" />;
}

function getYoBusLogoIcon() {
  return <IconYoBusLogo alt="YoBusLogo" />;
}

function getIconGPSPoint() {
  return <IconGPSPoint alt="IconGPSPoint" />;
}

export { getMyLocationIcon, getYoBusLogoIcon, getIconGPSPoint };
