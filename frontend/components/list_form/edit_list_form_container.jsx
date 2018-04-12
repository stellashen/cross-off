import { connect } from 'react-redux';
import React from 'react';
import { editList, clearErrors } from '../../actions/list_actions';
import { closeModal } from '../../actions/modal_actions';
import ListForm from './list_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const list = state.entities.lists[ownProps.listId];
  const formType = 'Edit List';
  return {
    errors: state.errors.lists,
    formType: formType,
    list: list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (formList) => dispatch(editList(formList)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(ListForm));
