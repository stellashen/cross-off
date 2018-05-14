import * as APIUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';
export const REQUEST_LIST = "REQUEST_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const TRASH = "TRASH";
export const CLOSE_LIST = "CLOSE_LIST";

export const addNewList = formList => dispatch => (
  APIUtil.addList(formList).then(listInfo => (
    dispatch(receiveList(listInfo))
  ), err => (
    dispatch(receiveListErrors(err.responseJSON))
  ))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveListErrors([]))
);

export const fetchLists = () => dispatch => (
  APIUtil.fetchLists().then(lists => (
    dispatch(receiveLists(lists))
  ), err => (
    dispatch(receiveListErrors(err.responseJSON))
  ))
);

export const fetchList = (id) => dispatch => (
  APIUtil.fetchList(id).then(listInfo => (
    dispatch(receiveList(listInfo))
  ), err => (
    dispatch(receiveListErrors(err.responseJSON))
  ))
);

export const requestSingleList = (id) => dispatch => (
  APIUtil.fetchList(id).then(list => (
    dispatch(requestList(list))
  ), err => (
    dispatch(receiveListErrors(err.responseJSON))
  ))
);

export const closeList = () => {
  return {
    type: CLOSE_LIST
  };
}

export const trash = () => {
  return {
    type: TRASH
  };
}

export const deleteList = (listId) => dispatch => (
  APIUtil.deleteList(listId).then(() => (
    dispatch(removeList(listId))
  ), err => (
    dispatch(receiveListErrors(err.responseJSON))
  ))
);

export const editList = (list) => dispatch => (
  APIUtil.updateList(list).then(updatedListInfo => (
    dispatch(receiveList(updatedListInfo))
  ), err => (
    dispatch(receiveListErrors(err.responseJSON))
  ))
);

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

export const receiveList = listInfo => ({
  type: RECEIVE_LIST,
  listInfo
});

export const requestList = listInfo => ({
  type: REQUEST_LIST,
  listInfo
});

export const receiveListErrors = errors => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const removeList = listId => ({
  type: REMOVE_LIST,
  listId
});
