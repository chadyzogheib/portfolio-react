import './style/App.css';

import React from 'react';
import Fullpage from '@fullpage/react-fullpage';

import Navbar from './Navbar.js'
import About from './About.js';
import Experience from './Experience.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

function App() {
  return (
    /*<Fullpage
      scrollingSpeed={1000}
      anchors={['About', 'Experience', 'Skills', 'Projects', 'Contact']}
      navigation
      render={({ state, fullpageApi }) => (*/
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
      /*)}
    />*/
  );
}

export default App;