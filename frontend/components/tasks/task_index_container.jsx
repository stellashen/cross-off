import { connect } from 'react-redux';
import React from 'react';
import TaskIndex from './task_index';
import { withRouter } from 'react-router-dom';
import { fetchList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: ownProps.tasks,
    taskType: ownProps.taskType,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchList: (id) => dispatch(fetchList(id)),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskIndex));
