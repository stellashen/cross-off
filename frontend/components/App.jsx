import React from 'react';
import { Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar';
import Splash from './splash/splash';
import Footer from './footer/footer';
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';

const App = () => (
  <div>
    <Route exact path="/" component={NavBar} />
    <Route exact path="/" component={Splash} />
    <Route exact path="/" component={Footer} />
    <Route exact path="/signin" component={SignInFormContainer} />
    <Route exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
