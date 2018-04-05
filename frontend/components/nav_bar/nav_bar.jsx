import React from 'react';

export default () => {
  return (
    <header className="nav-bar">
      <section className="logo">
      </section>

      <section className="nav-links">
        <ul>
          <li>
            <button type="button" className="signin button">Sign In</button>
          </li>
          <li>
            <button type="button" className="signup button">Create Account</button>
          </li>
          <li>
            <button type="button" className="demo button">Demo</button>
          </li>
        </ul>
      </section>
    </header>
  );
};
