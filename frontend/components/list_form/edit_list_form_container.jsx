import { connect } from 'react-redux';
import React from 'react';
import { editList, clearErrors } from '../../actions/list_actions';
import { closeModal } from '../../actions/modal_actions';
import ListForm from './list_form';

const mapStateToProps = (state, ownProps) => {
  const defaultList = { name: '' };
  const list = state.entities.lists[ownProps.match.params.listId]
              || defaultList;
  const formType = 'Edit Post';
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

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
