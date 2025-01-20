import React from "react";
import "./Contact.css";
import contactImage from "../../assets/images/Contact.png";

const Contact = () => {
  return (
    <section className="contact-container">
      <img src={contactImage} alt="Contact" className="contact-image" />
      <div className="contact-form-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Want to contact me? Fill out the form below, and I’ll get back to you
          as soon as possible.
        </p>
        <form className="contact-form">
          <div className="input-container">
            <input
              type="text"
              placeholder="Name"
              className="contact-input"
              required
            />
            <label className="contact-label">Name</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              className="contact-input"
              required
            />
            <label className="contact-label">Email</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Subject"
              className="contact-input"
            />
            <label className="contact-label">Subject</label>
          </div>
          <div className="input-container">
            <textarea
              placeholder="Message"
              className="contact-textarea"
              rows="5"
              required
            ></textarea>
            <label className="contact-label">Message</label>
          </div>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;