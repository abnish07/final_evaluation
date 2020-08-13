import React from 'react';
import { FETCH_LOGIN_DATA, LOGIN_SUCCESS, LOGIN_FAIL,FETCH_REGISTRATION_DATA, REGISTRATION_SUCCESS, REGISTRATION_FAILURE } from '../auth/actionType';
import { fetchLoginData } from '../auth/action';

const initState=({
    loginData: [],
    signupData: [],
    isLogin: false,
    isSignup: false,
    isDashboard: false,
    userLoginData: [],
    token: []
})

 const reducer=(state=initState, {type, payload})=>{
    console.log("payload", payload)
    switch(type){
        case FETCH_LOGIN_DATA:
        return(
            {
                ...state,
                isLoading: true
            }
        )
        case LOGIN_SUCCESS:
        return(
            {
                ...state,
                isLoading: false,
                isLogin: true,
                loginData: payload,
                isDashboard: true,
                userLoginData: [ ...state.userLoginData, payload["config"].data ]
            }
        )
        case FETCH_REGISTRATION_DATA:
        return(
            {
                ...state,
                isSignup: true,
                signupData: payload
            }
        )
        default: 
             return state
        
    }
}

export default reducer;