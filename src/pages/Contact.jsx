import React from 'react'
import './Contact.css'
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const iframeSrc = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d10549.558306761432!2d2.5150629999999996!3d48.6215267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sfr!2sfr!4v1694194252882!5m2!1sfr!2sfr";

  return (
    <div className="contact-content">
      <h2 className="title-section">Contact</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident illum ex aspernatur nesciunt dolore sint earum vel placeat sunt! Sit dicta repellat est optio corrupti quidem harum nihil sunt mollitia. </p>
      <iframe
      src={iframeSrc}
      width="1300"
      height="275"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <ContactForm/>
    </div>
  )
}

export default Contact