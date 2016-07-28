'use strict';
import React from 'react';
import { Nav, NavItem, Navbar, Button }
from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = React.createClass({
  getDefaultProps(){
    return {
    cart: []
    }
  },
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Webshop</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer  eventKey={1} to="/company">
              <Button bsStyle="link">
                About
              </Button>
            </LinkContainer>

            <LinkContainer  eventKey={2} to="/products">
              <Button bsStyle="link">
                Products
              </Button>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/checkout">
              <Button bsStyle="link">
                Your cart: {this.props.cart.length} items
              </Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
});

module.exports = Menu;
