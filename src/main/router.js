import React, { Component } from 'react'
import {
  // BrowserRouter as Router,
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';

// import creactHistory from 'history/createBrowserHistory';
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore, ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import App from '../containers/App';
import Home from '../containers/Home';
import Goods from '../containers/Goods';
import Orders from '../containers/Orders';

const history = createHistory();


export default function RouteTree({ store }) {

  return (
    <Provider store={store}>
      <ConnectedRouter history={history} >
        <App>
          <Route exact path="/" component={Home} />
          <Route path="/goods" component={Goods} />
          <Route path="/orders" component={Orders} />
        </App>
      </ConnectedRouter>
    </Provider>
  )

}
