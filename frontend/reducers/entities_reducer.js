import { combineReducers } from 'redux';
import listsReducer from './lists_reducer';
import tasksReducer from './tasks_reducer';
import tagsReducer from './tags_reducer';
import addTagsReducer from './add_tags_reducer';

export default combineReducers({
  lists: listsReducer,
  tasks: tasksReducer,
  tags: tagsReducer,
  taggings: addTagsReducer,
});
