import merge from 'lodash/merge';
import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK,
  CLEAR_TASKS
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
