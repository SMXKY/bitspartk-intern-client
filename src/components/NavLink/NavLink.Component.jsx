import { useDispatch, useSelector } from "react-redux";
import "./NavLink.Styles.css";
import { Link } from "react-router-dom";
import { toggleNavLInks } from "../../redux/navigation/navigation.slice";

export const NavLink = ({ text, url, isOnSideBar, linkName, sectionId }) => {
  const navLinkSatus = useSelector((state) => state.navigation.navigationLinks);
  const dispatch = useDispatch();

  // const scrollToSection = (e, sectionId) => {};

  const handleLinkToggle = (e) => {
    if (sectionId) {
      e.preventDefault();

      const offset = window.innerWidth <= 620 ? 90 : 120;

      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - offset,
          behavior: "smooth",
        });
      }
    }

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
