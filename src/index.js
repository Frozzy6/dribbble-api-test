import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger'
import { logger } from 'redux-logger'
import Modal from 'react-modal';

import 'normalize.css';

import reducer, {getInitState} from './reducers';
import App from './App';

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
  // compose(
  //   applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

Modal.setAppElement(
  document.getElementById('root')
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
