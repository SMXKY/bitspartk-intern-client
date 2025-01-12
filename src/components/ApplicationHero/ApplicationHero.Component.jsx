import "./ApplicationHero.Styles.css";
import HeroImg from "../../assets/hero-img.svg";

export const ApplicationHero = ({ name }) => {
  return (
    <div className="application-hero">
      <div className="landing-page-hero">
        <div className="hero-img-holder">
          <img src={HeroImg} className="hero-img" alt="hero-img" />
        </div>
        <div className="hero-text">
          <p className="progress-text">Internship application</p>
        </div>
      </div>
    </div>
  );
};
