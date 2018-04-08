import * as APIUtil from '../util/list_api_util';

export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const receiveErrors = errors => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const addNewList = list => dispatch => (
  APIUtil.addList(list).then(formList => (
    dispatch(receiveList(formList))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);
