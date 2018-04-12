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
    this.props.fetchList(this.props.match.params.listId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.listId !== nextProps.match.params.listId) {
      this.props.fetchList(nextProps.match.params.listId);
    }
  }

  render() {
    const { currentList, tasks } = this.props;
    if (!currentList) return null;

    return (
      <div className="list-index-item">
        <h1 className="list-name">{currentList.name}</h1>
        <br/>

        <NewTaskBarContainer />

        <TaskIndexContainer tasks={tasks} taskType='list'/>
      </div>
    );
  }
}
