import Navigation from "./Navigation";
import { useState } from "react";

function Header() {
  const [navClick, setNavClick] = useState("about-me");
  const handleClick = (e) => {
    setNavClick(e.target.id);
  };
  return (
    <div>
      <header>
        <h1 className="text-center m-5">Michaela Varberg</h1>
      </header>
      <ul className="nav nav-pills bg-dark p-3 d-flex justify-content-center">
        <li className="nav-item m-3">
          <a
            className="nav-link active"
            id="about-me"
            href="#about-me"
            onClick={handleClick}
          >
            About Me
          </a>
        </li>
        <li className="nav-item m-3">
          <a
            className="nav-link active"
            id="my-apps"
            href="#my-apps"
            onClick={handleClick}
          >
            My Applications
          </a>
        </li>
        <li className="nav-item m-3">
          <a
            className="nav-link active"
            id="contact-info"
            href="#contact"
            onClick={handleClick}
          >
            Contact Information
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
