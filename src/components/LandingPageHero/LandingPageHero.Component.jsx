import "./LandingPageHero.Styles.css";
import HeroImg from "../../assets/hero-img.svg";
import LocationIcon from "../../assets/location-icon.svg";

export const LandingPageHero = () => {
  return (
    <div className="landing-page-hero">
      <div className="hero-img-holder">
        <img src={HeroImg} className="hero-img" alt="hero-img" />
      </div>

      <div className="hero-text">
        <p className="main-hero-text">Creative Internship</p>
        <p className="sub-hero-text">
          Make your creativy limitles by becoming an intern
        </p>
        <div className="hero-location">
          <img
            src={LocationIcon}
            className="hero-location-icon"
            alt="location-icon"
          />
          <span>Mile 7 Nkwen, Bamenda</span>
        </div>
      </div>
    </div>
  );
};
