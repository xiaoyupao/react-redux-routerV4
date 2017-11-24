import React, { Component } from 'react'
import {
  Router, Route, IndexRedirect, browserHistory, hashHistory
} from 'react-router';
import { Provider } from 'react-redux';

import { syncHistoryWithStore } from 'react-router-redux';

import App from '../containers/App';
import Home from '../containers/Home';
import Goods from '../containers/Goods';
import Orders from '../containers/Orders';

export default function RouteTree({ store }) {
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Provider store={store}>
      <Router history={history} >
        <Route path="/" component={App}>
          <IndexRedirect to={'/'} />
          <Route path="/goods" component={Goods} />
          <Route path="/orders" component={Orders} />
        </Route>
      </Router>
    </Provider>
  )

}
