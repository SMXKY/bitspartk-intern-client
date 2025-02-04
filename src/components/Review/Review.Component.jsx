import "./Review.Styles.css";
import defaultImg from "../../assets/user-default-img.jpg";
import { useState } from "react";

export const Review = ({ content, img, name }) => {
  // if (!content) {
  //   alert(name);
  // }

  console.log(content);

  const [textContent, setTextContent] = useState(content);

  let isSplit = false;

  if (textContent && textContent.split("").length > 155) {
    setTextContent(textContent.split("").slice(0, 125).join("") + " ...");
    isSplit = true;
    console.log(isSplit);
  }

  return (
    <div className="review-component">
      <div className="review-content">
        <p className="review-content-p">{textContent}</p>
        <div className="review-information">
          <img src={img ? img : defaultImg} alt="review-img" />
          <div className="user-name">{name}</div>
        </div>
      </div>
    </div>
  );
};
