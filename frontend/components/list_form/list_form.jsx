import React from 'react';
import { withRouter } from 'react-router-dom';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      user_id: this.props.currentUser.id
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
    const list = Object.assign({}, this.state);
    this.props.processForm(list).then(this.props.closeModal);
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
      <div className="list-form-container">
        <form onSubmit={this.handleSubmit} className="list-form-box">
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <h3>Add List</h3>
          <div className="list-form">
            <br/>
            <input type="text"
              value={this.state.name}
              onChange={this.update('name')}
              className="list-form-input"
              placeholder="Name"
            />
            <br/>
            <div className="errors">{this.renderErrors()}</div>

            <br/>
            <span class="list-form-buttons">
              <button onClick={this.props.closeModal}
                className="list-cancel button">Cancel</button>
              <input className="list-save button" type="submit" value= "Save" />
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ListForm);
