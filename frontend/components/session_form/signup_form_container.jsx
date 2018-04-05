import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (formUser) => dispatch(signup(formUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
