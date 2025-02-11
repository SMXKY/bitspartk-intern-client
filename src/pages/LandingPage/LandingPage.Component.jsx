import "./LandingPage.Styles.css";
import { LandingPageHero } from "../../components/LandingPageHero/LandingPageHero.Component";
import { ActionButton } from "../../components/ActionButton/ActionButton.component";
import { Link } from "react-router-dom";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader.Component";
import { Review } from "../../components/Review/Review.Component";
import userImage from "../../assets/arya.jpg";
import { useDispatch } from "react-redux";
import { resetProgees } from "../../redux/formProgress/formProgress";
import { useState, useEffect } from "react";

export const LandingPage = () => {
  const dispatch = useDispatch();

  const reviewsPlaceholder = [
    {
      review:
        "Never have thought programming could be this easy until Bitspark tech helped me out with their incredible internship.",
      img: "https://bitsparktec.com/static/media/engr_bafon.7488ae4a1f959a9f49a7.png",
      reviewerName: "Bafon Precious Ngum",
    },
    {
      review:
        "I recently completed an internship of two months at Bitspark. One of the highlights of my internship was the opportunity to work on real-world projects and contribute to the development of cutting-edge technologies. What impressed me most about Bitspark Tech was its commitment to innovation, teamwork, and employee growth.",
      img: "",
      reviewerName: "Taku Immaculate",
    },
    {
      review:
        "Never have thought programming could be this easy until Bitspark tech helped me out with their incredible internship.",
      img: userImage,
      reviewerName: "Bafon Ngum",
    },
    {
      review:
        "Never have thought programming could be this easy until Bitspark tech helped me out with their incredible internship.",
      img: userImage,
      reviewerName: "Bafon Ngum",
    },
    {
      review:
        "Never have thought programming could be this easy until Bitspark tech helped me out with their incredible internship.",
      img: "",
      name: "Bafon Ngum",
    },
  ];

  const [reviews, setReviews] = useState(reviewsPlaceholder);

  useEffect(() => {
    dispatch(resetProgees());

    const getReviews = async () => {
      // return await data.data;
      try {
        const response = await fetch("http://localhost:8000/api/v1/reviews", {
          method: "GET",
        });

        const data = await response.json();
        console.log("DATAAAAAA", data.data);
        setReviews(data.data || reviewsPlaceholder);
      } catch (err) {
        console.log("There was and error fetching the reviews: ", err);
        setReviews(reviewsPlaceholder);
      }
    };

    getReviews();
  }, [dispatch]);

  return (
    <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <LandingPageHero />

      <div className="landing-page-action-btns">
        <ActionButton name={"Apply"} url={"/apply"} />
        <Link to={"/#login"} className="already-an-intern-login-link">
          Already an intern? <span>Login</span>
        </Link>
      </div>
      <div className="review-section" id="reviews-section">
        <SectionHeader name={"Reviews"} />
        <div className="hold-reviews">
          <div className="actual-reviews">
            {reviews.map(({ reviewerName, img, review, _id }) => (
              <Review
                name={reviewerName}
                img={img}
                content={review}
                key={_id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
