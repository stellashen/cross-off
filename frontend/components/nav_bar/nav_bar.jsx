import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  demoSignin() {
    return e => {
      e.preventDefault();
      const login = this.props.login;
      const demoUser = {
        email: "guest@crossoff.com",
        password: "password"
      };
      login(demoUser);
    };
  }

  render() {
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
              <button type="button" onClick={this.demoSignin()} className="demo button">Demo</button>
            </li>
          </ul>

        </section>
      </header>
    );
  }
}

export default NavBar;
