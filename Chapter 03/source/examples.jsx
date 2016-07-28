'use strict';

'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import Glyphicons from './examples/glyphicons.jsx';
import Alerts from './examples/alerts.jsx';
import GridExample from './examples/grid.jsx';
import Navigation from './examples/navigation.jsx';
import Carousels from './examples/carousels.jsx';
import Wells from './examples/wells.jsx';
import Panels from './examples/panels.jsx';
import Buttons from './examples/buttons.jsx';
import ProgressBars from './examples/progressbars.jsx';
import Images from './examples/images.jsx';
import Formfields from './examples/formfields.jsx';

import {Grid,Row,Col} from "react-bootstrap";
ReactDom.render((<Grid fluid={true}>
    <Row>
      <Col xs={12} md={12}>
        <GridExample />
      </Col>
      <Col xs={12} md={12}>
        <Alerts />
      </Col>
      <Col xs={12} md={12}>
        <Formfields />
      </Col>
      <Col xs={12} md={12}>
        <Images />
      </Col>
      <Col xs={12} md={12}>
        <Carousels />
      </Col>
      <Col xs={12} md={12}>
        <Buttons />
      </Col>
      <Col xs={12} md={12}>
        <ProgressBars />
      </Col>
      <Col xs={12} md={12}>
        <Wells />
      </Col>
      <Col xs={12} md={12}>
        <Navigation />
      </Col>
      <Col xs={12} md={12}>
        <Glyphicons />
      </Col>
    </Row>
  </Grid>),
  document.getElementById('container')
);
