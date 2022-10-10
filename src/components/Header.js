import Navigation from "./Navigation";
import { useState } from "react";

function Header() {
  const [navClick, setNavClick] = useState("about-me");
  const [highlight, setHighlight] = useState("");
  const handleClick = (e) => {
    setNavClick(e.target.id);
  };

  return (
    <div>
      <header>
        <h1 className="text-center m-5">Michaela Varberg</h1>
      </header>
      {/* <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          onClick={handleClick}
          onChange={handleChange}
          checked
        ></input>
        <label className="btn btn-outline-primary" htmlFor="btnradio">
          Radio 1
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          onClick={handleClick}
        ></input>
        <label className="btn btn-outline-primary" htmlFor="btnradio">
          Radio 2
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          autoComplete="off"
          onClick={handleClick}
        ></input>
        <label className="btn btn-outline-primary" htmlFor="btnradio">
          Radio 3
        </label>
      </div> */}
      <ul
        className="navBar list-unstyled p-3 d-flex flex-wrap justify-content-center btn-group"
        role="group"
        aria-label="nav-group"
      >
        <li className=" m-3">
          <a
            className=" btn btn-primary"
            type="button"
            id="about-me"
            href="#about-me"
            onClick={handleClick}
          >
            About Me
          </a>
        </li>
        <li className=" m-3">
          <a
            className=" btn btn-primary"
            type="button"
            id="my-apps"
            href="#my-apps"
            onClick={handleClick}
            aria-pressed="false"
          >
            My Applications
          </a>
        </li>
        <li className=" m-3">
          <a
            className="btn btn-primary"
            type="button"
            id="contact-info"
            href="#contact"
            onClick={handleClick}
            aria-pressed="false"
          >
            Contact Me
          </a>
        </li>
        <li className=" m-3">
          <a
            className="btn btn-primary"
            type="button"
            id="resume"
            href="#resume"
            onClick={handleClick}
            aria-pressed="false"
          >
            Resume
          </a>
        </li>
      </ul>

      <div>
        <Navigation nav={navClick} />
      </div>
    </div>
  );
}

export default Header;
