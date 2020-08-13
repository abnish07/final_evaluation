import React from 'react';
import { ADD_CATEGORY, HANDLE_UPDATE, HANDLE_DELETE, ADD_USER_BOOK } from './actionType';

export const addCategory=(payload)=>({
    type: ADD_CATEGORY,
    payload,
})

export const addUserBook=(payload)=>({
    type: ADD_USER_BOOK,
    payload,
})

export const handleDelete=(payload)=>({
    type: HANDLE_DELETE,
    payload,
})
export const handleUpdate=(payload)=>({
    type: HANDLE_UPDATE,
    payload,
})


