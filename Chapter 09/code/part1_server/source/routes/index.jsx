import React from 'react';

import { Router, Route, IndexRoute } from 'react-router'
import App from '../shared/views/app';
import Error from '../shared/views/error';
import Layout from '../shared/views/layout';
import About from '../shared/views/about';
import Calculator from '../shared/views/calculator';

const routes= <Route path="/" name="Shared App" component={Layout} >
  <Route name="About" path="about" component={About} />
  <Route name="Calculator" path="calculator" component={Calculator} />
  <IndexRoute name="Welcome" component={App} />
  <Route path="*" name="Error" component={Error} />
</Route>
export { routes };
