import merge from 'lodash/merge';
import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK
} from '../actions/task_actions';

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
      delete nextState[action.taskId];
      return nextState;
    default:
      return state;
  }
};

export default tasksReducer;
