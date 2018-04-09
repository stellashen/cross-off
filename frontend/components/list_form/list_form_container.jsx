import { connect } from 'react-redux';
import React from 'react';
import { addNewList, clearErrors } from '../../actions/list_actions';
import { closeModal } from '../../actions/modal_actions';
import ListForm from './list_form';

const mapStateToProps = ({ entities, session, errors }) => {
  return {
    currentUser: session.currentUser,
    errors: errors.lists,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (formList) => dispatch(addNewList(formList)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: (errors) => dispatch(clearErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
