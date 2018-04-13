import merge from 'lodash/merge';
// import {
//   RECEIVE_TAGS,
//   RECEIVE_TAG,
//   REMOVE_TAG
// } from '../actions/tag_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    // case RECEIVE_TAGS:
    //   return action.tags;
    // case RECEIVE_TAG:
    //   const newList = {[action.tagInfo.tag.id]: action.tagInfo.tag};
    //   return merge({}, state, newList);
    // case REMOVE_TAG:
    //   const nextState = merge({}, state);
    //   delete nextState[action.tagId];
    //   return nextState;
    default:
      return state;
  }
};

export default tagsReducer;
