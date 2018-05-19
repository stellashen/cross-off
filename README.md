# CrossOff - Todo List & Task Manager Tool
[CrossOff Live Site](http://www.mycrossoff.com/)

CrossOff is a full-stack web application that helps users create to-do lists and manage their tasks, inspired by TickTick.

This is the 2nd version. More updates will come out in the future.

Tech Stack:
- backend: Ruby on Rails, PostgreSQL
- frontend: JavaScript/React/Redux, HTML, JSX, SCSS

[Design Documents - CrossOff wiki](https://github.com/stellashen/cross-off/wiki)

![before login](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/splash.png)
![after login](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/main.png)

## Features
### version 1.0  (April 15, 2018)
#### User authentication:
+ encrypt the password using BCrypt
+ redirect url path using AuthRoute and ProtectedRoute.

#### Create and manage lists, tasks
+ Users can add/edit/remove lists
+ Users can click a list on the sidebar to navigate to the list page
+ On the list page, users can add tasks. Tasks are listed under "todos" category by default.
+ Users can move tasks to trash
+ Users can check the checkbox before a task to cross it off => completed tasks will be listed under the "Completed" category
+ Users can uncheck the checkbox to move the task back to the "todos" category

#### Add details to the tasks
+ Users can click a task title to view its details
+ Users can add due date to a task, and due date will show up next to the task title in the list view
+ Users can update the task details

### version 1.1 new features (May 13, 2018)
#### style
+ Hover effects for hovering over list/task name.
+ The current list/task will be highlighted in the navigation.
+ Long list/task name will be displayed in nice format.

#### scroll
+ Users can scroll the tasks under the list page (middle section). The sidebar and task detail page will not be affected by scrolling.
+ If users have many lists in the sidebar (left section), users can scroll the sidebar.
+ On the task detail page (right section), users can drag the bottom right corner of the description input box to enlarge the box. When the box height is over the browser window's height, users can scroll the task detail page. The "Save Changes" button will stay on top during scrolling for easy access.

#### task detail page (the right section after clicking a task title)
+ "Changes Saved!" will show up after clicking "Save Changes" button, and disappear after 2 seconds.

## Implementation
### Move a task to "Completed" or "Trash"
#### container for one task:
```jsx
//task_index_item_container.jsx
import { connect } from 'react-redux';
import React from 'react';
import {
  editTask,
  deleteTask,
  moveToCompleted,
  moveToTodos,
  moveToTrash,
} from '../../actions/task_actions';
import TaskIndexItem from './task_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const style = {textDecoration: 'line-through', color: 'gray'};
  const nullStyle = {textDecoration: 'none', color: 'black'};
  const task = ownProps.task;
  const divStyle = task.completed? style : nullStyle;
  const activeTaskId = state.ui.taskId;
  return {
    task,
    divStyle,
    activeTaskId,
    taskType: ownProps.taskType,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTask: (task) => dispatch(editTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id)),
    moveToCompleted: (task) => dispatch(moveToCompleted(task)),
    moveToTodos: (task) => dispatch(moveToTodos(task)),
    moveToTrash: (task) => dispatch(moveToTrash(task)),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskIndexItem));
```
#### component for one task
```jsx
// task_index_item.jsx
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
    const active = this.props.activeTaskId === this.props.task.id ? "task-item active-task" : "task-item";
    const divStyle = this.props.divStyle;
    return (
     <div className={active}>
       <div className="task-item-inner-wrapper">
         <input
           checked={this.props.task.completed? true : false}
           id={`taskCheckBox${task.id}`}
           type="checkbox"
           onChange={this.handleCheckBox(task)}
         />

         <Link to={this.props.taskType === "trash"? `/lists/trash/${task.id}` : `/lists/${task.list_id}/${task.id}`}>
           <span
             style={divStyle}
             className={task.due_date? "task-title task-title-with-due" : "task-title"}>
             {task.title}
           </span>
           <p style={divStyle} className="due">{task.due_date? `  due: ${formatDate}` : ''}</p>
         </Link>

         <span className="list-delete" onClick={this.handleTrash(task)}>
           <FontAwesomeIcon icon='trash-alt'/>
         </span>
       </div>
     </div>
    );
  }
}
```
#### actions for moving a task to completed/todos/trash
```js
//task_actions.js
// ...
export const MOVE_TASK_TO_COMPLETED = "MOVE_TASK_TO_COMPLETED";
export const MOVE_TASK_TO_TODOS = "MOVE_TASK_TO_TODOS";
export const MOVE_TASK_TO_TRASH = "MOVE_TASK_TO_TRASH";

export const moveToCompleted = (task) => dispatch => (
  APIUtil.updateTask(task).then(t => (
    dispatch(moveTaskToCompleted(t))
  ), err => (
    dispatch(receiveTaskErrors(err.responseJSON))
  ))
);

export const moveToTodos = (task) => dispatch => (
  APIUtil.updateTask(task).then(t => (
    dispatch(moveTaskToTodos(t))
  ), err => (
    dispatch(receiveTaskErrors(err.responseJSON))
  ))
);

export const moveToTrash = (task) => dispatch => (
  APIUtil.updateTask(task).then(t => (
    dispatch(moveTaskToTrash(t))
  ), err => (
    dispatch(receiveTaskErrors(err.responseJSON))
  ))
);

export const moveTaskToCompleted = task => ({
  type: MOVE_TASK_TO_COMPLETED,
  task
});

export const moveTaskToTodos = task => ({
  type: MOVE_TASK_TO_TODOS,
  task
});

export const moveTaskToTrash = task => ({
  type: MOVE_TASK_TO_TRASH,
  task
});

export const receiveTaskErrors = errors => ({
  type: RECEIVE_TASK_ERRORS,
  errors
});
//...
```

#### reducer
Update tasks' state in reducer.
- When receive tasks, put tasks under "todos" or "completed".
- Update state when a task's `completed` or `trash` field is updated.
- When receive a list, replace the tasks' old state with the tasks of the current list. Thus, only the tasks we need to render on the current page are kept in the state.
```js
//tasks_reducer.js
// ...
case RECEIVE_TASK:
  let afterState = merge({}, state);
  const NewOrUpdatedTask = {[action.task.id]: action.task};
  if (action.task.completed) {
    afterState = merge(afterState, {"completed": NewOrUpdatedTask});
  } else {
    afterState = merge(afterState, {"todos": NewOrUpdatedTask});
  }
  return afterState;
case MOVE_TASK_TO_COMPLETED:
  const cTask = action.task;
  const completedTask = {[cTask.id]: cTask};
  const cState = merge({}, state, {"completed": completedTask});
  delete cState["todos"][action.task.id];
  return cState;
case MOVE_TASK_TO_TODOS:
  const todoTask = action.task;
  const inCompletedTask = {[todoTask.id]: todoTask};
  const tState = merge({}, state, {"todos": inCompletedTask});
  delete tState["completed"][action.task.id];
  return tState;
case MOVE_TASK_TO_TRASH:
  const stateAfterTrash = merge({}, state);
  const trashTask = action.task;
  if (trashTask.completed) {
    delete stateAfterTrash["completed"][trashTask.id];
  } else {
    delete stateAfterTrash["todos"][trashTask.id];
  }
  return stateAfterTrash;
// ...
case RECEIVE_LIST:
  const tasksState = action.listInfo.tasks || {};
  return tasksState;
// ...
```

### Reuse Modal form component
`<Modal />` is nested directly under the `App` component. Technically it is always on the page, but we can make it show up or hide by calling `openModal` and `closeModal` actions:
```js
//modal_actions.js
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modalName, listId) => {
  return {
    type: OPEN_MODAL,
    modal: { name: modalName, listId: listId }
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
```

Because it is always on the page, I can use it whenever I need to, without thinking about route.

I used the same modal component for three forms: add list form, edit list form, and delete list form.

![add list](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/modal-add-list.png)
![edit list](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/modal-edit-list.png)
![delete list](https://github.com/stellashen/cross-off/blob/master/wiki/screenshots/modal-delete-list.png)

To do that, I just need to pass in the form type to the modal component as props. And then, in the modal, we find the right component by `switch...case...` conditional statements:

```js
// modal.jsx
//...more code...
if (!modal) {
  return null;
}
let component;
switch (modal.name) {
  case 'addListForm':
    component = <AddListFormContainer />;
    break;
  case 'editListForm':
    component = <EditListFormContainer listId={modal.listId}/>;
    break;
  case 'deleteList':
    component = <DeleteListContainer listId={modal.listId}/>;
    break;
  default:
    return null;
}
//...more code...
```

## Future Directions
Will add the following features:
- add a restore button for trash
- provide avatar image options
- cross off custom animation
- a toggle button to hide completed tasks

More features:
- tags
- search tasks by keyword

For readability & accessibility:
- implement responsive design (for larger screen, and mobile screen)
- provide language options
