import config from '../config.json';
import utils from 'url';
const lodash = {
  pick: require('lodash.pick'),
  identity: require('lodash.identity')
};
import request from 'superagent';
class Geo {
  reverseGeo(coords) {
    const url = utils.format({
      protocol: config.openstreetmap.protocol,
      hostname: config.openstreetmap.host,
      pathname: config.openstreetmap.path,
      query: lodash.pick({
        format: config.openstreetmap.format,
        zoom: config.openstreetmap.zoom,
        addressdetails: config.openstreetmap.addressdetails,
        lat: coords.latitude,
        lon: coords.longitude
      }, lodash.identity)
    });
    const req = request.get(url)
      .timeout(config.timeout)

    return new Promise(function (resolve, reject) {
      req.end(function (err, res) {
        if (err) {
          reject(err);
        } else if (res.error) {
          reject(res.error);
        }
        else {
          try {
            resolve(res.text);
          } catch (e) {
            reject(e);
          }
        }
      });
    });
  }
}
export default Geo;
