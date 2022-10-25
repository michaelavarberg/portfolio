import Project from "./Project";
function Portfolio(props) {
  return (
    <div>
      <section id="my-apps" className="d-flex-inline justify-content-start">
        <h2 className="m-3">My Applications</h2>
        <section className="d-flex flex-column align-items-center p-5">
          <Project
            id={`tripSplit`}
            href={`https://trip-split-atoz.herokuapp.com/`}
            image={require("../assets/tripsplit.PNG")}
            name={`Trip $plit`}
            code={`https://github.com/mbottoms3/trip_split`}
          />
          <Project
            id={`kissTheCook`}
            href={`https://kiss-the-cook.herokuapp.com/api/recipes`}
            image={require("../assets/kissthecook.PNG")}
            name={`Kiss The Cook`}
            code={`https://github.com/madrodgerflynn/Kiss_The_Cook`}
          />
          <Project
            id={`fuzzyFriends`}
            href={`https://csundheimjr.github.io/fuzzy-friend-finder/`}
            image={require("../assets/petLogo.PNG")}
            name={`Fuzzy Friends Finder`}
            code={`https://github.com/csundheimjr/fuzzy-friend-finder`}
          />
          <Project
            id={`codingQuiz`}
            href={`https://michaelavarberg.github.io/coding-quiz/`}
            image={require("../assets/codingQuiz.PNG")}
            name={`Coding Quiz`}
            code={`https://github.com/michaelavarberg/coding-quiz`}
          />
          <Project
            id={`workday`}
            href={`https://michaelavarberg.github.io/work-day-organizer/`}
            image={require("../assets/scheduler.PNG")}
            name={`Work Day Organizer`}
            code={`https://github.com/michaelavarberg/work-day-organizer`}
          />
          <Project
            id={`weather`}
            href={`https://michaelavarberg.github.io/weather-forecast/`}
            image={require("../assets/weather.PNG")}
            name={`Weather Forecast`}
            code={`https://github.com/michaelavarberg/weather-forecast`}
          />
        </section>
      </section>
    </div>
  );
}

export default Portfolio;
