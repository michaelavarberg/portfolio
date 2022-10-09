import Project from "../components/Project";
import { useState } from "react";

function Navigation(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleEmailChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    value.match(re)
      ? setFeedback("")
      : setFeedback("Please enter a valid email");

    setEmail(value);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    return name === "name" ? setName(value) : setMessageText(value);
  };

  const handleMouseOut = (e) => {
    e.target.value === ""
      ? setFeedback("All fields are required.")
      : setFeedback("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessageText("");
  };

  if (props.nav === "about-me") {
    return (
      <div>
        <main>
          <section
            id="about-me"
            className="d-flex-inline justify-content-start"
          >
            <h2 className="m-3">About Me</h2>
            <div className="d-flex justify-content-center">
              <figure id="personal-photo">
                <img
                  src={require("../assets/KBMS-Michaela-Varberg.jpg")}
                  alt="Michaela Varberg"
                />
              </figure>
            </div>
            <h4 className="m-5 text-center">
              I am a junior software developer living in Denver, Colorado. I
              studied Applied Math in college and then went on to teach 7th
              grade math. I love problem-solving and critical thinking, hence my
              career change! When I'm not coding, I enjoy reading, golfing and
              playing pickleball.
            </h4>
          </section>
        </main>
      </div>
    );
  } else if (props.nav === "my-apps") {
    return (
      <div>
        <section id="my-apps" className="d-flex-inline justify-content-start">
          <h2 className="m-3">My Applications</h2>
          <section className="d-flex flex-column align-items-center p-5">
            <Project
              id={`kissTheCook`}
              href={`https://kiss-the-cook.herokuapp.com/api/recipes`}
              image={require("../assets/kissthecook.PNG")}
              name={`Kiss The Cook`}
            />
            <Project
              id={`fuzzyFriends`}
              href={`https://csundheimjr.github.io/fuzzy-friend-finder/`}
              image={require("../assets/petLogo.PNG")}
              name={`Fuzzy Friends Finder`}
            />
            <Project
              id={`codingQuiz`}
              href={`https://michaelavarberg.github.io/coding-quiz/`}
              image={require("../assets/codingQuiz.PNG")}
              name={`Coding Quiz`}
            />
            <Project
              id={`workday`}
              href={`https://michaelavarberg.github.io/work-day-organizer/`}
              image={require("../assets/scheduler.PNG")}
              name={`Work Day Organizer`}
            />
            <Project
              id={`weather`}
              href={`https://michaelavarberg.github.io/weather-forecast/`}
              image={require("../assets/weather.PNG")}
              name={`Weather Forecast`}
            />
            <Project
              id={`password`}
              href={`https://michaelavarberg.github.io/password-generator/`}
              image={require("../assets/password.PNG")}
              name={`Password Generator`}
            />
          </section>
        </section>
      </div>
    );
  } else if (props.nav === "contact-info") {
    return (
      <div>
        <section>
          <h2 className="m-3">Contact Information</h2>
          <form className="form d-flex flex-column justify-content-center align-items-start m-5">
            <input
              value={name}
              name="name"
              type="text"
              placeholder="Name"
              onChange={handleInputChange}
              onMouseOut={handleMouseOut}
              className="m-3"
            />
            <input
              value={email}
              name="email"
              onChange={handleEmailChange}
              type="text"
              placeholder="Email"
              onMouseOut={handleMouseOut}
              className="m-3"
            />
            <textarea
              value={messageText}
              name="message"
              type="text"
              onChange={handleInputChange}
              placeholder="Type your message here"
              onMouseOut={handleMouseOut}
              className="m-3 w-50"
              rows="3"
            />
            <h6 className="text-center m-3">{feedback}</h6>
            <button
              type="button"
              onClick={handleFormSubmit}
              className="btn btn-primary m-3"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-column align-items-center">
        <div className="btn btn-primary m-3">Download Resume</div>
        <div className="d-flex-inline">
          {" "}
          My Proficiencies:
          <ul className="d-flex list-unstyled justify-content-between">
            <li className="m-3">React</li>
            <li className="m-3">NodeJS</li>
            <li className="m-3">Express</li>
            <li className="m-3">MongoDB</li>
            <li className="m-3">SQL</li>
            <li className="m-3">Javascript</li>
            <li className="m-3">CSS</li>
            <li className="m-3">HTML5</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
