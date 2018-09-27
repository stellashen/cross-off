import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      img_url: '<%= asset_path 'defaultAvatar.png' %>'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
            <Link to="/">
              <img
                src="http://res.cloudinary.com/devleg/image/upload/v1523170585/icon_transparent_background.png"
                className="big-crossoff-icon" />
            </Link>
          </div>
          <form onSubmit={this.handleSubmit} className="session-form-box">
            <div className="session-form">
              <div className="row">
                <label htmlFor="username-signup">
                  <div className="session-icon">
                    <FontAwesomeIcon icon='user'/>
                  </div>
                </label>
                <input type="text"
                  id="username-signup"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="session-input"
                  placeholder="Nickname (optional)"
                />
              </div>

              <br/>
              <div className="row">
                <label htmlFor="email-signup">
                  <div className="session-icon">
                    <FontAwesomeIcon icon='envelope'/>
                  </div>
                </label>
                <input type="text"
                  id="email-signup"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="session-input"
                  placeholder="Email"
                />
              </div>

              <br/>
              <div className="row">
                <label htmlFor="password-signup">
                  <div className="session-icon">
                    <FontAwesomeIcon icon='lock'/>
                  </div>
                </label>
                <input type="password"
                  id="password-signup"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="session-input"
                  placeholder="Password"
                />
              </div>
              <br/>
              <input className="signup button" type="submit" value= "Create Account" />
            </div>

            <div className="errors">{this.renderErrors()}</div>
            <div className="alt-session-link">
              <p>Have an account already?</p>&nbsp;&nbsp;
              <div className="link-text">
                <Link to="/signin">Sign In</Link>
              </div>
            </div>

            <div className="link-text center-text">
              <Link to="/">Back to Homepage</Link>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
