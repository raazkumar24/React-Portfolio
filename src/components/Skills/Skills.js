// src/components/Home/Skills.js
import React from 'react';
import './Skills.css';
import { FaCode, FaServer, FaGit, FaMobile, FaDesktop } from 'react-icons/fa';
const Skills = () => {
    return (
        <div className="skills-section">
            <h2>My Skills</h2>
            <div className="skills-lists">
                <div className="skills-container">
                    <div className="skill-item">
                        <FaCode className="icon" />
                        <p>Frontend Development</p>
                        <p>I am proficient in HTML, CSS, and JavaScript.</p>
                    </div>
                    <div className="skill-item">
                        <FaServer className="icon" />
                        <p>Backend Development</p>
                        <p>I am proficient in Node.js, Express.js, and MongoDB.</p>
                        <p>I also have experience with Django and Flask.</p>
                    </div>
                    <div className="skill-item">
                        <FaGit className="icon" />
                        <p>Version Control</p>
                        <p>I am proficient in Git and GitHub.</p>
                    </div>
                    <div className="skill-item">
                        <FaMobile className="icon" />
                        <p>Mobile Development</p>
                        <p>I am proficient in React Native and Flutter.</p>
                    </div>
                    <div className="skill-item">
                        <FaDesktop className="icon" />
                        <p>Desktop Development</p>
                        <p>I am proficient in React and Angular.</p>
                    </div>
                    {/* <!-- Repeat items for seamless animation --> */}
                    <div className="skill-item">
                        <FaCode className="icon" />
                        <p>Frontend Development</p>
                        <p>I am proficient in HTML, CSS, and JavaScript.</p>
                    </div>
                    <div className="skill-item">
                        <FaServer className="icon" />
                        <p>Backend Development</p>
                        <p>I am proficient in Node.js, Express.js, and MongoDB.</p>
                        <p>I also have experience with Django and Flask.</p>
                    </div>
                    <div className="skill-item">
                        <FaGit className="icon" />
                        <p>Version Control</p>
                        <p>I am proficient in Git and GitHub.</p>
                    </div>
                    <div className="skill-item">
                        <FaMobile className="icon" />
                        <p>Mobile Development</p>
                        <p>I am proficient in React Native and Flutter.</p>
                    </div>
                    <div className="skill-item">
                        <FaDesktop className="icon" />
                        <p>Desktop Development</p>
                        <p>I am proficient in React and Angular.</p>
                    </div>
                </div>
            </div>
            <div className="skills-contact">
                <a href="https://github.com/raazkumar24" target="_blank" rel="noopener noreferrer">
                </a>
            </div>
        </div>
    );
};

export default Skills;
