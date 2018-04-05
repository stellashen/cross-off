import React from 'react';

export default () => {
  // const logo = require('../../../app/assets/images/logo/logo_transparent_background.png');
  // const logo = require('./logo_transparent_background.png');
  return (
  <div className="splash">
    <section>

      <div>
      <img src="assets/crossoff.png" /><h2>your tasks, </h2>
      </div>
      <h2>manage your life.</h2>

      <p id="first-line"> With CrossOff, you can create todos, jot down ideas,</p>
      <div id="second-line">
        <p> and celebrate your success by crossing your tasks off!</p>
        <img src="assets/7281-person-raising-both-hands-in-celebration.png"/>
      </div>

      <button type="button" className="signup button">Create Account</button>

    </section>
  </div>
);
};
