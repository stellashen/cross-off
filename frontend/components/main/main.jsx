import React from 'react';
import NewTaskBarContainer from '../tasks/new_task_bar_container';
import ListIndexContainer from '../lists/List_index_container';

export default () => {
  return (
    <div className="main">
      <NewTaskBarContainer />
      <Route path="/lists/:listId" component={ListIndexContainer} />
    </div>
  );
};
