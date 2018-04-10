import {
  RECEIVE_TASK_ERRORS,
  RECEIVE_TASK
} from '../actions/task_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TASK_ERRORS:
      if (action.errors === undefined){
        return state;
      } else {
        return action.errors;
      }
    case RECEIVE_TASK:
      return [];
    default:
      return state;
  }
};
