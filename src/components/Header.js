import Navigation from "./Navigation";
import { useState, useEffect } from "react";

function Header() {
  const [navClick, setNavClick] = useState("about-me");
  const [activeKey, setActiveKey] = useState("about-me");
  const handleClick = (e) => {
    setNavClick(e.target.id);
    setActiveKey(e.target.id);
  };
  const handleSelect = (e) => {
    e.preventDefault();
    this.id === activeKey ? (this.selected = true) : (this.selected = false);
  };

  useEffect(() => {
    const array = document.querySelectorAll("#li");
    console.log(array);
  });

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
            selected="true"
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
            selected="true"
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
            selected="true"
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
            selected="true"
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
