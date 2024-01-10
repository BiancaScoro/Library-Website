import React from 'react';
import './Contact.css';
import contactImg from "../../components/assets/about-img.jpg";
import Header from '../../components/Header/Header';
import Form from "../../components/Form/Form";

const Contact = () => {
  return (
    <section className="contact">
      <Header />
      <div className="contact-container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="contact-content grid">
          <div className="contact-img">
            <img src={contactImg} alt="shelf" />
          </div>
          <div className="contact-text">
            <h2 className="contact-title fs-19 ls-1">Contact Us</h2>
              <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact