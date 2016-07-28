'use strict';
import fetch from 'isomorphic-fetch'

export const LOGIN_USER = 'LOGIN_USER';

export function login(userData){

  const body = { username: userData.username, 
                 password: userData.password };

  const options = {headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 1234567890'
  },
  method: 'post',
  body: JSON.stringify(body)
  }

  return dispatch => {
    return fetch(`http://reactjsblueprints-useradmin.herokuapp.com/v1/login`, options)
      .then(response => response.json())
    .then(json => dispatch(setLoginDetails(json)))
  }
}
export function setLoginDetails(json){
  const loginData = {
    type: LOGIN_USER,
    loginResponse: json,
    timestamp: Date.now()
  };
  sessionStorage.setItem('login',JSON.stringify(loginData));
  return loginData;
}

