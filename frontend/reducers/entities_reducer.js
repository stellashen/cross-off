import { combineReducers } from 'redux';
import listsReducer from './lists_reducer';
import tasksReducer from './tasks_reducer';
import currentTaskReducer from './current_task_reducer';
import tagsReducer from './tags_reducer';

export default combineReducers({
  lists: listsReducer,
  tasks: tasksReducer,
  currentTask: currentTaskReducer,
  tags: tagsReducer,
});
