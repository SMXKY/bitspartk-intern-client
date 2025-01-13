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
  value,
  handleUpdate,
  formProp,
}) => {
  return (
    <div className="text-input-field">
      {isEmailInput ? (
        <input
          type="email"
          placeholder={placeHolder}
          onChange={(e) => handleUpdate(formProp, e.target.value)}
          required={isRequired}
          name={formProp}
        />
      ) : isNumberInput ? (
        <input
          type="number"
          placeholder={placeHolder}
          onChange={(e) => handleUpdate(formProp, e.target.value)}
          required={isRequired}
          min={min}
          max={max}
          name={formProp}
        />
      ) : (
        <input
          type="text"
          placeholder={placeHolder}
          value={value}
          onChange={(e) => handleUpdate(formProp, e.target.value)}
          required={isRequired}
          name={formProp}
        />
      )}

      <span className="input-name">
        {name}
        {isRequired ? " *" : ""}
      </span>
      <span className="error-message">error</span>
    </div>
  );
};
