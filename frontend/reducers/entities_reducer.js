import { combineReducers } from 'redux';
import listsReducer from './lists_reducer';
import tasksReducer from './tasks_reducer';

export default combineReducers({
  lists: listsReducer,
  tasks: tasksReducer,
});
