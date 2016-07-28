'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Grid,Row,Col,Button, ButtonGroup, Alert, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import GeoService from './service/geo';
const Geo = new GeoService();
import config from './config.json';
import StaticMapView from './views/static-map.jsx';
import DynamicMapView from './views/interactive-map.jsx';

const App = React.createClass({
  getInitialState(){
    return {
      locationFetched: false,
      provider: null,
      providerKey: null,
      mapType: 'static',
      coords: {latitude: 0, longitude: 0},
      lon: 0,
      lat: 0,
      display_name: "",
      address: {},
      zoom: 8,
      serviceStatus: {up: true, e: ""},
      alertVisible: false
    }
  },
  componentDidMount(){
    if ("mark" in performance) performance.mark('fetch_start');
    this.watchPos();
  },
  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.fetchFunc);
  },
  fetchFunc(res){
    const coords = res.coords;
    if (this.state.coords.latitude !== coords.latitude &&
      this.state.coords.longitude !== coords.longitude) {
      this.setState({
        lat: coords.latitude,
        lon: coords.longitude,
        coords: coords
      });
      this.fetchReverseGeo(coords);
    }
  },
  watchPos(){
    navigator.geolocation.getCurrentPosition(this.fetchFunc, (err)=> {
      console.log(err)
    }, null);
  },
  fetchReverseGeo(coords){
    Geo.reverseGeo(coords)
      .then((data)=> {
        if (data === undefined) {
          this.setState({alertVisible: true})
        }
        else {
          let json = JSON.parse(data);

          if (json.error) {
            this.setState({alertVisible: true})
          } else {
            if ("mark" in performance)
              performance.mark("fetch_end");
            if ("measure" in performance)
              performance.measure("fetch_geo_time", "fetch_start", "fetch_end");
            this.setState({
              address: json.address,
              display_name: json.display_name,
              lat: json.lat,
              lon: json.lon,
              locationFetched: true
            });

            if ("vibrate" in navigator) navigator.vibrate(500);
          }
        }
      }).catch((e)=> {
        let message;
        if (e.message) message = e.message;
        else message = e;
        this.setState({serviceStatus: {up: false, error: message}})
      });
  },
  renderMapView(){
    return this.state.mapType === 'static' ?
      (<StaticMapView {...this.state} goBack={this.goBack}/>) :
      <DynamicMapView {...this.state} goBack={this.goBack}/>;
  },
  validateLongitude(){
    const val = this.state.lon;
    if (val > -180 && val <= 180) {
      return "success"
    } else {
      return "error";
    }
  },
  handleLongitudeChange(event){
    this.setState({lon: event.target.value});
  },
  validateLatitude(){
    const val = this.state.lat;
    if (val > -90 && val <= 90) {
      return "success"
    } else {
      return "error";
    }
  },
  handleLatitudeChange(event){
    this.setState({lat: event.target.value});
  },
  handleFetchClick(){
    this.fetchReverseGeo({latitude: this.state.lat, longitude: this.state.lon});
  },
  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },
  handleAlertShow() {
    this.setState({alertVisible: true});
  },

  goBack(){
    this.setState({provider: null});
  },

  handleSelect(e){
    switch (e.target.value) {
      case "london":
        this.fetchReverseGeo({
          latitude: 51.50722,
          longitude: -0.12750
        });
      case "dublin":
        this.fetchReverseGeo({
          latitude: 53.347205,
          longitude: -6.259113
        });
      case "barcelona":
        this.fetchReverseGeo({
          latitude: 41.386964,
          longitude: 2.170036
        });
      case "newyork":
        this.fetchReverseGeo({
          latitude: 40.723189,
          longitude: -74.003340
        });
      case "tokyo":
        this.fetchReverseGeo({
          latitude: 35.707743,
          longitude: 139.733580
        });
      case "beijing":
        this.fetchReverseGeo({
          latitude: 39.895591,
          longitude: 116.413371
        });
    }
  },
  renderButtons(){
    return (<div>
      <h2>Try a different location</h2>
      <FormGroup>
        <ControlLabel>Longitude</ControlLabel>
        <FormControl type="text"
         onChange={this.handleLongitudeChange}
         defaultValue={this.state.lon}
         placeholder="Enter longitude"
         label="Longitude"
         help="Longitude measures how far east or west of the prime
         meridian a place is located. A valid longitude is between 
         -180 and +180 degrees."
        validationState={this.validateLongitude()}
        />
        <FormControl.Feedback />
      </FormGroup>


      <FormGroup>
        <ControlLabel>Latitude</ControlLabel>
        <FormControl type="text"
         onChange={this.handleLatitudeChange}
         defaultValue={this.state.lat}
         placeholder="Enter latitude"
         label="Latitude"
         help="Latitude measures how far north or south of the equator
         a place is located. A valid longitude is between -90 and +90 
         degrees."
         validationState={this.validateLongitude()}
         />
         <FormControl.Feedback />
       </FormGroup>

       {this.state.alertVisible ?
         <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}
       dismissAfter={2500}>
       <h4>Error!</h4>

       <p>Couldn't geocode this coordinates...</p>
     </Alert> : <div/>}

     <Button bsStyle="primary"
       onClick={this.handleFetchClick}>
       Fetch new geolocation
     </Button>

     <p>(note, this will fetch the closest location based on the new
       input values)</p>
     <FormGroup>
    <FormControl componentClass="select"
      onChange={this.handleSelect}
         placeholder="select location">
         <option defaultSelected value="">Choose a location</option>
         <option value="london">London</option>
         <option value="dublin">Dublin</option>
         <option value="tokyo">Tokyo</option>
         <option value="beijing">Bejing</option>
         <option value="newyork">New York</option>
         </FormControl>
       </FormGroup>




     {/*
         <Input type="select" label="Select location"
         onChange={this.handleSelect}
         placeholder="select location">
         <option defaultSelected value="">Choose a location</option>
         <option value="london">London</option>
         <option value="dublin">Dublin</option>
         <option value="tokyo">Tokyo</option>
         <option value="beijing">Bejing</option>
         <option value="newyork">New York</option>
         </Input>
         */}
       <h2>Static maps</h2>

       <ButtonGroup block vertical>
         <Button className="map-button" bsStyle="info"
           onClick={this.setProvider.bind(null,'google','static')}>
           Open static Google Map for {this.state.address.state}{", "}
           {this.state.address.country}</Button>
         <Button className="map-button" bsStyle="info"
           onClick={this.setProvider.bind(null,'bing','static')}>
           Open Bing map for {this.state.address.state}{", "}
           {this.state.address.country}</Button>
         <Button className="map-button" bsStyle="info"
           onClick={this.setProvider.bind(null,'mapQuest','static')}>
           Open MapQuest map for {this.state.address.state}{", "}
           {this.state.address.country}</Button>
       </ButtonGroup>

       <h2>Dynamic maps</h2>
       <ButtonGroup block vertical>
         <Button className="map-button" bsStyle="primary"
           onClick={this.setProvider.bind(null,'openstreetmap','dynamic')}>
           Open dynamic Open Street Map for
           {this.state.address.county ? this.state.address.county + ", " : ""}
         {this.state.address.country}
         </Button>
       </ButtonGroup>
     </div>)
  },
  setProvider(provider, mapType){
    let providerKey = "";
    if (hasOwnProperty.call(config[provider], 'providerKey')) {
      providerKey = config[provider].providerKey;
    }
    this.setState({
      provider: provider, providerKey: providerKey,
      mapType: mapType
    });
    // provide tactile feedback if vibration is supported
    if ("vibrate" in navigator) navigator.vibrate(50);
  },
  renderError(){
    return <Row>
      <Col xs={12}>
        <h1>Error</h1>
        Sorry, but I could not serve any content. Error message: <strong>{this.state.serviceStatus.error}</strong>
      </Col>
    </Row>
  },
  renderBouncingBalls(){
    return <Row>
      <Col xs={12}>
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </Col>
    </Row>
  },
  debugPageLoadDelay(){
    return "timing" in performance ?
      <div>Page load delay experienced
        from page load start to navigation start:{" "}
        {Math.round(((performance.timing.loadEventEnd -
                      performance.timing.navigationStart) / 1000)
        * 100) / 100} seconds.</div> : <div/>
  },
  debugAPIDelay(){
    return "getEntriesByName" in performance ?
      (<div>Delay experienced fetching reverse geo
        (after navigation start):{" "}
        {Math.round((performance.getEntriesByName(
          "fetch_geo_time")[0].duration / 1000) * 100) / 100}
          {" seconds"}.</div>) : <div/>
  },
  debugFetchTime(){
    return "timing" in performance ?
      <div>Fetch Time: {performance.timing.responseEnd -
        performance.timing.fetchStart} ms.</div> : null
  },
  debugDNSLookup(){
    return "timing" in performance ?
      <div> DNS lookup: {performance.timing.domainLookupEnd -
        performance.timing.domainLookupStart} ms.</div> : null
  },
  debugConnectionLookup(){
    return "timing" in performance ?
      <div>Connection lookup: {performance.timing.connectEnd -
        performance.timing.connectStart} ms. </div> : null
  },

  renderContent(){
    return (<div>
      <Row>
        <Col xs={12}>
          <h1>Your coordinates</h1>
        </Col>
        <Col xs={12}>
          <small>Longitude:</small>
          {" "}{this.state.lon}
          {" "}
          <small>Latitude:</small>
          {" "}{this.state.lat}
          </Col>
          <Col xs={12}>
            <small>Address: </small>
            {this.state.address.county ? this.state.address.county + ", " : ""}
            {this.state.address.state ? this.state.address.state + ", " : ""}
            {this.state.address.country ? this.state.address.country : ""}
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              {this.state.provider ?
                this.renderMapView() :
                this.renderButtons()}
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                {this.state.provider ? <div/> : <div>
                  <h3>Debug information</h3>
                  {this.debugDNSLookup()}
                  {this.debugConnectionLookup()}
                  {this.debugAPIDelay()}
                  {this.debugPageLoadDelay()}
                  {this.debugFetchTime()}
                  </div>}
                  </Col>
                </Row>
              </div>);
  },
  renderGrid(content){
    return <Grid>
      {content}
      </Grid>
  },
  render() {
    if (!this.state.serviceStatus.up) {
      return this.renderGrid(this.renderError());
    }
    else if (!this.state.locationFetched) {
      return this.renderGrid(this.renderBouncingBalls());
    }
    else {
      return this.renderGrid(this.renderContent());
    }

  }
});

render(
  <App greeting="Chapter 5"/>,
    document.getElementById('app')
);
