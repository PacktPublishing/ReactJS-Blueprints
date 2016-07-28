'use strict';

import React from 'react';
import {Carousel,CarouselItem} from 'react-bootstrap';

const Carousels = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },
  handleSelect(selectedIndex, selectedDirection) {
    this.setState({
      index: selectedIndex,
      direction: selectedDirection
    });
  },
  render() {
    return (
      <div>
        <h2>Uncontrolled Carousel</h2>
        <Carousel>
          <CarouselItem>
            <img width="100%" height={150} alt="600x150" src="http://placehold.it/600x150"/>
            <div className="carousel-caption">
              <h3>Slide label 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img width="100%" height={150} alt="600x150" src="http://placehold.it/600x150"/>
            <div className="carousel-caption">
              <h3>Slide label 2</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </CarouselItem>
        </Carousel>

        <h2>Controlled Carousel</h2>
        <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
          <CarouselItem>
            <img width="100%" height={150} alt="600x150" src="http://placehold.it/600x150"/>
            <div className="carousel-caption">
              <h3>Slide label 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img width="100%" height={150} alt="600x150" src="http://placehold.it/600x150"/>
            <div className="carousel-caption">
              <h3>Slide label 2</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </CarouselItem>
        </Carousel>

        </div>
    );
  }
});

module.exports = Carousels;
