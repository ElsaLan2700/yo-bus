import { ReactComponent as IconMyLocation } from "../images/icon/my_location.svg";
import { ReactComponent as IconYoBikeLogo } from "../images/icon/YoBike_logo.svg";

function getMyLocationIcon() {
  return <IconMyLocation alt="my_location" />;
}

function getYoBikeLogoIcon() {
  return <IconYoBikeLogo alt="YoBikeLogo" />;
}

export { getMyLocationIcon, getYoBikeLogoIcon };
