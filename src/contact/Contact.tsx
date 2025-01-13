import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, here you would handle the submission to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>
            Your support helps us fight poverty and support those affected by
            the Ukraine crisis.
          </p>
        </div>
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
              />
            </div>
          </form>
          {isSubmitted && (
            <p className="response-message">
              Thank you for reaching out! We'll get back to you soon.
            </p>
          )}
          <a href="mailto:bhupesh.coding@gmail.com" className="submit-btn">
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
