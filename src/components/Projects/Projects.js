import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';

import projectImg from '../../assets/project-img.png';



const Projects = () => {
    const [projects] = useState([
        { title: 'Landing Page', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum...', image: projectImg },
        { title: 'Portifolio', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum...', image: projectImg },
        { title: 'Responsive Website', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum...', image: projectImg }
    ]);

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
                {projects.map((project, index) => (
                    <div className="project-card" data-aos="fade-up" key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className="project-details">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a href="#github" target="_blank" rel="noopener noreferrer" className="view-project-btn">
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
