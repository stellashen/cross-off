import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import SidebarContainer from './sidebar/sidebar_container';
import MainContainer from './main/main_container';
import Modal from './modal/modal';
import ListIndexItemContainer from './lists/list_index_item_container';
import TrashContainer from './trash/trash_container';
import TaskDetailContainer from './tasks/task_detail_container';
import TaskDetailReminder from './tasks/task_detail_reminder';
import BeforeLogin from './before_login';

const App = () => (
  <div id="app">
    <AuthRoute exact path="/" component={BeforeLogin} />

    <AuthRoute exact path="/signin" component={SignInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />

    <ProtectedRoute path="/lists" component={SidebarContainer} />
    <ProtectedRoute exact path="/lists" component={MainContainer} />
    <Modal />

    <Switch>
        <ProtectedRoute path="/lists/trash" component={TrashContainer} />
        <ProtectedRoute path="/lists/:listId" component={ListIndexItemContainer} />
    </Switch>

    <Switch>
      <ProtectedRoute
        path="/lists/trash/:taskId"
        component={TaskDetailContainer} />
      <ProtectedRoute
        path="/lists/:listId/:taskId"
        component={TaskDetailContainer} />
      <ProtectedRoute
        path="/lists/:listId"
        component={TaskDetailReminder} />
    </Switch>

  </div>
);

export default App;
