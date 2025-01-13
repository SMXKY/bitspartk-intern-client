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
  //   fileName,
}) => {
  const [fileName, setFileName] = useState("");

  return (
    <div className="text-input-field">
      <label className="text-input-icon-and-place-holder" htmlFor="uploadBtn">
        <img alt="file-icon" src={FileIcon} />
        <p>{placeHolder}</p>
      </label>
      <input
        type="file"
        id="uploadBtn"
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
      <span className="error-message file-limit-indicator">
        {fileName ? `Uploaded: ${fileName}` : ` Max size should be ${limit}MB`}
      </span>
    </div>
  );
};
