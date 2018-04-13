import { connect } from 'react-redux';
import React from 'react';
import { editTask, clearErrors } from '../../actions/task_actions';
import { addNewTag, fetchTags } from '../../actions/tag_actions';
import { addNewTagging } from '../../actions/tagging_actions';
import TaskDetail from './task_detail';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.entities.tasks,
    errors: state.errors.tasks,
    taskId: ownProps.match.params.taskId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTask: (task) => dispatch(editTask(task)),
    addNewTag: (tag) => dispatch(addNewTag(tag)),
    addNewTagging: (tagging) => dispatch(addNewTagging(tagging)),
    fetchTags: () => dispatch(editTask()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskDetail));
