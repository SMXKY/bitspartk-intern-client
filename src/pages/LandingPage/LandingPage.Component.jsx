import "./LandingPage.Styles.css";
import { LandingPageHero } from "../../components/LandingPageHero/LandingPageHero.Component";
import { ActionButton } from "../../components/ActionButton/ActionButton.component";
import { Link } from "react-router-dom";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.Component";
import { Review } from "../../components/Review/Review.Component";
import userImage from "../../assets/arya.jpg";
import { useDispatch } from "react-redux";
import { resetProgees } from "../../redux/formProgress/formProgress";

export const LandingPage = () => {
  const dispatch = useDispatch();
  dispatch(resetProgees());

  const reviews = [
    {
      content:
        "Never have thought programming could be this easy until Bitspark tech helped me out with their incredible internship.",
      img: "",
      name: "Bafon Ngum",
    },
    {
      content:
        "Never have thought programming could be this easy until Bitspark tech helped me out with their incredible internship.",
      img: userImage,
      name: "Bafon Ngum",
    },
    {
      content:
        "Never have thought programming could be this easy until Bitspark tech helped me out with their incredible internship.",
      img: userImage,
      name: "Bafon Ngum",
    },
    {
      content:
        "Never have thought programming could be this easy until Bitspark tech helped me out with their incredible internship.",
      img: userImage,
      name: "Bafon Ngum",
    },
    {
      content:
        "Never have thought programming could be this easy until Bitspark tech helped me out with their incredible internship.",
      img: "",
      name: "Bafon Ngum",
    },
  ];
  return (
    <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <LandingPageHero />

      <div className="landing-page-action-btns">
        <ActionButton name={"Apply"} url={"/apply"} />
        <Link to={"/login"} className="already-an-intern-login-link">
          Already an intern? <span>Login</span>
        </Link>
      </div>
      <div className="review-section" id="reviews-section">
        <SectionHeader name={"Reviews"} />
        <div className="hold-reviews">
          <div className="actual-reviews">
            {reviews.map(({ name, img, content }) => (
              <Review name={name} img={img} content={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
