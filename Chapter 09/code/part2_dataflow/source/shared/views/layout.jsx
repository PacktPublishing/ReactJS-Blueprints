import React from 'react'
import { Grid, Row, Col, Nav, Navbar } from 'react-bootstrap';
import Breadcrumbs from 'react-breadcrumbs';
import Settings from '../settings';
export default class Layout extends React.Component {
  render() {
    return (
      <Grid>
        <Navbar componentClass="header"
          fixedTop inverse>
          <h1 center style={{color:"#fff"}} className="logo">
            {Settings.title}
            </h1>
          <Nav role="navigation" eventKey={0}
          pullRight>
        </Nav>
      </Navbar>
      <Breadcrumbs {...this.props} setDocumentTitle={true} />
      {this.props.children}
      <footer>
        Server-rendered Shared App
      </footer>
    </Grid>
    )
  }
}


