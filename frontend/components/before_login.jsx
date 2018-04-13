import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import Splash from './splash/splash';
import Footer from './footer/footer';

export default () => (
  <div id="before-login">
    <NavBarContainer />
    <Splash />
    <Footer />
  </div>
);
