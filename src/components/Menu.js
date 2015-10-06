import React, {
  Component
}
from 'react';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.hide = ::this.hide;
  }

  componentWillMount() {
    menucss.use();
  }

  componentWillUnmount() {
    navcss.unuse();
  }

  render() {
    return (
      <div className="menu">
	        <div className={(this.state.visible ? 'visible ' : '') + this.props.alignment}>
	        	{this.props.children}
	        </div>
	    </div>
    );
  }

  show() {
    this.setState({
      visible: true
    });
    document.addEventListener('click', this.hide);
    this.props.onMenuChange(true);
  }

  hide() {
    document.removeEventListener('click', this.hide);
    this.setState({
      visible: false
    });
    this.props.onMenuChange(false);
  }
}
