'use strict';
import fetch from 'isomorphic-fetch'

export function fetchPostsAsync(callback) {
  return fetch(`https://reactjsblueprints-newsapi.herokuapp.com/stories`)
      .then(response => response.json())
      .then(data => callback(data))
}
