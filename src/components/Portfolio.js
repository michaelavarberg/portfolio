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
            description={`Full stack MERN app that allows users to input trip expenses and displays the necessary transactions to even out expenses after a trip.`}
          />
          <Project
            id={`kissTheCook`}
            href={`https://kiss-the-cook.herokuapp.com/api/recipes`}
            image={require("../assets/kissthecook.PNG")}
            name={`Kiss The Cook`}
            code={`https://github.com/madrodgerflynn/Kiss_The_Cook`}
            description={`Full stack app that allows users to keep track of recipes and see recipes from others. Built using MySQL, Express, NodeJS, Handlebars and Bootstrap.`}
          />
          <Project
            id={`fuzzyFriends`}
            href={`https://csundheimjr.github.io/fuzzy-friend-finder/`}
            image={require("../assets/petLogo.PNG")}
            name={`Fuzzy Friends Finder`}
            code={`https://github.com/csundheimjr/fuzzy-friend-finder`}
            description={`Frontend app that utilizes Purina's API to display available pets in a users zipcode. Users can favorite pets to refer back to at a later time.`}
          />
          <Project
            id={`codingQuiz`}
            href={`https://michaelavarberg.github.io/coding-quiz/`}
            image={require("../assets/codingQuiz.PNG")}
            name={`Coding Quiz`}
            code={`https://github.com/michaelavarberg/coding-quiz`}
            description={`Coding quiz that stores users' scores in local storage. Scores are based on accuracy and time remaining.`}
          />
          <Project
            id={`workday`}
            href={`https://michaelavarberg.github.io/work-day-organizer/`}
            image={require("../assets/scheduler.PNG")}
            name={`Work Day Organizer`}
            code={`https://github.com/michaelavarberg/work-day-organizer`}
            description={`App that allows users to keep track of their schedule. Daily tasks are stored in local storage and hourly rows change color based on whether they are in the past, present or future.`}
          />
          <Project
            id={`weather`}
            href={`https://michaelavarberg.github.io/weather-forecast/`}
            image={require("../assets/weather.PNG")}
            name={`Weather Forecast`}
            code={`https://github.com/michaelavarberg/weather-forecast`}
            description={`App that allows users to search for the weather in any city. Built using weatherbit.io.`}
          />
        </section>
      </section>
    </div>
  );
}

export default Portfolio;
