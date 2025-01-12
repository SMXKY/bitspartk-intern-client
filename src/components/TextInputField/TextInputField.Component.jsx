import "./TextInputField.Styles.css";

export const TextInputField = ({
  name,
  isRequired,
  validator,
  isEmailInput,
  placeHolder,
  isNumberInput,
  min,
  max,
}) => {
  return (
    <div className="text-input-field">
      {isEmailInput ? (
        <input type="email" placeholder={placeHolder} min={min} max={max} />
      ) : isNumberInput ? (
        <input type="number" placeholder={placeHolder} />
      ) : (
        <input type="text" placeholder={placeHolder} />
      )}

      <span className="input-name">
        {name}
        {isRequired ? " *" : ""}
      </span>
      <span className="error-message">error</span>
    </div>
  );
};
