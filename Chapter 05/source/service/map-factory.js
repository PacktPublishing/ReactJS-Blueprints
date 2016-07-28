'use strict';

import MapService from './map-service';

const mapService = new MapService();

export default class MapFactory {
  getMap(params) {
    return mapService.getMap(params);
  }
}
