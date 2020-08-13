import React from 'react';
import { ADD_CATEGORY, ADD_USER_BOOK, HANDLE_DELETE, HANDLE_UPDATE } from './actionType';
import data from '../data.json';

const initState=({
    categoryData: [ "Fiction","Art & Photography", "Motivation", "Education", "Biography", "Ancient" ],
    bookData: data,
    userBookData: []
})

 const reducer=(state=initState, {type, payload})=>{
    console.log("payload ", payload)
    switch(type){
        case ADD_CATEGORY:
        return(
            {
                ...state,
                isLoading: true,
                categoryData: [ ...state.categoryData, payload ]
            }
        )
        case ADD_USER_BOOK:
        return(
            {
                ...state,
                isLoading: true,
                userBookData: [ ...state.userBookData, payload ]
            }
        )
       
        case HANDLE_DELETE:
            let userData = [...state.userBookData]
            let updatedData = userData.filter(item=>item.id != payload)
        return(
            {
                ...state,
                isLoading: true,
                userBookData: updatedData
            }
        )
        case HANDLE_UPDATE:
            let currentData = [...state.userBookData]
            let item = currentData.find(item=>item.id === payload.id)

        return(
            {
                ...state,
                isLoading: true,
                userBookData: [...state.userBookData, item]
            }
        )
       
        default: 
             return state
        
    }
}

export default reducer;