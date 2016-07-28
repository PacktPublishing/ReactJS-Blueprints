"use strict";

import Reflux from "reflux";

const Cart = {
  AddToCart: Reflux.createAction("AddToCart"),
  RemoveFromCart: Reflux.createAction("RemoveFromCart"),
  ClearCart: Reflux.createAction("ClearCart")
};

module.exports = Cart;