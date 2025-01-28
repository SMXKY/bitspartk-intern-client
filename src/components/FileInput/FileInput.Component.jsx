import "./FileInput.Styles.css";
import FileIcon from "../../assets/file-icon.svg";
import { useState } from "react";

export const FileInput = ({
  name,
  isRequired,
  placeHolder,
  limit,
  value,
  handleUpdate,
  formProp,
  inputName,
  //   fileName,
}) => {
  const [fileName, setFileName] = useState("");

  return (
    <label className="text-input-field" style={{ cursor: "pointer" }}>
      <label className="text-input-icon-and-place-holder" htmlFor={inputName}>
        <img alt="file-icon" src={FileIcon} />
        <p>{placeHolder}</p>
      </label>
      <input
        type="file"
        id={inputName}
        className="filieInput-btn-btn"
        name={formProp}
        onChange={(e) => {
          const newFile = new File(
            [e.target.files[0]],
            e.target.files[0].name,
            {
              type: e.target.files[0].type,
            }
          );

          setFileName(newFile.name);

          return handleUpdate(formProp, newFile);
        }}
      />
      <span className="input-name">
        {name}
        {isRequired ? " *" : ""}
      </span>
      <span className="error-message">error</span>
      <span className="error-message file-limit-indicator hide-file-name">
        {fileName ? `Uploaded: ${fileName}` : ` Max size should be ${limit}MB`}
      </span>
    </label>
  );
};
