'use strict';
import { fetchPostsAsync } from '../api/fetch-posts';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function fetchPostsIfNeeded(){
  return (dispatch, getState) => {
    if(getState().receivePosts && getState().receivePosts.length){
      let json=(getState().receivePosts.posts);
      return dispatch(receivePosts(json));
    }
    else return dispatch(fetchPosts());
  }
}

export function fetchPosts(){
  return dispatch => {
    return fetchPostsAsync(json =>  dispatch(receivePosts(json)));
  }
}

export function receivePosts(json){
  return {
    type: RECEIVE_POSTS,
    posts: json,
    lastUpdated: Date.now()
  }
}

