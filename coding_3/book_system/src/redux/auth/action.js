import React from 'react';
import { FETCH_LOGIN_DATA, LOGIN_SUCCESS, LOGIN_FAIL, FETCH_REGISTRATION_DATA, REGISTRATION_SUCCESS, REGISTRATION_FAILURE } from '../auth/actionType';
import axios from 'axios';

export const fetchLoginData=(payload)=>({
    type: FETCH_LOGIN_DATA,
    payload,
})

 export const loginSuccess=(payload)=>({
    type: LOGIN_SUCCESS,
    payload
})
 export const loginFail=(payload)=>({
    type: LOGIN_FAIL,
    payload
})
 export const fetchRegData=(payload)=>({
    type: FETCH_REGISTRATION_DATA,
    payload
})
 export const registrationSuccess=(payload)=>({
    type: REGISTRATION_SUCCESS,
    payload
})
 export const registrationFail=(payload)=>({
    type: REGISTRATION_FAILURE,
    payload
})

export const userRegistration = (query) => (dispatch) => {
    dispatch(fetchRegData());
    return axios
      .post("http://localhost:8080/auth/register", {
        email: query.email,
        name: query.name,
        password: query.password,
        mobile: query.mobile,
        description: query.desc
      })
      .then((res) => {
        console.log(res);
        return dispatch(registrationSuccess(res));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  export const userLogin = (query) => (dispatch) => {
    dispatch(fetchLoginData());
    return axios
      .post("http://localhost:8080/auth/login", {
        username: query.name,
        password: query.password
      })
      .then((loginRes) => {
        console.log("login data", loginRes);
        return dispatch(loginSuccess(loginRes));
      })
      .catch((error) => {
        console.log(error);
      });
  };
