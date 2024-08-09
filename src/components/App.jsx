import '../style/App.css';

import React from 'react';

import Navbar from './Navbar.jsx'
import About from './About.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

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