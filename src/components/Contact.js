import { useState } from "react";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleEmailChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    value.match(re)
      ? setFeedback("")
      : setFeedback("Please enter a valid email");

    setEmail(value);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    return name === "name" ? setName(value) : setMessageText(value);
  };

  const handleMouseOut = (e) => {
    e.target.value === ""
      ? setFeedback("All fields are required.")
      : setFeedback("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessageText("");
  };
  return (
    <div>
      <section>
        <h3 className="m-5">
          Contact me by filling out the information below:
        </h3>
        <form className="form d-flex flex-column justify-content-center align-items-start m-5">
          <input
            value={name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
            onMouseOut={handleMouseOut}
            className="m-3"
          />
          <input
            value={email}
            name="email"
            onChange={handleEmailChange}
            type="text"
            placeholder="Email"
            onMouseOut={handleMouseOut}
            className="m-3"
          />
          <textarea
            value={messageText}
            name="message"
            type="text"
            onChange={handleInputChange}
            placeholder="Type your message here"
            onMouseOut={handleMouseOut}
            className="m-3 w-50"
            rows="3"
          />
          <h6 className="text-center m-3">{feedback}</h6>
          <button
            type="button"
            onClick={handleFormSubmit}
            className="btn btn-primary m-3"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
