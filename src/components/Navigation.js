import Project from "../components/Project";

function Navigation() {
  return (
    <div>
      <main>
        <section id="about-me" class="about-me content">
          <h2>About Me</h2>
          <figure id="personal-photo">
            <img
              src="./assets/images/KBMS-Michaela-Varberg.jpg"
              alt="Michaela Varberg"
            />
          </figure>

          <p>
            I grew up in Snohomish, Washington and then attended Wheaton College
            where I studied Applied Mathematics. After college, I moved to
            Denver and taught 7th grade math for three years. Now I am pursuing
            a career in software development as I absolutely love
            problem-solving and critical thinking. In my free time, I enjoy
            reading science fiction, golfing, and playing pickleball.
          </p>
        </section>
        <section id="my-apps" class="my-apps content">
          <h2>My Applications</h2>
          <Project
            id={`kissTheCook`}
            href={`https://kiss-the-cook.herokuapp.com/api/recipes`}
            image={`./assets/images/kissthecook.PNG`}
            name={`Kiss The Cook`}
          />
          <Project
            id={`fuzzyFriends`}
            href={`https://csundheimjr.github.io/fuzzy-friend-finder/`}
            image={`./assets/images/logo.PNG`}
            name={`Fuzzy Friends Finder`}
          />
          <Project />
        </section>
      </main>
    </div>
  );
}

export default Navigation;
