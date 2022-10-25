import Navigation from "./Navigation";
import { useState, useEffect } from "react";

function Header() {
  const [navClick, setNavClick] = useState("about-me");
  const [activeKey, setActiveKey] = useState("about-me");
  const handleClick = (e) => {
    setNavClick(e.target.id);
    setActiveKey(e.target.id);
  };
  // const handleSelect = (e) => {
  //   e.preventDefault();
  //   this.id === activeKey ? (this.selected = true) : (this.selected = false);
  // };

  // useEffect(() => {
  //   const array = document.querySelectorAll("#li");
  //   console.log(array);
  // });

  return (
    <div>
      <header>
        <div className="d-flex align-items-center justify-content-between">
          <div className="mx-5 my-3">
            <img src={require("../assets/logo.PNG")}></img>
          </div>
          <ul
            className="navBar list-unstyled p-3 d-flex flex-wrap justify-content-center btn-group align-items-center h-100"
            role="group"
            aria-label="nav-group"
          >
            <li className=" m-3">
              <a
                className="header-text"
                id="about-me"
                href="#about-me"
                onClick={handleClick}
                selected="true"
              >
                about
              </a>
            </li>
            <li className=" m-3">
              <a
                className="header-text"
                id="my-apps"
                href="#my-apps"
                onClick={handleClick}
                selected="true"
              >
                portfolio
              </a>
            </li>
            <li className=" m-3">
              <a
                className="header-text"
                id="contact-info"
                href="#contact"
                onClick={handleClick}
                selected="true"
              >
                contact
              </a>
            </li>
            <li className="m-3">
              <a
                className="header-text"
                id="resume"
                href="#resume"
                onClick={handleClick}
                selected="true"
              >
                resume
              </a>
            </li>

            <li className="m-3">
              <a
                id="github-link"
                href="https://github.com/michaelavarberg"
                rel="noopener"
              >
                {" "}
                <i className="fa-brands fa-github fa-2xl header-text"></i>
              </a>
            </li>
            <li className="m-3">
              <a
                id="linkedin-link"
                href="https://www.linkedin.com/in/michaelavarberg"
                rel="noopener"
              >
                <i className="fa-brands fa-linkedin fa-2xl header-text"></i>
              </a>
            </li>
          </ul>
        </div>
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

      <div>
        <Navigation nav={navClick} />
      </div>
    </div>
  );
}

export default Header;
