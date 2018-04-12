import { connect } from 'react-redux';
import React from 'react';
import { clearErrors, deleteList } from '../../actions/list_actions';
import { closeModal } from '../../actions/modal_actions';
import DeleteList from './delete_list';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const lists = state.entities.lists;
  const list = lists[ownProps.listId];
  const listName = list.name;
  return {
    errors: state.errors.lists,
    list: list,
    listName: listName,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteList: (id) => dispatch(deleteList(id)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(DeleteList));
