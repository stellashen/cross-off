import merge from 'lodash/merge';
import { RECEIVE_LIST, CLOSE_LIST, TRASH } from '../actions/list_actions';

const currentListReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LIST:
      return action.listInfo.list.id;
    case TRASH:
      return "trash";
    case CLOSE_LIST:
      return null;
    default:
      return state;
  }
};

export default currentListReducer;
