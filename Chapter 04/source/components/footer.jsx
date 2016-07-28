'use strict';
import React from 'react';

const Footer = React.createClass({
  displayName: "Footer",
  render(){
    return (<footer className="footer text-center">
      <div className="container">
        <p className="text-muted">The Web Searcher</p>
      </div>
    </footer>);
  }

});
export default Footer;

