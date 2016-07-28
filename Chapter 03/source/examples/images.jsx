'use strict';

import React from 'react';
import {Image,Thumbnail,Button,Grid,Row,Col} from 'react-bootstrap';
import Picture from './../components/picture';

let imgSet = [
  {media: "only screen and (max-device-width : 721px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio: 1.5), only screen and (max-device-width : 721px) and (orientation : portrait) and (min-device-pixel-ratio: 1.5), only screen and (max-width: 359px)", src: "http://placehold.it/211x311"},
  {media: "only screen  and (min-device-width: 768px)  and (max-device-width: 1024px)  and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)", src: "http://placehold.it/111x111"},
  {media: "only screen and (min-width: 650px) and (orientation: landscape)", src: "http://placehold.it/500x300"},
  {media: "only screen and (min-width: 465px) and (orientation: portrait)", src: "http://placehold.it/200x500"},
  {media: "only screen and (min-width: 465px) and (orientation: landscape)", src: "http://placehold.it/250x150"}
];
let defaultImage = {src: "http://placehold.it/100x100", alt: "The default image"};

const Images = React.createClass({
  render() {
    return (
      <div>
        <h2>Images</h2>
        <Grid fluid={true}>
          <Row>
            <Col xs={12} sm={4}>
              <Image src="http://placehold.it/140x180" portrait/>
            </Col>
            <Col xs={12} sm={4}>
              <Image src="http://placehold.it/140x180" circle/>
            </Col>
            <Col xs={12} sm={4}>
              <Image src="http://placehold.it/140x180" rounded/>
            </Col>
          </Row>


          <Row>
            <Col xs={12} sm={4}>
              <Thumbnail src="http://placehold.it/140x180">
                <h3>Thumbnail label</h3>

                <p>Description</p>

                <p>
                  <Button bsSize="large" bsStyle="danger">Button</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={4}>
              <Thumbnail src="http://placehold.it/140x180">
                <h3>Thumbnail label</h3>

                <p>Description</p>

                <p>
                  <Button bsSize="large" bsStyle="warning">Button</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={4}>
              <Thumbnail src="http://placehold.it/140x180">
                <h3>Thumbnail label</h3>

                <p>Description</p>

                <p>
                  <Button bsSize="large" bsStyle="info">Button</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Picture imgSet={imgSet} defaultImage={defaultImage} rounded />
            </Col>
          </Row>

        </Grid>


      </div>
    );
  }
});

module.exports = Images;
