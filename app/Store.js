import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';

import rootReducer from './reducers/index';

const loggerMiddleware = createLogger();

const defaultState = {
  todos : [
    {
      title: 'Make Website',
      dateAdded: Date.now(),
      complete: false
    },
    {
      title: 'Go Shopping',
      dateAdded: Date.now(),
      complete: false
    },
    {
      title: 'Join Circus',
      dateAdded: Date.now(),
      complete: false
    }
  ]
}

const enhancers = compose(
  applyMiddleware(loggerMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);


export const history = syncHistoryWithStore(browserHistory, store);

export default store;
