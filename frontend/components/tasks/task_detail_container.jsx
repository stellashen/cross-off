import { connect } from 'react-redux';
import React from 'react';
import { editTask, clearErrors } from '../../actions/task_actions';
import { addNewTag, fetchTags } from '../../actions/tag_actions';
import { addNewTagging } from '../../actions/tagging_actions';
import TaskDetail from './task_detail';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.taskId;
  let task = {};
  if (ownProps.tasks !== undefined) {
    const todosHash = ownProps.tasks.todos;
    const completedHash = ownProps.tasks.completed;

    let tasksHash = {};
    if (todosHash && todosHash[id]) {
      tasksHash = todosHash;
    } else if (completedHash && completedHash[id]) {
      tasksHash = completedHash;
    }

    if (Object.keys(tasksHash).length !== 0 && tasksHash) {
      task = tasksHash[id];
    }
  }

  return {
    tasks: state.entities.tasks,
    errors: state.errors.tasks,
    taskId: id,
    tags: state.entities.tags,
    taggings: state.entities.taggings,
    task: task,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTask: (task) => dispatch(editTask(task)),
    addNewTag: (tag) => dispatch(addNewTag(tag)),
    addNewTagging: (tagging) => dispatch(addNewTagging(tagging)),
    fetchTags: () => dispatch(fetchTags()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(TaskDetail));
