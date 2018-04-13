import merge from 'lodash/merge';
import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK,
  CLEAR_TASKS,
  MOVE_TASK_TO_COMPLETED,
  MOVE_TASK_TO_TODOS
} from '../actions/task_actions';
import { RECEIVE_LIST } from '../actions/list_actions';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
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
    case REMOVE_TASK:
      const nextState = merge({}, state);
        if (action.task.completed) {
          delete nextState["completed"][action.task.id];
        } else {
          delete nextState["todos"][action.task.id];
        }
      return nextState;
    case RECEIVE_LIST:
      const tasksState = action.listInfo.tasks || {};
      return tasksState;
    default:
      return state;
  }
};

export default tasksReducer;
