function Footer() {
  return (
    <div className="d-flex justify-content-center footer">
      <footer id="contact" className="mt-auto">
        <ul
          className="navBar list-unstyled p-3 d-flex flex-wrap justify-content-center btn-group align-items-center h-100"
          role="group"
          aria-label="nav-group"
        >
          <li className=" m-3 footer-text">
            <a
              className="footer-text"
              id="about-me"
              href="#about-me"
              selected="true"
            >
              about
            </a>
          </li>
          <li className=" m-3 footer-text">
            <a
              className="footer-text"
              id="my-apps"
              href="#my-apps"
              selected="true"
            >
              portfolio
            </a>
          </li>
          <li className=" m-3 footer-text">
            <a
              className="footer-text"
              id="contact-info"
              href="#contact"
              selected="true"
            >
              contact
            </a>
          </li>
          <li className="m-3">
            <a
              className="footer-text"
              id="resume"
              href="#resume"
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
              <i className="fa-brands fa-github fa-2xl footer-text"></i>
            </a>
          </li>
          <li className="m-3">
            <a
              id="linkedin-link"
              href="https://www.linkedin.com/in/michaelavarberg"
              rel="noopener"
            >
              <i className="fa-brands fa-linkedin fa-2xl footer-text"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
