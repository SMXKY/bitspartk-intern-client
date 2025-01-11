import { useDispatch, useSelector } from "react-redux";
import "./NavLink.Styles.css";
import { Link } from "react-router-dom";
import { toggleNavLInks } from "../../redux/navigation/navigation.slice";

export const NavLink = ({ text, url, isOnSideBar, linkName }) => {
  const navLinkSatus = useSelector((state) => state.navigation.navigationLinks);
  const dispatch = useDispatch();

  console.log("check", navLinkSatus[linkName]);

  const handleLinkToggle = () => {
    dispatch(toggleNavLInks(linkName));
  };

  let isOnSideBarAndIsOn = false;
  let isOnNavBarAndIsOn = false;

  if (isOnSideBar && navLinkSatus[linkName]) {
    isOnSideBarAndIsOn = true;
  }

  if (!isOnSideBar && navLinkSatus[linkName]) {
    isOnNavBarAndIsOn = true;
  }

  return (
    <div className="nav-link" onClick={handleLinkToggle}>
      <Link
        className={`nav-link-text ${isOnSideBar ? "side-bar-link" : ""} ${
          isOnNavBarAndIsOn ? "nav-link-on" : ""
        } ${isOnSideBarAndIsOn ? "nav-link-on-side-bar" : ""}`}
        to={url}
      >
        {text}
      </Link>
    </div>
  );
};
