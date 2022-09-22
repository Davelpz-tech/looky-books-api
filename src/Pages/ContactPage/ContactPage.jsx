import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

import "./ContactPage.scss";

const ContactPage = () => {
  // const formRef = useRef();
  // const [done, setDone] = useState(false);
  // const handleSubmit = (e) => {
  //   emailjs
  //     .sendForm(
  //       "service_7j3ie3w",
  //       "template_89bdzaj",
  //       formRef.current,
  //       "fc5WnmdQW9mqsYcP7"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <>
      <div className="contact-wrapper">
        <h1>EmailJS SDK Name Changed, working on bugs to get this component live again, please follow this link: <a style={{color: "#3CC37E"}} href="https://davelpz-tech.github.io/portfolio-david/">My Portfolio</a></h1>
        {/* <form ref={formRef} onSubmit={handleSubmit} className="form-wrapper">
          <h1>Contact Me</h1>
          <p>
            I'd love to work for you!
            <br />
            If you're interested in hiring me, please send me an email.
          </p>
          <input type="text" placeholder="Name" name="user_name" required />
          <input
            type="text"
            placeholder="Subject"
            name="user_subject"
            required
          />
          <input
            type="text"
            placeholder="Email Address"
            name="user_email"
            required
          />
          <textarea
            rows="5"
            placeholder="Leave me a message here..."
            name="message"
            required
          ></textarea>
          <button>Send</button>
          {done && " Message sent, I'll be in touch soon!"}
        </form> */}
      </div>
    </>
  );
};

export default ContactPage;
