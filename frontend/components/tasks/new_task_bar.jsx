import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

class NewTaskBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.task;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.emptyInput = this.emptyInput.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  emptyInput(field) {
    return this.setState((state) => ({
      [field]: ''
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const formTask = Object.assign({}, this.state);
    this.props.processForm(formTask);
    this.emptyInput('title');
  }

  handleKeyPress(e) {
    if(e.key === 'Enter'){
      this.handleSubmit(e);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.listId !== nextProps.match.params.listId) {
      this.setState((state) => ({["list_id"]: nextProps.match.params.listId}));
    }
  }

  renderErrors() {
    if (this.props.errors.newtask === undefined) {
      return;
    }
    return(
      <ul>
        {this.props.errors.newtask.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="list-form-container new-task-bar-container">
        <form onSubmit={this.handleSubmit} className="list-form-box new-task-bar">
          <div className="list-form-body">
            <input type="text"
              value={this.state.title}
              onChange={this.update('title')}
              className="list-form-input"
              placeholder={`Add Task: press Enter to save to the "${this.props.list.name.length <= 10? this.props.list.name : this.props.list.name.slice(0,9).concat("...")}" list`}
              onKeyPress={this.handleKeyPress}
            />
            <div className="errors">{this.renderErrors()}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTaskBar;
