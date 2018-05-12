import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';
import NewTaskBarContainer from '../tasks/new_task_bar_container';
import TaskIndexContainer from '../tasks/task_index_container';

export default class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.listId;
    if (id !== "trash") {
      this.props.fetchList(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.listId;
    if (this.props.match.params.listId !== id) {
      this.props.clearTasks();
      if (id !== "trash") {
        this.props.fetchList(nextProps.match.params.listId);
      }
    }
  }

  renderTodos(todos) {
    if (!todos) return null;
    return (
      <div className="todos">
        <h4 className="todos-heading">Todos:</h4>
        <TaskIndexContainer tasks={todos} taskType='list'/>
      </div>
    );
  }

  renderCompleted(completed) {
    if (!completed) return null;
    return (
      <div className="completed">
        <h4 className="completed-heading">Completed:</h4>
        <TaskIndexContainer tasks={completed} taskType='list'/>
      </div>
    );
  }

  render() {
    const { currentList, tasks } = this.props;
    if (!currentList) return null;
    if (Object.keys(tasks).length === 0) return (
      <div className="list-index-item">
        <h1 className="list-name">{currentList.name}</h1>
        <br/>
        <NewTaskBarContainer />
      </div>
    );
    return (
      <div className="list-index-item">
        <h1 className="list-name">{currentList.name}</h1>
        <br/>
        <NewTaskBarContainer />
        <section className="lists-scroll">
          {this.renderTodos(tasks.todos)}
          {this.renderCompleted(tasks.completed)}
        </section>
      </div>
    );
  }
}
