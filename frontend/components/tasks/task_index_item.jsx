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
    return `${month + 1}/${date + 1}/${year}`;
  }

  render() {
    const task = this.props.task;
    if (task === undefined || !task || Object.keys(task).length === 0) return null;

    const formatDate = this.getFormatDate(task.due_date);

    return (
     <div style={this.props.divStyle} className="task-item">
       <input
         checked={this.props.task.completed? true : false}
         id={`taskCheckBox${task.id}`}
         type="checkbox"
         onChange={this.handleCheckBox(task)}
       />
       &nbsp;&nbsp;
       <Link to={this.props.taskType === "trash"? "/lists/trash" : `/lists/${task.list_id}/${task.id}`}>
         <span>
           {task.title.length <= 31? task.title : task.title.slice(0, 30).concat("...")}
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
