'use strict';

import React from 'react';
import {Button,ButtonGroup,ButtonToolbar,DropdownButton,MenuItem,SplitButton} from 'react-bootstrap';

const Buttons = React.createClass({
  getInitialState(){
    return {
      isLoading: false
    }
  },
  setLoading() {
    this.setState({isLoading: true});

    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }, 2000);
  },
  render() {
    let isLoading = this.state.isLoading;

    return (
      <div>
        <h2>Buttons</h2>
        <h5>Simple buttons</h5>

        {/* Because React doesn"t output newlines between elements, buttons on the same line are displayed flush against each other. To preserve the spacing between multiple inline buttons, wrap your button group in <ButtonToolbar />. */}
        <ButtonToolbar>
          {/* Standard button */}
          <Button>Default</Button>

          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button bsStyle="primary">Primary</Button>

          {/* Indicates a successful or positive action */}
          <Button bsStyle="success">Success</Button>

          {/* Contextual button for informational alert messages */}
          <Button bsStyle="info">Info</Button>

          {/* Indicates caution should be taken with this action */}
          <Button bsStyle="warning">Warning</Button>

          {/* Indicates a dangerous or potentially negative action */}
          <Button bsStyle="danger">Danger</Button>

          {/* De-emphasize a button by making it look like a link while maintaining button behavior */}
          <Button bsStyle="link">Link</Button>
        </ButtonToolbar>

        {/* Full-width buttons */}
        <h5>Full-width buttons</h5>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="small" block>Small block button (full-width)</Button>
          <Button bsStyle="info" bsSize="small" block>Medium block button (full-width)</Button>
          <Button bsStyle="success" bsSize="large" block>Large block button (full-width)</Button>
        </ButtonToolbar>


        {/* Active, non-active and disabled buttons */}
        <h5>Active, non-active and disabled buttons</h5>
        <ButtonToolbar>
          <Button>Default button - Non-active</Button>
          {/* To set a buttons active state simply set the components active prop */}
          <Button active>Default button - Active</Button>
          {/* Make buttons look unclickable by fading them back 50%. To do this add the
           disabled attribute to buttons. Note, this affects appearance only */}
          <Button disabled>Default button - Disabled</Button>
        </ButtonToolbar>

        {/* Loading state */}
        <h5>Loading state</h5>
        <Button
          bsStyle="primary"
          disabled={isLoading}
          onClick={!isLoading ? this.setLoading : null}>
          {isLoading ? 'Loading...' : 'Loading state'}
        </Button>

        {/* Loading state */}
        <h5>Groups and Toolbar</h5>
        <ButtonToolbar>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </ButtonGroup>

          {/* Note: you can add _vertical_ to ButtonGroup*/}
          <ButtonGroup>
            <Button>4</Button>
            <Button>5</Button>
          </ButtonGroup>
        </ButtonToolbar>

        {/* Dropdown & SplitButton */}
        <h5>Dropdown buttons</h5>
        <ButtonToolbar>
          <DropdownButton title="Dropdown" id="bg-nested-dropdown">
            <MenuItem bsStyle="link" eventKey="1">Dropdown link</MenuItem>
            <MenuItem bsStyle="link" eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
          <DropdownButton noCaret title="Dropdown noCaret" id="bg-nested-dropdown-nocaret">
            <MenuItem bsStyle="link" eventKey="1">Dropdown link</MenuItem>
            <MenuItem bsStyle="link" eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
          <DropdownButton dropup title="Dropup" id="bg-nested-dropup">
            <MenuItem bsStyle="link" eventKey="1">Dropdown link</MenuItem>
            <MenuItem bsStyle="link" eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
          <SplitButton bsStyle="success" title="Splitbutton down" id="successbutton">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
          </SplitButton>
          <SplitButton dropup bsStyle="success" title="Splitbutton up" id="successbutton">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
          </SplitButton>
        </ButtonToolbar>

      </div>
    );
  }
});

module.exports = Buttons;
