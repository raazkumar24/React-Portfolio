import React from 'react';
import profileImage from '../../assets/profile-pic.png'; // Adjust path as necessary
import projectImage from '../../assets/project.png'; // Adjust
import { FaCss3Alt, FaDocker, FaFacebookF, FaFigma, FaGithub, FaGitSquare, FaHtml5, FaInstagram, FaNodeJs, FaReact } from 'react-icons/fa'; // Social Media Icons
import { SiJavascript, SiMaterialdesign, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Home.css'; // Your styles
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: true,
        });
    }, []);
    return (
        <div>
            <section className="home" activeClassName="active">
                <div className="profile-info" data-aos="fade-right">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Hi, I'm Raj Shekhar, a Frontend Developer.</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="social-icon" />
                        </a>
                        <a href="https://instagram.com/raaz__kumar_" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                        <a href="https://github.com/raazkumar24" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/raj-shekhar-799898214/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} className='social-icon' />
                        </a>
                        <a href="https://twitter.com/RajWeb24" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
                        </a>
                    </div>
                    <div className='button-container'>
                        <a href="/contact" className="button" data-aos="fade-up">Get in Touch</a>
                        <a href="/about" className="button" data-aos="fade-up">Read More</a>
                    </div>
                </div>
                <div className="img">
                    <img src={profileImage} alt="Profile" className="profile-img" data-aos="fade-up"></img>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="tech-stack-section">
                <h2>Creating dynamic web apps with advanced tools</h2>
                <i>Emphasizing innovation, practicality, and meaningful outcomes</i>
                <div className="tech-stack">
                    <div className="tech-stack-item" data-aos="zoom-in" data-aos-delay="100">
                        <h4>HTML</h4>
                        <FaHtml5 className="tech-icon" />
                    </div>
                    <div className="tech-stack-item" data-aos="zoom-in" data-aos-delay="300">
                        <h4>CSS</h4>
                        <FaCss3Alt className="tech-icon" />
                    </div>
                    <div className="tech-stack-item" data-aos="zoom-in" data-aos-delay="500">
                        <h4>JS</h4>
                        <SiJavascript className="tech-icon" />
                    </div>
                    <div className="tech-stack-item" data-aos="zoom-in" data-aos-delay="600">
                        <h4>Tailwind</h4>
                        <SiTailwindcss className="tech-icon" />
                    </div>
                    <div className="tech-stack-item" data-aos="zoom-in" data-aos-delay="700">
                        <h4>React</h4>
                        <FaReact className="tech-icon" />
                    </div>
                    <div className="tech-stack-item" data-aos="zoom-in" data-aos-delay="900">
                        <h4>TypeScript</h4>
                        <SiTypescript className="tech-icon" />
                    </div>
                    <div className="tech-stack-item" data-aos="zoom-in" data-aos-delay="1100">
                        <h4>Next.js</h4>
                        <SiNextdotjs className="tech-icon" />
                    </div>
                    <div className="tech-stack-item" data-aos="zoom-in" data-aos-delay="1300">
                        <h4>Node.js</h4>
                        <FaNodeJs className="tech-icon" />
                    </div>
                    <div className="tech-stack-item" data-aos="zoom-in" data-aos-delay="1500">
                        <h4>Figma</h4>
                        <FaFigma className="tech-icon" />
                    </div>
                    <div className="tech-stack-item" data-aos="zoom-in" data-aos-delay="1700">
                        <h4>Material.UI</h4>
                        <SiMaterialdesign className="tech-icon" />
                    </div>
                    <div className="tech-stack-item" data-aos="zoom-in" data-aos-delay="1900">
                        <h4>Git</h4>
                        <FaGitSquare className="tech-icon" />
                    </div>
                    <div className="tech-stack-item" data-aos="zoom-in" data-aos-delay="2100">
                        <h4>Docker</h4>
                        <FaDocker className="tech-icon" />
                    </div>
                </div>
            </section>

            <section className="project-section">
                <div className="one">
                    <h2 data-aos="fade-right" data-aos-delay="100">Elevate your interface to shine in 2025 with cutting-edge innovation and style!</h2>
                    <p data-aos="fade-up" data-aos-delay="300">Step into 2025 with an interface that truly stands out. Harness the power of modern design and innovation to create a user experience that’s both captivating and ahead of its time.</p>
                    <a href="/projects" className="btn" target="_blank" data-aos="fade-right" data-aos-delay="500">See My Work</a>
                </div>
                <div className='img-container' data-aos="fade-up" data-aos-delay="200">
                    <img src={projectImage} alt="Project" className="project-img" />
                </div>
            </section>
        </div>
    );

};

export default Home;
