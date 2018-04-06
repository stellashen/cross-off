import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-page">
        <div className="session-form-container">
          <div className="big-crossoff-logo">
            <img src="assets/icon_transparent_background.png" className="big-crossoff-icon" />
          </div>
          <form onSubmit={this.handleSubmit} className="session-form-box">
            <div className="session-form">
              <div className="row">
                <label for="email-signin">
                  <div className="session-icon">
                    <FontAwesomeIcon icon='envelope'/>
                  </div>
                </label>
              <input type="text"
                id="email-signin"
                value={this.state.email}
                onChange={this.update('email')}
                className="session-input"
              />
              </div>

              <br/>
              <div className="row">
                <label for="password-signin">
                  <div className="session-icon">
                    <FontAwesomeIcon icon='lock'/>
                  </div>
                </label>
                <input type="password-signin"
                  id="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="session-input"
                />
              </div>
              <br/>
              <input className="signup button" type="submit" value= "Sign In" />
            </div>

            <div className="errors">{this.renderErrors()}</div>
            <div className="alt-session-link">
              <p>Don't have an account?</p>&nbsp;&nbsp;
              <div className="link-text">
                <Link to="/signup">Create Account</Link>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);