import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ContactImage from '../../assets/contact.png'; // Adjust

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: true,
        });
    }, []);
    return (
        <div className="contact-section" id="contact">
            <div className="contact-info">
                <h1>Contact Me</h1>
                <p>Feel free to reach out to me for collaborations, queries, or just to say hi!</p>
            </div>

            <div className="contact-container">

                <form className="contact-form" data-aos="fade-right" data-aos-delay="100">
                    <div className="social-links-container">
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="200">
                            <FontAwesomeIcon icon={faFacebookF} className="icon" />
                        </a>
                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="300">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="400">
                            <FaGithub className='icon' />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="500">
                            <FaLinkedinIn className='icon' />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="600">
                            <FontAwesomeIcon icon={faXTwitter} className="icon" />
                        </a>
                    </div>
                    <input type="text" placeholder="Your Name" className="form-input" required />
                    <input type="email" placeholder="Your Email" className="form-input" required />
                    <textarea
                        placeholder="Your Message"
                        className="form-textarea"
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit" className="form-button">Send Message</button>
                </form>

                <div className="img-container">
                    <img src={ContactImage} alt="Contact" className="contact-img" data-aos="fade-left" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
