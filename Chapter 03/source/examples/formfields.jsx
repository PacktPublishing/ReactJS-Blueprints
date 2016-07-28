'use strict';
import React from 'react';
import ClassNames from 'classnames';
import {Input,ButtonInput,Glyphicon} from 'react-bootstrap';

const Formfields = React.createClass({
  getInitialState() {
    return {
      name: '',
      email: '',
      password: '',
      checkedRadioButton:"RadioOne"
    };
  },

  validateEmail() {
    let length = this.state.email.length;
    let validEmail = this.state.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (validEmail) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },
  validatePassword() {
    let pw = this.state.password;
    if (pw.length < 5) return null;
    let containsNumber = pw.match(/[0-9]/);
    let hasCapitalLetter = pw.toLowerCase() !== pw;
    return containsNumber && hasCapitalLetter ? 'success' : 'error';
  },

  handlePasswordChange(){
    this.setState({password: this.refs.inputPassword.getValue()})
  },
  handleEmailChange(){
    this.setState({email: this.refs.inputEmail.getValue()})
  },
  validateForm(){
    return (this.validateEmail() === this.validatePassword());
  },
  render() {
    return (
      <form>
        <Input type="text" label="Name" placeholder="Enter your name"/>
        <Input type="email" label="Email Address" placeholder="Enter your email"
               onChange={this.handleEmailChange}
               ref="inputEmail"
               bsStyle={this.validateEmail()}/>
        <Input type="password" label="Password"
               onChange={this.handlePasswordChange}
               ref="inputPassword"
               bsStyle={this.validatePassword()}/>

        <ButtonInput type="submit" value="Submit this form"
                     disabled={!(this.validateForm())} />
      </form>
    );
  }
});

module.exports = Formfields;