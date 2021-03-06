import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
  <div className="splash">
    <section className="first-page">
      <section className="splash-left">

        <div>
        <img src="http://res.cloudinary.com/devleg/image/upload/v1523167960/lzt9lezjdawscsr6fqtv.png" /><h2>your tasks, </h2>
        </div>
        <h2 id="manage">manage your life.</h2>

        <p id="first-line"> With CrossOff, you can create todos, jot down ideas,</p>
        <div id="second-line">
          <p> and celebrate your success by crossing your tasks off!</p>
          <img src="http://res.cloudinary.com/devleg/image/upload/v1523170542/7281-person-raising-both-hands-in-celebration.png"/>
        </div>

        <Link to="/signup">
          <button type="button" className="signup button mainbutton">Create Account</button>
        </Link>
      </section>

      <section className="splash-right">
        <div id="laptop">
          <img id="checklist" src="http://res.cloudinary.com/devleg/image/upload/v1523170552/checklist.png" />
        </div>
      </section>
    </section>

    <section className="second-page"></section>
  </div>
);
};
