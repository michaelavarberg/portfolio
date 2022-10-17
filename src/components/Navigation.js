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
            <div className="d-flex  flex-column align-items-center">
              <figure id="personal-photo" className="mt-3">
                <img
                  src={require("../assets/KBMS-Michaela-Varberg.jpg")}
                  alt="Michaela Varberg"
                  className="picture"
                />
              </figure>

              <h4 className="mb-10 text-center w-50">
                I am a junior software developer living in Denver, Colorado. I
                studied Applied Math in college and then went on to teach 7th
                grade math. I love problem-solving and critical thinking, hence
                my career change! When I'm not coding, I enjoy reading, golfing
                and playing pickleball.
              </h4>
            </div>
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
              code={`https://github.com/madrodgerflynn/Kiss_The_Cook`}
            />
            <Project
              id={`fuzzyFriends`}
              href={`https://csundheimjr.github.io/fuzzy-friend-finder/`}
              image={require("../assets/petLogo.PNG")}
              name={`Fuzzy Friends Finder`}
              code={`https://github.com/csundheimjr/fuzzy-friend-finder`}
            />
            <Project
              id={`codingQuiz`}
              href={`https://michaelavarberg.github.io/coding-quiz/`}
              image={require("../assets/codingQuiz.PNG")}
              name={`Coding Quiz`}
              code={`https://github.com/michaelavarberg/coding-quiz`}
            />
            <Project
              id={`workday`}
              href={`https://michaelavarberg.github.io/work-day-organizer/`}
              image={require("../assets/scheduler.PNG")}
              name={`Work Day Organizer`}
              code={`https://github.com/michaelavarberg/work-day-organizer`}
            />
            <Project
              id={`weather`}
              href={`https://michaelavarberg.github.io/weather-forecast/`}
              image={require("../assets/weather.PNG")}
              name={`Weather Forecast`}
              code={`https://github.com/michaelavarberg/weather-forecast`}
            />
            <Project
              id={`tripSplit`}
              href={`https://trip-split-atoz.herokuapp.com/`}
              image={require("../assets/tripsplit.PNG")}
              name={`Trip $plit`}
              code={`https://github.com/mbottoms3/trip_split`}
            />
          </section>
        </section>
      </div>
    );
  } else if (props.nav === "contact-info") {
    return (
      <div>
        <section>
          <h3 className="m-5">
            Contact me by filling out the information below:
          </h3>
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
      <div className="d-flex flex-column align-items-start">
        <div className="d-flex-inline mx-5">
          {" "}
          <h3 className="my-4">My Proficiencies</h3>
          <div className="d-flex mx-10 flex-wrap">
            <div>
              <h4>Front-end: </h4>
              <ul className="d-flex flex-column  mx-5 ">
                {" "}
                <li className="m-2">NodeJS</li>
                <li className="m-2">jQuery</li>
                <li className="m-2">Responsive Design</li>
                <li className="m-2">Javascript</li>
                <li className="m-2">CSS</li>
                <li className="m-2">HTML5</li>
              </ul>
            </div>
            <div>
              <h4>Back-end: </h4>
              <ul className="d-flex flex-column mx-5">
                <li className="m-2">SQL</li>
                <li className="m-2">MySQL</li>
                <li className="m-2">MongoDB</li>
                <li className="m-2">Mongoose</li>
                <li className="m-2">Express</li>
                <li className="m-2">GraphQL</li>
                <li className="m-2">React</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="btn btn-primary m-3">Download Resume</div>
      </div>
    );
  }
}

export default Navigation;
