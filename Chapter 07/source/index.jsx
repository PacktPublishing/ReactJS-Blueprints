import React from 'react';
import {render} from 'react-dom';
import config from './config';
import RoutesConfig from './routes';

render(
  RoutesConfig(config),
  document.getElementById('app')
);
