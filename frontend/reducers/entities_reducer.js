import { combineReducers } from 'redux';
import listsReducer from './lists_reducer';

export default combineReducers({
  lists: listsReducer
});
