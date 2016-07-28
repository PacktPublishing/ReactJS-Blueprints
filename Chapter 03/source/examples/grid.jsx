'use strict';
import React from 'react';
const Row = require('react-bootstrap').Row;
const Grid = require('react-bootstrap').Grid;
const Col = require('react-bootstrap').Col;

const GridExample = React.createClass({
  render: function () {
    return (
      <div>
        <h2>The grid</h2>

        <Grid fluid={true}>

          <Row>
            <Col xs={1}>1</Col>
            <Col xs={1}>1</Col>
            <Col xs={1}>1</Col>
            <Col xs={1}>1</Col>
            <Col xs={1}>1</Col>
            <Col xs={1}>1</Col>
            <Col xs={1}>1</Col>
            <Col xs={1}>1</Col>
            <Col xs={1}>1</Col>
            <Col xs={1}>1</Col>
            <Col xs={1}>1</Col>
            <Col xs={1}>1</Col>
          </Row>

          <Row>
            <Col xs={2} sm={4}>xs2 sm4</Col>
            <Col xs={4} sm={4}>xs4 sm4</Col>
            <Col xs={6} sm={4}>xs6 sm4</Col>
          </Row>

          <Row>
            <Col xs={6} sm={4} md={8} lg={2}>xs6 sm4 md8 lg2</Col>
            <Col xs={6} sm={8} md={4}>xs6 sm8 md4 lg10</Col>
          </Row>

          <Row>
            <Col xs={3} xsOffset={1}>3 offset 1</Col>
            <Col xs={7} xsOffset={1}>7 offset 1</Col>
          </Row>

          <Row>
            <Col xs={4} xsPush={1}>4 push 1 (overlaps)</Col>
            <Col xs={7} xsOffset={1}>7 offset 1</Col>
          </Row>

        </Grid>
      </div>
    );
  }
});

module.exports = GridExample;
