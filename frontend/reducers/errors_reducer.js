import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import listsErrorsReducer from './lists_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  lists: listsErrorsReducer
});
