'use strict';
import path from 'path';
import express from 'express';
import compression from 'compression';
import cpFile from 'cp-file';
import errorHandler from 'express-error-handler';
import envs from 'envs';
import qs from 'qs'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, RoutingContext } from 'react-router';
import { routes } from './build/routes';
import settings from './build/shared/settings';
import ReactDOMStream from 'react-dom-stream/server';
import serveStatic from 'serve-static';
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';
const app = express();
const http = require('http');
app.set('environment', envs('NODE_ENV', process.env.NODE_ENV || 'production')); 
app.set('port', port);
app.use(compression());

cpFile('assets/app.css', 'public/assets/app.css').then(function(){
  console.log('Copied app.css');
});
app.use(serveStatic(path.join(__dirname, 'public', 'assets')));

import { Provider } from 'react-redux'
import configureStore from './build/shared/store/configureStore'
import { fetchPostsAsync } from './build/shared/api/fetch-posts'

const appRoutes = (app) => {
  app.get('*', (req, res) => {
    match({ routes, location: req.url }, (err, redirectLocation, props) => {
      if (err) {
        res.status(500).send(err.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (props) {

      fetchPostsAsync(posts => {
        // Compile an initial state
        const isFetching = false;
        const lastUpdated = Date.now()
        const initialState = {
           posts,
           isFetching,
           lastUpdated
        }
        // Create a new Redux store instance
        const store = configureStore(initialState)
        // Render the component to a string
        res.write(`<!DOCTYPE html>
          <html>
            <head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, 
                initial-scale=1, maximum-scale=1, user-scalable=no"/>
              <link async rel="stylesheet" type="text/css"
                href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
              <link async rel="stylesheet" type="text/css" 
                href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
              <link async href='https://fonts.googleapis.com/css?family=Bitter' 
                rel='stylesheet' type='text/css'/>
              <link async rel="stylesheet" href="/app.css" />
                <title>${settings.title}</title>
                </head>
                 <script>
                  window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
                 </script>
                <body><div id="app">`);
                 const stream = ReactDOMStream.renderToString(
                 <Provider store={store}>
                   <RoutingContext {...props} />
                 </Provider>);
                 stream.pipe(res, {end: false});
                 stream.on("end", ()=> {
                     res.write(`</div><script src="/bundle.js"></script></body></html>`);
                     res.end();
                 });''
               })
        } else {
        res.sendStatus(404);
      }
    });
  });
}
const router = express.Router();
appRoutes(router);
app.use(router);

const server = http.createServer(app);
app.use((err, req, res, next) => {
  console.log(err);
  next(err);
});

app.use( errorHandler({server: server}) );

app.listen(port, host, () => {
  console.log('Server started for '+settings.title+' at http://'+host+':'+port);
});
