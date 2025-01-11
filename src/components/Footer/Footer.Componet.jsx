import "./Footer.Styles.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="company-tag">
        <Link to={"/"}>
          <img className="logo-img" src={Logo} alt="bitspark-logo" />
        </Link>
        <p>BitSpark Tech Ltd</p>
      </div>
    </div>
  );
};
