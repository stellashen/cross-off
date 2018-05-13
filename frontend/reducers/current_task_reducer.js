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
