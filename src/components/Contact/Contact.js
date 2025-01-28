import React, { useRef, useState } from "react";
import "./Contact.css";
import contactImage from "../../assets/images/Contact.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yig9je3",
        "template_9txo1ts",
        formRef.current,
        "HCIsitsez44yh9asU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact">
      <img src={contactImage} alt="Contact" className="contact__image" />
      <div className="contact__form">
        <h1 className="contact__form__title">Get in Touch</h1>
        <p className="contact__form__subtitle">
          Want to contact me? Fill out the form below, and I’ll get back to you
          as soon as possible.
        </p>
        <form ref={formRef} onSubmit={sendEmail} className="contact__form__form">
          <div className="contact__form__form__input-container">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="contact__form__form__input-container__contact-input"
              required
            />
            <label className="contact__form__form__input-container__contact-label">Name</label>
          </div>
          <div className="contact__form__form__input-container">
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="contact__form__form__input-container__contact-input"
              required
            />
            <label className="contact__form__form__input-container__contact-label">Email</label>
          </div>
          <div className="contact__form__form__input-container">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="contact__form__form__input-container__contact-input"
            />
            <label className="contact__form__form__input-container__contact-label">Subject</label>
          </div>
          <div className="contact__form__form__input-container">
            <textarea
              name="message"
              placeholder="Message"
              className="contact__form__form__input-container__contact-textarea"
              rows="5"
              required
            ></textarea>
            <label className="contact__form__form__input-container__contact-label">Message</label>
          </div>
          <button type="submit" className="contact__form__form__contact-button">
            Send Message
          </button>
        </form>
        {status && <p className="contact__form__status-message">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;