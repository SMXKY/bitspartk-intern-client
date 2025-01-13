import "./FormProgressBar.Styles.css";
import CheckIcon from "../../assets/check=icon.svg";
import { useSelector } from "react-redux";

export const FormProgressBar = () => {
  const formProgress = useSelector((state) => state.formProgress);

  return (
    <div className="form-progress-bar">
      <div className="all-sections">
        <div className="section">
          <div
            className={`section-indicator ${
              formProgress.isOn.partOne ? "section-indicator-on" : ""
            } ${
              formProgress.complete.partOne ? "section-indecator-complete" : ""
            }`}
          >
            <img src={CheckIcon} alt="check icon" />
            <p>Personal</p>
          </div>
        </div>

        <div className="section">
          <div
            className={`section-indicator ${
              formProgress.isOn.partTwo ? "section-indicator-on" : ""
            } ${
              formProgress.complete.partTwo ? "section-indecator-complete" : ""
            }`}
          >
            <img src={CheckIcon} alt="check icon" />
            <p>Professional</p>
          </div>
        </div>

        <div className="section">
          <div
            className={`section-indicator ${
              formProgress.isOn.partThree ? "section-indicator-on" : ""
            } ${
              formProgress.complete.partThree
                ? "section-indecator-complete"
                : ""
            }`}
          >
            <img src={CheckIcon} alt="check icon" />
            <p>Internship</p>
          </div>
        </div>
      </div>
      <div
        className={`progress-bar ${`progress-bar-evolution-part-${formProgress.progress}`}`}
      ></div>
      <div className={`progress-bar progress-bar-background`}></div>
    </div>
  );
};
