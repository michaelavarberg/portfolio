// import Animate from "animate.css-react";
// import "animate.css/animate.css";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
function Navigation(props) {
  if (props.nav === "about-me") {
    return <AboutMe />;
  } else if (props.nav === "my-apps") {
    return <Portfolio />;
  } else if (props.nav === "contact-info") {
    return <Contact />;
  } else {
    return <Resume />;
  }
}

export default Navigation;
