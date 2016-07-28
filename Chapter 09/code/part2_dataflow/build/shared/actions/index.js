'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RECEIVE_POSTS = undefined;
exports.fetchPostsIfNeeded = fetchPostsIfNeeded;
exports.fetchPosts = fetchPosts;
exports.receivePosts = receivePosts;

var _fetchPosts = require('../api/fetch-posts');

var RECEIVE_POSTS = exports.RECEIVE_POSTS = 'RECEIVE_POSTS';

function fetchPostsIfNeeded() {
  return function (dispatch, getState) {
    if (getState().receivePosts && getState().receivePosts.length) {
      var json = getState().receivePosts.posts;
      return dispatch(receivePosts(json));
    } else return dispatch(fetchPosts());
  };
}

function fetchPosts() {
  return function (dispatch) {
    return (0, _fetchPosts.fetchPostsAsync)(function (json) {
      return dispatch(receivePosts(json));
    });
  };
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json,
    lastUpdated: Date.now()
  };
}