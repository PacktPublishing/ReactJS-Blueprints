"use strict";
import React from "react";
import {Input, Button} from "react-bootstrap";
import CustomerActions from "../actions/customer";

const CustomerData  = React.createClass({
  displayName: "Customer data page",
  getDefaultProps(){
    return {
      customer: {
        address: {},
        validAddress: false
      }
    }
  },
  getInitialState() {
    return {
      customer:{
        name: this.props.customer.address.name ? this.props.customer.address.name : "",
        address: this.props.customer.address.address ? this.props.customer.address.address : "",
        zipCode: this.props.customer.address.zipCode ? this.props.customer.address.zipCode : "",
        city: this.props.customer.address.city ? this.props.customer.address.city : ""
      },
      validAddress: this.props.customer.validAddress ? this.props.customer.validAddress : false
    };
  },

  validationStateName() {
    let length = this.state.customer.name.length;
    if (length > 3) return "success";
    else if (length > 1) return "warning";
    else if (length > 0) return "error";
  },

  handleChangeName() {
    let state = this.state;
    state.customer.name = this.refs.inputName.getValue();
    if(this.checkAllValidations){
      state.validAddress = true;
    }
    this.setState(state);
    CustomerActions.SaveAddress(this.state);
  },

  validationStateAddress() {
    let length = this.state.customer.address.length;
    if (length > 5) return "success";
    else if (length > 2) return "warning";
    else if (length > 0) return "error";
  },

  handleChangeAddress() {
    let state = Object.assign({}, this.state);
    state.customer.address = 
      this.refs.inputAddress.getValue();
    if(this.checkAllValidations){
      state.validAddress = true;
    }
    this.setState(state);
    CustomerActions.SaveAddress(state);
  },

  validationStateZipCode() {
    let length = this.state.customer.zipCode.length;
    if (length > 3) return "success";
    else if (length > 1) return "warning";
    else if (length > 0) return "error";
  },

  handleChangeZipCode() {
    let state = Object.assign({}, this.state);
    state.customer.zipCode = this.refs.inputZipCode.getValue();
    if(this.checkAllValidations){
      state.validAddress = true;
    }
    this.setState(state);
    CustomerActions.SaveAddress(state);
  },

  validationStateCity() {
    let length = this.state.customer.city.length;
    if (length > 3) return "success";
    else if (length > 1) return "warning";
    else if (length > 0) return "error";
  },

  handleChangeCity() {
    let state = Object.assign({}, this.state);
    state.customer.city = this.refs.inputCity.getValue();
    if(this.checkAllValidations){
      state.validAddress = true;
    }
    this.setState(state);
    CustomerActions.SaveAddress(state);
  },

  checkAllValidations(){
    return ("success" == this.validationStateName &&
    "success" == this.validationStateAddress() &&
    "success" == this.validationStateZipCode &&
    "success" == this.validationStateCity);
  },

  render(){
    return (
      <div>
        <Input
          type="text"
          value={this.state.customer.name}
          placeholder="Enter your name"
          label="Name"
          bsStyle={this.validationStateName()}
          hasFeedback
          ref="inputName"
          onChange={this.handleChangeName} />

        <Input
          type="text"
          value={this.state.customer.address}
          placeholder="Enter your street address"
          label="Street "
          bsStyle={this.validationStateAddress()}
          hasFeedback
          ref="inputAddress"
          onChange={this.handleChangeAddress} />


        <Input
          type="text"
          value={this.state.customer.zipCode}
          placeholder="Enter your zip code"
          label="Zip Code"
          bsStyle={this.validationStateZipCode()}
          hasFeedback
          ref="inputZipCode"
          onChange={this.handleChangeZipCode} />


        <Input
          type="text"
          value={this.props.customer.city ? this.props.customer.city : this.state.customer.city}
          placeholder="Enter your city"
          label="City"
          bsStyle={this.validationStateCity()}
          hasFeedback
          ref="inputCity"
          onChange={this.handleChangeCity} />

      </div>
    );
  }

});
module.exports = CustomerData ;
