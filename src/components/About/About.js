import React, { useEffect } from 'react';
import profileImage from '../../assets/about-img.png';
import AOS from "aos";
import "aos/dist/aos.css";
import './About.css';

function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div id="about" className="about-section">
            <h1>About Me</h1>
            <div className='container'>
                <div className="profile-picture">
                    <img src={profileImage} alt="Profile-Picture" data-aos="fade-right" />
                </div>
                <div className="content-container">
                    <p data-aos="fade-left" data-aos-delay="100">
                        I'm Raj Shekhar, a passionate web developer with a love for creating
                        user-friendly and interactive web applications. I specialize in frontend
                        development with React, and I'm constantly learning new skills to expand
                        my full-stack capabilities.
                    </p>
                    <br />

                    <p data-aos="fade-left" data-aos-delay="400">
                        When I'm not coding, you can find me exploring new tech trends, playing
                        video games, or enjoying a cup of coffee.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-delay="700">
                        Outside of work, I'm also a member of various tech communities and
                        enjoy attending webinars and meetups.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-delay="1000">
                        If you're interested in working with me, please don't hesitate to contact
                        me.
                    </p>
                </div>
            </div>
            <div className='skills-interests'>
                <h2>Key Skills</h2>
                <div className="skills-wrapper">
                    <div className="skills-list">
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">Bootstrap</div>
                        <div className="skill">JQuery</div>
                        <div className="skill">React.js</div>
                        <div className="skill">Node.js</div>
                        <div className="skill">Git</div>
                        <div className="skill">GitHub</div>
                        <div className="skill">Express.js</div>
                        <div className="skill">MongoDB</div>
                        <div className="skill">Django</div>

                        {/* Repeat items for infinite scrolling */}
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">JQuery</div>
                        <div className="skill">Bootstrap</div>
                        <div className="skill">React.js</div>
                        <div className="skill">Node.js</div>
                        <div className="skill">Git</div>
                        <div className="skill">GitHub</div>
                        <div className="skill">Express.js</div>
                        <div className="skill">MongoDB</div>
                        <div className="skill">Django</div>
                    </div>
                </div>
                <h2>Interests</h2>
                <div className="interests-wrapper">
                    <div className="interests-list">
                        <div className="interest">Web Development</div>
                        <div className="interest">Machine Learning</div>
                        <div className="interest">Data Science</div>
                        <div className="interest">Reading</div>
                        <div className="interest">Traveling</div>
                        <div className="interest">Music</div>
                        <div className="interest">Gaming</div>
                        <div className="interest">Anime</div>
                        {/* copy */}
                        <div className="interest">Web Development</div>
                        <div className="interest">Machine Learning</div>
                        <div className="interest">Data Science</div>
                        <div className="interest">Reading</div>
                        <div className="interest">Traveling</div>
                        <div className="interest">Music</div>
                        <div className="interest">Gaming</div>
                        <div className="interest">Anime</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;
