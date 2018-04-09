import * as APIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';
export const REMOVE_LIST = "REMOVE_LIST";

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const receiveListErrors = errors => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const removeList = list => ({
  type: REMOVE_LIST,
  list
});

export const addNewList = list => dispatch => (
  APIUtil.addList(list).then(formList => (
    dispatch(receiveList(formList))
  ), err => (
    dispatch(receiveListErrors(err.responseJSON))
  ))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveListErrors([]))
);

export const fetchSpots = () => dispatch => (
  APIUtil.fetchLists().then(lists => (
    dispatch(receiveLists(lists))
  ), err => (
    dispatch(receiveListErrors(err.responseJSON))
  ))
);

export const fetchSpot = (id) => dispatch => (
  APIUtil.fetchList(id).then(list => (
    dispatch(receiveLists(list))
  ), err => (
    dispatch(receiveListErrors(err.responseJSON))
  ))
);
