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
      const newList = {[action.listInfo.list.id]: action.listInfo.list};
      return merge({}, state, newList);
    case REMOVE_LIST:
      const nextState = merge({}, state);
      delete nextState[action.listId];
      return nextState;
    case RECEIVE_TASK:
      const listId = action.task.list_id;
      const newState = merge({}, state);
      newState[listId]["tasksIds"].push(action.task.id);
      return newState;
    case REMOVE_TASK:
      const currentList = action.task.list_id;
      const changedState = merge({}, state);
      const idsArr = changedState[currentList]["tasksIds"];
      let idxToDelete = -1;
      idxToDelete = idsArr.indexOf(action.task.list_id);
      if (idxToDelete > -1) {
        console.log(changedState[currentList]["tasksIds"]);
        idsArr.splice(idxToDelete, 1);
        console.log(changedState[currentList]["tasksIds"]);
      }
      return changedState;
    default:
      return state;
  }
};

export default listsReducer;
