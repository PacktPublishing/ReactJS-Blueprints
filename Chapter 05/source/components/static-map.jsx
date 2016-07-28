'use strict';

import React from 'react';
import MapFactory from '../service/map-factory';
const factory = new MapFactory();
const StaticMap = React.createClass({
  getDefaultProps(){
    return {
      provider: 'openstreetmap',
      id: 'map',
      height: 270,
      width: 580,
      zoom: 10
    }
  },
  getLocation () {
    return factory.getMap({
      providerKey: this.props.providerKey,
      provider: this.props.provider,
      id: this.props.id,
      lon: this.props.lon,
      lat: this.props.lat,
      height: this.props.height,
      width: this.props.width,
      zoom: this.props.zoom
    });
  },

  render () {
    const location = this.getLocation();
    let mapSrc;
    let style;

    if (!location.data || !location.data.mapSrc) {
      return null;
    }

    mapSrc = location.data.mapSrc;

    style = {
      width: '100%',
      height: this.props.height
    };

    return (
      <div style={style} className="map-container">
        <img style={style} src={mapSrc} className="static-map" />
      </div>
    );
  }
});
export default StaticMap;
