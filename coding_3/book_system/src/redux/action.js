import React from 'react';
import { ADD_CATEGORY } from './actionType';

export const addCategory=(payload)=>({
    type: ADD_CATEGORY,
    payload,
})


