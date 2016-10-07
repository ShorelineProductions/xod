/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'xod-client/core/containers/Root';
import App from './containers/App';
import additionalReducers from './reducer';

import 'xod-client/core/styles/main';

ReactDOM.render(
  <Root
    extendReducers={additionalReducers}
  >
    <App />
  </Root>,
  document.getElementById('root')
);
