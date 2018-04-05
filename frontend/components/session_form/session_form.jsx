import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    const buttonName = `${this.props.formType} button`;
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <img src="assets/icon_transparent_background.png" className="big-crossoff-icon" />

          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className={buttonName} type="submit" value={this.props.formType} />
          </div>

          <div className="errors">{this.renderErrors()}</div>
          <div className="alt-session-link">{this.props.navLink}</div>

        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
