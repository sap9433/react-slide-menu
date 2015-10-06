/* eslint react/self-closing-comp:0 */

import React from 'react';

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

React.render((
  <Router history={history}>
    <Route component={RootComponent}>
      <Route path="/page1" component={Page1}></Route>
      <Route path="/page2" component={Page2}></Route>
    </Route>
  </Router>
), document.body);
