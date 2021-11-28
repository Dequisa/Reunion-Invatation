import { Link, useHistory } from "react-router-dom";
import "./Form.css";

function Form() {
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/exit");
  };

  return (
    <div className="Form">
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
              <label for="title_1">
                <input type="radio" id="title_1" name="title" value="K" />
                Will Attend
              </label>
            </li>
            <li>
              <label for="title_2">
                <input type="radio" id="title_2" name="title" value="Q" />
                Will Not Attend
              </label>
            </li>
            <li>
              <label for="title_3">
                <input type="radio" id="title_3" name="title" value="J" />
                Will Not Attend But Would Like to Contribute
              </label>
            </li>
            <li>
              <label for="title_3">
                <input type="radio" id="title_3" name="title" value="J" />
                Undecided
              </label>
            </li>
          </ul>
        </fieldset>

        {/* Contact information */}
        <section>
          <h2>Contact Information</h2>

          <fieldset>
            <legend>Your Information</legend>
            <p>
              <label for="name">
                <span>Preferred Name: </span>
                <strong>
                  <abbr title="required">*</abbr>
                </strong>
              </label>
              <input
                type="text"
                id="name"
                name="username"
                required
                maxLength="35"
              />
            </p>
            <p>
              <label for="mail">
                <span>E-mail: </span>
              </label>
              <input type="email" id="mail" name="usermail" />
            </p>
            <p>
              <label for="phone">
                <span>Phone Number: </span>
              </label>
              <input type="text" id="phone" name="phone" />
            </p>
            <p>
              <label for="handle">
                <span>Social Media Handle: </span>
              </label>
              <input type="text" id="handle" name="handle" />
            </p>
          </fieldset>
        </section>
        <section>
          <h2>Additional Information</h2>
          <fieldset>
            <legend>Guest</legend>
            <p>
              <label for="guest">
                <span>How many guest do you plan to bring? </span>
                <strong>
                  <abbr title="required">*</abbr>
                </strong>
              </label>
              <input type="number" id="guest" name="guest" required />
            </p>
          </fieldset>
        </section>

        {/* Contibutions */}

        <section>
          <h2>Contributions</h2>
          <fieldset>
            <legend>Want to contribute?</legend>
            <a href="https://www.google.com" target="_blank">
              I want to contribute financially! Click Here
            </a>
            <p>
              <label for="donate">
                <span>Non financial contrubtion: </span>
              </label>
              <input type="text" id="donate" name="donate" />
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
