import "./NavBar.Styles.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import { NavLink } from "../NavLink/NavLink.Component";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux/navigation/navigation.slice";

export const NavBar = () => {
  const [navBtn, setNavBtn] = useState("");
  const SideBar = useSelector((state) => state.navigation.sidebarOff);
  const dispatchSideBar = useDispatch();

  const handleNavBtnSwitch = () => {
    if (navBtn === "") {
      setNavBtn("sid-bar-btn-close");
      dispatchSideBar(toggleSideBar());
    } else {
      setNavBtn("");
      dispatchSideBar(toggleSideBar());
    }
  };

  return (
    <div className="nav-bar">
      <Link to={"/"}>
        <img className="logo-img" src={Logo} alt="bitspark-logo" />
      </Link>

      <div className="nav-links">
        <NavLink text="Reviews" url={"/reviews"} linkName={"reviews"} />
        <NavLink
          text="Become an Intern"
          url={"/"}
          linkName={"becomeAnIntern"}
        />
        <NavLink text="Login" url={"/login"} linkName={"login"} />
      </div>

      <div className={`side-bar-btn ${navBtn}`} onClick={handleNavBtnSwitch}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
