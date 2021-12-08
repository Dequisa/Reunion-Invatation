import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Form.css";

function Form() {
  const [userInfo, setUserInfo] = useState({
    attending: "",
    name: "",
    email: "",
    phoneNumber: "",
    socialMedia: "",
    NoOfGuest: "",
    contribution: "",
  });

  const visitorPOST = async (info) => {
    console.log("InPost", userInfo);
    try {
      let postResponse = await axios.post(
        "https://protected-ocean-06621.herokuapp.com/visitor",
        // "http://localhost:3001/visitor",
        userInfo
      );
      console.log(postResponse);
      history.push(`/exit`);
    } catch (err) {
      console.log("Error Response From Add User Request:", err);
    }
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({
      attending: "",
      name: "",
      email: "",
      phoneNumber: "",
      socialMedia: "",
      noOfGuest: "",
      contribution: "",
    });
    visitorPOST();
  };
  const handleSelect = (event) => {
    // console.log(event.target.value);
    if (event.target.checked) {
      setUserInfo({ attending: event.target.value });
    }
  };

  const handleTextChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
  };

  return (
    <div className="Form">
      {console.log("InReturn", userInfo)}
      <form onSubmit={handleSubmit}>
        <h2>Invitation Form</h2>
        <p>
          Required fields are followed by{" "}
          <strong>
            <abbr title="required">*</abbr>
          </strong>
          .
        </p>

        {/* RSVP */}

        <fieldset>
          <legend>RSVP</legend>
          <ul>
            <li>
              {/* <label htmlFor="attending"> */}
              <input
                type="radio"
                id="attending"
                name="rsvp"
                value="Will Attend"
                // value={userInfo.attending}
                onChange={handleSelect}
                required
              />
              Will Attend
              {/* </label> */}
            </li>
            <li>
              {/* <label htmlFor="Will Not Attend"> */}
              <input
                type="radio"
                id="Will Not Attend"
                name="rsvp"
                value="Will Not Attend"
                onChange={handleSelect}
              />
              Will Not Attend
              {/* </label> */}
            </li>
            <li>
              {/* <label htmlFor="Will Not Attend But Would Like to Contribute"> */}
              <input
                type="radio"
                id="Will Not Attend But Would Like to Contribute"
                name="rsvp"
                value="Will Not Attend But Would Like to Contribute"
                onChange={handleSelect}
              />
              Will Not Attend But Would Like to Contribute
              {/* </label> */}
            </li>
            <li>
              {/* <label htmlFor="Undecided"> */}
              <input
                type="radio"
                id="Undecided"
                name="rsvp"
                value="Undecided"
                onChange={handleSelect}
              />
              Undecided
              {/* </label> */}
            </li>
          </ul>
        </fieldset>

        {/* Contact information */}
        <section>
          <h2>Contact Information</h2>

          <fieldset>
            <legend>Your Information</legend>
            <p>
              <label htmlFor="name">
                <span>Preferred Name: </span>
                <strong>
                  <abbr title="required">*</abbr>
                </strong>
              </label>
              <input
                type="text"
                id="name"
                value={userInfo.name}
                onChange={handleTextChange}
                name="username"
                required
                maxLength="35"
              />
            </p>
            <p>
              <label htmlFor="mail">
                <span>E-mail: </span>
              </label>
              <input
                type="text"
                id="email"
                value={userInfo.email}
                onChange={handleTextChange}
                name="usermail"
              />
            </p>
            <p>
              <label htmlFor="phone">
                <span>Phone Number: </span>
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleTextChange}
                name="phone"
              />
            </p>
            <p>
              <label htmlFor="handle">
                <span>Social Media Handle: </span>
              </label>
              <input
                type="text"
                id="socialMedia"
                value={userInfo.socialMedia}
                onChange={handleTextChange}
                name="handle"
              />
            </p>
          </fieldset>
        </section>
        <section>
          <h2>Additional Information</h2>
          <fieldset>
            <legend>Guest</legend>
            <p>
              <label htmlFor="guest">
                <span>How many guest do you plan to bring? </span>
                <strong>
                  <abbr title="required">*</abbr>
                </strong>
              </label>
              <input
                type="number"
                id="noOfGuest"
                value={userInfo.noOfGuest}
                onChange={handleTextChange}
                name="guest"
                required
              />
            </p>
          </fieldset>
        </section>

        {/* Contibutions */}

        <section>
          <h2>Contributions</h2>
          <fieldset>
            <legend>Want to contribute?</legend>
            <span>
              I want to contribute financially!
              <a
                href="https://www.gofundme.com/f/help-host-the-first-st-agathas-home-reunion?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1"
                target="_blank"
                rel="noreferrer"
              >
                Click Here
              </a>
            </span>
            <p>
              <label htmlFor="donate">
                <span>Non financial contribution: </span>
              </label>
              <input
                type="text"
                id="contribution"
                value={userInfo.contribution}
                onChange={handleTextChange}
                name="donate"
              />
            </p>
          </fieldset>
        </section>

        {/* submit button */}
        <section>
          <p>
            <button type="submit">Submit</button>
          </p>
        </section>
      </form>
    </div>
  );
}
export default Form;
