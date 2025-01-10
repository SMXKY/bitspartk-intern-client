import "./NavBar.Styles.css";
import Logo from "../../assets/logo.svg";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <img className="logo-img" src={Logo} alt="bitspark-logo" />
    </div>
  );
};
