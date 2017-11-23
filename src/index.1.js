import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import creactHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers/';
import App from './containers/App';

import Orders from './containers/Orders';
import Goods from './containers/Goods';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const middleware = [thunk];
if (process.env.NODE_EVN !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  combineReducers(reducer),
  applyMiddleware(...middleware)
)

const history = creactHistory();

render(
  <Provider store={store}>
    <Router history={history} >
      <div>
        <Route path="/" component={App} />
        <Route path="/goods" component={Goods} />
        <Route path="/orders" component={Orders} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
