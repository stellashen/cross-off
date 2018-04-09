import merge from 'lodash/merge';
import {
  RECEIVE_LISTS,
  RECEIVE_LIST,
  REMOVE_LIST
} from '../actions/list_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      const newList = {[action.list.id]: action.list};
      return merge({}, state, newList);
    case REMOVE_LIST:
      const nextState = merge({}, state);
      // debugger;
      delete nextState[action.listId];
      return nextState;
    default:
      return state;
  }
};

export default listsReducer;
