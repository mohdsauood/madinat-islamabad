import React from 'react';
import { ADD_ITEM, REMOVE_ITEM } from '../types/types';
export default function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM: {
      console.log(state);
      console.log(action.payload);
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case REMOVE_ITEM: {
      return state.filter((item) => item.name !== action.payload);
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
