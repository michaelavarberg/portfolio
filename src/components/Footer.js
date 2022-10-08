function Footer() {
  return (
    <div className="d-flex justify-content-center">
      <footer id="contact ">
        <ul className="nav">
          <li className="nav-item m-3">
            <a
              className="nav-link active"
              id="email-link"
              href="https://mailto:michaealavarberg@gmail.com"
              target="_blank"
            >
              Email
            </a>
          </li>
          <li className="nav-item m-3">
            <a
              className="nav-link active"
              id="github-link"
              href="https://github.com/michaelavarberg"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li className="nav-item m-3">
            <a
              className="nav-link active"
              id="linkedin-link"
              href="https://www.linkedin.com/in/michaela-varberg-133031139"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="nav-item m-3">
            <a className="nav-link active" id="resume-link" href="#">
              Resume
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
