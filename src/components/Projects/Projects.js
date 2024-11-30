import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Projects.css';

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }, []);

    return (
        <div className="projects-section">
            <div className="project-info" data-aos="fade-right">
                <h1>My Projects</h1>
                <p>Here are some of my featured projects that showcase my skills and passion for development.</p>
            </div>

            <div className="projects-container">
                {Array(6).fill(null).map((_, index) => (
                    <div className="project-card" data-aos="fade-up" key={index}>
                        <img src={`https://via.placeholder.com/300x200?text=Project+${index + 1}`} alt={`Project ${index + 1}`} />
                        <div className="project-details">
                            <h2>Project Title {index + 1}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum...</p>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="view-project-btn">
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
