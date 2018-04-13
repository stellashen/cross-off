import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

export default () => (
  <div className="footer">
    <section id="footer-left">
      <a href="https://github.com/stellashen/cross-off">
        <FontAwesomeIcon icon={['fab','github']}/>
      </a>
      <a href="https://www.linkedin.com/in/yangchenshen/">
        <FontAwesomeIcon icon={['fab','linkedin']}/>
      </a>
    </section>

    <section id="footer-right">
      <p>© 2018 CrossOff Team</p>
    </section>
  </div>
);
