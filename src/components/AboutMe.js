function AboutMe(props) {
  return (
    <div>
      <main>
        <section id="about-me" className="d-flex-inline justify-content-start">
          <h2 className="m-3">About Me</h2>
          <div className="d-flex  flex-column align-items-center">
            <figure id="personal-photo" className="mt-3">
              <img
                src={require("../assets/KBMS-Michaela-Varberg.jpg")}
                alt="Michaela Varberg"
                className="picture"
              />
            </figure>

            <h4 className="mb-10 text-center w-50">
              I am a junior software developer living in Denver, Colorado. I
              studied Applied Math in college and then went on to teach 7th
              grade math. I love problem-solving and critical thinking, hence my
              career change! When I'm not coding, I enjoy reading, golfing and
              playing pickleball.
            </h4>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutMe;
