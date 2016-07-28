import {
  LOGIN_USER
} from '../actions/login';
import { combineReducers } from 'redux'

function user(state = {
  message: "",
  userData: {}
}, action){

  switch(action.type){
    case LOGIN_USER:
      let message;
        message=action.loginResponse.message ?
        action.loginResponse.message :
        action.loginResponse.length ? 
      "Welcome "+action.loginResponse.map((item,idx)=>{
      return item.name
      }).reduce((name)=>{return name})
      : "Invalid login";
      return {
        message: message,
        timestamp: action.timestamp
      }

      default:
        return state
  }
}

const rootReducer = combineReducers({user});

export default rootReducer

