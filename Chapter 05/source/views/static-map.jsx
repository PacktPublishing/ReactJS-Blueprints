'use strict';
import React from 'react';
import {render} from 'react-dom';
import Map from '../components/static-map.jsx';
import {Button} from 'react-bootstrap';
const StaticMapView = React.createClass({
  getDefaultProps(){
    return {
      provider: 'google',
      providerKey: '',
      mapType: 'static',
      lon: false,
      lat: false,
      display_name: "",
      address: {}
    }
  },
  getInitialState(){
    return {
      zoom: 8
    }
  },
  lessZoom(){
    this.setState({
      zoom: this.state.zoom>1 ?this.state.zoom-1:1
    });
  },
  moreZoom(){
    this.setState({
      zoom: this.state.zoom<18 ?this.state.zoom+1:18
    });
  },

  getHeightWidth(){
    const w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    const h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    return {w, h};
  },
  render: function () {
    return (<div>
      <Button
        onClick={this.lessZoom}
        bsStyle="primary"
        className="buttonMinus">
      -</Button>
      <Button
        onClick={this.moreZoom}
        bsStyle="primary"
        className="buttonPlus">
      +</Button>
      <Button
        onClick={this.props.goBack}
        bsStyle="success"
        className="buttonBack">
      Exit</Button>

    <div className="map-title" >
      {this.props.address.road}{", "}{this.props.address.county}
      </div>
      {this.props.lon>0?
        <Map provider={this.props.provider}
        providerKey={this.props.providerKey}
        id={this.props.provider+"-map"}
        lon={this.props.lon}
        lat={this.props.lat}
        zoom={this.state.zoom}
        height={this.getHeightWidth().h-150}
        width={this.getHeightWidth().w-150}
        />:null}
        </div>)
  }
});
export default StaticMapView;
