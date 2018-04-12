import merge from 'lodash/merge';
import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK
} from '../actions/task_actions';
import { RECEIVE_LIST } from '../actions/list_actions';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      let afterState = merge({}, state);
      if (action.task.trash) {
        delete afterState[action.task.id];
      } else {
        const newTask = {[action.task.id]: action.task};
        afterState = merge({}, state, newTask);
      }
      return afterState;
    case REMOVE_TASK:
      const nextState = merge({}, state);
      delete nextState[action.task.id];
      return nextState;
    case RECEIVE_LIST:
      const tasksState = action.listInfo.tasks;
      return tasksState;
    default:
      return state;
  }
};

export default tasksReducer;
