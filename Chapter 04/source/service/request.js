'use strict';
import Agent from 'superagent';
class Request {

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(query, params) {
    return this.httpAgent(query, 'get', params, null);
  }

  post(url, params, data, options) {
    return this.httpAgent(url, 'post', params, data)
  }

  put(url, params, data) {
    return this.httpAgent(url, 'put', params, data)
  }
  httpAgent(url, httpMethod, params, data) {
    const absoluteUrl = this.baseUrl + url;
    let req = Agent[httpMethod](absoluteUrl)
      .timeout(5000);

    let token = '1234567890';

    req.set('Authorization', 'Bearer ' + token);
//    req.withCredentials();
    if (data)
      req.send(data);

    if (params)
      req.query(params);

    return this.sendAgent(req);
  }
  sendAgent(req) {
    return new Promise(function (resolve, reject) {
      req.end(function (err, res) {
        if (err) {
          reject(err);
        } else if (res.error) {
          reject(res.error);
        }
        else {
          resolve(JSON.parse(res.text));
        }
      });
    });
  }

}

module.exports = Request;
