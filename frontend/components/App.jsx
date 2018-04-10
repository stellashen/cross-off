import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import Splash from './splash/splash';
import Footer from './footer/footer';
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import SidebarContainer from './sidebar/sidebar_container';
import Main from './main/main';
import Modal from './modal/modal';
import ListIndexItemContainer from './lists/list_index_item_container';

const App = () => (
  <div id="app">
    <AuthRoute exact path="/" component={NavBarContainer} />
    <Route exact path="/" component={Splash} />
    <Route exact path="/" component={Footer} />

    <AuthRoute exact path="/signin" component={SignInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />

    <ProtectedRoute path="/lists" component={SidebarContainer} />
    <ProtectedRoute exact path="/lists" component={Main} />
    <Modal />

    <ProtectedRoute path="/lists/:listId" component={ListIndexItemContainer} />
  </div>
);

export default App;
