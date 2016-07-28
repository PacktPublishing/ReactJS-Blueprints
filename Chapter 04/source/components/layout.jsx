'use strict';
import React from 'react';
import Reflux from 'reflux';
import {Row} from "react-bootstrap";
import Footer from "./footer.jsx";

const Layout = React.createClass({
  render() {
    return (<div>

        {this.props.children}
        <Footer />
      </div>);
  }
});

module.exports = Layout;

