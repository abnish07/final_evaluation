import React from 'react';
import { ADD_CATEGORY } from './actionType';
import data from '../data.json';

const initState=({
    categoryData: [],
    isCategory: false,
    bookData: data
})

 const reducer=(state=initState, {type, payload})=>{
    console.log("category", payload)
    switch(type){
        case ADD_CATEGORY:
        return(
            {
                ...state,
                isLoading: true,
                categoryData: payload
            }
        )
       
        default: 
             return state
        
    }
}

export default reducer;