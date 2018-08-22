import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
    //render Blaze accounts form
    this.view = Blaze.render(Template.loginButtons, 
      ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    // destroy the form created.. we need to cleanup the forms
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    )
  }
}

export default Accounts;