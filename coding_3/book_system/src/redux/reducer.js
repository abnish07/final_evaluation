import React from 'react';
import { ADD_CATEGORY, ADD_USER_BOOK, HANDLE_DELETE, HANDLE_UPDATE } from './actionType';
import data from '../data.json';

const initState=({
    categoryData: [ "Fiction","Art & Photography", "Motivation", "Education", "Biography", "Ancient" ],
    bookData: data,
    userBookData: [],
    selectFilterValue: "",
    isUpdate: false,
})

 const reducer=(state=initState, {type, payload})=>{
    console.log("payload ", payload)
    switch(type){
        case ADD_CATEGORY:
            alert("category added successfully")
        return(
            {
                ...state,
                categoryData: [ ...state.categoryData, payload ],
                isUpdate: false
            }
        )
        case ADD_USER_BOOK:
        return(
            {
                ...state,
                userBookData: [ ...state.userBookData, payload ],
                isUpdate: false
            }
        )
       
        case HANDLE_DELETE:
            let userData = [...state.userBookData]
            let updatedData = userData.filter(item=>item.id != payload)
        return(
            {
                ...state,
                userBookData: updatedData,
                isUpdate: false
            }
        )
        case HANDLE_UPDATE:
            const { userBookData } = state 
            let currentData = [...state.userBookData]
            let updatedItem = currentData.filter(item=>item.id === payload.id?
                (
                item.bookname= payload.bookname,
                item.author= payload.author,
                item.price= payload.price,
                item.quantity= payload.quantity,
                item.categoryName= payload.categoryName,
                item.desc= payload.desc,
                item.id= payload.id
            ):true)
                
        return(
            {
                ...state,
                userBookData: updatedItem,
                isUpdate: !state.isUpdate
            }
        )
       
        default: 
             return state
        
    }
}

export default reducer;