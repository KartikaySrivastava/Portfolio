import React, { useRef } from 'react';
import "./contact.css";
import facebookIcon from "../../Images/facebook-icon.png";
import linkedinIcon from "../../Images/linkedin-icon.png";
import instagramIcon from "../../Images/instagram-icon.png";
import githubIcon from "../../Images/github-icon.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {publicKey: 'YOUR PUBLIC KEY',})
          .then(() => {
              console.log('result.text');
              alert('Your email has been sent successfully.')
              e.target.reset();
            },(error) => {
              console.log(error.text);
            },
          );
      };
  return (
    <section id='contactPage'>
        <span className="contactTitle">Contact Me</span>
        <div id="contact">
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'  ></textarea>
                <button className="submit" type='submit' value='Send'> Submit</button>

                <div className="links">
                    <a href="LinkedIn_Link" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="link" />
                    </a>

                    <a href="Instagram_Link" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className="link" />
                    </a>

                    <a href="Github_Link" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="Github" className="link" />
                    </a>

                    <a href="Facebook_Link" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="link" />
                    </a>
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contact;
