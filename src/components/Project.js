function Project(props) {
  return (
    <div className="d-flex align-items-center m-3 col-sm-12 col-md-9 col-lg-8 col-xl-6">
      <figure id={props.id}>
        <a href={props.href} target="_blank">
          <img
            src={props.image}
            alt="screenshot of the app"
            className="img-fluid"
          />
        </a>
        <figcaption className="text-center m-2">{props.name}</figcaption>
      </figure>
    </div>
  );
}

export default Project;
