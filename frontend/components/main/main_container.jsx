import { connect } from 'react-redux';
import React from 'react';
import Main from './main';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const listId = state.ui.listId;
  return {
    listId
  };
};

export default withRouter(connect(
  mapStateToProps, null
)(Main));
