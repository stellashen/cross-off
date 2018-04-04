import React from 'react';
// import NavBarContainer from './nav_bar/nav_bar_container';
import NavBar from './nav_bar/nav_bar';
import Splash from './splash/splash';
import Footer from './footer/footer';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path="/" component={NavBar} />
    <Route exact path="/" component={Splash} />
    <Route exact path="/" component={Footer} />

  </div>
);

export default App;
