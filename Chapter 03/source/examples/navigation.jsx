'use strict';

import React from 'react';
import { Nav,
  Navbar,
  NavBrand,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

const Navigation = React.createClass({
  render() {
    return (
      <Navbar inverse fixedTop defaultExpanded>
        <Navbar.Header>
          <Navbar.Brand>
            Responsive Web app
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse >
          <Nav>
            <NavItem
              eventKey={ 1 }
              href = "#">
              Link
            </NavItem>
            <NavItem
              eventKey = { 2 }
              href = "#">
              Link
            </NavItem>
            <NavDropdown
              eventKey = { 3 }
              title = "Dropdown"
              id = "collapsible-nav-dropdown">
              <MenuItem eventKey={ 3.1 }>
                Action
              </MenuItem>
              <MenuItem eventKey={ 3.2 }>
                Another action
              </MenuItem>
              <MenuItem eventKey={ 3.3 }>
                Something else here
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={ 3.3 }>
                Separated link
              </MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey = { 1 } href = "#">
              Link Right
            </NavItem>
            <NavItem eventKey = { 2 } href = "#">
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Navigation;
