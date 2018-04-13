import merge from 'lodash/merge';
import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
} from '../actions/tag_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAGS:
      return merge({}, action.tags);
    case RECEIVE_TAG:
      const newTag = {[action.tag.id]: action.tag};
      return merge({}, state, newTag);
    default:
      return state;
  }
};

export default tagsReducer;
