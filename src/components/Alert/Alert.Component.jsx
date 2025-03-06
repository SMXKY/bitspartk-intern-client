import "./Alert.Styles.css";
import ErrorIcon from "../../assets/error-icon.png";
import AlertIcon from "../../assets/alert-icon.png";
import WarningIcon from "../../assets/waringin-icon.png";
import SuccessIcon from "../../assets/success-icon.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideAlert } from "../../redux/Alert/Alert.Slice";

export const Alert = () => {
  const alertInfo = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const message = alertInfo.message;
  const type = alertInfo.type;

  const closeImg = require(`../../assets/Close-${type}.png`);

  const specifics = {
    img: "",
    holderClass: "",
    iconHolcderClass: "",
    closeButtonClass: "",
  };

  if (type === "error") {
    specifics.img = ErrorIcon;
  } else if (type === "alert") {
    specifics.img = AlertIcon;
    type = "alert-nu";
  } else if (type === "warning") {
    specifics.img = WarningIcon;
  } else if (type === "success") {
    specifics.img = SuccessIcon;
  }

  specifics.holderClass = `${type}-holder`;
  specifics.iconHolcderClass = `${type}-icon-holder`;
  specifics.closeButtonClass = `${type}-close-btn`;
  //   alert(type);

  return (
    <div className={`alert-holder ${alertInfo.isVisible ? "show-alert" : ""}`}>
      <div className={`alert ${specifics.holderClass}`}>
        <div className="alert-information">
          <div className={`alert-image ${specifics.iconHolcderClass}`}>
            <img src={specifics.img} alt="alert-icon" />
          </div>

          <p className="alert-text">{message}</p>
        </div>

        <button
          className={`close-alert-button ${specifics.closeButtonClass}`}
          onClick={() => {
            dispatch(hideAlert());
            // console.log("hide alert here");
          }}
        >
          <img src={closeImg} alt="close-icon" />
        </button>
      </div>
    </div>
  );
};
