import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <header className="nav-bar">

      <section className="logo">
      </section>

      <section className="nav-links">

        <ul>
          <li>
            <Link to="/signin">
              <button type="button" className="signin button">Sign In</button>
            </Link>
          </li>

          <li>
            <Link to="/signup">
              <button type="button" className="signup button">Create Account</button>
            </Link>
          </li>

          <li>
            <button type="button" className="demo button">Demo</button>
          </li>
        </ul>

      </section>
    </header>
  );
};
