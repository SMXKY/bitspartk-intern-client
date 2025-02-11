import "./TextInputField.Styles.css";
import { useState } from "react";

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
  liveValidation,
}) => {
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  const LiveValidation = {
    firstName: (e) => {
      const input = e.target.value.trim();

      if (!input) {
        setError({ isError: true, message: "A Valid First Name is Required" });
      } else {
        setError({ isError: false, message: "" });
      }
    },
    lastName: (e) => {
      const input = e.target.value.trim();

      if (!input) {
        setError({ isError: true, message: "A Valid Last Name is Required" });
      } else {
        setError({ isError: false, message: "" });
      }
    },
    year: (e) => {
      const input = e.target.value.trim();

      if (!input || input < 1900) {
        setError({
          isError: true,
          message: "A Valid Year of Birth is Required e.g 2004",
        });
      } else if (isNaN(Number(input))) {
        setError({
          isError: true,
          message: "Year must be a number e.g 2002",
        });
      } else {
        setError({ isError: false, message: "" });
      }
    },
    month: (e) => {
      const input = e.target.value.trim();

      if (!input || input > 12 || input < 1) {
        setError({
          isError: true,
          message: "A Valid Month of Birth is Required e.g 8",
        });
      } else if (isNaN(Number(input))) {
        setError({
          isError: true,
          message: "Month must be a number e.g 8",
        });
      } else {
        setError({ isError: false, message: "" });
      }
    },
    day: (e) => {
      const input = e.target.value.trim();

      if (!input || input < 1 || input > 31) {
        setError({
          isError: true,
          message: "A Valid Day of Birth is Required e.g 1",
        });
      } else if (isNaN(Number(input))) {
        setError({
          isError: true,
          message: "Day must be a number e.g 2",
        });
      } else {
        setError({ isError: false, message: "" });
      }
    },
    email: (e) => {
      const input = e.target.value.trim();

      if (!input) {
        setError({ isError: true, message: "A Valid Email is Required" });
      } else {
        setError({ isError: false, message: "" });
      }
    },
    phoneNumber: (e) => {
      const input = e.target.value.trim().replace(/\D/g, ""); // Remove non-digits

      console.log("input", input.length);

      if (
        !input ||
        input.length < 1 ||
        input.length < 9 ||
        input.split().length > 13
      ) {
        setError({
          isError: true,
          message: "A Valid Phone number is Required e.g 655877412",
        });
      } else {
        setError({ isError: false, message: "" });
      }
    },
    school: (e) => {
      const input = e.target.value.trim();

      if (!input) {
        setError({
          isError: true,
          message: "A Valid School Name is Required e.g University of Bamenda",
        });
      } else {
        setError({ isError: false, message: "" });
      }
    },
    department: (e) => {
      const input = e.target.value.trim();

      if (!input) {
        setError({
          isError: true,
          message: "A Valid Department Name is Required.",
        });
      } else {
        setError({ isError: false, message: "" });
      }
    },
    level: (e) => {
      const input = e.target.value.trim();

      if (!input) {
        setError({
          isError: true,
          message: "A Valid Level is Required e.g 1 or 100",
        });
      } else {
        setError({ isError: false, message: "" });
      }
    },
  };

  const handleChanges = (e) => {
    handleUpdate(formProp, e.target.value);
    LiveValidation[formProp](e);
  };

  return (
    <div className="text-input-field">
      {isEmailInput ? (
        <input
          type="email"
          placeholder={placeHolder}
          onChange={(e) => handleChanges(e)}
          required={isRequired}
          name={formProp}
        />
      ) : isNumberInput ? (
        <input
          type="number"
          placeholder={placeHolder}
          onChange={(e) => handleChanges(e)}
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
          onChange={(e) => handleChanges(e)}
          required={isRequired}
          name={formProp}
        />
      )}

      <span className="input-name">
        {name}
        {isRequired ? " *" : ""}
      </span>
      <span className={`${error.isError ? "error-message" : "hide-errors"}`}>
        {error.message}
      </span>
    </div>
  );
};
