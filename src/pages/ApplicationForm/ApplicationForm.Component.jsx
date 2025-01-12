import { ApplicationHero } from "../../components/ApplicationHero/ApplicationHero.Component";
import { FormProgressBar } from "../../components/FormProgressBar/FormProgressBar.Component";
import { TextInputField } from "../../components/TextInputField/TextInputField.Component";
// import { LandingPageHero } from "../../components/LandingPageHero/LandingPageHero.Component";
import "./ApplicationForm.Styles.css";

export const ApplicationForm = () => {
  return (
    <div className="application-form">
      <ApplicationHero />
      <div className="form-content">
        <FormProgressBar />
        <div className="form-inputs-and-btns">
          <div className="form-input-section">
            <p className="title">Names *</p>
            <div className="actual-inputs actual-inputs-names">
              <TextInputField
                name={"First"}
                isRequired
                placeHolder={"Please enter your first name"}
              />

              <TextInputField
                name={"Last"}
                isRequired
                placeHolder={"Please enter your last name"}
              />
            </div>
          </div>

          <div className="form-input-section">
            <p className="title">Gender *</p>
            <div className="actual-inputs actual-inputs-genders">
              <div className="radio-input">
                <input type="radio" name="gender" value={"F"} id="female" />
                <label htmlFor="female" className="radion-label">
                  Female
                </label>
              </div>

              <div className="radio-input">
                <input type="radio" name="gender" value={"M"} id="male" />
                <label htmlFor="male" className="radion-label">
                  Male
                </label>
              </div>
            </div>
          </div>

          <div className="form-input-section">
            <p className="title">Date of birth *</p>
            <div className="actual-inputs actual-inputs-names actual-inputs-dob">
              <TextInputField
                name={"Year"}
                isRequired
                placeHolder={"Birth year"}
                min={1900}
                max={9999}
                isNumberInput
              />

              <TextInputField
                name={"Month"}
                isRequired
                placeHolder={"Birth month"}
                min={1}
                max={12}
                isNumberInput
              />

              <TextInputField
                name={"Day"}
                isRequired
                placeHolder={"Birth day"}
                min={1}
                max={31}
                isNumberInput
              />
            </div>
          </div>

          <div className="form-input-section">
            <p className="title">Contact *</p>
            <div className="actual-inputs actual-inputs-names">
              <TextInputField
                name={"Email"}
                isRequired
                placeHolder={"Please enter your email"}
                isEmailInput
              />

              <TextInputField
                name={"Number"}
                isRequired
                placeHolder={"Please enter your contact number"}
              />
            </div>
          </div>

          <button className="continure-btn">Continue</button>
        </div>
      </div>
    </div>
  );
};
