'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import style from './main.css';
import App from './components/app';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
