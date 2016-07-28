'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { routes } from '../routes';

import createBrowserHistory from 'history/lib/createBrowserHistory';

if(typeof BOOTSTRAP_CLIENT_STATE !== "undefined")
console.log(BOOTSTRAP_CLIENT_STATE);


ReactDOM.render(
  <Router routes={routes} history={createBrowserHistory()} />,
  document.getElementById('app')
)

