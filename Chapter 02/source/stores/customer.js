"use strict";
import Reflux from "reflux";
import CustomerActions from "../actions/customer";
let _customer = {
  customer: [],
  validAddress: false
};

const CustomerStore = Reflux.createStore({

  init() {
    this.listenTo(
      CustomerActions.SaveAddress,
      this.onSaveAddress
    );
  },

  onSaveAddress(address){
    _customer = address;
    this.emit();
  },

  emit(){
    this.trigger(_customer);
  }
});

module.exports = CustomerStore;
