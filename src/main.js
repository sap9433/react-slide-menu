/* eslint react/self-closing-comp:0 */

import React, {Component} from 'react';

import {
  Router, Route
}
from 'react-router';
import {
  history
}
from 'react-router/lib/HashHistory';

import {
  RootComponent
}
from './components/RootComponent.js';
import {
  Page1
}
from './components/Page1.js';
import {
  Page2
}
from './components/Page2.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Route component={RootComponent}>
            <Route path="/page1" component={Page1}></Route>
            <Route path="/page2" component={Page2}></Route>
          </Route>
        </Router>
      </div>
    );
  }
}

React.render(<App />, document.getElementById('content'));
