import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../Store';

browserHistory.queryKey = false;

import App from '../components/App';
import Home from '../components/Home'


const Routes = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" components={App}>
            <IndexRoute components={Home} />
          </Route>
        </Router>
      </Provider>
    )
  }
});

export default Routes;
