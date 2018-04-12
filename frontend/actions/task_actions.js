import * as APIUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';
export const REMOVE_TASK = "REMOVE_TASK";
export const CLEAR_TASKS = "CLEAR_TASKS";

export const addNewTask = formTask => dispatch => (
  APIUtil.addTask(formTask).then(task => (
    dispatch(receiveTask(task))
  ), err => (
    dispatch(receiveTaskErrors(err.responseJSON))
  ))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveTaskErrors([]))
);

export const clearTasks = () => dispatch => (
  dispatch(receiveTasks({}))
);

export const fetchTasks = (isTrashed) => dispatch => (
  APIUtil.fetchTasks(isTrashed).then(tasks => (
    dispatch(receiveTasks(tasks))
  ), err => (
    dispatch(receiveTaskErrors(err.responseJSON))
  ))
);

export const fetchTask = (id) => dispatch => (
  APIUtil.fetchTask(id).then(task => (
    dispatch(receiveTasks(task))
  ), err => (
    dispatch(receiveTaskErrors(err.responseJSON))
  ))
);

export const deleteTask = (taskId) => dispatch => (
  APIUtil.deleteTask(taskId).then((task) => (
    dispatch(removeTask(task))
  ), err => (
    dispatch(receiveTaskErrors(err.responseJSON))
  ))
);

export const editTask = (task) => dispatch => (
  APIUtil.updateTask(task).then(updatedTask => (
    dispatch(receiveTask(updatedTask))
  ), err => (
    dispatch(receiveTaskErrors(err.responseJSON))
  ))
);

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const receiveTaskErrors = errors => ({
  type: RECEIVE_TASK_ERRORS,
  errors
});

export const removeTask = task => ({
  type: REMOVE_TASK,
  task
});
