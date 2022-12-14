function Project(props) {
  return (
    <div className="d-flex align-items-center m-3 col-sm-12 col-md-9 col-lg-8 col-xl-6">
      <figure id={props.id}>
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="position-relative"
          id="image"
        >
          <p className="position-absolute text-center top-50 start-50 translate-middle">
            {props.description}
          </p>
          <img
            src={props.image}
            alt="screenshot of the app"
            className="img-fluid image"
          />
        </a>
        <div className="d-flex flex-column justify-content-center">
          <h3 className="text-center m-2">{props.name}</h3>
          <a
            className="text-center"
            href={props.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </figure>
    </div>
  );
}

export default Project;
