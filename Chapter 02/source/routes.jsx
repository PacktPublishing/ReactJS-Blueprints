'use strict';

import Products from "./pages/products.jsx";
import Company from "./pages/company.jsx";
import Home from "./pages/home.jsx";
import Checkout from "./pages/checkout.jsx";
import Receipt from "./pages/receipt.jsx";
import Item from "./pages/item.jsx";
import React from 'react';
import Layout from './layout.jsx';
import {
  Router,
  Route,
  browserHistory
} from 'react-router'

const Routes = (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route name="home"
        path="/"
        component={Home} />
      <Route name="company"
        path="company"
        component={Company} />
      <Route name="products"
        path="products"
        component={Products} />
      <Route name="item"
        path="item/:id"
        component={Item} />
      <Route name="checkout"
        path="checkout"
        component={Checkout} />
      <Route name="receipt"
        path="receipt"
        component={Receipt} />
    </Route>
  </Router>
);

module.exports = Routes;
