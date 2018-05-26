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

## Implementation Examples
- Example 1: Reuse Modal form component
- Example 2: Move a task to "Completed" / "Todos"
- Example 3: Highlight the current task

### Example 1: Reuse Modal form component
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

### Example 2: Move a task to "Completed" / "Todos"
A task has a "completed" field (true/false). When a new task is created, it is set to the default value `completed: false`. So a new task is always under 'Todos'.

After we check a task, it will be moved to display under "Completed". Three things need to happen after that:

**Goal 1. Update the task in the database to have `completed: true`.**

**Goal 2. Render the task with a different style (grayed out, crossed off).**

**Goal 3. Re-render the current list component to display the tasks in their correct positions (that is, a completed task should display under "Completed").**

Similarly, after we uncheck a task, it will be moved back to "Todos".

View sample state here: [Sample State - CrossOff wiki](https://github.com/stellashen/cross-off/wiki/sample-state)

To achieve these goals, I wrote the following code:

#### Goal 1: update the task in the database
In the container, dipatch `moveToCompleted` and `moveToTodos` actions to props.
In the component, write a function to update the task (in the database and in the state) when its checkbox is clicked.
```jsx
// task_index_item.jsx
// ...
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
```

Under render() function, call `handleCheckBox(task)` function when the checkbox before a task is checked or unchecked.
```jsx
<div className="task-item-inner-wrapper">
  <input
    checked={this.props.task.completed? true : false}
    id={`taskCheckBox${task.id}`}
    type="checkbox"
    onChange={this.handleCheckBox(task)}
  />
```

Write actions for moving a task to completed/todos:
```js
//task_actions.js
// ...
export const MOVE_TASK_TO_COMPLETED = "MOVE_TASK_TO_COMPLETED";
export const MOVE_TASK_TO_TODOS = "MOVE_TASK_TO_TODOS";

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

export const moveTaskToCompleted = task => ({
  type: MOVE_TASK_TO_COMPLETED,
  task
});

export const moveTaskToTodos = task => ({
  type: MOVE_TASK_TO_TODOS,
  task
});
//...
```

Update tasks' state in reducer:
- When receive tasks, put tasks under "todos" or "completed".
- Update state when a task's `completed` field is updated.
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
case RECEIVE_LIST:
  const tasksState = action.listInfo.tasks || {};
  return tasksState;
// ...
```
#### Goal 2. Render the task with a different style (grayed out, crossed off)
This is handled by adding inline style `style={divStyle}` to a task in the `task_index_item.jsx` component. `divStyle` is passed in as props based on whether this task's `completed` field is true or false.
```jsx
const style = {textDecoration: 'line-through', color: 'gray'};
const nullStyle = {textDecoration: 'none', color: 'black'};
const divStyle = task.completed? style : nullStyle;
```

Another way to implement this is to pass in `completed: true/false` as props, then add different CSS classes to div based on the value of `this.props.completed`.

#### Goal 3. Re-render the current list component to display the tasks in their correct positions

Add tasks to the list 'show' view:

app/views/api/lists/show.json.jbuilder
```json
json.list do
  json.partial! 'api/lists/list', list: @list
end

json.tasks do
  json.todos do
    @todos.each do |task|
      json.set! task.id do
        json.partial! 'api/tasks/task', task: task
      end
    end
  end

  json.completed do
    @completed.each do |task|
      json.set! task.id do
        json.partial! 'api/tasks/task', task: task
      end
    end
  end
end

```

lists actions:
```js
// lists_actions.js
//...
export const RECEIVE_LIST = 'RECEIVE_LIST';

export const receiveList = listInfo => ({
  type: RECEIVE_LIST,
  listInfo
});
```

Use nested components:
`ListIndexItem` passes todos and completed tasks as props to `TaskIndex`, then `TaskIndex` pass each task to `TaskIndexItem`:

```jsx
// list_index_item.jsx
// ...

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
    if (!currentList) return <Redirect to="/lists" />;
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
```

The `TaskIndex` component renders a group of tasks under "Todos" or "Completed":
```jsx
// task_index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexItemContainer from '../tasks/task_index_item_container';

export default class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTasks(tasks) {
    return tasks.map((task, idx) => {
      return (
        <li key={`${idx}${task.id}${task.title}`} className="task">
          <TaskIndexItemContainer task={task} taskType={this.props.taskType} />
        </li>
      );
    });
  }

  render() {
    const tasks = Object.values(this.props.tasks);
    if (Object.keys(tasks).length === 0) return null;
    return (
      <div className="tasks">
        <ul>
          {this.renderTasks(tasks)}
        </ul>
      </div>
    );
  }
}
```

### Example 3: Highlight the current task
Step 1: Write actions to request a task, and close a task.
```js
//task_actions.js
export const REQUEST_TASK = "REQUEST_TASK";
export const CLOSE_TASK = "CLOSE_TASK";
export const requestSingleTask = (id) => dispatch => (
  APIUtil.fetchTask(id).then(task => (
    dispatch(requestTask(task))
  ), err => (
    dispatch(receiveTaskErrors(err.responseJSON))
  ))
);
export const closeTask = () => {
  return {
    type: CLOSE_TASK
  };
}
export const requestTask = task => ({
  type: REQUEST_TASK,
  task
});
```
*Note:*

I later realized that I actually don't need to fetch the task. For highlighting, I only need taskId. I can just dispatch `requestTask` action directly to pass the id. But just in case in the future I want to do something else, I'll leave it this way for now.

Step 2: Write reducers for adding the current task id to state under `ui`.
```js
//current_task_reducer.js
import merge from 'lodash/merge';
import { REQUEST_TASK, CLOSE_TASK } from '../actions/task_actions';

const currentTaskReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case REQUEST_TASK:
      return action.task.id;
    case CLOSE_TASK:
      return null;
    default:
      return state;
  }
};

export default currentTaskReducer;

//ui_reducer.js
import { combineReducers } from 'redux';
import modal from './modal_reducer';
import currentListReducer from './current_list_reducer';
import currentTaskReducer from './current_task_reducer';

export default combineReducers({
  modal,
  listId: currentListReducer,
  taskId: currentTaskReducer
});
```

Step 3: Fetch current task id and add it to state when the task detail component mounts or receive new props (change to a different task); remove task id from state when the component unmounts.
```jsx
//task_detail.jsx
componentDidMount() {
  const taskId = this.props.match.params.taskId;
  if (taskId) {
    this.props.requestSingleTask(taskId);
  }
}

componentWillReceiveProps(nextProps) {
  const taskId = nextProps.match.params.taskId;
  if (this.props.match.params.taskId !== taskId) {
    this.props.requestSingleTask(taskId);
  }
}

componentWillUnmount() {
  this.props.closeTask();
}
```

Step 4: On the middle section, where we display task titles, we can highlight the current task by adding an `active-task` class to it.
```jsx
// task_index_item.jsx
render() {
  const active = this.props.activeTaskId === this.props.task.id ? "task-item active-task" : "task-item";
  return (
   <div className={active}>
      // ...more code...
   </div>
  );
}
```

Step 5: Write the CSS class. Now the current task is always highlighted, no matter you click a task title, or enter a url with task id, or refresh page.

Step 6: What happens when we click a task title to open its task detail page, but then delete the current task? We should go back to the listId url. For example, we should be redirected from "https://www.mycrossoff.com/#/lists/103/257" to "https://www.mycrossoff.com/#/lists/103" when we delete task 257.

```jsx
render() {
  const listId = this.props.match.params.listId;
  const task = this.getCurrentTask();
  if (!task) {
    if (listId === undefined) {
      return <Redirect to="/lists/trash" />;
    }
    return <Redirect to={`/lists/${listId}`} />;
  }
  return (
    <div className="task-detail">
      // ... code for task detail ...
    </div>
  );
}
```
Note: I have a different route for `trash`. So when listId is undefined, we are on the trash page.

## Future Directions
Will add the following features:
- add a restore button for trash
- provide avatar image options
- cross off custom animation
- a toggle button to hide completed tasks
- task detail: Quill-enabled rich text editor + upload image/files
- tags
- search tasks by keyword
