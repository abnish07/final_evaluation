import React from 'react';
import { ADD_CATEGORY } from './actionType';
import data from '../data.json';

const initState=({
    categoryData: [ "Art & Photography", "Fiction", "Motivation", "Education", "Biography", "Ancient" ],
    isCategory: false,
    bookData: data
})

 const reducer=(state=initState, {type, payload})=>{
    console.log("category reducer", state.categoryData)
    switch(type){
        case ADD_CATEGORY:
        return(
            {
                ...state,
                isLoading: true,
                categoryData: [ ...state.categoryData, payload ]
            }
        )
       
        default: 
             return state
        
    }
}

export default reducer;