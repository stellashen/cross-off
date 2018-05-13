import { combineReducers } from 'redux';
import modal from './modal_reducer';
import currentListReducer from './current_list_reducer';
import currentTaskReducer from './current_task_reducer';

export default combineReducers({
  modal,
  listId: currentListReducer,
  taskId: currentTaskReducer
});
