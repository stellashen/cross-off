import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      img_url: ''
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
    const formType = this.props.formType;
    const askUsername = (type)=>{
      if (type === 'signup') {
        return (
        <label>Username:
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
          />
        </label>
        );
      } else {
        return <div></div>;
      }
    };

    const usernameForm = askUsername(formType);

    return (
      <div className="login-form-container">
        <img src="assets/icon_transparent_background.png" className="big-crossoff-icon" />
        <form onSubmit={this.handleSubmit} className="login-form-box">

          <div className="login-form">
            {usernameForm}
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
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
            <input className="signup button" type="submit" value={this.props.formType} />
          </div>

          <div className="errors">{this.renderErrors()}</div>
          <div className="alt-session-link">{this.props.navLink}</div>

        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
