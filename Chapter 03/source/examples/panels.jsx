'use strict';

import React from 'react';
import {Panel,Button,PanelGroup,Accordion} from 'react-bootstrap';

const Panels = React.createClass({
  getInitialState(){
    return {
      open: false,
      activeKey: 1
    }
  },
  render() {
    return (
      <div>
        <h2>Panels</h2>

        <div>
          {/* Single Panel */}
          <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
            {!this.state.open ? "Open" : "Close"}
          </Button>
          <Panel collapsible expanded={this.state.open}
                 header="Panel 1" footer="Panel 1 footer" bsStyle="primary">
            This text is hidden until you click the button.
          </Panel>

          {/* Controlled Panel group */}
          <PanelGroup activeKey={this.state.activeKey}
                      onSelect={ (activeKey)=> this.setState({ activeKey: activeKey })} accordion>
            <Panel collapsible expanded={this.state.open}
                   header="Panel 1" eventKey="1 - Controlled PanelGroup" bsStyle="info">
              Panel 1 content
            </Panel>

            <Panel collapsible expanded={this.state.open}
                   header="Panel 2" eventKey="2 - Controlled PanelGroup" bsStyle="info">
              Panel 2 content
            </Panel>
          </PanelGroup>

          {/* Uncontrolled Panel group */}
          <PanelGroup accordion>
            <Panel collapsible header="Panel 3 - Uncontrolled PanelGroup" eventKey="3" bsStyle="info">
              Panel 3 content
            </Panel>

            <Panel collapsible header="Panel 4 - Uncontrolled PanelGroup" eventKey="4" bsStyle="info">
              Panel 4 content
            </Panel>
          </PanelGroup>

          {/* Uncontrolled Panel group using the Accordion component */}
          <Accordion>
            <Panel collapsible header="Panel 5 - Accordion" eventKey="5" bsStyle="info">
              Panel 5 content
            </Panel>

            <Panel collapsible header="Panel 6 - Accordion" eventKey="6" bsStyle="info">
              Panel 6 content
            </Panel>
          </Accordion>

        </div>
      </div>
    );
  }
});

module.exports = Panels;
