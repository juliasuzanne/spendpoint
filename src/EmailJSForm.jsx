import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./css/ContactForm.css";

export const EmailJSForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState([]);
  const [errorShow, setErrorShow] = useState(true);
  const [successMessageShow, setSuccessMessageShow] = useState(true);
  const [successMessage, setSuccessMessage] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();
    const params = new FormData(e.target);
    setErrors([]);

    emailjs
      .sendForm("service_372suhv", "template_mhj2x7o", form.current, {
        publicKey: "wtqlY2oQZE-VvZPjG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setSuccessMessage(["E-mail sent successfully!"]);
          setSuccessMessageShow(false);
          setErrorShow(true);
          setErrors([]);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccessMessage([]);
          setErrorShow(false);
          setSuccessMessageShow(true);
          setErrors(["Please fill out all fields"]);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>First Name</label>
      <input type="text" className="form-control" name="name" placeholder="First Name" required />
      <label>Last Name</label>
      <input type="text" placeholder="Last Name" className="form-control" name="last_name" required />
      <label>Company</label>
      <input type="text" className="form-control" placeholder="Company Name" name="company" />
      <label>Email</label>
      <input type="email" placeholder="E-mail" className="form-control" name="user_email" required />
      <label>Message</label>
      <textarea className="textarea" name="message" placeholder="Message" required />

      <ul hidden={successMessageShow} className="success">
        {successMessage.map((successMessage) => (
          <li key={successMessage}>{successMessage}</li>
        ))}
      </ul>
      <ul hidden={errorShow} className="errors">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <input type="submit" value="Send" />
    </form>
  );
};
