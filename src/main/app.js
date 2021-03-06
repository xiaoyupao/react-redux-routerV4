import React, { Component } from 'react'
import { render } from 'react-dom';

import RouteTree from './router';
import createStore from './store';
import initState from './initState';

console.log(initState)
export default class App extends Component {
  render(){
    // 后期加上初始 state
    const store = createStore(initState);

    return (
      <RouteTree store={store}/>
    )
  }
}
