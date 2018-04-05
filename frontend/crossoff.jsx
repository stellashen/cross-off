import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // testing in console: window.getState() to see the state shape
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  document.body.style.background = "#FAFAFA";
  ReactDOM.render(<Root store={ store }/>, root);
});
