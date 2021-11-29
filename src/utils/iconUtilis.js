import { ReactComponent as IconMyLocation } from "../images/icon/my_location.svg";
import { ReactComponent as IconYoBusLogo } from "../images/icon/YoBus_logo.svg";

function getMyLocationIcon() {
  return <IconMyLocation alt="my_location" />;
}

function getYoBusLogoIcon() {
  return <IconYoBusLogo alt="YoBusLogo" />;
}

export { getMyLocationIcon, getYoBusLogoIcon };
