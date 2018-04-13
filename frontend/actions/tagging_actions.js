import * as APIUtil from '../util/tagging_api_util';

export const RECEIVE_TAGGINGS = 'RECEIVE_TAGGINGS';
export const RECEIVE_TAGGING = 'RECEIVE_TAGGING';
export const REMOVE_TAGGING = "REMOVE_TAGGING";

export const addNewTagging = formTagging => dispatch => (
  APIUtil.addTagging(formTagging).then(tagging => (
    dispatch(receiveTagging(tagging))
  ))
);

export const fetchTaggings = () => dispatch => (
  APIUtil.fetchTaggings().then(taggings => (
    dispatch(receiveTaggings(taggings))
  ))
);

export const fetchTagging = (id) => dispatch => (
  APIUtil.fetchTagging(id).then(tagging => (
    dispatch(receiveTagging(tagging))
  ))
);

export const deleteTagging = (taggingId) => dispatch => (
  APIUtil.deleteTagging(taggingId).then(() => (
    dispatch(removeTagging(taggingId))
  ))
);

export const receiveTaggings = taggings => ({
  type: RECEIVE_TAGGINGS,
  taggings
});

export const receiveTagging = tagging => ({
  type: RECEIVE_TAGGING,
  tagging
});

export const removeTagging = taggingId => ({
  type: REMOVE_TAGGING,
  taggingId
});
