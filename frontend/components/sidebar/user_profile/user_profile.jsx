import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  displayUserInfo() {
    const currentUser = this.props.currentUser;
    if (currentUser.username.length !== 0) {
      return currentUser.username;
    } else {
      return currentUser.email;
    }
  }
  render() {
    return (
      <div className="user-profile">
        <p className="username">{this.displayUserInfo()}</p>
        <button
          className="signout button"
          onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

export default UserProfile;
