import { connect } from 'react-redux';
import React from 'react';
import { editList, clearErrors } from '../../actions/list_actions';
import { closeModal } from '../../actions/modal_actions';
import ListForm from './list_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // const defaultList = { name: '' };
  // const list = state.entities.lists[ownProps.match.params.listId]
  //             || defaultList;
  const list = state.entities.lists[ownProps.listId];
  console.log(list);
  console.log(ownProps.listId);
  // console.log(ownProps.match.params.listId);
  console.log(state.entities.lists);
  const formType = 'Edit List';
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.lists,
    formType: formType,
    list: list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (formList) => dispatch(editList(formList)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListForm));
