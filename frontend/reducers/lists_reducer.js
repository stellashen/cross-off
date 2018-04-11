import merge from 'lodash/merge';
import {
  RECEIVE_LISTS,
  RECEIVE_LIST,
  REMOVE_LIST
} from '../actions/list_actions';
import { RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';

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
      delete nextState[action.listId];
      return nextState;
    case RECEIVE_TASK:
      const listId = action.task.list_id;
      const newState = merge({}, state);
      newState[listId]["tasksIds"].push({id: action.task.id});
      return newState;
    case REMOVE_TASK:
      const currentList = action.task.list_id;
      const changedState = merge({}, state);
      let idxToDelete = -1;
      changedState[currentList]["tasksIds"].forEach((idObject,idx) => {
        if (idObject["id"] === action.task.id) {
          idxToDelete = idx;
        }
      });
      if (idxToDelete !== -1) {
        changedState[currentList]["tasksIds"].splice(idxToDelete, 1);
      }
      return changedState;
    default:
      return state;
  }
};

export default listsReducer;
