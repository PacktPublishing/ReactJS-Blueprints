'use strict';
import React from 'react';
import {Breadcrumb,BreadcrumbItem} from "react-bootstrap";

const Breadcrumbs = React.createClass({
  render(){
    return (
      <Breadcrumb>
        <BreadcrumbItem href="#">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#">
          About
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Here you are
        </BreadcrumbItem>
      </Breadcrumb>
    )
  }
});

module.exports = Breadcrumbs;