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
        <span className="avatar-container">
          <img className="avatar" src={this.props.currentUser.img_url}/>
          <img className="tiny-logo" src="assets/icon_transparent_background"/>
        </span>
        <p className="user">{this.displayUserInfo()}</p>
        <button
          className="signout button"
          onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

export default UserProfile;
