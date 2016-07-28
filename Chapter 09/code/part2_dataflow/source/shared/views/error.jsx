 import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';

export default class Error extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <h1>Error!</h1>
          </Col>
        </Row>

      {this.props.children}
      </Grid>
    )
  }
}


