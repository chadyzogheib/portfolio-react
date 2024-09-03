import '../style/About.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
  return (
    <section id='about' className='sections'>
      <div className='intro'>
        <p>
          Hello world~!
        <br/>
        <br/>
          I'm Chady Zogheib,
          <br/>
          a Junior Web Developer.
          <br/>
          <FontAwesomeIcon icon="download" />
        </p>
      </div>
    </section>
  );
}

export default About;