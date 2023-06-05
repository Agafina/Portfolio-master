import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xz50elu', 'template_6k2t6rk', form.current, 'G-eqFMUP7BkcfH9h-')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
      <section id="contact">
        <h5>Get in touch</h5>
        <h2>Contact me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option__icon" />
              <h4>Email</h4>
              <h5>fowedlungatsafac@gmail.com</h5>
              <a href="mailto:fowedlungatsafac@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                send a message
              </a>
            </article>

            <article className="contact__option">
              <AiOutlineLinkedin className="contact__option__icon" />
              <h4>LinkedIn</h4>
              <h5>Profile</h5>
              <a
                href="https://www.linkedin.com/in/brown-djomo-844b96164/"
                target="_blank"
                rel="noreferrer"
              >
                Tape me on LinkedIn
              </a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className="contact__option__icon" />
              <h4>Whatsapp</h4>
              <h5>Direct message</h5>
              <a
                href="https://web.whatsapp.com/send?phone=+237672671815"
                target="_blank"
                rel="noreferrer"
              >
                Whatsapp me
              </a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="full name" required />
            <input
              type="email"
              name="email"
              placeholder="your email"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="your message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Testified
            </button>
          </form>
        </div>
      </section>
    );
}

export default Contact
