'use strict';
import {Config} from '../config.js';
//const Config = require('../config.js').Config;
//console.info(Config);
//import * as Conf from '../config.js';
//console.info(Conf);

import SearchService from './search.js';
exports.searchService = new SearchService(Config.urls.search);
