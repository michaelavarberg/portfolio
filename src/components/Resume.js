function Resume(props) {
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
              <li className="m-2">JavaScript</li>
              <li className="m-2">ReactJS</li>
              <li className="m-2">NodeJS</li>
              <li className="m-2">jQuery</li>
              <li className="m-2">Responsive Design</li>
              <li className="m-2">CSS</li>
              <li className="m-2">HTML5</li>
            </ul>
          </div>
          <div>
            <h4>Back-end: </h4>
            <ul className="d-flex flex-column mx-5">
              <li className="m-2">MySQL</li>
              <li className="m-2">MongoDB</li>
              <li className="m-2">Express</li>
              <li className="m-2">GraphQL</li>
              <li className="m-2">JSON Web Tokens</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btn btn-primary m-3 download">
        <a href={require("../assets/MichaelaVarberg_Resume.pdf")} download>
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
