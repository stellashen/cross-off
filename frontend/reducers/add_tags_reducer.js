import merge from 'lodash/merge';
import {
  RECEIVE_TAGGINGS,
  RECEIVE_TAGGING,
  REMOVE_TAGGING
} from '../actions/tagging_actions';

const addTagsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAGGINGS:
      return action.taggings;
    case RECEIVE_TAGGING:
      const newTagging = {[action.tagging.id]: action.tagging};
      return merge({}, state, newTagging);
    case REMOVE_TAGGING:
      const nextState = merge({}, state);
      delete nextState[action.taggingId];
      return nextState;
    default:
      return state;
  }
};

export default addTagsReducer;
