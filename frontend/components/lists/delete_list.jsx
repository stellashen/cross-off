import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

class DeleteList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.deleteList(this.props.listId).then(this.props.closeModal);
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
      <div className="list-form-container delete-list">
        <div className = "list-form-header">
          <div onClick={this.props.closeModal} className="close-x">
            <FontAwesomeIcon icon='times'/>
          </div>
          <p>Delete List</p>
        </div>
        <form onSubmit={this.handleSubmit} className="list-form-box">
          <div className="list-form-body">
            <br/>
            <div>
              Are you sure you want to delete list
              (<p className="strong">{this.props.listName}</p>)?
              Tasks within this list will be deleted.
            </div>
            <br/>
            <div className="errors">{this.renderErrors()}</div>
          </div>

          <br/>
          <span className="list-form-footer">
            <button onClick={this.props.closeModal}
              className="list-cancel button">Cancel</button>
            <input className="list-save button" type="submit" value= "Delete" />
          </span>
        </form>
      </div>
    );
  }
}

export default DeleteList;
