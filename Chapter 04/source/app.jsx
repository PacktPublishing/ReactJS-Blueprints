'use strict';
import React from 'react';
import { Router, Route, DefaultRoute } 
  from 'react-router';
import { render } from 'react-dom'
import Search from './components/search.jsx';
import Results from './components/results_pager.jsx';
import Layout from './components/layout.jsx';
import SearchActions from './actions/search.js';
import searchService from './service/index';
import { browserHistory } from 'react-router'
render((
<Router history={ browserHistory }>
  <Route component={Layout}>
    <Route path="/" component={Search}>
      <Route path="search" component={Results}/>
    </Route>
  </Route>
</Router>
), document.getElementById('container'));
