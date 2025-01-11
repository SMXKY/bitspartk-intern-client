import "./ActionButton.styles.css";
import { Link } from "react-router-dom";

export const ActionButton = ({ name, url }) => {
  return (
    <Link className="action-btn" to={url}>
      <button>{name}</button>
    </Link>
  );
};
