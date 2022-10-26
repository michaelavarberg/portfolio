function AboutMe(props) {
  return (
    <div>
      <main>
        <section id="about-me" className="d-flex-inline justify-content-start">
          <h2 className="m-3">About Me</h2>
          <div className="d-flex flex-column align-items-center">
            <figure id="personal-photo" className="">
              <img
                src={require("../assets/michaela.png")}
                alt="Michaela Varberg"
                className="picture"
              />
            </figure>
            <h4 className="text-center w-50 border p-3">
              I am a software developer living in Denver, Colorado. I studied
              Applied Math in college and then went on to teach 7th grade math.
              I love problem-solving and critical thinking, hence my career
              change! When I'm not coding, I enjoy reading, golfing and playing
              pickleball.
            </h4>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutMe;
