import Project from "../components/Project";
import { useState } from "react";

function Navigation(props) {
  const [name, setName] = useState("Michaela");
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
  } else {
    return (
      <div>
        <section>
          <h2>Contact Information</h2>
          <form className="form">
            <input
              value={name}
              name="name"
              type="text"
              placeholder="Name"
              onChange={handleInputChange}
              onMouseOut={handleMouseOut}
            />
            <input
              value={email}
              name="email"
              onChange={handleEmailChange}
              type="text"
              placeholder="Email"
              onMouseOut={handleMouseOut}
            />
            <input
              value={messageText}
              name="message"
              type="text"
              onChange={handleInputChange}
              placeholder="Type your message here"
              onMouseOut={handleMouseOut}
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
          <h6>{feedback}</h6>
        </section>
      </div>
    );
  }
}

export default Navigation;
