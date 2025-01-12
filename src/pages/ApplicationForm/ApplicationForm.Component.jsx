import { useState } from "react";
import { ApplicationHero } from "../../components/ApplicationHero/ApplicationHero.Component";
import { FormProgressBar } from "../../components/FormProgressBar/FormProgressBar.Component";
import { TextInputField } from "../../components/TextInputField/TextInputField.Component";
import { useSelector } from "react-redux";
// import { LandingPageHero } from "../../components/LandingPageHero/LandingPageHero.Component";
import "./ApplicationForm.Styles.css";
import { useDispatch } from "react-redux";
import {
  incrementProgress,
  decrementProgress,
  updatePart,
} from "../../redux/formProgress/formProgress";
import { IoInformation } from "react-icons/io5";

export const ApplicationForm = () => {
  //   const formProgress = useSelector((state) => state.formProgress);
  const dispatch = useDispatch();

  const [formInformation, setFormInformation] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: null,
    email: "",
    phoneNumber: "",
    school: "",
    department: "",
    level: "",
    internshipTopic: "",
    studyStack: "",
    durationInMonths: 0,
    cv: "",
    supportDocument: "",
    writtenApplication: "",
    year: 0,
    month: 0,
    day: 0,
    previousErro: "",
  });

  const handleFormInformation = (formProp, value) => {
    if (!formInformation[formProp]) {
      dispatch(incrementProgress());
    } else if (!value) {
      dispatch(decrementProgress());
    }

    setFormInformation((prevInfo) => ({
      ...prevInfo,
      [formProp]: value,
    }));
  };

  const handleRadioButton = (value) => {
    if (!formInformation.gender) {
      dispatch(incrementProgress());
    }

    setFormInformation((prevInfo) => ({
      ...prevInfo,
      gender: value,
    }));
  };

  const [currentIndex, setCurrentIndex] = useState(1);

  const slides = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
  ];

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleFirstNextButton = (e) => {
    e.preventDefault();

    const errors = [];

    // Validate first name
    if (!formInformation.firstName.trim()) {
      errors.push("First name is required.");
      formInformation.firstName = "";
    }

    // Validate last name
    if (!formInformation.lastName.trim()) {
      errors.push("Last name is required.");
    }

    // Validate gender
    if (!formInformation.gender) {
      errors.push("Please select a gender.");
    }

    // Validate date of birth (year, month, day)
    if (
      !formInformation.year ||
      isNaN(formInformation.year) ||
      formInformation.year < 1900 ||
      formInformation.year > 4000
    ) {
      errors.push("valid year of birth is required ");
    }

    if (
      !formInformation.month ||
      isNaN(formInformation.month) ||
      formInformation.month < 1 ||
      formInformation.month > 12
    ) {
      errors.push("Month of birth is required and must be between 1 and 12.");
    }

    if (
      !formInformation.day ||
      isNaN(formInformation.day) ||
      formInformation.day < 1 ||
      formInformation.day > 31
    ) {
      errors.push("Day of birth is required and must be between 1 and 31.");
    } else {
      const daysInMonth = new Date(
        formInformation.year,
        formInformation.month,
        0
      ).getDate();
      if (formInformation.day > daysInMonth) {
        errors.push(
          `Day of birth must be between 1 and ${daysInMonth} for the selected month.`
        );
      }
    }

    // Validate email
    if (!formInformation.email.trim()) {
      errors.push("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(formInformation.email)) {
      errors.push("Please enter a valid email address.");
    }

    if (
      !formInformation.phoneNumber ||
      formInformation.phoneNumber.length < 8
    ) {
      errors.push("A valid phone number is required.");
    }
    //End of first part of the form -----------------------------

    // Display errors or proceed with form submission
    if (errors.length > 0) {
      alert(errors[0]);
      if (errors[0] !== formInformation.previousErro) {
        dispatch(decrementProgress());
        formInformation.previousErro = errors[0];
      }
    } else {
      //   console.log(formInformation);
      console.log("Form submitted with information:", formInformation);
      dispatch(updatePart({ part: 1, method: "activate" }));
      if (formInformation.school) {
        console.log("hi");
        dispatch(incrementProgress());
      }

      if (formInformation.department) {
        dispatch(incrementProgress());
      }
      if (formInformation.level) {
        dispatch(incrementProgress());
      }
      if (formInformation.internshipTopic) {
        dispatch(incrementProgress());
      }

      handleNext();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleFistBackBtn = (e) => {
    e.preventDefault();
    dispatch(updatePart({ part: 1, method: "de-activate" }));
    // setCurrentIndex(1);
    handlePrev();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSecondNextBtn = (e) => {
    e.preventDefault();
    const errors = [];

    const allowedLevels = [1, 2, 3, 4, 5, 6, 100, 200, 300, 400, 500, 600];

    if (!formInformation.school) {
      errors.push("A valid university/school name is required");
    }

    if (!formInformation.department) {
      errors.push("A valid department name is required");
    }

    if (
      !formInformation.level ||
      !allowedLevels.includes(Number(formInformation.level))
    ) {
      errors.push("A valid university level is required");
    }

    if (!formInformation.internshipTopic) {
      errors.push("A valid intership/defence topic is required");
    }

    if (errors.length > 0) {
      alert(errors[0]);
      if (errors[0] !== formInformation.previousErro) {
        dispatch(decrementProgress());
        formInformation.previousErro = errors[0];
      }
    } else {
      //   console.log(formInformation);
      //   console.log("Form submitted with information:", formInformation);
      dispatch(updatePart({ part: 2, method: "activate" }));
      //   if (formInformation.school) {
      //     console.log("hi");
      //     dispatch(incrementProgress());
      //   }

      //   if (formInformation.department) {
      //     dispatch(incrementProgress());
      //   }
      //   if (formInformation.level) {
      //     dispatch(incrementProgress());
      //   }
      //   if (formInformation.internshipTopic) {
      //     dispatch(incrementProgress());
      //   }

      handleNext();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="application-form">
      <ApplicationHero />
      <form action="" className="application-form-holder">
        <div className="form-content">
          <FormProgressBar />

          <div className="form-slides">
            <div
              className={`form-inputs-and-btns form-first-part slide ${
                slides[0].id === currentIndex ? "slide-active" : ""
              }`}
            >
              <div className="form-input-section">
                <p className="title">Names *</p>
                <div className="actual-inputs actual-inputs-names">
                  <TextInputField
                    name={"First"}
                    isRequired
                    placeHolder={"Please enter your first name"}
                    value={formInformation.firstName}
                    handleUpdate={handleFormInformation}
                    formProp={"firstName"}
                  />

                  <TextInputField
                    name={"Last"}
                    isRequired
                    placeHolder={"Please enter your last name"}
                    value={formInformation.lastName}
                    handleUpdate={handleFormInformation}
                    formProp={"lastName"}
                  />
                </div>
              </div>

              <div className="form-input-section">
                <p className="title">Gender *</p>
                <div className="actual-inputs actual-inputs-genders">
                  <div className="radio-input">
                    <input
                      type="radio"
                      name="gender"
                      value={"F"}
                      id="female"
                      onClick={(e) => handleRadioButton(e.target.value)}
                    />
                    <label htmlFor="female" className="radion-label">
                      Female
                    </label>
                  </div>

                  <div className="radio-input">
                    <input
                      type="radio"
                      name="gender"
                      value={"M"}
                      id="male"
                      onClick={(e) => handleRadioButton(e.target.value)}
                    />
                    <label htmlFor="male" className="radion-label">
                      Male
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-input-section">
                <p className="title">Date of birth *</p>
                <div className="actual-inputs actual-inputs-names actual-inputs-dob">
                  <TextInputField
                    name={"Year"}
                    isRequired
                    placeHolder={"Birth year"}
                    min={1900}
                    max={9999}
                    isNumberInput
                    value={formInformation.year}
                    handleUpdate={handleFormInformation}
                    formProp={"year"}
                  />

                  <TextInputField
                    name={"Month"}
                    isRequired
                    placeHolder={"Birth month"}
                    min={1}
                    max={12}
                    isNumberInput
                    value={formInformation.month}
                    handleUpdate={handleFormInformation}
                    formProp={"month"}
                  />

                  <TextInputField
                    name={"Day"}
                    isRequired
                    placeHolder={"Birth day"}
                    min={1}
                    max={31}
                    isNumberInput
                    value={formInformation.day}
                    handleUpdate={handleFormInformation}
                    formProp={"day"}
                  />
                </div>
              </div>

              <div className="form-input-section">
                <p className="title">Contact *</p>
                <div className="actual-inputs actual-inputs-names">
                  <TextInputField
                    name={"Email"}
                    isRequired
                    placeHolder={"Please enter your email"}
                    isEmailInput
                    value={formInformation.email}
                    handleUpdate={handleFormInformation}
                    formProp={"email"}
                  />

                  <TextInputField
                    name={"Number"}
                    isRequired
                    placeHolder={"Please enter your contact number"}
                    value={formInformation.phoneNumber}
                    handleUpdate={handleFormInformation}
                    formProp={"phoneNumber"}
                  />
                </div>
              </div>

              <button className="continure-btn" onClick={handleFirstNextButton}>
                Continue
              </button>
            </div>

            <div
              className={`form-inputs-and-btns form-second-part slide ${
                slides[1].id === currentIndex ? "slide-active" : ""
              }`}
            >
              <div className="form-input-section">
                <div className="actual-inputs actual-inputs-names actual-inputs-school">
                  <TextInputField
                    name={"School"}
                    isRequired
                    placeHolder={"Please enter the name of your university."}
                    value={formInformation.school}
                    handleUpdate={handleFormInformation}
                    formProp={"school"}
                  />
                </div>
              </div>

              <div className="form-input-section">
                <div className="actual-inputs actual-inputs-names">
                  <TextInputField
                    name={"Department"}
                    isRequired
                    placeHolder={"Please enter you department name."}
                    value={formInformation.department}
                    handleUpdate={handleFormInformation}
                    formProp={"department"}
                  />

                  <TextInputField
                    name={"Level"}
                    isRequired
                    placeHolder={"Please enter you universtiy year/level."}
                    value={formInformation.level}
                    handleUpdate={handleFormInformation}
                    formProp={"level"}
                    isNumberInput
                  />
                </div>
              </div>

              <div className="form-input-section">
                <div className="actual-inputs actual-inputs-names actual-inputs-school">
                  <TextInputField
                    name={"Internsip report/Defence Topic"}
                    isRequired
                    placeHolder={"Please enter your defence topic."}
                    value={formInformation.internshipTopic}
                    handleUpdate={handleFormInformation}
                    formProp={"internshipTopic"}
                  />
                </div>
              </div>

              <div className="form-input-next-back-btns">
                <button className="continure-btn" onClick={handleFistBackBtn}>
                  Back
                </button>

                <button className="continure-btn" onClick={handleSecondNextBtn}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
