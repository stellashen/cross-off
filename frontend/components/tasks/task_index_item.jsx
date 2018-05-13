import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import solids from '@fortawesome/fontawesome-free-solid';

export default class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCheckBox(task) {
    return e => {
      if (e.target.checked) {
        task.completed = true;
        this.props.moveToCompleted(task);
      } else {
        task.completed = false;
        this.props.moveToTodos(task);
      }
    };
  }

  handleTrash(task) {
    return e => {
      if (this.props.taskType === 'trash') {
        this.props.deleteTask(task.id);
      } else {
        task.trash = true;
        this.props.moveToTrash(task);
      }
    };
  }

  getFormatDate(str) {
    const d = new Date(str);
    const date = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    if (month === 11 && date === 31) return `1/1/${year + 1}`;
    if (date === 31) return `${month + 2}/1/${year}`;
    if ((date === 28 || date === 29) && month === 1) return `3/1/${year}`;
    if (date === 30 && (month === 3 || month === 5
      || month === 8 || month === 9 || month === 10)) {
        return `${month + 2}/1/${year}`;
    }
    return `${month + 1}/${date + 1}/${year}`;
  }

  render() {
    const task = this.props.task;
    if (task === undefined || !task || Object.keys(task).length === 0) return null;

    const formatDate = this.getFormatDate(task.due_date);
    const charsNumLimit = task.due_date? 22 : 31;
    const title = task.title.length <= charsNumLimit? task.title : task.title.slice(0, charsNumLimit - 1).concat("...")

    const active = this.props.activeTaskId === this.props.task.id ? "task-item active-task" : "task-item";

    return (
     <div style={this.props.divStyle} className={active}>
       <input
         checked={this.props.task.completed? true : false}
         id={`taskCheckBox${task.id}`}
         type="checkbox"
         onChange={this.handleCheckBox(task)}
       />
       &nbsp;&nbsp;
       <Link to={this.props.taskType === "trash"? `/lists/trash/${task.id}` : `/lists/${task.list_id}/${task.id}`}>
         <span>
           {title}
           &nbsp;&nbsp;&nbsp;&nbsp;
           <p className="due">{task.due_date? `due: ${formatDate}` : ''}</p>
         </span>
       </Link>

       <span className="list-delete" onClick={this.handleTrash(task)}>
         <FontAwesomeIcon icon='trash-alt'/>
       </span>
     </div>
    );
  }
}
