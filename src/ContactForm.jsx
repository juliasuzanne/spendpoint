import axios from "axios";
import React, { useRef, useState } from "react";
import "./css/ContactForm.css";
import emailjs from "@emailjs/browser";

export function ContactForm() {
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
    <>
      <div id="login">
        <form ref={form} onSubmit={sendEmail}>
          <div className="container">
            <div className="row">
              <div className="email-outsides">
                <h2 className="heading" id="contactFormHeader">
                  Let's Connect
                </h2>
              </div>
            </div>
            <div className="break2"> </div>

            <div className="row">
              <div className="col-sm-6">
                <input type="text" className="form-control" name="name" placeholder="First Name" required />
              </div>
              <div className="col-sm-6">
                <input type="text" placeholder="Last Name" className="form-control" name="last_name" required />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <input type="email" placeholder="E-mail" className="form-control" name="user_email" required />
              </div>

              <div className="col-sm-6">
                <input type="text" className="form-control" placeholder="Company Name" name="company" required />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea className="textarea" name="message" placeholder="Message" required />
                {/* <input name="message" className="textarea form-control" type="text" /> */}
              </div>
            </div>
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
            <div className="row">
              <input type="submit" value="CONTACT" className="submitbutton btn btn-secondary mt-3 submit " />
              <p className="yourInfo">Your information will only be used to contact you about a follow-up meeting.</p>
            </div>
          </div>
        </form>

        <img
          className="bottom-logo"
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718898397/SpendPointL_pn5zt0.png"
        ></img>
      </div>
    </>
  );
}
