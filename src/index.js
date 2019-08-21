import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppTwo from './AppTwo';
import moment from 'moment-timezone';
import * as serviceWorker from './serviceWorker';

const currentTime = moment.tz(moment(), 'Asia/Tokyo').format('YYYY年MM月DD日');

ReactDOM.render(
  React.createElement(App, {
    currentTime
  }, null),
  document.getElementById('root-one')
);

ReactDOM.render(
  React.createElement(AppTwo, null, null),
  document.getElementById('root-two')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
