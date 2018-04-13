import * as APIUtil from '../util/tag_api_util';

export const RECEIVE_TAGGINGS = 'RECEIVE_TAGGINGS';
export const RECEIVE_TAGGING = 'RECEIVE_TAGGING';

export const addNewTag = formTag => dispatch => (
  APIUtil.addTag(formTag).then(tag => (
    dispatch(receiveTag(tag))
  ))
);

export const fetchTags = () => dispatch => (
  APIUtil.fetchTags().then(tags => (
    dispatch(receiveTags(tags))
  ))
);

export const fetchTag = (id) => dispatch => (
  APIUtil.fetchTag(id).then(tag => (
    dispatch(receiveTag(tag))
  ))
);

export const receiveTags = tags => ({
  type: RECEIVE_TAGGINGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAGGING,
  tag
});
