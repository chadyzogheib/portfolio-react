import './style/App.css';

import React from 'react';

import Navbar from './Navbar.js'
import About from './About.js';
import Experience from './Experience.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

function App() {
  return (
      <div className='full-scroll'>
        <div className="App">
          <Navbar />
          
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Experience />
          </div>
          <div className="section">
            <Skills />
          </div>
          <div className="section">
            <Projects />
          </div>
          <div className="section">
            <Contact />
          </div>
        </div>
        </div>
  );
}

export default App;