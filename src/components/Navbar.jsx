import '../style/Navbar.css';

import React, { useEffect, useState } from 'react';

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function Navbar() {

    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop - sectionHeight / 2) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div>
            <nav className="navbar">
                <input type="checkbox" id="checkbox_toggle" checked={isOpen}
                    onChange={toggleMenu} />
                <label htmlFor="checkbox_toggle" className="dropdown"></label>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li>
                        <button onClick={() => scrollToSection('about')} className={`btn ${activeSection === 'about' ? 'highlight' : ''}`}>About</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('experience')} className={`btn ${activeSection === 'experience' ? 'highlight' : ''}`}>Experience</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('skills')} className={`btn ${activeSection === 'skills' ? 'highlight' : ''}`}>Skills</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('projects')} className={`btn ${activeSection === 'projects' ? 'highlight' : ''}`}>Projects</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('contact')} className={`btn ${activeSection === 'contact' ? 'highlight' : ''}`}>Contact</button>
                    </li>
                </ul>
            </nav>
            <nav className="sidebar">
                <ul className="side-links">
                    <li>
                        <ul>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`btn-side ${activeSection === 'about' ? 'highlight' : ''}`}
                            >
                                ●
                            </button>
                        </ul>
                        <ul>
                            <button
                                onClick={() => scrollToSection('experience')}
                                className={`btn-side ${activeSection === 'experience' ? 'highlight' : ''}`}
                            >
                                ●
                            </button>
                        </ul>
                        <ul>
                            <button
                                onClick={() => scrollToSection('skills')}
                                className={`btn-side ${activeSection === 'skills' ? 'highlight' : ''}`}
                            >
                                ●
                            </button>
                        </ul>
                        <ul>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className={`btn-side ${activeSection === 'projects' ? 'highlight' : ''}`}
                            >
                                ●
                            </button>
                        </ul>
                        <ul>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`btn-side ${activeSection === 'contact' ? 'highlight' : ''}`}
                            >
                                ●
                            </button>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;