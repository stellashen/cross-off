import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.list;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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
    const formList = Object.assign({}, this.state);
    this.props.processForm(formList).then(this.props.closeModal);
  }

  handleKeyPress(e) {
    if(e.key === 'Enter'){
      this.handleSubmit(e);
    }
  }

  renderErrors() {
    console.log(this.props.errors);
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`listformerror-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="list-form-container">
        <div className = "list-form-header">
          <div onClick={this.props.closeModal} className="close-x">
            <FontAwesomeIcon icon='times'/>
          </div>
          <p>{this.props.formType}</p>
        </div>
        <form onSubmit={this.handleSubmit} className="list-form-box">
          <div className="list-form-body">
            <br/>
            <input autoFocus type="text"
              value={this.state.name}
              onChange={this.update('name')}
              className="list-form-input"
              placeholder="Name"
              onKeyPress={this.handleKeyPress}
            />
            <br/>
            <div className="errors">{this.renderErrors()}</div>
          </div>

          <br/>
          <span className="list-form-footer">
            <button onClick={this.props.closeModal}
              className="list-cancel button">Cancel</button>
            <button className="list-save button" type="submit">
              Save
            </button>
          </span>
        </form>
      </div>
    );
  }
}

export default ListForm;
