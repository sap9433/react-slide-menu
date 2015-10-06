import React, {
  Component
}
from 'react';

import {
  Menu
}
from './Menu.js';

import {
  MenuItem
}
from './MenuItem.js';

const navcss = require('../styles/menu.css');

export default class RootComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
    this.showLeft = ::this.showLeft;
  }

  componentWillMount() {
    navcss.use();
  }

  componentWillUnmount() {
    navcss.unuse();
  }
  render() {
    return (
      <div className="navContainer">
        <Menu onMenuChange={::this._onMenuChange} ref="slidemenu" alignment="left">
          <MenuItem hash="/page1">Dash Board</MenuItem>
          <MenuItem hash="/page2">Create Deal</MenuItem>
        </Menu>
        <div className={this.state.expand ? 'slidebody' : 'shrinkbody'}>
          <span className="menuIcon" onClick={this.showLeft}>&#9776;</span>
          {this.props.children}
        </div>
      </div>
    );
  }

  _onMenuChange(expand) {
    this.setState({
      expand: expand
    });
  }

  showLeft() {
    this.refs.slidemenu.show();
  }
}
