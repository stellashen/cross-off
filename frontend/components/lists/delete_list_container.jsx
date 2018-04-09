import { connect } from 'react-redux';
import React from 'react';
import { clearErrors, deleteList } from '../../actions/list_actions';
import { closeModal } from '../../actions/modal_actions';
import DeleteList from './delete_list';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const list = state.entities.lists[ownProps.listId];
  return {
    errors: state.errors.lists,
    listId: list.id,
    listName: list.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteList: (id) => dispatch(deleteList(id)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(DeleteList));
