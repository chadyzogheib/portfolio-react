import '../style/Contact.css';

import React from 'react';

function Contact () {
    return (
        <section id='contact' className='sections'>
          <div className='iconos'>
              <a href='https://www.linkedin.com/in/chadyzogheib/'>
                <img src='/images/linkedin-icon.svg' alt='linkedin' className='icono'/>
              </a>
              <a href='https://www.instagram.com/chady.zogheib/'>
                <img src='/images/instagram-icon.svg' alt='instagram' className='icono'/>
              </a>
              <a href='mailto:chadyze@gmail.com'>
                <img src='/images/email-icon.svg' alt='email' className='icono'/>
              </a>
              <a href='https://wa.me/+50688564728' alt='Whatsapp me'>
                <img src='/images/whatsapp-icon.svg' alt='whatsapp' className='icono'/>
              </a>
              <a href='https://t.me/chadyze'>
                <img src='/images/telegram-icon.svg' alt='telegram' className='icono'/>
              </a>
              <a href='https://github.com/chadyzogheib'>
                <img src='/images/github-icon.svg' alt='github' className='icono'/>
              </a>
          </div>
          <div className='title'>
            <h2>Want to contact me?</h2>
          </div>
      </section>
    );
}

export default Contact;