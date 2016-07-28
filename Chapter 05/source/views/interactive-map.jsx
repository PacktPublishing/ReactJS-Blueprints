'use strict';
import React from 'react';
import {Button} from 'react-bootstrap';
import L from 'leaflet';

L.Icon.Default.imagePath="https://reactjsblueprints-chapter5.herokuapp.com/images";

const DynamicMapView = React.createClass({
  displayName: "Dynamic map view",
  getDefaultProps(){
    return {
      center: [59.938043, 30.337157],
      zoom: 8
    }
  },
  createMap: function (element) {
    var map = L.map(element);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    return map;
  },
  setupMap: function () {
    this.map.setView([this.props.lat, this.props.lon], this.props.zoom);
    L.marker([this.props.lat, this.props.lon]).addTo(this.map);
  },
  componentDidMount: function () {
    if (this.props.createMap) {
      this.map = this.props.createMap(this.refs.map);
    } else {
      this.map = this.createMap(this.refs.map);
    }

    this.setupMap();
  },

  getHeightWidth(){
    const w = window.innerWidth
      || document.documentElement.clientWidth
      | document.body.clientWidth;

    const h = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
    return {w: w, h: h};
  },
  render: function () {
    const style = {
      width: '95%',
      height: this.getHeightWidth().h - 200
    };
    return (<div>
      <Button
      onClick={this.props.goBack}
      className="buttonBack">
      Exit</Button>
      <div style={style} ref="map" className="map"></div>
      {navigator.battery ?
        (navigator.battery.level*100)<30 ?
          <div><strong>Note: Your battery is running low ({navigator.battery.level*100}% remaining).
              You may want to exit to the main menu and use static maps instead.</strong></div>
          :<div/>
          :<div/>
      }
    </div>);
  }
});
export default DynamicMapView;
