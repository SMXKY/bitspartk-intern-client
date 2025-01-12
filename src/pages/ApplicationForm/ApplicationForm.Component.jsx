import { ApplicationHero } from "../../components/ApplicationHero/ApplicationHero.Component";
import { FormProgressBar } from "../../components/FormProgressBar/FormProgressBar.Component";
// import { LandingPageHero } from "../../components/LandingPageHero/LandingPageHero.Component";
import "./ApplicationForm.Styles.css";

export const ApplicationForm = () => {
  return (
    <div className="application-form">
      <ApplicationHero />
      <div className="form-content">
        <FormProgressBar />
      </div>
    </div>
  );
};
