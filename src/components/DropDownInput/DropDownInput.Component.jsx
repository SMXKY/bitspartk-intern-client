import "./DropDownInput.Styles.css";

export const DropDownInput = ({
  name,
  isRequired,
  values,
  value,
  handleUpdate,
  formProp,
}) => {
  return (
    <div className="text-input-field">
      <select
        name={formProp}
        id=""
        className="drop-down-input-select"
        value={value}
        onChange={(e) => handleUpdate(formProp, e.target.value)}
      >
        {values.map((val) => (
          <option value={val} className="drop-down-input-option">
            {val}
          </option>
        ))}
      </select>
      <span className="input-name">
        {name}
        {isRequired ? " *" : ""}
      </span>
      <span className="error-message">error</span>
    </div>
  );
};
