import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      if (action.errors === undefined){
        return state;
      } else {
        return action.errors;
      }
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
