function Project(props) {
  return (
    <div>
      <figure id={props.id}>
        <a href={props.href} target="_blank">
          <img src={props.image} alt="screenshot of the app" />
        </a>
        <figcaption>{props.name}</figcaption>
      </figure>
    </div>
  );
}

export default Project;
