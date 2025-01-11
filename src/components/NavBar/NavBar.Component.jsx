import "./NavBar.Styles.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import { NavLink } from "../NavLink/NavLink.Component";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../redux/navigation/navigation.slice";
import { useEffect } from "react";

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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      if (scrollPosition > 450) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-bar ${isScrolled ? "nav-bar-scrolled" : ""}`}>
      <Link to={"/"}>
        <img className="logo-img" src={Logo} alt="bitspark-logo" />
      </Link>

      <div className="nav-links">
        <NavLink
          text="Reviews"
          url={"/#reviews-section"}
          linkName={"reviews"}
          sectionId={"reviews-section"}
        />
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
