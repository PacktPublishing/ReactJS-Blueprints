import React from 'react'
import { Row, Col } from 'react-bootstrap';

export default class About extends React.Component {
  render() {
    return (
      <Row>
        <Col md={6}>
          <h2>About</h2>
          <p>
            This app is designed to work as either a client- or
            a server-rendered app. It's also designed to be 
            deployed to the cloud.
          </p>
        </Col>
      </Row>
    )
  }
}


