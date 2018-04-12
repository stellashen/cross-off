import { connect } from 'react-redux';
import React from 'react';
import { addNewList, clearErrors } from '../../actions/list_actions';
import { closeModal } from '../../actions/modal_actions';
import ListForm from './list_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.lists,
    formType: 'Add New List',
    list: { name: '' }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (formList) => dispatch(addNewList(formList)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
