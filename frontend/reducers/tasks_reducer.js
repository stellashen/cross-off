import merge from 'lodash/merge';
import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK,
  TRASH_TASK
} from '../actions/task_actions';
import { RECEIVE_LIST } from '../actions/list_actions';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_TASK:
      const newTask = {[action.task.id]: action.task};
      return merge({}, state, newTask);
    case REMOVE_TASK:
      const nextState = merge({}, state);
      delete nextState[action.task.id];
      return nextState;
    case RECEIVE_LIST:
      const tasksState = action.listInfo.tasks;
      // return merge({}, state, tasksState);
      return tasksState;
    default:
      return state;
  }
};

export default tasksReducer;
