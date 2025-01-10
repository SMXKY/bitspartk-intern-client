import "./LandingPageHero.Styles.css";
import HeroImg from "../../assets/hero-img.svg";

export const LandingPageHero = () => {
  return (
    <div className="landing-page-hero">
      <div className="hero-img-holder">
        <img src={HeroImg} className="hero-img" alt="hero-img" />
      </div>
    </div>
  );
};
