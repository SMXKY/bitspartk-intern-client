import "./LandingPage.Styles.css";
import { LandingPageHero } from "../../components/LandingPageHero/LandingPageHero.Component";
import { ActionButton } from "../../components/ActionButton/ActionButton.component";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div>
      <LandingPageHero />
      <div className="landing-page-action-btns">
        <ActionButton name={"Apply"} url={"/apply"} />
        <Link to={"/login"} className="already-an-intern-login-link">
          Already an intern? <span>Login</span>
        </Link>
      </div>
    </div>
  );
};
