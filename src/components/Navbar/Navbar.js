import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const root = document.documentElement;

        if (isDarkMode) {
            root.style.setProperty('--primary-color', '#e7e7e7');
            root.style.setProperty('--secondary-color', '#938a82');
            root.style.setProperty('--background-color', '#070605');
            root.style.setProperty('--border-color', '#ffff');
            root.style.setProperty('--heading-color', '#ccc');
            root.style.setProperty('--text-color', '#aaa');
            root.style.setProperty('--text-color2', '#000');
            root.style.setProperty('--box-color', '#e1dfe1');
            root.style.setProperty('--box-hover-color', '#c3c2c8');
            root.style.setProperty('--box-shadow', '0 4px 8px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(255, 255, 255, 0.05)');
            root.style.setProperty('--image-filter', 'invert(1)'); // White for dark mode
        } else {
            root.style.setProperty('--primary-color', '#181818');
            root.style.setProperty('--secondary-color', '#6c757d');
            root.style.setProperty('--background-color', '#f8f9fa');
            root.style.setProperty('--border-color', '#dee2e6');
            root.style.setProperty('--heading-color', '#333');
            root.style.setProperty('--text-color', '#555');
            root.style.setProperty('--text-color2', '#fff');
            root.style.setProperty('--box-color', '#1e201e');
            root.style.setProperty('--box-hover-color', '#3c3d37');
            root.style.setProperty('--box-shadow', '0 2px 5px rgba(0, 0, 0, 0.3)');
            root.style.setProperty('--image-filter', 'invert(0)'); // Black for light mode
        }
    }, [isDarkMode]);

    return (
        <nav className="navbar">
            <div className="logo">
                <NavLink to="/">MyPortfolio</NavLink>
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><NavLink to="/" onClick={() => setIsOpen(false)} end>Home</NavLink></li>
                <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
                <li><NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink></li>
                <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
            </ul>
            <button
                className="dark-mode-toggle"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
            >
                {isDarkMode ? '🌞' : '🌙'}
            </button>
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
        </nav>
    );
};

export default Navbar;
