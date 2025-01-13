import "./Review.Styles.css";
import defaultImg from "../../assets/user-default-img.jpg";

export const Review = ({ content, img, name }) => {
  return (
    <div className="review-component">
      <div className="review-content">
        <p className="review-content-p">{content}</p>
        <div className="review-information">
          <img src={img ? img : defaultImg} alt="review-img" />
          <div className="user-name">{name}</div>
        </div>
      </div>
    </div>
  );
};
