import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SigninForm from './signin_form';

const mapStateToProps = ({ session, errors }) => {
  return {
    user: session.currentUser,
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (formUser) => dispatch(login(formUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
