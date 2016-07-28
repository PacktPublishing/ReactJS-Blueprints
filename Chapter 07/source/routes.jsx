import React from 'react';
import { createHistory } from 'history'
import { Link, Router, Route, NoMatch, IndexRoute } 
  from 'react-router'
import App from './components/app';
import Welcome from './components/welcome';
import Camera from './components/camera';
import Stream from './components/stream';
import Item from './components/item';
import config from './config';
import FBConnect from './fbconnect';

const history = createHistory()

function Routes(config) {
  return <Router history={history}>
    <Route path="/" name="Reactagram" component={FBConnect(App,config)} >
      <Route name="You" path="you" 
        component={FBConnect(Welcome,config)} />
      <Route name="Stream" path="stream" 
        component={FBConnect(Stream,config)} />
      <Route name="ItemParent" path="item" 
        component={FBConnect(Item,config)}>
        <Route name="Item" path=":key" 
         component={FBConnect(Item,config)} />
      </Route>
      <Route name="Camera" path="camera" 
        component={FBConnect(Camera,config)} />
      <IndexRoute name="Welcome" component={FBConnect(Welcome,config)} />
    </Route>
    <Route name="404: No Match for route" path="*" component={FBConnect(App,config)} />
  </Router>
}
module.exports = Routes;
