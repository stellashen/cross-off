import { connect } from 'react-redux';
import React from 'react';
import { fetchTask, editTask } from '../../actions/task_actions';
import TaskDetail from './task_detail';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    task: {
      title: '',
      description: '',
      due_date: '',
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTask: (id) => dispatch(fetchTask(id)),
    editTask: (task) => dispatch(editTask(task)),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskDetail));
