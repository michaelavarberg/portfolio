function Footer() {
  return (
    <div className="d-flex justify-content-center m-3 footer">
      <footer id="contact" className="mt-auto">
        <ul className="nav">
          <li className="nav-item m-3">
            <a
              className="nav-link active footerNav"
              id="github-link"
              href="https://github.com/michaelavarberg"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li className="nav-item m-3">
            <a
              className="nav-link active footerNav"
              id="linkedin-link"
              href="https://www.linkedin.com/in/michaela-varberg-133031139"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="nav-item m-3">
            <a
              className="nav-link active footerNav"
              id="stack-overflow"
              href="https://stackoverflow.com/users/19386138/michaela"
              target="_blank"
            >
              Stack Overflow
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
