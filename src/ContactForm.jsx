import axios from "axios";
import { useState } from "react";
import "./css/ContactForm.css";

export function ContactForm() {
  const [errors, setErrors] = useState([]);
  const [errorShow, setErrorShow] = useState(true);
  const [successMessageShow, setSuccessMessageShow] = useState(true);
  const [successMessage, setSuccessMessage] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    setErrors([]);
    axios
      .post("https://gtsemailbackend.fly.dev/contact_form", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        setSuccessMessage(["E-mail sent successfully!"]);
        setSuccessMessageShow(false);
        setErrorShow(true);
        setErrors([]);
      })
      .catch((errors) => {
        console.log(errors.response);
        setSuccessMessage([]);
        setErrorShow(false);
        setSuccessMessageShow(true);
        setErrors(["Please fill out all fields"]);
      });
  };

  return (
    <>
      <div id="login">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="email-outsides">
                <h2 className="heading">Let's Connect</h2>
              </div>
            </div>
            <div className="break2"> </div>

            <div className="row">
              <div className="col-sm-6">
                <input name="name" className="form-control" type="string" placeholder="First Name" />
              </div>
              <div className="col-sm-6">
                <input name="last_name" className="form-control" type="string" placeholder="Last Name" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <input name="email" className="form-control" type="email" placeholder="E-mail" />
              </div>

              <div className="col-sm-6">
                <input name="company" className="form-control" type="string" placeholder="Company Name" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea name="message" type="text" className="textarea" placeholder="Message"></textarea>

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
              <button className="submitbutton btn btn-secondary mt-3 submit ">CONTACT</button>
            </div>
          </div>
        </form>

        <br></br>
      </div>
    </>
  );
}
