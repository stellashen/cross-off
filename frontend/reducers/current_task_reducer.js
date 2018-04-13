import merge from 'lodash/merge';
import { REQUEST_TASK } from '../actions/task_actions';

const currentTaskReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case REQUEST_TASK:
      return action.task;
    default:
      return state;
  }
};

export default currentTaskReducer;
