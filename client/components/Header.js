import React, { Component } from 'react';

import Accounts from './Accounts';

class Header extends Component {
  onBinClick(event) {
    event.preventDefault();

    Meteor.call('bins.insert');
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand">deducto</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <a><Accounts /></a>
          </li>
          <li>
            <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;