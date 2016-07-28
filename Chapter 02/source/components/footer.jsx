'use strict';
import React from 'react';

const Footer = React.createClass({
  displayName: "Footer page",
  render(){
    return (
      <footer className="footer text-center">
        <div className="container">
          <p className="text-muted">Copyright 2015 Your Webshop. All rights reserved.</p>
        </div>
      </footer>
    );
  }

});
module.exports = Footer;