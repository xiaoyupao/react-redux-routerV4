import React, { Component } from 'react'
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import creactHistory from 'history/createBrowserHistory';
import createHistory from 'history/createBrowserHistory'
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

import { ENV_DEVELOPMENT } from '../constants/basic';

const history = createHistory();
// const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

console.log('1111history', history)
console.log('reducers', reducers)
console.log('combineReducers', combineReducers({...reducers}))
// 后期加上 初始state
export default function createStoreByInitState(initState) {
  const logger = createLogger();
  const middleware = [thunk, historyMiddleware];
  if (ENV_DEVELOPMENT) {
    middleware.push(logger);
  }

  const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    initState,
    applyMiddleware(...middleware)
  )

  console.log(store)
  return store;
}