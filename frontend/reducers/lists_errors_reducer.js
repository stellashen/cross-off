import {
  RECEIVE_LIST_ERRORS,
  RECEIVE_LIST
} from '../actions/list_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      if (action.errors === undefined){
        return state;
      } else {
        return action.errors;
      }
    case RECEIVE_LIST:
      return [];
    default:
      return state;
  }
};
