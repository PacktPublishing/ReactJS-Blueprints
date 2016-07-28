'use strict';

import config from '../config.json';
import utils from 'url';

export default class MapService {
  getMap(params) {
    let url;
    let c = config[params.provider];
    let size = [params.width, params.height].join(c.join);
    let loc = [params.lat, params.lon].join(",");

    let markers = Object.keys(c.query).length ? Object.keys(c.query).map((param)=> {
      return c.query[param];
    }).reduce((a, b)=> {
      return [a, b].join("|") + "|" + loc;
    }) : "";

    let key = c.providerKey ? "key=" + c.providerKey : "";
    let maptype = c.mapType ? "maptype=" + c.mapType : "";
    let pushpin = c.pushpin ? "pp=" + loc + ";4;A": "";
    if (markers.length) markers = "markers=" + markers;

    if(params.provider === "bing"){
      url = `${c.url}/${loc}/${params.zoom}?${maptype}&center=${loc}&size=${size}&${pushpin}&${markers}&${key}`;
    }
    else {
      url = `${c.url}?${maptype}&center=${loc}&zoom=${params.zoom}&size=${size}&${pushpin}&${markers}&${key}`;
    }
    return {
      id: params.id,
      data: {
        mapSrc: url
      }
    };
  }
}
