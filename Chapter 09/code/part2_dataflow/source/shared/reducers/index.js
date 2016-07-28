'use strict';
import {
  RECEIVE_POSTS
} from '../actions'

function receivePosts(state = { }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts,
        lastUpdated: action.lastUpdated
      })
    default:
      return state
  }
}

export default receivePosts;

